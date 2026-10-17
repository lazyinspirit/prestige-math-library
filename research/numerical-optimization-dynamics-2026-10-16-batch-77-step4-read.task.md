# Step 4 batch reviewer — batch **77**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **77**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["77"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 77 | `parallel-in-time-parareal-and-mgrit` | A | runge-kutta-methods-and-order, implicit-stiff-time-stepping-and-algebraic-error |
| 77 | `parallel-in-time-parareal-and-mgrit-examples` | B | parallel-in-time-parareal-and-mgrit |

## Your content, in full

### `parallel-in-time-parareal-and-mgrit` — Parallel in time parareal and mgrit

- `def-parareal-propagator-pair` · definition — Fine and coarse propagators on a common macro grid
- `alg-parareal-correction-sweeps` · algorithm — Finite-budget Parareal correction sweeps
- `def-linear-all-at-once-time-operator` · definition — The all-at-once bidiagonal time operator and C/F points
- `lem-parareal-first-k-nodes-are-fine-exact` · lemma — Parareal reproduces the first k fine-grid nodes after k sweeps
- `thm-parareal-binomial-error-bound` · theorem — A conditional binomial error bound for Parareal
- `lem-mgrit-exact-coarse-elimination` · lemma — Eliminating F-points gives the exact coarse time operator
- `thm-parareal-inexact-sweep-error-ledger` · theorem — An additive error ledger for inexact Parareal sweeps
- `alg-mgrit-two-level-cycle` · algorithm — A declared two-level MGRIT coarse-correction cycle
- `cor-parareal-continuous-target-error-decomposition` · corollary — Separate Parareal iteration error from fine-method error
- `thm-mgrit-contraction-implies-residual-and-error-decay` · theorem — A verified MGRIT error-matrix contraction controls error and residual
- `alg-mgrit-multilevel-recursive-cycle` · algorithm — Recursive multilevel MGRIT cycles
- `lem-parareal-sweep-work-and-span` · lemma — Work and idealized span of completed Parareal sweeps
- `lem-mgrit-two-level-call-counts` · lemma — Propagator call counts for the two-level MGRIT cycle
- `lem-mgrit-recursive-work-and-visits` · lemma — Finite recursion and work accounting for multilevel MGRIT

### `parallel-in-time-parareal-and-mgrit-examples` — Parallel in time parareal and mgrit — Examples

- `ex-parareal-dissipative-scalar-heat-mode` · example — A dissipative scalar heat mode with Parareal correction
- `ex-parareal-oscillatory-coarse-phase-error` · example — A coarse phase mismatch can increase the Parareal error
- `ex-parareal-nonlinear-tube-escape` · example — A nonlinear Parareal iterate can leave its local Lipschitz tube
- `ex-mgrit-scalar-diffusion-two-grid-contraction` · example — A scalar diffusion mode gives an explicit two-grid MGRIT matrix

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `parallel-in-time-parareal-and-mgrit` requires `runge-kutta-methods-and-order`
- `parallel-in-time-parareal-and-mgrit` requires `implicit-stiff-time-stepping-and-algebraic-error`
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
