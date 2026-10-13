# Step 3a reader report — batch 32

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: independent reader  
Scope: batch `32`

## Opened inventory

Pages:

- A page `cm16-stability-perturbations-and-chaos` at `library/non-relativistic-classical-mechanics/cm16-stability-perturbations-and-chaos.md`.
- B page `cm16-stability-perturbations-and-chaos-examples` at `library/non-relativistic-classical-mechanics/cm16-stability-perturbations-and-chaos-examples.md`.

Assigned A-page items, read in dependency order:

- `def-cm16-flow-equilibria-and-invariant-sets`
- `def-cm16-stability-and-hyperbolicity-concepts`
- `def-cm16-finite-time-growth-rates`
- `def-cm16-stroboscopic-and-poincare-maps`
- `def-cm16-chaos-list-for-model-maps`
- `pthm-cm16-energy-stability-and-instability`
- `pthm-cm16-variational-equation-and-linearization`
- `pthm-cm16-hyperbolic-linearization`
- `pthm-cm16-two-rotor-kam`
- `pthm-cm16-separatrix-splitting-and-horseshoe`
- `pthm-cm16-recurrence-for-finite-volume-models`
- `rem-cm16-scope-of-stability-and-chaos`

Assigned B-page items:

- `ex-cm16-pendulum-equilibrium-checks`
- `ex-cm16-linearization-and-growth-checks`
- `ex-cm16-isotropic-oscillator-return-map-check`
- `ex-cm16-pulse-horseshoe-data-check`
- `cex-cm16-positive-growth-is-not-chaos`
- `cex-cm16-stability-does-not-imply-attraction`
- `ex-cm16-recurrence-volume-check`
- `ex-cm16-two-rotor-kam-units-check`

