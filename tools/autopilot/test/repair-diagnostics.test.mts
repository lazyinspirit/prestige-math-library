import { test } from 'node:test';
import assert from 'node:assert/strict';
import { itemsFromGateFailure } from '../stages/mathlib.mts';

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
