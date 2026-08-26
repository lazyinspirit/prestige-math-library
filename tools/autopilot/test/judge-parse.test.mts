// Pure embedded-verdict parsing. Recovery is syntactic, never inference: prose
// with no well-formed object remains unrecovered.
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { extractEmbeddedVerdict } from '../../judge-parse.mjs';

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
