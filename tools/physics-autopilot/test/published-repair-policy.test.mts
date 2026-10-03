import { spawnSync } from './fixture-process.mts';
import { copyFixtureFile } from './fixture-io.mts';
import { mkdirSync as physicsMkdir } from 'node:fs';
import { dirname as physicsDirname } from 'node:path';
const copyFileSync = copyFixtureFile;
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync as physicsCopyFile, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

import { recordedPublishedRepair } from '../../physics-support/published-repair-policy.mjs';
import { itemHashGuard } from '../../physics-support/item-hash.mjs';

const REPO = join(import.meta.dirname, '..', '..', '..');
const sha = (text: string) => createHash('sha256').update(text).digest('hex');
const id = 'thm-repaired';
const receiptPath = 'research/repair.json';

function fixture(t: any) {
  const root = mkdtempSync(join(tmpdir(), 'published-repair-policy-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['items', 'library', 'research', 'tools']) mkdirSync(join(root, dir), { recursive: true });
  writeFileSync(join(root, 'research/b-leaf-legacy-allowlist.json'), JSON.stringify({ version: 1, edges: [] }));
  const before = '---\nid: thm-repaired\nkind: theorem\nstatus: published\nverification:\n  audited: 2026-09-30\n---\n## Statement\nOriginal.\n';
  const current = before.replace('  audited: 2026-09-30', `  repair: ${receiptPath}`).replace('Original.', 'Corrected.');
  const content = itemHashGuard(current);
  const evidence = `\n${id}: bounded correction; current canonical hash ${content}. Local checks only, no whole-item audit.\n`;
  const claim = { version: 1, run: 'r', id, group: 'h', pre_sha256: itemHashGuard(before), claimed_at: '2026-10-01T00:00:00Z' };
  const checks = Object.fromEntries(['precheck', 'rendercheck'].map((tool) => [tool, {
    checked_at: '2026-10-01T00:01:00Z', content_sha256: content, exit_code: 0,
    command: ['node', `tools/physics-support/${tool}${tool === 'precheck' ? '.mts' : '.mjs'}`, `items/${id}.md`],
    output: tool === 'precheck' ? `PASS items/${id}.md\n1 checked, 0 failing` : 'OK — 1 file(s)',
  }]));
  const receipt: any = {
    version: 1, kind: 'recorded-local-published-repair', id, run: 'r', group: 'h',
    correction: 'Corrected the supplied premise.', content_sha256: content,
    before_file: 'research/before.md', before_raw_sha256: sha(before), pre_sha256: itemHashGuard(before),
    recorded_at: '2026-10-01T00:02:00Z', ledger_marker: 'r:thm-repaired', ledger_sha256: sha(evidence), local_checks: checks,
  };
  const putReceipt = () => writeFileSync(join(root, receiptPath), JSON.stringify(receipt));
  writeFileSync(join(root, 'items', `${id}.md`), current);
  writeFileSync(join(root, 'research/before.md'), before);
  writeFileSync(join(root, 'research/r-step5-published-claims.jsonl'), JSON.stringify(claim) + '\n');
  writeFileSync(join(root, 'research/published-consumer-supplier-ledger.md'),
    `<!-- local-published-repair:r:thm-repaired:begin -->${evidence}<!-- local-published-repair:r:thm-repaired:end -->\n`);
  putReceipt();
  const check = (text = current) => recordedPublishedRepair(root, id, text, receiptPath);
  const depcheck = (...args: string[]) => {
    for (const file of ['depcheck.mjs', 'facts-block.mjs', 'frontmatter-list.mjs', 'item-scope.mjs', 'item-hash.mjs', 'published-repair-policy.mjs'])
      copyFileSync(join(REPO, 'tools/physics-support', file), join(root, 'tools/physics-support', file));
    return spawnSync(process.execPath, [join(root, 'tools/physics-support/depcheck.mjs'), '--json', ...args], { encoding: 'utf8' });
  };
  return { root, before, current, claim, receipt, putReceipt, check, depcheck };
}

test('already-published current repair passes as local evidence, never an audit stamp', (t) => {
  const f = fixture(t);
  assert.equal(f.check().ok, true);
  const result = f.depcheck();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.match(result.stdout, /published-local-repair/);
  assert.doesNotMatch(f.current, /audited:|verified:/);
  // Verification metadata itself is outside the mathematical hash.
  assert.equal(f.check(f.current.replace('verification:\n', 'verification:\n  precheck: pass\n')).ok, true);
});

test('new publication cannot use an unpublished pre-carrier even with matching hashes', (t) => {
  const f = fixture(t);
  const draft = f.before.replace('status: published', 'status: draft');
  writeFileSync(join(f.root, 'research/before.md'), draft);
  f.receipt.before_raw_sha256 = sha(draft);
  f.receipt.pre_sha256 = itemHashGuard(draft);
  f.claim.pre_sha256 = itemHashGuard(draft);
  writeFileSync(join(f.root, 'research/r-step5-published-claims.jsonl'), JSON.stringify(f.claim));
  f.putReceipt();
  assert.equal(f.check().ok, false);
  assert.notEqual(f.depcheck().status, 0);
});

test('ordinary publication still requires audit and retains the existing audit path', (t) => {
  const f = fixture(t);
  const path = join(f.root, 'items', `${id}.md`);
  writeFileSync(path, f.current.replace(`  repair: ${receiptPath}\n`, ''));
  assert.notEqual(f.depcheck().status, 0);
  writeFileSync(path, f.current.replace(`  repair: ${receiptPath}`, '  audited: 2026-10-01'));
  assert.equal(f.depcheck().status, 0);
});

test('a published but never-audited pre-carrier cannot establish initial publication by repair', (t) => {
  const f = fixture(t);
  const before = f.before.replace('  audited: 2026-09-30\n', '');
  writeFileSync(join(f.root, 'research/before.md'), before);
  f.receipt.before_raw_sha256 = sha(before);
  f.putReceipt();
  assert.equal(f.check().ok, false);
  assert.notEqual(f.depcheck().status, 0);
});

test('a claimed prior audit outside the verification block does not establish publication', (t) => {
  const f = fixture(t);
  const before = f.before.replace('verification:\n', 'other:\n');
  writeFileSync(join(f.root, 'research/before.md'), before);
  f.receipt.before_raw_sha256 = sha(before);
  f.receipt.pre_sha256 = itemHashGuard(before);
  f.claim.pre_sha256 = itemHashGuard(before);
  writeFileSync(join(f.root, 'research/r-step5-published-claims.jsonl'), JSON.stringify(f.claim));
  f.putReceipt();
  assert.equal(f.check().ok, false);
  assert.notEqual(f.depcheck().status, 0);
});

for (const defect of ['current-content', 'missing-receipt', 'wrong-owner', 'missing-claim', 'before-content', 'ledger-content', 'missing-ledger', 'stale-check', 'failed-check', 'undocumented-check', 'receipt-path']) {
  test(`recorded repair rejects ${defect}, including legacy pending mode`, (t) => {
    const f = fixture(t);
    if (defect === 'current-content') writeFileSync(join(f.root, 'items', `${id}.md`), f.current.replace('Corrected.', 'Different.'));
    if (defect === 'missing-receipt') rmSync(join(f.root, receiptPath));
    if (defect === 'wrong-owner') { f.receipt.group = 'other'; f.putReceipt(); }
    if (defect === 'missing-claim') rmSync(join(f.root, 'research/r-step5-published-claims.jsonl'));
    if (defect === 'before-content') writeFileSync(join(f.root, 'research/before.md'), f.before + 'changed');
    if (defect === 'ledger-content') {
      const path = join(f.root, 'research/published-consumer-supplier-ledger.md');
      writeFileSync(path, readFileSync(path, 'utf8').replace('bounded correction', 'different correction'));
    }
    if (defect === 'missing-ledger') rmSync(join(f.root, 'research/published-consumer-supplier-ledger.md'));
    if (defect === 'stale-check') { f.receipt.local_checks.precheck.content_sha256 = '0'.repeat(64); f.putReceipt(); }
    if (defect === 'failed-check') { f.receipt.local_checks.rendercheck.exit_code = 1; f.putReceipt(); }
    if (defect === 'undocumented-check') { delete f.receipt.local_checks; f.putReceipt(); }
    if (defect === 'receipt-path') { f.receipt.before_file = 'research/../items/thm-repaired.md'; f.putReceipt(); }
    const source = readFileSync(join(f.root, 'items', `${id}.md`), 'utf8');
    assert.equal(f.check(source).ok, false);
    const result = f.depcheck('--pending-audit-ok');
    assert.notEqual(result.status, 0, result.stdout + result.stderr);
    assert.match(result.stdout, /published-unaudited/);
  });
}
