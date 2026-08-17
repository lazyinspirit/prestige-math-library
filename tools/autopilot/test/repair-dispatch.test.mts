// A repair dispatch is a dispatch: same input resolution, same identity rules.
//
// WHY. The 3-recheck repair loop's first live firing burned all three rounds
// without launching a single agent: hook-started dispatches bypass the plan
// loop where brief/task candidate arrays were resolved, so dispatch.mjs
// received a comma-joined ARRAY as --task and died on its usage check —
// twelve failed dispatches, then repair-exhausted, on a gate failure whose
// receipt was correct and specific. And the hook dispatched one anonymous
// lane per insufficient PAGE — same prompt, covers [], no identity — so two
// pages in one batch meant two writers on one batch's files. These tests pin
// the fixes: resolution lives on start()'s path, and the hook dispatches one
// lane per owning BATCH with the batch as its cover.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { stages } from '../stages/mathlib.mts';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

function fixtureRepo() {
  const dir = mkdtempSync(join(tmpdir(), 'repair-'));
  mkdirSync(join(dir, 'research'));
  mkdirSync(join(dir, '.autopilot'));
  writeFileSync(join(dir, 'research', 'demo-generic.task.md'), 'generic\n');
  // mechanicalRepair and the gates share one convention: tool paths resolve
  // against ctx.repo. The fixture honours it rather than restating the tools.
  symlinkSync(join(REPO, 'tools'), join(dir, 'tools'));
  return dir;
}

function executorAt(repo: string) {
  const config: any = { repo, stateDir: join(repo, '.autopilot'), run: 'demo', argv: ['true'], dispatchDir: join(repo, 'research', 'demo-dispatch'), coversMap: {}, adoptCommand: false };
  const state = new State(statePath(config.stateDir)).init('demo');
  const reporter = new Reporter({ dir: config.stateDir, intervalMs: 60_000 });
  const adapter = makeExecAdapter({ argv: ['true'], cwd: repo });
  return new Executor({ config, stages, adapter, state, reporter });
}

test('resolveInput picks the first existing candidate, else names the last', () => {
  const repo = fixtureRepo();
  const ex = executorAt(repo);
  const ctx: any = { repo };
  assert.equal(
    ex.resolveInput(['research/demo-missing.task.md', 'research/demo-generic.task.md'], ctx),
    'research/demo-generic.task.md');
  assert.equal(
    ex.resolveInput(['research/demo-a.task.md', 'research/demo-b.task.md'], ctx),
    'research/demo-b.task.md');
  assert.equal(ex.resolveInput('research/demo-generic.task.md', ctx), 'research/demo-generic.task.md');
  assert.equal(ex.resolveInput(undefined, ctx), undefined);
  rmSync(repo, { recursive: true, force: true });
});

test('a hook-started dispatch with no existing input becomes a blocker, not a spawn', () => {
  const repo = fixtureRepo();
  const ex = executorAt(repo);
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
  ex.start(s3, {
    role: 'beta', label: 'scaffold-fix-1-b9', job: 'scaffolding', covers: ['9'],
    brief: 'research/demo-absent-brief.md',
    task: ['research/demo-absent.task.md'],
    timeout: 60,
  } as any);
  assert.equal(ex.inflight.size, 0, 'nothing may spawn on a missing input');
  assert.ok(ex.state.data.blockers.some((b: any) => /missing input file/.test(b.message)),
    'the miss must surface as a blocker');
  rmSync(repo, { recursive: true, force: true });
});

