// Full closure at step 10: obligations, the close-out commit, and the
// contract-rework loop's routing.
//
// WHY. frontier-15 reached its owner pause with four chores no stage owned
// (a stale receipt, un-propagated plan drift, an uncommitted tree, external
// debts recorded as prose) and one dead end: a contract-quality ledger row
// whose recorded remedy — the owning Beta — had no dispatch route after
// authoring. Owner directive 2026-08-17: the workflow fully closes a run on
// MAIN, no branches, no worktrees; push and publish stay owner acts.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync, execFileSync } from 'node:child_process';

import { stages } from '../stages/mathlib.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const OBLIG = join(REPO, 'tools', 'obligations.mjs');
const DISPATCH = join(REPO, 'tools', 'dispatch.mjs');

const runTool = (tool: string, cwd: string, args: string[]) => spawnSync(process.execPath,
  [tool, ...args], { cwd, encoding: 'utf8', timeout: 60_000 });

// obligations.mjs anchors research/ to ITS OWN repo, so tool tests write into
// a run namespace that cannot collide and clean their file up via unique ids.
function obligFixture() {
  const run = `obtest-${Math.floor(performance.now() * 1000) % 10 ** 9}`;
  return { run, file: join(REPO, 'research', `${run}-obligations.jsonl`) };
}

test('a block-tier row holds the terminal gate; report-tier is surfaced, never blocking', () => {
  const { run, file } = obligFixture();
  try {
    let r = runTool(OBLIG, REPO, ['add', '--run', run, '--id', 'ext-debt', '--kind', 'x', '--tier', 'block', '--note', 'a real external debt']);
    assert.equal(r.status, 0, r.stderr);
    r = runTool(OBLIG, REPO, ['add', '--run', run, '--id', 'fyi', '--kind', 'y', '--tier', 'report', '--note', 'surfaced at the pause only']);
    assert.equal(r.status, 0, r.stderr);
    r = runTool(OBLIG, REPO, ['check', '--run', run]);
    assert.equal(r.status, 0, 'non-terminal check passes with open rows');
    r = runTool(OBLIG, REPO, ['check', '--run', run, '--terminal']);
    assert.equal(r.status, 1, 'an open block row fails the terminal check');
    assert.match(r.stderr, /ext-debt/);
    assert.ok(!/ERROR fyi/.test(r.stderr), 'report-tier never blocks');
    assert.match(r.stdout, /REPORT fyi/);
  } finally { rmSync(file, { force: true }); }
});

test('acceptance needs a named acceptor and a real reason; then the terminal check passes', () => {
  const { run, file } = obligFixture();
  try {
    runTool(OBLIG, REPO, ['add', '--run', run, '--id', 'ext-debt', '--kind', 'x', '--tier', 'block', '--note', 'a real external debt']);
    let r = runTool(OBLIG, REPO, ['accept', '--run', run, '--id', 'ext-debt', '--by', 'owner', '--reason', 'too short']);
    assert.notEqual(r.status, 0, 'a shrug is not an acceptance');
    r = runTool(OBLIG, REPO, ['accept', '--run', run, '--id', 'ext-debt', '--by', 'owner', '--reason', 'publishing without this is an explicit, recorded decision']);
    assert.equal(r.status, 0, r.stderr);
    r = runTool(OBLIG, REPO, ['check', '--run', run, '--terminal']);
    assert.equal(r.status, 0, r.stderr);
  } finally { rmSync(file, { force: true }); }
});

test('run-commit commits a dirty tree on main and refuses any other branch', () => {
  // A dedicated throwaway git repo: run-commit anchors to its own tool path's
  // repo, so exercise it via a copied tool file inside the fixture.
  const dir = mkdtempSync(join(tmpdir(), 'runcommit-'));
  mkdirSync(join(dir, 'tools'), { recursive: true });
  writeFileSync(join(dir, 'tools', 'run-commit.mjs'), readFileSync(join(REPO, 'tools', 'run-commit.mjs'), 'utf8'));
  const git = (...a: string[]) => execFileSync('git', a, { cwd: dir, encoding: 'utf8' });
  git('init', '-b', 'main');
  git('config', 'user.email', 't@t'); git('config', 'user.name', 't');
  writeFileSync(join(dir, 'seed.txt'), 'seed');
  git('add', '-A'); git('commit', '-m', 'seed');

  writeFileSync(join(dir, 'new-item.md'), 'draft content');
  let r = runTool(join(dir, 'tools', 'run-commit.mjs'), dir, ['--run', 'r9', '--check']);
  assert.equal(r.status, 1, 'a dirty tree fails the gate');
  r = runTool(join(dir, 'tools', 'run-commit.mjs'), dir, ['--run', 'r9']);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /committed/);
  const log = git('log', '--oneline');
  assert.match(log, /engine close-out/);
  assert.ok(!/Co-Authored-By/.test(git('log', '-1', '--format=%B')), 'no trailers, ever');
  r = runTool(join(dir, 'tools', 'run-commit.mjs'), dir, ['--run', 'r9', '--check']);
  assert.equal(r.status, 0, 'clean after the commit');

  git('checkout', '-b', 'not-main');
  writeFileSync(join(dir, 'x.txt'), 'y');
  r = runTool(join(dir, 'tools', 'run-commit.mjs'), dir, ['--run', 'r9']);
  assert.equal(r.status, 1, 'any branch but main is a refusal, never a checkout');
  assert.match(r.stderr, /not main/);
});

