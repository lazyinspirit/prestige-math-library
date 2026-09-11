import test from 'node:test';
import assert from 'node:assert/strict';

import { parseCodexOutput, validateCodexOutput, validateCodexOutputSchema } from '../../codex-output-schema.mjs';

test('parses one fenced JSON response without changing its contents or choosing between candidates', () => {
  assert.deepEqual(parseCodexOutput('Read complete.\n\n```json\n{"group":"c"}\n```'), { group: 'c' });
  assert.throws(() => parseCodexOutput('```json\n{}\n```\n```json\n{}\n```'));
  assert.throws(() => parseCodexOutput('```json\n{"group":}\n```'));
});

test('rejects missing digest fields, wrong nested types and extra properties', () => {
  const schema = { type: 'object', additionalProperties: false, required: ['concerns'], properties: {
    concerns: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['severity'], properties: {
      severity: { type: 'string', enum: ['presentation'] },
    } } },
  } };
  assert.deepEqual(validateCodexOutput({ concerns: [{ severity: 'presentation' }] }, schema), []);
  assert.match(validateCodexOutput({}, schema).join('\n'), /required field missing/);
  assert.match(validateCodexOutput({ concerns: [{ severity: 1 }] }, schema).join('\n'), /expected string/);
  assert.match(validateCodexOutput({ concerns: [{ severity: 'fatal', extra: true }] }, schema).join('\n'), /not an allowed enum value/);
  assert.match(validateCodexOutput({ concerns: [], invented: true }, schema).join('\n'), /unexpected field/);
});

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
