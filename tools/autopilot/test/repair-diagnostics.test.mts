import { test } from 'node:test';
import assert from 'node:assert/strict';
import { itemsFromGateFailure, repairGateOutput } from '../stages/mathlib.mts';

test('mixed gate reports retain dependency failures without routing warning inventories', () => {
  const failures = [
    { output: '1 warning(s):\n  items/thm-warning-only.md: warning\n\n1 ERROR(s):\n  [published-unaudited] items/prop-sphere-degree.md: missing audit\n\nFAIL' },
    { output: '1 ERROR(s):\n  [forward-undeclared] items/thm-haar-uniqueness.md: missing forward declaration\nFAIL' },
    { output: 'ERROR citation-quote-mismatch [lem-filtered-differential]: stale quote\nWARN shotgun-bracket [lem-warning-only]: warning' },
  ];
  assert.deepEqual(failures.flatMap(itemsFromGateFailure), [
    'prop-sphere-degree', 'thm-haar-uniqueness', 'lem-filtered-differential',
  ]);
});

test('cited suppliers do not become repair owners', () => {
  const failure = { id: 'fwdcheck', output: 'page inventory\n1 ERROR(s):\n  [forward-undeclared] items/thm-haar-uniqueness.md: wikilink [[thm-choice-supplier]] points forward\nFAIL' };
  assert.deepEqual(itemsFromGateFailure(failure), ['thm-haar-uniqueness']);
  assert.doesNotMatch(repairGateOutput(failure), /page inventory/);
  assert.match(repairGateOutput(failure), /thm-choice-supplier/);
});

test('boundary repair scope excludes upheld records and retains every unresolved row', () => {
  const rows = Array.from({ length: 25 }, (_, i) => ({ id: `lem-live-${i}`, case: 'empty', text: 'candidate', row_sha256: 'abc' }));
  const failure = { id: 'boundary-audit', output: JSON.stringify({
    templates: [{ rows }], contradicted: [{ id: 'thm-live-contradiction', case: 'zero', why: 'actual finding' }],
    reviewed_templates: [{ rows: [{ id: 'lem-upheld-template' }] }],
    upheld: [{ id: 'lem-upheld-boundary' }],
  }) };
  assert.deepEqual(itemsFromGateFailure(failure), [...rows.map(r => r.id), 'thm-live-contradiction']);
  assert.doesNotMatch(repairGateOutput(failure), /upheld/);
  assert.match(repairGateOutput(failure), /row_sha256/);
});

test('historical boundary text drops its upheld inventory', () => {
  const failure = { id: 'boundary-audit', output: 'TEMPLATE REUSE — 1 cluster\n    items: lem-live-template\nCONTRADICTED DISPOSITIONS — none\nUPHELD BY REVIEW — 1 row\n  lem-upheld-boundary  [empty] by reviewer' };
  assert.deepEqual(itemsFromGateFailure(failure), ['lem-live-template']);
});
