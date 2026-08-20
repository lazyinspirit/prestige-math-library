// apply-judge-stamps: the build route's stamp/verify contract, and the two
// defects the frontier-15 publish surfaced.
//
// WHY. frontier-15 fully closed at 10-commit with every gate green and 0 of
// 398 items carrying `verification.judge` — no stage owned the stamping act,
// and when the owner ran the tool by hand it first refused the ledger (retired
// Terra rows made a third lane under the exactly-two check) and then stamped
// nothing (clause-(a)-only currency read every step-9-moved pair as unjudged).
// The owner rewrote both (2026-08-17); these tests lock the rewrite, the
// `--verify` gate mode built on it, and the `${current}` ReferenceError the
// rewrite left in the audit-targeted evidence block.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

import { itemHashJudge } from '../../item-hash.mjs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'apply-judge-stamps.mjs');
// The CONFIGURED lineup, which the tool resolves from JUDGE_LINEUP and these
// tests run at its default (owner, 2026-08-20: deepseek+terra). The retired-lane
// row below is whichever lane is not in it — the roles swapped on that date, and
// the property under test did not.
const LANES = ['deepseek-v4-pro', 'gpt-5.6-terra'];
const RETIRED_LANE = 'claude-sonnet-5';
const STUB_CONTEXT = 'c'.repeat(64);
const OTHER_CONTEXT = 'f'.repeat(64);

const itemText = (id: string) =>
  `---\nid: ${id}\nkind: lemma\ntitle: "t"\nstatus: draft\nverification:\n  precheck: pass\n---\n\nBody of ${id}.\n`;

function fixture(ids: string[]) {
  const dir = mkdtempSync(join(tmpdir(), 'stamps-'));
  mkdirSync(join(dir, 'items'), { recursive: true });
  mkdirSync(join(dir, 'tools'), { recursive: true });
  mkdirSync(join(dir, 'research'), { recursive: true });
  // A stub pair-context builder. The lazy clause-(b) fast path means the real
  // judge.mts is spawned only for an item whose recorded item hash no longer
  // matches; the stub answers a fixed context hash for the clause-(a) tests.
  writeFileSync(join(dir, 'tools', 'judge.mts'),
    `console.log(JSON.stringify({ context_sha256: '${STUB_CONTEXT}' }));\n`);
  for (const id of ids) writeFileSync(join(dir, 'items', `${id}.md`), itemText(id));
  writeFileSync(join(dir, 'research', 'm.pages.json'),
    JSON.stringify([{ id: 'page-a', items: ids.map((id) => ({ id })) }]));
  return dir;
}

const ledgerRow = (id: string, model: string, keep: boolean | null, item: string, context = OTHER_CONTEXT) =>
  JSON.stringify({ id, model, keep, context_sha256: context, item_sha256: item, at: '2026-08-17T00:00:00Z' });

const writeLedger = (dir: string, lines: string[]) =>
  writeFileSync(join(dir, 'research', 'judge.jsonl'), lines.join('\n') + '\n');

const run = (dir: string, ...args: string[]) => spawnSync(process.execPath,
  [TOOL, '--ledger', 'research/judge.jsonl', '--manifests', 'research/m.pages.json', ...args],
  { cwd: dir, encoding: 'utf8', timeout: 60_000 });

test('apply stamps a current paired pass, ignores retired-lane rows, and verify closes over it', () => {
  const dir = fixture(['itm-a']);
  const h = itemHashJudge(readFileSync(join(dir, 'items', 'itm-a.md'), 'utf8'));
  writeLedger(dir, [
    ledgerRow('itm-a', LANES[0], true, h),
    ledgerRow('itm-a', LANES[1], true, h),
    // the retired lane in the same ledger is append-only evidence, never an
    // error and never a third-lane refusal
    ledgerRow('itm-a', RETIRED_LANE, false, h),
  ]);

  let r = run(dir, '--verify');
  assert.equal(r.status, 1, 'unstamped licensed pass fails the gate');
  assert.match(r.stderr, /itm-a: the ledger licenses a paired pass/);
  assert.match(r.stdout, /judge-stamps: 1 item\(s\) in scope/);

  r = run(dir, '--apply', '--report', 'research/stamps.json');
  assert.equal(r.status, 0, r.stderr);
  const text = readFileSync(join(dir, 'items', 'itm-a.md'), 'utf8');
  assert.match(text, / {2}judge:\n {4}model: "deepseek-v4-pro \+ gpt-5\.6-terra"\n {4}verdict: pass\n/);
  const receipt = JSON.parse(readFileSync(join(dir, 'research', 'stamps.json'), 'utf8'));
  assert.deepEqual(receipt.stamped.map((s: any) => s.id), ['itm-a']);

  r = run(dir, '--verify');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /1 stamped current, 0 lane-rejected, 0 problem\(s\)/);

  // idempotent: a re-apply on the same day rewrites nothing
  r = run(dir, '--apply', '--report', 'research/stamps.json');
  assert.equal(r.status, 0);
  const again = JSON.parse(readFileSync(join(dir, 'research', 'stamps.json'), 'utf8'));
  assert.equal(again.stamped[0].changed, false);
});

