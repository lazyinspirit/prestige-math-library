# Step 3a reader report — batch 61

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Scope: batch `61`

## Verdict

Reviewed both assigned pages and all 29 assigned items in dependency order, together with their direct mathematical suppliers and the three A-page prerequisite pages. I repaired three in-scope defects. No confirmed mathematical defect remains unedited in the reviewed scope, and neither page needs prose repair.

## Opened inventory

Assigned pages:

- `particle-in-cell-and-particle-mesh-kinetic-methods` (A)
- `particle-in-cell-and-particle-mesh-kinetic-methods-examples` (B)

Required pages:

- `interacting-particle-mean-field-and-vortex-blob-error`
- `elliptic-finite-difference-methods`
- `spectral-collocation-and-galerkin-methods`

Assigned items, read in manifest dependency order:

- Level 0: `def-periodic-pic-grid-and-inner-product`.
- Level 1: `lem-periodic-composite-trapezoid-error`, `def-periodic-pic-shape-assignment-and-gather`, `thm-periodic-centered-difference-poisson-zero-mode-and-gauge`, `ex-periodic-high-frequency-pic-sampling-alias`.
- Level 2: `thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint`, `alg-periodic-pic-zero-mean-poisson-solver`, `thm-periodic-pic-charge-conservation-and-neutralized-source`, `thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth`, `thm-periodic-pic-deposition-potential-gather-adjointness`, `cex-periodic-nonneutral-source-has-no-poisson-solution`.
- Level 3: `lem-periodic-pic-smooth-assignment-weights`, `thm-periodic-pic-poisson-residual-to-gathered-force-bound`, `def-periodic-pic-regularized-grid-interaction-kernel`, `lem-periodic-pic-shape-partition-and-quadrature-bound`, `thm-periodic-pic-poisson-solver-returns-the-zero-mean-solution`, `ex-periodic-one-dimensional-pic-cic-charge-deposition`.
- Level 4: `alg-periodic-pic-classical-rk4-step`, `def-periodic-pic-separable-hamiltonian-grid-model`, `thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz`, `thm-periodic-pic-smooth-density-grid-force-consistency`, `ex-cold-two-stream-stipulated-pic-experiment`.
- Level 5: `thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy`, `thm-periodic-pic-mean-field-error-with-force-defect`, `thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube`, `ex-periodic-smooth-density-poisson-grid-force-error`.
- Level 6: `thm-periodic-pic-leapfrog-geometric-properties-and-order-two-error`, `thm-periodic-pic-staged-fixed-regularization-error-budget`.
- Level 7: `ex-periodic-pic-leapfrog-energy-drift-for-a-harmonic-mode`.

Direct published item suppliers opened for the assigned arguments included `def-euler-midpoint-rk4-tableaus`, `def-explicit-runge-kutta-tableau-and-stage-map`, `def-euclidean-inner-product`, `def-first-order-ode-initial-value-problem-and-solution`, `def-one-step-ode-method-local-defect-order-and-stability`, `def-globally-lipschitz-mean-field-kernel`, `def-p-one-wasserstein-one`, `def-characteristic-mean-field-solution`, `def-mean-field-and-weighted-vortex-particle-systems`, `thm-gronwall-integral-inequality`, `thm-w1-dobrushin-stability-with-force-defect`, `prop-euler-midpoint-rk4-orders-and-stability-functions`, `lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube`, `def-leapfrog-step-map`, `def-local-leapfrog-domain-on-an-open-configuration-set`, `def-countable-choice`, `lem-canonical-kick-and-drift-shears-have-symplectic-jacobians`, `prop-local-leapfrog-and-symplectic-euler-are-symplectic`, `thm-local-symplectic-euler-and-leapfrog-trajectory-errors`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `def-periodic-fourier-collocation-grid`, `lem-periodic-fourier-mode-aliasing-under-sampling`, `alg-periodic-fourier-collocation-differentiation-matrix`, and `thm-periodic-fourier-collocation-differentiation-is-exact`.

I read the assigned proof-contract inventory: all 23 proof-bearing items have contract rows; the six definition/algorithm items have no phase-proof contracts. I checked the contract fact and derivation coverage against the assigned proof structure. The repaired cold two-stream contract now records the RK4 algorithm as F3 and reflects step 2.1.

## Repairs

