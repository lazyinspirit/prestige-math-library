import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { refuterContinuations, refuterContinuationPattern, withRefuterContinuation } from '../stages/refuter-continuations.mts';
import { stages } from '../stages/mathlib.mts';
import { covered } from '../src/coverage.mts';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';

function fixture(t: any) {
  const repo = mkdtempSync(join(tmpdir(), 'refuter-continuation-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research', 'r-dispatch'), { recursive: true });
  mkdirSync(join(repo, 'items'));
  const write = (path: string, value: any) => writeFileSync(join(repo, path), typeof value === 'string' ? value : JSON.stringify(value));
  const ref = (path: string) => ({ path, sha256: createHash('sha256').update(readFileSync(join(repo, path))).digest('hex') });
  const report = { batch: '7', opened: ['def-a', 'def-context'], not_opened: [], flagged: [], coverage_note: 'actual read' };
  write('research/r-refute-7.json', report); write('research/r-old-report.json', report);
  write('research/r-step3-scope-7.json', { refuter_scope: ['def-a'] });
  write('research/r-batch-7.pages.json', [{ id: 'page', category: 'algebra', items: [{ id: 'def-a' }] }]);
  write('items/def-a.md', 'fixture carrier'); write('research/r-correction-task.md', 'fresh actual read');
  write('research/r-dispatch/refuter-refute-7.result.json', { run: 'r', role: 'refuter', label: 'refute-7', covers: ['7'], ok: true, exit_code: 0, ended_at: '2026-10-08T04:19:33Z', tail: JSON.stringify(report) });
  write('research/r-dispatch/refuter-refute-8.result.json', { run: 'r', covers: ['8'], ok: true });
  const entry = { unit: '7', label: 'refute-7-coverage-correction-1', reason: 'one extra context carrier', writers_drained_at: '2026-10-08T04:20:00Z', previous_result: ref('research/r-dispatch/refuter-refute-7.result.json'), report_path: 'research/r-refute-7.json', report_sha256: ref('research/r-refute-7.json').sha256, original_report: ref('research/r-old-report.json'), scope_sha256: ref('research/r-step3-scope-7.json').sha256, subjects: [{ id: 'def-a', ...ref('items/def-a.md') }], task: ref('research/r-correction-task.md') };
  const auth = { version: 1, run: 'r', authorized_by: 'owner', authorization: 'one fresh native read', continuations: [entry] };
  const save = () => write('research/r-step3-refuter-continuations.json', auth);
  const ctx = { repo, run: 'r' }, stage = { units: () => ['7', '8'], pattern: /^refuter-refute-\d+\.result\.json$/ };
  return { repo, write, auth, entry, save, ctx, stage };
}

test('opt-in exact native coverage preserves siblings and original observations', t => {
  const f = fixture(t);
  assert.equal(refuterContinuationPattern(f.ctx, f.stage), f.stage.pattern);
  f.save(); refuterContinuations(f.ctx, f.stage, true);
  const pattern = refuterContinuationPattern(f.ctx, f.stage);
  assert.deepEqual([...covered(join(f.repo, 'research/r-dispatch'), pattern)], ['8']);
  assert.equal(pattern.test('refuter-refute-7-coverage-correction-2.result.json'), false);
  assert.equal(pattern.test('refuter-refute-7-coverage-correction-1.attempt-1.result.json'), false);
  f.write('research/r-dispatch/refuter-refute-7-coverage-correction-1.result.json', { run: 'r', covers: ['7'], ok: false });
  assert.deepEqual([...covered(join(f.repo, 'research/r-dispatch'), pattern)], ['8']);
  assert.throws(() => refuterContinuations(f.ctx, f.stage, true), /already attempted/);
  f.write('research/r-dispatch/refuter-refute-7-coverage-correction-1.result.json', { run: 'r', covers: ['7'], ok: true });
  f.write('research/r-refute-7.json', { batch: '7', opened: ['def-a'], not_opened: [], flagged: [], coverage_note: 'new native read' });
  assert.deepEqual([...covered(join(f.repo, 'research/r-dispatch'), refuterContinuationPattern(f.ctx, f.stage))].sort(), ['7', '8']);
  assert.ok(readFileSync(join(f.repo, 'research/r-old-report.json'), 'utf8').includes('def-context'));
});

