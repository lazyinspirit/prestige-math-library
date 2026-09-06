import { test } from 'node:test';
import assert from 'node:assert/strict';

import { referenceUrls } from '../../content-policy-lib.mjs';

test('content policy reads source references from block and flow YAML forms', () => {
  assert.deepEqual(referenceUrls([
    'sources:',
    '  references:',
    '    - title: Block source',
    '      url: "https://example.test/block.pdf"',
  ].join('\n')), ['https://example.test/block.pdf']);

  assert.deepEqual(referenceUrls(
    'sources: {references: [{title: "Flow source", url: "https://example.test/flow.pdf"}]}'
  ), ['https://example.test/flow.pdf']);
});

test('an unrelated URL under sources does not satisfy references', () => {
  assert.deepEqual(referenceUrls(
    'sources: {archive_url: "https://example.test/archive", references: []}'
  ), []);
});
