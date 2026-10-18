import { createHash } from 'node:crypto';
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { split, yaml } from '../../pathway-lib.mjs';
import { dependencyLevels, runPages } from '../../item-dependency-levels.mjs';
import { writeManifests, packBatches } from '../../plan-manifests.mjs';
import { writeBatchDependencyLevels } from '../../batch-dependency-levels.mjs';
import { AUDIT_REVISION } from './audit-policy.mts';
import { MAX_RUN_PAIRS } from './capacity.mjs';

export const sha256 = (text: string | Buffer) => createHash('sha256').update(text).digest('hex');
export function identity(value: string): string {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(value ?? '')) throw Error('Invalid category/run identity');
  return value;
}
export const auditDir = (root: string, run: string) => join(root, 'research', `${identity(run)}-audit`);
export const readJSON = (path: string) => JSON.parse(readFileSync(path, 'utf8'));
export function writeJSON(path: string, value: any) {
  mkdirSync(resolve(path, '..'), { recursive: true });
  writeFileSync(path, JSON.stringify(value, null, 2) + '\n', { flag: 'wx' });
}
export function command(root: string, argv: string[]) {
  const result = spawnSync(argv[0], argv.slice(1), { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  if (result.error || result.status !== 0) throw Error(`${argv.join(' ')}: ${result.error?.message ?? result.stderr ?? result.stdout}`);
  return result.stdout.trim();
}
export function carrier(root: string, path: string) {
  const full = resolve(root, path);
  if (realpathSync(full) !== full || !lstatSync(full).isFile()) throw Error(`Not a regular source: ${path}`);
  const text = readFileSync(full, 'utf8');
  const { fm, body } = split(text);
  if (!fm) throw Error(`Missing frontmatter: ${path}`);
  const doc = yaml().parseDocument(fm, { uniqueKeys: true });
  if (doc.errors.length) throw Error(`${path}: ${doc.errors.map(e => e.message).join('; ')}`);
  const data = doc.toJS();
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw Error(`Invalid frontmatter: ${path}`);
  return { path, text, body, doc, data };
}

// Actual page inventories are the authority, rather than potentially stale
// planned item lists. Incomplete or unbuilt pairs are explicitly reported.
export function selectPublished(root: string, category: string) {
  identity(category);
  const plan = readJSON(join(root, 'research/plan-spec.json'));
  const byId = new Map<string, any>();
  for (const row of plan.pages) {
    if (byId.has(row.id)) throw Error(`Ambiguous planned page: ${row.id}`);
    byId.set(row.id, row);
  }
  const selected: any[] = [], skipped: any[] = [], duplicatePlacements: any[] = [], seen = new Set<string>();
  const plannedHomes = new Map<string, string[]>();
  for (const p of plan.pages) for (const item of p.items ?? []) {
    const id = typeof item === 'string' ? item : item.id;
    plannedHomes.set(id, [...(plannedHomes.get(id) ?? []), p.id]);
  }
  const aPages = plan.pages.filter(p => p.category === category && p.kind === 'A')
    .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
  for (const a of aPages) {
    const b = byId.get(a.companion ?? `${a.id}-examples`);
    if (!b || b.category !== category || b.kind !== 'B' || b.companion && b.companion !== a.id)
      throw Error(`Invalid planned pair: ${a.id}`);
    const pair: any[] = [];
    for (const p of [a, b]) {
      identity(p.id);
      const path = `library/${category}/${p.id}.md`;
      if (!existsSync(join(root, path))) { pair.push(null); continue; }
      const source = carrier(root, path);
      if (source.data.page !== p.id) throw Error(`Page identity mismatch: ${path}`);
      pair.push(source);
    }
    if (pair.some(p => p?.data.status !== 'published')) {
      skipped.push({ pair: a.id, reason: 'Both A and B must already be published',
        statuses: pair.map(p => p?.data.status ?? 'absent') });
      continue;
    }
    for (let index = 0; index < pair.length; index++) {
      const source = pair[index], p = [a, b][index];
      const ids: string[] = [];
      for (const key of ['items', 'examples']) {
        const list = source.data[key];
        if (!Array.isArray(list) || list.some(id => typeof id !== 'string')) throw Error(`${source.path}: invalid ${key}`);
        ids.push(...list);
      }
      if (!ids.length) throw Error(`Empty published page: ${p.id}`);
      const items = ids.filter(id => {
        const homes = plannedHomes.get(id) ?? [];
        const companionHome = homes.length === 1 && [a.id, b.id].includes(homes[0]) && homes[0] !== p.id
          && [...pair[[a.id, b.id].indexOf(homes[0])].data.items, ...pair[[a.id, b.id].indexOf(homes[0])].data.examples].includes(id);
        if (companionHome || seen.has(id)) {
          duplicatePlacements.push({ page: p.id, id, retained_on: companionHome ? homes[0] : selected.find(page => page.items.some(item => item.id === id))?.id });
          return false;
        }
        return true;
      }).map(id => {
        identity(id);
        if (seen.has(id)) throw Error(`Duplicate item within page: ${id}`);
        seen.add(id);
        const item = carrier(root, `items/${id}.md`), fm = item.data;
        if (fm.id !== id || fm.status !== 'published' || !item.body.trim()) throw Error(`Not a complete published item: ${id}`);
        if (!Array.isArray(fm.deps) || fm.deps.some(dep => typeof dep !== 'string')) throw Error(`${id}: invalid deps`);
        const planned = (p.items ?? []).find(i => i.id === id);
        const statement = item.body.match(/^## (?:Definition|Statement|Statement refuted|Example|Open problem)\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m)?.[1]?.trim();
        return { id, kind: fm.kind, title: fm.title, statement: statement || planned?.statement || item.body.trim(),
          deps: fm.deps, ...(fm.justified_by ? { justified_by: fm.justified_by } : {}),
          ...(fm.forward_refs ? { forward_refs: fm.forward_refs } : {}) };
      });
      selected.push({ ...p, title: source.data.title, items });
    }
  }
  // A published page omitted from the canonical A/B plan must not disappear.
  const known = new Set(plan.pages.filter(p => p.category === category).map(p => p.id));
  const directory = join(root, 'library', category);
  if (!existsSync(directory)) throw Error(`Unknown category: ${category}`);
  for (const name of readdirSync(directory).filter(n => n.endsWith('.md') && !n.startsWith('_'))) {
    const source = carrier(root, `library/${category}/${name}`);
    if (source.data.status === 'published' && !known.has(source.data.page)) throw Error(`Published page missing from plan: ${name}`);
  }
  return { category, pages: selected, skipped, duplicatePlacements, pairs: selected.length / 2, items: seen.size };
}

export function origin(root: string, run: string) {
  const value = readJSON(join(auditDir(root, run), 'origin.json'));
  if (value.version !== 1 || value.kind !== 'published-math-category-audit' || value.run !== run
    || value.workflowRevision !== AUDIT_REVISION || value.sol61_effort !== 'medium' || realpathSync(root) !== value.workspace
    || command(root, ['git', 'symbolic-ref', '--short', 'HEAD']) !== 'main') throw Error('Audit requires its original checkout on main');
  command(root, ['git', 'merge-base', '--is-ancestor', value.baseline_commit, 'HEAD']);
  identity(value.category);
  if (!Array.isArray(value.originals) || !value.originals.length) throw Error('Empty original audit scope');
  const seen = new Set();
  for (const row of value.originals) {
    if (seen.has(row.path) || !/^(items\/[a-zA-Z0-9_-]+\.md|library\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\.md)$/.test(row.path)
      || row.archive !== `research/${run}-audit/originals/${row.path}`) throw Error('Invalid original archive path');
    seen.add(row.path);
    const old = carrier(root, row.archive);
    if (sha256(old.text) !== row.sha256 || old.data.status !== 'published') throw Error(`Original publication archive changed: ${row.path}`);
  }
  return value;
}

// Planning archives source bytes and creates manifests only. It never changes
// published source/status/verification or controls another native run.
export function planAudit(root: string, seed: any) {
  const { run, category } = seed;
  identity(run); identity(category);
  if (command(root, ['git', 'symbolic-ref', '--short', 'HEAD']) !== 'main') throw Error('Audit planning requires main');
  if (readdirSync(join(root, 'research')).some(n => n.startsWith(`${run}-`)) || existsSync(join(root, '.autopilot', run)))
    throw Error('Run already has artifacts; use a new run identity');
  const selected = selectPublished(root, category);
  if (!selected.pairs) throw Error('No complete published A/B pairs in this category');
  if (selected.pairs > MAX_RUN_PAIRS) throw Error(`Category has ${selected.pairs} pairs; native capacity is ${MAX_RUN_PAIRS}. Explicitly split its approved scope before planning.`);
  const graph = dependencyLevels(selected.pages, { validateLabels: false });
  if (graph.errors.length) throw Error(graph.errors.join('\n'));
  for (const page of selected.pages) for (const item of page.items) item.dependency_level = graph.levels.get(item.id);
  // Bound actual current published bytes, including any pre-existing edits.
  const originals = selected.pages.flatMap(p => [`library/${p.category}/${p.id}.md`, ...p.items.map(i => `items/${i.id}.md`)])
    .map(path => ({ path, archive: `research/${run}-audit/originals/${path}`, source: carrier(root, path) }));
  const pagesById = new Map(selected.pages.map(p => [p.id, p]));
  const groups = packBatches(root, selected.pages.filter(p => p.kind === 'A').map(p => p.id), { cap: 1 });
  const written = writeManifests(root, run, groups);
  for (const row of written) {
    const path = join(root, `research/${run}-batch-${row.batch}.pages.json`);
    const pages = readJSON(path).map(p => ({ ...p, items: pagesById.get(p.id).items }));
    writeFileSync(path, JSON.stringify(pages, null, 2) + '\n');
  }
  for (const row of originals) {
    mkdirSync(resolve(root, row.archive, '..'), { recursive: true });
    writeFileSync(join(root, row.archive), row.source.text, { flag: 'wx' });
  }
  const record = { ...seed, version: 1, kind: 'published-math-category-audit', workflowRevision: AUDIT_REVISION,
    baseline_commit: command(root, ['git', 'rev-parse', 'HEAD']), sol61_effort: 'medium',
    workspace: realpathSync(root), createdAt: new Date().toISOString(), pairs: selected.pairs,
    pages: selected.pages.map(p => p.id), items: [...graph.items.keys()], skipped: selected.skipped, duplicate_placements: selected.duplicatePlacements,
    historical_execution_coverage_adopted: false, publication_authorized: false,
    originals: originals.map(r => ({ path: r.path, archive: r.archive, sha256: sha256(r.source.text) })) };
  writeJSON(join(auditDir(root, run), 'origin.json'), record);
  writeBatchDependencyLevels(root, run);
  command(root, ['node', 'tools/manifest-integrity.mjs', '--run', run, '--write-ledger', '--allow-in-run-dependencies']);
  writeJSON(join(root, 'research', `${run}-closeout-scope.json`), { version: 1, run, authorized_by: 'owner',
    authorization: 'Owner-requested published-category audit on main: own the selected existing pages/items and their native audit evidence, retaining publication. No push or new publication is authorized.', additional_paths: [] });
  writeJSON(join(root, '.autopilot', run, 'config.json'), { run, stages: 'tools/autopilot/stages/mathlib.audit.mts' });
  return record;
}

export function checkAuditScope(root: string, run: string) {
  const record = origin(root, run), pages = runPages(root, run);
  const currentPages = new Set(pages.map(p => p.id)), currentItems = new Set(pages.flatMap(p => p.items.map(i => i.id)));
  if (!pages.length || currentPages.size !== pages.length || currentItems.size !== pages.reduce((n, p) => n + p.items.length, 0)
    || record.pages.some(id => !currentPages.has(id)) || record.items.some(id => !currentItems.has(id)))
    throw Error('Audit inventory was dropped or has ambiguous ownership');
  if (pages.some(p => p.category !== record.category || !['A', 'B'].includes(p.kind))) throw Error('Audit category changed');
  return { record, pages };
}
