import test from 'node:test';
import assert from 'node:assert/strict';

import { validateCodexOutputSchema } from '../../codex-output-schema.mjs';

test('rejects object schemas with properties omitted from required', () => {
  const problems = validateCodexOutputSchema({
    type: 'object',
    additionalProperties: false,
    required: ['answer'],
    properties: {
      answer: { type: 'string' },
      at: { type: 'string' },
    },
  });

  assert.deepEqual(problems, [
    '$: required must include every property for Codex structured output; missing at',
  ]);
});

test('accepts object schemas whose required list covers every property', () => {
  const problems = validateCodexOutputSchema({
    type: 'object',
    additionalProperties: false,
    required: ['answer', 'details'],
    properties: {
      answer: { type: 'string' },
      details: {
        type: 'object',
        additionalProperties: false,
        required: ['confidence'],
        properties: {
          confidence: { type: 'string' },
        },
      },
    },
  });

  assert.deepEqual(problems, []);
});
