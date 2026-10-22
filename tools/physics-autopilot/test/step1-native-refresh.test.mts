import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { stages } from '../stages/mathlib.mts';
import { MODEL_PROFILE_NAMES } from '../../physics-support/models.mjs';
import { statementFirstStages } from '../../autopilot/src/statement-first.mts';
import { writeStatementPolicy } from '../../statement-first-policy.mjs';

function fixture(t: any) {
  const repo = mkdtempSync(join(tmpdir(), 'physics-step1-refresh-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  for (const dir of ['research', 'dispatch', 'items', 'library/test']) mkdirSync(join(repo, dir), { recursive: true });
  const ctx: any = { repo, run: 'demo', dispatchDir: join(repo, 'dispatch') };
  const stage = stages.find(s => s.id === '1-scaffold')!;
  const manifest: any[] = [
    { id: 'pair-a', kind: 'A', category: 'test', items: [] },
    { id: 'pair-a-examples', kind: 'B', category: 'test', items: [] },
  ];
  const manifestPath = join(repo, 'research/demo-batch-1.pages.json');
  const save = () => writeFileSync(manifestPath, JSON.stringify(manifest)); save();
  const prompt = join(ctx.dispatchDir, 'beta-batch-1.prompt.md');
  const direction = join(repo, 'research/demo-owner-authoring-direction.md');
  writeFileSync(prompt, 'Full original assignment: retain all physical scope and mathematical claims.');
  writeFileSync(direction, 'Owner releases the resolved prerequisite hold. Complete the full assigned A/B pair.');
  const originalPath = join(ctx.dispatchDir, 'beta-batch-1.result.json');
  const original: any = { run: 'demo', role: 'beta', label: 'batch-1', covers: ['1'], ok: true,
    session_id: 'original-session', prompt };
  const result = () => writeFileSync(originalPath, JSON.stringify(original)); result();
  const request = { id: 'nonce-1', requestedAt: '2026-10-23T00:00:00.000Z', reason: '/tmp ENOSPC resolved; actual carriers absent' };
  const plan = () => stage.refreshPlan!(ctx, '1', request);
  return { ctx, repo, stage, manifest, save, prompt, direction, original, originalPath, result, request, plan };
}

test('Step-1 native continuation retains the entire genuine original prompt and current owner direction', t => {
  const f = fixture(t), before = readFileSync(f.originalPath, 'utf8'), prompt = readFileSync(f.prompt, 'utf8');
  const plan = f.plan();
  assert.equal(plan.label, 'batch-1-refresh-nonce-1'); assert.equal(plan.role, 'beta');
  assert.equal(plan.job, 'scaffolding'); assert.deepEqual(plan.covers, ['1']);
  assert.equal((f.stage.modelProfile as Function)(plan), MODEL_PROFILE_NAMES.lunaMax);
  assert.ok((f.stage.pattern as RegExp).test(`beta-${plan.label}.result.json`));
  assert.ok(!(f.stage.pattern as RegExp).test('beta-fix-batch-1.result.json'));
  const task = readFileSync(join(f.repo, plan.task as string), 'utf8');
  assert.ok(task.includes(prompt)); assert.ok(task.includes(readFileSync(f.direction, 'utf8')));
  assert.ok(task.includes(f.request.reason)); assert.match(task, /physical-scope, empirical/);
  assert.match(task, /single operational continuation/);
  assert.equal(readFileSync(f.originalPath, 'utf8'), before);
  assert.throws(() => f.plan(), /task identity already exists/);
});

test('Step-1 continuation refuses foreign, synthetic, failed, miscovered or promptless originals', t => {
  for (const fields of [{ run: 'other' }, { role: 'alpha' }, { label: 'wrong' }, { covers: ['2'] },
    { covers: ['1', '2'] }, { ok: false }, { written_by: 'autopilot' }, { prompt: undefined }]) {
    const f = fixture(t); Object.assign(f.original, fields); f.result();
    assert.throws(() => f.plan(), /genuine original/);
    assert.equal(existsSync(join(f.repo, 'research/demo-batch-1-refresh-nonce-1.task.md')), false);
  }
});

test('Step-1 continuation requires the current owner direction and original prompt to exist', t => {
  for (const target of ['direction', 'prompt'] as const) {
    const f = fixture(t); rmSync(f[target]); assert.throws(() => f.plan(), /ENOENT/);
  }
  const empty = fixture(t); writeFileSync(empty.prompt, '  ');
  assert.throws(() => empty.plan(), /nonempty genuine/);
  const f = fixture(t); writeFileSync(f.direction, '  ');
  assert.throws(() => f.plan(), /explicit owner/);
});

test('complete authored inventories and carriers cannot purchase an extra author context', t => {
  const f = fixture(t);
  f.manifest[0].items.push({ id: 'def-a' }); f.manifest[1].items.push({ id: 'ex-a' }); f.save();
  for (const path of ['items/def-a.md', 'items/ex-a.md', 'library/test/pair-a.md',
    'library/test/pair-a-examples.md', 'research/demo-batch-1.proof-contracts.json']) writeFileSync(join(f.repo, path), 'authored');
  assert.throws(() => f.plan(), /absent authored carriers/);
  rmSync(join(f.repo, 'items/def-a.md'));
  assert.equal(f.plan().label, 'batch-1-refresh-nonce-1');
});

test('statement-first physics continuation retains its compact authoring decoration', t => {
  const f = fixture(t); writeStatementPolicy(f.repo, 'demo', 'physics');
  mkdirSync(join(f.repo, 'briefs')); writeFileSync(join(f.repo, 'briefs/beta-scaffold.md'), 'Full physics authoring brief.');
  const decorated = statementFirstStages(f.ctx, [f.stage], 'physics')[0];
  const plan = decorated.refreshPlan!(f.ctx, '1', f.request);
  assert.notEqual(plan.brief, 'briefs/beta-scaffold.md');
  assert.equal(decorated.modelProfile, f.stage.modelProfile);
  assert.equal(decorated.pattern, f.stage.pattern);
});
