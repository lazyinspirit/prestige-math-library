#!/usr/bin/env node
// Wave 5, A6/D2: Alpha's recorded concurrence on the one `established-knowledge`
// row in wave5-topology-separation. Beta's `rationale` is preserved verbatim.
import { readFileSync, writeFileSync } from 'node:fs';

const LEDGER = 'research/audit/wave5-topology-separation.provenance.jsonl';
const ID = 'ex-free-ultrafilter-converging-in-a-convergent-sequence-space';

const RATIONALE =
  'ALPHA CONCURS. Independently checked the space and the claim from disk, and searched for a source. ' +
  'First, the space is what Beta says it is: the item gives infinity the neighbourhood base ' +
  'U_N = {infinity} u {n : n >= N}, i.e. TAILS rather than complements-of-finite-sets, so the identification ' +
  'with the one-point compactification of discrete N needs checking rather than assuming — and it holds, ' +
  'because a subset of N contains a tail iff it is cofinite (if N\\S is finite, take N = max(N\\S)+1). ' +
  'The two neighbourhood filters at infinity therefore coincide and the space IS the one-point ' +
  'compactification of discrete N, equivalently the convergent-sequence space. ' +
  'Second, the claim is standard on two independent routes: directly, a free ultrafilter contains no finite ' +
  'set, hence contains every cofinite set, hence every tail, hence converges to infinity; and structurally, ' +
  'the one-point compactification is compact, so every ultrafilter on it converges, while a free one cannot ' +
  'converge to an isolated natural. Both are textbook. ' +
  'Third, on the source: a search located every ingredient (compactness iff every ultrafilter converges; ' +
  'free ultrafilters on N as the points of beta-N minus N; the one-point compactification of a discrete ' +
  'space) but no single source stating THIS example as a proposition — Encyclopedia of Mathematics ' +
  '"Ultrafilter" and Norwood, "Filter convergence and Tychonoff\'s theorem" (Cornell) carry the ingredients. ' +
  'That is exactly the situation D2 reserves for this class, and it is why the row correctly carries no URL ' +
  'and does not claim the item\'s Wikipedia "Ultrafilter (set theory)" reference as a statement source: ' +
  'that article supports an ingredient, not the example. ' +
  'Folklore that every competent reader reconstructs in two lines carries no positive indication of AI ' +
  'novelty, so the positive-determination standard forbids `ai-generated`. Statement stays `ai-altered`. ' +
  'Checked separately for a title-overclaims-proof defect and found none: the title and Statement assert the ' +
  'existential ("a free ultrafilter ... converges"), and the Verification proves the existential by ' +
  'extending the tail filter. ' +
  'SCOPE: this certifies the STATEMENT as standard. Proof provenance stays `ai-generated` and the item ' +
  'remains subject to ordinary A6 refuter reading.';

const lines = readFileSync(LEDGER, 'utf8').split('\n');
let hit = 0;
const out = lines.map((line) => {
  if (!line.trim()) return line;
  const row = JSON.parse(line);
  if (row.id !== ID) return line;
  if (row.evidence !== 'established-knowledge') {
    throw new Error(`${row.id}: expected established-knowledge, found ${row.evidence}`);
  }
  hit += 1;
  return JSON.stringify({
    ...row,
    alpha_concurred: true,
    alpha_rationale: RATIONALE,
    alpha_at: '2026-08-05',
  });
});

if (hit !== 1) throw new Error(`expected exactly 1 matching row, found ${hit}`);
writeFileSync(LEDGER, out.join('\n'));
console.log(`alpha_concurred: true recorded on ${ID}`);
