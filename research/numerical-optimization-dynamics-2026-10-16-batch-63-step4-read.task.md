# Step 4 batch reviewer — batch **63**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **63**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["63"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 63 | `periodic-orbit-shooting-collocation-and-floquet-error` | A | matrix-differentiation-and-first-order-spectral-perturbation, nonlinear-equations-and-newton-methods, nonlinear-boundary-value-solvers, pseudo-arclength-continuation-and-fold-certificates, local-bifurcation-normal-forms-and-numerical-certificates, verified-linear-systems-and-spectral-enclosures, interval-newton-krawczyk-and-polynomial-root-isolation |
| 63 | `periodic-orbit-shooting-collocation-and-floquet-error-examples` | B | periodic-orbit-shooting-collocation-and-floquet-error |

## Your content, in full

### `periodic-orbit-shooting-collocation-and-floquet-error` — Periodic orbit shooting collocation and floquet error

- `def-verified-flow-variational-range-oracle` · definition — Exact range-oracle contract for validated flow and monodromy enclosures
- `lem-positive-convex-polygon-winding-index` · lemma — A positively oriented convex polygon has winding index one inside and zero outside
- `alg-validated-euler-flow-and-monodromy-enclosure` · algorithm — Validated forward-Euler tube for the periodic flow and variational equation
- `def-phase-bordered-periodic-orbit-bvp` · definition — The phase-bordered periodic-orbit BVP residual
- `lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier` · lemma — An autonomous periodic orbit has a neutral Floquet multiplier
- `thm-c2-ode-flow-on-common-tube` · theorem — A $C^2$ vector field has a $C^2$ flow on a common compact tube
- `lem-periodic-poincare-spectrum-matches-transverse-monodromy` · lemma — The Poincare derivative has precisely the non-phase monodromy multipliers
- `lem-phase-bordered-shooting-jacobian-invertibility` · lemma — A simple neutral multiplier and transverse phase make the shooting Jacobian invertible
- `prop-phase-bordered-bvp-root-equivalence` · proposition — Zeros of the phase-bordered BVP are phase-fixed periodic orbits
- `thm-validated-euler-flow-and-monodromy-enclosure-soundness` · theorem — The validated Euler tube encloses the exact periodic flow and monodromy matrix
- `lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse` · lemma — A transverse phase border makes the periodic BVP linearization boundedly invertible
- `def-phase-bordered-multiple-shooting-and-midpoint-collocation` · definition — Multiple-shooting and midpoint-collocation residuals for a phase-fixed periodic orbit
- `def-validated-periodic-shooting-jet-enclosure` · definition — Certified residual, Jacobian, trajectory, and monodromy enclosures for periodic shooting
- `thm-periodic-midpoint-collocation-error-budget` · theorem — Periodic midpoint collocation has an explicit local second-order error budget
- `alg-validated-periodic-orbit-corrector` · algorithm — Finite-budget phase-fixed periodic-orbit correction and validation
- `lem-separated-simple-floquet-multiplier-perturbation-bound` · lemma — A separated simple Floquet multiplier has a left/right-conditioned finite enclosure
- `thm-periodic-shooting-residual-to-orbit-error-budget` · theorem — A certified shooting residual gives an explicit local periodic-orbit error bound
- `alg-floquet-multiplier-cluster-certifier` · algorithm — Finite complex-contour validation of Floquet multiplier clusters
- `alg-periodic-orbit-pseudoarclength-continuation` · algorithm — Finite pseudo-arclength continuation of phase-fixed periodic orbits
- `thm-floquet-multiplier-cluster-certificate-soundness` · theorem — A verified contour count encloses every Floquet multiplier in a cluster
- `thm-validated-periodic-orbit-certificate-soundness` · theorem — A Krawczyk inclusion certifies a unique phase-fixed nonconstant periodic orbit
- `thm-orbital-stability-from-certified-floquet-multipliers` · theorem — Strict Floquet cluster enclosures certify orbital asymptotic stability

### `periodic-orbit-shooting-collocation-and-floquet-error-examples` — Periodic orbit shooting collocation and floquet error — Examples

- `ex-coarse-euler-variational-step-gives-spurious-instability` · example — A coarse Euler variational step gives a spurious unstable multiplier
- `ex-phase-singularity-in-stable-planar-oscillator` · example — A stable planar cycle can have a singular phase slice
- `ex-near-unit-floquet-multiplier-is-inconclusive` · example — A near-unit multiplier enclosure does not decide stability
- `ex-van-der-pol-stability-conditional-on-validated-enclosure` · example — Conditional van der Pol stability from a validated enclosure

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `nonlinear-equations-and-newton-methods`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `nonlinear-boundary-value-solvers`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `pseudo-arclength-continuation-and-fold-certificates`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `local-bifurcation-normal-forms-and-numerical-certificates`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `verified-linear-systems-and-spectral-enclosures`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `interval-newton-krawczyk-and-polynomial-root-isolation`
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
