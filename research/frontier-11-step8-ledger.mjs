// frontier-11 step-8 adjudication ledger generator (Alpha).
// Emits research/frontier-11-judge-adjudications.jsonl with item_sha256 computed
// in tools/item-hash.mjs normalization (the whole verification block excluded),
// which is what tools/step8-guard.mjs compares against the pre-step8 baseline.
// Hashes MUST be taken before any repair, so run this once, before editing.
import { readFileSync, writeFileSync } from "node:fs";
import { itemContentHash } from "../tools/item-hash.mjs";

const REPO = new URL("..", import.meta.url).pathname;
const T = "gpt-5.6-terra";
const D = "deepseek-v4-pro";

// id -> model -> [outcome, defect_type?]
const A = {
  // ---- batch 1: field extensions / symmetric groups ----
  "def-field-extension-generated-subfields-and-simple-extension": { [T]: ["confirmed_nonfatal"] },
  "thm-simple-algebraic-extension-quotient-power-basis-and-degree": { [T]: ["confirmed_nonfatal"] },
  "thm-real-automorphisms-of-the-complex-numbers": { [T]: ["confirmed_nonfatal"] },
  "ex-square-roots-of-the-imaginary-unit": { [T]: ["confirmed_nonfatal"] },
  "thm-adjacent-transpositions-generate-the-symmetric-group": { [T]: ["confirmed_nonfatal"] },
  "lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup": { [T]: ["confirmed_nonfatal"] },
  "cor-three-cycles-form-one-conjugacy-class-in-a-n": { [T]: ["confirmed_nonfatal"] },
  "thm-alternating-conjugacy-class-splitting-criterion": { [T]: ["confirmed_nonfatal"] },
  "lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "cor-only-proper-nontrivial-normal-subgroup-of-s-n": { [D]: ["confirmed_nonfatal"] },

  // ---- batch 2: the fundamental theorems of calculus ----
  "cor-ftc-integral-function-differentiable-almost-everywhere": { [T]: ["confirmed_nonfatal"] },
  "thm-newton-leibniz-with-interior-derivative": { [T]: ["confirmed_nonfatal"] },
  "thm-newton-leibniz-with-a-countable-exceptional-set": { [T]: ["confirmed_nonfatal"] },
  "thm-substitution-with-riemann-integrable-inner-derivative": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "thm-one-sided-ftc-at-points-with-one-sided-limits": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "thm-differentiation-under-the-integral-sign-on-a-compact-rectangle": { [T]: ["confirmed_nonfatal"] },
  "thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "ex-bounded-discontinuous-derivative-that-is-riemann-integrable": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "cex-volterra-bounded-derivative-not-riemann-integrable": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "ex-dense-jump-integrand-with-dense-nondifferentiability": { [T]: ["confirmed_nonfatal"] },
  "ex-thomae-integral-function-differentiates-through-dense-discontinuities": { [T]: ["confirmed_nonfatal"] },
  "ex-sparse-spikes-ftc-conclusion-at-a-discontinuity": { [T]: ["confirmed_nonfatal"] },

  // ---- batch 2: arc length and rectifiable curves ----
  "def-path-polygonal-length-and-rectifiability-in-rn": { [T]: ["confirmed_fatal", "other"] },
  "cor-chord-length-is-at-most-arc-length": { [T]: ["confirmed_nonfatal"] },
  "thm-rectifiable-iff-coordinate-functions-have-bounded-variation": { [T]: ["confirmed_fatal", "other"], [D]: ["confirmed_fatal", "other"] },
  "thm-arc-length-is-invariant-under-monotone-reparametrization": { [D]: ["confirmed_fatal", "logic"] },
  "prop-arc-length-under-lipschitz-maps-and-euclidean-similarities": { [T]: ["confirmed_nonfatal"] },
  "thm-arc-length-is-lower-semicontinuous-under-uniform-convergence": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "thm-c1-paths-have-length-equal-to-the-integral-of-speed": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "lem-arc-length-function-is-continuous-and-nondecreasing": { [T]: ["confirmed_nonfatal"] },
  "cor-regular-c1-paths-have-c1-unit-speed-parametrizations": { [T]: ["confirmed_nonfatal"] },
  "ex-unit-circle-arc-has-length-theta": { [T]: ["confirmed_nonfatal"] },
  "cex-graph-of-x-sin-one-over-x-is-not-rectifiable": { [T]: ["confirmed_nonfatal"] },
  "cex-arc-length-is-not-continuous-under-uniform-convergence": { [T]: ["confirmed_nonfatal"] },
  "ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous": { [D]: ["confirmed_nonfatal"] },

  // ---- batch 3: formal power series ----
  "thm-formal-power-series-ring-and-polynomial-embedding": { [T]: ["confirmed_nonfatal"] },
  "prop-coefficient-extraction-linearity-and-extensionality": { [T]: ["confirmed_nonfatal"] },
  "def-formal-order-and-x-adic-topology": { [T]: ["confirmed_nonfatal"] },
  "lem-formal-order-laws": { [T]: ["confirmed_nonfatal"] },
  "thm-summable-families-and-rearrangement": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "thm-x-adic-completeness-and-polynomial-density": { [T]: ["confirmed_nonfatal"] },
  "thm-formal-power-series-unit-criterion": { [T]: ["confirmed_nonfatal"] },
  "def-formal-series-composition": { [T]: ["confirmed_nonfatal"] },
  "thm-formal-composition-laws": { [T]: ["confirmed_nonfatal"] },
  "thm-formal-compositional-inverse": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "prop-formal-derivative-algebra": { [T]: ["confirmed_nonfatal"] },
  "def-formal-exponential-logarithm-and-powers": { [T]: ["confirmed_nonfatal"] },
  "thm-formal-exponential-logarithm-identities": { [T]: ["confirmed_nonfatal"] },
  "def-formal-laurent-series-and-residue": { [D]: ["confirmed_nonfatal"] },
  "lem-formal-residue-identities": { [T]: ["confirmed_nonfatal"] },
  "thm-lagrange-burmann-inversion": { [T]: ["confirmed_nonfatal"] },
  "thm-formal-power-laurent-dictionary": { [T]: ["confirmed_nonfatal"] },
  "ex-negative-binomial-series": { [T]: ["confirmed_nonfatal"] },
  "ex-formal-square-root-one-minus-four-x": { [T]: ["confirmed_nonfatal"] },
  "ex-lagrange-inversion-catalan-coefficients": { [T]: ["confirmed_nonfatal"] },
  "ex-reversion-of-x-over-one-minus-x": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "cex-nonsummable-constant-family": { [T]: ["confirmed_nonfatal"] },
  "ex-formal-series-over-zmod-four": { [T]: ["confirmed_nonfatal"] },

  // ---- batch 3: extremal graph theory ----
  "def-extremal-number-turan-graph-and-blowup": { [T]: ["confirmed_nonfatal"], [D]: ["false_positive"] },
  "lem-turan-graph-edge-count-and-balance": { [D]: ["confirmed_nonfatal"] },
  "thm-turan-exact-and-unique": { [T]: ["confirmed_nonfatal"] },
  "prop-normalized-extremal-number-monotonicity": { [T]: ["confirmed_nonfatal"] },
  "thm-turan-density-exists": { [T]: ["confirmed_nonfatal"] },
  "thm-extremal-graph-supersaturation": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_fatal", "logic"] },
  "def-zarankiewicz-number": { [T]: ["confirmed_nonfatal"] },
  "lem-kst-common-neighbour-double-count": { [T]: ["confirmed_nonfatal"] },
  "thm-kovari-sos-turan-bound": { [D]: ["false_positive"] },
  "def-uniform-hypergraph-and-complete-partite-hypergraph": { [T]: ["confirmed_nonfatal"] },
  "cor-chromatic-number-extremal-density": { [T]: ["confirmed_nonfatal"] },
  "ex-turan-ramsey-colouring-witness": { [D]: ["confirmed_nonfatal"] },
  "ex-five-cycle-k-two-two-free": { [T]: ["confirmed_nonfatal"] },

  // ---- batch 4: the determinant of a linear operator ----
  "lem-alternating-top-forms-are-determined-by-one-ordered-basis": { [T]: ["confirmed_nonfatal"] },
  "thm-operator-determinant-scales-every-alternating-top-form": { [D]: ["confirmed_nonfatal"] },
  "thm-operator-determinant-is-basis-independent": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "cor-operator-determinant-by-row-reduction": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "thm-adjugate-identity-over-a-commutative-ring": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "lem-determinant-rank-one-update-over-a-commutative-ring": { [T]: ["confirmed_nonfatal"] },
  "thm-cramers-rule-over-a-commutative-ring": { [T]: ["confirmed_nonfatal"] },
  "thm-operator-invertible-iff-determinant-nonzero": { [T]: ["false_positive"] },
  "cor-operator-determinant-on-the-general-linear-group": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "thm-operator-adjugate-identity": { [T]: ["confirmed_nonfatal"] },
  "ex-doubling-integers-has-nonunit-determinant": { [T]: ["confirmed_nonfatal"] },

  // ---- batch 4: the integral logarithm ----
  "thm-integral-logarithm-derivative-and-normalisation": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "thm-integral-logarithm-is-a-bijection": { [T]: ["confirmed_nonfatal"] },
  "cor-e-is-the-unique-unit-hyperbolic-area": { [T]: ["confirmed_nonfatal"] },
  "ex-unit-hyperbolic-area-brackets-e": { [T]: ["confirmed_nonfatal"] },

  // ---- batch 5: universal properties and the Yoneda lemma ----
  "thm-hom-assignment-is-a-bifunctor": { [T]: ["confirmed_nonfatal"] },
  "lem-yoneda-evaluation-bijection": { [T]: ["confirmed_nonfatal"] },
  "thm-yoneda-lemma-is-natural-in-both-variables": { [T]: ["confirmed_nonfatal"] },
  "thm-universal-elements-and-universal-factorisations": { [T]: ["confirmed_nonfatal"] },
  "thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism": { [T]: ["confirmed_nonfatal"] },
  "def-universal-arrow-to-and-from-a-functor": { [D]: ["confirmed_nonfatal"] },
  "thm-universal-arrows-are-initial-or-terminal-in-comma-categories": { [T]: ["false_positive"] },
  "ex-set-products-as-representing-objects": { [D]: ["false_positive"] },
  "ex-set-coproducts-as-representing-objects": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "ex-free-group-universal-property-as-a-representation": { [T]: ["false_positive"] },
  "ex-the-one-point-space-represents-the-underlying-set-functor-on-top": { [T]: ["confirmed_nonfatal"] },
  "ex-representable-presheaf-on-a-poset": { [T]: ["confirmed_nonfatal"], [D]: ["confirmed_nonfatal"] },
  "ex-two-singletons-are-canonically-isomorphic-representing-objects": { [T]: ["confirmed_nonfatal"] },
};

