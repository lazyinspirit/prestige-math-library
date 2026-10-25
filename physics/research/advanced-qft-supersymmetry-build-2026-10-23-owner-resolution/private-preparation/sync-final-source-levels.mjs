import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, lstatSync, realpathSync, renameSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { runPages, dependencyLevels } from '../../../../tools/physics-support/item-dependency-levels.mjs';
import { splitFrontmatter } from '../../../../tools/physics-support/facts-block.mjs';
import { yaml } from '../../../../tools/physics-support/pathway-lib.mjs';
if (!process.argv.includes('--apply-root-reviewed-drained')) throw Error('Explicit Root reviewed source-drainage invocation required');
const root = process.cwd(), run = 'advanced-qft-supersymmetry-build-2026-10-23';
const dir = `research/${run}-owner-resolution/root-analytic-integration-20261023/global-level-sync`;
const sha = b => createHash('sha256').update(b).digest('hex');
function drained() {
  const s = JSON.parse(readFileSync(`.physics-autopilot/${run}/state.json`, 'utf8'));
  if (!s.paused || s.stage !== '1-scaffold' || s.finishedAt || Object.values(s.dispatches ?? {}).some(x => x.startedAt && !x.endedAt) || (s.nativeRefreshes ?? []).some(x => x.requestedAt && !x.completedAt)) throw Error('Native run not paused/drained');
}
drained();
if (existsSync(dir)) throw Error('Preserve prior archive');
const pages = runPages(root, run), graph = dependencyLevels(pages, { validateLabels: false });
if (graph.errors.length || graph.items.size !== 442 || pages.length !== 138) throw Error(JSON.stringify(graph.errors));
const files = readdirSync('research').filter(n => new RegExp('^' + run + '-batch-\\d+\\.pages\\.json$').test(n));
if (files.length !== 69) throw Error('Incomplete run scope');
const inputs = new Map(), outputs = new Map(), rows = [];
const watch = p => { const b = readFileSync(p); inputs.set(p, b); return b; };
const plan = watch('research/plan-spec.json');
for (const name of files) {
  const p = 'research/' + name, raw = watch(p), doc = JSON.parse(raw); let changed = false;
  for (const page of doc) for (const item of page.items) {
    const expected = graph.levels.get(item.id);
    if (item.dependency_level !== expected) { rows.push({ item: item.id, manifest: p, before: item.dependency_level, after: expected }); item.dependency_level = expected; changed = true; }
  }
  if (changed) outputs.set(p, Buffer.from(JSON.stringify(doc, null, 2) + '\n'));
}
for (const [id, { item }] of graph.items) {
  const p = 'items/' + id + '.md';
  if (!lstatSync(p).isFile() || realpathSync(p) !== join(root, p)) throw Error('Unsafe source ' + id);
  const raw = watch(p), text = raw.toString(), parts = splitFrontmatter(text), fm = yaml().parse(parts.fm), expected = graph.levels.get(id);
  if (fm.id !== id || fm.status !== 'draft' || !isDeepStrictEqual([...(fm.deps ?? [])].sort(), [...item.deps].sort()) || !isDeepStrictEqual(fm.dependency_roles, item.dependency_roles)) throw Error('Source/manifest mismatch ' + id);
  if ((parts.fm.match(/^dependency_level:[^\n]*$/gm) ?? []).length !== 1) throw Error('Exact level field absent ' + id);
  if (fm.dependency_level !== expected) {
    const next = text.replace(/^---\r?\n([\s\S]*?)\r?\n---/, block => block.replace(/^dependency_level:[^\n]*$/m, 'dependency_level: ' + expected));
    if (splitFrontmatter(next).body !== parts.body) throw Error('Mathematical body changed ' + id);
    outputs.set(p, Buffer.from(next));
  }
}
mkdirSync(dir, { recursive: true });
for (const [p] of outputs) { const q = dir + '/preimages/' + p; mkdirSync(q.slice(0, q.lastIndexOf('/')), { recursive: true }); writeFileSync(q, inputs.get(p)); }
for (const [p, b] of inputs) if (!readFileSync(p).equals(b)) throw Error('Input raced ' + p);
drained();
for (const [p, b] of outputs) { const tmp = p + '.root-level-sync-tmp'; if (existsSync(tmp)) throw Error('Temp exists'); writeFileSync(tmp, b); renameSync(tmp, p); }
const after = dependencyLevels(runPages(root, run));
if (after.errors.length) throw Error(after.errors.join('\n'));
for (const [id] of after.items) if (yaml().parse(splitFrontmatter(readFileSync('items/' + id + '.md', 'utf8')).fm).dependency_level !== after.levels.get(id)) throw Error('Source level mismatch ' + id);
if (!readFileSync('research/plan-spec.json').equals(plan)) throw Error('Canonical plan changed');
drained();
writeFileSync(dir + '/audit.json', JSON.stringify({ reviewer: '/root', at: new Date().toISOString(), run, source_writers_drained: true, actual_scope: { pairs: 69, pages: 138, items: 442, max_level: Math.max(...graph.levels.values()) }, level_changes: rows, inputs: [...inputs].map(([path, b]) => ({ path, sha256: sha(b) })), writes: [...outputs].map(([path, b]) => ({ path, before_sha256: sha(inputs.get(path)), after_sha256: sha(b) })), proof_bodies_unchanged: true, canonical_plan_unchanged: true, readiness_or_native_gate_created: false }, null, 2) + '\n');
console.log(JSON.stringify({ applied: true, changed_files: outputs.size, manifest_item_level_changes: rows.length, items: 442, max_level: Math.max(...graph.levels.values()), proof_bodies_unchanged: true }));