1. `def-periodic-pic-shape-assignment-and-gather`, `## Definition`: the displayed kernel used $\alpha_\varepsilon=e^{-\varepsilon/L}$ without requiring $\varepsilon>0$. At $\varepsilon=0$ the formula is undefined at the origin; for $\varepsilon<0$ it is not the positive normalized kernel used by the later arguments. I added the essential hypothesis $\varepsilon>0$. The continuum kernel theorem already states the equivalent condition $\alpha_\varepsilon\in(0,1)$, and the smooth-assignment and force-error results already fix positive $\varepsilon$.

2. `alg-periodic-pic-classical-rk4-step`, `## Definition`: the exact-arithmetic procedure had a `field-solve-failure` outcome without a defined failure condition. Its admissible stage sources are compatible by `thm-periodic-pic-charge-conservation-and-neutralized-source`, and `thm-periodic-pic-poisson-solver-returns-the-zero-mean-solution` guarantees each exact solve. I made the invalid-input condition explicit, listed its direct shape and charge-conservation dependencies, and specified success for admissible inputs. The downstream RK4 error theorem and the cold two-stream example were checked against the revised procedure.

3. `ex-cold-two-stream-stipulated-pic-experiment`, `## Statement`, `## Facts & Assumptions`, and proof step 2.1: it specified use of an RK4 update “from the A page” without identifying the algorithm or listing it in `deps`. I added `alg-periodic-pic-classical-rk4-step` as a dependency and F3 citation, and updated its proof-contract citation and step derivation. Charge conservation supplies compatibility; the algorithm supplies the exact stage calls and update.

No stale `verification.judge` record existed on the three changed items. No item was withdrawn or retitled.

## Page verdicts

- `particle-in-cell-and-particle-mesh-kinetic-methods` (A): the summary matches the reviewed definitions and results. Its distinction between ordinary interpolation and the separate variational-force branch is preserved. Its local periodic solvability result is not attributed to the required rectangular Dirichlet supplier. No page-prose edit was needed.
- `particle-in-cell-and-particle-mesh-kinetic-methods-examples` (B): the summary matches the reviewed examples, including spectral aliasing, CIC's derivative jump, the stipulated initial data, the fixed-$\varepsilon$ estimate, and the abstract harmonic diagnostic. No page-prose edit was needed.

The three required pages were consistent with their declared roles: the mean-field page supplies the probability $W_1$ convention and force-defect stability; the elliptic page is restricted to rectangular Dirichlet methods; and the spectral page contains the Fourier collocation suppliers used by the alias example.

## Evidence and checks

The assigned proofs were checked directly, including the periodic zero-mode range and gauge, the finite Fourier solver, the residual-to-gathered-force factor $h^{-d/2}$, the tensor trapezoid constant, the smooth-density force estimate, the conditional RK4 recurrence, the separate Hamiltonian force, and the coupling constructions in both Wasserstein estimates. The examples' arithmetic and their distinctions between the centered-difference PIC model, Fourier collocation, CIC, and the abstract oscillator were checked directly.

I opened Myers, Colella, and Van Straalen, §2.1–2.2 (UC eScholarship PDF, pp. 3–6; the paper's displayed lines 163–188 and 241–275 describe PIC stage construction, periodic finite-difference Poisson solve, centered field difference, and same-shape interpolation). This supports the source attribution for the conventional PIC stages; the assigned periodic compatibility, smooth regularization, and error estimates are established by the local proofs. No external source was needed to close an unresolved claim.

Required item checks after the edits:

- `reflow.mts`: unchanged for all three changed items.
- `precheck.mts`: definitions/algorithm reported 0 checked, 0 failing; the changed example passed (1 checked, 0 failing).
- `proof-layout.mjs` on all three changed paths: 3 items, 2 steps, 0 defects.

## Remaining defects and blockers

No confirmed mathematical defect remains unedited in the reviewed batch. The dispatch manifest `numerical-analysis-remaining-71-2026-10-17-batch-61.pages.json` was left unchanged; its dependency mirrors therefore still need owner-side reconciliation for the two items whose `deps` changed.

The run status was `running`, with no dispatch in flight. It reported a separate run-level blocker at `3a-collect`: batch 11 had failed three times. That blocker did not prevent the batch 61 review or local repairs. I did not alter autopilot state.

Coverage limitation: I checked the direct mathematical supplier statements and proofs used at the assigned proof steps; I did not re-audit every transitive proof dependency behind all published suppliers. I found no defect in a published supplier at the use sites examined.
