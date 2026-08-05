#!/usr/bin/env node
// Wave 5, A6/D2: Alpha's recorded concurrence on the `established-knowledge`
// evidence class for the seven escalated rows in wave5-topology-countability.
// Preserves each Beta rationale verbatim and adds Alpha's own determination.
import { readFileSync, writeFileSync } from 'node:fs';

const LEDGER = 'research/audit/wave5-topology-countability.provenance.jsonl';
const AT = '2026-08-05';

const FREMLIN =
  'Verified against the cited source directly (pdftotext of chap5a.pdf, 5A4A): ' +
  'Fremlin defines w(X) as "the least cardinal of any base for T" (a), ' +
  'd(X) as "the smallest cardinal of any dense subset" (c), ' +
  'c(X) as "sup{#(G) : G subset of T\\{empty} is disjoint}" (d), ' +
  'L(X) as "the least cardinal kappa such that every open cover of X has a subcover with cardinal at most kappa" (g)(i), ' +
  'and chi(x,X) as "the smallest cardinal of any base of neighbourhoods of x" with chi(X) = sup_x chi(x,X) (h). ' +
  'These match the library definitions exactly, including the RAW (un-normalized, no "+omega") convention ' +
  'that def-weight-density-and-character and def-lindelof-degree-and-cellularity declare. ' +
  'Fremlin writes each minimum/supremum down without proving it exists, exactly as Beta reported: ' +
  'the source presupposes well-definedness in a definition rather than stating it as a proposition. ' +
  'A definition that presupposes a least element is NOT a semantically identical statement of the ' +
  'proposition that the least element exists, so `semantic-source` would overclaim and ' +
  '`established-knowledge` is the honest class. ' +
  'ALPHA CONCURS that the statement is standard established mathematics: under AC every set has a ' +
  'cardinality, the relevant families are sets (subfamilies of the topology, subsets of X), so the ' +
  'cardinalities form a nonempty set of cardinals, which has a least member and a set-sized supremum. ' +
  'This is routine set-theoretic topology (Juhasz, Cardinal Functions in Topology; Engelking, General ' +
  'Topology) and carries no positive indication of AI novelty, so the positive-determination standard ' +
  'forbids `ai-generated`. Statement stays `ai-altered`. ' +
  'SCOPE OF THIS CONCURRENCE: it certifies the STATEMENT as standard. It is not a proof certification — ' +
  'proof provenance stays `ai-generated` and these items remain in the A6 CRITICAL refuter set.';

const REMARK_LEDGER =
  'ALPHA CONCURS. Read the remark on disk with the standing remark-suspicion rule and checked each ' +
  'component assertion independently. Second countable => first countable (no choice); with AC_omega, ' +
  'second countable => separable and Lindelof (both standard, both genuinely need countable choice); ' +
  'separable => ccc (standard, and choice-free since a countable dense set is indexed). The raw-convention ' +
  'claim is correct and is the sharp point of the remark: with un-normalized cardinal functions the metric ' +
  'result is d = w (confirmed against Fremlin 5A4B(h)(i), which states d(X) = w(X) for metrizable X under ' +
  'those same raw conventions) and a blanket equality of all five functions is FALSE — a finite discrete ' +
  'space on n > 1 points has w = d = c = n but chi = 1, so the remark is right to refuse the blanket form. ' +
  'Every component is standard; only the per-page assembly is local, and assembling proved standard facts ' +
  'into orientation prose is not AI-invented mathematics. `ai-altered` / `established-knowledge` upheld.';

const DICTIONARY_LEDGER =
  'ALPHA CONCURS. Checked each component assertion: the product topology on R^n coincides with the metric ' +
  'topologies of d_1, d_2 and d_infinity; every norm on R^n is equivalent to the Euclidean norm and so ' +
  'induces that same topology; for n = 1 the Euclidean metric is |s - t| and the metric and real-line ' +
  'formulations of continuity and compactness agree. All three are standard and each is proved in-library ' +
  'by the cited deps. Only the per-page dictionary assembly is local, which is not novelty. ' +
  '`ai-altered` / `established-knowledge` upheld. ' +
  'NOTE, NOT part of this concurrence: Beta finding N1 stands — this item\'s first reference titles ' +
  '"J. R. Munkres, Topology, 2nd ed., SS19, 20" but its URL is ' +
  'https://en.wikipedia.org/wiki/James_Munkres, the biography of the person, not the cited topology text. ' +
  'That is a citation-precision defect for A6 repair. It does not affect this evidence class, which waives ' +
  'the URL requirement outright, and the remaining two URLs do support the content.';

const ALPHA = {
  'lem-weight-is-well-defined': FREMLIN,
  'lem-density-is-well-defined': FREMLIN,
  'lem-character-is-well-defined': FREMLIN,
  'lem-lindelof-degree-is-well-defined': FREMLIN,
  'lem-cellularity-is-well-defined': FREMLIN,
  'rem-countability-axiom-implication-and-choice-ledger': REMARK_LEDGER,
  'rem-euclidean-topology-dictionary': DICTIONARY_LEDGER,
};

const lines = readFileSync(LEDGER, 'utf8').split('\n');
const seen = new Set();
const out = lines.map((line) => {
  if (!line.trim()) return line;
  const row = JSON.parse(line);
  const rationale = ALPHA[row.id];
  if (!rationale) return line;
  if (row.evidence !== 'established-knowledge') {
    throw new Error(`${row.id}: expected established-knowledge, found ${row.evidence}`);
  }
  seen.add(row.id);
  // Beta's `rationale` is left byte-identical; Alpha's determination is additive.
  return JSON.stringify({
    ...row,
    alpha_concurred: true,
    alpha_rationale: rationale,
    alpha_at: AT,
  });
});

const missing = Object.keys(ALPHA).filter((id) => !seen.has(id));
if (missing.length) throw new Error(`rows not found in ledger: ${missing.join(', ')}`);

writeFileSync(LEDGER, out.join('\n'));
console.log(`alpha_concurred: true recorded on ${seen.size} row(s)`);
for (const id of seen) console.log(`  ${id}`);
