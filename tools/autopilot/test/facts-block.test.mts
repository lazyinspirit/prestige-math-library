// One parser for the Facts block, and a quote checked where it is claimed to be.
//
// WHY. Five gates read `## <Section>` blocks and `[F#]` fact entries, each with
// its own regex, and one of those regexes ended the block at `\Z` — an anchor in
// Python, a literal Z in JavaScript. On a corpus saturated with `$\mathbb{Z}$`
// that silently truncated 35 items' Facts blocks and every detector below went
// quiet. tools/facts-block.mjs is now the only copy of the grammar.
//
// The second half of this file covers the deliberate behaviour change:
// citation-fidelity searched a contract quote in the WHOLE cited file, so a
// phrase living in the item's Remarks vouched for a quote attributed to its
// Statement. proof-contract had always scoped the search to `source_section`;
// now both do.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import {
  factLines, factParagraphs, sectionText, sourceSectionText, splitFrontmatter, wikilinks,
  SOURCE_SECTIONS, parseFactLine, factsSectionText, numberedProofSteps,
} from '../../facts-block.mjs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const ITEM = `---
id: thm-demo
deps: [def-widget]
---

## Statement

Every finite widget is blue.

## Facts & Assumptions

[F1] A widget is blue ([[def-widget]]).

[F2] A widget has a colour, and the colour is
recorded by [[def-colour]].

## Proof

1.1 By [F1], done.
`;

// --------------------------------------------------------------- the grammar

test('sectionText anchors the heading to its own line: Statement is not Statement refuted', () => {
  const body = `## Statement refuted\n\nNot every widget is blue.\n\n## Proof\n\n1.1 …\n`;
  assert.equal(sectionText(body, 'Statement'), '');
  assert.match(sectionText(body, 'Statement refuted'), /Not every widget/);
});

