import { spawnSync } from './fixture-process.mts';
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { itemHashGuard, itemHashJudge, shortHash } from '../../physics-support/item-hash.mjs';

const REPO = join(import.meta.dirname, '..', '..', '..');
const body = (value: any) => JSON.stringify(value) + '\n';
const ITEM_BEFORE = `---\nid: a\ntitle: "Demo"\ndeps: []\n---\n\n## Statement\n\nBefore.\n`;
const ITEM_AFTER = `---\nid: a\ntitle: "Demo"\ndeps: []\n---\n\n## Statement\n\nAfter, corrected.\n`;
const ITEM_FINAL = `---\nid: a\ntitle: "Demo"\ndeps: []\n---\n\n## Statement\n\nAfter final adjudication, corrected again.\n`;

function fixture({ withLedgerRow = true } = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'step7-guard-op-'));
  mkdirSync(join(repo, 'items'), { recursive: true });
  mkdirSync(join(repo, 'research'), { recursive: true });
  writeFileSync(join(repo, 'items', 'a.md'), ITEM_AFTER);
  writeFileSync(join(repo, 'research', 'touches.json'), body({
    snapshots: [{ label: 'pre-step7', hashes: { a: shortHash(itemHashGuard(ITEM_BEFORE)) } }],
  }));
  writeFileSync(join(repo, 'research', 'judge.jsonl'), '');
  writeFileSync(join(repo, 'research', 'adjudications.jsonl'), '');
  writeFileSync(join(repo, 'research', 'terminal.jsonl'), '');
  writeFileSync(join(repo, 'research', 'scope.json'), body({ run: 'demo', by_item: { a: 'g' } }));
  writeFileSync(join(repo, 'research', 'owner-repairs.jsonl'), body({
    version: 1, kind: 'owner-preflight-repair', run: 'demo', id: 'a', found_via: 'a', group: 'g',
    authorized_by: 'owner', defect_id: 'demo-d-1',
    defect: 'The carrier asserted more than its supplier licenses.',
    correction_basis: 'Narrowed the claim to the horizon its supplier proves, regenerated the contract entry, and re-ran precheck on the repaired text; the defect-ledger row records the fatality.',
    source_urls: ['https://example.org/one.pdf', 'https://example.org/two.pdf'],
    pre_sha256: itemHashGuard(ITEM_BEFORE), post_sha256: itemHashGuard(ITEM_AFTER),
    at: '2026-09-20T00:00:00Z',
  }));
  const rows = withLedgerRow
    ? [JSON.stringify({ defect_id: 'demo-d-1', run: 'demo', subject: 'a', severity: 'fatal', disposition: 'narrowed' })]
    : [JSON.stringify({ defect_id: 'demo-other', run: 'demo', subject: 'a', severity: 'fatal', disposition: 'narrowed' })];
  writeFileSync(join(repo, 'research', 'defect-ledger.jsonl'), `${rows.join('\n')}\n`);
  return repo;
}

const guard = (repo: string) => spawnSync('node', ['tools/physics-support/step7-guard.mjs',
  '--touches', join(repo, 'research', 'touches.json'), '--baseline', 'pre-step7',
  '--judge-ledger', join(repo, 'research', 'judge.jsonl'),
  '--adjudications', join(repo, 'research', 'adjudications.jsonl'),
  '--scope', join(repo, 'research', 'scope.json'),
  '--terminal-resolutions', join(repo, 'research', 'terminal.jsonl'),
  '--owner-prerequisite-repairs', join(repo, 'research', 'owner-repairs.jsonl'),
  '--defect-ledger', join(repo, 'research', 'defect-ledger.jsonl'),
  '--items-dir', join(repo, 'items')],
{ cwd: REPO, encoding: 'utf8' });

test('an owner-preflight repair licenses a defect found while satisfying preflight', () => {
  const repo = fixture();
  try {
    const result = guard(repo);
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.match(result.stdout, /1\/1 change\(s\) licensed/);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('an owner-preflight repair without its closed fatal ledger row is not a licence', () => {
  const repo = fixture({ withLedgerRow: false });
  try {
    const result = guard(repo);
    assert.notEqual(result.status, 0);
    assert.match(result.stdout + result.stderr, /owner-preflight-repair-defect/);
    assert.match(result.stdout + result.stderr, /0\/1 change\(s\) licensed/);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('a preflight repair must be owner-authorized and name the repaired item itself', () => {
  const repo = fixture();
  try {
    const rows = readFileSync(join(repo, 'research', 'owner-repairs.jsonl'), 'utf8');
    writeFileSync(join(repo, 'research', 'owner-repairs.jsonl'),
      rows.replace('"authorized_by":"owner"', '"authorized_by":"final-adjudicator"'));
    let result = guard(repo);
    assert.notEqual(result.status, 0);
    assert.match(result.stdout + result.stderr, /owner-preflight-repair-authority/);

    writeFileSync(join(repo, 'research', 'owner-repairs.jsonl'),
      rows.replace('"found_via":"a"', '"found_via":"a","note":"kept as the same item"'));
    result = guard(repo);
    assert.equal(result.status, 0, result.stdout + result.stderr);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('a current terminal resolution supersedes an immutable owner-repair post hash', () => {
  const repo = fixture();
  try {
    writeFileSync(join(repo, 'items', 'a.md'), ITEM_FINAL);
    writeFileSync(join(repo, 'research', 'terminal.jsonl'), body({
      version: 1, run: 'demo', stage: '7-rejudge', id: 'a', resolved_by: 'session',
      disposition: 'repaired', rejudge_rounds_exhausted: 3,
      exhausted_at: '2026-09-20T00:01:00Z', context_sha256: 'b'.repeat(64),
      item_sha256: itemHashJudge(ITEM_FINAL),
      basis: 'A final independent adjudication repaired the item again and bound this terminal receipt to the exact resulting item bytes.',
      at: '2026-09-20T00:02:00Z',
    }));
    const result = guard(repo);
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.match(result.stdout, /owner-prerequisite-repair-superseded/);
    assert.match(result.stdout, /1\/1 change\(s\) licensed/);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});