test('the 10-contract-close hook routes an open contract row to the owning Beta, then to the certifier', async () => {
  const repo = mkdtempSync(join(tmpdir(), 'rework-'));
  mkdirSync(join(repo, 'research', 'demo-dispatch'), { recursive: true });
  writeFileSync(join(repo, 'research', 'defect-ledger.jsonl'), JSON.stringify({
    defect_id: 'demo-rr-1', run: 'demo', disposition: 'open', location: 'contract-row', batch: '2',
  }) + '\n');
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s10: any = stages.find((s: any) => s.id === '10-contract-close');
  const args = { ctx: { run: 'demo', repo, dispatchDir: join(repo, 'research', 'demo-dispatch') }, executor, stage: s10, round: 1, failure: { id: 'defect-ledger', why: '' } };

  await s10.onGateFailure(args);
  assert.equal(started.length, 1);
  assert.equal(started[0].role, 'beta');
  assert.match(started[0].label, /^contract-rework-1-b2-[a-f0-9]{16}$/);
  assert.deepEqual(started[0].covers, ['2'], 'the batch resolves <i> and is recorded on result evidence');

  // A failed result is not evidence: the owning Beta is re-dispatched.
  writeFileSync(join(repo, 'research', 'demo-dispatch', `beta-${started[0].label}.result.json`), JSON.stringify({
    ok: false, run: 'demo', label: started[0].label, covers: ['2'],
  }));
  await s10.onGateFailure({ ...args, round: 2 });
  assert.equal(started.length, 2);
  assert.equal(started[1].role, 'beta');
  assert.match(started[1].label, /^contract-rework-2-b2-[a-f0-9]{16}$/);

  // Current ok:true evidence advances to independent certification.
  writeFileSync(join(repo, 'research', 'demo-dispatch', `beta-${started[1].label}.result.json`), JSON.stringify({
    ok: true, run: 'demo', label: started[1].label, covers: ['2'],
  }));
  await s10.onGateFailure({ ...args, round: 3 });
  assert.equal(started.length, 3);
  assert.equal(started[2].role, 'alpha');
  assert.match(started[2].label, /certify-rework-3/);

  // Editing the still-open row changes its evidence version; the old success is stale.
  writeFileSync(join(repo, 'research', 'defect-ledger.jsonl'), JSON.stringify({
    defect_id: 'demo-rr-1', run: 'demo', disposition: 'open', location: 'contract-row', batch: '2',
    certification_failure: 'checked row still does not match the proof',
  }) + '\n');
  await s10.onGateFailure({ ...args, round: 4 });
  assert.equal(started.length, 4);
  assert.equal(started[3].role, 'beta');
  assert.notEqual(started[3].label.split('-').at(-1), started[1].label.split('-').at(-1),
    'the current row version, not a historical batch filename, binds the evidence');
  rmSync(repo, { recursive: true, force: true });
});

test('a contract-rework batch cover resolves every <i> in the dispatched task', () => {
  const result = runTool(DISPATCH, REPO, [
    '--role', 'beta', '--brief', 'briefs/authoring.md', '--task', 'briefs/tasks/beta-contract-rework.md',
    '--label', 'contract-rework-1-b2-testversion', '--run', 'demo', '--covers', '2',
    '--var', 'run=demo', '--var', 'i=2', '--dry-run', '--json',
  ]);
  assert.equal(result.status, 0, result.stderr);
  const prompt = JSON.parse(result.stdout).prompt;
  assert.doesNotMatch(prompt, /<i>/);
  assert.match(prompt, /batch-2\.proof-contracts\.json/);
  assert.match(prompt, /covers: 2/);
});

