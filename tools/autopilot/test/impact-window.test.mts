// impact window — the blast-radius gate must diff across the edits it audits.
//
// WHY. The 6c gate ran `--from pre-author` with no `--to`; impact-audit
// defaults `after` to the ledger's LAST snapshot, and the only snapshot taken
// by 6c time WAS pre-author — so the gate diffed the baseline against itself
// and reported "0 changed" over any amount of authoring. The frontier-13 fix
// ("baseline before authoring") moved the left endpoint and forgot the right
// one. These tests pin both endpoints and the tool semantics they rely on.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

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
    snap('post-6b', { 'lem-a': 'aaaa', 'lem-b': 'BBBB' }),
  );
  const r = runTool(['--touches', ledger, '--from', 'pre-author', '--to', 'post-6b', '--json']);
  assert.deepEqual(JSON.parse(r.stdout).changed, ['lem-b']);
});

test('duplicate labels resolve to the NEWEST snapshot, so a re-entered stage sees later edits', () => {
  const ledger = ledgerWith(
    snap('pre-author', { 'lem-a': 'aaaa' }),
    snap('post-6b', { 'lem-a': 'aaaa' }), // first gate attempt: nothing had changed
    snap('post-6b', { 'lem-a': 'AAAA' }), // re-entry after a repair
  );
  const r = runTool(['--touches', ledger, '--from', 'pre-author', '--to', 'post-6b', '--json']);
  assert.deepEqual(JSON.parse(r.stdout).changed, ['lem-a'],
    'first-match label resolution hides every edit after the first same-label snapshot');
});

test('a missing receipt bootstraps its own template and fails with the remedy', () => {
  const ledger = ledgerWith(
    snap('pre-author', { 'lem-a': 'aaaa' }),
    snap('post-6b', { 'lem-a': 'AAAA' }),
  );
  const receipt = join(mkdtempSync(join(tmpdir(), 'impact-')), 'impact.json');
  const r = runTool(['--touches', ledger, '--from', 'pre-author', '--to', 'post-6b', '--receipt', receipt]);
  assert.notEqual(r.status, 0, 'a missing receipt must fail the gate');
  assert.ok(existsSync(receipt), 'the template must be written where the receipt belongs');
  const template = JSON.parse(readFileSync(receipt, 'utf8'));
  assert.ok(Array.isArray(template.dispositions), 'template carries the pending dispositions to fill');
});

test('the 6c gate diffs pre-author -> post-6b, and a stage takes the post-6b snapshot first', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ids = mod.stages.map((s: any) => s.id);
  const bIdx = ids.indexOf('6b-baseline');
  assert.ok(bIdx > -1, 'no 6b-baseline stage takes the post-6b snapshot');
  assert.ok(bIdx > ids.indexOf('6b-adjudicate') && bIdx < ids.indexOf('6c-cross'),
    `6b-baseline sits at index ${bIdx}, outside (6b-adjudicate, 6c-cross)`);
  const cross = mod.stages.find((s: any) => s.id === '6c-cross');
  const gate = cross.gates({ run: 'frontier-14', repo: REPO })
    .find((g: any) => g.id === 'impact-audit');
  assert.ok(gate, '6c-cross has no impact-audit gate');
  const argv: string[] = typeof gate.argv === 'function' ? gate.argv() : gate.argv;
  assert.equal(argv[argv.indexOf('--to') + 1], 'post-6b',
    'without an explicit --to the gate diffs pre-author against the last snapshot, which at 6c IS pre-author');
});