test('a lane rejection never stamps; a stale pass block fails verify and is stripped on apply', () => {
  const dir = fixture(['itm-b']);
  // seed the stale pass a rejection now contradicts
  const seeded = itemText('itm-b').replace(
    '  precheck: pass\n',
    '  precheck: pass\n  judge:\n    model: "deepseek-v4-pro + gpt-5.6-terra"\n    verdict: pass\n    date: 2026-08-01\n');
  writeFileSync(join(dir, 'items', 'itm-b.md'), seeded);
  const h = itemHashJudge(seeded);
  writeLedger(dir, [
    ledgerRow('itm-b', LANES[0], true, h),
    ledgerRow('itm-b', LANES[1], false, h),
  ]);

  let r = run(dir, '--verify');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /itm-b: a judge block sits on an item whose current verdict is a rejection/);

  r = run(dir, '--apply', '--report', 'research/stamps.json');
  assert.equal(r.status, 0, r.stderr);
  assert.ok(!/ {2}judge:/.test(readFileSync(join(dir, 'items', 'itm-b.md'), 'utf8')),
    'the contradicted pass block is stripped');
  const receipt = JSON.parse(readFileSync(join(dir, 'research', 'stamps.json'), 'utf8'));
  assert.equal(receipt.skipped[0].reason, 'lane-rejected');
  assert.equal(receipt.skipped[0].stripped_stale_pass, true);

  r = run(dir, '--verify');
  assert.equal(r.status, 0, 'an honest lane-rejected skip passes the gate');
  assert.match(r.stdout, /0 stamped current, 1 lane-rejected, 0 problem\(s\)/);
});

test('clause (a) still reaches a pair-context match through the lazy spawn; a truly stale verdict is a gate failure', () => {
  const dir = fixture(['itm-c', 'itm-d']);
  const stale = '0'.repeat(64);
  writeLedger(dir, [
    // itm-c: item hash stale, but the recorded pair context equals the current
    // one (the stub) — clause (a), reached only via the lazy judge.mts spawn
    ledgerRow('itm-c', LANES[0], true, stale, STUB_CONTEXT),
    ledgerRow('itm-c', LANES[1], true, stale, STUB_CONTEXT),
    // itm-d: neither clause holds
    ledgerRow('itm-d', LANES[0], true, stale, OTHER_CONTEXT),
    ledgerRow('itm-d', LANES[1], true, stale, OTHER_CONTEXT),
  ]);

  let r = run(dir, '--verify');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /itm-c: the ledger licenses a paired pass/);
  assert.match(r.stderr, /itm-d: no current paired verdict/);

  r = run(dir, '--apply');
  assert.equal(r.status, 0, r.stderr);
  assert.match(readFileSync(join(dir, 'items', 'itm-c.md'), 'utf8'), / {2}judge:/);
  assert.ok(!/ {2}judge:/.test(readFileSync(join(dir, 'items', 'itm-d.md'), 'utf8')));

  r = run(dir, '--verify');
  assert.equal(r.status, 1, 'the currency defect on itm-d survives as the residue');
  assert.match(r.stderr, /itm-d: no current paired verdict/);
  assert.ok(!/itm-c/.test(r.stderr));
});

test('the audit-targeted route writes the exact receipt evidence into the stamp', () => {
  // Regression: the 2026-08-17 rewrite left `${current}` in the targeted
  // evidence block after removing the variable — a ReferenceError the moment
  // the route reached an eligible stamp.
  const dir = fixture(['itm-e']);
  const h = itemHashJudge(readFileSync(join(dir, 'items', 'itm-e.md'), 'utf8'));
  const C = 'a'.repeat(64);
  writeLedger(dir, [
    ledgerRow('itm-e', LANES[0], true, h, C),
    ledgerRow('itm-e', LANES[1], true, h, C),
  ]);
  writeFileSync(join(dir, 'research', 'targets.json'), JSON.stringify({
    version: 1, mode: 'published-audit-targeted-rejudge',
    targets: [{ id: 'itm-e', context_sha256: C, item_sha256: h }],
  }));

  const r = spawnSync(process.execPath,
    [TOOL, '--ledger', 'research/judge.jsonl', '--audit-targeted-rejudges', 'research/targets.json', '--apply'],
    { cwd: dir, encoding: 'utf8', timeout: 60_000 });
  assert.equal(r.status, 0, r.stderr);
  const text = readFileSync(join(dir, 'items', 'itm-e.md'), 'utf8');
  assert.match(text, /scope: published-audit-targeted/);
  assert.match(text, new RegExp(`context_sha256: ${C}`));
  assert.match(text, new RegExp(`item_sha256: ${h}`));
});

test('--verify is check-only and refuses --apply and the targeted route', () => {
  const dir = fixture(['itm-f']);
  writeLedger(dir, [ledgerRow('itm-f', LANES[0], true, '0'.repeat(64))]);
  let r = run(dir, '--verify', '--apply');
  assert.equal(r.status, 2);
  r = spawnSync(process.execPath,
    [TOOL, '--ledger', 'research/judge.jsonl', '--audit-targeted-rejudges', 'research/targets.json', '--verify'],
    { cwd: dir, encoding: 'utf8', timeout: 60_000 });
  assert.equal(r.status, 2);
});
