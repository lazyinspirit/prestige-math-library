# Step 4 batch reviewer — batch **1**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **1**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["1"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 1 | `finite-precision-direct-factorizations` | A | direct-matrix-factorisations-lu-cholesky-and-qr, matrix-norms-condition-numbers-and-numerical-stability, the-moore-penrose-pseudoinverse-and-regularised-least-squares, the-spectral-theorem-and-singular-value-decomposition, hilbert-space-geometry-and-riesz-representation |
| 1 | `finite-precision-direct-factorizations-examples` | B | finite-precision-direct-factorizations |

## Your content, in full

### `finite-precision-direct-factorizations` — Finite-precision direct factorizations and least squares

- `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` · definition — Operationwise real and complex floating point arithmetic with rounded square roots and fused multiply-add
- `alg-balanced-pairwise-summation` · algorithm — Balanced pairwise summation with range-failure status
- `alg-two-sum-error-free-transform` · algorithm — TwoSum error-free transformation
- `alg-two-product-fma-error-free-transform` · algorithm — TwoProduct product and residual computation using fused multiply-add
- `alg-kahan-compensated-summation` · algorithm — Kahan compensated summation with range-failure status
- `alg-neumaier-compensated-summation` · algorithm — Neumaier compensated summation with range-failure status
- `alg-rounded-cholesky-with-failure-status` · algorithm — Failure-aware rounded Cholesky factorization
- `alg-scaled-householder-reflector-formation-and-application` · algorithm — Scaled Householder reflector formation and application
- `lem-scaled-real-householder-step-termination-and-status` · lemma — The scaled real-column Householder procedure terminates with defined statuses
- `alg-bounded-mixed-precision-iterative-refinement` · algorithm — Bounded mixed-precision iterative refinement
- `thm-balanced-pairwise-summation-error-bound` · theorem — Balanced pairwise summation has a depth-dependent error bound
- `lem-binary-rounding-grid-and-ordered-two-sum` · lemma — Binary rounding grids, exact subtraction, and ordered TwoSum
- `thm-two-sum-error-free-transform` · theorem — TwoSum returns the exact rounding error of a floating point sum
- `thm-two-product-fma-error-free-transform` · theorem — TwoProduct with fused multiply-add returns the exact product residual
- `thm-kahan-and-neumaier-finite-error-identities` · theorem — Kahan and Neumaier summation satisfy explicit finite data-dependent error bounds
- `thm-rounded-cholesky-componentwise-and-normwise-backward-error` · theorem — A successful rounded Cholesky factorization has componentwise and normwise backward error bounds
- `lem-scaled-householder-step-meets-local-backward-error-premise` · lemma — The scaled computed Householder step satisfies the local backward error premise
- `thm-mixed-precision-refinement-error-recurrence-and-floor` · theorem — Mixed-precision refinement has an error recurrence and a finite precision floor
- `thm-scaled-householder-qr-backward-stability` · theorem — The scaled Householder QR implementation is backward stable
- `thm-computed-full-rank-least-squares-backward-stability` · theorem — Computed reduced QR least squares is backward stable for full column rank
- `lem-rounded-triangular-substitution-componentwise-backward-error` · lemma — Rounded triangular substitution has a componentwise matrix backward error
- `lem-rounded-linear-and-normal-residual-certificates` · lemma — Rounded matrix products give certified linear and normal-equation residual allowances

### `finite-precision-direct-factorizations-examples` — Finite-precision direct factorizations and least squares — Examples

- `ex-subnormal-and-overflow-range-failure` · example — Subnormal and overflow branches return range failure
- `ex-neumaier-recovers-low-order-term-after-cancellation` · example — Neumaier summation recovers a low order term after cancellation
- `ex-rounded-cholesky-two-by-two-residual` · example — A rounded two by two Cholesky factor and its residual
- `ex-two-sum-recovers-a-rounded-away-low-part` · example — TwoSum recovers a rounded away low part
- `ex-full-rank-least-squares-normal-equations-versus-qr` · example — A full rank least squares problem where rounded normal equations lose the pivot
- `ex-ill-conditioned-design-stability-versus-forward-error` · example — An ill conditioned design with large forward sensitivity

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `finite-precision-direct-factorizations`
- `rosenbrock-and-linearly-implicit-methods` requires `finite-precision-direct-factorizations`
- `positive-conservative-production-destruction-integrators` requires `finite-precision-direct-factorizations`
- `outward-rounded-interval-and-ball-arithmetic` requires `finite-precision-direct-factorizations`
- `computed-fast-transforms-and-convolution` requires `finite-precision-direct-factorizations`
- `sparse-direct-elimination-and-ordering` requires `finite-precision-direct-factorizations`
- `computed-singular-values-and-rank-revealing-factorizations` requires `finite-precision-direct-factorizations`
- `computed-schur-decompositions-and-nonnormal-spectra` requires `finite-precision-direct-factorizations`
- `krylov-methods-and-lanczos-convergence` requires `finite-precision-direct-factorizations`
- `generalized-eigenvalue-pencils-and-qz-methods` requires `finite-precision-direct-factorizations`
- `verified-linear-systems-and-spectral-enclosures` requires `finite-precision-direct-factorizations`
- `matrix-functions-and-scaling-squaring` requires `finite-precision-direct-factorizations`
- `automatic-differentiation-and-computational-graphs` requires `finite-precision-direct-factorizations`
- `numerical-inverse-problems-and-regularization-error` requires `finite-precision-direct-factorizations`
- `revised-simplex-linear-programming-and-certificates` requires `finite-precision-direct-factorizations`
- `barrier-and-primal-dual-interior-point-methods` requires `finite-precision-direct-factorizations`
- `bfgs-and-limited-memory-quasi-newton-methods` requires `finite-precision-direct-factorizations`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `finite-precision-direct-factorizations`
- `gauss-newton-and-levenberg-marquardt-methods` requires `finite-precision-direct-factorizations`
- `sqp-active-set-and-augmented-lagrangian-methods` requires `finite-precision-direct-factorizations`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
