import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { scanProofFiles, writeProofLayout } from '../../proof-layout.mjs';
import { proofLayoutInputs, proofLayoutPath, verifyProofLayout } from '../../proof-layout-receipt.mjs';
import { itemHashGuard, shortHash } from '../../item-hash.mjs';
import { stages } from '../stages/mathlib.mts';

const REPO = new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const item = (body: string) => `---\nid: thm-a\nkind: theorem\nstatus: draft\n---\n${body}\n`;
const good = '## Proof\n\n**Proof technique:** direct.\n\n1.1 First argument.\nIts continuation. [F1]\n\n1.2 Conclusion. [step 1.1] ∎\n\nBoundary cases remain prose.';

test('actual renderer catches missing blue tags and broken step paragraphs', () => {
  const root = mkdtempSync(join(tmpdir(), 'proof-layout-cases-'));
  const cases = {
    valid: good,
    merged: good.replace('[F1]\n\n1.2', '[F1]\n1.2'),
    prologue: good.replace('direct.\n\n1.1', 'direct.\n1.1'),
    split: good.replace('Its continuation.', '\nIts continuation.'),
    headerTags: good.replace('First argument.', 'First argument. [F1]').replace('Its continuation. [F1]', 'Its continuation.'),
    periodAfter: good.replace('[F1]', '[F1].'),
    empty: good.replace('[F1]', '[,]'),
    fakeMath: good.replace('[F1]', '[\\kappa(x):k]'),
    noTags: good.replace(' [F1]', ''),
    indented: good.replace('1.1 First', '  1.1 First'),
    boldLabel: good.replace('1.1 First', '**1.1** First'),
    legacyQed: good.replace('[step 1.1] ∎', '∎ [step 1.1]'),
    codeAndMath: good.replace('Its continuation.', 'Its continuation.\n$$\n9.9+x=10 \\tag{5}\n$$\n```text\n8.8 is code\n```'),
    otherSections: ['Verification', 'Refutation', 'Counterexample'].map(s => good.replace('## Proof', `## ${s}`)).join('\n\n'),
    noProof: '## Definition\n\nAn object with no proof section.',
  };
  try {
    for (const [name, body] of Object.entries(cases)) writeFileSync(join(root, `${name}.md`), item(body));
    const results = scanProofFiles(Object.keys(cases).map(name => `${name}.md`), root);
    const byName = Object.fromEntries(results.map(r => [r.file.slice(0, -3), r]));
    for (const name of ['valid', 'indented', 'legacyQed', 'codeAndMath', 'otherSections', 'noProof']) assert.deepEqual(byName[name].errors, [], name);
    for (const name of ['merged', 'prologue', 'split', 'boldLabel']) assert.ok(byName[name].errors.some(e => e.gate === 'proof-step-separation'), name);
    for (const name of ['headerTags', 'periodAfter', 'empty', 'fakeMath', 'noTags']) assert.ok(byName[name].errors.some(e => e.gate === 'proof-blue-tags'), name);
    assert.equal(byName.codeAndMath.rows[0].sourceSteps, 2, 'masked math/code must not inflate the source inventory');
    assert.equal(byName.otherSections.rows.length, 3);
    assert.equal(byName.noProof.rows.length, 0);
    assert.ok(byName.noTags.errors.every(e => e.line > 5), 'diagnostics include frontmatter line offsets');
  } finally { rmSync(root, { recursive: true, force: true }); }
});

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'proof-layout-run-'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'research'));
  mkdirSync(join(root, 'library', 'algebra'), { recursive: true });
  writeFileSync(join(root, 'research', 'demo-scope-ledger.json'), JSON.stringify({ pages: [
    { id: 'page-a', kind: 'A' }, { id: 'page-a-examples', kind: 'B' },
  ] }));
  writeFileSync(join(root, 'library', 'algebra', 'page-a.md'), '---\npage: page-a\nitems: [thm-a]\n---\nA');
  writeFileSync(join(root, 'library', 'algebra', 'page-a-examples.md'), '---\npage: page-a-examples\nexamples:\n- thm-b\n- thm-a\n---\nB');
  const hashes = {};
  for (const id of ['thm-a', 'thm-b', 'thm-outside']) {
    const raw = item(good).replace('id: thm-a', `id: ${id}`);
    writeFileSync(join(root, 'items', `${id}.md`), raw);
    hashes[id] = shortHash(itemHashGuard(raw));
  }
  writeFileSync(join(root, 'research', 'demo-touches.json'), JSON.stringify({ snapshots: [{ label: 'baseline', hashes }] }));
  return root;
}

