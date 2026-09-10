// Mechanical import integration tests. Mathematical validators are stubs in
// isolated fixtures; these tests make no claim about real mathematical content.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
const cli = fileURLToPath(new URL('../bin/merge-runs.mjs', import.meta.url));
const digest = text => createHash('sha256').update(text).digest('hex');
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'mathlib-merge-test-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (file, value) => { fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    fs.writeFileSync(path.join(root, file), typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n'); };
  for (const name of ['step6-scope', 'step6-close', 'content-policy', 'proof-contract', 'validate-plan', 'run-tasks', 'frontier-dependency-ledger'])
    write(`tools/${name}.mjs`, '// Fixture validator stub.\nprocess.exit(0);\n');
  write('research/defect-ledger.jsonl', '');
  for (const run of ['left', 'right']) {
    const id = `thm-${run}`;
    write(`items/${id}.md`, `---\nid: ${id}\nkind: theorem\nstatus: draft\ndeps: []\n---\n\nFixture ${run}.\n`);
    write(`.autopilot/${run}/state.json`, { run, paused: true, dispatches: {} });
    const pages = [{ id: run, kind: 'A', category: 'test', items: [{ id }] }, { id: `${run}-examples`, kind: 'B', category: 'test', items: [{ id: `ex-${run}` }] }];
    write(`items/ex-${run}.md`, `---\nid: ex-${run}\nkind: example\nstatus: draft\ndeps: []\n---\nFixture.\n`);
    write(`research/${run}-batch-1.pages.json`, pages);
    write(`research/${run}-batch-1.proof-contracts.json`, { version: 1, scope: [id, `ex-${run}`], contracts: {} });
    write(`research/${run}-alpha-groups.json`, [{ label: 'a', covers: ['1'] }]);
    write(`research/${run}-scope-ledger.json`, { run, baseline_commit: 'a'.repeat(40), pages });
    write(`research/${run}-touches.json`, { snapshots: [{ label: 'pre-author', at: run, hashes: {}, surfaces: {} }], seeded: [] });
    write(`research/${run}-step6-hash-1-pre-6b.json`, { run, batch: '1', manifest: [id], page_manifest: [run] });
    write(`research/${run}-step6-scope-1.json`, { version: 3, run, batch: '1', group: 'a', baseline_sha256: 'old-envelope' });
    write(`research/${run}-alpha-a-6b-decisions.json`, { run, group: 'a', decisions: [{ obligation: `authored:1:${id}`, id }] });
    write(`research/${run}-dispatch/alpha-6b-a.result.json`, { run, role: 'alpha', label: '6b-a', covers: ['1'], ok: true });
  }
  const invoke = mode => spawnSync(process.execPath, [cli, mode, '--run', 'merged', '--sources', 'left,right'], { cwd: root, encoding: 'utf8' });
  return { root, write, invoke, read: file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8')) };
}
test('prepares and verifies a new import without creating model-success receipts', t => {
  const f = fixture(t), sourceBefore = fs.readFileSync(path.join(f.root, 'research/right-step6-scope-1.json'), 'utf8');
  let r = f.invoke('prepare'); assert.equal(r.status, 0, r.stderr);
  r = f.invoke('verify'); assert.equal(r.status, 0, r.stderr);
  const scope = f.read('research/merged-step6-scope-2.json');
  assert.equal(scope.batch, '2'); assert.equal(scope.group, 'b');
  assert.equal(scope.baseline_sha256, digest(fs.readFileSync(path.join(f.root, 'research/merged-step6-hash-2-pre-6b.json'))));
  assert.equal(f.read('research/merged-alpha-b-6b-decisions.json').decisions[0].obligation, 'authored:2:thm-right');
  assert.equal(fs.readFileSync(path.join(f.root, 'research/right-step6-scope-1.json'), 'utf8'), sourceBefore);
  assert.equal(fs.existsSync(path.join(f.root, 'research/merged-dispatch')), false);
  assert.equal(f.invoke('prepare').status, 1);
  f.write('items/thm-right.md', 'changed');
  assert.equal(f.invoke('verify').status, 1);
});
test('active and unsuccessfully reviewed sources cannot be imported', t => {
  const f = fixture(t);
  f.write('.autopilot/left/state.json', { paused: false, dispatches: {} });
  assert.equal(f.invoke('prepare').status, 1);
  assert.equal(fs.existsSync(path.join(f.root, '.autopilot/merged')), false);
  f.write('.autopilot/left/state.json', { paused: true, dispatches: {} });
  f.write('research/left-dispatch/alpha-6b-a.result.json', { run: 'left', role: 'alpha', covers: ['1'], ok: false });
  assert.equal(f.invoke('prepare').status, 1);
  assert.equal(fs.existsSync(path.join(f.root, '.autopilot/merged')), false);
});
