import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { APP_DIR } from './paths.mjs';

const tools = dirname(fileURLToPath(import.meta.url));
const run = 'inverse-problems-knot-theory-all-109-2026-10-19';
const allowed = 'lem-finite-polyhedral-slabs-without-vertex-levels-are-pl-products';
const clause = 'The exact fixture clause is retained.';
const sourceBody = `## Statement\n\n${clause}\n\n## Remarks\nThis is not part of the quoted claim.\n`;
const boundaries = ['empty', 'zero', 'one', 'degenerate', 'endpoints', 'nonempty-choice', 'iff-forward', 'iff-reverse']
  .map(name => ({ case: name, status: 'not_applicable', reason: 'The fixture has no parameter or equivalence branch.' }));

function fixture(t, { proof = false, reviewed = false, sourceId = reviewed ? allowed : 'lem-source', physics = false } = {}) {
  const root = mkdtempSync(join(tmpdir(), 'proof-contract-native-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const sub of ['items', 'research', 'tools']) mkdirSync(join(root, sub));
  // The checker resolves items relative to its own executable, not cwd or an env override.
  // Copy the actual unmodified entrypoint and its local dependencies into the fixture repo.
  for (const file of ['proof-contract.mjs', 'facts-block.mjs', 'frontmatter-list.mjs', 'content-policy-lib.mjs', 'paths.mjs'])
    copyFileSync(join(tools, file), join(root, 'tools', file));
  const provenance = reviewed ? 'ai-generated' : 'literature-derived';
  const acceptance = reviewed ? `pipeline_run: ${run}\ngeneration:\n  role: reviewed-local-lemma\nlocal_proof_acceptance:\n  run: ${run}\n  authorized_by: /root\n  decision: preserve-resolved-local-lemma\n  independent_review: research/review-fixture.json\n  accepted_body_sha256: ${createHash('sha256').update(sourceBody, 'utf8').digest('hex')}\n` : '';
  const sourceHeader = `---\nid: ${sourceId}\nkind: lemma\nprovenance:\n  statement: ${provenance}\n  proof: ${reviewed ? 'ai-generated' : 'not-applicable'}\n${acceptance}---\n`;
  const sourcePath = join(root, 'items', `${sourceId}.md`);
  writeFileSync(sourcePath, sourceHeader + sourceBody);
  if (reviewed) writeFileSync(join(root, 'research/review-fixture.json'), '{"synthetic_test_fixture_only":true}\n');
  const id = proof ? 'lem-consumer' : 'def-consumer';
  const phase = proof ? '\n## Proof\n\n1.1 Start the finite argument.\nIts continuation uses [F1]. [given, F1] ∎\n' : '';
  const item = `---\nid: ${id}\nkind: ${proof ? 'lemma' : 'definition'}\ndeps: [${sourceId}]\n---\n## ${proof ? 'Statement' : 'Definition'}\nConsumer fixture.\n\n## Facts & Assumptions\n\n**Given:** The fixture input.\n\n[F1] The declared clause. [[${sourceId}]]\n${phase}`;
  writeFileSync(join(root, 'items', `${id}.md`), item);
  const citation = { fact: 'F1', source: sourceId, source_section: 'Statement', quote: clause, uses: proof ? ['1.1'] : [] };
  const entry = { citations: [citation], derivations: proof ? [{ id: 'use', step: '1.1', claim: 'Use the clause.', inputs: ['given', 'F1'] }] : [], routine_steps: [], boundaries };
  const doc = { version: 1, scope: [id], contracts: { [id]: entry } };
  const contractPath = join(root, 'research/contracts.json');
  const check = () => {
    writeFileSync(contractPath, JSON.stringify(doc));
    const checker = physics ? join(tools, 'physics-support/proof-contract.mjs') : join(root, 'tools/proof-contract.mjs');
    const child = spawnSync(process.execPath, [checker, contractPath, '--strict', '--json'],
      { cwd: root, encoding: 'utf8', env: { ...process.env, ...(APP_DIR ? { PRESTIGE_APP_DIR: APP_DIR } : {}), ...(physics ? { PHYSICS_REPO: root } : {}) } });
    assert.equal(child.error, undefined);
    assert.ok([0, 1].includes(child.status), child.stdout + child.stderr);
    return { status: child.status, ...JSON.parse(child.stdout) };
  };
  return { check, citation, entry, sourcePath, sourceHeader, id };
}

for (const physics of [false, true]) {
  const workflow = physics ? 'physics' : 'math';
  test(`${workflow}: local A0/L0 variables do not become missing Fact inputs`, t => {
    const f = fixture(t, { proof: true, physics });
    const file = join(dirname(f.sourcePath), `${f.id}.md`);
    writeFileSync(file, readFileSync(file, 'utf8').replace('Start the finite argument.', 'Descend to A0 and construct L0.'));
    assert.equal(f.check().status, 0);
    f.entry.derivations[0].inputs.push('A0');
    assert.ok(f.check().errors.some(e => e.code === 'step-entry-input-fact-missing'));
  });
  test(`${workflow}: unknown bracketed Fact citations still fail closed`, t => {
    const f = fixture(t, { proof: true, physics });
    const file = join(dirname(f.sourcePath), `${f.id}.md`);
    writeFileSync(file, readFileSync(file, 'utf8').replace('Start the finite argument.', 'Use [A0].'));
    assert.ok(f.check().errors.some(e => e.code === 'step-entry-input-omitted' && /A0/.test(e.message)));
    f.entry.derivations[0].inputs.push('A0');
    assert.ok(f.check().errors.some(e => e.code === 'step-entry-input-fact-missing'));
  });
  test(`${workflow}: declared bare Fact references still require worksheet inputs`, t => {
    const f = fixture(t, { proof: true, physics });
    const file = join(dirname(f.sourcePath), `${f.id}.md`);
    writeFileSync(file, readFileSync(file, 'utf8').replace('Its continuation uses [F1]. [given, F1]', 'Its continuation uses F1. [given]'));
    f.entry.derivations[0].inputs = ['given'];
    assert.ok(f.check().errors.some(e => e.code === 'step-entry-input-omitted' && /F1/.test(e.message)));
  });
  test(`${workflow}: explicitly named unknown Facts still fail closed`, t => {
    const f = fixture(t, { proof: true, physics });
    const file = join(dirname(f.sourcePath), `${f.id}.md`);
    writeFileSync(file, readFileSync(file, 'utf8').replace('Start the finite argument.', 'Apply Fact L9.'));
    assert.ok(f.check().errors.some(e => e.code === 'step-entry-input-omitted' && /L9/.test(e.message)));
  });
}

test('native checker accepts exact empty uses for a declarative Fact', t => {
  const f = fixture(t), result = f.check();
  assert.equal(result.status, 0, JSON.stringify(result.errors));
  assert.deepEqual(result.checked, [f.id]);
  assert.deepEqual(result.errors, []);
  assert.deepEqual(f.citation.uses, []);
});

test('empty uses cannot omit an actual use hidden in a proof continuation', t => {
  const f = fixture(t, { proof: true });
  assert.equal(f.check().status, 0);
  f.citation.uses = [];
  const result = f.check();
  assert.equal(result.status, 1);
  assert.ok(result.errors.some(e => e.code === 'citation-use-unmapped' && /1\.1/.test(e.message)));
});

test('unused Fact rejects invented step uses and missing uses arrays', t => {
  const f = fixture(t);
  f.citation.uses = ['1.1'];
  assert.ok(f.check().errors.some(e => e.code === 'citation-use-step-missing'));
  delete f.citation.uses;
  assert.ok(f.check().errors.some(e => e.code === 'citation-uses'));
  f.citation.uses = null;
  assert.ok(f.check().errors.some(e => e.code === 'citation-uses'));
});

test('an existing step without the Fact cannot be claimed as its use', t => {
  const f = fixture(t, { proof: true });
  const consumerPath = join(dirname(f.sourcePath), `${f.id}.md`);
  writeFileSync(consumerPath, readFileSync(consumerPath, 'utf8').replace('Its continuation uses [F1]. [given, F1]', 'Its continuation uses the given input. [given]'));
  f.entry.derivations[0].inputs = ['given'];
  const result = f.check();
  assert.equal(result.status, 1);
  assert.ok(result.errors.some(e => e.code === 'citation-use-not-supported'));
  f.citation.uses = [];
  assert.equal(f.check().status, 0);
});

test('bounded reviewed-local source is accepted but its quote remains checked', t => {
  const f = fixture(t, { reviewed: true });
  assert.equal(f.check().status, 0);
  f.citation.quote = 'A stronger invented clause.';
  const result = f.check();
  assert.equal(result.status, 1);
  assert.ok(result.errors.some(e => e.code === 'citation-quote-mismatch'));
});

test('changed reviewed-local body invalidates the exception in the native checker', t => {
  const f = fixture(t, { reviewed: true });
  writeFileSync(f.sourcePath, f.sourceHeader + sourceBody + '\n');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.ok(result.errors.some(e => e.code === 'citation-local-proof-acceptance-invalid'));
  assert.ok(result.errors.some(e => e.code === 'citation-ai-generated-statement'));
});

test('review metadata cannot extend the exact eight-ID source exception', t => {
  const f = fixture(t, { reviewed: true, sourceId: 'lem-not-in-the-preserved-eight' });
  const result = f.check();
  assert.equal(result.status, 1);
  assert.ok(result.errors.some(e => e.code === 'citation-local-proof-acceptance-invalid'));
  assert.ok(result.errors.some(e => e.code === 'citation-ai-generated-statement'));
});
