# Step 3a reader report — batch 25

- **Run:** `physics-td-qft-rpm-62-2026-10-14`
- **Batch:** `25`
- **Role:** independent reader
- **Scope:** `rpm-hamiltonian-constraints` and its examples page.

## Opened inventory

### Assigned pages

- `rpm-hamiltonian-constraints` (A), `library/relativistic-particle-mechanics/rpm-hamiltonian-constraints.md`
- `rpm-hamiltonian-constraints-examples` (B), `library/relativistic-particle-mechanics/rpm-hamiltonian-constraints-examples.md`

### Assigned items, read in dependency order

The A page contains 22 items: `def-rpm-h-cotangent-phase-space`, `def-rpm-h-temporal-chart-data`, `def-rpm-h-almost-regular-legendre`, `def-rpm-h-background-and-model-quantities`, `def-rpm-h-regular-constraint-system`, `thm-rpm-h-canonical-poisson-and-flow`, `post-rpm-h-free-test-particle-action`, `post-rpm-h-massless-shell-action`, `thm-rpm-h-constraint-consistency`, `thm-rpm-h-first-class-local-reduction`, `thm-rpm-h-homogeneous-legendre-degeneracy`, `thm-rpm-h-local-legendre-and-energy-descent`, `thm-rpm-h-second-class-dirac-bracket`, `thm-rpm-h-flat-shell-global-reduction`, `thm-rpm-h-homogeneous-massive-shell`, `thm-rpm-h-regular-local-gauge-slice`, `thm-rpm-h-first-order-action-and-geodesics`, `thm-rpm-h-inertial-time-reduced-hamiltonian`, `pthm-rpm-h-action-mechanical-momentum`, `pthm-rpm-h-massive-and-null-time-motion`, `thm-rpm-h-temporal-shell-reduction`, and `pthm-rpm-h-coordinate-versus-observer-energy`.

The B page contains 2 items: `cex-rpm-h-nonhausdorff-first-class-quotient` and `ex-rpm-h-shifted-chart-negative-energy`.

### Dependency items opened

