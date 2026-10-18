# Step 4 batch reviewer — batch **67**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **67**. Step-5 owning group: **w**.
Return `group: "w"` and `batches: ["67"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 67 | `ale-interface-and-partitioned-multiphysics-discretization` | A | energy-stable-incompressible-navier-stokes-discretization, curved-mesh-geometry-and-conservative-mesh-transfer, elasticity-near-incompressibility-and-locking-free-discretization, imex-and-operator-splitting-methods |
| 67 | `ale-interface-and-partitioned-multiphysics-discretization-examples` | B | ale-interface-and-partitioned-multiphysics-discretization |

## Your content, in full

### `ale-interface-and-partitioned-multiphysics-discretization` — ALE, interfaces and partitioned multiphysics coupling

- `cor-ale-exact-splitting-residual-orders` · corollary — Conditional finite-dimensional Lie and Strang splitting residual orders
- `def-ale-linear-diffusion-transmission-model` · definition — Finite-dimensional backward-Euler diffusion transmission model
- `def-ale-moving-domain-map` · definition — ALE moving-domain map and mesh velocity
- `def-ale-periodic-moving-grid` · definition — Periodic one-dimensional moving grid
- `def-ale-toy-added-mass-recurrence` · definition — Scalar added-mass staggered recurrence
- `alg-ale-upwind-finite-volume-step` · algorithm — Conservative upwind ALE finite-volume step
- `lem-ale-jacobi-geometric-conservation-identity` · lemma — Jacobi identity for the ALE mesh Jacobian
- `lem-ale-periodic-face-motion-satisfies-discrete-gcl` · lemma — Moving faces satisfy the one-dimensional discrete GCL
- `lem-ale-schur-complement-positive-and-minimizes-energy` · lemma — The diffusion Schur complement is positive and minimizes energy
- `thm-ale-monolithic-backward-euler-energy-identity` · theorem — Monolithic backward Euler transmission energy identity
- `alg-ale-robin-robin-partitioned-iteration` · algorithm — Finite-budget Robin-Robin transmission iteration
- `lem-ale-schur-residual-controls-interface-energy-error` · lemma — Schur residual controls trace and reconstruction energy error
- `thm-ale-one-dimensional-reynolds-transport-identity` · theorem — Choice-free one-dimensional ALE Reynolds transport identity
- `thm-ale-reynolds-transport-identity` · theorem — Reynolds transport identity on an ALE moving domain
- `thm-ale-upwind-step-conserves-mass-and-preserves-free-stream` · theorem — The upwind ALE step conserves mass and preserves constants
- `thm-ale-robin-robin-iteration-contracts-and-certifies-stop` · theorem — Robin-Robin iteration contracts to the monolithic trace
- `thm-ale-upwind-step-monotone-and-l1-contracting-under-cfl` · theorem — CFL monotonicity and weighted L1 contraction for the ALE step

### `ale-interface-and-partitioned-multiphysics-discretization-examples` — ALE, interfaces and partitioned multiphysics coupling — Examples

- `ex-ale-added-mass-toy-recurrence-instability` · example — A toy sequential coupling can amplify velocity error
- `ex-ale-expanding-mesh-free-stream` · example — An expanding cell preserves a constant state
- `ex-ale-two-domain-heat-interface-flux-balance` · example — A two-domain heat trace balances outward fluxes

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `ale-interface-and-partitioned-multiphysics-discretization` requires `energy-stable-incompressible-navier-stokes-discretization`
- `ale-interface-and-partitioned-multiphysics-discretization` requires `curved-mesh-geometry-and-conservative-mesh-transfer`
- `ale-interface-and-partitioned-multiphysics-discretization` requires `elasticity-near-incompressibility-and-locking-free-discretization`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
