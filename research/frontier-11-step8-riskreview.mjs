// Amend the risk_review notes of the three high/critical items repaired at step 8.
// Each note currently records a clean step-6 adversarial read. Two of the three are
// exactly where a step-7 judge then found a real defect, so leaving the note as it
// stands would assert that nothing was ever surfaced against text that has since
// been corrected. Alpha appends what was found, adjudicated and repaired.
import { readFileSync, writeFileSync } from "node:fs";

const REPO = new URL("..", import.meta.url).pathname;
const BATCH = {
  "thm-rectifiable-iff-coordinate-functions-have-bounded-variation": 2,
  "thm-arc-length-is-invariant-under-monotone-reparametrization": 2,
  "thm-extremal-graph-supersaturation": 3,
};
const APPEND = {
  "thm-rectifiable-iff-coordinate-functions-have-bounded-variation":
    " STEP-8 AMENDMENT (Alpha, frontier-11). Both judge lanes rejected this item and Alpha adjudicated both rejections confirmed_fatal (defect_type other): the Statement and proof indexed the coordinates of R^n as gamma_1..gamma_n and the standard basis as e_1..e_n, while def-euclidean-inner-product and lem-standard-basis-of-f-n index 0..n-1, so gamma_n and e_n were undefined and gamma_0 was omitted -- at n=1 the display named only the nonexistent gamma_1. The step-6 reader and the ftc-arc refuter both missed it. Repair: coordinates re-based to j<n in the Statement, in [L1], and in step 1.2; the proposition, the max/sum bounds and every consumer's restatement are unchanged. Rejudged at step 8.",
  "thm-arc-length-is-invariant-under-monotone-reparametrization":
    " STEP-8 AMENDMENT (Alpha, frontier-11). DeepSeek V4 Pro rejected this item and Alpha adjudicated confirmed_fatal (defect_type logic): the Statement's singleton clause asserted that a singleton parameter interval forces the other interval to be a singleton, which is false in the direction a=b, since a constant map on a nondegenerate [c,d] is continuous, surjective and monotone. The step-6 reader and the ftc-arc refuter both missed it. Repair: the clause now states the true implication in each direction and step 3.1 discharges the a=b, c<d case from the vanishing of every polygonal sum rather than from the singleton convention. The displayed equality is unchanged. Rejudged at step 8.",
  "thm-extremal-graph-supersaturation":
    " STEP-8 AMENDMENT (Alpha, frontier-11). DeepSeek V4 Pro rejected this item and Alpha adjudicated confirmed_fatal (defect_type logic): step 1.1's degenerate branch took N=1 and claimed no graph satisfies the edge hypothesis, but at n=1 one has binom(1,2)=0, so the hypothesis holds vacuously while the conclusion demands delta*n^h = 1 embedding of an h-vertex H (h>=2) into a one-vertex graph. The constructed witness was therefore invalid, though the theorem is true. The step-6 reader and the extremal refuter both missed it. Repair: the branch now takes N=2 and derives the impossibility from binom(n,2)>=1 for n>=2, and records why the threshold cannot be 1. The Statement is unchanged. Rejudged at step 8.",
};

for (const [id, batch] of Object.entries(BATCH)) {
  const path = `${REPO}research/frontier-11-batch-${batch}.proof-contracts.json`;
  const data = JSON.parse(readFileSync(path, "utf8"));
  const review = data.contracts?.[id]?.risk_review;
  if (!review) { console.error(`no risk_review for ${id} in batch ${batch}`); process.exit(1); }
  if (review.notes.includes("STEP-8 AMENDMENT")) { console.log(`${id}: already amended`); continue; }
  review.notes += APPEND[id];
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
  console.log(`amended risk_review for ${id} (batch ${batch})`);
}
