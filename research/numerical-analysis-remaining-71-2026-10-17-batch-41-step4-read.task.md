# Step 4 batch reviewer — batch **41**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **41**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["41"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 41 | `energy-stable-incompressible-navier-stokes-discretization` | A | mixed-finite-elements-and-stokes-stability, nonlinear-parabolic-compactness-and-monotone-evolution, the-heat-kernel-and-the-cauchy-problem, finite-element-pde-constrained-optimization, parabolic-finite-element-methods |
| 41 | `energy-stable-incompressible-navier-stokes-discretization-examples` | B | energy-stable-incompressible-navier-stokes-discretization |

## Your content, in full

### `energy-stable-incompressible-navier-stokes-discretization` — Evolutionary incompressible flow discretization

- `lem-na-halfline-heat-logarithmic-mass-loss` · lemma — Logarithmic halfline heat mass loss at the pressure endpoint
- `lem-na-shrinking-boundary-stream-corrector` · lemma — A shrinking clamped-stream correction on the square
- `lem-na-solenoidal-scalar-equations-give-weak-continuity` · lemma — Scalar weak equations give a weakly continuous Hilbert-space representative
- `def-na-evolutionary-skew-convective-form` · definition — The skew convective form for incompressible flow
- `lem-na-evolutionary-skew-convective-form-bound` · lemma — Continuity, energy cancellation, and Sobolev bounds for skew convection
- `def-na-evolutionary-incompressible-ns-weak-solution` · definition — Energy weak solutions of incompressible Navier–Stokes
- `lem-na-evolutionary-ns-weak-form-is-well-defined` · lemma — Integrability of the energy weak Navier–Stokes formulation
- `def-na-solenoidal-energy-weak-ns-velocity` · definition — Solenoidal energy weak velocity for incompressible Navier–Stokes
- `def-na-mini-navier-stokes-backward-euler-scheme` · definition — The mixed mini-element backward Euler Navier–Stokes scheme
- `lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness` · lemma — Uniqueness and strong trace for two-dimensional solenoidal energy velocities
- `lem-na-mini-be-scheme-is-well-defined` · lemma — Well-definedness of the finite-dimensional mini backward Euler equations
- `thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d` · theorem — Two-dimensional uniqueness and conditional three-dimensional weak–strong uniqueness
- `lem-na-continuous-pressure-recovery-from-solenoidal-residual` · lemma — Mean-zero pressure recovery from a solenoidal residual
- `lem-na-mini-fortin-l2-approximation` · lemma — The mini-element Fortin map approximates in L2
- `thm-na-mini-be-step-existence-energy` · theorem — Backward Euler MINI step existence and discrete energy bound
- `lem-na-mini-fortin-h2-approximation` · lemma — Second-order L2 approximation by the MINI Fortin map
- `lem-na-mini-weak-solenoidal-compactness` · lemma — Strong L2 compactness for weakly solenoidal MINI trajectories
- `thm-na-mini-solenoidal-stokes-projection-error` · theorem — Approximation by the MINI solenoidal energy projection
- `thm-na-mini-navier-stokes-be-subsequential-limit` · theorem — MINI backward Euler converges subsequentially to a solenoidal energy weak velocity
- `thm-na-mini-be-smooth-velocity-error` · theorem — Smooth-branch velocity error for backward Euler MINI
- `lem-na-solenoidal-evolution-integrated-pressure-recovery` · lemma — Integrated pressure recovery and MINI pressure-primitive convergence
- `thm-na-mini-be-smooth-integrated-pressure-error` · theorem — First-order smooth pressure-primitive error for backward Euler MINI
- `rem-na-pe06-pressure-recovery-escalation` · remark — PE06 instantaneous pressure refutations and retained primitive estimates

### `energy-stable-incompressible-navier-stokes-discretization-examples` — Evolutionary incompressible flow discretization — Examples

- `ex-na-periodic-taylor-green-vortex` · example — The two-dimensional Taylor–Green vortex on the flat torus
- `ex-na-zero-mean-pressure-gauge` · example — Fixing the spatially constant pressure mode
- `ex-na-unit-square-mini-mesh-family` · example — A matching shape-regular MINI mesh family on the unit square
- `ex-na-mini-backward-euler-energy-budget` · example — Zero-forcing discrete energy budget
- `cex-na-graded-mini-mass-initialization-pressure-rate` · counterexample — Graded MINI mass initialization can destroy the smooth instantaneous pressure rate
- `ex-na-conditional-three-dimensional-flow-computation` · example — A conditional three-dimensional computation with no uniqueness claim
- `cex-na-polyhedral-energy-ns-pressure-endpoint` · counterexample — An energy Navier–Stokes velocity on the square without endpoint-integrable pressure

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `energy-stable-incompressible-navier-stokes-discretization` requires `mixed-finite-elements-and-stokes-stability`
- `energy-stable-incompressible-navier-stokes-discretization` requires `nonlinear-parabolic-compactness-and-monotone-evolution`
- `projection-and-pressure-correction-for-incompressible-flow` requires `energy-stable-incompressible-navier-stokes-discretization`
- `supg-and-residual-based-stabilized-finite-elements` requires `energy-stable-incompressible-navier-stokes-discretization`
- `ale-interface-and-partitioned-multiphysics-discretization` requires `energy-stable-incompressible-navier-stokes-discretization`
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
