# Step 4 batch reviewer — batch **7**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **7**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["7"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 7 | `one-step-ode-consistency-and-local-error` | A | mixed-partials-taylor-and-extrema, picard-lindelof-and-first-order-odes, the-total-derivative |
| 7 | `one-step-ode-consistency-and-local-error-examples` | B | one-step-ode-consistency-and-local-error |

## Your content, in full

### `one-step-ode-consistency-and-local-error` — One-step ODE Consistency and Local Error

- `def-one-step-ode-method-local-defect-order-and-stability` · definition — One-step ODE methods, local defect, uniform order, and step stability
- `lem-time-along-ode-solution-derivative-bound` · lemma — A vector field along an ODE solution has an explicit derivative bound
- `thm-forward-euler-one-step-consistency-and-local-error` · theorem — Forward Euler has uniform local order one and a one-step Lipschitz bound

### `one-step-ode-consistency-and-local-error-examples` — One-step ODE Consistency and Local Error — Examples

- `ex-explicit-midpoint-local-order-drop-at-nonsmooth-time-kink` · example — A time kink reduces the explicit midpoint local order
- `ex-forward-euler-local-error-for-scalar-linear-ode` · example — Forward Euler on the scalar linear equation $y'=y$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `global-ode-and-density-error` requires `one-step-ode-consistency-and-local-error`
- `runge-kutta-methods-and-order` requires `one-step-ode-consistency-and-local-error`
- `finite-generator-master-equations-and-uniformization` requires `one-step-ode-consistency-and-local-error`
- `adaptive-ode-solvers-and-error-estimation` requires `one-step-ode-consistency-and-local-error`
- `positive-conservative-production-destruction-integrators` requires `one-step-ode-consistency-and-local-error`
- `renewal-age-and-size-structured-numerical-methods` requires `one-step-ode-consistency-and-local-error`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `one-step-ode-consistency-and-local-error`
- `interacting-particle-mean-field-and-vortex-blob-error` requires `one-step-ode-consistency-and-local-error`
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
