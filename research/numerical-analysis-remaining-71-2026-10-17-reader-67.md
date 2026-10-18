# Step 3a reader report — batch 67

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Review date: 2026-10-18

## Scope and inventory opened

I read `CLAUDE.md`, `README.md`, the relevant `SCHEMA.md` rules, the Step-3 sections of `WORKFLOW.md`, `briefs/reader.md`, and the assigned batch manifest. The run status was checked from `.autopilot/numerical-analysis-remaining-71-2026-10-17`; it was running, with no dispatch then in flight.

Assigned pages opened:

- A page: `ale-interface-and-partitioned-multiphysics-discretization`.
- B page: `ale-interface-and-partitioned-multiphysics-discretization-examples`.
- The four A-page prerequisites declared by the manifest: `energy-stable-incompressible-navier-stokes-discretization`, `curved-mesh-geometry-and-conservative-mesh-transfer`, `elasticity-near-incompressibility-and-locking-free-discretization`, and `imex-and-operator-splitting-methods`.

All 17 A-page items and all three B-page examples were opened. The A-page inventory was `def-ale-linear-diffusion-transmission-model`, `def-ale-moving-domain-map`, `def-ale-periodic-moving-grid`, `def-ale-toy-added-mass-recurrence`, `alg-ale-upwind-finite-volume-step`, `lem-ale-jacobi-geometric-conservation-identity`, `lem-ale-periodic-face-motion-satisfies-discrete-gcl`, `lem-ale-schur-complement-positive-and-minimizes-energy`, `thm-ale-monolithic-backward-euler-energy-identity`, `alg-ale-robin-robin-partitioned-iteration`, `lem-ale-schur-residual-controls-interface-energy-error`, `thm-ale-one-dimensional-reynolds-transport-identity`, `thm-ale-reynolds-transport-identity`, `thm-ale-upwind-step-conserves-mass-and-preserves-free-stream`, `thm-ale-robin-robin-iteration-contracts-and-certifies-stop`, `thm-ale-upwind-step-monotone-and-l1-contracting-under-cfl`, and `cor-ale-exact-splitting-residual-orders`. They were reviewed in dependency order: definitions; the ALE Jacobian, discrete-GCL and Schur lemmas; the upwind and Robin algorithms; the energy and residual results; the two Reynolds results and splitting corollary; then the remaining upwind theorem and examples. The B-page inventory was `ex-ale-added-mass-toy-recurrence-instability`, `ex-ale-expanding-mesh-free-stream`, and `ex-ale-two-domain-heat-interface-flux-balance`; each was checked against its listed A-page suppliers.

The 19 distinct published items directly named by assigned item dependencies were opened: `def-additive-ode-and-partition`, `def-exact-split-flows-lie-strang-and-bracket`, `thm-lie-strang-global-orders-and-subflow-error`, `def-jordan-inner-and-outer-content`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-jordan-boundary-criterion`, `thm-lebesgue-criterion-in-rn`, `thm-ftc-second-part`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `cor-mean-value-theorem`, `def-riemann-integral-over-a-jordan-set`, `thm-multidimensional-integral-properties`, `thm-jordan-content-and-indicator-integrability`, `thm-heine-cantor-metric`, `def-countable-choice`, `def-bounded-piecewise-c-one-euclidean-domain`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, and `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`.

For the splitting supplier, I also opened its ODE definition and existence/gluing suppliers, `lem-lie-strang-local-error-expansions`, and `thm-global-error-from-one-step-defect-and-stability`. The task proof-contract file was checked against the current proofs. No separate rendered evidence bundle was present under the run's current `research/` paths.

## Review and edits

No assigned item or page prose was edited. The finite-dimensional Schur-complement, monolithic energy, Robin contraction/stop-certificate, upwind conservation/free-stream/CFL, splitting, and three example calculations are consistent with the hypotheses stated in their carriers. The A-page summary accurately separates the continuous ALE, one-dimensional finite-volume, diffusion-transmission, and optional finite-dimensional splitting branches. The B-page summary accurately describes its three calculations.

Because there were no item edits, I did not run reflow, precheck, or proof-layout. No `verification.judge` record was changed.

## Defects not edited

1. **Published supplier proof defect.** In `items/thm-lebesgue-criterion-in-rn.md`, Proof step 3.2 applies the finite rectangle-to-cube claim to the finite family obtained in step 3.1, which consists of balls covering `K = Q minus O`, and asserts that their rectangle-volume sum is below `eta/2`. No hypothesis bounds the size or total covering volume of `K`; the arbitrary finite ball cover does not supply that estimate. For example, when the integrand is constant, `S_alpha` may be empty and `K=Q`, while `eta` can be arbitrarily small. Steps 1.3 and 2.2 already cover `S_{1/r}` by the high-oscillation grid cells and the grid skeleton; applying step 1.1 to that finite rectangle family gives the needed small cube cover. The local theorem statement is standard, but this supplied proof step is false as written. Both assigned Reynolds theorems list this item directly and use it for zero-extension integrability. It is published and outside reader edit scope.

2. **Assigned proof-contract locator.** In `research/numerical-analysis-remaining-71-2026-10-17-batch-67.proof-contracts.json`, `contracts.thm-ale-reynolds-transport-identity.axioms[0].uses` is `4.1`. Current Proof step 4.1 substitutes the Jacobian identity and changes variables; it does not use Countable Choice. Step 5.1 invokes the Countable-Choice-dependent divergence theorem and the Borel Riemann/Lebesgue comparison. The mathematical proof declares and uses the axiom, but the contract points to the wrong proof step. I left the contract untouched because this assignment authorizes source edits only in assigned item/page prose, with contract updates conditional on a material item repair.

## Page verdicts

- `ale-interface-and-partitioned-multiphysics-discretization`: **Pass with an external-dependency hold.** Its prose and assigned mathematical branches match the item statements. The one- and higher-dimensional Reynolds branches depend on the published Lebesgue-criterion proof defect above; the page should not be treated as fully cleared until that dependency is repaired or otherwise resolved.
- `ale-interface-and-partitioned-multiphysics-discretization-examples`: **Pass.** The recurrence, two-cell mesh, fluxes, traces, Robin iterations, stop threshold, and stated limits agree with the supplied definitions and theorems.

## Blockers and coverage limits

There was no blocker to completing the assigned reading. The run status snapshot separately reported the existing `3a-collect` blocker `collect-11 failed 3x` for batch 11; it is outside this batch.

I opened every assigned carrier and every direct published item dependency, plus the cited ODE/splitting suppliers listed above. I did not independently audit the full transitive dependency closure of those published suppliers. The web reader verified Hairer's exact-flow Lie/Strang composition and order discussion in §5, PDF pp. 11–12 ([source](https://www.unige.ch/~hairer/poly_geoint/week2.pdf)); the Donea and Joosten PDF endpoints returned internal errors in this review, so I did not independently re-stamp those complete texts. Their citations were contextual: the assigned ALE, matrix, and recurrence results are proved locally. No other citation defect was identified in the reviewed carriers.
