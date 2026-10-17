# Step 4 batch reviewer — batch **25**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **25**. Step-5 owning group: **w**.
Return `group: "w"` and `batches: ["25"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 25 | `numerical-inverse-problems-and-regularization-error` | A | direct-matrix-factorisations-lu-cholesky-and-qr, matrix-norms-condition-numbers-and-numerical-stability, the-moore-penrose-pseudoinverse-and-regularised-least-squares, the-spectral-theorem-and-singular-value-decomposition, finite-precision-direct-factorizations, compact-operators-and-riesz-schauder-theory |
| 25 | `numerical-inverse-problems-and-regularization-error-examples` | B | numerical-inverse-problems-and-regularization-error |

## Your content, in full

### `numerical-inverse-problems-and-regularization-error` — Numerical inverse problems and regularization error

- `lem-hilbert-tikhonov-normal-operator-invertible` · lemma — The shifted Hilbert-space normal operator is invertible with inverse norm at most $1/\lambda$
- `lem-truncated-svd-bias-and-data-noise-decomposition` · lemma — A truncated SVD separates discarded-direction bias from retained data noise
- `lem-hilbert-tikhonov-noise-amplification-bound` · lemma — Hilbert-space Tikhonov amplifies data by at most $1/(2\sqrt{\lambda})$
- `thm-tikhonov-error-chain-with-discretization-and-residual` · theorem — Tikhonov error separates bias, data noise, discretization and solve residual
- `cor-l2-inverse-error-budget-and-cross-term-condition` · corollary — An inverse-error chain obeys Minkowski in $L^2$; root-sum-square is equivalent to aggregate cross-term cancellation
- `lem-computed-augmented-tikhonov-solve-residual-and-output-error` · lemma — Computed augmented Tikhonov solves have certified residual and output-error bounds

### `numerical-inverse-problems-and-regularization-error-examples` — Numerical inverse problems and regularization error — Examples

- `ex-tikhonov-normal-equation-residual-bound` · example — An exact normal-equation residual gives an a posteriori solution bound
- `ex-diagonal-inverse-noise-amplification` · example — A small singular value makes the Tikhonov noise bound sharp
- `ex-tikhonov-bias-noise-tradeoff` · example — Increasing the Tikhonov parameter trades smaller data response for more bias
- `ex-quadrature-discretization-residual-before-inversion` · example — A scalar quadrature residual appears before the regularized inverse

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `numerical-inverse-problems-and-regularization-error` requires `finite-precision-direct-factorizations`
- `spectral-regularization-and-parameter-choice` requires `numerical-inverse-problems-and-regularization-error`
- `iterative-regularization-and-early-stopping` requires `numerical-inverse-problems-and-regularization-error`
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
