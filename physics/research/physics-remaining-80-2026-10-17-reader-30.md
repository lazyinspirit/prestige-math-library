# Step 3a reader report — batch 30

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `30`

## Opened inventory

Assigned pages:

- `library/classical-statistical-mechanics/csm-hamiltonian-statistics.md`
- `library/classical-statistical-mechanics/csm-hamiltonian-statistics-examples.md`

Assigned items, reviewed with their suppliers before their consumers:

- `lem-csm-dk-volume-form-pullback-preserves-reference-measure`
- `def-csm-dk-hamiltonian-flow-measure`
- `thm-csm-dk-integrable-covariance-green-kubo`
- `def-csm-dk-ergodic-and-mixing-notions`
- `post-csm-dk-selected-hamiltonian-dynamics`
- `thm-csm-dk-compact-hamiltonian-linear-response`
- `thm-csm-dk-finite-measure-recurrence`
- `thm-csm-dk-invariant-hamiltonian-and-shell-measures`
- `thm-csm-dk-qualified-time-averages`
- `thm-csm-dk-mixing-hierarchy`
- `thm-csm-dk-liouville-and-fine-entropy`
- `cex-csm-dk-weak-mixing-not-strong-mixing`
- `cex-csm-dk-recurrent-hamiltonian-nonergodicity`
- `pthm-csm-dk-qualified-hamiltonian-statistical-predictions`
- `cex-csm-dk-coarse-entropy-returns`

The ten A-page prerequisite pages opened were `euclidean-ordinary-differential-equations-with-smooth-dependence`, `hamiltonian-mechanics-and-completely-integrable-systems`, `measure-preserving-transformations-and-poincare-recurrence`, `product-measures-and-the-fubini-tonelli-theorems`, `strong-laws-of-large-numbers`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `td-math-mixture-dynamics-and-shells`, `the-lebesgue-integral-and-the-convergence-theorems`, `integration-of-forms-and-the-general-stokes-theorem`, and `measurable-densities-and-radon-volume-on-manifolds`.

All 32 distinct direct item prerequisites declared by the assigned inventory were opened: `def-countable-choice`, `def-borel-measurable-nonnegative-density-on-a-manifold`, `thm-density-measure-is-independent-of-the-chart-gluing`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `def-symplectic-form-and-symplectic-manifold`, `def-hamiltonian-vector-field-and-hamiltonian-function`, `thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions`, `thm-fundamental-theorem-for-autonomous-smooth-odes`, `cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form`, `def-density-bundle-and-smooth-density`, `thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure`, `def-integrable-real-and-complex-functions-and-their-integrals`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-tonelli-and-fubini-for-completed-product-measures`, `thm-dominated-convergence`, `def-measure-preserving-transformation-and-system`, `def-ergodic-measure-preserving-system`, `def-strong-and-weak-mixing`, `def-time-dependent-hamiltonian-vector-field-and-flow`, `thm-smooth-dependence-of-ode-solutions-on-parameters`, `thm-chain-rule-for-total-derivatives`, `thm-liouville-volume-preservation`, `prop-a-hamiltonian-is-conserved-along-its-own-flow`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-poincare-recurrence-for-finite-measure-preserving-systems`, `def-tdmath-regular-energy-shell`, `thm-tdmath-regular-energy-shell-measure`, `def-axiom-of-choice`, `thm-birkhoff-ergodic-probability-case-for-strong-laws`, `thm-mixing-implies-weak-mixing-implies-ergodicity`, `thm-chacon-transformation-is-weakly-mixing-but-not-mixing`, and `lem-chacon-tower-height-correlations-obstruct-mixing`.

Additional proof context opened for those published suppliers included `def-strict-and-mod-null-invariant-sigma-algebras`, `thm-ergodicity-and-invariant-functions`, `def-chacon-three-cut-one-spacer-towers`, `lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets`, `lem-chacon-levels-approximate-measurable-sets`, `lem-chacon-eigenfunctions-are-constant`, `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions`, `thm-chacon-transformation-is-ergodic`, and `def-unitary-eigenfunction-for-a-probability-system`.

## Repairs

