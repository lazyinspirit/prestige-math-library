# Step 4 batch reviewer — batch **35**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **35**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["35"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 35 | `elasticity-near-incompressibility-and-locking-free-discretization` | A | ceas-lemma-and-aubin-nitsche-error-estimates, mixed-finite-elements-and-stokes-stability |
| 35 | `elasticity-near-incompressibility-and-locking-free-discretization-examples` | B | elasticity-near-incompressibility-and-locking-free-discretization |

## Your content, in full

### `elasticity-near-incompressibility-and-locking-free-discretization` — Linear elasticity, nearly incompressible limits and locking

- `alg-linear-elasticity-rigid-body-nullspace-gauge` · algorithm — Algebraic gauge for a rigid-body stiffness nullspace
- `lem-linear-elasticity-rigid-body-gauge-system-is-nonsingular` · lemma — The rigid-body gauge system is nonsingular
- `def-linear-elasticity-displacement-formulation-and-data` · definition — Linear isotropic elasticity: displacement form and data
- `lem-linear-elasticity-mixed-pressure-gauge-is-well-defined` · lemma — The mixed pressure has the mean-zero gauge
- `thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound` · theorem — Dirichlet elasticity energy bound and Galerkin estimate
- `def-linear-elasticity-near-incompressible-mixed-mini-pair` · definition — Displacement-pressure formulation and mini-element pair
- `thm-nearly-incompressible-elasticity-mini-uniform-stability-and-error` · theorem — Uniform mini-element stability through the incompressible limit

### `elasticity-near-incompressibility-and-locking-free-discretization-examples` — Linear elasticity, nearly incompressible limits and locking — Examples

- `ex-linear-elasticity-rigid-body-stiffness-nullspace` · example — Rigid motions in a free-body stiffness nullspace
- `ex-linear-elasticity-cantilever-manufactured-shear` · example — A manufactured shear field on a clamped rectangle
- `ex-linear-elasticity-p1-volumetric-locking-fixed-mesh` · example — A fixed-mesh P1 volumetric-locking obstruction

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `elasticity-near-incompressibility-and-locking-free-discretization` requires `mixed-finite-elements-and-stokes-stability`
- `variational-inequality-and-contact-finite-elements` requires `elasticity-near-incompressibility-and-locking-free-discretization`
- `ale-interface-and-partitioned-multiphysics-discretization` requires `elasticity-near-incompressibility-and-locking-free-discretization`
- `isogeometric-galerkin-methods` requires `elasticity-near-incompressibility-and-locking-free-discretization`
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
