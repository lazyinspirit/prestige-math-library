# Step 4 batch reviewer — batch **28**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **28**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["28"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 28 | `global-ode-and-density-error` | A | picard-lindelof-and-first-order-odes, one-step-ode-consistency-and-local-error, product-measures-and-the-fubini-tonelli-theorems, euclidean-ordinary-differential-equations-with-smooth-dependence |
| 28 | `global-ode-and-density-error-examples` | B | global-ode-and-density-error |

## Your content, in full

### `global-ode-and-density-error` — Global ODE and Log-density Integration Error

- `lem-discrete-one-step-error-recurrence-bound` · lemma — Finite geometric error bound from a one-step recurrence
- `thm-continuous-flow-log-density-equation` · theorem — A continuous flow changes log density by minus its divergence
- `thm-global-error-from-one-step-defect-and-stability` · theorem — Global error from uniform one-step defect and stability
- `thm-divergence-integral-error-with-separate-quadrature` · theorem — Global divergence-integral error separates state and quadrature error
- `cor-global-log-density-error-from-state-and-quadrature` · corollary — Global continuous-flow log-density error from state and quadrature bounds
- `thm-euler-global-state-and-log-density-error` · theorem — Euler global state and log-density error on a bounded C² tube

### `global-ode-and-density-error-examples` — Global ODE and Log-density Integration Error — Examples

- `ex-euler-linear-flow-exact-log-density-update` · example — Euler has state error but exact log-density quadrature for a linear flow
- `ex-exact-state-with-inexact-log-density-quadrature` · example — Zero state error can coexist with nonzero log-density quadrature error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `global-ode-and-density-error` requires `one-step-ode-consistency-and-local-error`
- `runge-kutta-methods-and-order` requires `global-ode-and-density-error`
- `delay-differential-equations-and-history-discretization` requires `global-ode-and-density-error`
- `finite-generator-master-equations-and-uniformization` requires `global-ode-and-density-error`
- `implicit-stiff-time-stepping-and-algebraic-error` requires `global-ode-and-density-error`
- `positive-conservative-production-destruction-integrators` requires `global-ode-and-density-error`
- `renewal-age-and-size-structured-numerical-methods` requires `global-ode-and-density-error`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `global-ode-and-density-error`
- `exponential-and-integrating-factor-integrators` requires `global-ode-and-density-error`
- `deferred-correction-and-collocation-iterations` requires `global-ode-and-density-error`
- `imex-and-operator-splitting-methods` requires `global-ode-and-density-error`
- `multirate-and-partitioned-time-integration` requires `global-ode-and-density-error`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `global-ode-and-density-error`
- `interacting-particle-mean-field-and-vortex-blob-error` requires `global-ode-and-density-error`
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
