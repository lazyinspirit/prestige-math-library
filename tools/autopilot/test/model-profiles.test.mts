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
  const sol61Medium = MODEL_PROFILES[MODEL_PROFILE_NAMES.sol61Medium];
  assert.equal(sol61Medium.model, 'gpt-6.1-sol');
  assert.equal(sol61Medium.effort, 'medium');
  assert.equal(sol61Medium.requestedEffort, 'medium');
  const sol61High = MODEL_PROFILES[MODEL_PROFILE_NAMES.sol61High];
  assert.equal(sol61High.model, 'gpt-6.1-sol');
  assert.equal(sol61High.effort, 'high');
  assert.equal(sol61High.requestedEffort, 'high');

  const deepseek = MODEL_PROFILES[MODEL_PROFILE_NAMES.deepseekFlashMax];
  assert.equal(deepseek.model, 'deepseek-flash');
  assert.equal(deepseek.provider, 'deepseek');
  assert.equal(deepseek.effort, 'max');
  assert.equal(deepseek.contextWindow, 1_048_576);
});

test('Step 2 scope roles use Luna max and later adjudication uses Sol 6.1 high', () => {
  const scope = stage('2-scope-review');
  assert.equal(scope.modelProfile, MODEL_PROFILE_NAMES.lunaMax);
  for (const role of ['scope-reviewer', 'scope-repairer'])
    assert.equal(selected(scope, { role }), MODEL_PROFILE_NAMES.lunaMax);

  const adjudicate = stage('3a-adjudicate');
  assert.equal(selected(adjudicate, { role: 'alpha', job: 'adjudication' }), MODEL_PROFILE_NAMES.sol61High,
    'Step 3a adjudication runs on the Sol 6.1 high lane');

  const judgeStage = stage('4-judge');
  const plans = judgeStage.plan(ctx, judgeStage.units(ctx));
  for (const plan of plans.filter((candidate: any) => candidate.role === 'alpha-batch-read')) {
    assert.equal(selected(judgeStage, plan), MODEL_PROFILE_NAMES.sol61High);
  }
  assert.equal(selected(judgeStage, plans.find((candidate: any) => candidate.role === 'tool')), undefined,
    'the judge tool is not a Step-4 reader agent');
  assert.deepEqual(plans.find((candidate: any) => candidate.role === 'tool').argv.slice(0, 8),
    ['node', 'tools/judge-sweep.mjs', '--run', ctx.run, '--lineup', 'sol61', '--effort', 'high']);
  assert.deepEqual(judgeStage.gates(ctx)[0].argv.slice(0, 4),
    ['env', 'JUDGE_LINEUP=sol61', 'node', 'tools/level-coverage.mjs']);
  assert.match(stage('5.4-rejudge').label, /Sol 6\.1 high/);
  assert.deepEqual(stage('5.8-gate').gates({ ...ctx, doctor: true })
    .find((candidate: any) => candidate.id === 'judge-closure').argv.slice(0, 2),
    ['env', 'JUDGE_LINEUP=sol61']);
});

test('Step 3a readers use Sol 6.1 high, refuters use Luna max, and tool lanes stay model-free', () => {
  for (const [id, role, profile] of [
    ['3a-read', 'reader', MODEL_PROFILE_NAMES.sol61High],
    ['3a-refute', 'refuter', MODEL_PROFILE_NAMES.lunaMax],
  ] as const) {
    const st = stage(id);
    const plan = st.plan(ctx, ['1'])[0];
    assert.equal(plan.role, role);
    assert.equal(selected(st, plan), profile);
    assert.equal(selected(st, { role: 'tool' }), undefined, `${id} keeps its tool lane model-free`);
  }
  for (const id of ['3a-prepare', '3a-split', '3a-collect', '3a-baseline', '3a-close']) {
    const st = stage(id);
    assert.equal(selected(st, st.plan(ctx, ['1'])[0]), undefined, `${id} is a deterministic tool stage`);
  }
});

test('Step 1 scaffolders use GPT-6 Luna max', () => {
  const scaffoldStage = stage('1-scaffold');
  const scaffold = scaffoldStage.plan({...ctx,doctor:true}, ['1'])[0];
  assert.equal(selected(scaffoldStage, scaffold), MODEL_PROFILE_NAMES.lunaMax);
  assert.equal(selected(scaffoldStage, {
    role: 'beta', job: 'scouting', label: 'source-scout-1-b1',
  }), undefined, 'source scouting is not a Step 1 scaffolding dispatch');
});

