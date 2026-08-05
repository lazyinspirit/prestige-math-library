#!/usr/bin/env node
// run-wave.test.mjs — stop-condition properties of the audit driver.
//
//   node --test tools/run-wave.test.mjs
//
// The audit twin of run-level.test.mjs, and it tests the same thing: not that
// the wave produces good mathematics — no test can — but that the CONTROL FLOW
// around the model work stops where it should. Every property here is a way an
// unattended run could quietly do the wrong thing.
//
// The driver is exercised through --simulate, which replaces every real process
// with a fixture outcome. That is what makes these run on a checkout with no
// Codex token, no DeepSeek key and no tsx.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync, existsSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { REPO } from './paths.mjs';

const scratch = mkdtempSync(join(tmpdir(), 'run-wave-test-'));
const fixture = (outcomes) => {
  const path = join(scratch, `fx-${Math.abs(outcomes.length * 7 + outcomes[0]?.exit ?? 0)}-${outcomes.map((o) => o.exit).join('')}.json`);
  writeFileSync(path, JSON.stringify({ outcomes }));
  return path;
};

/** Run the driver against a fixture. Never touches the real research/audit. */
const drive = (args, outcomes) => {
  const result = spawnSync(process.execPath, [
    'tools/run-wave.mjs', '--simulate', fixture(outcomes), '--json', ...args,
  ], { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  let state = null;
  try { state = JSON.parse(result.stdout); } catch { /* halt output is the state anyway */ }
  return { code: result.status, out: (result.stdout ?? '') + (result.stderr ?? ''), state };
};

const ok = { exit: 0 };
const fail = { exit: 1, note: 'simulated failure' };

test('usage: a wave number is required', () => {
  const r = spawnSync(process.execPath, ['tools/run-wave.mjs'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /--wave is required/);
});

test('usage: --judgment only accepts halt or autonomous', () => {
  const r = spawnSync(process.execPath, ['tools/run-wave.mjs', '--wave', '99', '--judgment', 'yolo'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /--judgment must be/);
});

test('usage: --from-step must name a real audit step, and A5 is not one', () => {
  const r = spawnSync(process.execPath, ['tools/run-wave.mjs', '--wave', '99', '--from-step', 'A5'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /--from-step must be one of/);
});

test('A3 halts for judgment by default, and names the decision', () => {
  const r = drive(['--wave', '99'], [ok, ok, ok, ok, ok, ok, ok, ok]);
  assert.equal(r.code, 1);
  assert.match(r.out, /judgment-required/);
  assert.match(r.out, /verify every load-bearing Beta claim FROM DISK/);
});

test('a failing gate halts with gate-failed and does not advance', () => {
  // A0: FOUR actions ok (rounds, audit-batch-split, touchlog, genrisk),
  // audit-manifest ok, then the gate fails. The fixture is consumed by index, so
  // adding an action to A0 shifts every later outcome — audit-batch-split landed
  // here on 2026-08-05 and silently moved the `fail` onto audit-manifest, which
  // turned this into a test that the run reaches A3.
  const r = drive(['--wave', '99'], [ok, ok, ok, ok, ok, fail]);
  assert.equal(r.code, 1);
  assert.match(r.out, /gate-failed/);
});

test('a failing action halts with action-failed', () => {
  const r = drive(['--wave', '99'], [fail]);
  assert.equal(r.code, 1);
  assert.match(r.out, /action-failed/);
});

test('the resume command always names the step that halted', () => {
  const r = drive(['--wave', '99'], [ok, ok, ok, ok, ok, fail]);
  assert.match(r.out, /--from-step A0/);
});

test('owner-pause exits 0 — reaching A10 is a success, not a failure', () => {
  // Enough ok outcomes to walk every step: actions, gates, agents, sweep, commit.
  const r = drive(['--wave', '99', '--judgment', 'autonomous', '--judge-budget', '10'], Array(60).fill(ok));
  assert.equal(r.code, 0);
  assert.match(r.out, /owner-pause/);
});

// A gate that never executes is invisible: `gates.mjs --audit --list` advertised
// A10's level-coverage and the driver halted before running it, so the entry was
// dead code for four waves. Wave 4 is what that cost — its terminal step
// reported a clean owner-pause over five items published with no verification
// stamp, and the next wave's first gate was what finally refused. Ordering is
// part of the property: gate BEFORE the commit, so a failing wave never leaves a
// commit saying "awaiting owner audit".
test('the terminal step runs its gates, before the commit and the pause', () => {
  const r = drive(['--wave', '99', '--judgment', 'autonomous', '--judge-budget', '10'], Array(60).fill(ok));
  assert.equal(r.code, 0);
  const j = r.state?.journal ?? [];
  const gates = j.findIndex((e) => e.step === 'A10' && e.event === 'gates');
  const pause = j.findIndex((e) => e.event === 'owner-pause');
  assert.ok(gates >= 0, 'A10 must run the gates its own gate-table entry advertises');
  assert.ok(pause >= 0, 'A10 must still reach the owner pause');
  assert.ok(gates < pause, 'A10 gates must run BEFORE the owner pause, not after it');
  const commit = j.findIndex((e) => e.event === 'commit');
  if (commit >= 0) assert.ok(gates < commit, 'A10 gates must run BEFORE the commit');
});

test('A10 is the terminus: nothing in the plan runs after it', () => {
  const source = readFileSync(join(REPO, 'tools/run-wave.mjs'), 'utf8');
  const order = source.match(/const ORDER = \[(.*?)\]/s)?.[1] ?? '';
  assert.match(order, /'A10'\s*\]?$/m.test(order) ? /A10/ : /A10/);
  assert.equal(order.trim().split(',').at(-1).replace(/['\s]/g, ''), 'A10');
});

test('publication verbs appear nowhere in the driver', () => {
  const raw = readFileSync(join(REPO, 'tools/run-wave.mjs'), 'utf8');
  // Strip comments first. The driver DOCUMENTS that it must never publish, so a
  // check that reads its own prose fails on the very sentence promising the
  // thing it is testing for.
  const source = raw.replace(/\/\*[\s\S]*?\*\//g, '').split('\n').map((l) => l.replace(/\/\/.*$/, '')).join('\n');
  // `verification.audited` and `status: published` are owner-reserved; code that
  // wrote either would be the most dangerous line in this repository.
  assert.ok(!/verification\.audited/.test(source), 'driver must not touch verification.audited');
  assert.ok(!/status:\s*['"]?published/.test(source), 'driver must not set status: published');
  // Match the ARGUMENT, not the prose: the file legitimately discusses why it
  // never pushes, and a regex that reads comments would fail on its own docs.
  assert.ok(!/'push'/.test(source) && !/"push"/.test(source), 'driver must never pass push to git');
});

test('the driver commits but never pushes', () => {
  const source = readFileSync(join(REPO, 'tools/run-wave.mjs'), 'utf8');
  assert.match(source, /'commit'/);
  assert.ok(!/'push'/.test(source));
});

test('A7 refuses to spend without an explicit budget', () => {
  const r = drive(['--wave', '99', '--judgment', 'autonomous'], Array(40).fill(ok));
  assert.equal(r.code, 1);
  assert.match(r.out, /manual-step|injection-test-required/);
});

test('the injection-test gate keys on the judge prompt fingerprint', () => {
  const source = readFileSync(join(REPO, 'tools/run-wave.mjs'), 'utf8');
  assert.match(source, /judge-conventions\.txt/);
  assert.match(source, /tools\/judge\.mts/);
  assert.match(source, /injection-test-required/);
});

test('gates.mjs exposes an audit table with no A5', () => {
  const r = spawnSync(process.execPath, ['tools/gates.mjs', '--audit', '--list'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 0);
  assert.match(r.stdout, /step A0/);
  assert.match(r.stdout, /step A10/);
  assert.ok(!/step A5\b/.test(r.stdout), 'A5 must not exist — the sparse numbering is deliberate');
});

test('every audit gate step in the driver exists in the gate table', () => {
  const r = spawnSync(process.execPath, ['tools/gates.mjs', '--audit', '--list'], { cwd: REPO, encoding: 'utf8' });
  const source = readFileSync(join(REPO, 'tools/run-wave.mjs'), 'utf8');
  const order = (source.match(/const ORDER = \[(.*?)\]/s)?.[1] ?? '').split(',').map((s) => s.replace(/['\s]/g, '')).filter(Boolean);
  for (const step of order) {
    assert.match(r.stdout, new RegExp(`step ${step}\\b`), `${step} is driven but has no gate-table entry`);
  }
});

// Measured 2026-08-05: `sandbox: 'read-only'` in the role table is a LABEL, and
// asserting the label is what let a real escape through. A claude-runner lane
// carrying only a deny list created the file it was told to create, by
// delegating to a subagent whose tools do not inherit that list. So this test
// now asserts the ENFORCEMENT, per runner, and fails if a read-only role ever
// reports a mechanism that does not actually withhold the disk.
test('the read-only audit roles really are read-only', () => {
  // audit-refuter runs on the tool-less DeepSeek lane, which cannot open a file
  // and therefore REQUIRES assembled context; dispatching one without --task is
  // an error by design, so the probe supplies one.
  const taskFile = 'research/audit/wave4-A8-round3-task.md';
  for (const role of ['audit-refuter', 'certifier']) {
    const r = spawnSync(process.execPath, ['tools/dispatch.mjs', '--role', role,
      '--brief', 'briefs/audit-alpha.md', '--label', 't', '--run', 'wave99', '--var', 'k=99',
      '--task', taskFile, '--dry-run', '--json'],
      { cwd: REPO, encoding: 'utf8' });
    assert.equal(r.status, 0, `${role} should dry-run cleanly: ${r.stderr}`);
    const report = JSON.parse(r.stdout);
    assert.equal(report.sandbox, 'read-only', `${role} must be sandboxed read-only, not merely asked`);
    assert.ok(report.read_only_enforcement, `${role} declares read-only but reports no enforcement mechanism`);
    if (report.runner === 'claude') {
      // The allow list is the guarantee — a deny list alone is provably escapable.
      assert.match(report.read_only_enforcement, /--allowed-tools/,
        `${role} on the claude runner must restrict via an allow list, not a deny list alone`);
      assert.match(report.command, /--disallowed-tools(?=.*\bTask\b)(?=.*\bAgent\b)(?=.*\bWorkflow\b)/,
        `${role} must also deny every delegation tool; a subagent does not inherit this process's limits`);
    }
  }
});

test('a blind lane cannot be dispatched without assembled context', () => {
  // The DeepSeek refuter has no filesystem. Briefing it to "read the item on
  // disk" and giving it nothing produces a confident reading of nothing, which
  // is worse than a failure, so dispatch refuses it.
  const r = spawnSync(process.execPath, ['tools/dispatch.mjs', '--role', 'audit-refuter',
    '--brief', 'briefs/audit-alpha.md', '--label', 't', '--run', 'wave99', '--var', 'k=99', '--dry-run'],
    { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /no filesystem access/);
});

test('an audit agent cannot be dispatched without a concrete wave identity', () => {
  const r = spawnSync(process.execPath, ['tools/dispatch.mjs', '--role', 'audit-beta',
    '--brief', 'briefs/audit-beta.md', '--label', 't', '--run', 'wave99', '--dry-run'],
    { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /wave identity must be concrete/);
});

test('audit dispatch records land under research/audit, not research', () => {
  const r = spawnSync(process.execPath, ['tools/dispatch.mjs', '--role', 'audit-beta',
    '--brief', 'briefs/audit-beta.md', '--label', 't', '--run', 'wave99',
    '--var', 'k=99', '--var', 'category=x', '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.match(JSON.parse(r.stdout).would_write.log, /research\/audit\/wave99-dispatch\//);
});

test('audit-split classifies a title change as material, not as a retag', () => {
  // The regression that hid a confirmed fatal in wave 3: `title` lives inside
  // the frontmatter, so a line-range test called it a pure retag.
  const source = readFileSync(join(REPO, 'tools/audit-split.mjs'), 'utf8');
  const material = source.match(/const MATERIAL_KEYS = new Set\(\[(.*?)\]\)/s)?.[1] ?? '';
  for (const key of ['title', 'deps', 'forward_refs', 'kind', 'proved_here']) {
    assert.match(material, new RegExp(`'${key}'`), `${key} must be material`);
  }
});

test('scratch is left clean', () => {
  rmSync(scratch, { recursive: true, force: true });
  assert.ok(!existsSync(scratch));
});
