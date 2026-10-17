# Step 3a reader report — batch 4

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `4`

## Opened inventory

### Assigned pages

- A page `polynomial-interpolation-and-remainder` at `library/numerical-linear-algebra-and-approximation/polynomial-interpolation-and-remainder.md`.
- B page `polynomial-interpolation-and-remainder-examples` at `library/numerical-linear-algebra-and-approximation/polynomial-interpolation-and-remainder-examples.md`.

The A-page prerequisite pages were also opened: `darboux-lhopital-and-taylor`, `fundamental-trigonometric-identities`, `the-derivative-and-mean-value-theorems`, `matrix-norms-condition-numbers-and-numerical-stability`, and `chains-antichains-sperner-and-dilworth`. The B-page prerequisite `approximation-and-compactness-in-ck` was opened at `library/real-analysis/approximation-and-compactness-in-ck.md`.

### Assigned items

All 17 manifest items were opened and reviewed:

- Dependency level 0: `lem-finite-coefficient-vector-has-polynomial-representative`, `lem-finite-double-sum-interchange`, `lem-finite-product-of-nonzero-reals-is-nonzero`, `lem-polynomial-highest-derivative`, `lem-product-of-linear-factors-is-monic-polynomial`.
- Dependency level 1: `def-cardinal-polynomial-interpolation`, `lem-finite-product-of-quotients`.
- Dependency level 2: `lem-cardinal-basis-degree-and-values`, `prop-equispaced-interpolation-basis-growth`.
- Dependency level 3: `thm-cardinal-polynomial-interpolant-exists-uniquely`, `ex-equispaced-cardinal-basis-growth`.
- Dependency level 4: `thm-barycentric-interpolation-identities`, `thm-lagrange-interpolation-remainder`, `ex-quadratic-interpolation-at-three-nodes`.
- Dependency level 5: `alg-finite-barycentric-interpolation-evaluator`, `ex-cubic-interpolation-pointwise-remainder`.
- Dependency level 6: `prop-finite-barycentric-interpolation-evaluator-returns-status`.

### Mathematical suppliers opened

The exact cited statements and relevant proof sections were opened for `def-real-polynomial-degree-leading-coefficient-and-monic`, `def-integer-power`, `def-finite-sum`, `lem-finite-sum-laws`, `thm-induction-principle`, `thm-reals-field`, `lem-of-zero-mult`, `def-field`, `lem-of-no-zero-divisors`, `def-higher-derivatives-and-smoothness`, `lem-derivative-of-a-power`, `def-canonical-natural`, `def-factorial-and-falling-factorial`, `lem-nat-finite-sum-laws-and-the-canonical-embedding`, `lem-power-laws`, `thm-reals-ordered-field`, `lem-of-inverse-unique`, `def-binomial-coefficient`, `thm-binomial-closed-formula`, `lem-binomial-coefficients-symmetric-and-unimodal`, `thm-binomial-theorem-over-a-commutative-ring`, `lem-field-is-a-commutative-ring`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `lem-higher-order-rolle`, `thm-algebra-of-derivatives`, `thm-algebra-of-continuous-functions`, `def-standard-relative-floating-point-model-and-unit-roundoff`, and `cor-weierstrass-approximation-on-a-closed-interval`.

The batch manifest, coverage and cross-batch records, notes, and the relevant proof-contract rows were consulted as evidence only. The authored claims and current proofs determined the review.

## Repairs

1. In `thm-barycentric-interpolation-identities`, step 1.1 said the product-of-quotients identity followed from splitting the node polynomial, without justifying how the product of individual quotients becomes the quotient of products. The proof now uses the product-multiplicativity law in `lem-finite-sum-laws`, verifies that the product of the reciprocal denominator factors is the inverse of their product (also for the empty list), and then cancels the nonzero query factor. Fact F4 and the proof-contract derivation were updated. This establishes the step directly from the cited field and finite-product laws without changing the dependency list.

2. In `alg-finite-barycentric-interpolation-evaluator`, the input paragraph required arrays of exactly length `n+1`, while Procedure step 1 specified invalid-input returns for other lengths. The input is now finite real candidate arrays with intended length `n+1`, which the procedure validates. The invalid-length branches are therefore reachable and the remaining arithmetic still only indexes validated arrays.

3. The definition change required a focused check of its consumer, `prop-finite-barycentric-interpolation-evaluator-returns-status`. Its step 1.1 now follows the actual order: validate the node-array length and entries, then the data-array length and entries plus query. The proof-contract source quote, derivation, and boundary records were updated for the revised input domain and validation order.

No `verification.judge` record was present on the three changed items, so none required removal. No page prose, B-page prose, published content, or item outside batch 4 was edited.

## Unedited defects

None identified. All confirmed defects found in the assigned writable items were repaired; no remaining defect is being routed as an uneditable finding.

## Page verdicts

- `polynomial-interpolation-and-remainder` (A): pass. Its summaries accurately describe the interpolation, barycentric, remainder, finite evaluator, and varying-data amplification claims after the local proof repairs. It does not claim a fixed-function divergence or a floating-point error guarantee.
- `polynomial-interpolation-and-remainder-examples` (B): pass. Its summary matches the three checked examples and correctly distinguishes polynomial density from convergence of this changing-data interpolation sequence.

## Checks and blocker

For each changed item, `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` exited 0 and reported unchanged; `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` exited 0. The barycentric theorem and status proposition each had one proof checked and zero failures; the algorithm had zero proof sections to check and no failures. The final batched `node tools/proof-layout.mjs` run over all three changed item paths reported `3 items, 8 steps, 0 defects`.

No batch-local blocker remains.

## Coverage limits

All assigned items and pages, their page prerequisites, and the exact local suppliers used in the proofs were inspected. The referenced external PDFs were not fetched because the reviewed claims have local proofs and the opened library suppliers resolved the mathematical questions. I did not re-audit every transitive dependency behind each established supplier. The five level-0 items were first opened before their external suppliers; those suppliers were opened before the proof judgments were finalized.
