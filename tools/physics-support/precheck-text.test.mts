import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { precheckSource, tsxLoader } from './paths.mjs';
import { checkableText, normalizeNumberedParagraphs } from './precheck-text.mjs';
const { proposedPrecheck } = await import(pathToFileURL(precheckSource()).href);

// Same six-step dependency chain as the normal-index-form lemma. The decisive
// step-4 citation and final tags follow several soft lines and display equations.
const proof = String.raw`**Given:** A unit timelike geodesic with no conjugate instant.

[L1] The normal bundle has a positive definite fibre metric.
[L6] The fundamental solution has the stated endpoint asymptotics.
[L7] The fundamental theorem of calculus and positivity of integration hold.

1.1 (Jacobi operator.) The normal operator preserves the bundle and is selfadjoint. [L1, algebra]

2.1 (Parallel frame.) The coefficient matrix $C$ is symmetric by step 1.1. [step 1.1, algebra]

3.1 (Fundamental solution.) The solution $A''=CA$ with $A(a)=0$, $A'(a)=I$ is invertible on $(a,b]$ by the Jacobi criterion in the frame of step 2.1. [step 2.1, algebra]

4.1 (Wronskian.) $W=A^TA'-A'^TA=0$, so $\Theta=A'A^{-1}$ is symmetric and $\Theta'=C-\Theta^2$. [step 2.1, step 3.1, algebra]

5.1 (Factorization.) Let $j$ be the coefficient vector in the frame of step 2.1.
The identity
$(j^T\Theta j)'=2j'^T\Theta j+j^T\Theta'j$ gives
$$\int_{a+\varepsilon}^b-2j'^T\Theta j\,ds=-[j^T\Theta j]_{a+\varepsilon}^b+\int_{a+\varepsilon}^b j^T\Theta'j\,ds.$$
At $b$ the boundary term vanishes because $j(b)=0$.
By [L6], $j^T\Theta j=O(s-a)\to0$ at $a$.
Using $\Theta'=C-\Theta^2$ from step 4.1 gives
$$I(J)=\int_a^b(|j'|^2+j^TCj)\,ds=\int_a^b|j'-\Theta j|^2\,ds.$$
This is the factorization. [step 3.1, step 4.1, L6, L7, algebra, step 2.1]

6.1 (Positivity.) By step 5.1 the integral is nonnegative, and by step 3.1 and the endpoint condition it vanishes only for $J=0$. [step 5.1, step 3.1, L7, algebra] ∎`;
const normalized = normalizeNumberedParagraphs(proof);

test('normative checker validates full wrapped factorization without a repair', () => {
  assert.equal(proposedPrecheck(proof, 'direct').repaired, true);
  const result = proposedPrecheck(normalized, 'direct');
  assert.equal(result.err, null);
  assert.equal(result.repaired, false);
  assert.equal(result.proof, normalized);
  assert.equal(normalized.replace(/\s/g, ''), proof.replace(/\s/g, ''));
  assert.equal(normalizeNumberedParagraphs(normalized), normalized);
  assert.deepEqual([...normalized.matchAll(/^(\d+\.\d+) /gm)].map(match => match[1]), ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1']);
});

test('actual normal-index-form lemma passes the normative checker on intact blocks', () => {
  const path = new URL('../../physics/items/lem-gr-normal-index-form-factorization.md', import.meta.url);
  const result = proposedPrecheck(checkableText(readFileSync(path, 'utf8')), 'direct');
  assert.equal(result.err, null);
  assert.equal(result.repaired, false);
});

test('a forward dependency on a continuation line remains invalid', () => {
  const invalid = proof.replace('from step 4.1', 'from step 7.1');
  assert.equal(proposedPrecheck(normalizeNumberedParagraphs(invalid), 'direct').err, 'forward-ref-7.1');
});

test('factorization before its Wronskian supplier remains invalid', () => {
  const blocks = proof.split('\n\n');
  const index = blocks.findIndex(block => block.startsWith('4.1'));
  [blocks[index], blocks[index + 1]] = [blocks[index + 1], blocks[index]];
  assert.equal(proposedPrecheck(normalizeNumberedParagraphs(blocks.join('\n\n')), 'direct').err, 'forward-ref-4.1');
});

test('missing given, QED and steps still fail; noncanonical layers still require repair', () => {
  assert.equal(proposedPrecheck(normalized.replace('**Given:**', 'Context:'), 'direct').err, 'no-given');
  assert.equal(proposedPrecheck(normalized.replace('∎', ''), 'direct').err, 'no-qed');
  assert.equal(proposedPrecheck('**Given:** context. ∎', 'direct').err, 'no-steps');
  assert.equal(proposedPrecheck(normalized.replace(/^5\.1 /m, '5.2 ').replaceAll('step 5.1', 'step 5.2'), 'direct').repaired, true);
});

test('paragraph boundaries, separate steps and nonstep text are preserved', () => {
  const text = '**Given:** first line\nsecond line\n\n1.1 First\ncontinued. [algebra]\n2.1 Second. [step 1.1] ∎\n\nClosing\nnotes.';
  assert.equal(normalizeNumberedParagraphs(text), '**Given:** first line\nsecond line\n\n1.1 First continued. [algebra]\n2.1 Second. [step 1.1] ∎\n\nClosing\nnotes.');
  const split = proof.replace('The identity\n', 'The identity\n\n');
  assert.ok(normalizeNumberedParagraphs(split).includes('The identity\n\n'));
  assert.equal(normalizeNumberedParagraphs('1.1 First\r\ncontinued. [algebra]\r\n\r\n2.1 Second. [step 1.1] ∎'), '1.1 First continued. [algebra]\r\n\r\n2.1 Second. [step 1.1] ∎');
  assert.equal(checkableText('No proof section.'), null);
  assert.equal(checkableText(`## Statement\nClaim.\n## Proof\n${proof}`), normalized);
  assert.equal(checkableText(`\n## Facts & Assumptions\n${proof}`), normalized);
});

test('physics CLI invokes actual normative validation and retains repair rejection', t => {
  const root = mkdtempSync(join(tmpdir(), 'physics-precheck-blocks-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const run = text => {
    const path = join(root, 'lem-fixture.md');
    writeFileSync(path, `---\nid: lem-fixture\nkind: lemma\nproof_strategy: direct\n---\n\n## Facts & Assumptions\n\n${text}\n`);
    const result = spawnSync(process.execPath, ['--import', tsxLoader(), fileURLToPath(new URL('./precheck.mts', import.meta.url)), path, '--json'], { encoding: 'utf8' });
    assert.ok(result.stdout, result.stderr);
    return { exit: result.status, result: JSON.parse(result.stdout).results[0] };
  };
  assert.equal(run(proof).exit, 0);
  const invalid = run(proof.replace('from step 4.1', 'from step 7.1'));
  assert.equal(invalid.exit, 1);
  assert.equal(invalid.result.error, 'forward-ref-7.1');
  const repaired = run(proof.replace(/^5\.1 /m, '5.2 ').replaceAll('step 5.1', 'step 5.2'));
  assert.equal(repaired.exit, 1);
  assert.equal(repaired.result.status, 'repair');
});
