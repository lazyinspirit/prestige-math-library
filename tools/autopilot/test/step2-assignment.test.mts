import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { stages as mathStages, alphaGroups as mathGroups } from '../stages/mathlib.mts';
import { stages as physicsStages, alphaGroups as physicsGroups } from '../../physics-autopilot/stages/mathlib.mts';
import { authorResultAllowed as mathAuthor } from '../../auditor-created-items.mjs';
import { authorResultAllowed as physicsAuthor } from '../../physics-support/auditor-created-items.mjs';
import { generateAssignment } from '../../alpha-group-assignment.mjs';
for (const [name, stages, groups, author] of [['math', mathStages, mathGroups, mathAuthor], ['physics', physicsStages, physicsGroups, physicsAuthor]] as const) {
  test(`${name}: Step 2 is one native tool, one structural gate, and accepts historical results`, () => {
    const stage = stages.find(stage => stage.id === '2-assign')!;
    const ctx: any = { repo: '/unused', run: 'fixture' };
    const plans = stage.plan(ctx, ['all']);
    assert.equal(plans.length, 1);
    const plan: any = plans[0];
    assert.equal(plan.role, 'tool'); assert.equal(plan.label, 'assign');
    assert.equal(plan.job, 'bookkeeping-mechanical'); assert.equal(plan.timeout, 120);
    assert.deepEqual(plan.covers, ['all']);
    assert.ok(plan.argv.includes('--generate'));
    for (const field of ['brief', 'task', 'modelProfile', 'profile']) assert.equal(plan[field], undefined);
    assert.equal(stage.modelProfile, undefined);
    assert.deepEqual(stage.gates!(ctx).map(gate => gate.id), ['alpha-groups']);
    assert.ok(stage.pattern instanceof RegExp);
    for (const filename of ['tool-assign.result.json', 'alpha-assign.result.json', 'alpha-assign-assign.result.json'])
      assert.ok((stage.pattern as RegExp).test(filename), filename);
    assert.equal((stage.pattern as RegExp).test('tool-other.result.json'), false);
  });
  test(`${name}: aa survives planning fallback, assignment readers, group-reader routing and author provenance`, t => {
    const repo = mkdtempSync(join(tmpdir(), 'step2-native-'));
    t.after(() => rmSync(repo, { recursive: true, force: true }));
    mkdirSync(join(repo, 'research'));
    for (let batch = 1; batch <= 80; batch++) writeFileSync(join(repo, 'research', `fixture-batch-${batch}.pages.json`), JSON.stringify([{ category: 'a' }]));
    const ctx: any = { repo, run: 'fixture' };
    assert.equal(groups(ctx)[26].label, 'aa');
    writeFileSync(join(repo, 'research/fixture-alpha-groups.json'), JSON.stringify(generateAssignment(
      Array.from({ length: 80 }, (_, index) => ({ id: String(index + 1), categories: ['a'] })), { maxGroups: 27, maxBatches: 3 })));
    assert.equal(groups(ctx)[26].label, 'aa');
    const reader = stages.find(stage => stage.id === '6-judge')!;
    assert.ok(reader.units(ctx).includes('aa'));
    assert.ok(reader.pattern instanceof RegExp && reader.pattern.test('alpha-group-read-aa.result.json'));
    const base = { ok: true, started_at: '2026-10-01', ended_at: '2026-10-02', covers: ['79', '80'] };
    for (const [step, role, label] of [
      [3, 'alpha-high', 'step3b-aa-0123456789abcdef'], [5, 'alpha', '5a-aa'],
      [7, 'alpha-adjudicate', 'step7-aa'], [7, 'alpha-adjudicate', 'repair-8-aa-round-1'],
      [7, 'final-adjudicator', 'step7-fa-aa-round-1'], [8, 'alpha', 'step8-carried-adjudicate-aa-1'],
    ] as const) {
      assert.equal(author(step, { ...base, role, label }), true, label);
      assert.equal(author(step, { ...base, role: 'tool', label }), false);
      assert.equal(author(step, { ...base, role, label, ok: false }), false);
    }
    assert.equal(author(7, { ...base, role: 'alpha-adjudicate', label: 'step7-aa1' }), false);
  });
}