test('the scaffold-fix hook dispatches one lane per owning batch, batch as cover', async () => {
  const repo = fixtureRepo();
  // receipt: three insufficient pages across TWO batches
  writeFileSync(join(repo, 'research', 'demo-scaffold-closure.json'), JSON.stringify({
    insufficient: ['page-x', 'page-y', 'page-z'],
    work: [],
  }));
  writeFileSync(join(repo, 'research', 'demo-scope-ledger.json'), JSON.stringify({
    pages: [
      { id: 'page-x', kind: 'A', batch: '4' },
      { id: 'page-y', kind: 'A', batch: '4' },
      { id: 'page-z', kind: 'A', batch: '6' },
    ],
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
  await s3.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s3, round: 1,
    failure: { id: 'scaffold-verdicts', why: '' },
  });
  assert.equal(started.length, 2, 'two batches own the three pages');
  assert.deepEqual(started.map((p) => p.covers).sort(), [['4'], ['6']]);
  assert.deepEqual(started.map((p) => p.label).sort(), ['scaffold-fix-1-b4', 'scaffold-fix-1-b6']);
  for (const p of started) {
    assert.ok(Array.isArray(p.task), 'candidates stay an array; start() resolves them');
    assert.equal(p.job, 'scaffolding');
  }
  rmSync(repo, { recursive: true, force: true });
});

test('a prompt file carrying an identity placeholder blocks before any spawn', () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-poisoned.task.md'), 'the grammar example says (order <n>)\n');
  const ex = executorAt(repo);
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
  ex.start(s3, {
    role: 'beta', label: 'scaffold-fix-1-b4', job: 'scaffolding', covers: ['4'],
    brief: 'research/demo-generic.task.md',
    task: ['research/demo-poisoned.task.md'],
    timeout: 60,
  } as any);
  assert.equal(ex.inflight.size, 0, 'a poisoned prompt must not spawn');
  assert.ok(ex.state.data.blockers.some((b: any) => b.message.includes('<n>') && b.message.includes('demo-poisoned')),
    'the blocker names the token and the file');
  rmSync(repo, { recursive: true, force: true });
});

test('an unfetchable source routes a scouting Beta per owning batch', async () => {
  const repo = fixtureRepo();
  // a coverage whose one source is unstamped and unfetchable -> the stamp
  // repair leaves residue naming the page -> the hook routes a scout
  writeFileSync(join(repo, 'research', 'demo-batch-2.pages.json'), '[]');
  writeFileSync(join(repo, 'research', 'demo-batch-2.coverage.json'), JSON.stringify({
    pages: [{ page: 'sylow-page', sources: [{ url: 'http://127.0.0.1:9/gone.pdf', title: 't', locator: 'l', contents: [] }] }],
  }));
  writeFileSync(join(repo, 'research', 'demo-scope-ledger.json'), JSON.stringify({
    pages: [{ id: 'sylow-page', kind: 'A', batch: '2' }],
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
  await s3.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s3, round: 2,
    failure: { id: 'source-fetch-check', why: '' },
  });
  assert.equal(started.length, 1);
  assert.equal(started[0].label, 'source-scout-2-b2');
  assert.equal(started[0].job, 'scouting');
  assert.deepEqual(started[0].covers, ['2']);
  rmSync(repo, { recursive: true, force: true });
});

test('a candidate-detector failure at the read join dispatches the contract-audit Alpha', async () => {
  const s5: any = stages.find((s: any) => s.id === '5-author');
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  await s5.onGateFailure({ ctx: { run: 'demo', repo: '/nonexistent' }, executor, stage: s5, round: 1, failure: { id: 'boundary-audit', why: '' } });
  await s5.onGateFailure({ ctx: { run: 'demo', repo: '/nonexistent' }, executor, stage: s5, round: 2, failure: { id: 'citation-fidelity', why: '' } });
  assert.equal(started.length, 2);
  assert.ok(started.every((p) => p.job === 'adjudication'));
  // structural failures stay blockers
  await s5.onGateFailure({ ctx: { run: 'demo', repo: '/nonexistent' }, executor, stage: s5, round: 2, failure: { id: 'proof-contract', why: '' } });
  assert.equal(started.length, 2);
});

test('boundary-audit respects an Alpha-upheld row and reports it', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ba-'));
  mkdirSync(join(dir, 'items'));
  writeFileSync(join(dir, 'items', 'fs-two-things-are-equivalent.md'),
    '---\nid: fs-two-things-are-equivalent\nkind: false-statement\n---\n\n## Statement\n\nThe two categories are equivalent for every monad.\n\n## Refutation\n\nStep 1.1: the free-monoid monad refutes it.\n');
  // the tool's real shape: {contracts: {<id>: {boundaries: [{case, status, reason}]}}}
  const boundary: any = { case: 'iff-forward', status: 'not_applicable', reason: 'equivalent names the categorical predicate under refutation' };
  const contract: any = { contracts: { 'fs-two-things-are-equivalent': { boundaries: [boundary] } } };
  const cPath = join(dir, 'c.proof-contracts.json');
  const runBA = () => spawnSync(process.execPath,
    [join(REPO, 'tools', 'boundary-audit.mjs'), cPath, '--items-dir', join(dir, 'items'), '--fail-on-contradicted'],
    { encoding: 'utf8' });
  // unreviewed: the detector flags it and --fail-on-contradicted fails
  writeFileSync(cPath, JSON.stringify(contract));
  const r1 = runBA();
  assert.equal(r1.status, 1, r1.stdout);
  // upheld with a concrete reason: reported, not failed
  boundary.reviewed = { upheld: true, by: 'contract-audit-1', reason: 'fs- item refutes a categorical equivalence; there is no logical biconditional whose directions need separate checks.' };
  writeFileSync(cPath, JSON.stringify(contract));
  const r2 = runBA();
  assert.equal(r2.status, 0, r2.stdout);
  assert.match(r2.stdout, /UPHELD BY REVIEW — 1 row/);
  // a thin uphold reason does not count
  boundary.reviewed.reason = 'fine';
  writeFileSync(cPath, JSON.stringify(contract));
  assert.equal(runBA().status, 1, 'a templated/thin uphold must not clear the gate');
  rmSync(dir, { recursive: true, force: true });
});

