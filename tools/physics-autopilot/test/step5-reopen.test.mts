import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { reopenStep5, STEP5_STAGES } from '../src/step5-reopen.mts';

const body = (value: any) => JSON.stringify(value, null, 2) + '\n';

function fixture({ step7Landed = true, paused = true } = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'step5-reopen-'));
  const stateDir = join(repo, '.physics-autopilot', 'demo');
  const dispatchDir = join(repo, 'research', 'demo-dispatch');
  mkdirSync(join(repo, 'research'), { recursive: true });
  mkdirSync(dispatchDir, { recursive: true });
  mkdirSync(stateDir, { recursive: true });

  const lanes = [
    ['5a-prepare', 'tool', 'prepare-5a'],
    ['5a-read', 'reader', 'reader-1'],
    ['5a-refute', 'refuter', 'refute-1'],
    ['5a-adjudicate', 'alpha', '5a-a'],
    ['5a-adjudicate', 'alpha', '5a-batch-1'],
    ['5b-cross', 'alpha', '5b-lead'],
    ['5b-close', 'tool', 'step5-close'],
  ] as const;
  const dispatches: any = {};
  for (const [stage, role, label] of lanes) {
    dispatches[`${stage}:${label}`] = { stage, role, label, covers: ['all'], attempts: 1,
      startedAt: '2026-09-17T00:00:00Z', endedAt: '2026-09-17T00:01:00Z', lastExitOk: true };
    writeFileSync(join(dispatchDir, `${role}-${label}.result.json`), body({ role, label, ok: true }));
    writeFileSync(join(dispatchDir, `${role}-${label}.log`), 'lane log\n');
  }
  dispatches['7-freeze:snap'] = { stage: '7-freeze', role: 'tool', label: 'snap', covers: ['all'],
    attempts: 1, startedAt: '2026-09-19T00:00:00Z', endedAt: '2026-09-19T00:01:00Z', lastExitOk: true };

  const stages: any = {};
  for (const stage of STEP5_STAGES) stages[stage] = { enteredAt: 'x', gatesPassedAt: 'x', doneAt: 'x' };
  stages['7-freeze'] = step7Landed ? { enteredAt: 'x', gatesPassedAt: 'x', doneAt: 'x' } : { enteredAt: 'x' };
  writeFileSync(join(stateDir, 'state.json'), body({ version: 1, run: 'demo', paused,
    dispatches, stages, blockers: [{ stage: '5a-read', message: 'stale' }, { stage: '7-freeze', message: 'keep' }],
    gateAttempts: { '5a-read\u0000x': { stage: '5a-read' }, '7-freeze\u0000y': { stage: '7-freeze' } } }));

  for (const name of ['demo-step5-hash-1-pre.json', 'demo-reader-1.md', 'demo-5b-verdicts.jsonl',
    'demo-step5-closure.json', 'demo-alpha-a-5a-decisions.json',
    'demo-alpha-batch-1-5a-decisions.json', 'demo-alpha-batch-1-5a.md',
    'demo-alpha-batch-1-5a-order.task.md']) {
    writeFileSync(join(repo, 'research', name), '{}\n');
  }
  for (const name of ['demo-step7-published-repairs.jsonl', 'demo-judge.jsonl', 'demo-step5-reopen.json']) {
    writeFileSync(join(repo, 'research', name), '{}\n');
  }

  const authorizationPath = join(repo, 'research', 'auth.json');
  writeFileSync(authorizationPath, body({
    version: 1, run: 'demo', authorized_by: 'owner',
    authorization: 'Re-run Step 5 over the Step-7 repaired carriers, then pause at the end of Step 5.',
    reopen_stages: [...STEP5_STAGES],
  }));
  return { repo, stateDir, dispatchDir, authorizationPath };
}

test('archives the Step-5 receipts and artifacts, clears only Step-5 state', () => {
  const fx = fixture();
  const result = reopenStep5({ ...fx, run: 'demo', now: () => new Date('2026-09-20T00:00:00Z') });
  assert.equal(result.clearedStages.length, STEP5_STAGES.length);
  assert.ok(existsSync(result.archiveDir));
  // Receipts, logs and Step-5 artifacts are archived; the reopen receipt and the
  // Step-6/Step-7 evidence stay in place.
  for (const name of ['tool-prepare-5a.result.json', 'reader-reader-1.log', 'demo-reader-1.md',
    'demo-5b-verdicts.jsonl', 'alpha-5a-batch-1.result.json',
    'demo-alpha-batch-1-5a-decisions.json', 'demo-alpha-batch-1-5a.md',
    'demo-alpha-batch-1-5a-order.task.md']) {
    assert.ok(result.archived.includes(name), `${name} archived`);
    assert.equal(existsSync(join(name.startsWith('demo-') ? join(fx.repo, 'research') : fx.dispatchDir, name)), false,
      `${name} removed from its live location`);
  }
  assert.ok(existsSync(join(fx.repo, 'research', 'demo-step7-published-repairs.jsonl')));
  assert.ok(existsSync(join(fx.repo, 'research', 'demo-judge.jsonl')));

  const state = JSON.parse(readFileSync(join(fx.stateDir, 'state.json'), 'utf8'));
  for (const stage of STEP5_STAGES) assert.equal(state.stages[stage], undefined, `${stage} cleared`);
  assert.ok(state.stages['7-freeze']?.doneAt, 'Step 7 stamp preserved');
  assert.equal(state.paused, true);
  assert.equal(state.pauseAfter, '5b-close');
  assert.deepEqual(state.blockers, [{ stage: '7-freeze', message: 'keep' }]);
  assert.deepEqual(Object.keys(state.gateAttempts), ['7-freeze\u0000y']);
  assert.ok(state.dispatches['5a-read:reader-1'], 'dispatch history preserved');
  const receipt = JSON.parse(readFileSync(join(fx.repo, 'research', 'demo-step5-reopen.json'), 'utf8'));
  assert.equal(receipt.run, 'demo');
  assert.equal(receipt.pause_after, '5b-close');
  assert.equal(receipt.archived_count, result.archived.length);
});

test('refuses before Step 7 has landed and while the run is not paused', () => {
  const early = fixture({ step7Landed: false });
  assert.throws(() => reopenStep5({ ...early, run: 'demo' }), /Step 7 has not landed/);
  const running = fixture({ paused: false });
  assert.throws(() => reopenStep5({ ...running, run: 'demo' }), /must be paused/);
});

test('refuses an authorization that does not name every Step-5 stage', () => {
  const fx = fixture();
  writeFileSync(fx.authorizationPath, body({
    version: 1, run: 'demo', authorized_by: 'owner', authorization: 'partial',
    reopen_stages: ['5a-read'],
  }));
  assert.throws(() => reopenStep5({ ...fx, run: 'demo' }), /missing 5a-prepare/);
});