test('a genuine incomplete report requires fresh native reading, never manufactured coverage', t => {
  const f = fixture(t);
  const report = { batch: '7', opened: ['def-a'], not_opened: [], flagged: [], coverage_note: 'One assigned subject omitted.' };
  f.write('research/r-refute-7.json', report); f.write('research/r-old-report.json', report);
  f.write('research/r-step3-scope-7.json', { refuter_scope: ['def-a', 'def-b'] });
  f.write('items/def-b.md', 'missing carrier');
  const digest = (path: string) => createHash('sha256').update(readFileSync(join(f.repo, path))).digest('hex');
  f.write('research/r-dispatch/refuter-refute-7.result.json', { run: 'r', role: 'refuter', label: 'refute-7', covers: ['7'], ok: true, exit_code: 0, ended_at: '2026-10-08T04:19:33Z', tail: JSON.stringify(report) });
  f.entry.previous_result.sha256 = digest(f.entry.previous_result.path);
  f.entry.report_sha256 = digest(f.entry.report_path);
  f.entry.original_report.sha256 = f.entry.report_sha256;
  f.entry.scope_sha256 = digest('research/r-step3-scope-7.json');
  f.entry.subjects.push({ id: 'def-b', path: 'items/def-b.md', sha256: digest('items/def-b.md') });
  f.save(); refuterContinuations(f.ctx, f.stage, true);
  assert.deepEqual([...covered(join(f.repo, 'research/r-dispatch'), refuterContinuationPattern(f.ctx, f.stage))], ['8']);
  assert.deepEqual(JSON.parse(readFileSync(join(f.repo, f.entry.report_path), 'utf8')).opened, ['def-a']);
});


function clippedFixture(t: any) {
  const f = fixture(t);
  const report = { batch: '7', opened: ['def-a', 'def-context', ...Array.from({ length: 40 }, (_, i) => `def-context-${i}`)],
    not_opened: [], flagged: [], coverage_note: 'Genuine native report observations. '.repeat(12) };
  const raw = JSON.stringify(report, null, 2) + '\n';
  const tail = raw.trim().split('\n').slice(-40).join('\n');
  assert.throws(() => JSON.parse(tail));
  f.write(f.entry.report_path, raw); f.write(f.entry.original_report.path, raw);
  const receipt = JSON.parse(readFileSync(join(f.repo, f.entry.previous_result.path), 'utf8'));
  receipt.tail = tail;
  const digest = (path: string) => createHash('sha256').update(readFileSync(join(f.repo, path))).digest('hex');
  const saveReceipt = () => {
    f.write(f.entry.previous_result.path, receipt);
    f.entry.previous_result.sha256 = digest(f.entry.previous_result.path);
  };
  saveReceipt();
  f.entry.report_sha256 = digest(f.entry.report_path);
  f.entry.original_report.sha256 = f.entry.report_sha256;
  return { ...f, raw, tail, receipt, saveReceipt };
}

test('native last-40-line clipped JSON tail authenticates the unchanged raw archive', t => {
  const f = clippedFixture(t); f.save();
  refuterContinuations(f.ctx, f.stage, true);
  assert.deepEqual([...covered(join(f.repo, 'research/r-dispatch'), refuterContinuationPattern(f.ctx, f.stage))], ['8']);
  assert.equal(readFileSync(join(f.repo, f.entry.report_path), 'utf8'), f.raw);
  assert.equal(readFileSync(join(f.repo, f.entry.original_report.path), 'utf8'), f.raw);
  assert.equal(JSON.parse(readFileSync(join(f.repo, f.entry.previous_result.path), 'utf8')).tail, f.tail);
  f.write('research/r-dispatch/refuter-refute-7-coverage-correction-1.result.json', { run: 'r', covers: ['7'], ok: false });
  assert.throws(() => refuterContinuations(f.ctx, f.stage, true), /already attempted/);
});

test('clipped tails reject short, altered, unrelated and parseable different diagnostics', t => {
  for (const tail of [
    (f: any) => f.tail.slice(-40),
    (f: any) => f.tail.replace('Genuine', 'Altered'),
    (_f: any) => 'unrelated prefix'.repeat(30) + '\n"not_opened": [], "flagged": []}',
    (_f: any) => JSON.stringify({ batch: '7', opened: ['def-a'], not_opened: [], flagged: [] }),
    (f: any) => f.tail.slice(f.tail.indexOf('"coverage_note"')),
  ]) {
    const f = clippedFixture(t); f.receipt.tail = tail(f); f.saveReceipt(); f.save();
    assert.throws(() => refuterContinuations(f.ctx, f.stage, true), /Invalid owner/);
  }
});

