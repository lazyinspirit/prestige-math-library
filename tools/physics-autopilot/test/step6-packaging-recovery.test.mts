import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { packagingRecoveryState, verifyCommittedPackaging, verifyPackagingHistory, verifyPackagingSource } from '../src/step6-packaging-recovery.mts';
const hash = (s: string) => createHash('sha256').update(s).digest('hex');
const seal = (s: string) => hash('file\0' + s);
// Operational fixtures only: synthetic history never supplies production coverage.
function history() {
  const at = (n: number) => new Date(Date.UTC(2026, 0, 1, 0, 0, n)).toISOString();
  const gates = Array.from({ length: 29 }, (_, i) => ({ id: 'gate-' + i, argv: ['fixture'], required: true }));
  const tree = { 'items/def-science.md': 'unchanged-science', 'tools/run-commit-scope.mjs': seal('old') };
  const prepared = { version: 1, run: 'demo', physics: true, kind: 'actual-step6-format-metadata-preparation',
    validationStage: '6-final-validation-v3', mathematical_review: false, gate_pass_created: false,
    completedAt: at(0), gates, gateInventorySha256: hash(JSON.stringify(gates)), source: { tree, sha256: hash(JSON.stringify(tree)) } };
  const state: any = { version: 1, run: 'demo', workflowRevision: 'physics-six-step-v1-compact', paused: true,
    stage: '6-finalize-v3', finishedAt: null, stages: {
      '5-freeze': { doneAt: at(0) }, '6-prepare-v3': { doneAt: at(0) }, '6-pathway-author-v3': { doneAt: at(0) },
      '6-final-validation-v3': { gatesPassedAt: at(31), doneAt: at(32) }, '6-finalize-v3': { enteredAt: at(33) } },
    dispatches: { '6-final-validation-v3:step6-prepare-final-v3': { stage: '6-final-validation-v3', endedAt: at(1), lastExitOk: true },
      '6-finalize-v3:step6-finalize-v3': { stage: '6-finalize-v3', startedAt: at(34), endedAt: at(35), lastExitOk: false } },
    blockers: [{ stage: '5-freeze', message: 'retain history' }, { stage: '6-finalize-v3', message: 'old failure' }],
    gateAttempts: { old: { stage: '5-freeze' }, final: { stage: '6-final-validation-v3' } } };
  const events: any[] = [{ type: 'gates', at: at(1), message: '6-final-validation-v3: running 29 gate(s)' },
    ...gates.map((g, i) => ({ type: 'gate', at: at(i + 2), id: g.id, ok: true })),
    { type: 'gates-ok', at: at(31), message: '6-final-validation-v3: all gates green' },
    { type: 'stage-clear', at: at(32), message: '6-final-validation-v3 cleared — fixture' },
    { type: 'dispatch', at: at(34), stage: '6-finalize-v3', role: 'tool', label: 'step6-finalize-v3' },
    { type: 'dispatch-failed', at: at(35), key: '6-finalize-v3:step6-finalize-v3', ok: false,
      message: 'tool/step6-finalize-v3 exit=1 :: physics-step6-finalize: closeout: invalid native final-receipt inventory: research/demo-dispatch/tool-step6-finalize-v3.result.json' }];
  return { state, prepared, events };
}
test('authenticates all 29 actual results and the precise failed pre-ref sequence without mutation', () => {
  const f = history(), before = JSON.stringify(f), result = verifyPackagingHistory(f.state, f.prepared, f.events, 'demo');
  assert.equal(result.failed_attempts.length, 1); assert.equal(JSON.stringify(f), before);
});
for (const [name, mutate] of [
  ['missing gate', (f: any) => f.events.splice(3, 1)],
  ['false gate', (f: any) => { f.events[3].ok = false; }],
  ['skipped gate', (f: any) => { f.events[3].skipped = true; }],
  ['different inventory', (f: any) => { f.prepared.gates[0].argv = ['changed']; }],
  ['unknown finalizer error', (f: any) => { f.events.at(-1).message = 'unrelated error'; }],
  ['active finalizer', (f: any) => { f.state.dispatches['6-finalize-v3:step6-finalize-v3'].endedAt = null; }],
  ['landed completion', (f: any) => { f.state.finishedAt = '2026-01-01'; }],
  ['wrong domain revision', (f: any) => { f.state.workflowRevision = 'six-step-v1-compact'; }],
] as const) test('refuses ' + name, () => {
  const f = history(); mutate(f); assert.throws(() => verifyPackagingHistory(f.state, f.prepared, f.events, 'demo'));
});
test('source seal permits only exact approved tool bytes, never scientific or derived drift', () => {
  const old = { 'items/def-science.md': 'science', 'tools/run-commit-scope.mjs': 'old' };
  const changes = [{ path: 'tools/run-commit-scope.mjs', before_seal: 'old', after_seal: 'new' }];
  const next = { ...old, 'tools/run-commit-scope.mjs': 'new' };
  assert.deepEqual(verifyPackagingSource(old, next, changes), ['tools/run-commit-scope.mjs']);
  assert.throws(() => verifyPackagingSource(old, { ...next, 'items/def-science.md': 'changed' }, changes));
  assert.throws(() => verifyPackagingSource(old, next, [{ ...changes[0], after_seal: 'another' }]));
  assert.throws(() => verifyPackagingSource(old, { ...next, 'research/receipt.json': 'changed' }, changes));
});
test('native state transition clears only final coverage and remains paused for fresh preparation/all gates', () => {
  const f = history(); f.state.pauseAfter = 'existing-owner-boundary';
  const before = JSON.stringify(f.state), next = packagingRecoveryState(f.state);
  assert.equal(next.stage, '6-final-validation-v3'); assert.equal(next.paused, true);
  assert.equal(next.stages['6-final-validation-v3'], undefined); assert.equal(next.stages['6-finalize-v3'], undefined);
  assert.deepEqual(next.stages['5-freeze'], f.state.stages['5-freeze']);
  assert.deepEqual(next.stages['6-prepare-v3'], f.state.stages['6-prepare-v3']);
  assert.deepEqual(Object.keys(next.gateAttempts), ['old']); assert.equal(next.blockers.length, 1);
  assert.equal(next.pauseAfter, 'existing-owner-boundary', 'recovery introduces no new terminal pause');
  assert.equal(JSON.stringify(f.state), before);
});
test('Git guard accepts the committed packaging fix and rejects landed/reverted science or dirty tool bytes', t => {
  const repo = mkdtempSync(join(tmpdir(), 'physics-packaging-')); t.after(() => rmSync(repo, { recursive: true, force: true }));
  const git = (...a: string[]) => execFileSync('git', a, { cwd: repo, encoding: 'utf8' }).trim();
  const put = (p: string, s: string) => { mkdirSync(join(repo, p, '..'), { recursive: true }); writeFileSync(join(repo, p), s); };
  git('init', '-b', 'main'); git('config', 'user.name', 'Fixture'); git('config', 'user.email', 'fixture@example.invalid');
  put('tools/run-commit-scope.mjs', 'old'); put('physics/items/def-science.md', 'science');
  git('add', '.'); git('commit', '-qm', 'base'); const passed_head = git('rev-parse', 'HEAD');
  put('tools/run-commit-scope.mjs', 'new'); git('add', 'tools/run-commit-scope.mjs'); git('commit', '-qm', 'packaging');
  const auth = { passed_head, tooling_head: git('rev-parse', 'HEAD'), packaging_changes: [
    { path: 'tools/run-commit-scope.mjs', before_seal: seal('old'), after_seal: seal('new') }] };
  assert.equal(verifyCommittedPackaging(repo, auth).length, 1);
  put('tools/run-commit-scope.mjs', 'dirty'); assert.throws(() => verifyCommittedPackaging(repo, auth)); put('tools/run-commit-scope.mjs', 'new');
  put('physics/items/def-science.md', 'changed'); git('add', '.'); git('commit', '-qm', 'landed science');
  put('physics/items/def-science.md', 'science'); git('add', '.'); git('commit', '-qm', 'revert science');
  assert.throws(() => verifyCommittedPackaging(repo, { ...auth, tooling_head: git('rev-parse', 'HEAD') }), /non-packaging/);
});
