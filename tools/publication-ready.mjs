#!/usr/bin/env node
// Structured Step 9 verdict. This does not publish: it proves that workflow-
// owned work is closed and leaves only the owner's audit/status/push decisions.
//
// The receipt also seals the run's subjects, prerequisite context and tools. The expensive final
// gates run against that sealed tree at 9-readiness-v2; terminal verification
// recomputes the digest instead of rerunning the same mathematical scans. Files
// that Step 9 creates after readiness and the context-hash acceleration cache
// that closure verification refreshes are excluded. The authoritative closure
// receipt is hashed separately below; mathematical and workflow inputs remain
// protected.

import { spawnSync } from 'node:child_process';
import { existsSync, lstatSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { REPO } from './paths.mjs';
import { protectedEntryHash, runContentHash, runScope, sha256, splitFrontmatter } from './step9-lib.mjs';
import { frontmatterList } from './frontmatter-list.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
const run = value('--run');
const root = resolve(value('--root') || REPO);
const write = argv.includes('--write');
const verify = argv.includes('--verify');
const requireReport = argv.includes('--require-report');
if (!run || write === verify) {
  console.error('usage: node tools/publication-ready.mjs --run <run> (--write|--verify) [--require-report] [--root <repo>]');
  process.exit(2);
}

const receiptRel = `research/${run}-publication-readiness.json`;
const receiptPath = join(root, receiptRel);
const artifactRels = [
  `research/${run}-pathway-closure.json`,
  `research/${run}-judge-closure.json`,
];

function protectedTreeReceipt(scope) {
  if (!scope) throw new Error('cannot seal readiness without a nonempty run scope');
  const mutableAfterReadiness = new Set([
    receiptRel,
    `research/${run}-judge-context-hashes.json`,
    `research/${run}-step9-evidence.json`,
    // Created by the final readiness gates, checked separately before commit.
    `research/${run}-proof-layout.json`,
    `research/${run}-step9-report-integrity.json`,
    `research/${run}-step9-report.response.json`,
    `research/${run}-step9-report.md`,
  ]);
  const dispatchPrefix = `research/${run}-dispatch/`;
  const files = new Set();
  const projections = new Map();
  const walk = (dir, accept = () => true) => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const absolute = join(dir, entry.name);
      const rel = relative(root, absolute).replaceAll('\\', '/');
      if (mutableAfterReadiness.has(rel) || rel.startsWith(dispatchPrefix)) continue;
      if (entry.isDirectory()) walk(absolute, accept);
      else if ((entry.isFile() || entry.isSymbolicLink()) && accept(rel)) files.add(rel);
    }
  };
  const add = file => {
    if (mutableAfterReadiness.has(file) || file.startsWith(dispatchPrefix)) return;
    const path = join(root, file);
    // lstat includes dangling links; links are sealed, never traversed.
    try { if (!lstatSync(path).isDirectory()) files.add(file); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  };
  const scalar = (fm, key) => fm.match(new RegExp(`^${key}:\\s*([^\\n]+?)\\s*$`, 'm'))?.[1]?.replace(/^['"]|['"]$/g, '');
  const itemIndex = new Map();
  const aliases = new Map();
  const identityClaims = [];
  for (const name of readdirSync(join(root, 'items')).sort()) {
    if (!name.endsWith('.md')) continue;
    const file = `items/${name}`;
    const text = readFileSync(join(root, file), 'utf8');
    let fm;
    try { fm = splitFrontmatter(text).frontmatter; } catch { continue; }
    const id = scalar(fm, 'id');
    if (!id) continue;
    itemIndex.set(id, { file, text, fm });
    const declaredAliases = frontmatterList(fm, 'aliases');
    identityClaims.push({ file, id, aliases: declaredAliases });
    for (const alias of declaredAliases) aliases.set(alias, id);
  }
  const manifests = readdirSync(join(root, 'research')).filter(name =>
    name.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length))).sort();
  if (!manifests.length) throw new Error(`cannot seal readiness: ${run} has no manifests`);
  const manifestPages = manifests.flatMap(name => {
    const rows = JSON.parse(readFileSync(join(root, 'research', name), 'utf8'));
    if (!Array.isArray(rows)) throw new Error(`invalid readiness manifest ${name}`);
    add(`research/${name}`);
    return rows;
  });
  const manifestItems = manifestPages.flatMap(page => (page.items ?? []).map(item => typeof item === 'string' ? item : item.id));
  if (!manifestItems.length || manifestItems.some(id => !/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id ?? '')))
    throw new Error(`cannot seal readiness: ${run} has no valid populated manifest scope`);
  // Seal both promised and currently manifested subjects; disagreement is a
  // native scope gate failure, never grounds for silently dropping either set.
  const items = new Set([...scope.items.map(row => row.id), ...manifestItems]);
  const formalInputs = new Set();
  const collectFormalInputs = (value, field = '') => {
    if (typeof value === 'string' && /^(?:source|source_item|supplier_item|dependency_item|input|inputs|deps|justified_by)$/.test(field)) {
      const id = value.replace(/^items\//, '').replace(/\.md$/, '');
      const canonical = itemIndex.has(id) ? id : aliases.get(id);
      if (canonical) formalInputs.add(canonical);
    } else if (Array.isArray(value)) for (const row of value) collectFormalInputs(row, field);
    else if (value && typeof value === 'object') for (const [key, row] of Object.entries(value)) collectFormalInputs(row, key);
  };
  collectFormalInputs(manifestPages);
  for (const name of [`${run}-proof-contracts.json`, ...manifests.map(name => name.replace(/\.pages\.json$/, '.proof-contracts.json'))]) {
    const path = join(root, 'research', name);
    if (!existsSync(path)) continue;
    const contracts = JSON.parse(readFileSync(path, 'utf8')).contracts;
    for (const [id, contract] of Object.entries(contracts ?? {})) if (items.has(id)) collectFormalInputs(contract);
  }
  for (const id of formalInputs) items.add(id);
  const linkTargets = new Set();
  const queue = [...items];
  for (let i = 0; i < queue.length; i++) {
    const row = itemIndex.get(queue[i]);
    if (!row) throw new Error(`readiness prerequisite ${queue[i]} has no item`);
    add(row.file);
    for (const match of row.text.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) linkTargets.add(match[1].trim());
    const references = [...frontmatterList(row.fm, 'deps'), ...frontmatterList(row.fm, 'justified_by')];
    // Formal statement/definition/fact/proof uses remain substantive context
    // even when an author omitted the supplier from YAML. Native declaration
    // checks still reject that omission; this seal cannot waive source changes.
    for (const section of row.text.split(/^##\s+/m).slice(1)) {
      const heading = section.slice(0, section.indexOf('\n')).trim();
      if (/^(?:Statement|Definition|Facts|Given|Proof)(?:\b|$)/i.test(heading))
        for (const match of section.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) references.push(match[1].trim());
    }
    for (const reference of references) {
      const id = itemIndex.has(reference) ? reference : aliases.get(reference);
      // Page links are handled below; unresolved item uses remain native gate errors.
      if (id && !items.has(id)) { items.add(id); queue.push(id); }
    }
  }
  const planFile = 'research/plan-spec.json';
  const plan = JSON.parse(readFileSync(join(root, planFile), 'utf8'));
  const pages = new Set([...scope.pages.map(row => row.id), ...manifestPages.map(row => row.id)]);
  const pageIndex = new Map();
  const homes = [];
  const linkHomes = [];
  const resolvedLinks = new Set([...linkTargets].map(id => itemIndex.has(id) ? id : aliases.get(id)).filter(Boolean));
  walk(join(root, 'library'), file => {
    if (!file.endsWith('.md') || file.split('/').at(-1).startsWith('_')) return false;
    let fm;
    try { fm = splitFrontmatter(readFileSync(join(root, file), 'utf8')).frontmatter; } catch { return false; }
    const id = scalar(fm, 'page');
    if (!id) return false;
    const membership = [...frontmatterList(fm, 'items'), ...frontmatterList(fm, 'examples')].filter(id => items.has(id));
    const linkMembership = [...frontmatterList(fm, 'items'), ...frontmatterList(fm, 'examples')].filter(id => resolvedLinks.has(id));
    pageIndex.set(id, { file, fm });
    if (membership.length) { pages.add(id); homes.push({ file, id, items: membership }); }
    if (linkMembership.length) linkHomes.push({ file, id, items: linkMembership });
    return false;
  });
  for (const row of plan.pages) if ((row.items ?? []).some(item => items.has(typeof item === 'string' ? item : item.id))) pages.add(row.id);
  const pageQueue = [...pages];
  for (let i = 0; i < pageQueue.length; i++) {
    const id = pageQueue[i];
    const physical = pageIndex.get(id);
    if (physical) add(physical.file);
    const planned = plan.pages.filter(row => row.id === id);
    const requires = [...planned.flatMap(row => row.requires ?? []), ...manifestPages.filter(row => row.id === id).flatMap(row => row.requires ?? []),
      ...(physical ? frontmatterList(physical.fm, 'requires') : [])];
    for (const requirement of requires) if (!pages.has(requirement)) { pages.add(requirement); pageQueue.push(requirement); }
  }
  for (const row of scope.pages) add(row.file);
  for (const file of scope.pathwayFiles) add(file);
  // Keep every relevant plan row (including duplicate declarations), with exact
  // row fields. Other frontiers' prose notes and metadata are not run inputs.
  projections.set(planFile, JSON.stringify({ pages: plan.pages.filter(row => pages.has(row.id)) }));
  projections.set('library#relevant-item-homes', JSON.stringify(homes.sort((a, b) => a.file.localeCompare(b.file))));
  projections.set('items#relevant-aliases', JSON.stringify([...aliases].filter(([alias, id]) => items.has(id) || items.has(alias)).sort()));
  projections.set('items#relevant-identity-claims', JSON.stringify(identityClaims.filter(row =>
    items.has(row.id) || linkTargets.has(row.id) || row.aliases.some(alias => items.has(alias) || linkTargets.has(alias)))));
  // A bare prose link needs identity and home resolution, not certification of
  // the linked item's proof. Logical deps/justified_by above retain full bytes.
  projections.set('items#prose-link-resolution', JSON.stringify([...linkTargets].sort().map(target => {
    const id = itemIndex.has(target) ? target : aliases.get(target);
    const row = itemIndex.get(id);
    return { target, id: id ?? null, file: row?.file ?? null, page_file: pageIndex.get(target)?.file ?? null, kind: row ? scalar(row.fm, 'kind') : null,
      aliases: [...aliases].filter(([alias]) => alias === target).map(([alias, id]) => ({ alias, id })) };
  })));
  projections.set('library#prose-link-homes', JSON.stringify(linkHomes.sort((a, b) => a.file.localeCompare(b.file))));

  // Native workflow inputs, rather than every owner diagnostic bearing RUN.
  const native = /^(?:batch-\d+\.(?:pages|contracts|proof-contracts|coverage|cross-batch-dependencies)\.json|(?:scope-ledger|selection|covers|cross-batch-dependencies|cross-group-edges|drift-evidence|audit-manifest|audit-coverage|spine-audit|proof-contracts|impact(?:-5b)?|touches|judge(?:-adjudications|-attempts|-stamps|-closure)?|pathway(?:-closure)?|splice-\d+|splice-refusals|step3-auditor-(?:baseline|certifications)|step5-(?:closure|blockers|auditor-baseline|auditor-certifications)|5b-verdicts|step7-(?:scope|alerts|alert-decisions|auditor-baseline)|step8-(?:changes(?:\.pages)?|scope-delta|judge-closure|judge-stamps|auditor-baseline|auditor-certifications)|closeout-scope)\.(?:json|jsonl)|(?:reader(?:-findings)?-\d+|refute-\d+|alpha-batch-\d+-5a(?:-decisions)?)\.(?:json|md)|owner-authoring-direction\.md)$/;
  for (const name of readdirSync(join(root, 'research'))) {
    if (name.startsWith(`${run}-`) && native.test(name.slice(run.length + 1))) add(`research/${name}`);
  }
  for (const suffix of ['obligations.jsonl', 'step7-terminal-resolutions.jsonl', 'step7-owner-prerequisite-repairs.jsonl', 'step7-auditor-certifications.json'])
    add(`research/${run}-${suffix}`);
  for (const id of manifestItems) for (const stage of ['3a', '3b']) for (const role of ['owner', 'review'])
    add(`research/${run}-step${stage}-${role}-${id}.json`);
  walk(join(root, 'research', `${run}-step7-v2`));
  for (const dir of ['tools', 'briefs']) walk(join(root, dir));
  for (const file of ['CLAUDE.md', 'AGENTS.md', 'README.md', 'SCHEMA.md', 'WORKFLOW.md', 'autopilot.config.json', '.gitignore',
    'package.json', 'package-lock.json', 'pnpm-lock.yaml', 'tsconfig.json', 'research/b-leaf-legacy-allowlist.json']) add(file);

  const relevantIds = new Set([...items, ...pages]);
  const relevant = value => {
    const text = String(value ?? '');
    return text.includes(run) || [...text.matchAll(/[a-z][a-z0-9]*(?:-[a-z0-9]+)+/g)].some(match => relevantIds.has(match[0]));
  };
  const defectFile = 'research/defect-ledger.jsonl';
  const defectLines = readFileSync(join(root, defectFile), 'utf8').split('\n').filter(line => line.trim());
  // Parse every row: malformed shared input remains a global/runtime error.
  const retained = defectLines.filter(line => { const row = JSON.parse(line); return row.run === run || relevant(JSON.stringify(row.subject)); });
  projections.set(defectFile, retained.join('\n'));
  const publishedFile = 'research/published-consumer-supplier-ledger.md';
  const markdownProjection = text => text.split(/\n\s*\n/).flatMap(block =>
    block.trimStart().startsWith('|') ? block.split('\n').filter(relevant) : relevant(block) ? [block] : []).join('\n\n');
  projections.set(publishedFile, markdownProjection(readFileSync(join(root, publishedFile), 'utf8')));

  // Follow exact existing local evidence/source references from native carriers
  // and relevant ledger records; newly added unattached diagnostics do not seal.
  const seen = new Set();
  const follow = text => {
    for (const match of text.matchAll(/(?:research|briefs)\/[a-zA-Z0-9_./-]+\.(?:jsonl|json|md|pdf|txt|mjs|mts)/g)) {
      const file = match[0];
      if (file.includes('/../') || projections.has(file) || mutableAfterReadiness.has(file) || file.startsWith(dispatchPrefix)) continue;
      const path = join(root, file);
      if (file.startsWith('research/') && !file.startsWith(`research/${run}-`) && existsSync(path) && lstatSync(path).isFile()
        && /\.(?:jsonl|json|md)$/.test(file)) {
        const source = readFileSync(path, 'utf8');
        let projection;
        if (file.endsWith('.jsonl')) {
          projection = source.split('\n').filter(line => line.trim()).filter(line => { JSON.parse(line); return relevant(line); }).join('\n');
        } else if (file.endsWith('.json')) {
          // External review bundles often contain many unrelated item records.
          // Preserve common scalar metadata and only relevant structured rows.
          const project = value => {
            if (Array.isArray(value)) return value.filter(row => relevant(JSON.stringify(row))).map(project);
            if (value && typeof value === 'object') {
              // A relevant record is atomic: every field, hash and premise is
              // retained. Only enclosing bundles get a record projection.
              if (['id', 'item', 'subject', 'item_id', 'consumer', 'supplier'].some(key => relevant(value[key]))) return value;
              return Object.fromEntries(Object.entries(value).filter(([key, row]) =>
                ['schema', 'version', 'run', 'mode'].includes(key) || relevant(key) || relevant(JSON.stringify(row)))
                .map(([key, row]) => [key, row && typeof row === 'object' ? project(row) : row]));
            }
            return value;
          };
          const parsed = JSON.parse(source);
          if (!relevant(source)) continue;
          projection = JSON.stringify(project(parsed));
        } else projection = markdownProjection(source);
        if (projection) projections.set(file, projection);
      } else add(file);
    }
  };
  // Shared ledgers retain relevant historical records, but their old linked
  // review archives are not current prerequisite certification inputs. Native
  // run carriers below seal the actual external evidence they consume.
  const followedProjections = new Set(projections.keys());
  for (;;) {
    const pending = [...files].filter(file => !seen.has(file));
    const projected = [...projections].filter(([file]) => !followedProjections.has(file));
    if (!pending.length && !projected.length) break;
    for (const [file, value] of projected) { followedProjections.add(file); follow(value); }
    for (const file of pending) {
      seen.add(file);
      if (file.startsWith('research/') && /\.(?:jsonl|json|md|txt)$/.test(file) && lstatSync(join(root, file)).isFile()) follow(readFileSync(join(root, file), 'utf8'));
    }
  }
  for (const file of projections.keys()) files.delete(file);
  const physical = [...files].sort();
  const projectionHash = (file, value) => {
    const path = join(root, file);
    const carrier = file.includes('#') ? 'derived-index' : lstatSync(path).isSymbolicLink()
      ? `symlink\0${protectedEntryHash(path)}` : 'file';
    return sha256(`projection-v1\0${carrier}\0${value}`);
  };
  const rows = [...physical.map(file => `${file}\0${protectedEntryHash(join(root, file))}`),
    ...[...projections].map(([file, value]) => `${file}\0${projectionHash(file, value)}`)].sort();
  return { protected_tree_scope: 'frontier-prerequisite-context-v1', protected_tree_files: rows.length,
    protected_tree_paths: physical, protected_tree_projections: [...projections.keys()].sort(),
    protected_tree_sha256: sha256(rows.join('\n')) };
}

const blockers = [];
for (const file of artifactRels) if (!existsSync(join(root, file))) blockers.push(`missing ${file}`);

function runCheck(label, args) {
  const result = spawnSync(process.execPath, args, { cwd: root, encoding: 'utf8' });
  if (result.status !== 0) blockers.push(`${label}: ${(result.stderr || result.stdout).trim().split('\n').slice(-3).join(' ')}`);
}
if (!blockers.length && write) {
  runCheck('pathway closure', ['tools/pathway-closure.mjs', 'check', '--run', run]);
}

let scope;
try { scope = runScope(run, root); } catch (error) { blockers.push(String(error.message ?? error)); }
// Reused published files retain owner-approved status; new publication still
// fails. The scope pins an exact pre-run commit; dates cannot establish history.
const git = (...args) => spawnSync('git', args, { cwd: root, encoding: 'utf8' });
const baseline = scope && JSON.parse(readFileSync(join(root, scope.ledger), 'utf8')).baseline_commit;
const publishedBaseline = typeof baseline === 'string' && /^[a-f0-9]{40,64}$/.test(baseline)
  && git('merge-base', '--is-ancestor', baseline, 'HEAD').status === 0 ? baseline : null;
if (scope) {
  for (const row of [...scope.pages, ...scope.items]) {
    const { frontmatter } = splitFrontmatter(readFileSync(join(root, row.file), 'utf8'));
    // YAML permits either a plain or quoted scalar here. Authoring templates
    // use both forms, so compare the decoded scalar rather than its spelling.
    const status = frontmatter.match(/^status:\s*(\S+)\s*$/m)?.[1]
      ?.replace(/^['"]|['"]$/g, '');
    if (status === 'published' && publishedBaseline) {
      const prior = git('show', `${publishedBaseline}:${row.file}`);
      if (prior.status === 0) {
        const fm = splitFrontmatter(prior.stdout).frontmatter;
        const key = row.file.startsWith('items/') ? 'id' : 'page';
        const identity = fm.match(new RegExp(`^${key}:\\s*([^\\n]+?)\\s*$`, 'm'))?.[1]?.replace(/^['"]|['"]$/g, '');
        if (identity === row.id && /^status:\s*published\s*$/m.test(fm)) continue;
      }
    }
    if (status !== 'draft') blockers.push(`${row.file}: expected status:draft pending owner approval, found ${status ?? 'missing'}`);
  }
}

const inputHashes = Object.fromEntries(artifactRels.filter((file) => existsSync(join(root, file)))
  .map((file) => [file, sha256(readFileSync(join(root, file)))]));
const treeReceipt = protectedTreeReceipt(scope);
const expected = {
  schema: 2,
  run,
  verdict: blockers.length ? 'blocked' : 'publishable-pending-owner-approval',
  workflow_owned_blockers: blockers,
  content_sha256: scope ? runContentHash(run, root) : null,
  input_sha256: inputHashes,
  published_baseline_commit: publishedBaseline,
  ...treeReceipt,
  owner_actions_remaining: ['personal mathematical audit', 'deliberate status:published changes', 'push/deployment'],
};

if (write) {
  writeFileSync(receiptPath, JSON.stringify({ ...expected, generated_at: new Date().toISOString() }, null, 2) + '\n');
} else {
  if (!existsSync(receiptPath)) blockers.push(`missing ${receiptRel}`);
  else {
    const saved = JSON.parse(readFileSync(receiptPath, 'utf8'));
    for (const key of ['schema', 'run', 'verdict', 'content_sha256', 'published_baseline_commit', 'protected_tree_scope', 'protected_tree_files', 'protected_tree_sha256']) {
      if (saved[key] !== expected[key]) blockers.push(`${receiptRel}: ${key} is stale`);
    }
    if (JSON.stringify(saved.input_sha256) !== JSON.stringify(expected.input_sha256)) blockers.push(`${receiptRel}: input hashes are stale`);
    if ((saved.workflow_owned_blockers ?? []).length) blockers.push(`${receiptRel}: saved verdict contains open blockers`);
  }
  if (requireReport && !existsSync(join(root, 'research', `${run}-step9-report.md`))) {
    blockers.push(`missing research/${run}-step9-report.md`);
  }
}

for (const blocker of blockers) console.error(`publication-ready: ${blocker}`);
if (blockers.length) process.exit(1);
console.log(`publication-ready: ${run} is publishable pending owner approval; 0 workflow-owned blockers; ${treeReceipt.protected_tree_files} protected files sealed`);
