import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { stages } from '../stages/mathlib.mts';
import { MODEL_PROFILE_NAMES, MODEL_PROFILES } from '../../models.mjs';

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
  const deepseek = MODEL_PROFILES[MODEL_PROFILE_NAMES.deepseekXhigh1m];
  assert.equal(deepseek.model, 'deepseek-v4-pro');
  assert.equal(deepseek.requestedEffort, 'xhigh');
  assert.equal(deepseek.effort, 'max');
  assert.equal(deepseek.contextWindow, 1_048_576);
  assert.equal(deepseek.attestContext, true);

  const reader = MODEL_PROFILES[MODEL_PROFILE_NAMES.gpt54Xhigh1m];
  assert.equal(reader.model, 'gpt-5.4');
  assert.equal(reader.effort, 'xhigh');

  const gpt54High = MODEL_PROFILES[MODEL_PROFILE_NAMES.gpt54High1m];
  assert.equal(gpt54High.model, 'gpt-5.4');
  assert.equal(gpt54High.effort, 'high');
  assert.equal(gpt54High.contextWindow, 1_000_000);

  const refuter = MODEL_PROFILES[MODEL_PROFILE_NAMES.terraXhigh];
  assert.equal(refuter.model, 'gpt-5.6-terra');
  assert.equal(refuter.effort, 'xhigh');
});

test('steps 5, 6, and 7 select the requested stage-specific profiles', () => {
  const authorStage = stage('5-author');
  const author = authorStage.plan(ctx, ['1'])[0];
  assert.equal(selected(authorStage, author), MODEL_PROFILE_NAMES.gpt54High1m);
  assert.equal(selected(authorStage, { role: 'alpha', job: 'adjudication' }), undefined,
    'Step 5 changes authoring agents, not its gate-adjudication Alpha');

  const readStage = stage('6a-read');
  assert.equal(selected(readStage, readStage.plan(ctx, ['1'])[0]), MODEL_PROFILE_NAMES.gpt54High1m);

  const refuteStage = stage('6a-refute');
  assert.equal(selected(refuteStage, refuteStage.plan(ctx, ['1'])[0]), MODEL_PROFILE_NAMES.terraXhigh);

  const judgeStage = stage('7-judge');
  const plans = judgeStage.plan(ctx, judgeStage.units(ctx));
  for (const plan of plans.filter((candidate: any) => candidate.role === 'alpha-group-read')) {
    assert.equal(selected(judgeStage, plan), MODEL_PROFILE_NAMES.terraXhigh);
  }
  assert.equal(selected(judgeStage, plans.find((candidate: any) => candidate.role === 'tool')), undefined,
    'the Terra judge tool is not a Step-7 reader agent');
});

test('every model-backed Step 9 and Step 10 dispatch inherits GPT-5.4 high, including repairs', () => {
  for (const s of stages.filter((candidate: any) => /^(?:9|10)-/.test(candidate.id))) {
    for (const role of ['alpha', 'alpha-high', 'alpha-report', 'beta']) {
      assert.equal(selected(s, { role, job: 'audit' }), MODEL_PROFILE_NAMES.gpt54High1m,
        `${s.id}/${role}`);
    }
    assert.equal(selected(s, { role: 'tool', job: 'bookkeeping-mechanical' }), undefined,
      `${s.id} changed a deterministic tool job into a model call`);
  }
  assert.equal(selected(stage('8-adjudicate'), { role: 'alpha-adjudicate', job: 'adjudication' }), undefined,
    'Step 8 must retain its existing Sol adjudicator');
});