test('clipped diagnostics cannot bypass changed bound report or receipt bytes', t => {
  for (const path of ['report_path', 'original_report', 'previous_result']) {
    const f = clippedFixture(t); f.save();
    f.write(path === 'report_path' ? f.entry.report_path : (f.entry as any)[path].path, '{}');
    assert.throws(() => refuterContinuations(f.ctx, f.stage, true), /Invalid owner/);
  }
});

test('authorization, unit, report, subject and label guards reject drift', t => {
  for (const mutate of [
    (f: any) => { f.auth.authorized_by = 'helper'; },
    (f: any) => { f.entry.unit = '99'; },
    (f: any) => { f.entry.label = 'refute-7-coverage-correction-2'; },
    (f: any) => { f.entry.subjects = []; },
    (f: any) => { f.write('research/r-refute-7.json', '{}'); },
    (f: any) => { f.write('items/def-a.md', 'changed'); },
    (f: any) => { f.write('research/r-old-report.json', '{}'); },
  ]) {
    const f = fixture(t); mutate(f); f.save();
    assert.throws(() => refuterContinuations(f.ctx, f.stage, true), /Invalid owner/);
  }
});


test('native stage changes only correction label/task and retains model, schema and artifact', t => {
  const f = fixture(t); f.save();
  f.write('research/r-batch-8.pages.json', []);
  const stage: any = stages.find(s => s.id === '3a-refute');
  const plans = stage.plan(f.ctx, ['7', '8']);
  assert.equal(plans[0].label, 'refute-7-coverage-correction-1');
  assert.equal(plans[0].task, f.entry.task.path);
  assert.equal(plans[0].role, 'refuter');
  assert.equal(plans[0].brief, 'briefs/refuter.md');
  assert.equal(plans[0].outputSchema, 'briefs/schemas/refute-report.json');
  assert.equal(plans[0].resultArtifact, 'research/r-refute-7.json');
  const configuredProfile = stage.modelProfile(plans[0]);
  assert.equal(configuredProfile, stage.modelProfile(plans[1]));
  assert.ok(typeof configuredProfile === 'string' && configuredProfile.length > 0);
  assert.ok((Object.values(MODEL_PROFILE_NAMES) as string[]).includes(configuredProfile));
  assert.equal(plans[1].label, 'refute-8');
  assert.equal(plans[1].task, 'briefs/tasks/alpha-3a-refuter.md');
  assert.deepEqual(plans.map((p: any) => p.covers), [['7'], ['8']]);
  assert.equal(stage.artifacts(f.ctx, '7'), 'research/r-refute-7.json');
});

function multipleFixture(t: any) {
  const f = fixture(t);
  const ref = (path: string) => ({ path, sha256: createHash('sha256').update(readFileSync(join(f.repo, path))).digest('hex') });
  const report = { batch: '8', opened: ['def-b', 'def-context'], not_opened: [], flagged: [] };
  f.write('research/r-refute-8.json', report); f.write('research/r-old-report-8.json', report);
  f.write('research/r-step3-scope-8.json', { refuter_scope: ['def-b'] });
  f.write('research/r-batch-8.pages.json', []);
  f.write('items/def-b.md', 'second fixture carrier');
  f.write('research/r-correction-task-8.md', 'second independent fresh read');
  f.write('research/r-dispatch/refuter-refute-8.result.json', {
    run: 'r', role: 'refuter', label: 'refute-8', covers: ['8'], ok: true, exit_code: 0,
    ended_at: '2026-10-08T04:19:33Z', tail: JSON.stringify(report),
  });
  const second = { ...f.entry, unit: '8', label: 'refute-8-coverage-correction-1',
    previous_result: ref('research/r-dispatch/refuter-refute-8.result.json'),
    report_path: 'research/r-refute-8.json', report_sha256: ref('research/r-refute-8.json').sha256,
    original_report: ref('research/r-old-report-8.json'), scope_sha256: ref('research/r-step3-scope-8.json').sha256,
    subjects: [{ id: 'def-b', ...ref('items/def-b.md') }], task: ref('research/r-correction-task-8.md') };
  f.auth.continuations.push(second); f.save();
  const stage = { ...f.stage, id: '3a-refute', units: () => ['7', '8', '9'],
    plan: (_ctx: any, pending: string[]) => pending.map(unit => ({ label: `refute-${unit}`, covers: [unit], task: 'original-task' })) };
  f.write('research/r-dispatch/refuter-refute-9.result.json', { run: 'r', covers: ['9'], ok: true });
  return { ...f, second, stage };
}

