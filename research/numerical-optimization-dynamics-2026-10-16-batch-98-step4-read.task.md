# Step 4 batch reviewer — batch **98**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **98**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["98"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 98 | `imex-and-operator-splitting-methods` | A | global-ode-and-density-error, runge-kutta-methods-and-order, implicit-stiff-time-stepping-and-algebraic-error, exponential-and-integrating-factor-integrators |
| 98 | `imex-and-operator-splitting-methods-examples` | B | imex-and-operator-splitting-methods |

## Your content, in full

### `imex-and-operator-splitting-methods` — Imex and operator splitting methods

- `def-additive-ode-and-partition` · definition — Additive autonomous ODE partitions
- `def-dirichlet-sine-mode-heat-splitting-model` · definition — Diagonal Dirichlet sine-mode heat model with constant forcing
- `alg-imex-euler-step` · algorithm — One-step IMEX Euler with an implicit branch and residual status
- `def-exact-split-flows-lie-strang-and-bracket` · definition — Lie and Strang compositions of exact split flows
- `lem-diagonal-heat-semigroup-generator-domain` · lemma — The diagonal heat semigroup has the stated generator domain
- `lem-imex-euler-local-branch` · lemma — A local IMEX Euler branch from contraction
- `def-ars222-additive-tableau-and-stages` · definition — The ARS(2,2,2) additive tableau and its three stages
- `lem-lie-strang-local-error-expansions` · lemma — Lie and Strang splitting errors have commutator expansions
- `lem-dirichlet-forcing-coefficients-exceed-the-generator-domain` · lemma — Constant Dirichlet forcing is square summable but outside the heat-generator domain
- `thm-imex-euler-local-order-and-stability` · theorem — IMEX Euler has a first-order local defect and a one-step stability bound
- `lem-ars222-coefficient-identities` · lemma — The ARS(2,2,2) coefficients satisfy the coupled second-order identities
- `lem-ars222-stage-branch-and-residual-control` · lemma — The two implicit ARS stages have selected branches and residual bounds
- `thm-lie-strang-global-orders-and-subflow-error` · theorem — Lie and Strang splitting have global orders one and two, with separate subflow errors
- `thm-imex-euler-global-order-one` · theorem — IMEX Euler is first-order convergent on a common compact tube
- `thm-imex-euler-algebraic-residual-budget` · theorem — IMEX Euler preserves first-order convergence under per-step residuals of order h squared
- `thm-ars222-additive-order-two-and-tolerance` · theorem — The ARS(2,2,2) pair is second order under distinct stage residual tolerances
- `prop-ars222-bivariate-stability-region` · proposition — The ARS(2,2,2) bivariate scalar stability function

### `imex-and-operator-splitting-methods-examples` — Imex and operator splitting methods — Examples

- `ex-stiff-explicit-partition-is-unstable` · example — An explicitly treated stiff decay mode is unstable for a large step
- `ex-noncommuting-matrices-show-lie-and-strang-orders` · example — Noncommuting two-by-two matrices distinguish Lie and Strang local errors
- `ex-finite-matrix-schrodinger-potential-kinetic-split` · example — A finite-matrix Schrödinger split preserves norm
- `ex-dirichlet-boundary-forcing-strang-order-reduction` · example — Boundary-incompatible forcing reduces Strang order to five quarters in a Dirichlet modal model
- `ex-reaction-diffusion-ars222-mode-amplification` · example — ARS(2,2,2) amplification on a two-cell reaction-diffusion grid

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `imex-and-operator-splitting-methods` requires `global-ode-and-density-error`
- `imex-and-operator-splitting-methods` requires `runge-kutta-methods-and-order`
- `imex-and-operator-splitting-methods` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `imex-and-operator-splitting-methods` requires `exponential-and-integrating-factor-integrators`
- `multirate-and-partitioned-time-integration` requires `imex-and-operator-splitting-methods`
- `langevin-splittings-and-invariant-measure-error` requires `imex-and-operator-splitting-methods`
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
