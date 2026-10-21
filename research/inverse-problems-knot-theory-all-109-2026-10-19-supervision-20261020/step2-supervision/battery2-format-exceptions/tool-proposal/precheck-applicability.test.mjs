import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, mkdirSync, copyFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const packet = fileURLToPath(new URL('../', import.meta.url));
const sandbox = mkdtempSync(join(tmpdir(), 'math-facts-only-precheck-'));
mkdirSync(join(sandbox, 'tools'));
for (const helper of ['paths.mjs', 'proof-bearing.mjs', 'proof-layout-core.mjs']) {
  copyFileSync(join(root, 'tools', helper), join(sandbox, 'tools', helper));
}
copyFileSync(new URL('./proposed/precheck.mts', import.meta.url), join(sandbox, 'tools/precheck.mts'));
process.on('exit', () => rmSync(sandbox, { recursive: true, force: true }));
let sequence = 0;
function run(text) {
  const file = join(sandbox, `def-fixture-${sequence++}.md`);
  writeFileSync(file, text);
  const out = spawnSync(process.execPath,
    [join(root, 'tools/tsx-run.mjs'), join(sandbox, 'tools/precheck.mts'), file, '--json'],
    { cwd: root, env: { ...process.env, PRESTIGE_APP_DIR: resolve(root, '../prestige-intelligence') }, encoding: 'utf8' });
  assert.ok(out.stdout, out.stderr);
  const parsed = JSON.parse(out.stdout);
  return { code: out.status, ...parsed.results[0] };
}
const fixture = (body, strategy = 'direct', kind = 'definition') =>
  `---\nid: def-fixture\nkind: ${kind}\n${strategy ? `proof_strategy: ${strategy}\n` : ''}---\n\n## Definition\n\nGiven input data.\n\n## Facts & Assumptions\n\n[F1] One is one.\n\n${body}`;
const proof = `**Given:** The data.\n\n1.1 First equality holds. [F1]\n\n2.1 It follows from step 1.1. [step 1.1] ∎\n`;

const proofFree = [
  'def-decorated-link-cobordism-and-floer-target',
  'def-singular-instanton-knot-and-sutured-closure-data',
  'def-knot-arf-invariant-from-seifert-form',
  'def-levine-tristram-hermitian-form-and-signature',
  'def-seifert-s-equivalence-and-conway-normalization',
];
for (const id of proofFree) test(`actual proof-free Facts carrier: ${id}`, () => {
  const text = readFileSync(join(root, 'items', `${id}.md`), 'utf8');
  assert.doesNotMatch(text, /^\s*\d+\.\d+\s/m);
  const result = run(text);
  assert.equal(result.status, 'not-applicable');
  assert.equal(result.code, 0);
});
test('Facts-only declarations need no invented strategy, Given or QED', () => {
  assert.equal(run(fixture('[F2] Another declaration.\n', null)).status, 'not-applicable');
});
test('number-like mathematics, code and comments are not supplied numbered arguments', () => {
  const body = '`1.1 example`\n\n$$\n1.1 x\n$$\n\n```text\n1.1 code\n```\n\n<!--\n1.1 comment\n-->\n';
  assert.equal(run(fixture(body, null)).status, 'not-applicable');
});
test('actual Facts plus explicit Proof remains checked with Facts retained', () => {
  const result = run(fixture('## Proof\n\n' + proof));
  assert.equal(result.status, 'pass');
  assert.equal(result.code, 0);
});
test('an empty explicit Proof is not exempted', () => {
  const result = run(fixture('## Proof\n\n**Given:** The data.\n'));
  assert.equal(result.status, 'fail');
  assert.equal(result.error, 'no-qed');
});
test('an explicit Verification on a nominal definition remains checked', () => {
  const result = run(fixture('## Verification\n\n' + proof.replace('**Given:**', 'Context:')));
  assert.equal(result.error, 'no-given');
});
test('real numbered well-definedness without Proof heading remains checked', () => {
  assert.equal(run(fixture('## Well-definedness\n\n' + proof)).status, 'pass');
  assert.equal(run(fixture('## Well-definedness\n\n' + proof, null)).error,
    'phase body but no proof_strategy in frontmatter');
});
test('a nominal algorithm cannot evade missing-Given validation', () => {
  assert.equal(run(fixture(proof.replace('**Given:**', 'Context:'), 'direct', 'algorithm')).error, 'no-given');
});
test('a real numbered phase still requires QED', () => {
  assert.equal(run(fixture(proof.replace(' ∎', ''))).error, 'no-qed');
});
test('a real numbered phase still rejects missing blue tags', () => {
  assert.equal(run(fixture(proof.replace(' [F1]', '').replace(' [step 1.1]', ''))).error, 'untagged-steps');
});
test('an explicit proof still enforces missing strategy', () => {
  assert.equal(run(fixture('## Proof\n\n' + proof, null)).error,
    'phase body but no proof_strategy in frontmatter');
});
const six = [
  'def-knot-floer-cobordism-map',
  'lem-knot-floer-cobordism-naturality-and-movie-invariance',
  'thm-khovanov-and-knot-floer-cobordism-map-scope',
  'lem-multivariable-laurent-ring-noetherian-ufd',
  'lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber',
  'thm-sutured-instanton-khi-rank-detects-unknot',
];
for (const id of six) test(`exact guarded real-proof candidate still checks: ${id}`, () => {
  const result = run(readFileSync(join(packet, 'proposed', `${id}.md`), 'utf8'));
  // The tool change controls applicability, not the independent source repairs.
  // Keep the real failures/repair requests visible instead of calling them NA.
  if (id === 'def-knot-floer-cobordism-map') {
    assert.equal(result.status, 'fail');
    assert.equal(result.error, 'bad-tag(specialize)');
    assert.equal(result.code, 1);
  } else {
    const expected = id === 'lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber' ? 'pass' : 'repair';
    assert.equal(result.status, expected, JSON.stringify(result));
    assert.equal(result.code, expected === 'pass' ? 0 : 1);
    if (expected === 'repair') assert.ok(result.proposed_proof.includes('∎'));
  }
});

for (const kind of ['theorem', 'lemma', 'proposition', 'corollary']) test(`Facts-only ${kind} retains existing missing-proof failure`, () => {
  const result = run(fixture('[F2] Another declaration.\n', 'direct', kind));
  assert.equal(result.status, 'fail');
  assert.equal(result.error, 'no-given');
});
for (const kind of ['algorithm', 'remark', 'example']) test(`permitted proof-free ${kind} is not-applicable`, () => {
  assert.equal(run(fixture('[F2] Another declaration.\n', null, kind)).status, 'not-applicable');
});
test('open-problem guard still rejects an asserted proof', () => {
  const result = run(fixture('## Proof\n\n' + proof, 'direct', 'open-problem'));
  assert.equal(result.error, 'open problem may not have a claimed proof');
});