test('the block ends at the true end of string, not at the first Z', () => {
  // The `\Z` defect, reproduced: a Facts block whose first entry contains
  // `$\mathbb{Z}$` and whose LATER entries are the ones that matter.
  const body = '## Facts & Assumptions\n\n'
    + '[F1] The ring $\\mathbb{Z}$ is an integral domain ([[def-integral-domain]]).\n\n'
    + '[F2] Every subgroup of $\\mathbb{Z}$ is cyclic ([[thm-subgroups-of-z]]).\n\n'
    + '[F3] $\\mathbb{Z}$ is a principal ideal domain ([[thm-z-is-a-pid]]).\n';
  assert.deepEqual(factLines(body).map((f) => f.fact), ['F1', 'F2', 'F3']);
  assert.deepEqual(factParagraphs(body).size, 3);
  // and the truncating spelling really would have lost them
  const truncated = /^##\s+Facts[^\n]*\n([\s\S]*?)(?=^##\s+|\Z)/m.exec(body)?.[1] ?? '';
  assert.ok(truncated.split('\n').filter((l) => /^\[F\d/.test(l)).length < 3,
    'the `\\Z` spelling is supposed to truncate — if it no longer does, this test proves nothing');
});

test('factLines reads the entry opening line; factParagraphs reads the whole entry', () => {
  const lines = factLines(ITEM);
  assert.deepEqual(lines.map((f) => f.fact), ['F1', 'F2']);
  assert.deepEqual(lines[0].links, ['def-widget']);
  // F2's link is on a continuation line: invisible to the line reader, which is
  // exactly why proof-contract uses the paragraph reader for `links`.
  assert.deepEqual(lines[1].links, []);
  const paras = factParagraphs(splitFrontmatter(ITEM).body);
  assert.deepEqual([...paras.keys()], ['F1', 'F2']);
  assert.deepEqual(paras.get('F2')!.links, ['def-colour']);
  assert.match(paras.get('F2')!.text, /^\[F2\]/, 'paragraph text keeps its label');
});

test('factsSectionText accepts a whole item file or a bare body', () => {
  assert.equal(factsSectionText(ITEM).trim(), factsSectionText(splitFrontmatter(ITEM).body).trim());
  assert.match(factsSectionText(ITEM), /\[F1\] A widget is blue/);
});

test('parseFactLine is the shared atom, tolerant of indentation and label spacing', () => {
  assert.deepEqual(parseFactLine('  [L12] restated ([[def-x]]).'), { fact: 'L12', text: 'restated ([[def-x]]).' });
  assert.deepEqual(parseFactLine('[A3]  spaced out'), { fact: 'A3', text: 'spaced out' });
  assert.equal(parseFactLine('1.1 By [F1], done.'), null);
  assert.equal(parseFactLine('[F1]'), null);
});

test('wikilinks resolves the piped form to its target id', () => {
  assert.deepEqual(wikilinks('see [[thm-a|the theorem]] and [[def-b]]'), ['thm-a', 'def-b']);
});

test('sourceSectionText returns null for a section a citation may not name', () => {
  const body = '## Statement\n\nA.\n\n## Remarks\n\nB.\n';
  assert.equal(sourceSectionText(body, 'Statement'), 'A.\n\n');
  assert.equal(sourceSectionText(body, 'Remarks'), null);
  assert.equal(sourceSectionText(body, 'Proof'), null);
  assert.ok(!SOURCE_SECTIONS.has('Remarks'));
});

test('numberedProofSteps keeps continuation-line citations in their proof step', () => {
  const body = `## Proof\n\n1.1 Start from the definition and compute\n\\[x^2=x\\].\nThe final implication uses [L2].\n[F1, L2] ∎\n\n1.2 Conclude from step 1.1. [step 1.1]\n`;
  const steps = numberedProofSteps(body);
  assert.deepEqual(steps.map((step) => step.id), ['1.1', '1.2']);
  assert.match(steps[0].text, /uses \[L2\]/, 'the citation is part of step 1.1, not discarded');
  assert.deepEqual(steps[0].inputs, ['F1', 'L2']);
  assert.doesNotMatch(steps[0].claim, /\[F1, L2\]/, 'the trailing contract tag is not claim prose');
  assert.match(steps[1].text, /step 1\.1/);
});

// ------------------------------------------- the scoped quote search (item 1)

/** An items dir plus a contract whose quote lives in the cited item's Remarks
 *  while the citation attributes it to the Definition. */
function scopeFixture() {
  const dir = mkdtempSync(join(tmpdir(), 'cf-scope-'));
  const items = join(dir, 'items');
  mkdirSync(items);
  writeFileSync(join(items, 'def-widget.md'), `---
id: def-widget
---

## Definition

A **widget** is a finite set with a chosen point.

## Remarks

Every widget is determined up to isomorphism by its cardinality.
`);
  writeFileSync(join(items, 'thm-demo.md'), `---
id: thm-demo
deps: [def-widget]
---

## Statement

Widgets are classified by cardinality.

## Facts & Assumptions

[F1] Every widget is determined up to isomorphism by its cardinality ([[def-widget]]).

## Proof

1.1 By [F1], done.
`);
  const contract = join(dir, 'contract.json');
  writeFileSync(contract, JSON.stringify({
    version: 1,
    scope: ['thm-demo'],
    contracts: {
      'thm-demo': {
        citations: [{
          fact: 'F1',
          source: 'def-widget',
          source_section: 'Definition',
          quote: 'Every widget is determined up to isomorphism by its cardinality.',
          uses: ['1.1'],
        }],
      },
    },
  }, null, 2));
  return { dir, items, contract };
}

const runFidelity = (tool: string, f: ReturnType<typeof scopeFixture>) => spawnSync(
  process.execPath,
  [tool, f.contract, '--items-dir', f.items, '--json', '--fail-on-missing-quote'],
  { cwd: REPO, encoding: 'utf8', timeout: 120_000 });

test('citation-fidelity searches the section the citation names, not the whole file', () => {
  const f = scopeFixture();
  const r = runFidelity(join(REPO, 'tools', 'citation-fidelity.mjs'), f);
  assert.equal(r.status, 1, `expected the misattributed quote to be reported\n${r.stdout}${r.stderr}`);
  const out = JSON.parse(r.stdout);
  assert.equal(out.summary.quote_not_found, 1);
  assert.equal(out.quote_not_found[0].source, 'def-widget');
  assert.equal(out.quote_not_found[0].searched, 'Definition',
    'the report must say which section was searched');
});

test('a quote that IS in its declared section still passes', () => {
  const f = scopeFixture();
  const c = JSON.parse(readFileSync(f.contract, 'utf8'));
  c.contracts['thm-demo'].citations[0].quote = 'A **widget** is a finite set with a chosen point.';
  writeFileSync(f.contract, JSON.stringify(c, null, 2));
  const r = runFidelity(join(REPO, 'tools', 'citation-fidelity.mjs'), f);
  assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
  assert.equal(JSON.parse(r.stdout).summary.quote_not_found, 0);
});

test('a citation naming no source_section keeps the whole-item search', () => {
  // proof-contract already hard-errors that shape as `citation-section`; a
  // second, differently worded report of it here would only be a false positive.
  const f = scopeFixture();
  const c = JSON.parse(readFileSync(f.contract, 'utf8'));
  delete c.contracts['thm-demo'].citations[0].source_section;
  writeFileSync(f.contract, JSON.stringify(c, null, 2));
  const r = runFidelity(join(REPO, 'tools', 'citation-fidelity.mjs'), f);
  assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
  assert.equal(JSON.parse(r.stdout).summary.quote_not_found, 0);
});

test('contract regeneration cites a counterexample claim from Statement refuted', () => {
  const dir = mkdtempSync(join(tmpdir(), 'contract-regen-'));
  mkdirSync(join(dir, 'items'));
  writeFileSync(join(dir, 'items', 'cex-source.md'), `---
id: cex-source
---

## Statement refuted

Every widget is blue.

## Counterexample

A red widget.
`);
  writeFileSync(join(dir, 'items', 'thm-consumer.md'), `---
id: thm-consumer
deps: [cex-source]
---

## Statement

A red widget exists.

## Facts & Assumptions

[L1] Not every widget is blue ([[cex-source]]).

## Proof

1.1 Apply [L1]. [L1] ∎
`);
  const contract = join(dir, 'contract.json');
  writeFileSync(contract, JSON.stringify({ version: 1, scope: ['thm-consumer'], contracts: {
    'thm-consumer': { citations: [], derivations: [], boundaries: [] },
  } }));
  const result = spawnSync(process.execPath,
    [join(REPO, 'tools', 'regen-contract-entries.mjs'), contract, 'thm-consumer'],
    { cwd: dir, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const citation = JSON.parse(readFileSync(contract, 'utf8')).contracts['thm-consumer'].citations[0];
  assert.equal(citation.source_section, 'Statement refuted');
  assert.equal(citation.quote, 'Every widget is blue.');
  assert.ok(SOURCE_SECTIONS.has(citation.source_section));
});

test('contract regeneration records a fact cited only on a continuation line', () => {
  const dir = mkdtempSync(join(tmpdir(), 'contract-regen-multiline-'));
  mkdirSync(join(dir, 'items'));
  writeFileSync(join(dir, 'items', 'def-source.md'), `---\nid: def-source\n---\n\n## Definition\n\nA source fact.\n`);
  writeFileSync(join(dir, 'items', 'thm-consumer.md'), `---\nid: thm-consumer\ndeps: [def-source]\n---\n\n## Statement\n\nA conclusion.\n\n## Facts & Assumptions\n\n[L1] A source fact ([[def-source]]).\n\n## Proof\n\n1.1 Begin the argument.\nThe decisive implication uses [L1].\n[L1] ∎\n`);
  const contract = join(dir, 'contract.json');
  writeFileSync(contract, JSON.stringify({ version: 1, scope: ['thm-consumer'], contracts: {
    'thm-consumer': { citations: [], derivations: [], boundaries: [] },
  } }));
  const result = spawnSync(process.execPath,
    [join(REPO, 'tools', 'regen-contract-entries.mjs'), contract, 'thm-consumer'],
    { cwd: dir, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const entry = JSON.parse(readFileSync(contract, 'utf8')).contracts['thm-consumer'];
  assert.deepEqual(entry.citations[0].uses, ['1.1']);
  assert.ok(entry.derivations[0].inputs.includes('L1'));
});

// -------------------------------------- every consumer really imports the one

test('all five consumers import tools/facts-block.mjs', () => {
  for (const tool of [
    'citation-fidelity.mjs', 'proof-contract.mjs', 'citation-faithfulness-screen.mjs',
    'truncated-citation.mjs', 'depcheck.mjs',
  ]) {
    const src = readFileSync(join(REPO, 'tools', tool), 'utf8');
    assert.match(src, /from '\.\/facts-block\.mjs'/, `${tool} does not import the shared parser`);
    // and no consumer keeps a private copy of the block regex
    assert.doesNotMatch(src, /##\\\\s\+Facts|## Facts & Assumptions\\n/,
      `${tool} still carries its own Facts-block regex`);
  }
});
