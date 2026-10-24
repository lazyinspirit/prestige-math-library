import test from 'node:test';
import assert from 'node:assert/strict';
import { injectReviewLiteral } from './projection-literal.mjs';
test('exact diagnostic source/delta JSON preserves dollar replacement tokens and literal punctuation', () => {
  const review = { changes: { before: '$$x^2$$', after: '$& $` $\' backtick ` slash \\ quote "' } };
  const source = "const review = JSON.parse(readFileSync(path, 'utf8'));";
  const projected = injectReviewLiteral(source, review);
  assert.deepEqual(JSON.parse(projected.slice('const review = '.length, -1)), review);
  assert.notEqual(source.replace(source, 'const review = ' + JSON.stringify(review) + ';'), projected);
  assert.throws(() => injectReviewLiteral('missing expression', review), /unique/);
  assert.throws(() => injectReviewLiteral(source + source, review), /unique/);
});
