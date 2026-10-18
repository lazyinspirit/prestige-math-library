# Step 5 adjudication — group **p**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 46, 47, 48: 3 A/B pair(s), 6 page(s), 54 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **46**: `research/numerical-analysis-remaining-71-2026-10-17-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **47**: `research/numerical-analysis-remaining-71-2026-10-17-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **48**: `research/numerical-analysis-remaining-71-2026-10-17-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 46 | `nonlinear-full-approximation-multigrid` | A | numerical-pdes-and-spatial-discretization | 2646 | `multigrid-methods-and-complexity`, `nonlinear-equations-and-newton-methods`, `nonlinear-parabolic-compactness-and-monotone-evolution` |
| 46 | `nonlinear-full-approximation-multigrid-examples` | B | numerical-pdes-and-spatial-discretization | 2647 | `nonlinear-full-approximation-multigrid` |
| 47 | `meshfree-kernel-approximation-and-conservative-sph` | A | numerical-pdes-and-spatial-discretization | 2648 | `interacting-particle-mean-field-and-vortex-blob-error` |
| 47 | `meshfree-kernel-approximation-and-conservative-sph-examples` | B | numerical-pdes-and-spatial-discretization | 2649 | `meshfree-kernel-approximation-and-conservative-sph` |
| 48 | `nystrom-product-integration-and-fredholm-error` | A | numerical-pdes-and-spatial-discretization | 2650 | `composite-quadrature-rules`, `gaussian-quadrature`, `compact-operators-and-riesz-schauder-theory` |
| 48 | `nystrom-product-integration-and-fredholm-error-examples` | B | numerical-pdes-and-spatial-discretization | 2651 | `nystrom-product-integration-and-fredholm-error` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nonlinear-full-approximation-multigrid` — Nonlinear full-approximation multigrid (11 item(s))

- `alg-fas-two-grid-cycle` · algorithm — Finite-budget nonlinear FAS two-grid cycle
- `lem-fas-second-derivative-of-composed-cycle-map` · lemma — Second derivative formula for a composed cycle map
- `alg-fas-vw-cycle` · algorithm — Finite-budget recursive nonlinear FAS V/W cycle
- `lem-fas-coarse-branch-derivative` · lemma — Derivative of the exact-branch FAS two-grid cycle
- `lem-fas-vw-cycle-work-and-status` · lemma — A finite FAS V/W cycle terminates with bounded stated work
- `lem-fas-fine-root-fixed-point` · lemma — An exact fine root is fixed by the FAS V/W cycle
- `thm-fas-local-contraction-under-derivative-bound` · theorem — A smooth FAS cycle converges locally under its actual derivative bounds
- `lem-fas-linear-vw-cycle-translation` · lemma — A linear Galerkin V/W cycle is translation-covariant
- `thm-fas-linear-cycle-reduces-to-galerkin-correction` · theorem — Linear FAS exactly reduces to a Galerkin correction V/W cycle
- `lem-fas-inexact-coarse-solve-residual-defect` · lemma — An inexact FAS coarse solve contributes a bounded correction defect
- `ex-fas-semilinear-reaction-diffusion-local-convergence` · example — A two-node semilinear diffusion FAS cycle has an explicit local rate

### `nonlinear-full-approximation-multigrid-examples` — Nonlinear full-approximation multigrid — Examples (4 item(s))

- `ex-fas-reaction-poisson-tau-cancellation` · example — The tau term recovers the restricted root in reaction Poisson
- `cex-fas-zero-tau-breaks-fine-root` · counterexample — Omitting tau can move an exact fine root
- `ex-fas-bifurcation-shrinks-contraction-ball` · example — The certified FAS contraction radius shrinks at a pitchfork
- `ex-fas-linear-cycle-equivalence` · example — A one-level linear FAS correction is the Galerkin correction

### `meshfree-kernel-approximation-and-conservative-sph` — Meshfree kernel approximation and conservative sph (17 item(s))

- `def-meshfree-cell-quadrature-and-fill-radius` · definition — Meshfree cell quadrature and fill radius
- `def-scaled-symmetric-compact-kernel-family` · definition — Scaled symmetric compactly supported kernel family
- `def-regularized-conservative-sph-system` · definition — Fixed-width regularized conservative SPH particle system
- `lem-cellwise-particle-quadrature-oscillation-bound` · lemma — Cellwise oscillation bound for particle quadrature
- `lem-symmetric-kernel-moment-cancellation` · lemma — Symmetry cancels the first kernel moment
- `lem-compact-kernel-derivative-moment-identities` · lemma — Derivative moments of a compact radial kernel
- `lem-scaled-kernel-moments-and-derivative-bounds` · lemma — Scaling identities for kernel moments and derivatives
- `lem-sph-pair-forces-antisymmetric-and-central` · lemma — SPH pressure forces are equal-opposite and central
- `thm-second-order-meshfree-convolution-bias` · theorem — Second-order convolution bias for an interior C² field
- `lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube` · lemma — Explicit local Lipschitz bound for the regularized SPH vector field
- `prop-sph-conserves-linear-and-angular-momentum` · proposition — Linear and angular momentum are conserved by semidiscrete SPH
- `prop-sph-matched-internal-energy-conserves-total-energy` · proposition — The matched internal-energy equation conserves total semidiscrete energy
- `thm-first-derivative-meshfree-convolution-bias` · theorem — Second-order bias for the kernel particle gradient
- `thm-meshfree-particle-kernel-quadrature-error` · theorem — Explicit cellwise error for kernel value and gradient quadrature
- `cor-meshfree-joint-refinement-consistency` · corollary — Joint fill-distance and kernel-width refinement for value and derivative consistency
- `thm-regularized-sph-local-wellposedness` · theorem — Local well-posedness of the regularized finite-particle SPH system
- `thm-forward-euler-global-error-on-controlled-sph-tube` · theorem — Forward Euler has first-order global error and preserves a margin tube for the regularized SPH ODE

### `meshfree-kernel-approximation-and-conservative-sph-examples` — Meshfree kernel approximation and conservative sph — Examples (5 item(s))

- `cex-truncated-kernel-loses-boundary-constant-reproduction` · counterexample — A normalized kernel loses constant reproduction when truncated at a boundary
- `ex-interior-constant-and-affine-kernel-reproduction` · example — Interior constant and affine reproduction by a symmetric kernel
- `ex-two-particle-sph-force-pair` · example — Two SPH particles receive equal and opposite pressure forces
- `cex-fixed-neighbor-irregular-derivative-not-consistent` · counterexample — A disordered fixed-neighbor stencil can fail derivative consistency
- `cex-conservative-sph-can-clump-under-positive-pressure` · counterexample — A conservative positive-pressure SPH system can close a particle gap

### `nystrom-product-integration-and-fredholm-error` — Nystrom product integration and fredholm error (13 item(s))

- `def-nystrom-quadrature-and-finite-rank-operators` · definition — Nyström quadrature operators and their reconstructed equations
- `lem-finite-node-equation-reconstruction-equivalence` · lemma — Finite-node Nyström equations are equivalent to their reconstructed equations
- `lem-continuous-kernel-integral-operator-is-compact-on-c` · lemma — A continuous kernel defines a compact integral operator on C of an interval
- `thm-collectively-compact-operator-stability-and-error` · theorem — Collective compactness gives eventual Fredholm invertibility and solution error bounds
- `lem-half-order-singular-integral-exists` · lemma — The half-order diagonal singularity defines a bounded improper integral
- `lem-half-order-kernel-translation-modulus-in-l1` · lemma — Translations of the half-order kernel are continuous in the improper L1 norm
- `thm-nystrom-operator-norm-perturbation-error` · theorem — The operator-norm Nyström perturbation bound
- `lem-midpoint-nystrom-collective-compactness-and-consistency` · lemma — Composite midpoint Nyström operators are collectively compact and consistent
- `def-half-order-product-integration` · definition — Piecewise-linear product integration for a half-order diagonal singularity
- `lem-half-order-product-weights-closed-form` · lemma — Closed forms for the half-order piecewise-linear product weights
- `thm-midpoint-nystrom-smooth-solution-error` · theorem — Smooth-solution error bound for composite midpoint Nyström discretization
- `lem-half-order-product-integration-stability-and-consistency` · lemma — Stability, collective compactness, and consistency of half-order product integration
- `thm-half-order-product-integration-fredholm-error` · theorem — Fredholm error bound for half-order product integration

### `nystrom-product-integration-and-fredholm-error-examples` — Nystrom product integration and fredholm error — Examples (4 item(s))

- `ex-gaussian-two-node-nystrom-exact-separable-equation` · example — A two-node Gaussian Nyström rule solves a rank-two separable equation exactly
- `ex-near-resonant-midpoint-solution-error` · example — A near-resonant Nyström equation amplifies midpoint quadrature error
- `cex-standard-midpoint-nystrom-not-operator-norm-convergent` · counterexample — Standard midpoint Nyström operators need not converge in operator norm on C
- `ex-half-order-midpoint-order-loss` · example — Direct midpoint quadrature loses order on a half-order singularity

## Your seams

Your pages depend on another group's:

- `nonlinear-full-approximation-multigrid` requires `multigrid-methods-and-complexity` (group g, batch 20)
- `nonlinear-full-approximation-multigrid` requires `nonlinear-parabolic-compactness-and-monotone-evolution` (group m, batch 39)

Another group's pages depend on yours:

- `volume-integral-scattering-and-partial-wave-error` (group s) requires your `nystrom-product-integration-and-fredholm-error`

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
