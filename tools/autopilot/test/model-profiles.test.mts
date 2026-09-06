import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { stages } from '../stages/mathlib.mts';
import { MODELS, MODEL_PROFILE_NAMES, MODEL_PROFILES } from '../../models.mjs';

const REPO = fileURLToPath(new URL('../../..', import.meta.url)).replace(/\/$/, '');
const ctx: any = {
  run: 'frontier-23',
  repo: REPO,
  dispatchDir: join(REPO, 'research/frontier-23-dispatch'),
};
const stage = (id: string): any => stages.find((candidate: any) => candidate.id === id);
const selected = (s: any, plan: any): string | undefined => plan.profile
  ?? (typeof s.modelProfile === 'function' ? s.modelProfile(plan) : s.modelProfile);

test('the tracked dispatcher argv forwards stage-selected profiles', () => {
  const config = JSON.parse(readFileSync(join(REPO, 'autopilot.config.json'), 'utf8'));
  const index = config.argv.indexOf('--profile');
  assert.notEqual(index, -1);
  assert.equal(config.argv[index + 1], '{profile}');
});

test('registered owner profiles name the exact models, efforts, and windows', () => {
  const terraHigh = MODEL_PROFILES[MODEL_PROFILE_NAMES.terraHigh];
  assert.equal(terraHigh.model, 'gpt-5.6-terra');
  assert.equal(terraHigh.effort, 'high');
  assert.equal(terraHigh.contextWindow, 872_000);

  const liveCompat = MODEL_PROFILES['gpt-5.6-terra-xhigh'];
  assert.equal(liveCompat.model, 'gpt-5.6-terra');
  assert.equal(liveCompat.effort, 'high');
  assert.equal(liveCompat.requestedEffort, 'high');
});

test('steps 5, 6, and 7 select the requested stage-specific profiles', () => {
  const authorStage = stage('5-author');
  const author = authorStage.plan(ctx, ['1'])[0];
  assert.equal(selected(authorStage, author), MODEL_PROFILE_NAMES.terraHigh);
  assert.equal(selected(authorStage, { role: 'alpha', job: 'adjudication' }), undefined,
    'Step 5 changes authoring agents, not its gate-adjudication Alpha');

  const readStage = stage('6a-read');
  assert.equal(selected(readStage, readStage.plan(ctx, ['1'])[0]), MODEL_PROFILE_NAMES.terraHigh);

  const refuteStage = stage('6a-refute');
  assert.equal(selected(refuteStage, refuteStage.plan(ctx, ['1'])[0]), MODEL_PROFILE_NAMES.terraHigh);

  const judgeStage = stage('7-judge');
  const plans = judgeStage.plan(ctx, judgeStage.units(ctx));
  for (const plan of plans.filter((candidate: any) => candidate.role === 'alpha-group-read')) {
    assert.equal(selected(judgeStage, plan), MODEL_PROFILE_NAMES.terraHigh);
  }
  assert.equal(selected(judgeStage, plans.find((candidate: any) => candidate.role === 'tool')), undefined,
    'the judge tool is not a Step-7 reader agent');
});

test('group Alpha resolves to Sol high', () => {
  const result = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'alpha', '--brief', 'briefs/alpha.md', '--label', 'alpha-model-test',
    '--run', 'alpha-model-test', '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  assert.equal(row.model, MODELS.sol.id);
  assert.equal(row.requested_effort, 'high');
  assert.equal(row.provider_effort, 'high');
});

test('Step-8 fatal group adjudicator uses Sol xhigh', () => {
  const result = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'alpha-adjudicate', '--brief', 'briefs/alpha.md',
    '--label', 'step8-alpha-model-test', '--run', 'step8-alpha-model-test',
    '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  assert.equal(row.model, MODELS.sol.id);
  assert.equal(row.requested_effort, 'xhigh');
  assert.equal(row.provider_effort, 'xhigh');
});

test('every model-backed Step 9 and Step 10 dispatch inherits Terra high, including repairs', () => {
  for (const s of stages.filter((candidate: any) => /^(?:9|10)-/.test(candidate.id))) {
    for (const role of ['alpha', 'alpha-high', 'alpha-report', 'beta']) {
      assert.equal(selected(s, { role, job: 'audit' }), MODEL_PROFILE_NAMES.terraHigh,
        `${s.id}/${role}`);
    }
    assert.equal(selected(s, { role: 'tool', job: 'bookkeeping-mechanical' }), undefined,
      `${s.id} changed a deterministic tool job into a model call`);
  }
  assert.equal(selected(stage('8-adjudicate'), { role: 'alpha-adjudicate', job: 'adjudication' }), undefined,
    'Step 8 must retain its dedicated adjudication role');
});
