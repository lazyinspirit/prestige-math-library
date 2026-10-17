# Step 4 batch reviewer — batch **41**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **41**. Step-5 owning group: **y**.
Return `group: "y"` and `batches: ["41"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 41 | `coordinate-and-block-descent-methods` | A | sparse-high-dimensional-estimation-and-covariance, proximal-gradient-and-accelerated-composite-optimization |
| 41 | `coordinate-and-block-descent-methods-examples` | B | coordinate-and-block-descent-methods |

## Your content, in full

### `coordinate-and-block-descent-methods` — Coordinate and block descent methods

- `alg-randomized-coordinate-gradient-descent` · algorithm — Randomized coordinate gradient descent
- `lem-coordinate-block-smoothness-descent-model` · lemma — Coordinate-block smoothness descent model
- `lem-na-coordinate-soft-threshold-minimizer` · lemma — The one-coordinate absolute-value quadratic minimizer
- `alg-cyclic-exact-block-minimization` · algorithm — Cyclic exact block minimization
- `thm-randomized-coordinate-gradient-descent-rates` · theorem — Rates for randomized coordinate gradient descent and importance sampling
- `lem-cyclic-block-minimizer-value-continuity` · lemma — Continuity of the cyclic block-minimum value
- `cex-cyclic-block-descent-may-cycle-outside-hypotheses` · counterexample — Cyclic exact block minimization can cycle outside the convex separable hypotheses
- `lem-coordinate-lasso-soft-threshold-update` · lemma — Exact Lasso coordinate update, including a zero column
- `lem-coordinate-separable-penalty-is-proper-closed-convex` · lemma — Finite separable block penalties are proper, closed, and convex
- `alg-randomized-coordinate-proximal-descent` · algorithm — Randomized proximal coordinate descent with certified inner solves
- `lem-coordinatewise-minimum-implies-composite-stationarity` · lemma — Coordinatewise minima of a separable convex composite are global minima
- `lem-randomized-coordinate-prox-subproblem-well-defined` · lemma — Coordinate proximal subproblems are attained uniquely and descend
- `cex-composite-coordinate-proximal-rate-needs-penalty-error` · counterexample — An R-only proximal coordinate rate fails for nonsmooth penalties
- `cex-composite-strong-convexity-alone-does-not-give-coordinate-factor` · counterexample — Strong convexity of the composite alone does not give the stated coordinate factor
- `thm-cyclic-block-descent-stationarity-and-convergence` · theorem — Cyclic exact block descent has globally optimal accumulation points
- `thm-randomized-coordinate-proximal-strongly-convex-contraction` · theorem — Strongly convex smooth-part proximal coordinate contraction
- `thm-randomized-coordinate-proximal-composite-strong-convexity-contraction` · theorem — Proximal coordinate contraction from strong convexity of the composite

### `coordinate-and-block-descent-methods-examples` — Coordinate and block descent methods — Examples

- `ex-nonunique-lasso-coefficients-unique-fitted-value` · example — Nonunique Lasso coefficients with a unique fitted value
- `ex-randomized-versus-cyclic-rank-one-quadratic` · example — Randomized and cyclic updates on a rank-one quadratic
- `ex-two-block-simulation-calibration` · example — A two-block least-squares calibration sweep
- `ex-correlated-design-lasso-coordinate-cycle` · example — One cyclic coordinate-descent cycle for correlated-design Lasso
- `ex-zero-feature-column-lasso-coordinate` · example — The zero-feature-column Lasso update

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `coordinate-and-block-descent-methods` requires `proximal-gradient-and-accelerated-composite-optimization`
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
