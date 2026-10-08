import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { refuterContinuations, refuterContinuationPattern, withRefuterContinuation } from '../stages/refuter-continuations.mts';
import { stages } from '../stages/mathlib.mts';
import { stages as readyStages } from '../stages/mathlib.ready-pairs.mts';
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
  write('research/r-step5-scope-7.json', { refuter_scope: ['def-a'] });
  write('research/r-batch-7.pages.json', [{ id: 'page', category: 'algebra', items: [{ id: 'def-a' }] }]);
  write('items/def-a.md', 'fixture carrier'); write('research/r-correction-task.md', 'fresh actual read');
  write('research/r-dispatch/refuter-refute-7.result.json', { run: 'r', role: 'refuter', label: 'refute-7', covers: ['7'], ok: true, exit_code: 0, ended_at: '2026-10-08T04:19:33Z', tail: JSON.stringify(report) });
  write('research/r-dispatch/refuter-refute-8.result.json', { run: 'r', covers: ['8'], ok: true });
  const entry = { unit: '7', label: 'refute-7-coverage-correction-1', reason: 'one extra context carrier', writers_drained_at: '2026-10-08T04:20:00Z', previous_result: ref('research/r-dispatch/refuter-refute-7.result.json'), report_path: 'research/r-refute-7.json', report_sha256: ref('research/r-refute-7.json').sha256, original_report: ref('research/r-old-report.json'), scope_sha256: ref('research/r-step5-scope-7.json').sha256, subjects: [{ id: 'def-a', ...ref('items/def-a.md') }], task: ref('research/r-correction-task.md') };
  const auth = { version: 1, run: 'r', authorized_by: 'owner', authorization: 'one fresh native read', continuations: [entry] };
  const save = () => write('research/r-step5-refuter-continuations.json', auth);
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
  const stage: any = stages.find(s => s.id === '5a-refute');
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
  assert.ok(Object.values(MODEL_PROFILE_NAMES).includes(configuredProfile));
  assert.equal(plans[1].label, 'refute-8');
  assert.equal(plans[1].task, 'briefs/tasks/alpha-5a-refuter.md');
  assert.deepEqual(plans.map((p: any) => p.covers), [['7'], ['8']]);
  assert.equal(stage.artifacts(f.ctx, '7'), 'research/r-refute-7.json');
});


test('ordinary and ready tables inherit exactly one identical opt-in route', t => {
  const f = fixture(t); f.save(); f.write('research/r-batch-8.pages.json', []);
  const ordinary: any = stages.find(s => s.id === '5a-refute');
  const ready: any = readyStages.find(s => s.id === '5a-refute');
  assert.deepEqual(ordinary.plan(f.ctx, ['7', '8']), ready.plan(f.ctx, ['7', '8']));
  assert.equal(ordinary.pattern(f.ctx).source, ready.pattern(f.ctx).source);
  assert.equal(stages.filter(s => s.id === '5a-refute').length, 1);
  assert.equal(readyStages.filter(s => s.id === '5a-refute').length, 1);
  const unrelated = { id: 'other-stage', plan: () => [] };
  assert.equal(withRefuterContinuation(unrelated), unrelated);
  const ordinaryDefault = { id: '5a-refute', units: () => ['7'], pattern: /^ordinary$/, plan: () => [{ role: 'refuter', label: 'refute-7' }] };
  rmSync(join(f.repo, 'research/r-step5-refuter-continuations.json'));
  const route = withRefuterContinuation(ordinaryDefault);
  assert.equal(route.pattern(f.ctx), ordinaryDefault.pattern);
  assert.deepEqual(route.plan(f.ctx, ['7']), ordinaryDefault.plan());
});
