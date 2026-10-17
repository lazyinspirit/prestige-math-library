# Step 3a reader report — batch 54

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: independent reader  
Scope: batch `54`

## Opened inventory

### Assigned pages

- `library/numerical-differential-equations-and-stochastic-dynamics/geometric-numerical-integration.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/geometric-numerical-integration-examples.md`

### Assigned items, in dependency order

- Level 0: `def-local-leapfrog-domain-on-an-open-configuration-set`, `lem-local-hamiltonian-flow-preserves-symplectic-matrix`, `ex-backward-euler-is-a-stable-but-not-symplectic`, `ex-stoermer-verlet-bounded-harmonic-oscillator-energy`.
- Level 1: `alg-local-symplectic-euler-step`, `alg-implicit-midpoint-hamiltonian-step`, `lem-canonical-kick-and-drift-shears-have-symplectic-jacobians`.
- Level 2: `prop-local-leapfrog-and-symplectic-euler-are-symplectic`, `thm-local-symplectic-euler-and-leapfrog-trajectory-errors`, `thm-implicit-midpoint-branch-symplectic-order-and-error`, `ex-symplectic-euler-harmonic-oscillator`.
- Level 3: `lem-finite-modified-hamiltonian-exists`.
- Level 4: `lem-truncated-modified-flow-matches-map`, `lem-finite-modified-hamiltonian-close-to-original`.
- Level 5: `lem-one-step-modified-energy-defect`.
- Level 6: `thm-finite-order-modified-energy-bound`.

### Dependencies and cited targets opened

Opened the direct published suppliers used in these claims: `def-leapfrog-step-map`, `def-hamiltonian-vector-field-and-hamiltonian-function`, `lem-c1-euclidean-maximal-flow-with-c2-upgrade`, `thm-symmetry-of-higher-mixed-partials`, `def-symplectic-form-and-symplectic-manifold`, `thm-banach-fixed-point`, `thm-euclidean-implicit-function-theorem`, `thm-chain-rule-for-total-derivatives`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, `thm-extreme-value-metric`, `prop-a-hamiltonian-is-conserved-along-its-own-flow`, and `thm-existence-and-uniqueness-of-a-maximal-ode-solution`.

For the midpoint continuity, contraction, and stability repairs, also opened `def-banach-space`, `def-norm-and-normed-space`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `thm-euclidean-space-complete`, `cor-bolzano-weierstrass-in-rn`, and `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve`. For the energy-defect repair, opened `cor-mean-value-theorem`.

The A-page summary explicitly refers to the published HMC reversibility and volume result. I opened `library/bayesian-computational-statistics/hamiltonian-monte-carlo-and-leapfrog.md` and `thm-leapfrog-is-reversible-and-volume-preserving`; the stated global claims are qualified by their stated hypotheses. I also opened the two forward-reference targets in the finite-energy theorem remark: `def-exact-split-flows-lie-strang-and-bracket` and `def-regular-classical-rattle-step-map`.

## Edits and evidence

- `alg-implicit-midpoint-hamiltonian-step`: made the input checks and statuses exhaustive and ordered. A certified ball outside `U` returns `domain-failure`; unavailable or uncertified ball containment, unavailable or invalid bounds, and failed contraction inequalities return `branch-not-certified`. The exact output and the condition for admitting a subsequent step are now explicit. The contraction criterion and the iteration radii are proved by the assigned midpoint theorem.
- `thm-implicit-midpoint-branch-symplectic-order-and-error`: stated `d\ge1`, the Euclidean/operator norm convention, a positive finite horizon, the numerical recurrence, and `n\in\mathbb N_0`. The proof now derives completeness of the stage ball, obtains a convergent subsequence for the selected-root continuity argument, and derives the vector Lipschitz estimate from the Banach-valued mean-value inequality. It also spells out the Cayley-map derivative expansion, uses the mean-value estimate on the comparison segment, and proves the finite-budget loop terminates after at most `B` updates and evaluations while validating its reported radii. The dependencies and batch contract now include the exact suppliers for these facts.
- `thm-local-symplectic-euler-and-leapfrog-trajectory-errors`: recorded the one-step `O(h^2)` and `O(h^3)` defects that the proof already establishes and that the modified-Hamiltonian construction uses. The proof now derives symmetry of `M^{-1}`, makes the componentwise Taylor remainder passage explicit, and cites the Banach-valued mean-value inequality for vector stability. The batch dependency list and contract were updated.
- `lem-one-step-modified-energy-defect`: bounded the operator norm of the derivative of the finite modified Hamiltonian uniformly on the compact tube using the extreme-value theorem, then applied the scalar mean-value theorem along the exact comparison segment. Added those suppliers to the item and batch dependency lists and proof contract.
- `lem-canonical-kick-and-drift-shears-have-symplectic-jacobians`: added the finite-dimensional argument that a positive-definite symmetric matrix has a symmetric inverse, closing the unsupported `M^{-1}` symmetry fact.
- `lem-finite-modified-hamiltonian-exists`: changed its order fact to cite the explicit one-step defect statements now recorded in the local trajectory theorem.
- `thm-finite-order-modified-energy-bound`: removed the inaccurate claim that the Lie/Strang splitting definition treats IMEX methods. The opened target defines Lie and Strang exact split-flow compositions only.
- `ex-symplectic-euler-harmonic-oscillator`: clarified that the all-real-`h` matrix claim is the algebraic signed-step extension of the algorithm, whose input convention is `h>0`.
- Synchronized the batch-54 proof contracts and the batch manifest dependency lists with the repaired item interfaces. No edited draft item had a `verification.judge` record to remove.

The modified-Hamiltonian claim was checked against Ernst Hairer, [*Geometric Numerical Integration*, Lecture 3: Backward error analysis](https://www.unige.ch/~hairer/poly_geoint/week3.pdf): §2, Theorem 2, PDF pp. 5–6 gives Hamiltonian formal modified coefficients and notes global primitives on star-shaped domains; §3, Theorem 3, PDF p. 6 compares the numerical step with the truncated modified flow and sums its local defect for near-energy control. The assigned items make the finite-order and compact-tube qualifications explicit.

## Unedited defects

None. All confirmed defects found in the assigned items were repairable within batch 54. No published or other-batch supplier defect remained.

## Page verdicts

- `geometric-numerical-integration`: **pass after repairs**. The A-page summary matches the repaired items and the opened HMC dependency.
- `geometric-numerical-integration-examples`: **pass**. Its summary matches the three assigned computations; no page-prose edit was needed.

## Checks and blocker

Reflow and precheck were run for all eight changed items; reflow reported no further changes and every precheck passed. The required combined proof-layout pass reported `8 items, 30 steps, 0 defects`. No blocker remains.

## Coverage note

Both assigned pages and all 16 assigned items were reviewed in dependency order. The directly used suppliers and the two remark targets listed above were opened. The Hairer Lecture 2 PDF fetch timed out; the assigned shear and oscillator claims were checked directly from their displayed formulas and dependencies. Other required pages not used by an assigned claim were not independently audited.
