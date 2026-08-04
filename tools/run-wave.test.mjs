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
  // A0: three actions ok, audit-manifest ok, then the gate fails.
  const r = drive(['--wave', '99'], [ok, ok, ok, ok, fail]);
  assert.equal(r.code, 1);
  assert.match(r.out, /gate-failed/);
});

test('a failing action halts with action-failed', () => {
  const r = drive(['--wave', '99'], [fail]);
  assert.equal(r.code, 1);
  assert.match(r.out, /action-failed/);
});

test('the resume command always names the step that halted', () => {
  const r = drive(['--wave', '99'], [ok, ok, ok, ok, fail]);
  assert.match(r.out, /--from-step A0/);
});

test('owner-pause exits 0 — reaching A10 is a success, not a failure', () => {
  // Enough ok outcomes to walk every step: actions, gates, agents, sweep, commit.
  const r = drive(['--wave', '99', '--judgment', 'autonomous', '--judge-budget', '10'], Array(60).fill(ok));
  assert.equal(r.code, 0);
  assert.match(r.out, /owner-pause/);
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

test('the read-only audit roles really are read-only', () => {
  for (const role of ['audit-refuter', 'certifier']) {
    const r = spawnSync(process.execPath, ['tools/dispatch.mjs', '--role', role,
      '--brief', 'briefs/audit-alpha.md', '--label', 't', '--run', 'wave99', '--var', 'k=99', '--dry-run', '--json'],
      { cwd: REPO, encoding: 'utf8' });
    assert.equal(r.status, 0, `${role} should dry-run cleanly`);
    assert.equal(JSON.parse(r.stdout).sandbox, 'read-only', `${role} must be sandboxed read-only, not merely asked`);
  }
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
