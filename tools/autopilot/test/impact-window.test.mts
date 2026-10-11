// impact window — the blast-radius gate must diff across the edits it audits.
//
// WHY. The 3b gate ran `--from pre-author` with no `--to`; impact-audit
// defaults `after` to the ledger's LAST snapshot, and the only snapshot taken
// by 3b time WAS pre-author — so the gate diffed the baseline against itself
// and reported "0 changed" over any amount of authoring. The frontier-13 fix
// ("baseline before authoring") moved the left endpoint and forgot the right
// one. These tests pin both endpoints and the tool semantics they rely on.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { logicalConsumers } from '../../impact-scope.mjs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'impact-audit.mjs');

const snap = (label: string, surfaces: Record<string, string>) =>
  ({ label, at: new Date().toISOString(), hashes: surfaces, surfaces });

const ledgerWith = (...snaps: object[]): string => {
  const dir = mkdtempSync(join(tmpdir(), 'impact-'));
  const path = join(dir, 'touches.json');
  writeFileSync(path, JSON.stringify({ snapshots: snaps, seeded: [] }));
  return path;
};

const runTool = (args: string[]) =>
  spawnSync(process.execPath, [TOOL, ...args], { cwd: REPO, encoding: 'utf8', timeout: 60_000 });

test('a seeded interface edit between the two labels is reported, not zero', () => {
  const ledger = ledgerWith(
    snap('pre-author', { 'lem-a': 'aaaa', 'lem-b': 'bbbb' }),
    snap('post-3a', { 'lem-a': 'aaaa', 'lem-b': 'BBBB' }),
  );
  const r = runTool(['--touches', ledger, '--from', 'pre-author', '--to', 'post-3a', '--json']);
  assert.deepEqual(JSON.parse(r.stdout).changed, ['lem-b']);
});

test('direct boundary examines one dependency hop; an edited intermediate claim is its own source event', () => {
  const reverse = new Map([
    ['source', new Set(['consumer'])],
    ['consumer', new Set(['grandchild'])],
    ['grandchild', new Set(['great-grandchild'])],
  ]);
  assert.deepEqual([...logicalConsumers(reverse, 'source', { directBoundary: true })], ['consumer']);
  assert.deepEqual([...logicalConsumers(reverse, 'consumer', { directBoundary: true })], ['grandchild']);
  assert.deepEqual([...logicalConsumers(reverse, 'source')].sort(),
    ['consumer', 'grandchild', 'great-grandchild']);
});

test('duplicate labels resolve to the NEWEST snapshot, so a re-entered stage sees later edits', () => {
  const ledger = ledgerWith(
    snap('pre-author', { 'lem-a': 'aaaa' }),
    snap('post-3a', { 'lem-a': 'aaaa' }), // first gate attempt: nothing had changed
    snap('post-3a', { 'lem-a': 'AAAA' }), // re-entry after a repair
  );
  const r = runTool(['--touches', ledger, '--from', 'pre-author', '--to', 'post-3a', '--json']);
  assert.deepEqual(JSON.parse(r.stdout).changed, ['lem-a'],
    'first-match label resolution hides every edit after the first same-label snapshot');
});

test('a missing receipt bootstraps its own template and fails with the remedy', () => {
  const ledger = ledgerWith(
    snap('pre-author', { 'lem-a': 'aaaa' }),
    snap('post-3a', { 'lem-a': 'AAAA' }),
  );
  const receipt = join(mkdtempSync(join(tmpdir(), 'impact-')), 'impact.json');
  const r = runTool(['--touches', ledger, '--from', 'pre-author', '--to', 'post-3a', '--receipt', receipt]);
  assert.notEqual(r.status, 0, 'a missing receipt must fail the gate');
  assert.ok(existsSync(receipt), 'the template must be written where the receipt belongs');
  const template = JSON.parse(readFileSync(receipt, 'utf8'));
  assert.ok(Array.isArray(template.dispositions), 'template carries the pending dispositions to fill');
});

test('Step 3 snapshots before closure without cross-batch impact review', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ids = mod.stages.map((s: any) => s.id);
  assert.deepEqual(ids.slice(ids.indexOf('3a-adjudicate'), ids.indexOf('4-scope') + 1),
    ['3a-adjudicate', '3a-baseline', '3a-close', '4-scope']);
  const close = mod.stages.find((s: any) => s.id === '3a-close');
  assert.equal(close.gates, undefined);
  assert.ok(close.gatesWaived);
  assert.equal(mod.stages.some((s: any) => /^3b-/.test(s.id) || s.reviewCoverage), false);
});