test('group Alpha resolves to Sol 6.1 high', () => {
  assert.ok(!stages.some((candidate: any) => candidate.id === '2-assign'), 'assignment has no workflow stage');
  const result = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'alpha', '--brief', 'briefs/alpha.md', '--label', 'alpha-model-test',
    '--run', 'alpha-model-test', '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  assert.equal(row.model, MODELS.sol61.id);
  assert.equal(row.requested_effort, 'high');
  assert.equal(row.provider_effort, 'high');
});

test('all ordinary dispatcher roles default to Sol 6.1 high', () => {
  for (const role of ['beta', 'reader', 'alpha-assign', 'alpha-high', 'alpha-report',
    'alpha-adjudicate', 'alpha-repair', 'alpha-batch-read', 'refuter', 'scaffolder', 'mechanic']) {
    const result = spawnSync('node', ['tools/dispatch.mjs', '--role', role,
      '--brief', 'briefs/alpha.md', '--task', 'briefs/alpha.md',
      '--label', 'default-model-test', '--run', 'default-model-test', '--dry-run', '--json'],
    { cwd: REPO, encoding: 'utf8' });
    assert.equal(result.status, 0, `${role}: ${result.stderr}`);
    const row = JSON.parse(result.stdout);
    assert.equal(row.model, MODELS.sol61.id, role);
    assert.equal(row.requested_effort, 'high', role);
    assert.equal(row.provider_effort, 'high', role);
  }
});

test('Step-2 reviewer and repairer share the Luna max profile', () => {
  const scope = MODEL_PROFILES[stage('2-scope-review').modelProfile];
  assert.equal(scope.model, 'gpt-6-luna');
  assert.equal(scope.effort, 'max');
  assert.equal(scope.requestedEffort, 'max');
});

test('Step-5 fatal group adjudicator uses Sol 6.1 high', () => {
  const result = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'alpha-adjudicate', '--brief', 'briefs/alpha.md',
    '--profile', MODEL_PROFILE_NAMES.sol61High,
    '--label', 'step5-alpha-model-test', '--run', 'step5-alpha-model-test',
    '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  assert.equal(row.model, MODELS.sol61.id);
  assert.equal(row.requested_effort, 'high');
  assert.equal(row.provider_effort, 'high');
});

test('Step 6 closeout agents use DeepSeek Flash max', () => {
  for (const s of stages.filter((candidate: any) => /^8-/.test(candidate.id))) {
    const expected = MODEL_PROFILE_NAMES.deepseekFlashMax;
    for (const role of ['alpha', 'alpha-high', 'alpha-report', 'beta']) {
      assert.equal(selected(s, { role, job: 'audit' }), expected,
        `${s.id}/${role}`);
    }
    assert.equal(selected(s, { role: 'tool', job: 'bookkeeping-mechanical' }), undefined,
      `${s.id} changed a deterministic tool job into a model call`);
  }
  assert.equal(selected(stage('5.1-adjudicate'), { role: 'alpha-adjudicate', job: 'adjudication' }),
    MODEL_PROFILE_NAMES.sol61High, 'Step 5 selects the Sol 6.1 high adjudication profile');
  assert.equal(stage('5.5-adjudicate').modelProfile, MODEL_PROFILE_NAMES.sol61High);
  assert.equal(MODEL_PROFILES[MODEL_PROFILE_NAMES.sol61High].provider, 'openai');
  assert.equal(MODEL_PROFILES[MODEL_PROFILE_NAMES.deepseekFlashMax].provider, 'deepseek');
});

test('the Step-1 authoring brief mandates authoritative web verification', () => {
  const source = readFileSync(join(REPO, 'briefs/beta-scaffold.md'), 'utf8');
  assert.match(source, /uncertain|unfamiliar|unsure/i);
  assert.match(source, /read complete relevant arguments/i);
  assert.match(source, /authoritative web sources/i);
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

test('Step 1 constructs and Step 2 uses separate review and repair prompts', () => {
  for (const plan of stage('1-scaffold').plan({...ctx,doctor:true}, ['1'])) assert.equal(plan.brief, 'briefs/beta-scaffold.md');
  const code = readFileSync(join(REPO, 'tools/autopilot/stages/mathlib.mts'), 'utf8');
  assert.match(code, /briefs\/scope-reviewer\.md/);
  const repair = readFileSync(join(REPO, 'briefs/scope-repairer.md'), 'utf8');
  assert.match(repair, /scope and prerequisite repairer/i);
});
