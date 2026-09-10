import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { migrateJson, migrateSuffix, selectedInput } from '../src/checkpoint-migration.mjs';
const cli = fileURLToPath(new URL('../bin/migrate-checkpoint.mjs', import.meta.url));
const sha = text => createHash('sha256').update(text).digest('hex');
test('only structured identities change; mathematical evidence and hashes survive', () => {
  const original = { run: 'old', stage: '6c-cross', step6_obligation: 'gate:d',
    defect_ids: ['d'], evidence: 'old Step 6b proves the claim', item_sha256: '6b',
    label: 'pre-6b', group: 'a', batch: '1' };
  assert.deepEqual(migrateJson(original, 'old', 'new', { d: 'new-d' }), {
    run: 'new', stage: '5b-cross', step5_obligation: 'gate:new-d', defect_ids: ['new-d'],
    evidence: original.evidence, item_sha256: '6b', label: 'pre-5a', group: 'a', batch: '1',
  });
  assert.equal(migrateSuffix('step6-hash-17-pre-6b.json'), 'step5-hash-17-pre-5a.json');
  assert.equal(selectedInput('batch-17.cross-batch-dependencies.json'), true);
  assert.equal(selectedInput('dispatch/alpha-6b-a.result.json'), false);
  assert.equal(selectedInput('alpha-6b.task.md'), false);
  const history = { risk_review: { gate_reviews: [{ run: 'old', stage: '6b-adjudicate' }] } };
  assert.deepEqual(migrateJson(history, 'old', 'new'), history);
});
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'checkpoint-migration-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (file, value) => {
    fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    fs.writeFileSync(path.join(root, file), typeof value === 'string' ? value : JSON.stringify(value) + '\n');
  };
  const read = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
  for (const tool of ['step6-scope', 'step5-scope', 'defect-ledger', 'run-tasks', 'frontier-dependency-ledger'])
    write(`tools/${tool}.mjs`, '// Fixture validator, not mathematical evidence.\nprocess.exit(0);\n');
  write('research/defect-ledger.jsonl', '');
  for (const name of ['old', 'origin']) write(`.autopilot/${name}/state.json`, { run: name, paused: true, dispatches: {} });
  const receipt = 'research/origin-dispatch/alpha-6b-a.result.json';
  write(receipt, { run: 'origin', role: 'alpha', ok: true, covers: ['1'] });
  write('research/old-merge-import.json', { sources: [{ run: 'origin', batchMap: { 1: '1' }, review_receipts: [receipt] }],
    source_artifact_hashes: { [receipt]: sha(fs.readFileSync(path.join(root, receipt))) } });
  write('research/old-batch-1.pages.json', [{ id: 'p', category: 'test', items: [{ id: 'thm-p' }] }]);
  write('items/thm-p.md', 'Fixture content.');
  write('library/test/p.md', 'Fixture page.');
  write('research/old-step6-scope-1.json', { version: 3, run: 'old', batch: '1', baseline_sha256: 'before' });
  write('research/old-step6-hash-1-pre-6b.json', { run: 'old', label: 'pre-6b', hashes: {} });
  write('research/old-alpha-a-6b-decisions.json', { run: 'old', decisions: [], evidence: 'Historical 6B read.' });
  const invoke = (mode, run = 'new', flags = []) => spawnSync(process.execPath, [cli, mode, '--run', run, '--source', 'old', ...flags], { cwd: root, encoding: 'utf8' });
  return { root, write, read, invoke };
}
test('export and migration preserve source evidence and create no model receipt', t => {
  const f = fixture(t);
  for (const [mode, run] of [['export', 'old'], ['prepare', 'new'], ['verify', 'new']]) {
    const r = f.invoke(mode, run); assert.equal(r.status, 0, r.stderr);
  }
  const scope = f.read('research/new-step5-scope-1.json');
  assert.equal(scope.baseline_sha256, sha(fs.readFileSync(path.join(f.root, 'research/new-step5-hash-1-pre-5a.json'))));
  assert.deepEqual(fs.readdirSync(path.join(f.root, 'research/new-dispatch')), []);
  assert.equal(f.read('research/old-step6-scope-1.json').baseline_sha256, 'before');
  assert.notEqual(f.invoke('prepare').status, 0);
  f.write('items/thm-p.md', 'Tampered content');
  assert.notEqual(f.invoke('verify').status, 0);
});
test('export refuses active sources and unsuccessful original review', t => {
  const f = fixture(t);
  f.write('.autopilot/old/state.json', { paused: false });
  assert.notEqual(f.invoke('export', 'old').status, 0);
  f.write('.autopilot/old/state.json', { paused: true, dispatches: {} });
  f.write('research/origin-dispatch/alpha-6b-a.result.json', { run: 'origin', role: 'alpha', ok: false, covers: ['1'] });
  assert.notEqual(f.invoke('export', 'old').status, 0);
});
test('failed preparation resumes only unchanged derived evidence before runtime exists', t => {
  const f = fixture(t);
  assert.equal(f.invoke('export', 'old').status, 0);
  f.write('tools/step5-scope.mjs', 'process.exit(1);');
  assert.notEqual(f.invoke('prepare').status, 0);
  assert.equal(fs.existsSync(path.join(f.root, '.autopilot/new')), false);
  f.write('tools/step5-scope.mjs', 'process.exit(0);');
  const r = f.invoke('prepare', 'new', ['--resume-preparation']);
  assert.equal(r.status, 0, r.stderr);
  assert.equal(f.invoke('verify').status, 0);
});
test('partial preparation refuses overwritten evidence', t => {
  const f = fixture(t);
  assert.equal(f.invoke('export', 'old').status, 0);
  f.write('tools/step5-scope.mjs', 'process.exit(1);');
  assert.notEqual(f.invoke('prepare').status, 0);
  f.write('research/new-alpha-a-5a-decisions.json', { run: 'new', decisions: ['tampered'] });
  assert.notEqual(f.invoke('prepare', 'new', ['--resume-preparation']).status, 0);
});