Dependencies opened to verify the relevant claims included the force-model and coordinate chain (`post-cm01-spacetime`, `post-cm01-frames`, `post-cm01-worldlines`, `post-cm02-force-superposition`, `def-cm01-units`, `def-cm01-configuration`, `def-cm01-velocity-acceleration`, `def-cm-affine-time-space`, `def-cm02-newtonian-flow`, `lem-cm-adapted-coordinates-exist-and-are-unique`, and `lem-cm-adapted-charts-and-galilean-transformations`); the ODE chain (`def-first-order-ode-initial-value-problem-and-solution`, `def-maximal-ode-solution`, `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `def-locally-lipschitz-in-the-state-variable`, `def-cm-local-flow-of-an-autonomous-system`, `lem-cm-local-flow-composition-law`, `cor-cm-flow-domain-open-and-flow-is-c1`, `thm-cm-smooth-dependence-and-the-variational-equation`, `thm-cm-finite-time-linearization-error-bound`, and `prop-cm-first-return-map-is-a-local-c1-diffeomorphism`); and the mechanical stability chain (`def-cm-mechanical-vector-field-and-energy-in-a-chart`, `def-cm-equilibrium-and-lyapunov-stability`, `thm-cm-energy-stability-of-a-strict-minimum`, `lem-cm-energy-conservation-for-the-mechanical-system`, `lem-cm-positive-definite-matrix-square-roots`, `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium`, `thm-cm-quadratic-mode-decomposition`, `thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism`, `thm-cm-exponential-stability-by-a-lyapunov-quadratic-form`, `thm-cm-instability-of-a-hyperbolic-saddle`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `def-hessian-and-euclidean-critical-point`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `def-euclidean-inner-product`, and `def-metric-ball`).

For the remaining result chains I opened the KAM suppliers (`thm-positive-measure-analytic-kam-family`, `lem-kam-parameter-sequences-satisfy-all-step-hypotheses`, `def-holomorphic-kam-domain-and-diophantine-labels`, `lem-diophantine-resonance-slab-measure`, `lem-kam-composed-map-and-derivative-convergence`, `thm-parameter-kam-torus-invariance-and-lagrangianity`, `lem-kam-limit-is-an-embedding`, and `lem-kam-conjugation-symmetry-of-the-construction`); the pulse and horseshoe chain (`def-smooth-periodic-oscillator-pulse-model`, `lem-rescaled-pulse-map-is-c-one-close-to-kick`, `thm-smooth-fixed-mass-mechanical-horseshoe`, `thm-explicit-perturbed-horseshoe-and-transversality`, `lem-coded-quadratic-recurrence-is-a-contraction`, `lem-perturbed-scalar-recurrence-root-bounds`, `def-bilateral-symbol-and-bounded-sequence-space`, `def-stable-unstable-cones-and-line-slopes`, `lem-close-map-first-component-has-uniform-inverse`, and `thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive`); and the recurrence and map-chaos chain (`thm-poincare-recurrence-for-finite-measure-preserving-systems`, `pthm-cm13-liouville`, `pthm-cm13-flow-preservation`, `def-cm-topologically-mixing-dense-periodic-and-sensitive-maps`, `def-metric-continuity`, and `def-dense-top`).

## Defects found and repairs

- `def-cm16-flow-equilibria-and-invariant-sets`: made the force time window explicitly a nondegenerate open interval and the motion domain an interval in that window. Defined the full and restricted first-order fields. Defined `$D$`-maximality for every declared open domain, including the full domain, and gave its exact connected-component construction from the unique maximal full-force solution. The cited ODE theorem supplies existence, uniqueness and an open maximal interval; it is now a direct dependency and `justified_by` supplier. This makes the restriction-domain hypothesis used by the stroboscopic definition explicit. Periodic motions and state traces are distinguished from autonomous periodic orbits; limit-cycle and homoclinic/heteroclinic terminology is restricted to autonomous models. The supporting hypotheses are `post-cm02-force-superposition` clauses (ii)–(iii), `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, and the stated maximal-solution definitions.
- `def-cm16-stroboscopic-and-poincare-maps`: the period-map domain now uses the `$D$`-maximal trajectory and requires it to remain in the declared open restriction domain throughout `$[0,P]$`. The `$n$`-fold domain condition is stated and follows by induction from periodicity, shift invariance and uniqueness. The local Poincaré branch is restricted to positive return times, and its inverse is restricted to the corresponding image. This closes the domain gap for proper open force restrictions and removes ambiguity about zero or negative return time.
- `pthm-cm16-energy-stability-and-instability`: renamed the positive growth rate from `mu` to `kappa`, preserving `mu` for the mass dimension. Replaced the dimensionally opaque factor `sqrt(1+kappa^2)` by the exact coordinate-norm identity `||Y(t)||_2 = exp(kappa t) ||(w,kappa w)||_2`. Its units remark now says the Euclidean norm is on the numerical state chart and that unit rescaling changes numerical norms but preserves the topology and stability predicate.
- `pthm-cm16-variational-equation-and-linearization`: the translated field `F(zeta)=G(z_0+zeta)` is now defined on the open set `U_0=S_0-z_0`, which contains the closed radius-`r` ball required by the error-bound theorem. This matches the supplier's open-domain hypothesis.
- `pthm-cm16-separatrix-splitting-and-horseshoe`: specified that the physical stroboscopic map and Euclidean state chart use Newtonian position-velocity coordinates. The full state scaling and its axis restriction now map the dimensionless velocity coordinate to physical velocity, while canonical momentum remains `Pi=m v`. Corrected the transverse period matrices to the position-velocity chart, where their off-diagonal entries are `omega_0^(-1) sinh(P)` and `omega_0 sinh(P)`; the eigenvalues remain `exp(P), exp(-P)`.
- `ex-cm16-pendulum-equilibrium-checks`: the title and assertion distinguish linearised eigenvalues from the angular oscillation frequency. The proof now gives the first-order matrices and characteristic polynomials at both equilibria, identifies their eigenvalues, and defines the angular frequency as the coefficient in the linearised harmonic equation. The premises are declared model data; no measurement is claimed.
- `ex-cm16-recurrence-volume-check`: declared dimensionless normalized coordinates and now calls the estimate dimensionless coordinate Lebesgue volume. Its scope and units remark explicitly avoid an SI interpretation without compatible scales. The compactness, invariance and almost-everywhere recurrence deductions are unchanged.
- `ex-cm16-two-rotor-kam-units-check`: changed “calibration” in the title to “scale checks”; the item substitutes declared parameters and makes no apparatus or empirical calibration claim.
- `def-cm16-stability-and-hyperbolicity-concepts`: changed the repulsive-model rate symbol from `mu` to `kappa`, avoiding collision with the mass dimension notation.
- `rem-cm16-scope-of-stability-and-chaos` and A page `cm16-stability-perturbations-and-chaos`: clarified the autonomous scope of continuous-time periodic-orbit, limit-cycle and homoclinic terminology, and stated that periodic forced motions use their stroboscopic maps. The A-page summary also states the restriction-domain condition for a period map.

Updated the batch proof contracts for the energy theorem, variational theorem, horseshoe theorem, pendulum example, and recurrence example to match the corrected proof notation, domain, chart, eigenvalue/frequency distinction, and dimensionless-volume convention. No stale `verification.judge` record was present on a changed in-flight item.

The B-page prose was not retained as changed; its final byte diff is empty. During editing I briefly changed that summary's line wrapping and restored it exactly before handoff.

## Uneditable cross-batch observation

During review, an intermediate version of `thm-cm-instability-of-a-hyperbolic-saddle` (batch 3), at Proof 1.1, referred to the positive-definiteness and Lyapunov-identity argument of `thm-cm-exponential-stability-by-a-lyapunov-quadratic-form` without declaring that theorem in `deps`. The assigned consumer `pthm-cm16-energy-stability-and-instability` reaches this supplier. That was an undeclared inference in the observed intermediate version. Another writer subsequently changed the current source: it removes that citation and directly proves convergence, positive definiteness and both integral identities from the exponential-dichotomy bounds and elementary integral estimates. The current source SHA-256 is `cc226299eb5839caf03bcb623f34d2e1c886bd015220f095f89182efd2efaf4f`; I do not claim those corrected bytes are the observed defect. The intermediate bytes were not retained or hashed, so the routed finding has `observed_source: null` and records this limitation. No edit was made to the other batch's item.

## Page verdicts

- **A — `cm16-stability-perturbations-and-chaos`: acceptable after the repairs above.** Its definitions and summary now distinguish autonomous flow objects from periodic forced state traces and accurately state the period-map domain. The assigned model theorems are conditional consequences of their stated ODE, KAM, horseshoe and finite-measure hypotheses; they make no empirical proof claim.
- **B — `cm16-stability-perturbations-and-chaos-examples`: acceptable.** Its examples and counterexamples are declared model calculations. The recurrence summary remains accurate for the dimensionless coordinate-volume example and the free-model comparison. No B-page prose change remains.

## Validation and coverage

Reflow and precheck were run for all ten changed items. The six proof-bearing items (`pthm-cm16-energy-stability-and-instability`, `pthm-cm16-variational-equation-and-linearization`, `pthm-cm16-separatrix-splitting-and-horseshoe`, `ex-cm16-pendulum-equilibrium-checks`, `ex-cm16-recurrence-volume-check`, and `ex-cm16-two-rotor-kam-units-check`) passed direct precheck; the four definition/remark items reported zero checked and zero failing. The final proof-layout run covered 10 items and 34 steps with 0 defects.

I checked the KAM parameter sequence against Pöschel's construction, [arXiv:0908.2234](https://arxiv.org/abs/0908.2234), and Bounemoura's correction, [arXiv:2006.04453](https://arxiv.org/abs/2006.04453), §1 and the correction preceding Theorem A. The correction identifies a restriction on the initial step parameters; the local sequence lemma `lem-kam-parameter-sequences-satisfy-all-step-hypotheses` uses `h_0 = alpha/(2 K_0^(tau+1))` and verifies the propagated bounds, so the inspected application meets that restriction. No assigned item reports experimental observations; no apparatus or statistical inference is presented as evidence. I opened the direct suppliers and the transitive proof inputs needed for the assigned claims, but did not re-audit unrelated bibliography or the entire dependency closure of every supplier.

Blocker: none.
