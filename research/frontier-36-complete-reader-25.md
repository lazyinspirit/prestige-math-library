# Step 5a reader report — batch 25

Run: `frontier-36-complete`  
Role: reader  
Manifest: `research/frontier-36-complete-batch-25.pages.json`

## Opened inventory

Read both manifest-assigned pages:

- A page: `library/representation-theory/symmetric-functions-hall-inner-product-and-schur-bases.md`
- B page: `library/representation-theory/symmetric-functions-hall-inner-product-and-schur-bases-examples.md`

Read all 16 A-page items:

- `def-stable-graded-ring-of-symmetric-functions`
- `def-skew-diagram-and-semistandard-skew-tableau`
- `thm-monomial-symmetric-functions-form-the-integral-stable-basis`
- `def-stable-schur-function-by-bialternants`
- `def-bidegree-completed-symmetric-function-tensor-product`
- `thm-elementary-and-complete-families-freely-generate-the-stable-ring`
- `thm-jacobi-trudi-and-dual-jacobi-trudi-identities`
- `prop-power-sums-form-a-rational-not-integral-stable-basis`
- `def-hall-inner-product-on-symmetric-functions`
- `prop-omega-conjugates-schur-functions`
- `thm-cauchy-kernel-has-power-complete-and-schur-expansions`
- `cor-power-sums-are-orthogonal-for-the-hall-inner-product`
- `thm-schur-functions-form-an-orthonormal-integral-basis`
- `def-skew-schur-function-by-hall-adjointness`
- `thm-skew-jacobi-trudi-and-tableau-expansion`
- `lem-kostka-change-of-basis-is-dominance-unitriangular`

Read all 5 B-page items:

- `cex-power-sums-do-not-form-an-integral-basis`
- `ex-degree-three-stable-symmetric-function-bases`
- `ex-cauchy-kernel-through-total-degree-three`
- `cex-a-nonzero-stable-schur-function-can-vanish-in-too-few-variables`
- `ex-a-disconnected-skew-schur-function-factors`

Opened the published prerequisite items needed to check the assigned claims:

- `def-symmetric-polynomial`
- `def-partition-young-diagram-and-conjugate-partition`
- `def-semistandard-tableau-and-kostka-number`
- `def-monomial-symmetric-polynomials`
- `thm-monomial-symmetric-polynomials-form-a-basis`
- `def-elementary-symmetric-polynomials`
- `def-power-sum-and-complete-homogeneous-symmetric-polynomials`
- `def-dominance-order-on-partitions`
- `prop-elementary-and-complete-generating-series-identity`

## Review and edits

The stable inverse-limit constructions, monomial and elementary/complete bases, Newton recurrence and rational power-sum basis, Jacobi–Trudi identities, Cauchy expansions, Hall duality, Schur orthonormality, skew Schur definitions and expansions, and Kostka unitriangularity all check. The finite degree-two/degree-three computations, the low-rank specialization witness, the Cauchy contraction, and the disconnected-skew example also check.

Two local repairs were made:

1. In `items/def-skew-diagram-and-semistandard-skew-tableau.md`, corrected the Macdonald locator from Chapter I §5 to Chapter I §1, printed pp. 4–5. The cited PDF's §1 gives the skew diagram as a set difference, defines connected components by side-adjacency, states the horizontal-strip condition, and describes the row-weak/column-strict tableau convention (PDF pp. 14–15, https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf). This fixes a citation-inaccurate locator. The claim and dependency interface did not change. Its proof contract has no citation or derivation entries, so no contract content was affected; the item has no `verification.judge` record. Reflow reported unchanged; precheck reported `0 checked, 0 failing`.

2. In `items/ex-degree-three-stable-symmetric-function-bases.md`, corrected `$Lambda^3$` to `\Lambda^3`. Reflow normalized paragraph wrapping without changing the mathematics. Its proof contract's facts and derivations remain applicable, and the item has no `verification.judge` record. Reflow completed; precheck passed (`1 checked, 0 failing`).

No other assigned item or page required repair. There are no remaining mathematical or citation defects that I could not edit within the authorized scope.

## Page verdicts

- **A page — pass with the locator repair above.** Its summary matches the assigned items and their conclusions.
- **B page — pass.** Its summary matches the five assigned examples and counterexamples; no page-prose repair was needed.

## Blocker and coverage limitation

The requested live-state check, `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run frontier-36-complete --state-dir .autopilot/frontier-36-complete`, could not recompute a current run status. It reported: “Workflow revision differs: use a fresh run and state directory. Historical receipts cannot be adopted under new stage numbering,” followed by “no run configured and no status.md yet; pass --run.” The recent Git history was checked; it does not resolve that state mismatch. This prevents verifying that the assigned run is currently live, but did not prevent the independent content audit. No workflow transition, judgment, stamp, or self-certification was attempted.

The assigned pages, all assigned items, and the listed published prerequisites used in their arguments were opened. Macdonald's cited PDF was checked for the relevant symmetric-function statements and the corrected skew-tableau locator. I did not independently verify every secondary bibliography URL; no mathematical conclusion here depends on an unchecked secondary reference.
