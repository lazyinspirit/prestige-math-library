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
  assert.equal(started[0].label, 'contract-rework-1-b2');

  // The rework result lands; the next round certifies instead of re-dispatching.
  writeFileSync(join(repo, 'research', 'demo-dispatch', 'beta-contract-rework-1-b2.result.json'), '{"ok":true}');
  await s10.onGateFailure({ ...args, round: 2 });
  assert.equal(started.length, 2);
  assert.equal(started[1].role, 'alpha');
  assert.match(started[1].label, /certify-rework-2/);
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

test('10-close-v2 carries the frontmatter closure: judge-stamps after the ledger gates, before the commit', () => {
  // frontier-15 ended with every ledger-side gate green and 0 of 398 items
  // stamped — the stamp had no owning stage. The gate order is load-bearing:
  // stamps are only meaningful once judge closure holds, and the close-out
  // commit must capture them.
  const last: any = stages[stages.length - 1];
  const ids = last.gates({ run: 'demo', repo: REPO }).map((g: any) => g.id);
  const at = (id: string) => ids.indexOf(id);
  assert.ok(at('judge-stamps') >= 0, 'the stamp gate exists at the terminal stage');
  assert.ok(at('judge-closure') < at('judge-stamps'), 'ledger closure precedes the frontmatter check');
  assert.ok(at('judge-stamps') < at('tree-clean'), 'the commit sweeps the stamps');
});

test('the 10-close-v2 hook routes a judge-stamps failure to the mechanical stamping repair', async () => {
  const repo = mkdtempSync(join(tmpdir(), 'stamp-route-'));
  mkdirSync(join(repo, 'tools'), { recursive: true });
  mkdirSync(join(repo, 'research'), { recursive: true });
  // The stub proves the ROUTING; the real tool's behavior is judge-stamps.test.
  writeFileSync(join(repo, 'tools', 'apply-judge-stamps.mjs'),
    `import { writeFileSync } from 'node:fs';\nwriteFileSync('marker.txt', process.argv.slice(2).join(' '));\n`);
  const s10c: any = stages.find((s: any) => s.id === '10-close-v2');
  const report = await s10c.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: () => {} }, stage: s10c, round: 1,
    failure: { id: 'judge-stamps', why: '' },
  });
  assert.equal(report, undefined, 'a clean repair spends the round without an outage');
  const marker = readFileSync(join(repo, 'marker.txt'), 'utf8');
  assert.match(marker, /--apply/);
  assert.match(marker, /demo-judge\.jsonl/);
});