test('one scan covers A/B/shared/touched items; receipts reject stale content, scope and renderer hashes', () => {
  const root = fixture();
  try {
    const path = join(root, 'items', 'thm-outside.md');
    writeFileSync(path, readFileSync(path, 'utf8').replace('First argument.', 'Changed first argument.'));
    assert.deepEqual(proofLayoutInputs('demo', root).scope.files, ['items/thm-a.md', 'items/thm-b.md', 'items/thm-outside.md']);
    const report = writeProofLayout('demo', root);
    assert.equal(report.steps, 6);
    assert.equal(verifyProofLayout('demo', root).gates['proof-blue-tags'], 'pass');
    const receiptPath = proofLayoutPath('demo', root), bytes = readFileSync(receiptPath, 'utf8');
    assert.deepEqual(writeProofLayout('demo', root), report, 'second gate reuses the same SSR scan');
    assert.equal(readFileSync(receiptPath, 'utf8'), bytes);
    writeFileSync(path, readFileSync(path, 'utf8') + '\nLate change');
    assert.throws(() => verifyProofLayout('demo', root), /stale/);
    writeFileSync(path, item(good).replace('id: thm-a', 'id: thm-outside').replace('First argument.', 'Changed first argument.'));
    const broken = { ...report, dependencies: { ...report.dependencies, bogus: 'changed' } };
    writeFileSync(receiptPath, JSON.stringify(broken));
    assert.throws(() => verifyProofLayout('demo', root), /stale/);
    writeFileSync(receiptPath, bytes);
    const page = join(root, 'library', 'algebra', 'page-a-examples.md');
    writeFileSync(page, readFileSync(page, 'utf8').replace('- thm-b\n', ''));
    assert.throws(() => verifyProofLayout('demo', root), /stale/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('failed and empty coverage cannot pass; absent receipts fail before staging', () => {
  const root = fixture();
  try {
    for (const id of ['thm-a', 'thm-b']) writeFileSync(join(root, 'items', `${id}.md`), item('## Definition\n\nNo proof steps.'));
    const report = writeProofLayout('demo', root);
    assert.equal(report.steps, 0);
    assert.throws(() => verifyProofLayout('demo', root), /empty step coverage/);
    const result = spawnSync(process.execPath, [join(REPO, 'tools/run-commit.mjs'), '--run', 'missing-proof-layout-test', '--require-proof-layout'], { encoding: 'utf8' });
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /refusing close-out/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('Step 9 gates share readiness and verify receipts before commit without a new stage', () => {
  const ctx = { run: 'demo', repo: REPO };
  const ready = stages.find(s => s.id === '9-readiness-v2')!;
  const close = stages.find(s => s.id === '9-close-v2')!;
  for (const id of ['proof-step-separation', 'proof-blue-tags']) {
    assert.ok(ready.gates!(ctx).find(g => g.id === id)?.argv.includes('--write'));
    assert.ok(close.gates!(ctx).find(g => g.id === id)?.argv.includes('--verify'));
  }
  assert.ok(close.plan!(ctx, ['all'])[0].argv!.includes('--require-proof-layout'));
});

test('reflow preserves display math, tagged step boundaries and fenced code', () => {
  const root = mkdtempSync(join(tmpdir(), 'proof-layout-reflow-'));
  try {
    const file = join(root, 'item.md');
    const source = item('## Facts & Assumptions\n\n[F1] A fact.\n\n' + good.replace('Its continuation.', 'Its continuation.\n$$\nx=1 \\tag{5}\n$$\n```text\n9.9 code\n```'));
    writeFileSync(file, source);
    const result = spawnSync(process.execPath, [join(REPO, 'tools/tsx-run.mjs'), join(REPO, 'tools/reflow.mts'), file], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    assert.equal(readFileSync(file, 'utf8'), source);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
