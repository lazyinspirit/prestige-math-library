# Step 4 batch reviewer — batch **57**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **57**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["57"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 57 | `boundary-integral-equations-and-galerkin-bem` | A | variational-crimes-and-strang-lemmas, singular-and-infinite-interval-quadrature, fast-multipole-expansions-and-error, stable-special-function-recurrences-and-certified-evaluation, discrete-de-rham-complexes-and-edge-elements, monotone-hjb-schemes-and-policy-iteration |
| 57 | `boundary-integral-equations-and-galerkin-bem-examples` | B | boundary-integral-equations-and-galerkin-bem |

## Your content, in full

### `boundary-integral-equations-and-galerkin-bem` — Boundary-integral equations and Galerkin BEM

- `def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling` · definition — Logarithmic capacity and the two-dimensional Laplace layer kernel
- `lem-bem-half-order-bessel-slobodeckij-equivalence` · lemma — Bessel and Slobodeckij norms agree at order one half
- `def-bem-newtonian-kernel-in-three-dimensions` · definition — The three-dimensional Laplace Newton kernel
- `lem-bem-plane-poisson-kernel-fourier-transform` · lemma — Fourier transform of the three-dimensional plane Poisson kernel
- `def-pe18-exterior-helmholtz-problem` · definition — Sound-soft exterior Helmholtz problem for a spherical obstacle
- `thm-bem-logarithmic-capacity-homothety-and-layer-scale` · theorem — Logarithmic capacity and single-layer scaling under homothety
- `lem-bem-newtonian-kernel-is-fundamental-solution` · lemma — The three-dimensional Newton kernel is a fundamental solution
- `lem-bem-lipschitz-graph-sobolev-and-green-interface` · lemma — Sobolev pullback and Green identity on Lipschitz graphs
- `def-bem-lipschitz-polyhedral-boundary-and-trace-spaces` · definition — Lipschitz polyhedral boundary, orientation, and trace spaces
- `lem-pe18-spherical-harmonic-structure-and-density` · lemma — Spherical harmonic modes are orthogonal, complete for continuous data, and have polynomial evaluation bounds
- `lem-pe18-spherical-hankel-radial-identities` · lemma — Outgoing spherical Hankel modes have positive flux and no positive-real zeros
- `def-bem-smooth-helmholtz-combined-field-operator` · definition — The combined-field operator for smooth-boundary Helmholtz scattering
- `lem-bem-surface-fractional-norm-equivalence` · lemma — The chart and chordal surface H1/2 norms are equivalent
- `lem-bem-lipschitz-trace-and-lifting` · lemma — The H1 trace and lifting theorem on a compact Lipschitz boundary
- `def-bem-surface-mesh-and-piecewise-constant-density-space` · definition — Shape-regular surface meshes and conforming P0 densities
- `lem-pe18-outgoing-spherical-mode-expansion` · lemma — Every outgoing spherical Helmholtz mode is an outgoing Hankel mode
- `thm-bem-helmholtz-layer-jumps-match-laplace-jumps` · theorem — The Helmholtz single-layer and double-layer traces have the Laplace jump signs
- `lem-bem-smooth-trace-and-helmholtz-layer-extension` · lemma — Smooth-boundary trace lifts and Sobolev Helmholtz layer extensions
- `lem-bem-exterior-energy-trace-bound` · lemma — Exterior finite-energy functions have a trace controlled by their gradient
- `def-bem-laplace-layer-potentials-and-energy-spaces` · definition — Weak Laplace single-layer potentials and energy spaces
- `lem-bem-p0-negative-half-order-approximation` · lemma — P0 averages approximate smooth densities in H negative one half
- `lem-bem-far-panel-quadrature-residual` · lemma — A positive far-panel quadrature residual and normalized cluster combination
- `lem-bem-helmholtz-double-layer-conormal-jump` · lemma — The Helmholtz double layer has a common weak conormal
- `thm-bem-smooth-helmholtz-operator-compact-perturbation` · theorem — The smooth Helmholtz combined field is a compact perturbation of half the identity
- `def-bem-double-layer-transmission-space` · definition — The finite-energy double-layer transmission space
- `thm-bem-single-layer-transmission-mapping-and-coercivity` · theorem — The three-dimensional single layer is bounded and coercive
- `lem-bem-polyhedral-edge-kernel-representation` · lemma — Finite-energy transmission pairs have the double-layer kernel representation across polyhedral edges
- `thm-bem-exterior-helmholtz-dirichlet-uniqueness` · theorem — Outgoing exterior Dirichlet uniqueness for the smooth combined-field geometry
- `lem-bem-lipschitz-transmission-kernel-representation` · lemma — Lipschitz finite-energy transmission pairs have the double-layer kernel representation
- `thm-bem-double-layer-transmission-jumps-and-bounds` · theorem — The double-layer potential has the stated jumps and bounds
- `def-bem-calderon-boundary-operators` · definition — Calderon boundary operators and trace conventions
- `thm-bem-single-layer-galerkin-wellposed-and-quasioptimal` · theorem — P0 Galerkin BEM for the single layer is well posed and quasioptimal
- `thm-bem-combined-field-conditional-invertibility` · theorem — Bounded invertibility of the smooth-boundary Helmholtz combined field
- `thm-bem-calderon-mapping-and-jump-identities` · theorem — Bounded Calderon maps and signed jump identities
- `cor-bem-p0-galerkin-rate-for-h1-density` · corollary — An H1-density rate for P0 single-layer Galerkin BEM
- `lem-bem-panel-pair-duffy-certificates` · lemma — Certified touching-panel and disjoint-panel quadrature for the Laplace P0 matrix
- `thm-bem-hypersingular-ellipticity-and-stabilized-formulation` · theorem — The hypersingular operator is elliptic modulo constants
- `alg-bem-certified-inexact-matrix-assembly` · algorithm — Certified near-quadrature and far-multipole matrix assembly
- `thm-bem-matrix-perturbation-transfer` · theorem — A certified matrix defect transfers to a Galerkin error bound

### `boundary-integral-equations-and-galerkin-bem-examples` — Boundary-integral equations and Galerkin BEM — Examples

- `ex-bem-sphere-constant-density` · example — A constant density on the sphere gives a constant trace
- `ex-bem-sphere-jump-sign-orientation` · example — A unit sphere checks both layer jump signs
- `ex-bem-logarithmic-capacity-and-scale-on-a-circle` · example — The logarithmic single layer on a circle changes by a rank-one scale term
- `ex-bem-polyhedral-reentrant-edge-singularity` · example — A reentrant polyhedral edge has an H1 harmonic singularity
- `ex-bem-inexact-assembly-error-ledger` · example — A two-by-two inexact assembly ledger

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `boundary-integral-equations-and-galerkin-bem` requires `singular-and-infinite-interval-quadrature`
- `boundary-integral-equations-and-galerkin-bem` requires `fast-multipole-expansions-and-error`
- `boundary-integral-equations-and-galerkin-bem` requires `stable-special-function-recurrences-and-certified-evaluation`
- `boundary-integral-equations-and-galerkin-bem` requires `discrete-de-rham-complexes-and-edge-elements`
- `boundary-integral-equations-and-galerkin-bem` requires `monotone-hjb-schemes-and-policy-iteration`
- `exterior-wave-problems-absorbing-boundaries-and-pml` requires `boundary-integral-equations-and-galerkin-bem`
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
