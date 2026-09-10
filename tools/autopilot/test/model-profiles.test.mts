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
  const terraHigh = MODEL_PROFILES[MODEL_PROFILE_NAMES.terraHigh];
  assert.equal(terraHigh.model, 'gpt-5.6-terra');
  assert.equal(terraHigh.effort, 'high');
  assert.equal(terraHigh.contextWindow, 872_000);

  const liveCompat = MODEL_PROFILES['gpt-5.6-terra-xhigh'];
  assert.equal(liveCompat.model, 'gpt-5.6-terra');
  assert.equal(liveCompat.effort, 'high');
  assert.equal(liveCompat.requestedEffort, 'high');
});

test('Step 3 authors and Step 5A use Astra medium; Step 6 readers retain Terra high', () => {
  const authorStage = stage('3b-author');
  const author = { role: 'alpha-high', job: 'authoring' };
  assert.equal(selected(authorStage, author), MODEL_PROFILE_NAMES.astraMedium);
  assert.equal(selected(authorStage, {
    role: 'beta', job: 'authoring', label: 'author-recover-1-1',
  }), MODEL_PROFILE_NAMES.astraMedium, 'Step 3 recovery authors use the same profile');
  assert.equal(selected(authorStage, { role: 'alpha-high', job: 'authoring' }), MODEL_PROFILE_NAMES.astraMedium);

  const astraMedium = MODEL_PROFILES[MODEL_PROFILE_NAMES.astraMedium];
  assert.equal(astraMedium.model, 'gpt-6-astra');
  assert.equal(astraMedium.effort, 'medium');

  const adjudicate = stage('5a-adjudicate');
  assert.equal(selected(adjudicate, adjudicate.plan(ctx, ['1'])[0]), MODEL_PROFILE_NAMES.astraMedium);

  const judgeStage = stage('6-judge');
  const plans = judgeStage.plan(ctx, judgeStage.units(ctx));
  for (const plan of plans.filter((candidate: any) => candidate.role === 'alpha-group-read')) {
    assert.equal(selected(judgeStage, plan), MODEL_PROFILE_NAMES.terraHigh);
  }
  assert.equal(selected(judgeStage, plans.find((candidate: any) => candidate.role === 'tool')), undefined,
    'the judge tool is not a Step-6 reader agent');
});

test('Step 1 scaffolders use Astra medium', () => {
  const scaffoldStage = stage('1-scaffold');
  const scaffold = scaffoldStage.plan(ctx, ['1'])[0];
  assert.equal(selected(scaffoldStage, scaffold), MODEL_PROFILE_NAMES.astraMedium);
  assert.equal(selected(scaffoldStage, {
    role: 'beta', job: 'scouting', label: 'source-scout-1-b1',
  }), undefined, 'source scouting is not a Step 1 scaffolding dispatch');
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

test('Step-3 scope uses Sol high and item adjudication uses Astra medium', () => {
  for (const [id, model, effort] of [['3a-scope', MODELS.sol.id, 'high'], ['3b-author', MODELS.astra.id, 'medium']]) {
    const profile = MODEL_PROFILES[stage(id).modelProfile];
    assert.equal(profile.model, model);
    assert.equal(profile.effort, effort);
  }
});

test('Step-7 fatal group adjudicator uses Sol xhigh', () => {
  const result = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'alpha-adjudicate', '--brief', 'briefs/alpha.md',
    '--label', 'step7-alpha-model-test', '--run', 'step7-alpha-model-test',
    '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  assert.equal(row.model, MODELS.sol.id);
  assert.equal(row.requested_effort, 'xhigh');
  assert.equal(row.provider_effort, 'xhigh');
});

test('Step 8 Lead Alpha alone uses Astra medium among late-stage agents', () => {
  for (const s of stages.filter((candidate: any) => /^(?:8|9)-/.test(candidate.id))) {
    for (const role of ['alpha', 'alpha-high', 'alpha-report', 'beta']) {
      assert.equal(selected(s, { role, job: 'audit' }), MODEL_PROFILE_NAMES.terraHigh,
        `${s.id}/${role}`);
    }
    assert.equal(selected(s, { role: 'tool', job: 'bookkeeping-mechanical' }), undefined,
      `${s.id} changed a deterministic tool job into a model call`);
  }
  assert.equal(selected(stage('7-adjudicate'), { role: 'alpha-adjudicate', job: 'adjudication' }), undefined,
    'Step 7 must retain its dedicated adjudication role');
  assert.equal(selected(stage('8-scope'), { role: 'alpha', label: 'step8-lead', job: 'audit' }),
    MODEL_PROFILE_NAMES.astraMedium);
  const profile = MODEL_PROFILES[MODEL_PROFILE_NAMES.astraMedium];
  assert.equal(profile.model, MODELS.astra.id);
  assert.equal(profile.effort, 'medium');
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
