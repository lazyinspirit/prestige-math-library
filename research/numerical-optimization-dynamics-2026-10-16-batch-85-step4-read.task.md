# Step 4 batch reviewer — batch **85**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **85**. Step-5 owning group: **ac**.
Return `group: "ac"` and `batches: ["85"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 85 | `sqp-active-set-and-augmented-lagrangian-methods` | A | finite-precision-direct-factorizations, inequality-kkt-duality-and-optimality-certificates, nonconvex-line-search-and-inexact-newton-methods, bfgs-and-limited-memory-quasi-newton-methods |
| 85 | `sqp-active-set-and-augmented-lagrangian-methods-examples` | B | sqp-active-set-and-augmented-lagrangian-methods |

## Your content, in full

### `sqp-active-set-and-augmented-lagrangian-methods` — Sqp active set and augmented lagrangian methods

- `def-sqp-linearized-quadratic-subproblem` · definition — The linearized quadratic subproblem in sequential quadratic programming
- `def-sqp-augmented-lagrangian-equality-and-inequality` · definition — Equality and inequality augmented Lagrangians and multiplier updates
- `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature` · lemma — The SQP KKT matrix is nonsingular under positive reduced curvature
- `def-sqp-l1-exact-penalty-merit` · definition — L1 exact-penalty merit and predicted decrease for SQP
- `alg-sqp-augmented-lagrangian-multiplier-method` · algorithm — Finite-budget augmented-Lagrangian multiplier method
- `lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate` · lemma — A feasible strictly convex linear-constrained QP has a unique KKT minimizer with independent active support
- `alg-sqp-exhaustive-active-set-qp-solve` · algorithm — Exact exhaustive active-set solve for the SQP quadratic subproblem
- `alg-sqp-feasible-working-set-qp-solve` · algorithm — Feasible active-set QP solve with blocking constraints and a finite cap
- `alg-sqp-second-order-correction` · algorithm — Minimum-norm second-order correction for identified active constraints
- `alg-sqp-exact-hessian-newton-step` · algorithm — Full-step exact-Hessian SQP after active-set identification
- `alg-sqp-reduced-bfgs-kkt-step` · algorithm — Reduced-BFGS SQP KKT step with projected Hessian error
- `alg-sqp-merit-globalization-with-finite-budgets` · algorithm — L1 merit globalization with finite penalty and backtracking budgets
- `thm-sqp-exhaustive-active-set-qp-solve-correct-finite` · theorem — The exhaustive active-set QP solve terminates with the unique minimizer exactly when feasible
- `thm-sqp-working-set-qp-terminates-under-nondegeneracy-anticycling` · theorem — A feasible working-set QP solve terminates under nondegenerate steps
- `thm-sqp-second-order-correction-residual-order` · theorem — Second-order correction reduces the active constraint residual to cubic order
- `thm-sqp-exact-hessian-local-quadratic-convergence` · theorem — Exact-Hessian SQP converges quadratically on the identified active KKT system
- `thm-sqp-reduced-bfgs-superlinear-under-dm` · theorem — Reduced-BFGS SQP is locally superlinear under reduced Dennis-More and inverse bounds
- `thm-sqp-augmented-lagrangian-local-convergence` · theorem — Augmented-Lagrangian multipliers converge locally with summable inner residuals
- `alg-sqp-finite-precision-kkt-qr-solve-and-residual-check` · algorithm — Finite-precision reduced-QR KKT solve with certified residual status
- `thm-sqp-merit-globalization-finite-budget-status` · theorem — Finite merit-globalization budgets return a defined status
- `thm-sqp-finite-precision-kkt-residual-certificate-sound` · theorem — The computed KKT residual certificate bounds the exact linear-system residual

### `sqp-active-set-and-augmented-lagrangian-methods-examples` — Sqp active set and augmented lagrangian methods — Examples

- `ex-sqp-engineering-design-active-inequality` · example — Two-component design with an active demand constraint
- `ex-sqp-maratos-effect-and-second-order-correction` · example — A full SQP step is rejected by the L1 merit test and repaired by SOC
- `ex-sqp-augmented-lagrangian-penalty-conditioning` · example — A quadratic equality model shows the AL conditioning tradeoff

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `sqp-active-set-and-augmented-lagrangian-methods` requires `finite-precision-direct-factorizations`
- `sqp-active-set-and-augmented-lagrangian-methods` requires `inequality-kkt-duality-and-optimality-certificates`
- `sqp-active-set-and-augmented-lagrangian-methods` requires `nonconvex-line-search-and-inexact-newton-methods`
- `sqp-active-set-and-augmented-lagrangian-methods` requires `bfgs-and-limited-memory-quasi-newton-methods`
- `direct-transcription-and-numerical-ode-optimal-control` requires `sqp-active-set-and-augmented-lagrangian-methods`
- `finite-element-pde-constrained-optimization` requires `sqp-active-set-and-augmented-lagrangian-methods`
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
