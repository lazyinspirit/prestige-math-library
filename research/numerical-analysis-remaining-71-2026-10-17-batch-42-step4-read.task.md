# Step 4 batch reviewer — batch **42**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **42**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["42"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 42 | `yee-fdtd-and-transient-maxwell-discretization` | A | hyperbolic-finite-difference-methods, parabolic-finite-element-methods, discrete-de-rham-complexes-and-edge-elements |
| 42 | `yee-fdtd-and-transient-maxwell-discretization-examples` | B | yee-fdtd-and-transient-maxwell-discretization |

## Your content, in full

### `yee-fdtd-and-transient-maxwell-discretization` — Yee FDTD and transient Maxwell finite elements

- `lem-maxwell-rectangular-stokes-identity` · lemma — Stokes identity on a rectangular Yee face
- `def-transient-maxwell-system-with-material-interfaces` · definition — Transient Maxwell system with piecewise materials and boundary conditions
- `def-maxwell-discrete-cochain-and-yee-grid` · definition — Oriented Maxwell cochains, masses, and the Yee grid
- `lem-maxwell-discrete-incidence-identities` · lemma — Incidence curl has zero discrete divergence and gradient curl
- `lem-maxwell-yee-step-matrix-is-positive-definite` · lemma — The midpoint-conductivity Yee electric solve is well defined
- `def-maxwell-edge-fem-semidiscretization` · definition — Edge-face Maxwell finite element semidiscretization
- `alg-maxwell-yee-leapfrog-update` · algorithm — Lossless or midpoint-conductive Yee leapfrog update
- `lem-maxwell-finite-dimensional-ode-existence-uniqueness` · lemma — Existence and uniqueness for the finite-dimensional Maxwell ODE
- `def-maxwell-edge-ritz-projection` · definition — Maxwell curl-energy Ritz projection
- `lem-maxwell-nedelec-smooth-interpolation-estimate` · lemma — Smooth lowest-order Nedelec and RT0 interpolation estimate
- `thm-maxwell-yee-gauss-constraints-propagate` · theorem — Compatible discrete charge and magnetic divergence propagate
- `thm-maxwell-yee-strict-cfl-modified-energy` · theorem — Strict spectral CFL positivity and Yee modified energy
- `lem-maxwell-periodic-yee-consistency` · lemma — Second-order consistency of the homogeneous periodic Yee scheme
- `thm-maxwell-edge-fem-energy-conservation` · theorem — Semidiscrete edge-face Maxwell energy conservation
- `lem-maxwell-edge-ritz-projection-well-defined` · lemma — Well-definedness and best approximation of the Maxwell Ritz map
- `thm-maxwell-yee-cartesian-dispersion-and-cfl` · theorem — Cartesian Yee symbol, numerical dispersion, and grid CFL bound
- `thm-maxwell-periodic-yee-smooth-solution-error` · theorem — Finite-time Yee error for smooth homogeneous periodic Maxwell fields
- `thm-maxwell-yee-midpoint-conductivity-energy-balance` · theorem — Midpoint conductivity dissipates the Yee discrete energy
- `lem-maxwell-magnetic-compatible-initial-projection` · lemma — Compatible magnetic initial projection for the Maxwell edge method
- `thm-maxwell-edge-fem-smooth-solution-error` · theorem — Smooth PEC edge finite element Maxwell error from compatible projections

### `yee-fdtd-and-transient-maxwell-discretization-examples` — Yee FDTD and transient Maxwell finite elements — Examples

- `ex-maxwell-pec-rectangular-cavity-mode` · example — A smooth Maxwell eigenmode in a rectangular PEC cavity
- `ex-maxwell-dielectric-jump-reflection` · example — Normal-incidence reflection at a planar dielectric interface
- `ex-maxwell-incompatible-current-gauss-drift` · example — A current violating discrete continuity creates Gauss-law drift
- `ex-maxwell-yee-periodic-plane-wave-dispersion` · example — Periodic Yee plane-wave dispersion and the cubic CFL limit

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `yee-fdtd-and-transient-maxwell-discretization` requires `discrete-de-rham-complexes-and-edge-elements`
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
