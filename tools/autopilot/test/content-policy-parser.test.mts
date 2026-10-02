import { test } from 'node:test';
import assert from 'node:assert/strict';

import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { nested, parseFrontmatter, referenceUrls } from '../../content-policy-lib.mjs';
import { APP_DIR, REPO } from '../../paths.mjs';

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
  assert.deepEqual(referenceUrls(
    'sources: {references: [], scraped: [{url: "https://example.test/scraped"}]}'
  ), []);
});

test('indentless reference lists and quoted JSON keys are semantic YAML', () => {
  assert.deepEqual(referenceUrls([
    'sources:',
    '  references:',
    '  - title: Indentless source',
    '    url: https://example.test/indentless',
    '  scraped:',
    '  - url: https://example.test/scraped',
  ].join('\n')), ['https://example.test/indentless']);
  const doc = parseFrontmatter(
    '"provenance": {"statement": "ai-altered", "proof": "ai-altered"}\n'
    + '"sources": {"references": [{"title": "JSON source", "url": "https://example.test/json"}]}'
  );
  assert.equal(nested(doc, 'provenance', 'statement'), 'ai-altered');
  assert.deepEqual(referenceUrls(doc), ['https://example.test/json']);
});

test('reference extraction respects shapes and never borrows sibling fields', () => {
  for (const source of [
    'sources: {references: {url: "https://example.test/not-a-list"}}',
    'sources: {references: ["Legacy title", {url: null}, {url: 123}, {url: " "}]}',
    'sources: {references: [{title: "url: https://example.test/title"}]}',
    'sources: {references: [{metadata: {url: "https://example.test/nested"}}]}',
    'sources: [{references: [{url: "https://example.test/not-a-map"}]}]',
    'sources: {references: []}\nverification:\n  references: [{url: "https://example.test/other"}]',
  ]) assert.deepEqual(referenceUrls(source), [], source);
  assert.equal(nested(parseFrontmatter('provenance: {}\nverification: {statement: ai-altered}'),
    'provenance', 'statement'), undefined);
  assert.throws(() => parseFrontmatter('provenance: {statement: ai-altered'), /./);
  for (const source of ['- not-a-mapping', 'null', 'scalar', '']) {
    assert.throws(() => parseFrontmatter(source), /must be a mapping/);
  }
});

function runPolicy(frontmatter: string, extraItems: Record<string, string> = {}, flags: string[] = []) {
  const dir = mkdtempSync(join(tmpdir(), 'content-policy-parser-'));
  try {
    for (const subdir of ['tools', 'items', 'research']) mkdirSync(join(dir, subdir));
    for (const file of ['content-policy.mjs', 'content-policy-lib.mjs', 'paths.mjs']) {
      copyFileSync(join(REPO, 'tools', file), join(dir, 'tools', file));
    }
    writeFileSync(join(dir, 'research', 'plan-spec.json'), JSON.stringify({ pages: [] }));
    writeFileSync(join(dir, 'batch.json'), JSON.stringify([{ id: 'fixture-page', kind: 'A', items: ['thm-fixture'] }]));
    for (const [id, fm] of Object.entries({ 'thm-fixture': frontmatter, ...extraItems })) {
      writeFileSync(join(dir, 'items', `${id}.md`), `---\n${fm}\n---\n## Statement\nFixture.\n`);
    }
    const result = spawnSync(process.execPath,
      [join(dir, 'tools', 'content-policy.mjs'), '--json', ...flags, 'batch.json'], {
        cwd: dir, encoding: 'utf8',
        env: { ...process.env, ...(APP_DIR ? { PRESTIGE_APP_DIR: APP_DIR } : {}) },
      });
    assert.equal(result.error, undefined);
    assert.ok(result.status === 0 || result.status === 1, result.stdout + result.stderr);
    return { status: result.status, ...JSON.parse(result.stdout) };
  } finally { rmSync(dir, { recursive: true, force: true }); }
}

const base = 'id: thm-fixture\nkind: theorem\n';
const provenance = 'provenance: {statement: ai-altered, proof: ai-altered}\n';
const sources = 'sources: {references: [{title: Source, url: "https://example.test/source"}]}';

test('item policy accepts block, indentless, and quoted flow mappings', () => {
  for (const fm of [
    base + 'provenance:\n  statement: ai-altered\n  proof: ai-altered\n'
      + 'sources:\n  references:\n    - title: Source\n      url: https://example.test/source',
    base + provenance + 'sources:\n  references:\n  - title: Source\n    url: https://example.test/source',
    JSON.stringify({ id: 'thm-fixture', kind: 'theorem',
      provenance: { statement: 'ai-altered', proof: 'ai-altered' },
      sources: { references: [{ title: 'Source', url: 'https://example.test/source' }] } }),
  ]) {
    const result = runPolicy(fm);
    assert.equal(result.status, 0, JSON.stringify(result));
  }
});

