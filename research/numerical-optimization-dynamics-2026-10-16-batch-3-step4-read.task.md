# Step 4 batch reviewer — batch **3**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **3**. Step-5 owning group: **u**.
Return `group: "u"` and `batches: ["3"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 3 | `nonlinear-equations-and-newton-methods` | A | completeness-and-uniform-continuity, inverse-and-implicit-function-theorems, mixed-partials-taylor-and-extrema, picard-lindelof-and-first-order-odes, numerical-optimization-for-statistical-computation |
| 3 | `nonlinear-equations-and-newton-methods-examples` | B | nonlinear-equations-and-newton-methods |

## Your content, in full

### `nonlinear-equations-and-newton-methods` — Nonlinear equations and Newton methods

- `alg-fixed-point-iteration` · algorithm — Fixed-point iteration with a residual stop and finite budget
- `lem-finite-budget-fixed-point-iteration-work` · lemma — Finite-budget fixed-point iteration returns a status in bounded outer work
- `alg-newton-correction-for-vector-residuals` · algorithm — Newton correction for a square vector residual
- `alg-forward-difference-jacobian` · algorithm — Forward-difference Jacobian on an open domain
- `lem-vector-newton-correction-error-under-lipschitz-jacobian` · lemma — Vector Newton remainder under a Lipschitz Jacobian
- `lem-forward-difference-jacobian-error-bound` · lemma — Forward-difference Jacobian error bound
- `alg-finite-budget-newton-for-vector-residuals` · algorithm — Finite-budget Newton for a square vector residual
- `lem-finite-budget-newton-work-and-status` · lemma — Finite-budget Newton preserves its domain and returns a status in bounded outer work
- `alg-damped-newton-for-vector-residuals` · algorithm — Finite-budget residual-merit damped Newton
- `alg-finite-difference-newton-for-vector-residuals` · algorithm — Finite-budget forward-difference Newton for a square vector residual
- `thm-updated-jacobian-newton-local-quadratic-convergence` · theorem — Updated-Jacobian Newton has local quadratic convergence at a simple root
- `thm-damped-newton-vector-residual-accepted-merit-decrease` · theorem — An accepted damped Newton step strictly decreases the residual merit

### `nonlinear-equations-and-newton-methods-examples` — Nonlinear equations and Newton methods — Examples

- `ex-nonlinear-equations-and-newton-methods-boundary-cases` · example — Fixed points, local Newton behavior, and failure boundaries

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `nonlinear-boundary-value-solvers` requires `nonlinear-equations-and-newton-methods`
- `pseudo-arclength-continuation-and-fold-certificates` requires `nonlinear-equations-and-newton-methods`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `nonlinear-equations-and-newton-methods`
- `implicit-stiff-time-stepping-and-algebraic-error` requires `nonlinear-equations-and-newton-methods`
- `rosenbrock-and-linearly-implicit-methods` requires `nonlinear-equations-and-newton-methods`
- `differential-algebraic-equations-and-consistent-initialization` requires `nonlinear-equations-and-newton-methods`
- `interval-newton-krawczyk-and-polynomial-root-isolation` requires `nonlinear-equations-and-newton-methods`
- `numerical-differentiation-and-derivative-error-control` requires `nonlinear-equations-and-newton-methods`
- `numerical-optimization-globalization-and-inexact-certificates` requires `nonlinear-equations-and-newton-methods`
- `nonconvex-line-search-and-inexact-newton-methods` requires `nonlinear-equations-and-newton-methods`
- `global-optimization-and-certified-branch-and-bound` requires `nonlinear-equations-and-newton-methods`
- `gauss-newton-and-levenberg-marquardt-methods` requires `nonlinear-equations-and-newton-methods`
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `nonlinear-equations-and-newton-methods`
- `self-consistent-projector-iterations-and-certified-mixing` requires `nonlinear-equations-and-newton-methods`
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