- In `def-csm-dk-hamiltonian-flow-measure`, replaced the name-only “maximal local flow” description with its maximal solution intervals, domain `D`, evaluation map, regularity, and uniqueness flow law. The complete-invariant-domain clause now states the exact domain and image conditions. The canonical law is defined on Borel sets. The unit convention is explicitly SI, and the optional temperature parameters are typed and dimensioned. The ODE supplier provides local existence, uniqueness, and smooth dependence; Tong’s *Statistical Physics* §§1.2.1, 1.3.1 and 2.1 support the Boltzmann constant convention and classical phase-space weighting.
- In `post-csm-dk-selected-hamiltonian-dynamics`, identified points of `M` as model states, `H` as the supplied primitive energy function, and each unforced trajectory as a smooth map `R -> M` whose image remains in the complete invariant domain. The physical interpretation now specifies SI units, the meaning of canonical coordinates, and the model-local primitive status and role of `k_B`. The cited Tong sections support the canonical temperature and classical phase-space formulation; Tong’s *Classical Dynamics* §4.2 and Arovas §3.2 support Hamiltonian flow.
- In `def-csm-dk-ergodic-and-mixing-notions`, aligned ergodicity with the exact earlier definition: a set is strictly invariant when `T^{-1}E=E`, and ergodicity requires each such set to have probability zero or one. Updated `thm-csm-dk-mixing-hierarchy` to use that convention in its proof, `cex-csm-dk-recurrent-hamiltonian-nonergodicity` to state the invariant-set test exactly, and downstream statements in `thm-csm-dk-qualified-time-averages` and `pthm-csm-dk-qualified-hamiltonian-statistical-predictions`.
- In `thm-csm-dk-qualified-time-averages`, stated the flow-invariance premise as `mu(Phi_s^{-1}B)=mu(B)` for every real `s` and Borel `B` before asserting a mean for continuous-time averages. This is the hypothesis used when the proof moves the flow map through the integral.
- In `thm-csm-dk-compact-hamiltonian-linear-response`, added the SI time unit and the unit of observable `A`; the response derivative now explicitly has units `[A]`.
- Corrected Arovas source labels to match their linked sections (`§3.2` or `§3.3`) in `def-csm-dk-hamiltonian-flow-measure`, `pthm-csm-dk-qualified-hamiltonian-statistical-predictions`, `cex-csm-dk-recurrent-hamiltonian-nonergodicity`, and `cex-csm-dk-coarse-entropy-returns`; added Tong’s exact statistical-physics sources. Updated the batch proof-contract excerpts, the changed mixing-hierarchy derivation, and the postulate’s source/formulation evidence. None of the edited items carried a `verification.judge` record.

## Page verdicts

- `csm-hamiltonian-statistics`: **Pass after the listed repairs.** Its summary accurately distinguishes assumptions from mathematical deductions, states the normalizability, regular-shell, ergodicity, integrability, and compact-response qualifications, and does not claim measured equilibration or a central limit theorem.
- `csm-hamiltonian-statistics-examples`: **Pass.** The Chacon item uses the matching absolute-Cesàro weak-mixing definition; the oscillator example exhibits a strictly invariant set of intermediate shell probability while retaining almost-everywhere recurrence; the rotor computes an explicit decrease of partition entropy while the fine entropy remains constant. No example is presented as an observation.

No confirmed defect remains outside the repair scope, and there is no blocker.

## Required item checks

Final reflow and precheck passed for all nine changed items. The final proof-layout command covered all nine changed paths and reported `9 items, 22 steps, 0 defects`.

## Coverage limitation

I opened the assigned pages and items, every direct item dependency in the assigned manifest, all ten page prerequisites, and the additional Chacon and ergodicity statements needed to check the arguments. I did not independently audit the entire transitive mathematical dependency closure (the recursive closure contains about 1,380 item IDs); I relied on the exact current statements of published suppliers and checked their full local arguments where they supplied a disputed or unfamiliar step. The Green–Kubo source discusses equilibrium time-translation invariance and identifies a transport coefficient only after a separate long-time mean-square-displacement premise; the local theorem proves only its stated covariance-growth limit under absolute integrability.
