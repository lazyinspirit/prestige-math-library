// The sonnet lane's transport parsing, pinned.
//
// WHY. frontier-15's step-10 report, finding 16: 626 sonnet attempts recorded
// ZERO tokens (plain-text CLI mode carries no usage), and 28 stated rejections
// were lost as UNPARSEABLE nulls — "a lane that loses a stated rejection to a
// parse is one re-sweep away from losing it for good." These tests pin the two
// repairs: the JSON envelope unwrap (verified against the live CLI 2026-08-17)
// and the embedded-verdict extraction, which is PARSING and never inference —
// prose with no well-formed object must stay unrecovered.
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { unwrapClaudeEnvelope, extractEmbeddedVerdict } from '../../judge-parse.mjs';

// The live envelope shape, captured from `claude -p --output-format json`.
const LIVE_ENVELOPE = JSON.stringify({
  is_error: false, duration_api_ms: 4917, num_turns: 1, stop_reason: 'end_turn',
  session_id: 'x', total_cost_usd: 0.059,
  usage: {
    input_tokens: 2, cache_creation_input_tokens: 8507,
    cache_read_input_tokens: 23976, output_tokens: 21,
  },
  result: '{"keep":true,"reason":"envelope-test"}',
  type: 'result', subtype: 'success',
});

test('the live CLI envelope unwraps to content plus summed submitted tokens', () => {
  const { content, usage } = unwrapClaudeEnvelope(LIVE_ENVELOPE);
  assert.equal(content, '{"keep":true,"reason":"envelope-test"}');
  assert.equal(usage?.prompt_tokens, 2 + 8507 + 23976, 'a cache-read token is still a submitted token');
  assert.equal(usage?.completion_tokens, 21);
});

test('a non-envelope stdout passes through as plain text with no usage', () => {
  const { content, usage } = unwrapClaudeEnvelope('  {"keep":false,"reason":"direct"}  ');
  assert.equal(content, '{"keep":false,"reason":"direct"}');
  assert.equal(usage, undefined);
  const crash = unwrapClaudeEnvelope('Error: something died\nstack...');
  assert.equal(crash.content.startsWith('Error:'), true);
});

test('an envelope without usage still yields its result text', () => {
  const { content, usage } = unwrapClaudeEnvelope(JSON.stringify({ result: 'ok', type: 'result' }));
  assert.equal(content, 'ok');
  assert.equal(usage, undefined);
});

test('a verdict object wrapped in prose is extracted — parsing, with reason', () => {
  const v = extractEmbeddedVerdict(
    'Flagged: step 1.1 is unlicensed.\n\n{"keep":false,"reason":"step 1.1 cites [L3] beyond its statement"}\n');
  assert.deepEqual(v, { keep: false, reason: 'step 1.1 cites [L3] beyond its statement' });
});

test('braces inside JSON strings do not break the balanced scan', () => {
  const v = extractEmbeddedVerdict('Note {this} first. {"keep":true,"reason":"set {a} maps to {b} fine"} done.');
  assert.deepEqual(v, { keep: true, reason: 'set {a} maps to {b} fine' });
});

test('prose stating a verdict with no well-formed object stays unrecovered', () => {
  // The non-inference invariant: these are exactly frontier-15's lost-rejection
  // phrasings, and they must remain nulls for a re-spend, never guessed at.
  assert.equal(extractEmbeddedVerdict('Flagged: keep=false. Step 1.1 relies on "index 2 => normal".'), null);
  assert.equal(extractEmbeddedVerdict('Verdict: **keep=false**. The Frattini argument is misapplied.'), null);
  assert.equal(extractEmbeddedVerdict('Reported one finding: the claim that p divides qx is unproved.'), null);
});

test('a keep that is not a boolean is not a verdict', () => {
  assert.equal(extractEmbeddedVerdict('{"keep":"false","reason":"stringly"}'), null);
  assert.equal(extractEmbeddedVerdict('{"keep":null,"reason":"undecided"}'), null);
});

test('a malformed object followed by a well-formed one is still found', () => {
  const v = extractEmbeddedVerdict('{"keep": false, "reason": "unterminated...\nRetry: {"keep":false,"reason":"clean"}');
  assert.deepEqual(v, { keep: false, reason: 'clean' });
});