test('a quota-blocked rework is an outage on the obligation clock, not a burnt round', async () => {
  const repo = mkdtempSync(join(tmpdir(), 'rework-block-'));
  mkdirSync(join(repo, 'research', 'demo-dispatch'), { recursive: true });
  writeFileSync(join(repo, 'research', 'defect-ledger.jsonl'), JSON.stringify({
    defect_id: 'demo-rr-1', run: 'demo', disposition: 'open', location: 'contract-row', batch: '2',
  }) + '\n');
  writeFileSync(join(repo, 'research', 'demo-obligations.jsonl'), JSON.stringify({
    id: 'contract-rework-b2', run: 'demo', kind: 'contract-rework', tier: 'block', status: 'open',
    note: 'quota', blocked_by: 'lane quota lock', unblock_at: new Date(Date.now() + 3600_000).toISOString(),
  }) + '\n');
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s10: any = stages.find((s: any) => s.id === '10-contract-close');
  const report = await s10.onGateFailure({
    ctx: { run: 'demo', repo, dispatchDir: join(repo, 'research', 'demo-dispatch') },
    executor, stage: s10, round: 1, failure: { id: 'defect-ledger', why: '' },
  });
  assert.equal(started.length, 0, 'nothing dispatches into a locked lane');
  assert.match(report?.outage?.reason ?? '', /quota/);
  assert.ok(report.outage.retryAfterMs > 3500_000, 'the clock comes from the obligation row');
});

test('the 10-close-v2 hook dispatches a DUE block obligation and waits on undue clocks', async () => {
  const repo = mkdtempSync(join(tmpdir(), 'oblig-close-'));
  mkdirSync(join(repo, 'research'), { recursive: true });
  const s10c: any = stages.find((s: any) => s.id === '10-close-v2');
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };

  writeFileSync(join(repo, 'research', 'demo-obligations.jsonl'), JSON.stringify({
    id: 'due-work', run: 'demo', kind: 'x', tier: 'block', status: 'open', note: 'n',
    dispatch: { role: 'alpha', brief: 'briefs/alpha.md', task: ['research/demo-followup.task.md'], job: 'audit' },
  }) + '\n');
  await s10c.onGateFailure({ ctx: { run: 'demo', repo }, executor, stage: s10c, round: 1, failure: { id: 'obligations', why: '' } });
  assert.equal(started.length, 1, 'a due row with a dispatch spec re-fires itself');
  assert.equal(started[0].label, 'obligation-due-work-1');

  writeFileSync(join(repo, 'research', 'demo-obligations.jsonl'), JSON.stringify({
    id: 'clocked', run: 'demo', kind: 'x', tier: 'block', status: 'open', note: 'n',
    unblock_at: new Date(Date.now() + 7200_000).toISOString(),
  }) + '\n');
  const report = await s10c.onGateFailure({ ctx: { run: 'demo', repo }, executor, stage: s10c, round: 2, failure: { id: 'obligations', why: '' } });
  assert.equal(started.length, 1, 'a clocked row dispatches nothing');
  assert.match(report?.outage?.reason ?? '', /unblock clock/);
});

test('10-close-v2 is the terminal stage and cannot waive', () => {
  const last: any = stages[stages.length - 1];
  assert.equal(last.id, '10-close-v2');
  assert.ok(!last.gatesWaived, 'the terminal stage may not waive');
  assert.ok(last.gates({ run: 'demo', repo: REPO }).length >= 2, 'obligations + tree-clean');
});

test('Step 10 stamps before readiness, then closes over a protected-tree receipt', () => {
  // The stamp still has an owning stage.  After readiness validates that stamped
  // tree, a read-only report cannot invalidate it; the terminal gate therefore
  // proves the protected tree is unchanged instead of repeating the full scan.
  const stage = (id: string): any => stages.find((s: any) => s.id === id);
  const ids = stages.map((s: any) => s.id);
  assert.ok(ids.indexOf('10-stamps-v2') < ids.indexOf('10-readiness-v2'));
  assert.ok(ids.indexOf('10-readiness-v2') < ids.indexOf('10-evidence-v2'));
  assert.ok(ids.indexOf('10-evidence-v2') < ids.indexOf('10-report-baseline-v2'));
  assert.ok(ids.indexOf('10-report-baseline-v2') < ids.indexOf('10-close-v2'));
  const closeGates = stage('10-close-v2').gates({ run: 'demo', repo: REPO }).map((g: any) => g.id);
  assert.ok(closeGates.includes('report-integrity'), 'the terminal gate proves no validated input changed');
  assert.ok(closeGates.includes('tree-clean'), 'the close-out commit still captures all final artifacts');
  assert.ok(!closeGates.includes('judge-stamps'), 'the unchanged-tree proof replaces duplicate stamp verification');
});

test('a protected-tree mismatch never receives an automatic close-out repair', async () => {
  const s10c: any = stages.find((s: any) => s.id === '10-close-v2');
  const started: any[] = [];
  const report = await s10c.onGateFailure({
    ctx: { run: 'demo', repo: REPO }, executor: { start: (_stage: any, plan: any) => started.push(plan) },
    stage: s10c, round: 1, failure: { id: 'report-integrity', why: 'items/thm.md changed' },
  });
  assert.equal(report, undefined);
  assert.equal(started.length, 0, 'an unexpected mutation stays visible; no handler may certify over it');
});
