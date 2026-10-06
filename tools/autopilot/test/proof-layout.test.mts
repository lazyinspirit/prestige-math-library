import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { scanProofFiles, writeProofLayout } from '../../proof-layout.mjs';
import { proofLayoutInputs, proofLayoutPath, proofLayoutScope, verifyProofLayout } from '../../proof-layout-receipt.mjs';
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
    { id: 'page-a', kind: 'A', batch: '1' }, { id: 'page-a-examples', kind: 'B', batch: '1' },
  ] }));
  writeFileSync(join(root, 'library', 'algebra', 'page-a.md'), '---\npage: page-a\nitems: [thm-a]\n---\nA');
  writeFileSync(join(root, 'library', 'algebra', 'page-a-examples.md'), '---\npage: page-a-examples\nexamples:\n- thm-b\n- thm-a\n---\nB');
  writeFileSync(join(root, 'research', 'demo-batch-1.pages.json'), JSON.stringify([
    { id: 'page-a', items: [{ id: 'thm-a' }] }, { id: 'page-a-examples', items: ['thm-b', 'thm-a'] },
  ]));
  const hashes = {};
  for (const id of ['thm-a', 'thm-b', 'thm-outside']) {
    const raw = item(good).replace('id: thm-a', `id: ${id}`);
    writeFileSync(join(root, 'items', `${id}.md`), raw);
    hashes[id] = shortHash(itemHashGuard(raw));
  }
  writeFileSync(join(root, 'research', 'demo-touches.json'), JSON.stringify({ snapshots: [{ label: 'baseline', hashes }] }));
  return root;
}

test('one scan covers current A/B/shared items; receipts reject stale content, scope and renderer hashes', () => {
  const root = fixture();
  try {
    const path = join(root, 'items', 'thm-outside.md');
    writeFileSync(path, readFileSync(path, 'utf8').replace('First argument.', 'Changed first argument.'));
    assert.deepEqual(proofLayoutInputs('demo', root).scope.files, ['items/thm-a.md', 'items/thm-b.md']);
    const report = writeProofLayout('demo', root);
    assert.equal(report.steps, 4);
    assert.equal(verifyProofLayout('demo', root).gates['proof-blue-tags'], 'pass');
    const receiptPath = proofLayoutPath('demo', root), bytes = readFileSync(receiptPath, 'utf8');
    assert.deepEqual(writeProofLayout('demo', root), report, 'second gate reuses the same SSR scan');
    assert.equal(readFileSync(receiptPath, 'utf8'), bytes);
    const manifestPath = join(root, 'research', 'demo-batch-1.pages.json');
    const manifestBytes = readFileSync(manifestPath, 'utf8');
    writeFileSync(manifestPath, manifestBytes + '\n');
    assert.throws(() => verifyProofLayout('demo', root), /stale/);
    writeFileSync(manifestPath, manifestBytes);
    writeFileSync(join(root, 'items', 'thm-unrelated-late-addition.md'), 'Unrelated malformed item');
    writeFileSync(path, readFileSync(path, 'utf8') + '\nUnrelated late change');
    assert.deepEqual(verifyProofLayout('demo', root), report);
    const active = join(root, 'items', 'thm-a.md'), activeBytes = readFileSync(active, 'utf8');
    writeFileSync(active, activeBytes + '\nLate change');
    assert.throws(() => verifyProofLayout('demo', root), /stale/);
    writeFileSync(active, activeBytes);
    const broken = { ...report, dependencies: { ...report.dependencies, bogus: 'changed' } };
    writeFileSync(receiptPath, JSON.stringify(broken));
    assert.throws(() => verifyProofLayout('demo', root), /stale/);
    writeFileSync(receiptPath, bytes);
    const page = join(root, 'library', 'algebra', 'page-a-examples.md');
    writeFileSync(page, readFileSync(page, 'utf8').replace('- thm-b\n', ''));
    assert.throws(() => verifyProofLayout('demo', root), /absent from current run pages/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('manifest scope survives historical retirement and rejects missing or ambiguous current subjects', () => {
  const root = fixture();
  const manifest = join(root, 'research', 'demo-batch-1.pages.json');
  const rows = [
    { id: 'page-a', items: ['thm-a'] }, { id: 'page-a-examples', items: ['thm-b', 'thm-a'] },
  ];
  try {
    const active = join(root, 'items', 'thm-a.md');
    const bytes = readFileSync(active, 'utf8');
    writeFileSync(active, bytes.replace('kind: theorem', 'aliases: [prop-retired]\nkind: theorem'));
    // A retired carrier occurs in old corpus snapshots, but its real current
    // owner is already promised by the manifests; history cannot add subjects.
    writeFileSync(join(root, 'research', 'demo-touches.json'), JSON.stringify({ snapshots: [
      { hashes: { 'prop-retired': 'old' } }, { hashes: { 'prop-retired': 'changed' } },
    ] }));
    assert.deepEqual(proofLayoutScope('demo', root).files, ['items/thm-a.md', 'items/thm-b.md']);
    rows[0].items = ['prop-retired'];
    writeFileSync(manifest, JSON.stringify(rows));
    assert.deepEqual(proofLayoutScope('demo', root).files, ['items/thm-a.md', 'items/thm-b.md']);
    const collision = join(root, 'items', 'prop-retired.md');
    writeFileSync(collision, item(good).replace('id: thm-a', 'id: prop-retired'));
    assert.throws(() => proofLayoutScope('demo', root), /collides with a real item file/);
    rmSync(collision);
    const second = join(root, 'items', 'thm-b.md');
    const secondBytes = readFileSync(second, 'utf8');
    writeFileSync(second, secondBytes.replace('kind: theorem', 'aliases: [prop-retired]\nkind: theorem'));
    assert.throws(() => proofLayoutScope('demo', root), /ambiguous current ownership/);
    writeFileSync(second, secondBytes);
    rows[0].items = ['thm-missing'];
    writeFileSync(manifest, JSON.stringify(rows));
    assert.throws(() => proofLayoutScope('demo', root), /missing items\/thm-missing.md/);
    rows[0].items = ['thm-outside'];
    writeFileSync(manifest, JSON.stringify(rows));
    assert.throws(() => proofLayoutScope('demo', root), /absent from current run pages/);
    rows[0].items = ['thm-a'];
    writeFileSync(manifest, JSON.stringify(rows));
    rmSync(active);
    assert.throws(() => proofLayoutScope('demo', root), /scoped item thm-a has no/);
    assert.throws(() => scanProofFiles(['items/prop-retired.md'], root), /ENOENT/);
    writeFileSync(active, bytes);
    writeFileSync(manifest, '[]');
    assert.throws(() => proofLayoutScope('demo', root), /empty or malformed manifest/);
    rmSync(manifest);
    assert.throws(() => proofLayoutScope('demo', root), /missing research\/demo-batch-1.pages.json/);
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
