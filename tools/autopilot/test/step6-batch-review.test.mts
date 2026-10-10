import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, readdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { stages as mathStages } from '../stages/mathlib.mts';
import { stages as physicsStages } from '../../physics-autopilot/stages/mathlib.mts';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { step7AlertId } from '../../step7-evidence.mjs';

const root = new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const json = (path: string, value: unknown) => writeFileSync(path, JSON.stringify(value));
const pages = (batch: string) => [{ id: `page-${batch}`, kind: 'A', title: `Batch ${batch}`,
  category: 'demo', order: Number(batch), requires: batch === '2' ? ['page-1'] : [],
  items: [{ id: `thm-batch-${batch}`, kind: 'thm' }] }];
function shape(repo: string, run: string) {
  mkdirSync(join(repo, 'research'), { recursive: true });
  json(join(repo, 'research', `${run}-alpha-groups.json`), [{ label: 'a', covers: ['1', '2', '3'] }]);
  for (const batch of ['1', '2', '3']) json(join(repo, 'research', `${run}-batch-${batch}.pages.json`), pages(batch));
}
function digest(batch: string): any {
  return { group: 'a', batches: [batch], pages_read: [`page-${batch}`], items_read: [`thm-batch-${batch}`],
    conventions: [{ convention: 'Real variables', fixed_by: `thm-batch-${batch}`, matters_for: [] }],
    load_bearing: [{ id: `thm-batch-${batch}`, statement: 'Fixture statement', used_by: [] }],
    published_dependencies: [], concerns: [], alerts: [],
    seams_checked: batch === '3' ? [] : [{ from: 'page-2', to: 'page-1', faithful: true, note: 'Checked citation' }] };
}
for (const [name, stages] of [['math', mathStages], ['physics', physicsStages]] as const) {
  test(`${name}: one independent Step-6 reviewer per batch, even in one group`, t => {
    const repo = mkdtempSync(join(tmpdir(), 'batch-review-plans-'));
    t.after(() => rmSync(repo, { recursive: true, force: true }));
    shape(repo, 'fixture');
    const stage = stages.find(stage => stage.id === '6-judge')!;
    const ctx: any = { repo, run: 'fixture' };
    assert.deepEqual(stage.units(ctx), ['sweep', '1', '2', '3']);
    const plans: any[] = stage.plan(ctx, stage.units(ctx));
    const readers = plans.filter(plan => plan.role === 'alpha-batch-read');
    assert.equal(readers.length, 3);
    assert.equal(plans.filter(plan => plan.role === 'tool').length, 1);
    assert.equal(new Set(readers.map(plan => plan.resultArtifact)).size, 3);
    for (const plan of readers) {
      assert.deepEqual(plan.covers, [plan.label]);
      assert.equal((stage.modelProfile as Function)(plan), MODEL_PROFILE_NAMES.sol61High);
      assert.match(plan.task[0], new RegExp(`-batch-${plan.label}-step6-read.task.md$`));
      assert.ok((stage.pattern as RegExp).test(`${plan.role}-${plan.label}.result.json`));
      assert.equal(plan.resumeSession, undefined);
      assert.equal(plan.sessionHome, undefined);
    }
    assert.deepEqual(stage.plan(ctx, ['2']).map((plan: any) => plan.covers), [['2']]);
    assert.equal((stage.pattern as RegExp).test('alpha-group-read-a.result.json'), false);
    assert.equal((stage.pattern as RegExp).test('alpha-batch-read-read-again-2-1.result.json'), false);
    // No group assignment is needed to enumerate batch dispatches.
    rmSync(join(repo, 'research/fixture-alpha-groups.json'));
    assert.deepEqual(stage.units(ctx), ['sweep', '1', '2', '3']);
  });
  test(`${name}: digest correction retries only the failed batch with its prior evidence`, async t => {
    const repo = mkdtempSync(join(tmpdir(), 'batch-review-retry-'));
    t.after(() => rmSync(repo, { recursive: true, force: true }));
    shape(repo, 'fixture');
    const stage = stages.find(stage => stage.id === '6-judge')!;
    const started: any[] = [];
    await stage.onGateFailure!({ ctx: { repo, run: 'fixture' }, stage, round: 1,
      executor: { start: (_stage: unknown, plan: unknown) => started.push(plan) },
      failure: { id: 'step7-digests', output: 'batch 2 items_read: missing `thm-batch-2`' } } as any);
    assert.equal(started.length, 1);
    assert.equal(started[0].role, 'alpha-batch-read');
    assert.deepEqual(started[0].covers, []);
    assert.equal(started[0].resultArtifact, 'research/fixture-batch-2-step7-context.json');
    assert.equal((stage.pattern as RegExp).test(`${started[0].role}-${started[0].label}.result.json`), false);
    assert.match(readFileSync(join(repo, started[0].task), 'utf8'), /preserve supported findings/);
  });
  test(`${name}: batch scope, strict digest coverage, same-group alerts and Step-7 handoff`, t => {
    // Math tools resolve the root from their own path. Physics tools also permit
    // an explicit isolated physics root. Both use the actual native CLI.
    const repo = name === 'math' ? root : mkdtempSync(join(tmpdir(), 'physics-batch-review-'));
    const run = `step6batchtest-${name}-${process.pid}`;
    t.after(() => {
      if (name === 'physics') rmSync(repo, { recursive: true, force: true });
      else for (const entry of readdirSync(join(repo, 'research')))
        if (entry.startsWith(`${run}-`)) rmSync(join(repo, 'research', entry), { recursive: true, force: true });
    });
    shape(repo, run);
    if (name === 'physics') {
      for (const dir of ['briefs/tasks', 'briefs/schemas']) mkdirSync(join(repo, dir), { recursive: true });
      for (const file of ['tasks/alpha-step6-read.md', 'tasks/alpha-step7.md', 'tasks/alpha-step7-closure-recovery.md', 'schemas/step7-context.json'])
        copyFileSync(join(root, 'physics/briefs', file), join(repo, 'briefs', file));
    }
    const tool = name === 'math' ? 'tools/step7-scope.mjs' : 'tools/physics-support/step7-scope.mjs';
    const cli = (mode: string) => spawnSync('node', [tool, mode, '--run', run],
      { cwd: root, encoding: 'utf8', env: { ...process.env, ...(name === 'physics' ? { PHYSICS_REPO: repo } : {}) } });
    let result = cli('render');
    assert.equal(result.status, 0, result.stdout + result.stderr);
    const task = readFileSync(join(repo, 'research', `${run}-batch-2-step6-read.task.md`), 'utf8');
    assert.match(task, /only reviewer for batch \*\*2\*\*/);
    assert.match(task, /owning group: \*\*a\*\*/);
    assert.match(task, /`page-2` requires `page-1`/);
    assert.doesNotMatch(task, /`thm-batch-1`|`thm-batch-3`/);
    assert.match(readFileSync(join(repo, 'research', `${run}-alpha-a-step7.task.md`), 'utf8'),
      new RegExp(`${run}-batch-3-step7-context.json`));
    const path = (batch: string) => join(repo, 'research', `${run}-batch-${batch}-step7-context.json`);
    // The old group receipt never substitutes for the three batch receipts.
    json(join(repo, 'research', `${run}-alpha-a-step7-context.json`), digest('1'));
    result = cli('digests');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /batch 2: no/);
    for (const batch of ['1', '2', '3']) json(path(batch), digest(batch));
    assert.equal(cli('digests').status, 0);
    json(path('2'), digest('1'));
    result = cli('digests');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /batch 2 batches: unexpected `1`/);
    const d = digest('2');
    d.items_read.push('thm-batch-1');
    json(path('2'), d);
    assert.match(cli('digests').stderr, /batch 2 items_read: unexpected/);
    d.items_read.pop(); d.seams_checked = [];
    json(path('2'), d);
    assert.match(cli('digests').stderr, /batch 2 seams_checked: missing/);
    const warning = { item: 'thm-batch-3', finding: 'The endpoint hypothesis needs examination.', severity: 'would-be-fatal' };
    const one = digest('1'), two = digest('2');
    one.alerts = [warning]; two.alerts = [warning];
    json(path('1'), one); json(path('2'), two);
    assert.equal(cli('digests').status, 0, cli('digests').stderr);
    result = cli('render');
    assert.equal(result.status, 0, result.stdout + result.stderr);
    const alerts = JSON.parse(readFileSync(join(repo, 'research', `${run}-step7-alerts.json`), 'utf8')).alerts;
    assert.equal(alerts.length, 2);
    assert.deepEqual(alerts.map((alert: any) => alert.from_batch), ['1', '2']);
    assert.ok(alerts.every((alert: any) => alert.owning_group === 'a' && alert.from_group === 'a'));
    assert.notEqual(alerts[0].alert_id, alerts[1].alert_id);
    two.concerns = [{ id: 'thm-batch-3', concern: warning.finding, severity: warning.severity }]; two.alerts = [];
    json(path('2'), two);
    assert.match(cli('digests').stderr, /batch 2: concern.*does not own/);
    json(path('2'), { ...digest('2'), group: 'b' });
    assert.match(cli('digests').stderr, /batch 2: digest reports group/);
  });
}
test('batch provenance differentiates warnings while preserving historical alert identities', () => {
  const alert = { source: 'step6-read', from_group: 'a', owning_group: 'a', item: 'thm-demo', finding: 'Same warning', severity: 'presentation' };
  assert.notEqual(step7AlertId({ ...alert, from_batch: '1' }), step7AlertId({ ...alert, from_batch: '2' }));
  assert.equal(step7AlertId(alert), step7AlertId({ ...alert, from_batch: undefined }));
});