const verdicts = readFileSync(REPO + "research/frontier-11-judge.jsonl", "utf8")
  .trim().split("\n").map((line) => JSON.parse(line));
const rejections = verdicts.filter((v) => v.keep === false);

const rows = [];
const unadjudicated = [];
const seen = new Set();
for (const v of rejections) {
  const entry = A[v.id]?.[v.model];
  if (!entry) { unadjudicated.push(v.id + " / " + v.model); continue; }
  seen.add(v.id + " " + v.model);
  const row = {
    id: v.id,
    model: v.model,
    context_sha256: v.context_sha256,
    outcome: entry[0],
    item_sha256: itemContentHash(readFileSync(REPO + "items/" + v.id + ".md", "utf8")),
  };
  if (entry[0] === "confirmed_fatal") row.defect_type = entry[1];
  rows.push(row);
}
const orphaned = [];
for (const [id, byModel] of Object.entries(A))
  for (const model of Object.keys(byModel))
    if (!seen.has(id + " " + model)) orphaned.push(id + " / " + model);

console.log("rejection rows:", rejections.length, " ledger rows:", rows.length);
console.log("unadjudicated rejections:", unadjudicated.length ? "\n  " + unadjudicated.join("\n  ") : "none");
console.log("table entries with no rejection:", orphaned.length ? "\n  " + orphaned.join("\n  ") : "none");
const tally = {};
for (const r of rows) tally[r.outcome] = (tally[r.outcome] ?? 0) + 1;
console.log("tally:", JSON.stringify(tally));
console.log("fatal rows:\n  " + rows.filter((r) => r.outcome === "confirmed_fatal")
  .map((r) => r.id + " [" + r.model + "] " + r.defect_type + " " + r.item_sha256.slice(0, 16)).join("\n  "));

if (!unadjudicated.length && !orphaned.length) {
  writeFileSync(REPO + "research/frontier-11-judge-adjudications.jsonl",
    rows.map((r) => JSON.stringify(r)).join("\n") + "\n");
  console.log("\nWROTE research/frontier-11-judge-adjudications.jsonl");
} else {
  console.log("\nNOT WRITTEN — resolve the mismatches above first.");
}