test('the three judge tools agree on the lineup table', () => {
  // Two hash normalisations under one field name; two prompt systems for one
  // role; two gate tables — divergent copies are this repo's oldest defect
  // class. The lineup map lives in three files; an unknown JUDGE_LINEUP makes
  // each print its valid keys, so the maps are compared by asking the tools.
  const invocations: Array<[string, string[]]> = [
    ['tools/judge-sweep.mjs', ['--ledger', '/tmp/x', '--cost', '/tmp/y', '--pages', 'p']],
    ['tools/level-coverage.mjs', ['--judge-only', '--verify-current-context', '--judge-ledger', '/tmp/x', '/tmp/nope-batch-1.pages.json']],
  ];
  for (const [tool, args] of invocations) {
    const r = spawnSync(process.execPath, [join(REPO, tool), ...args],
      { cwd: REPO, encoding: 'utf8', env: { ...process.env, JUDGE_LINEUP: '__nope__' }, timeout: 60_000 });
    const out = `${r.stdout}\n${r.stderr}`;
    assert.match(out, /deepseek\+terra/, `${tool} lost the terra lineup`);
    assert.match(out, /deepseek\+sonnet/, `${tool} lacks the sonnet lineup`);
  }
});

test('the mechanical branch still short-circuits the Beta fan-out', async () => {
  const repo = fixtureRepo();
  // a url-liveness failure with an artifact whose dead rows all carry
  // snapshots already applied -> repair tool exits 0 -> no Beta lanes
  writeFileSync(join(repo, 'research', 'demo-url-liveness.json'), JSON.stringify({ rows: [] }));
  // the repair passes --coverage from the run's batch manifests
  writeFileSync(join(repo, 'research', 'demo-batch-4.pages.json'), '[]');
  writeFileSync(join(repo, 'research', 'demo-batch-4.coverage.json'), JSON.stringify({ pages: [] }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
  await s3.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s3, round: 1,
    failure: { id: 'url-liveness', why: '' },
  });
  assert.equal(started.length, 0, 'a mechanical repair must not fan out Betas');
  rmSync(repo, { recursive: true, force: true });
});