test('multiple corrections replace only their respective original stable receipts', t => {
  const f = multipleFixture(t), pattern = refuterContinuationPattern(f.ctx, f.stage);
  assert.deepEqual([...covered(join(f.repo, 'research/r-dispatch'), pattern)], ['9']);
  for (const unit of ['7', '8']) {
    assert.equal(pattern.test(`refuter-refute-${unit}.result.json`), false);
    assert.equal(pattern.test(`refuter-refute-${unit}-coverage-correction-1.result.json`), true);
    assert.equal(pattern.test(`refuter-refute-${unit}-coverage-correction-2.result.json`), false);
    assert.equal(pattern.test(`refuter-refute-${unit}-coverage-correction-1.attempt-1.result.json`), false);
    assert.equal(pattern.test(`refuter-refute-${unit}-coverage-correction-1XresultXjson`), false);
  }
  assert.equal(pattern.test('refuter-refute-9-coverage-correction-1.result.json'), false);
  f.write('research/r-dispatch/refuter-refute-7-coverage-correction-1.result.json', { run: 'r', covers: ['7'], ok: true });
  f.write('research/r-dispatch/refuter-refute-8-coverage-correction-1.result.json', { run: 'r', covers: ['8'], ok: false });
  assert.deepEqual([...covered(join(f.repo, 'research/r-dispatch'), pattern)].sort(), ['7', '9']);
});

test('pending-unit guards allow a completed sibling but still spend each correction once', t => {
  for (const ok of [true, false]) {
    const f = multipleFixture(t), wrapped = withRefuterContinuation(f.stage);
    const initial = wrapped.plan(f.ctx, ['7', '8', '9']);
    assert.deepEqual(initial.map((p: any) => [p.label, p.task]), [
      [f.entry.label, f.entry.task.path], [f.second.label, f.second.task.path], ['refute-9', 'original-task'],
    ]);
    f.write('research/r-dispatch/refuter-refute-7-coverage-correction-1.result.json', { run: 'r', covers: ['7'], ok });
    // A finished sibling may legitimately replace its report and evolve inputs.
    f.write(f.entry.report_path, '{}'); f.write('research/r-step3-scope-7.json', '{}');
    f.write('items/def-a.md', 'changed after sibling completion');
    assert.equal(wrapped.plan(f.ctx, ['8'])[0].label, f.second.label);
    assert.throws(() => wrapped.plan(f.ctx, ['7']), /already attempted/);
    f.write('research/r-dispatch/refuter-refute-8-coverage-correction-1.result.json', { run: 'r', covers: ['8'], ok: false });
    assert.throws(() => wrapped.plan(f.ctx, ['8']), /already attempted/);
    assert.equal(wrapped.plan(f.ctx, ['9'])[0].label, 'refute-9');
  }
});

test('multiple entries retain immutable history and selected current-input guards', t => {
  for (const mutate of [
    (f: any) => f.write(f.second.previous_result.path, '{}'),
    (f: any) => f.write(f.second.original_report.path, '{}'),
    (f: any) => f.write(f.second.task.path, 'changed task'),
    (f: any) => f.write(f.second.report_path, '{}'),
    (f: any) => f.write('research/r-step3-scope-8.json', '{}'),
    (f: any) => f.write('items/def-b.md', 'changed pending subject'),
  ]) {
    const f = multipleFixture(t); mutate(f);
    assert.throws(() => withRefuterContinuation(f.stage).plan(f.ctx, ['8']), /Invalid owner/);
  }
  const f = multipleFixture(t);
  f.write(f.entry.original_report.path, '{}');
  // Immutable sibling authentication remains mandatory even when not selected.
  assert.throws(() => withRefuterContinuation(f.stage).plan(f.ctx, ['8']), /Invalid owner/);
});

test('continuation lists reject duplicate units, duplicate labels and empty authorization', t => {
  for (const mutate of [
    (f: any) => f.auth.continuations.push({ ...f.entry }),
    (f: any) => { f.second.unit = 7; },
    (f: any) => { f.second.label = f.entry.label; },
    (f: any) => { f.auth.continuations = []; },
    (f: any) => { f.auth.authorization = ' '; },
  ]) {
    const f = multipleFixture(t); mutate(f); f.save();
    assert.throws(() => refuterContinuations(f.ctx, f.stage), /Invalid owner/);
  }
});