test('missing or invalid provenance and source shapes still fail the item gate', () => {
  const cases = [
    [base + sources, 'provenance-statement-missing'],
    [base + 'provenance: {statement: ai-altered}\n' + sources, 'provenance-proof-missing'],
    [base + 'provenance: {statement: unknown, proof: unknown}\n' + sources, 'provenance-statement-invalid'],
    [base + 'provenance: {statement: [ai-altered], proof: {tag: ai-altered}}\n' + sources, 'provenance-proof-invalid'],
    [base + 'provenance: [ai-altered, ai-altered]\n' + sources, 'provenance-statement-missing'],
    [base + provenance, 'source-backed-provenance-uncited'],
    [base + provenance + 'sources: {references: {url: "https://example.test/source"}}', 'source-backed-provenance-uncited'],
    [base + provenance + 'sources: {references: [{url: false}]}', 'source-backed-provenance-uncited'],
    [base + provenance + 'sources: {references: ["Legacy title", {url: null}, {url: " "}]}', 'source-backed-provenance-uncited'],
    [base + provenance + 'sources: [{references: [{url: "https://example.test/source"}]}]', 'source-backed-provenance-uncited'],
    [base + provenance + 'sources: {references: [], scraped: [{url: "https://example.test/source"}]}', 'source-backed-provenance-uncited'],
    [base + 'provenance: {statement: ai-altered}\nverification: {proof: ai-altered}\n' + sources, 'provenance-proof-missing'],
    [base + 'provenance: {statement: ai-altered', 'item-frontmatter-invalid'],
    [base + provenance + provenance + sources, 'item-frontmatter-invalid'],
    ['- non-mapping', 'item-frontmatter-invalid'],
    ['null', 'item-frontmatter-invalid'],
  ];
  for (const [fm, code] of cases) {
    const result = runPolicy(fm);
    assert.equal(result.status, 1, fm);
    assert.ok(result.errors.some((error: any) => error.code === code), JSON.stringify(result));
  }
});

test('generation, dependency aliases, and external fallback retain policy meaning in flow YAML', () => {
  const generated = 'id: cor-generated\nkind: corollary\naliases: [cor-alias]\n'
    + 'provenance: {statement: ai-generated, proof: ai-generated}\ngeneration: {role: direct-corollary}';
  const result = runPolicy(base + provenance + sources + '\ndeps:\n- cor-alias', { 'cor-generated': generated });
  assert.ok(result.errors.some((error: any) => error.code === 'ai-generated-statement-dependency'));

  const generation = runPolicy(base + provenance + sources + '\ngeneration: {role: direct-corollary}');
  assert.ok(generation.errors.some((error: any) => error.code === 'generation-on-non-generated-statement'));

  const external = base + provenance + sources + '\nproved_here: false\nexternal_dependency: '
    + '{source_url: "https://example.test/source", exact_statement: "Claim", local_proof_attempt: "Attempt", necessity: "Reason"}';
  assert.equal(runPolicy(external).status, 0);
  const invalid = runPolicy(external.replace('necessity: "Reason"', 'necessity: ["Reason"]'));
  assert.ok(invalid.errors.some((error: any) => error.code === 'external-record-missing'));
  const mismatched = runPolicy(external.replace('source_url: "https://example.test/source"',
    'source_url: "https://example.test/other"'));
  assert.ok(mismatched.errors.some((error: any) => error.code === 'external-source-reference'));
  const badUrl = runPolicy(external.replaceAll('https://example.test/source', 'ftp://example.test/source'));
  assert.ok(badUrl.errors.some((error: any) => error.code === 'external-source-url'));
  assert.ok(!badUrl.errors.some((error: any) => error.code === 'external-source-reference'));
  const proved = runPolicy(external.replace('proved_here: false', 'proved_here: true'));
  assert.ok(proved.errors.some((error: any) => error.code === 'external-on-proved'));
});

test('flow generation roles and provenance enums keep their existing policy checks', () => {
  const generated = base.replace('kind: theorem', 'kind: corollary')
    + 'provenance: {statement: ai-generated, proof: ai-generated}\n'
    + 'generation: {role: direct-corollary}';
  assert.equal(runPolicy(generated).status, 0);
  const wrongRole = runPolicy(generated.replace('role: direct-corollary', 'role: example'));
  assert.ok(wrongRole.errors.some((error: any) => error.code === 'generated-role'));
  for (const statement of ['ai-altered', 'literature-derived']) {
    for (const proof of ['ai-generated', 'ai-altered', 'literature-derived', 'not-supplied', 'not-applicable']) {
      const itemBase = proof === 'not-applicable' ? base.replace('kind: theorem', 'kind: remark') : base;
      assert.equal(runPolicy(itemBase + `provenance: {statement: ${statement}, proof: ${proof}}\n`
        + sources).status, 0, `${statement}/${proof}`);
    }
  }
});

test('manifest-only policy does not reject item frontmatter', () => {
  // Audit manifests name existing items, so mint and future reading-order rules
  // are not relevant to this mode's shape and dependency checks.
  assert.equal(runPolicy('provenance: {broken', {}, ['--audit', '--manifest-only']).status, 0);
});

test('malformed legacy items outside the explicit item scope do not fail policy', () => {
  const result = runPolicy(base + provenance + sources, { 'thm-legacy': 'provenance: {broken' });
  assert.equal(result.status, 0, JSON.stringify(result));
});
