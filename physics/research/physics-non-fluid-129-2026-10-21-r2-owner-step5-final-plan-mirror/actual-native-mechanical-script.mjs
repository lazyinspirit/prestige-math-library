import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';

const run = 'physics-non-fluid-129-2026-10-21-r2';
const base = `research/${run}-step5-v2/`;
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const packBytes = fs.readFileSync(base + 'gate-1.json');
const pack = JSON.parse(packBytes);
assert.equal(hash(JSON.stringify(pack)), '7933dd85f4bd117fd3edba8fa9e7c687e8aa47914b0c0896a5f8e8667ddf6d10');
assert.deepEqual(pack.assignments['1'], []);
const diagnosticsBytes = fs.readFileSync(base + 'step5-v2-gate-r1-u1.gate-diagnostics.json');
const diagnostics = JSON.parse(diagnosticsBytes);
assert.deepEqual(diagnostics, pack.gateAssignments['1']);
assert.equal(diagnostics.length, 1);
assert.equal(diagnostics[0].index, 0);
assert.equal(diagnostics[0].check, 'splice-verify');
assert.equal(diagnostics[0].ownerHeld, true);
assert.deepEqual(diagnostics[0].subjects, []);
const selected = [];
for (const line of diagnostics[0].failure.output.split('\n')) {
  if (!line.startsWith('  ')) continue;
  const match = line.match(/^  (\S+) \(([^)]+\.pages\.json)\): same ids, (\d+) item object\(s\) changed /);
  assert.ok(match, 'Unexpected diagnostic component: ' + line);
  selected.push({page: match[1], manifest: 'research/' + match[2], expected_items: Number(match[3])});
}
assert.equal(selected.length, 63);
assert.equal(new Set(selected.map(row => row.page)).size, selected.length);

// These current owning files are deliberately first read after lock acquisition.
const planPath = 'research/plan-spec.json';
const beforeBytes = fs.readFileSync(planPath);
const before = JSON.parse(beforeBytes);
assert.equal(beforeBytes.toString(), JSON.stringify(before, null, 2) + '\n');
const after = structuredClone(before);
const byId = new Map(after.pages.map(page => [page.id, page]));
assert.equal(byId.size, after.pages.length);
const manifests = new Map();
const changes = [];
const allowed = new Set(['physical_scope', 'statement', 'deps', 'dependency_roles', 'title', 'sources', 'strategy']);
const ids = items => items.map(item => typeof item === 'string' ? item : item.id);
const stable = item => {
  if (typeof item === 'string') return JSON.stringify(item);
  const entries = Object.entries(item ?? {}).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
  if (entries.length === 1 && entries[0][0] === 'id') return JSON.stringify(item.id);
  return JSON.stringify(Object.fromEntries(entries));
};
for (const row of selected) {
  if (!manifests.has(row.manifest)) {
    const bytes = fs.readFileSync(row.manifest);
    manifests.set(row.manifest, {bytes, sha256: hash(bytes), pages: JSON.parse(bytes)});
  }
  const matches = manifests.get(row.manifest).pages.filter(page => page.id === row.page);
  assert.equal(matches.length, 1);
  const source = matches[0], target = byId.get(row.page);
  assert.ok(target);
  assert.deepEqual(ids(source.items), ids(target.items), 'Inventory/order mismatch: ' + row.page);
  assert.equal(stable(source.requires ?? []), stable(target.requires ?? []), 'Requires mismatch: ' + row.page);
  assert.ok(source.kind !== 'A' || source.items.length <= 100);
  const items = [];
  for (let i = 0; i < source.items.length; i++) {
    const next = source.items[i], previous = target.items[i];
    if (stable(next) === stable(previous)) continue;
    assert.equal(typeof next, 'object');
    assert.equal(typeof previous, 'object');
    const fields = [...new Set([...Object.keys(previous), ...Object.keys(next)])]
      .filter(key => JSON.stringify(previous[key]) !== JSON.stringify(next[key]));
    assert.ok(fields.length && fields.every(key => allowed.has(key)), 'Unexpected field change: ' + next.id);
    items.push({id: next.id, fields});
    target.items[i] = structuredClone(next);
  }
  assert.equal(items.length, row.expected_items, 'Diagnostic changed since assignment: ' + row.page);
  changes.push({page: row.page, manifest: row.manifest, items});
}
// Ensure no other plan field, inventory, ordering, or page prerequisite changed.
const stripped = plan => ({...plan, pages: plan.pages.map(page => {
  if (!selected.some(row => row.page === page.id)) return page;
  const {items, ...rest} = page;
  return rest;
})});
assert.deepEqual(stripped(after), stripped(before));
const seen = new Set();
for (const page of after.pages) for (const id of ids(page.items ?? [])) {
  assert.ok(!seen.has(id), 'Duplicate plan item: ' + id);
  seen.add(id);
}
for (const [path, source] of manifests) assert.equal(hash(fs.readFileSync(path)), source.sha256);
assert.equal(hash(fs.readFileSync(planPath)), hash(beforeBytes));
const afterBytes = JSON.stringify(after, null, 2) + '\n';
fs.writeFileSync(planPath, afterBytes);
const checked = spawnSync(process.execPath, ['tools/physics-support/splice-plan.mjs', '--run', run, '--verify'], {encoding: 'utf8'});
const check = {command: `node tools/physics-support/splice-plan.mjs --run ${run} --verify`, exit_code: checked.status, output: checked.stdout + checked.stderr};
const evidence = {
  plan: {path: planPath, before_sha256: hash(beforeBytes), after_sha256: hash(afterBytes)},
  manifest_inputs: Object.fromEntries([...manifests].map(([path, data]) => [path, data.sha256])),
  pages_changed: changes.length,
  item_objects_changed: changes.reduce((sum, row) => sum + row.items.length, 0),
  changes,
  check,
  checked_at: new Date().toISOString()
};
fs.writeFileSync('/tmp/physics-step5-v2-gate-r1-u1-metadata-result.json', JSON.stringify(evidence, null, 2) + '\n');
console.log(JSON.stringify({...evidence, manifest_inputs: undefined, changes: undefined}));
if (checked.error) throw checked.error;
assert.equal(checked.status, 0, 'Scoped splice verification failed');
