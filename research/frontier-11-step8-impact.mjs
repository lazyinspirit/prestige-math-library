// Build the step-8 impact receipt for the three fatal repairs that touched a
// public surface. Alpha reviewed every listed consumer on disk; the notes below
// record what each one actually cites and why the repair leaves it licensed.
import { writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const REPO = new URL("..", import.meta.url).pathname;
const computed = JSON.parse(execFileSync("node", [
  REPO + "tools/impact-audit.mjs",
  "--touches", REPO + "research/frontier-11-touches.json",
  "--from", "pre-step8", "--to", "post-step8-repairs", "--json",
], { encoding: "utf8" }));

// Why nothing downstream moves:
//  * def-path-...: only the sentence naming the singleton path changed. The
//    convention it defines -- L on [a,a] is 0 and every such path is rectifiable
//    -- is character-for-character the same claim consumers cite.
//  * thm-rectifiable-iff-...: coordinates re-based from 1..n to 0..n-1 to match
//    def-euclidean-inner-product. The proposition (rectifiable iff every
//    coordinate has bounded variation, with the max/sum bounds) is unchanged, and
//    every consumer restates it without an index range.
//  * thm-arc-length-is-invariant-...: the displayed equality is untouched; only
//    the singleton side-clause, which asserted a false converse, was corrected.
const NOTE = {
  "cor-chord-length-is-at-most-arc-length":
    "[L1]/[L2] cite the supremum-of-polygonal-lengths definition and the singleton convention 'arc length is defined to be 0'. Both survive verbatim; the repaired sentence only stops asserting that the singleton path is unique.",
  "def-arc-length-function":
    "Cites the definition for L on subintervals; uses no singleton uniqueness and no coordinate index.",
  "lem-polygonal-length-is-monotone-under-refinement":
    "Uses the partition/polygonal-sum clause only, which is unchanged; the repaired sentence is the separate singleton convention.",
  "thm-arc-length-is-additive-over-subintervals":
    "Uses the supremum definition and the singleton value 0; both unchanged.",
  "prop-arc-length-under-lipschitz-maps-and-euclidean-similarities":
    "[L3] cites 'arc length is the supremum of sums of chord lengths'; untouched by the repair.",
  "cor-length-of-the-graph-of-a-c1-function":
    "Consumes length via the C1 speed-integral chain, not the singleton clause or any coordinate index.",
  "cor-piecewise-c1-paths-have-additive-speed-integral-length":
    "Its own singleton sentence reads 'the empty sum and the length are zero', which is exactly the retained convention; no uniqueness claim is inherited.",
  "cor-regular-c1-paths-have-c1-unit-speed-parametrizations":
    "Cites the speed-integral length and FTC; a<b is hypothesised, so no singleton or coordinate-index dependence.",
  "thm-every-rectifiable-path-has-an-arc-length-parametrization":
    "[L3] cites only 'length is invariant under a continuous surjective monotone reparametrization'. Step 4.1 applies it to s restricted to [u,v] onto [r,q], which includes r=q with u<v -- precisely the case the repaired clause now states correctly, so this consumer is better licensed than before, not worse.",
  "lem-arc-length-function-is-continuous-and-nondecreasing":
    "[L2] restates 'every coordinate gamma_j has bounded variation' and the sum bound with no index range; the re-basing to j<n leaves that restatement true as written.",
  "thm-rectifiable-iff-coordinate-functions-have-bounded-variation":
    "The re-indexed item itself; repaired under its own confirmed_fatal rows and rejudged.",
  "thm-arc-length-is-invariant-under-monotone-reparametrization":
    "The repaired item itself; repaired under its own confirmed_fatal row and rejudged.",
  "thm-arc-length-is-lower-semicontinuous-under-uniform-convergence":
    "Cites the supremum definition; its own a=b discussion is independent of the repaired sentence and of coordinate indexing.",
  "thm-c1-paths-have-length-equal-to-the-integral-of-speed":
    "Cites the supremum definition and handles [a,a] by 'both sides defined as zero', which is the retained convention.",
  "cex-graph-of-x-sin-one-over-x-is-not-rectifiable":
    "[L4] restates the criterion as 'all of its coordinate functions have bounded variation', with no index range; unaffected by the re-basing.",
  "ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous":
    "[L2] restates the criterion as 'all coordinates have bounded variation', with no index range; unaffected.",
  "cex-arc-length-is-not-continuous-under-uniform-convergence":
    "Consumes length through the piecewise-C1 speed integral and the lower-semicontinuity bound; neither repaired surface is load-bearing here.",
  "cex-the-koch-curve-is-not-rectifiable":
    "Published consumer citing the supremum definition and unboundedness of polygonal sums; no singleton or coordinate-index dependence.",
  "cex-the-same-trace-can-have-different-path-lengths":
    "Compares two parametrisations with a<b on both sides; uses neither the singleton clause nor coordinate indices.",
  "ex-line-segment-and-polygonal-path-length":
    "Computes polygonal sums on nondegenerate intervals; unaffected.",
  "ex-unit-circle-arc-has-length-theta":
    "Its theta=0 case cites 'the domain is a singleton and the defined length is 0', which is the retained convention.",
  "ex-v-shaped-path-is-rectifiable-but-not-c1":
    "Uses the supremum definition on a nondegenerate interval; unaffected.",
};

const missing = computed.required_review.filter((id) => !NOTE[id]);
if (missing.length) {
  console.error("no review note for: " + missing.join(", "));
  process.exit(1);
}
const receipt = {
  version: 1,
  reviewer: "alpha (Claude Opus 5, frontier-11 step 8)",
  source: {
    touch_ledger: "research/frontier-11-touches.json",
    from: "pre-step8",
    to: "post-step8-repairs",
  },
  changed_interfaces: computed.changed,
  required_review: computed.required_review,
  dispositions: computed.required_review.map((id) => ({
    id,
    status: "still-licensed",
    notes: NOTE[id],
  })),
};
writeFileSync(REPO + "research/frontier-11-step8-impact.json", JSON.stringify(receipt, null, 2) + "\n");
console.log("wrote research/frontier-11-step8-impact.json with " + receipt.dispositions.length + " dispositions");
