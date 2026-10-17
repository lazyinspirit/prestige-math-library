# Step 4 batch reviewer — batch **72**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **72**. Step-5 owning group: **aa**.
Return `group: "aa"` and `batches: ["72"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 72 | `trust-region-and-cubic-regularization-methods` | A | krylov-methods-and-lanczos-convergence, nonconvex-line-search-and-inexact-newton-methods |
| 72 | `trust-region-and-cubic-regularization-methods-examples` | B | trust-region-and-cubic-regularization-methods |

## Your content, in full

### `trust-region-and-cubic-regularization-methods` — Trust region and cubic regularization methods

- `def-trust-region-quadratic-model-and-ratio` · definition — Quadratic trust-region models and the actual-to-predicted reduction ratio
- `def-adaptive-cubic-regularization-model` · definition — The cubic-regularized quadratic model
- `lem-natural-logarithm-bounded-by-argument` · lemma — The natural logarithm is bounded above by its positive argument minus one
- `lem-trust-region-subproblem-optimality-and-hard-case` · lemma — Global trust-region minimizers satisfy the shifted-Hessian conditions, including the hard case
- `alg-trust-region-cauchy-step` · algorithm — The Cauchy step for a quadratic trust-region model
- `lem-positive-definite-model-has-unique-newton-step` · lemma — Positive-definite Newton and dogleg steps are well-defined
- `lem-global-cubic-model-minimizer-decrease` · lemma — Global cubic minimizers, admissible inexact steps, and cubic Cauchy decrease
- `lem-trust-region-cauchy-decrease` · lemma — The Cauchy step gives a quantitative model decrease
- `alg-dogleg-trust-region-step` · algorithm — Dogleg steps for positive-definite trust-region models
- `alg-truncated-cg-trust-region-step` · algorithm — Truncated conjugate gradients with boundary and negative-curvature exits
- `alg-adaptive-cubic-regularization` · algorithm — Finite-budget adaptive regularization using cubic models
- `lem-truncated-cg-iterates-are-krylov-vectors` · lemma — Truncated-CG iterates are feasible and lie in generated Krylov subspaces
- `alg-trust-region-method` · algorithm — A finite-budget trust-region method with ratio-based radius updates
- `lem-trust-region-ratio-accuracy-for-small-radii` · lemma — The actual-to-predicted ratio approaches one at small radii away from stationarity
- `lem-adaptive-cubic-unsuccessful-iteration-count` · lemma — Cubic regularization bounds consecutive unsuccessful trials
- `thm-trust-region-global-liminf-gradient` · theorem — Cauchy-decrease trust-region iterations have liminf gradient norm zero
- `thm-trust-region-epsilon-iteration-complexity` · theorem — Trust-region first-order complexity counts both successful and unsuccessful trials
- `thm-adaptive-cubic-regularization-epsilon-complexity` · theorem — Adaptive cubic regularization reaches first-order accuracy in O(ε⁻³ᐟ²) evaluations

### `trust-region-and-cubic-regularization-methods-examples` — Trust region and cubic regularization methods — Examples

- `ex-indefinite-trust-region-boundary-minimizer` · example — An indefinite quadratic has a unique boundary trust-region minimizer
- `ex-trust-region-singular-hard-case` · example — A singular shifted Hessian produces two hard-case minimizers
- `ex-trust-region-newton-cauchy-truncated-cg` · example — Newton, Cauchy, and truncated-CG steps on one indefinite model

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `trust-region-and-cubic-regularization-methods` requires `krylov-methods-and-lanczos-convergence`
- `trust-region-and-cubic-regularization-methods` requires `nonconvex-line-search-and-inexact-newton-methods`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `trust-region-and-cubic-regularization-methods`
- `gauss-newton-and-levenberg-marquardt-methods` requires `trust-region-and-cubic-regularization-methods`
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `trust-region-and-cubic-regularization-methods`
- `finite-basis-projector-energies-and-variational-electronic-structure` requires `trust-region-and-cubic-regularization-methods`
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
