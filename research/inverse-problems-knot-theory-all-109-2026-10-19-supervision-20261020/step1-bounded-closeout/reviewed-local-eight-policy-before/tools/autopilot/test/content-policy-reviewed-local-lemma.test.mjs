import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { APP_DIR, REPO } from '../../paths.mjs';

const run = 'inverse-problems-knot-theory-all-109-2026-10-19';
const ids = [
  'lem-finite-polyhedral-slabs-without-vertex-levels-are-pl-products',
  'lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings',
  'lem-pl-height-product-caps-replace-by-one-extremum',
  'lem-pointed-flat-pl-caps-admit-saddle-free-replacements',
];
const body = '## Statement\nFixture.\n\n## Proof\nFixture proof.\n';
function check({ id = ids[0], mutate = () => {}, changedBody = body, evidence = true,
  contextOnly = false } = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'reviewed-local-policy-'));
  try {
    for (const sub of ['items', 'research', 'tools']) mkdirSync(join(dir, sub));
    for (const file of ['content-policy.mjs', 'content-policy-lib.mjs', 'paths.mjs'])
      copyFileSync(join(REPO, 'tools', file), join(dir, 'tools', file));
    const metadata = { id, kind: 'lemma', pipeline_run: run, deps: [],
      provenance: { statement: 'ai-generated', proof: 'ai-generated' },
      generation: { role: 'reviewed-local-lemma' },
      local_proof_acceptance: { run, authorized_by: '/root',
        decision: 'preserve-resolved-local-lemma', independent_review: 'research/review.json',
        accepted_body_sha256: createHash('sha256').update(body).digest('hex') } };
    mutate(metadata);
    writeFileSync(join(dir, 'items', `${id}.md`), `---\n${JSON.stringify(metadata)}\n---\n${changedBody}`);
    const consumer = { id: 'thm-consumer', kind: 'theorem', deps: [id],
      provenance: { statement: 'ai-altered', proof: 'ai-generated' },
      sources: { references: [{ title: 'Fixture source', url: 'https://example.test/source' }] } };
    writeFileSync(join(dir, 'items/thm-consumer.md'), `---\n${JSON.stringify(consumer)}\n---\n## Statement\nFixture.\n`);
    if (evidence) writeFileSync(join(dir, 'research/review.json'), '{"fixture":true}\n');
    writeFileSync(join(dir, 'research/plan-spec.json'), '{"pages":[]}');
    writeFileSync(join(dir, 'batch.json'), JSON.stringify([{ id: 'fixture-page', kind: 'A',
      items: contextOnly ? ['thm-consumer'] : [id, 'thm-consumer'] }]));
    const result = spawnSync(process.execPath, [join(dir, 'tools/content-policy.mjs'), '--json', 'batch.json'],
      { cwd: dir, encoding: 'utf8', env: { ...process.env, ...(APP_DIR ? { PRESTIGE_APP_DIR: APP_DIR } : {}) } });
    assert.equal(result.error, undefined);
    assert.ok([0, 1].includes(result.status), result.stdout + result.stderr);
    return { status: result.status, ...JSON.parse(result.stdout) };
  } finally { rmSync(dir, { recursive: true, force: true }); }
}

test('each exact root-bound local lemma is allowed as a generated supplier', () => {
  for (const id of ids) assert.equal(check({ id }).status, 0, id);
  assert.equal(check({ contextOnly: true }).status, 0);
});

test('exception rejects scope, authority, provenance, role and evidence substitutions', () => {
  const mutations = [
    m => { m.pipeline_run = 'other-run'; },
    m => { m.kind = 'theorem'; },
    m => { m.provenance.proof = 'ai-altered'; },
    m => { m.generation.role = 'direct-corollary'; },
    m => { m.local_proof_acceptance.run = 'other-run'; },
    m => { m.local_proof_acceptance.authorized_by = 'owner'; },
    m => { m.local_proof_acceptance.decision = 'pass'; },
    m => { m.local_proof_acceptance.independent_review = '../escape.json'; },
    m => { m.local_proof_acceptance.accepted_body_sha256 = 'not-a-hash'; },
    m => { delete m.local_proof_acceptance; },
  ];
  for (const mutate of mutations) {
    const result = check({ mutate });
    assert.equal(result.status, 1);
    assert.ok(result.errors.some(e => e.code === 'local-proof-acceptance-invalid'));
    assert.ok(result.errors.some(e => e.code === 'ai-generated-statement-dependency'));
  }
  assert.equal(check({ id: 'lem-outside-authorized-four' }).status, 1);
  assert.equal(check({ evidence: false }).status, 1);
});

test('a changed body invalidates both direct and out-of-scope supplier use', () => {
  for (const contextOnly of [false, true]) {
    const result = check({ changedBody: body + '\n', contextOnly });
    assert.equal(result.status, 1);
    assert.ok(result.errors.some(e => /differs from the root-bound body/.test(e.message)));
    assert.ok(result.errors.some(e => e.code === 'ai-generated-statement-dependency'));
  }
});

test('ordinary generated lemmas retain the original kind and dependency prohibitions', () => {
  const result = check({ id: 'lem-ordinary-generated', mutate: m => {
    delete m.local_proof_acceptance; delete m.generation;
  } });
  assert.equal(result.status, 1);
  assert.ok(result.errors.some(e => e.code === 'generated-kind'));
  assert.ok(result.errors.some(e => e.code === 'ai-generated-statement-dependency'));
  assert.ok(!result.errors.some(e => e.code === 'local-proof-acceptance-invalid'));
});