Opened the direct mathematical and physical suppliers needed to check the assigned claims: `def-countable-choice`, `def-tautological-one-form-on-a-cotangent-bundle`, `thm-the-canonical-cotangent-two-form-is-symplectic`, `def-symplectic-form-and-symplectic-manifold`, `def-symplectic-vector-space`, `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure`, `thm-existence-and-uniqueness-of-the-exterior-derivative`, `lem-the-tautological-one-form-is-intrinsic-and-smooth`, `def-gr-smooth-lorentzian-objects`, `def-gr-inverse-metric-and-musical-isomorphisms`, `def-fibre-derivative-and-legendre-transform-of-a-lagrangian`, `def-rpm-spacetime-observer-and-worldline`, `thm-a-regular-level-set-is-an-embedded-submanifold`, `thm-smooth-functions-form-a-poisson-algebra`, `thm-smooth-dependence-of-ode-solutions-on-parameters`, `post-sr-ideal-clocks-and-light`, `thm-darboux-theorem`, `thm-cm-stationarity-iff-euler-lagrange`, `def-symplectic-orthogonal-complement`, `prop-symplectic-double-orthogonal-and-dimension-identities`, `thm-frobenius-local-coordinate-theorem`, `cor-local-normal-form-for-submersions`, `def-sr-affine-minkowski-model`, `lem-lorentz-form-has-orthonormal-basis`, `thm-sr-proper-time-and-observer-decomposition`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-geodesic-of-an-affine-connection`, `def-covariant-derivative-along-a-curve`, `post-sr-massive-particle-dynamics`, `pthm-sr-momentum-and-four-force`, `def-gr-timelike-worldline-and-proper-time`, and `lem-gr-observer-pairing-with-future-causal-vectors`.

The relevant curved-spacetime/worldline clauses of the draft dependency `def-rpm-spacetime-observer-and-worldline` were checked in the context of its batch-25 use. No defect affecting those uses was confirmed.

For the cotangent-bracket definition change, I also checked the current batch-26 consumer clauses in `def-rpm-h-poincare-charge-space`, `thm-rpm-h-poincare-moment-map-and-algebra`, `thm-rpm-h-first-class-constraint-family`, `thm-rpm-h-local-hamilton-jacobi`, `pthm-rpm-h-classical-orbit-evolution`, `thm-rpm-h-killing-shell-first-integral`, `pthm-rpm-h-free-symmetry-conservation`, `pthm-rpm-h-hj-trajectories`, `cex-rpm-h-instantaneous-potential-free-boost`, and `ex-rpm-h-two-shell-consistency-obstruction`. Their canonical-bracket uses agree with the explicit convention now stated in the cotangent phase-space definition; the other consumers reviewed use only the cotangent one-form/form, shell or local chart interfaces and are unchanged by this clarification.

## Repairs and evidence

1. **`def-rpm-h-cotangent-phase-space`** — Defined the canonical bracket from the nondegenerate two-form and gave its induced-coordinate formula. The action-unit statement now refers to this defined bracket. The sign follows by contracting `dq^i∧dp_i` with a coordinate vector field; it agrees with the existing `thm-rpm-h-canonical-poisson-and-flow` convention and the checked Poincaré moment-map consumer. Updated its proof-contract boundary text.

2. **`def-rpm-h-temporal-chart-data`** — Replaced the underspecified “coordinate map” with an explicit smooth diffeomorphism from an open chart domain onto an open product `I×Ω`; specified `I`, `Ω`, `U`, coordinate functions, and index ranges. The lapse/shift metric convention and the computed future-unit normal remain unchanged. The local setup matches Gourgoulhon, §§3.3.1 and 4.2.2, especially equations (3.4)–(3.6) and (4.28), (4.31), and (4.47)–(4.49). Updated its proof-contract boundary text.

3. **`def-rpm-h-background-and-model-quantities`** — Defined `flat`, `sharp`, the inverse metric, the chart inverse-matrix notation, and “future causal” for covectors by the nonzero future-causal condition on the metric dual. Specified the real parameter and proper-time density and verified its invariance under an increasing `C¹` reparameterization with positive derivative by the chain rule. Added a local orthonormal-component derivation that the observer-annihilating covector subspace has a positive-definite inverse-metric form, making the spatial-momentum norm explicit. This closes the undefined covector and “regular parameter” uses in its own downstream claims. Updated its proof-contract boundary text.

4. **`post-rpm-h-free-test-particle-action`** — Specified the open interval parameter and tangent and replaced “increasing regular parameter” with the exact positive-derivative reparameterization condition; the length density’s invariance follows directly from the chain rule. Henneaux–Regge–Teitelboim, Chapter II, equation (2.1) and accompanying text on printed pp. 27–28, support the adopted massive path-length action and arbitrary monotone worldline parameter. Updated the `physics_review.formulation` evidence.

5. **`post-rpm-h-massless-shell-action`** — Defined the inverse-metric components and metric-dual covector before using `g^{ab}` and `p^sharp` in the action and branch condition. Chagas-Filho, §1, equation (1), and §2, equation (9), state the einbein action and its massless form; eliminating the covector from the local first-order action gives that form, with the declared signature convention. Updated the `physics_review.formulation` evidence.

6. **`thm-rpm-h-canonical-poisson-and-flow`** — Replaced the unsupported invocation of Cartan’s identity in step 3.1 with a coordinate proof: the Hamiltonian vector-field Jacobian satisfies `(DX_H)^T J + J DX_H = 0`, and the variational equation for the derivative of the local flow gives `A^T J A = J`. This proves preservation on the actual local flow domain using the ODE supplier. Updated derivation 3.1 and its contract inputs.

7. **`thm-rpm-h-first-class-local-reduction`** — Replaced the unsupported Cartan-identity invocation in step 6.1 with the coordinate consequence of `dω_N=0`: since the restricted form has no `ds` components, its `dy^i∧dy^j` coefficients are independent of the leaf coordinates. This supplies the local reduced form, closedness, and nondegeneracy argument under the stated hypotheses. Updated derivation 6.1 and its contract inputs.

8. **`thm-rpm-h-regular-local-gauge-slice`** — Added an explicit point `z₀` on the constraint surface and on the gauge surface, with the gauge matrix invertible there. The proof now invokes the inverse function theorem at that joint zero, which is required for the claimed nearby gauge intersection. Updated derivations 2.2 and 3.1 and their contract inputs.

9. **`thm-rpm-h-homogeneous-massive-shell`** — Defined the metric dual, inverse metric, and future covector branch in the statement before using the shell notation. This is the pointwise nondegenerate-metric construction and preserves the original massive shell claim.

10. **`thm-rpm-h-flat-shell-global-reduction`** — Defined the affine metric dual of a cotangent vector and its inertial-coordinate components before using `p^sharp` in the regular-level argument.

11. **`thm-rpm-h-temporal-shell-reduction`** — Specified the inverse metric matrix and the component formula for `p^sharp` before the shell root and future-branch calculation. The inverse block calculation in step 1.1 then supplies the displayed lapse/shift shell formula.

12. **`pthm-rpm-h-action-mechanical-momentum`** — Specified the curve, interval, parameter, and tangent `V` before using them in the fibre-derivative and proper-time identities.

The batch-25 proof-contract file was updated for the repaired proof steps, definition boundaries, and the two postulate formulation reviews. None of the changed in-flight items had a `verification.judge` record to remove. Reflow and precheck were run for all 12 changed items; every reflow reported unchanged formatting and every precheck passed.

## Source checks

- Andrew Hanson, Tullio Regge & Claudio Teitelboim, *Constrained Hamiltonian Systems*, Chapter II, equation (2.1), printed pp. 27–28 ([source PDF](https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download)): the relativistic spinless particle action is proportional to path length, with an arbitrary monotone parameter.
- W. F. Chagas-Filho, [*Free massless particles and extended space-time algebra*](https://arxiv.org/pdf/hep-th/0401091), §1, equation (1), and §2, equation (9): the einbein formulation and the massless action. The paper calls the latter the zero-mass case of its einbein action; the assigned postulate distinguishes it from the massive square-root action, which is compatible with that source.
- É. Gourgoulhon, [*3+1 Formalism and Bases of Numerical Relativity*](https://arxiv.org/pdf/gr-qc/0703035), §3.3.1, equations (3.4)–(3.6), and §4.2.2, equations (4.28), (4.31), and (4.47)–(4.49): unit future normal, positive lapse, shift, metric components, and inverse metric.

These are adopted-model and geometric-convention sources. This batch contains no experiment report or empirical measurement claim.

## Page verdicts

- **`rpm-hamiltonian-constraints` (A):** All 22 items and the page summary were reviewed. The defects listed above were repaired in assigned items. The remaining conditional mathematical and physical claims are supported by their stated hypotheses, local derivations, and exact supplier statements. No uneditable defect was identified. This is the reader disposition only, not a judge or publication certification.
- **`rpm-hamiltonian-constraints-examples` (B):** Both items and the page summary were reviewed. The irrational-slope torus witness establishes distinct dense characteristic orbits and non-Hausdorff quotient separation. The shifted-chart example’s pullback, shell inequality, sign of the coordinate Hamiltonian, and distinction between coordinate and normal-observer speeds check out. No empirical claim is made and no defect was identified.

## Blocker and coverage limitation

The required command, `node tools/physics-support/proof-layout.mjs` with all 12 changed item paths, was run after the final item edit. Its renderer failed before checking layout with `ERR_MODULE_NOT_FOUND: Cannot find package '@/components' imported from /Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`. Therefore no proof-layout pass is claimed. Reflow and precheck succeeded for every changed item.

All assigned items, pages, and relevant direct dependency item texts were opened. I independently retrieved the cited Henneaux–Regge–Teitelboim, Chagas-Filho, and Gourgoulhon source PDFs for the postulates and lapse–shift convention; I did not retrieve every bibliography entry attached to the mathematical suppliers. No unresolved source-fidelity question remains for a claim in this batch.

No defect requiring an out-of-scope repair or routing was found.
