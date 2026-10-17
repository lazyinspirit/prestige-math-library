# Step 4 batch reviewer — batch **32**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **32**. Step-5 owning group: **x**.
Return `group: "x"` and `batches: ["32"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 32 | `spectral-regularization-and-parameter-choice` | A | the-moore-penrose-pseudoinverse-and-regularised-least-squares, numerical-inverse-problems-and-regularization-error, compact-self-adjoint-hilbert-schmidt-and-trace-class-operators |
| 32 | `spectral-regularization-and-parameter-choice-examples` | B | spectral-regularization-and-parameter-choice |

## Your content, in full

### `spectral-regularization-and-parameter-choice` — Spectral regularization and parameter choice

- `alg-discrete-l-curve-parameter-choice` · algorithm — Discrete maximum-curvature L-curve parameter selection
- `lem-compact-gram-operator-is-positive-and-has-kernel` · lemma — A compact Hilbert-space Gram operator is positive and has the forward kernel
- `lem-compact-spectral-multiplier-is-well-defined` · lemma — Bounded multipliers on compact self-adjoint eigenspaces define bounded operators
- `lem-linear-smoother-gcv-expression` · lemma — The ridge leave-one-out identity yields the generalized cross-validation score
- `lem-square-summable-sequences-form-a-hilbert-space` · lemma — The real square-summable sequence space is complete
- `alg-gcv-finite-grid-parameter-choice` · algorithm — Finite-grid generalized cross-validation for Tikhonov regularization
- `def-compact-spectral-filter-and-qualification` · definition — Compact spectral filters, source conditions, and qualification
- `thm-discrete-l-curve-grid-search-is-well-defined` · theorem — The discrete L-curve rule terminates with failure or a maximum-curvature grid point
- `lem-tikhonov-bias-converges-for-minimum-norm-solution` · lemma — Compact-operator Tikhonov bias vanishes on the minimum-norm solution
- `lem-tikhonov-data-residual-continuity-monotonicity-and-limits` · lemma — Compact-operator Tikhonov residuals are continuous and increase from range distance to data norm
- `lem-tikhonov-source-condition-bias-bound` · lemma — Tikhonov has qualification one for source powers of the Gram operator
- `thm-gcv-grid-search-returns-score-minimizer` · theorem — Finite-grid GCV is well-defined and minimizes its supplied score
- `alg-morozov-discrepancy-bracketing-and-bisection` · algorithm — Exact-residual Morozov discrepancy bracketing and bisection
- `thm-tikhonov-convergence-under-noise-parameter-coupling` · theorem — Vanishing Tikhonov bias and controlled noise amplification imply convergence
- `thm-tikhonov-source-condition-rate-and-qualification-saturation` · theorem — Tikhonov source-condition rates balance noise at qualification one
- `thm-morozov-discrepancy-choice-converges` · theorem — Morozov discrepancy roots exist and converge for nonzero exact data
- `thm-tikhonov-forward-discretization-and-stopping-coupling` · theorem — Forward discretization enters before inversion and controls the Tikhonov parameter coupling

### `spectral-regularization-and-parameter-choice-examples` — Spectral regularization and parameter choice — Examples

- `ex-gcv-under-smoothing-tie-on-one-observation` · example — A one-observation GCV tie can select severe undersmoothing
- `ex-compact-diagonal-tikhonov-bias-noise-and-source-saturation` · example — A compact diagonal model displays the Tikhonov bias-noise balance
- `ex-morozov-noise-level-underestimate-prevents-crossing` · example — Underestimated noise can put the Morozov target below every residual

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `spectral-regularization-and-parameter-choice` requires `numerical-inverse-problems-and-regularization-error`
- `iterative-regularization-and-early-stopping` requires `spectral-regularization-and-parameter-choice`
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
