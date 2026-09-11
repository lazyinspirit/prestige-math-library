import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { itemHashGuard, shortHash } from '../../item-hash.mjs';
import { recoverStep8 } from '../src/step8-recovery.mts';

const body = (value: any) => JSON.stringify(value, null, 2) + '\n';

function fixture({ extraChanged = false } = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'step8-recovery-'));
  const stateDir = join(repo, '.autopilot', 'demo');
  const dispatchDir = join(repo, 'research', 'demo-dispatch');
  mkdirSync(join(repo, 'items'), { recursive: true });
  mkdirSync(dispatchDir, { recursive: true });
  mkdirSync(stateDir, { recursive: true });
  const oldA = 'old theorem a\n', oldB = 'old theorem b\n';
  writeFileSync(join(repo, 'items', 'a.md'), 'repaired theorem a\n');
  writeFileSync(join(repo, 'items', 'b.md'), extraChanged ? 'changed theorem b\n' : oldB);
  writeFileSync(join(repo, 'research', 'demo-touches.json'), body({ snapshots: [{
    label: 'post-step7', hashes: {
      a: shortHash(itemHashGuard(oldA)),
      b: shortHash(itemHashGuard(oldB)),
    },
  }] }));
  const stages = ['8-changes-judge', '8-close', '8-changes-stamp', '8-receipt'];
  const records: any = {};
  const labels = ['step8-changes-judge', 'close-splice', 'step8-changes-stamp', 'receipts'];
  for (let i = 0; i < stages.length; i++) {
    const role = i === 3 ? 'alpha' : 'tool';
    records[`${stages[i]}:${labels[i]}`] = { stage: stages[i], role, label: labels[i], covers: ['all'],
      attempts: 1, startedAt: '2026-01-01T00:00:00Z', endedAt: '2026-01-01T00:01:00Z', lastExitOk: true };
    writeFileSync(join(dispatchDir, `${role}-${labels[i]}.result.json`), body({ role, label: labels[i], covers: ['all'], ok: true }));
  }
  records['7-freeze:snap'] = { stage: '7-freeze', role: 'tool', label: 'snap', covers: ['all'],
    attempts: 1, startedAt: '2026-01-01T00:00:00Z', endedAt: '2026-01-01T00:01:00Z', lastExitOk: true };
  writeFileSync(join(stateDir, 'state.json'), body({ version: 1, run: 'demo', paused: true,
    dispatches: records, stages: Object.fromEntries([...stages, '7-freeze'].map(id => [id, { gatesPassedAt: 'x', doneAt: 'x' }])),
    blockers: [{ stage: '8-receipt', message: 'old' }, { stage: '7-freeze', message: 'keep' }] }));
  writeFileSync(join(stateDir, 'events.jsonl'), '');
  writeFileSync(join(stateDir, 'autopilot.log'), '');
  const authorizationPath = join(repo, 'research', 'auth.json');
  writeFileSync(authorizationPath, body({ version: 1, run: 'demo', recovery_id: 'repair-1',
    baseline: 'post-step7', authorized_by: 'owner', authorization: 'repair a and recertify Step 8',
    reopen_stages: stages, required_targets: ['a'], allowed_targets: ['a'] }));
  return { repo, stateDir, dispatchDir, authorizationPath };
}

test('archives the exact Step-8 suffix and preserves earlier state', () => {
  const fx = fixture();
  const result = recoverStep8({ ...fx, run: 'demo' });
  assert.deepEqual(result.changed, ['a']);
  assert.equal(result.archived.length, 4);
  const state = JSON.parse(readFileSync(join(fx.stateDir, 'state.json'), 'utf8'));
  assert.equal(state.paused, true);
  assert.ok(state.stages['7-freeze']);
  for (const id of ['8-changes-judge', '8-close', '8-changes-stamp', '8-receipt']) assert.equal(state.stages[id], undefined);
  assert.ok(state.dispatches['7-freeze:snap']);
  assert.equal(Object.values<any>(state.dispatches).some(d => String(d.stage).startsWith('8-')), false);
  assert.equal(state.blockers.length, 1);
  assert.ok(existsSync(join(fx.stateDir, 'recoveries', 'repair-1', 'manifest.json')));
});

test('refuses an item change outside the authorization before archiving', () => {
  const fx = fixture({ extraChanged: true });
  assert.throws(() => recoverStep8({ ...fx, run: 'demo' }), /outside authorization: b/);
  assert.ok(existsSync(join(fx.dispatchDir, 'tool-step8-changes-judge.result.json')));
});

test('refuses a live controller', () => {
  const fx = fixture();
  writeFileSync(join(fx.stateDir, 'controller.lock'), body({ pid: process.pid }));
  assert.throws(() => recoverStep8({ ...fx, run: 'demo' }), /controller .* is still alive/);
});

