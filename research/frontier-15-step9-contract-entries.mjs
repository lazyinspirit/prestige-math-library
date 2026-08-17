#!/usr/bin/env node
// Step-9 contract generator for the six results recovered from overturned
// declines. It derives `citations.uses` and every step's `inputs` MECHANICALLY
// from the item text — those two fields must agree with the file exactly, and
// hand-transcribing them is how three defects reached disk on one night — while
// the `claim` lines and the eight boundary dispositions are written per item.
import { readFileSync, writeFileSync } from 'node:fs';

const SECTIONS = ['Statement', 'Statement refuted', 'Definition', 'Example'];

const body = (id) => readFileSync(`items/${id}.md`, 'utf8').split('\n---\n')[1];
/** Split on headings rather than using a lookahead: `\Z` is not a JavaScript
 *  escape, so an earlier `(?=^## |\Z)` silently failed on any item whose
 *  section is the LAST one in the file — which is every definition. */
const section = (text, name) => {
  for (const block of text.split(/^## /m).slice(1)) {
    const nl = block.indexOf('\n');
    if (block.slice(0, nl).trim() === name) return block.slice(nl + 1).trim();
  }
  return null;
};
const sourceSection = (id) => {
  const b = body(id);
  for (const s of SECTIONS) if (section(b, s)) return s;
  return null;
};
const facts = (b) => {
  const sec = /## Facts & Assumptions\n([\s\S]*?)(?=\n## )/.exec(b)[1];
  return [...sec.matchAll(/^\[([FAL]\d+)\]\s*([\s\S]*?)(?=\n\n|$)/gm)]
    .map(([, label, txt]) => ({ label, links: [...txt.matchAll(/\[\[([a-z0-9-]+)\]\]/g)].map((m) => m[1]) }));
};
const steps = (b) => {
  const sec = /## (?:Proof|Verification|Refutation)\n([\s\S]*)/.exec(b)[1];
  return sec.split('\n').map((l) => l.trim()).filter((l) => /^\d+\.\d+\s/.test(l)).map((l) => {
    const id = /^(\d+\.\d+)/.exec(l)[1];
    const rest = l.slice(id.length);
    const toks = new Set();
    for (const m of rest.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) toks.add(m[1] ?? m[2]);
    toks.delete(id);
    return { id, tokens: [...toks] };
  });
};

/** claims[itemId][stepId] and routine[itemId] = Set of step ids that are
 *  bookkeeping rather than derivation. */
const CLAIMS = JSON.parse(readFileSync('research/frontier-15-step9-claims.json', 'utf8'));
const BOUNDARIES = JSON.parse(readFileSync('research/frontier-15-step9-boundaries.json', 'utf8'));

const BATCHES = {
  2: ['lem-centralizer-of-a-normal-subgroup-is-normal',
      'lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup',
      'thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group'],
  4: ['prop-complement-and-disjoint-union-axioms-for-a-lambda-system'],
  7: ['ex-the-group-action-monad-and-its-algebras'],
};

for (const [batch, ids] of Object.entries(BATCHES)) {
  const path = `research/frontier-15-batch-${batch}.proof-contracts.json`;
  const doc = JSON.parse(readFileSync(path, 'utf8'));
  for (const id of ids) {
    const b = body(id);
    const F = facts(b);
    const S = steps(b);
    const citations = [];
    for (const f of F) {
      for (const src of f.links) {
        const sec = sourceSection(src);
        citations.push({
          fact: f.label,
          source: src,
          source_section: sec,
          quote: section(body(src), sec),
          uses: S.filter((s) => s.tokens.includes(f.label)).map((s) => s.id),
        });
      }
    }
    const routine = new Set(CLAIMS[id].routine ?? []);
    const entryFor = (s) => ({
      id: `${id.split('-').slice(0, 3).join('-')}-${s.id.replace('.', '-')}`,
      claim: CLAIMS[id].claims[s.id],
      step: s.id,
      inputs: s.tokens.map((t) => (/^\d+\.\d+$/.test(t) ? `step ${t}` : t)).concat('given'),
    });
    doc.contracts[id] = {
      citations,
      derivations: S.filter((s) => !routine.has(s.id)).map(entryFor),
      routine_steps: S.filter((s) => routine.has(s.id)).map(entryFor),
      boundaries: BOUNDARIES[id],
    };
    if (!doc.scope.includes(id)) doc.scope.push(id);
  }
  writeFileSync(path, `${JSON.stringify(doc, null, 1)}\n`);
  console.log(`batch ${batch}: ${ids.length} entr(ies) written, scope ${doc.scope.length}`);
}
