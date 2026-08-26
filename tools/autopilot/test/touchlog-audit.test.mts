// Refutations are rejected VERSIONS, not rejection rows.
//
// WHY. touchlog audit counted every keep=false row: both lanes rejecting one
// frozen text read as "refuted 2x", and frontier-15's escalation set carried
// 30 such items (frontier-14: 131) with no repair history at all — agreement
// noise burying the four real signals. A refutation event is now a distinct
// (id, item_sha256) rejection; the live positive control collapsed the set
// from 30 to exactly the two twice-rejected-version items plus the two
// refuted-then-repaired ones the step-10 report had identified by hand.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'touchlog.mjs');

function fixture(judgeRows: any[]) {
  const dir = mkdtempSync(join(tmpdir(), 'touchlog-'));
  mkdirSync(join(dir, 'items'));
  writeFileSync(join(dir, 'judge.jsonl'), judgeRows.map((r) => JSON.stringify(r)).join('\n') + '\n');
  const snap = spawnSync(process.execPath, [TOOL, 'snap', 'touches.json', 'pre'], { cwd: dir, encoding: 'utf8', timeout: 60_000 });
  assert.equal(snap.status, 0, snap.stderr);
  return dir;
}

const audit = (dir: string) => spawnSync(process.execPath,
  [TOOL, 'audit', 'touches.json', 'judge.jsonl'], { cwd: dir, encoding: 'utf8', timeout: 60_000 });

test('both lanes rejecting one text version is ONE refutation, not two', () => {
  const dir = fixture([
    { id: 'thm-x', model: 'gpt-5.6-terra', keep: false, item_sha256: 'aaa' },
    { id: 'thm-x', model: 'gpt-5.4', keep: false, item_sha256: 'aaa' },
  ]);
  const r = audit(dir);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /0 item\(s\)|none/, 'agreement on one version must not reach the escalation set');
});

test('two rejected versions of one item is a real 2x — the converging-or-false signal', () => {
  const dir = fixture([
    { id: 'thm-x', model: 'gpt-5.6-terra', keep: false, item_sha256: 'aaa' },
    { id: 'thm-x', model: 'gpt-5.4', keep: false, item_sha256: 'aaa' },
    { id: 'thm-x', model: 'gpt-5.6-terra', keep: false, item_sha256: 'bbb' },
  ]);
  const r = audit(dir);
  assert.match(r.stdout, /thm-x/);
  assert.match(r.stdout, /refuted 2x/);
});

test('a re-spent lane on the same text adds nothing', () => {
  const dir = fixture([
    { id: 'thm-x', model: 'gpt-5.4', keep: false, item_sha256: 'aaa' },
    { id: 'thm-x', model: 'gpt-5.4', keep: false, item_sha256: 'aaa' },
  ]);
  const r = audit(dir);
  assert.match(r.stdout, /0 item\(s\)|none/);
});
