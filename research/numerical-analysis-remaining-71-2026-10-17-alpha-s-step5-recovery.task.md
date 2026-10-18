# Step 5 adjudication — group **s**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 55, 56, 57: 3 A/B pair(s), 6 page(s), 83 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **55**: `research/numerical-analysis-remaining-71-2026-10-17-batch-55-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **56**: `research/numerical-analysis-remaining-71-2026-10-17-batch-56-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **57**: `research/numerical-analysis-remaining-71-2026-10-17-batch-57-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-analysis-remaining-71-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 55 | `volume-integral-scattering-and-partial-wave-error` | A | numerical-pdes-and-spatial-discretization | 2664 | `nystrom-product-integration-and-fredholm-error`, `stable-special-function-recurrences-and-certified-evaluation`, `randomized-quasi-monte-carlo-and-replicates` |
| 55 | `volume-integral-scattering-and-partial-wave-error-examples` | B | numerical-pdes-and-spatial-discretization | 2665 | `volume-integral-scattering-and-partial-wave-error` |
| 56 | `supg-and-residual-based-stabilized-finite-elements` | A | numerical-pdes-and-spatial-discretization | 2666 | `variational-crimes-and-strang-lemmas`, `energy-stable-incompressible-navier-stokes-discretization` |
| 56 | `supg-and-residual-based-stabilized-finite-elements-examples` | B | numerical-pdes-and-spatial-discretization | 2667 | `supg-and-residual-based-stabilized-finite-elements` |
| 57 | `boundary-integral-equations-and-galerkin-bem` | A | numerical-pdes-and-spatial-discretization | 2697.125 | `variational-crimes-and-strang-lemmas`, `singular-and-infinite-interval-quadrature`, `fast-multipole-expansions-and-error`, `stable-special-function-recurrences-and-certified-evaluation`, `discrete-de-rham-complexes-and-edge-elements`, `monotone-hjb-schemes-and-policy-iteration` |
| 57 | `boundary-integral-equations-and-galerkin-bem-examples` | B | numerical-pdes-and-spatial-discretization | 2697.25 | `boundary-integral-equations-and-galerkin-bem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `volume-integral-scattering-and-partial-wave-error` — Volume integral scattering and partial wave error (16 item(s))

- `def-volume-integral-scattering-model` · definition — The three-dimensional volume integral scattering model
- `lem-finite-volume-hilbert-schmidt-rescaling` · lemma — Rescaling finite-measure kernel operators to probability spaces
- `lem-dyadic-cell-average-projections-converge-in-l2` · lemma — Dyadic cell-average projections converge strongly in L2 of a bounded set
- `def-spherical-harmonic-partial-wave-conventions` · definition — Spherical harmonics and partial-wave conventions in three dimensions
- `lem-three-dimensional-scattering-kernel-is-square-integrable` · lemma — The three-dimensional free-space scattering kernel is square integrable
- `lem-volume-far-field-map-is-bounded` · lemma — The volume far-field map is bounded and is the uniform far-field limit
- `lem-spherical-harmonics-form-complete-basis-and-addition-formula` · lemma — Spherical harmonics form a complete basis with the addition formula
- `lem-outgoing-helmholtz-kernel-is-a-fundamental-solution` · lemma — The outgoing three-dimensional Helmholtz kernel is a fundamental solution
- `lem-volume-integral-operator-well-defined-and-bounded` · lemma — The volume integral operator is well defined and bounded on L2
- `thm-exponential-partial-wave-truncation-bound` · theorem — Exponential coefficient decay gives a uniform partial-wave truncation bound
- `thm-volume-integral-operator-is-compact` · theorem — The volume integral scattering operator is compact
- `thm-volume-integral-scattering-born-neumann-error` · theorem — Born truncation error for a small-norm volume integral operator
- `def-volume-product-integration-scheme` · definition — Cell-volume product integration for the scattering kernel
- `thm-volume-integral-scattering-fredholm-stability` · theorem — Fredholm solvability and residual stability for volume scattering
- `thm-volume-scattering-radial-partial-wave-boundary-problem` · theorem — Radial volume scattering separates into matched partial-wave boundary problems
- `thm-volume-product-integration-solution-and-far-field-error` · theorem — Fredholm convergence and far-field error for cell-volume product integration

### `volume-integral-scattering-and-partial-wave-error-examples` — Volume integral scattering and partial wave error — Examples (4 item(s))

- `ex-forward-plane-wave-fixed-partial-wave-cutoff-fails` · example — A fixed partial-wave cutoff misses the forward high-frequency plane wave
- `ex-small-norm-volume-scatterer-born-truncation` · example — A small-norm ball scatterer has a certified Born tail
- `ex-near-resonant-volume-operator-error-amplification` · example — A near-unit volume-operator mode amplifies forcing error
- `ex-radial-square-well-exact-partial-wave-matching` · example — Exact matching for the radial square well in the zeroth partial wave

### `supg-and-residual-based-stabilized-finite-elements` — SUPG, residual stabilization and variational multiscale methods (14 item(s))

- `def-supg-one-dimensional-convection-diffusion-model` · definition — One-dimensional stationary convection–diffusion model and uniform P1 space
- `def-supg-general-convection-diffusion-reaction-model` · definition — Stationary multidimensional convection–diffusion–reaction P1 model
- `def-supg-pspg-grad-div-stokes-forms` · definition — Residual PSPG and grad-div terms for equal-order flow spaces
- `def-supg-variational-multiscale-block-closure` · definition — Finite-dimensional resolved–unresolved VMS split and residual closure
- `def-supg-one-dimensional-residual-form` · definition — One-dimensional residual SUPG form with the exact cell parameter
- `def-supg-general-residual-form` · definition — Multidimensional P1 SUPG residual form and parameter scaling
- `lem-supg-one-dimensional-l2-interpolation-estimate` · lemma — One-dimensional P1 interpolation has an L2 error bound
- `lem-supg-general-p1-interpolation-estimate` · lemma — Shape-regular affine P1 interpolation estimates for C2 functions
- `thm-supg-pspg-stokes-coercivity` · theorem — P1 PSPG Stokes form is coercive in its stabilization norm
- `thm-supg-vms-schur-defect-bound` · theorem — Finite-dimensional VMS residual closure has an explicit Schur defect bound
- `lem-supg-one-dimensional-optimal-parameter` · lemma — The one-dimensional SUPG parameter is positive and bounded
- `thm-supg-general-p1-error-and-stability` · theorem — Multidimensional P1 SUPG consistency, coercivity, and error bound
- `thm-supg-one-dimensional-consistency-coercivity` · theorem — One-dimensional P1 SUPG is consistent and coercive
- `thm-supg-one-dimensional-energy-error` · theorem — One-dimensional SUPG energy error bound with explicit tau dependence

### `supg-and-residual-based-stabilized-finite-elements-examples` — SUPG, residual stabilization and variational multiscale methods — Examples (5 item(s))

- `ex-supg-q1-equal-order-pressure-checkerboard` · example — A periodic Q1/Q1 checkerboard pressure mode is invisible to divergence
- `ex-supg-grad-div-does-not-fix-pressure-kernel` · example — Grad-div alone does not remove the Q1 checkerboard pressure kernel
- `ex-supg-vms-two-scale-closure-defect-sharp` · example — A two-scale VMS closure attains its Schur defect bound
- `ex-supg-overlarge-stabilization-smears-solution` · example — Overlarge streamline stabilization suppresses a one-cell solution
- `ex-supg-convection-boundary-layer-coarse-mesh` · example — A two-cell SUPG mesh misses the interior shape of an outflow layer

### `boundary-integral-equations-and-galerkin-bem` — Boundary-integral equations and Galerkin BEM (39 item(s))

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

### `boundary-integral-equations-and-galerkin-bem-examples` — Boundary-integral equations and Galerkin BEM — Examples (5 item(s))

- `ex-bem-sphere-constant-density` · example — A constant density on the sphere gives a constant trace
- `ex-bem-sphere-jump-sign-orientation` · example — A unit sphere checks both layer jump signs
- `ex-bem-logarithmic-capacity-and-scale-on-a-circle` · example — The logarithmic single layer on a circle changes by a rank-one scale term
- `ex-bem-polyhedral-reentrant-edge-singularity` · example — A reentrant polyhedral edge has an H1 harmonic singularity
- `ex-bem-inexact-assembly-error-ledger` · example — A two-by-two inexact assembly ledger

## Your seams

Your pages depend on another group's:

- `volume-integral-scattering-and-partial-wave-error` requires `nystrom-product-integration-and-fredholm-error` (group p, batch 48)
- `volume-integral-scattering-and-partial-wave-error` requires `stable-special-function-recurrences-and-certified-evaluation` (group i, batch 25)
- `supg-and-residual-based-stabilized-finite-elements` requires `energy-stable-incompressible-navier-stokes-discretization` (group n, batch 41)
- `boundary-integral-equations-and-galerkin-bem` requires `singular-and-infinite-interval-quadrature` (group i, batch 26)
- `boundary-integral-equations-and-galerkin-bem` requires `fast-multipole-expansions-and-error` (group g, batch 19)
- `boundary-integral-equations-and-galerkin-bem` requires `stable-special-function-recurrences-and-certified-evaluation` (group i, batch 25)
- `boundary-integral-equations-and-galerkin-bem` requires `discrete-de-rham-complexes-and-edge-elements` (group m, batch 38)
- `boundary-integral-equations-and-galerkin-bem` requires `monotone-hjb-schemes-and-policy-iteration` (group x, batch 71)

Another group's pages depend on yours:

- `exterior-wave-problems-absorbing-boundaries-and-pml` (group v) requires your `boundary-integral-equations-and-galerkin-bem`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-analysis-remaining-71-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `numerical-analysis-remaining-71-2026-10-17`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
