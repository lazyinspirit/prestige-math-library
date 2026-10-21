import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

for (const physics of [false, true]) test(`${physics ? 'physics' : 'math'} regeneration deduplicates links and preserves supported source sections`, () => {
  const root = mkdtempSync(join(tmpdir(), 'regen-contract-'));
  try {
    mkdirSync(join(root, 'items'));
    const section = physics ? 'Postulate' : 'Statement';
    writeFileSync(join(root, 'items/lem-source.md'), `---\nid: lem-source\n---\n## ${section}\nThe exact adopted clause.\n`);
    writeFileSync(join(root, 'items/lem-consumer.md'), '---\nid: lem-consumer\n---\n## Facts & Assumptions\n[F1] Use [[lem-source]] and [[lem-source]].\n\n## Proof\n1.1 Apply [F1]. [given, F1]\n');
    const file = join(root, 'contracts.json');
    const risk_review = { status: 'complete', reviewer: 'existing actual review' };
    writeFileSync(file, JSON.stringify({ contracts: { 'lem-consumer': { citations: [], derivations: [], boundaries: [], risk_review } } }));
    const tool = resolve(physics ? 'tools/physics-support/regen-contract-entries.mjs' : 'tools/regen-contract-entries.mjs');
    const result = spawnSync(process.execPath, [tool, file, 'lem-consumer'], { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stderr, '');
    const entry = JSON.parse(readFileSync(file, 'utf8')).contracts['lem-consumer'];
    assert.equal(entry.citations.length, 1);
    assert.equal(entry.citations[0].source_section, section);
    assert.equal(entry.citations[0].quote, 'The exact adopted clause.');
    assert.deepEqual(entry.citations[0].uses, ['1.1']);
    assert.deepEqual(entry.risk_review, risk_review);
  } finally { rmSync(root, { recursive: true, force: true }); }
});


// These cases execute the actual math generator in a temporary cwd. It reads
// items/ relative to cwd; no repository item or contract fixture is changed.
function mathFixture(t, body, entry) {
  const root = mkdtempSync(join(tmpdir(), 'regen-no-proof-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'items'));
  writeFileSync(join(root, 'items/lem-source.md'), '---\nid: lem-source\n---\n## Statement\nThe exact adopted clause.\n\n## Remarks\nThis is not the source claim.\n');
  writeFileSync(join(root, 'items/def-consumer.md'), `---\nid: def-consumer\n---\n${body}`);
  const file = join(root, 'contracts.json');
  const doc = { version: 1, scope: ['def-consumer'], contracts: { 'def-consumer': entry } };
  writeFileSync(file, JSON.stringify(doc));
  const child = spawnSync(process.execPath, [resolve('tools/regen-contract-entries.mjs'), file, 'def-consumer'],
    { cwd: root, encoding: 'utf8' });
  assert.equal(child.error, undefined);
  assert.equal(child.status, 0, child.stdout + child.stderr);
  return { child, doc: JSON.parse(readFileSync(file, 'utf8')) };
}
const declarativeBody = '## Definition\nA declared fixture.\n\n## Facts & Assumptions\n\n[F1] Context only. [[lem-source]]\n';

test('math no-proof regeneration emits truthful empty uses and preserves nonproof metadata', t => {
  const entry = { citations: [], derivations: [], routine_steps: [], boundaries: [{ case: 'empty', status: 'not_applicable', reason: 'A fixed declaration.' }],
    risk_review: { status: 'complete', evidence: 'existing fixture review' }, owner_note: 'preserve this value' };
  const { child, doc } = mathFixture(t, declarativeBody, entry);
  assert.equal(child.stderr, '');
  assert.match(child.stdout, /regenerated 1, skipped 0/);
  const current = doc.contracts['def-consumer'];
  assert.deepEqual(current.derivations, []);
  assert.deepEqual(current.routine_steps, []);
  assert.equal(current.citations.length, 1);
  assert.deepEqual(current.citations[0].uses, []);
  assert.equal(current.citations[0].quote, 'The exact adopted clause.');
  for (const key of ['boundaries', 'risk_review', 'owner_note']) assert.deepEqual(current[key], entry[key]);
  assert.deepEqual(doc.scope, ['def-consumer']);
});

test('math no-proof regeneration refuses to erase old derivation or routine rows', t => {
  for (const field of ['derivations', 'routine_steps']) {
    const entry = { citations: [{ retained: true }], derivations: [], routine_steps: [], owner_note: 'needs explicit migration' };
    entry[field] = [{ id: 'old-proof', step: '1.1', claim: 'The previous actual argument.', inputs: ['given'] }];
    const { child, doc } = mathFixture(t, declarativeBody, entry);
    assert.match(child.stderr, /SKIP def-consumer: old proof rows but no current steps; explicit root migration required/);
    assert.match(child.stdout, /regenerated 0, skipped 1/);
    assert.deepEqual(doc.contracts['def-consumer'], entry);
  }
});

test('math generator sees continuation Fact uses without fabricating uses for context', t => {
  const body = `${declarativeBody}\n[F2] Unused context. [[lem-source]]\n\n## Proof\n\n1.1 Start the argument.\nThe continued argument uses [F1]. [given, F1] ∎\n`;
  const { child, doc } = mathFixture(t, body, { citations: [], derivations: [], routine_steps: [], boundaries: [] });
  assert.equal(child.stderr, '');
  const entry = doc.contracts['def-consumer'];
  assert.deepEqual(entry.citations.find(c => c.fact === 'F1').uses, ['1.1']);
  assert.deepEqual(entry.citations.find(c => c.fact === 'F2').uses, []);
  assert.equal(entry.derivations.length, 1);
  assert.match(entry.derivations[0].claim, /continued argument uses \[F1\]/);
  assert.ok(entry.derivations[0].inputs.includes('F1'));
  assert.ok(!entry.derivations[0].inputs.includes('F2'));
});

test('math generator updates routine inputs without duplicating them as derivations', t => {
  const body = `${declarativeBody}\n## Proof\n\n1.1 Begin the routine computation.\nIts continuation uses [F1]. [given, F1]\n\n2.1 Conclude the claim. [step 1.1] ∎\n`;
  const entry = { citations: [], derivations: [], routine_steps: [{ id: 'keep-routine-id', step: '1.1', claim: 'Old claim.', inputs: ['given'], reason: 'Retain this classification.' }],
    boundaries: [], risk_review: { status: 'complete', evidence: 'existing fixture review' } };
  const { child, doc } = mathFixture(t, body, entry);
  assert.equal(child.stderr, '');
  const current = doc.contracts['def-consumer'];
  assert.deepEqual(current.derivations.map(s => s.step), ['2.1']);
  assert.equal(current.routine_steps.length, 1);
  assert.equal(current.routine_steps[0].id, 'keep-routine-id');
  assert.equal(current.routine_steps[0].reason, 'Retain this classification.');
  assert.ok(current.routine_steps[0].inputs.includes('F1'));
  assert.match(current.routine_steps[0].claim, /continuation uses \[F1\]/);
  assert.deepEqual(current.risk_review, entry.risk_review);
});
