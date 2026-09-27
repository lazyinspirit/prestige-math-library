import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
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

test('Step 8 restart request blocks the old controller before dispatch and admits its replacement', () => {
  const repo = mkdtempSync(join(tmpdir(), 'step8-restart-'));
  mkdirSync(join(repo, 'research'));
  const path = join(repo, 'research/demo-step8-restart.json');
  try {
    writeFileSync(path, JSON.stringify({ controller_pid: process.pid }));
    assert.throws(() => stage('8-scope').plan({ repo, run: 'demo' }, ['all']), /restart.*pending/);
    writeFileSync(path, JSON.stringify({ controller_pid: process.pid + 1 }));
    assert.equal(stage('8-scope').plan({ repo, run: 'demo' }, ['all'])[0].label, 'step8-scope-prepare');
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('the tracked dispatcher argv forwards stage-selected profiles', () => {
  const config = JSON.parse(readFileSync(join(REPO, 'autopilot.config.json'), 'utf8'));
  const index = config.argv.indexOf('--profile');
  assert.notEqual(index, -1);
  assert.equal(config.argv[index + 1], '{profile}');
});

test('registered owner profiles name the exact models, efforts, and windows', () => {
  const solHigh = MODEL_PROFILES[MODEL_PROFILE_NAMES.solHigh];
  assert.equal(solHigh.model, 'gpt-6-sol');
  assert.equal(solHigh.effort, 'high');
  assert.equal(solHigh.contextWindow, 1_000_000);
  const solXHigh = MODEL_PROFILES[MODEL_PROFILE_NAMES.solXHigh];
  assert.equal(solXHigh.model, 'gpt-6-sol');
  assert.equal(solXHigh.effort, 'xhigh');
  assert.equal(solXHigh.requestedEffort, 'xhigh');
  assert.equal(solXHigh.contextWindow, 1_000_000);
  const solMax = MODEL_PROFILES[MODEL_PROFILE_NAMES.solMax];
  assert.equal(solMax.model, 'gpt-6-sol');
  assert.equal(solMax.effort, 'max');
  assert.equal(solMax.requestedEffort, 'max');
  const lunaMax = MODEL_PROFILES[MODEL_PROFILE_NAMES.lunaMax];
  assert.equal(lunaMax.model, 'gpt-6-luna');
  assert.equal(lunaMax.effort, 'max');
  assert.equal(lunaMax.requestedEffort, 'max');
  const astraMedium = MODEL_PROFILES[MODEL_PROFILE_NAMES.astraMedium];
  assert.equal(astraMedium.model, 'gpt-6-astra');
  assert.equal(astraMedium.effort, 'medium');

  const deepseek = MODEL_PROFILES[MODEL_PROFILE_NAMES.deepseekFlashMax];
  assert.equal(deepseek.model, 'deepseek-flash');
  assert.equal(deepseek.provider, 'deepseek');
  assert.equal(deepseek.effort, 'max');
  assert.equal(deepseek.contextWindow, 1_048_576);
});

test('Step 3 scopes use DeepSeek and authors use Luna while Step 5 adjudication stays Sol', () => {
  assert.equal(stage('3a-scope').modelProfile, MODEL_PROFILE_NAMES.deepseekFlashMax);
  const authorStage = stage('3b-author');
  const author = { role: 'alpha-high', job: 'authoring' };
  assert.equal(selected(authorStage, author), MODEL_PROFILE_NAMES.lunaMax);
  assert.equal(selected(authorStage, {
    role: 'beta', job: 'authoring', label: 'author-recover-1-1',
  }), MODEL_PROFILE_NAMES.lunaMax, 'Step 3 recovery authors use the same profile');
  assert.equal(selected(authorStage, { role: 'alpha-high', job: 'authoring' }), MODEL_PROFILE_NAMES.lunaMax);

  const adjudicate = stage('5a-adjudicate');
  assert.equal(selected(adjudicate, adjudicate.plan(ctx, ['1'])[0]), MODEL_PROFILE_NAMES.solHigh,
    'Step 5a adjudication runs on the Sol high lane');
  const cross = stage('5b-cross');
  assert.equal(selected(cross, cross.plan(ctx, ['all'])[0]), MODEL_PROFILE_NAMES.solXHigh);

  const judgeStage = stage('6-judge');
  const plans = judgeStage.plan(ctx, judgeStage.units(ctx));
  for (const plan of plans.filter((candidate: any) => candidate.role === 'alpha-group-read')) {
    assert.equal(selected(judgeStage, plan), MODEL_PROFILE_NAMES.lunaMax);
  }
  assert.equal(selected(judgeStage, plans.find((candidate: any) => candidate.role === 'tool')), undefined,
    'the judge tool is not a Step-6 reader agent');
  assert.deepEqual(plans.find((candidate: any) => candidate.role === 'tool').argv.slice(0, 8),
    ['node', 'tools/judge-sweep.mjs', '--run', ctx.run, '--lineup', 'sol', '--effort', 'high']);
  assert.deepEqual(judgeStage.gates(ctx)[0].argv.slice(0, 4),
    ['env', 'JUDGE_LINEUP=sol', 'node', 'tools/level-coverage.mjs']);
  assert.match(stage('7.4-rejudge').label, /Sol-high/);
  assert.deepEqual(stage('7.8-gate').gates({ ...ctx, doctor: true })
    .find((candidate: any) => candidate.id === 'judge-closure').argv.slice(0, 2),
    ['env', 'JUDGE_LINEUP=sol']);
});

test('Step 5a readers and refuters run Luna max, and the tool lanes stay model-free', () => {
  for (const [id, role, profile] of [
    ['5a-read', 'reader', MODEL_PROFILE_NAMES.lunaMax],
    ['5a-refute', 'refuter', MODEL_PROFILE_NAMES.lunaMax],
  ] as const) {
    const st = stage(id);
    const plan = st.plan(ctx, ['1'])[0];
    assert.equal(plan.role, role);
    assert.equal(selected(st, plan), profile);
    assert.equal(selected(st, { role: 'tool' }), undefined, `${id} keeps its tool lane model-free`);
  }
  for (const id of ['5a-prepare', '5a-split', '5a-collect', '5a-baseline', '5b-edges', '5b-close']) {
    const st = stage(id);
    assert.equal(selected(st, st.plan(ctx, ['1'])[0]), undefined, `${id} is a deterministic tool stage`);
  }
});

test('Step 1 scaffolders use Sol max', () => {
  const scaffoldStage = stage('1-scaffold');
  const scaffold = scaffoldStage.plan(ctx, ['1'])[0];
  assert.equal(selected(scaffoldStage, scaffold), MODEL_PROFILE_NAMES.solMax);
  assert.equal(selected(scaffoldStage, {
    role: 'beta', job: 'scouting', label: 'source-scout-1-b1',
  }), undefined, 'source scouting is not a Step 1 scaffolding dispatch');
});

test('group Alpha resolves to Sol high', () => {
  assert.equal(stage('2-assign').modelProfile, MODEL_PROFILE_NAMES.deepseekFlashMax,
    'batch assignment runs on the DeepSeek Flash lane');
  const result = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'alpha', '--brief', 'briefs/alpha.md', '--label', 'alpha-model-test',
    '--run', 'alpha-model-test', '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  assert.equal(row.model, MODELS.sol.id);
  assert.equal(row.requested_effort, 'high');
  assert.equal(row.provider_effort, 'high');
});

test('Step-3 scope uses DeepSeek and authoring uses Luna', () => {
  for (const [id, model] of [['3a-scope', MODELS.deepseekFlash.id], ['3b-author', MODELS.luna.id]]) {
    const profile = MODEL_PROFILES[stage(id).modelProfile];
    assert.equal(profile.model, model);
    assert.equal(profile.effort, 'max');
    assert.equal(profile.requestedEffort, 'max');
  }
});

test('Step-7 fatal group adjudicator uses Astra medium', () => {
  const result = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'alpha-adjudicate', '--brief', 'briefs/alpha.md',
    '--profile', MODEL_PROFILE_NAMES.astraMedium,
    '--label', 'step7-alpha-model-test', '--run', 'step7-alpha-model-test',
    '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  assert.equal(row.model, MODELS.astra.id);
  assert.equal(row.requested_effort, 'medium');
  assert.equal(row.provider_effort, 'medium');
});

test('Step 8 agents use Sol max and Step 9 agents use DeepSeek Flash max', () => {
  for (const s of stages.filter((candidate: any) => /^(?:8|9)-/.test(candidate.id))) {
    const expected = s.id.startsWith('8-') ? MODEL_PROFILE_NAMES.solMax : MODEL_PROFILE_NAMES.deepseekFlashMax;
    for (const role of ['alpha', 'alpha-high', 'alpha-report', 'beta']) {
      assert.equal(selected(s, { role, job: 'audit' }), expected,
        `${s.id}/${role}`);
    }
    assert.equal(selected(s, { role: 'tool', job: 'bookkeeping-mechanical' }), undefined,
      `${s.id} changed a deterministic tool job into a model call`);
  }
  assert.equal(selected(stage('8-scope'), { role: 'alpha', label: 'step8-lead', job: 'audit' }),
    MODEL_PROFILE_NAMES.solMax);
  assert.equal(selected(stage('7.1-adjudicate'), { role: 'alpha-adjudicate', job: 'adjudication' }),
    MODEL_PROFILE_NAMES.astraMedium, 'Step 7 selects the Astra adjudication profile');
  assert.equal(stage('7.5-adjudicate').modelProfile, MODEL_PROFILE_NAMES.astraMedium);
  assert.equal(MODEL_PROFILES[MODEL_PROFILE_NAMES.solMax].provider, 'openai');
  assert.equal(MODEL_PROFILES[MODEL_PROFILE_NAMES.deepseekFlashMax].provider, 'deepseek');
});

test('the shared Step-3 authoring brief mandates authoritative web verification', () => {
  const source = readFileSync(join(REPO, 'briefs/group-author.md'), 'utf8');
  assert.match(source, /If unsure/i);
  assert.match(source, /search the web/i);
  assert.match(source, /authoritative sources/i);
});

test('the Step-1 scaffold brief mandates research and complete dependency closure', () => {
  const source = readFileSync(join(REPO, 'briefs/beta-scaffold.md'), 'utf8');
  assert.match(source, /Search authoritative web sources for unfamiliar mathematics/i);
  assert.match(source, /read complete relevant arguments/i);
  assert.match(source, /actual transitive proof dependencies/i);
  assert.match(source, /no missing, circular, forward or inadequate dependency/i);
  assert.match(source, /local definition, lemma and proof strategy/i);
  assert.match(source, /new prerequisite pairs/i);
  assert.match(source, /deferred-set-theory-beyond-choice/i);
});

test('Step 1 retains its scaffold brief; Step 3 has separate scope and audit prompts', () => {
  for (const plan of stage('1-scaffold').plan(ctx, ['1'])) assert.equal(plan.brief, 'briefs/beta-scaffold.md');
  const code = readFileSync(join(REPO, 'tools/autopilot/stages/mathlib.mts'), 'utf8');
  assert.match(code, /briefs\/step3-scope\.md/);
  assert.match(code, /briefs\/group-author\.md/);
});
