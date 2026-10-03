import test from 'node:test';
import assert from 'node:assert/strict';
import { gateDiagnostics } from './step7-gate-diagnostics.mjs';

const ids = ['thm-broken', 'lem-supplier', 'ex-passing', 'def-other'];
const diagnostic = (id, output) => gateDiagnostics({ id, code: 1, output }, ids)[0];

test('recursively separates failed advisory records, including children of passing records', () => {
  const input = { id: 'proof-contract', ok: false, output: 'ERROR quote [thm-broken]: cites lem-supplier', advisory: [
    { id: 'risk-report', ok: true, advisory: [{ id: 'finite-smoke', code: 1, output: 'FAIL [def-other] check: wrong' }] },
    { id: 'unknown', output: 'thm-broken is mentioned' },
  ] };
  const rows = gateDiagnostics(input, ids);
  assert.deepEqual(rows.map(r => [r.index, r.id, r.subjects]), [[0, 'proof-contract', ['thm-broken']], [1, 'finite-smoke', ['def-other']], [2, 'unknown', []]]);
  assert.equal(rows[2].ownerHeld, true);
  assert.ok(rows.every(r => !('advisory' in r.failure)));
  assert.ok(input.advisory);
});

test('plain diagnostics distinguish failing headers from suppliers and passing inventories', () => {
  for (const check of ['proof-contract', 'risk-report', 'finite-smoke', 'judge-closure']) {
    const row = diagnostic(check, 'HIGH 9 [ex-passing] cited lem-supplier\nPASS [ex-passing] okay\nERROR quote [thm-broken]: quoted [[lem-supplier]]');
    assert.deepEqual(row.subjects, ['thm-broken']);
    assert.equal(row.ownerHeld, false);
  }
  assert.deepEqual(diagnostic('precheck', 'PASS items/ex-passing.md\nFAIL items/thm-broken.md\nProof cites [[lem-supplier]]').subjects, ['thm-broken']);
});

test('forward and render subjects come only from failing source paths', () => {
  assert.deepEqual(diagnostic('fwdcheck', '1 warning(s):\n [forward-unused] items/ex-passing.md: warning\n1 ERROR(s):\n [forward-undeclared] items/thm-broken.md: wikilink [[lem-supplier]] points forward\nFAIL').subjects, ['thm-broken']);
  assert.deepEqual(diagnostic('rendercheck', ' [warning] items/ex-passing.md: harmless\n\n [multiline-display] items/thm-broken.md: broken\n   [[lem-supplier]]\n\n1 ERROR(s) across 2 file(s)').subjects, ['thm-broken']);
  assert.deepEqual(diagnostic('fwdcheck', '1 ERROR(s):\n [forward-cycle] CIRCULAR (deps + load-bearing forward references): thm-broken -> def-other -> thm-broken').subjects, ['def-other', 'thm-broken']);
});

test('JSON schemas exclude nested supplier IDs, inventories, upheld and reviewed templates', () => {
  for (const check of ['proof-contract', 'risk-report', 'finite-smoke', 'judge-closure']) {
    const row = diagnostic(check, JSON.stringify({ errors: [{ id: 'thm-broken', message: 'lem-supplier', nested: { id: 'lem-supplier' } }], findings: [{ id: 'ex-passing' }], outcomes: [{ id: 'ex-passing', ok: true }] }));
    assert.deepEqual(row.subjects, ['thm-broken']);
  }
  assert.deepEqual(diagnostic('boundary-audit', JSON.stringify({ templates: [{ items: ['def-other'] }], contradicted: [{ id: 'thm-broken', source: 'lem-supplier' }], upheld: [{ id: 'ex-passing' }], reviewed_templates: [{ items: ['lem-supplier'] }] })).subjects, ['def-other', 'thm-broken']);
  assert.deepEqual(diagnostic('citation-fidelity', JSON.stringify({ quote_not_found: [{ id: 'thm-broken', source: 'lem-supplier' }], widening: [], upheld: [{ id: 'ex-passing' }] })).subjects, ['thm-broken']);
  assert.deepEqual(diagnostic('unknown', JSON.stringify({ errors: [{ id: 'thm-broken' }] })).subjects, []);
});

test('citation and boundary text stop before upheld records', () => {
  assert.deepEqual(diagnostic('citation-fidelity', 'QUOTE NOT FOUND IN THE CITED ITEM — 1.\n thm-broken [A1] -> lem-supplier\n quote: ex-passing\nUPHELD BY REVIEW — 1\n ex-passing [A2] -> def-other').subjects, ['thm-broken']);
  assert.deepEqual(diagnostic('boundary-audit', 'CONTRADICTED DISPOSITIONS — 1\n thm-broken [empty]\nUPHELD BY REVIEW — 1\n ex-passing [empty]').subjects, ['thm-broken']);
});

test('published and certification formats identify exact subjects; splice/global failures stay held', () => {
  assert.deepEqual(diagnostic('step7-published', 'step7-scope --published: 1 problem(s):\n  `thm-broken` was repaired but lacks a current verdict').subjects, ['thm-broken']);
  assert.deepEqual(diagnostic('step7-auditor-created-certifications', 'thm-broken: no successful dispatch; supplier lem-supplier').subjects, ['thm-broken']);
  for (const check of ['splice-verify', 'defect-ledger', 'unknown']) {
    const row = diagnostic(check, 'thm-broken mentioned alongside lem-supplier');
    assert.deepEqual(row.subjects, []);
    assert.equal(row.ownerHeld, true);
    assert.equal(row.failure.output, 'thm-broken mentioned alongside lem-supplier');
  }
  const mixed = diagnostic('proof-contract', 'ERROR bad [thm-broken]: missing\nERROR shape: no contract\nERROR bad [thm-nonexistent]: unknown');
  assert.deepEqual(mixed.subjects, ['thm-broken']);
  assert.equal(mixed.ownerHeld, true);
});

test('malformed detector schemas and unknown residual errors remain owner-held', () => {
  for (const [check, data] of [
    ['proof-contract', { errors: { id: 'lem-supplier' } }],
    ['risk-report', { errors: [null, 'lem-supplier'] }],
    ['boundary-audit', { contradicted: [{ id: 'thm-broken' }], templates: [{ items: 'lem-supplier' }] }],
    ['citation-fidelity', { quote_not_found: [{ id: 'thm-broken' }], widening: {} }],
  ]) {
    const row = diagnostic(check, JSON.stringify(data));
    assert.equal(row.ownerHeld, true);
    assert.ok(!row.subjects.includes('lem-supplier'));
  }
  for (const residual of ['ERROR unrecognized diagnostic mentions lem-supplier', 'TypeError: failed reading lem-supplier']) {
    const row = diagnostic('proof-contract', `ERROR quote [thm-broken]: mismatch\n${residual}`);
    assert.deepEqual(row.subjects, ['thm-broken']);
    assert.equal(row.ownerHeld, true);
  }
});
