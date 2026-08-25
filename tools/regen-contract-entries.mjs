#!/usr/bin/env node
// Regenerate the `citations` and `derivations` of named proof-contract entries
// from the current on-disk item text, preserving every other key (boundary,
// risk_review, ...). Used at step 6 after Alpha repairs change Facts or steps.
//
//   node tools/regen-contract-entries.mjs <batch-contract.json> <id> [id ...]
//
// A citation quote is the full text of the cited item's own statement section,
// which is the convention the existing contracts already use.
import { readFileSync, writeFileSync, existsSync } from 'fs';
import {
  SOURCE_SECTIONS, factParagraphs, numberedProofSteps, sourceSectionText, splitFrontmatter,
} from './facts-block.mjs';

// Keep the preference explicit, but let the shared contract grammar decide
// which headings are legal. In particular, a counterexample item's citable
// claim is `Statement refuted`; `Counterexample` is its witness and has never
// been a valid source_section in proof-contract.mjs.
const CITABLE_HEADINGS = ['Statement', 'Statement refuted', 'Definition', 'Example'];

function itemPath(id) { return `items/${id}.md`; }

/** The item's reader-facing statement section, used verbatim as a citation quote. */
function statementSection(id) {
  const p = itemPath(id);
  if (!existsSync(p)) return null;
  const { body } = splitFrontmatter(readFileSync(p, 'utf8'));
  for (const section of CITABLE_HEADINGS) {
    if (!SOURCE_SECTIONS.has(section)) continue;
    const text = sourceSectionText(body, section)?.trim();
    if (text) return { section, text };
  }
  return null;
}

/** [L#]/[F#]/[A#] fact lines and the wikilink targets each declares. */
function parseFacts(md) {
  return [...factParagraphs(splitFrontmatter(md).body).values()]
    .map((fact) => ({ fact: fact.label, text: fact.text, targets: fact.links }));
}

/** Numbered proof steps, including every continuation line. The same shared
 * parser feeds the checker, so regeneration cannot omit an input that the
 * checker later discovers (or silently agree with the same truncated view). */
function parseSteps(md) {
  return numberedProofSteps(splitFrontmatter(md).body).map((step) => {
    const tokens = new Set();
    for (const t of step.text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) {
      tokens.add(t[1] ?? t[2]);
    }
    return { step: step.id, claim: step.claim, inputs: step.inputs, tokens };
  });
}

const [file, ...ids] = process.argv.slice(2);
if (!file || !ids.length) {
  console.error('usage: regen-contract-entries.mjs <contract.json> <id> [id ...]');
  process.exit(2);
}
const doc = JSON.parse(readFileSync(file, 'utf8'));
const contracts = doc.contracts || doc;

let changed = 0, skipped = 0;
for (const id of ids) {
  if (!contracts[id]) { skipped++; continue; }
  const md = readFileSync(itemPath(id), 'utf8');
  const facts = parseFacts(md);
  const steps = parseSteps(md);
  if (!facts.length || !steps.length) {
    console.error(`SKIP ${id}: no facts or no steps parsed`);
    skipped++; continue;
  }

  const citations = [];
  for (const f of facts) {
    // Every wikilink target of a fact needs its own citation contract.
    if (!f.targets.length) continue; // a pure assumption, e.g. [A1]
    const uses = steps.filter(s => s.tokens.has(f.fact)).map(s => s.step);
    for (const src of f.targets) {
      const st = statementSection(src);
      if (!st) { console.error(`WARN ${id}: cannot read statement of ${src}`); continue; }
      citations.push({
        fact: f.fact, source: src, source_section: st.section,
        quote: st.text, uses,
      });
    }
  }

  // A step's stated inputs must cover every token anywhere in its block.
  const derivations = steps.map(s => {
    const inputs = [...s.inputs];
    const have = new Set(inputs.map(t => t.replace(/^step\s+/, '')));
    for (const tok of s.tokens) {
      if (!have.has(tok)) inputs.push(/^\d/.test(tok) ? `step ${tok}` : tok);
    }
    return { id: `step-${s.step.replace('.', '-')}`, claim: s.claim, step: s.step, inputs };
  });

  contracts[id] = { ...contracts[id], citations, derivations };
  changed++;
}
writeFileSync(file, JSON.stringify(doc, null, 2) + '\n');
console.log(`${file}: regenerated ${changed}, skipped ${skipped}`);
