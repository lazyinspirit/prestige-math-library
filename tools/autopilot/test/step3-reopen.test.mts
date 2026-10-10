import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { reopenStep3, STEP3_STAGES } from '../src/step3-reopen.mts';

const body = (value: any) => JSON.stringify(value, null, 2) + '\n';

function fixture({ step5Landed = true, paused = true } = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'step3-reopen-'));
  const stateDir = join(repo, '.autopilot', 'demo');
  const dispatchDir = join(repo, 'research', 'demo-dispatch');
  mkdirSync(join(repo, 'research'), { recursive: true });
  mkdirSync(dispatchDir, { recursive: true });
  mkdirSync(stateDir, { recursive: true });

  const lanes = [
    ['3a-prepare', 'tool', 'prepare-3a'],
    ['3a-read', 'reader', 'reader-1'],
    ['3a-refute', 'refuter', 'refute-1'],
    ['3a-adjudicate', 'alpha', '3a-a'],
    ['3a-adjudicate', 'alpha', '3a-batch-1'],
    ['3b-cross', 'alpha', '3b-lead'],
    ['3b-close', 'tool', 'step3-close'],
  ] as const;
  const dispatches: any = {};
  for (const [stage, role, label] of lanes) {
    dispatches[`${stage}:${label}`] = { stage, role, label, covers: ['all'], attempts: 1,
      startedAt: '2026-09-17T00:00:00Z', endedAt: '2026-09-17T00:01:00Z', lastExitOk: true };
    writeFileSync(join(dispatchDir, `${role}-${label}.result.json`), body({ role, label, ok: true }));
    writeFileSync(join(dispatchDir, `${role}-${label}.log`), 'lane log\n');
  }
  dispatches['5-freeze:snap'] = { stage: '5-freeze', role: 'tool', label: 'snap', covers: ['all'],
    attempts: 1, startedAt: '2026-09-19T00:00:00Z', endedAt: '2026-09-19T00:01:00Z', lastExitOk: true };

  const stages: any = {};
  for (const stage of STEP3_STAGES) stages[stage] = { enteredAt: 'x', gatesPassedAt: 'x', doneAt: 'x' };
  stages['5-freeze'] = step5Landed ? { enteredAt: 'x', gatesPassedAt: 'x', doneAt: 'x' } : { enteredAt: 'x' };
  writeFileSync(join(stateDir, 'state.json'), body({ version: 1, run: 'demo', paused,
    dispatches, stages, blockers: [{ stage: '3a-read', message: 'stale' }, { stage: '5-freeze', message: 'keep' }],
    gateAttempts: { '3a-read\u0000x': { stage: '3a-read' }, '5-freeze\u0000y': { stage: '5-freeze' } } }));

  for (const name of ['demo-step3-hash-1-pre.json', 'demo-reader-1.md', 'demo-3b-verdicts.jsonl',
    'demo-step3-closure.json', 'demo-alpha-a-3a-decisions.json',
    'demo-alpha-batch-1-3a-decisions.json', 'demo-alpha-batch-1-3a.md',
    'demo-alpha-batch-1-3a-order.task.md']) {
    writeFileSync(join(repo, 'research', name), '{}\n');
  }
  for (const name of ['demo-step5-published-repairs.jsonl', 'demo-judge.jsonl', 'demo-step3-reopen.json']) {
    writeFileSync(join(repo, 'research', name), '{}\n');
  }

  const authorizationPath = join(repo, 'research', 'auth.json');
  writeFileSync(authorizationPath, body({
    version: 1, run: 'demo', authorized_by: 'owner',
    authorization: 'Re-run Step 3 over the Step-5 repaired carriers, then pause at the end of Step 3.',
    reopen_stages: [...STEP3_STAGES],
  }));
  return { repo, stateDir, dispatchDir, authorizationPath };
}

test('archives the Step-3 receipts and artifacts, clears only Step-3 state', () => {
  const fx = fixture();
  const result = reopenStep3({ ...fx, run: 'demo', now: () => new Date('2026-09-20T00:00:00Z') });
  assert.equal(result.clearedStages.length, STEP3_STAGES.length);
  assert.ok(existsSync(result.archiveDir));
  // Receipts, logs and Step-3 artifacts are archived; the reopen receipt and the
  // Step-4/Step-5 evidence stay in place.
  for (const name of ['tool-prepare-3a.result.json', 'reader-reader-1.log', 'demo-reader-1.md',
    'demo-3b-verdicts.jsonl', 'alpha-3a-batch-1.result.json',
    'demo-alpha-batch-1-3a-decisions.json', 'demo-alpha-batch-1-3a.md',
    'demo-alpha-batch-1-3a-order.task.md']) {
    assert.ok(result.archived.includes(name), `${name} archived`);
    assert.equal(existsSync(join(name.startsWith('demo-') ? join(fx.repo, 'research') : fx.dispatchDir, name)), false,
      `${name} removed from its live location`);
  }
  assert.ok(existsSync(join(fx.repo, 'research', 'demo-step5-published-repairs.jsonl')));
  assert.ok(existsSync(join(fx.repo, 'research', 'demo-judge.jsonl')));

  const state = JSON.parse(readFileSync(join(fx.stateDir, 'state.json'), 'utf8'));
  for (const stage of STEP3_STAGES) assert.equal(state.stages[stage], undefined, `${stage} cleared`);
  assert.ok(state.stages['5-freeze']?.doneAt, 'Step 5 stamp preserved');
  assert.equal(state.paused, true);
  assert.equal(state.pauseAfter, '3b-close');
  assert.deepEqual(state.blockers, [{ stage: '5-freeze', message: 'keep' }]);
  assert.deepEqual(Object.keys(state.gateAttempts), ['5-freeze\u0000y']);
  assert.ok(state.dispatches['3a-read:reader-1'], 'dispatch history preserved');
  const receipt = JSON.parse(readFileSync(join(fx.repo, 'research', 'demo-step3-reopen.json'), 'utf8'));
  assert.equal(receipt.run, 'demo');
  assert.equal(receipt.pause_after, '3b-close');
  assert.equal(receipt.archived_count, result.archived.length);
});

test('refuses before Step 5 has landed and while the run is not paused', () => {
  const early = fixture({ step5Landed: false });
  assert.throws(() => reopenStep3({ ...early, run: 'demo' }), /Step 5 has not landed/);
  const running = fixture({ paused: false });
  assert.throws(() => reopenStep3({ ...running, run: 'demo' }), /must be paused/);
});

test('refuses an authorization that does not name every Step-3 stage', () => {
  const fx = fixture();
  writeFileSync(fx.authorizationPath, body({
    version: 1, run: 'demo', authorized_by: 'owner', authorization: 'partial',
    reopen_stages: ['3a-read'],
  }));
  assert.throws(() => reopenStep3({ ...fx, run: 'demo' }), /missing 3a-prepare/);
});
