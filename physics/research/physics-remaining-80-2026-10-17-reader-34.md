# Reader report — batch 34

**Run:** `physics-remaining-80-2026-10-17`  
**Role:** Step 3a reader  
**Scope:** batch `34` only

## Verdict

Both assigned pages pass after review. The assigned A-page summary was clarified to state the Countable Choice conditions for continuous Lebesgue and Jordan-volume calculations and to preserve the conditional, model-based status of the results. The B-page prose needed no edit. Nine assigned items were repaired; no uneditable defect or blocker remains.

These are mathematical deductions within declared models and preparations. No experimental observation, measurement uncertainty, or statistical inference is asserted by this batch.

## Opened inventory

Opened both pages from the batch manifest:

- `library/classical-statistical-mechanics/csm-exact-models.md` (A page)
- `library/classical-statistical-mechanics/csm-exact-models-examples.md` (B page)

Opened all 16 assigned items, reading mathematical and physical suppliers before their consumers:

- `lem-csm-examples-gamma-gaussian-tools`
- `lem-csm-examples-smooth-flow-jacobian`
- `thm-csm-examples-flow-fine-entropy`
- `thm-csm-examples-quadratic-covariance`
- `thm-csm-examples-spherical-marginal`
- `post-csm-examples-ensemble-preparations`
- `pthm-csm-harmonic-ensemble`
- `pthm-csm-ideal-gas-ensemble`
- `pthm-csm-ising-ring-correlation`
- `pthm-csm-tonks-rod-ensemble`
- `pthm-csm-spherical-shell-gas`
- `ex-csm-harmonic-ensemble`
- `ex-csm-ideal-gas-ensemble`
- `ex-csm-ising-ring-correlation`
- `ex-csm-tonks-rod-ensemble`
- `ex-csm-spherical-shell-gas`

Opened the direct suppliers used by the assigned statements and proofs: `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`, `cor-volume-of-the-unit-n-ball`, `def-countable-choice`, `def-gr-observer-and-rest-space`, `def-natural-logarithm`, `def-real-analytic-function`, `def-real-exponential-function-and-e`, `def-rpm-mechanical-momentum-and-observer-energy`, `lem-cm-determinant-derivative-along-a-matrix-curve`, `lem-gaussian-integral-is-finite-and-positive`, `lem-gaussian-square-is-the-plane-gaussian-integral`, `lem-gr-observer-projection-decomposition`, `lem-plane-gaussian-integral-in-polar-coordinates`, `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`, `post-csm-counting-and-physical-observables`, `post-rpm-null-test-particle-action`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-chain-rule-for-total-derivatives`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-clairaut-schwarz-mixed-partials`, `thm-exponential-is-strictly-increasing`, `thm-extreme-value-metric`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-graphs-of-continuous-functions-have-content-zero`, `thm-heine-borel-rn`, `thm-intermediate-value`, `thm-jordan-boundary-criterion`, `thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `thm-log-one-plus-x-power-series`, `thm-logarithm-derivative-and-integral`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-monotone-convergence-for-the-integral`, `thm-natural-logarithm-laws`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-power-series-sums-are-real-analytic`, `thm-real-analytic-functions-closed-under-algebra-quotients-and-composition`, `thm-real-power-continuity-and-derivatives`, `thm-tdmath-ising-chain-limit`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and `thm-trace-of-ab-equals-trace-of-ba`. Relevant transitive calculus, measure, and product-measure prerequisites were opened where used.

The source checks included Taylor, *Introduction to Analysis in Several Variables*, §3.1, equations (3.1.72)–(3.1.75); NIST DLMF §5.2(i); Lebl, *Basic Analysis II*, Theorem 10.7.2; Tong, *Statistical Physics*, §§2.2–2.2.4 and §5.3.1; Kardar, MIT OCW 8.333 Lectures 13–14, the cited §§IV.D–IV.E and IV.G/IV.I; and Warwick PX439/CO904 notes §3.5 for the Tonks gas. The cited model sources were used for source fidelity and context; the proofs remain conditional on the stated mathematical hypotheses and adopted preparations.

## Repairs and evidence

- **`lem-csm-examples-smooth-flow-jacobian`:** made the torus case explicit as a quotient by a lattice, specified the tangent-field projection and equation, and fixed the final step’s references to the preceding variational and determinant steps. The diffeomorphism hypothesis supplies nonsingularity; the divergence-free conclusion follows from the stated determinant ODE. The local derivative calculation uses the assigned chain-rule, mixed-partial, determinant, and trace suppliers.
- **`thm-csm-examples-flow-fine-entropy`:** specified the torus vector field by its bundle projection and the equation `∂tχ=b∘χ`. This makes the imported Jacobian result’s torus hypotheses exact. The chart partition is for a fixed supplied diffeomorphism on a compact torus; the proof does not assert flow existence.
- **`thm-csm-examples-quadratic-covariance`:** stated `ACω` for the Euclidean Lebesgue calculations and supplied the product-measure, Tonelli/Fubini, linear change-of-variables, truncation, and Riemann/Lebesgue comparison prerequisites. The proof constructs a Cholesky factor, explicitly factors the nonnegative normalizer, verifies absolute integrability before signed cross-moment factorization, and keeps the bounded-domain counterexample separate from the full-space Gaussian claim. The Gaussian and gamma formulas are supported by the assigned integral lemma; the exact Jordan change-of-variables supplier was checked against Lebl, Theorem 10.7.2.
- **`pthm-csm-harmonic-ensemble`:** stated `ACω` and the product-Lebesgue/Tonelli/Fubini prerequisites for the joint law, and made the inherited covariance conclusion conditional on the exact positive quadratic preparation. The calculation uses the specified Gaussian covariance supplier and the stated fixed reference convention.
- **`pthm-csm-ideal-gas-ensemble`:** stated `ACω`, the Euclidean product and polar-measure hypotheses, and the required null-set fact. The separate ultra-relativistic branch now defines `H_ur(p)=c|p|` on all of `R³` for integration, explains that the continuous value at the origin has zero Lebesgue mass, and does not identify the branch with a massive-particle limit. The observer projection is derived from the cited RPM/GR definitions. The radial partition calculation uses the Lebesgue polar-coordinate supplier rather than hand-truncated angular coordinates; the speed mode proof gives the derivative sign and global maximum. Pressure derivatives now state their fixed parameters. The radial partition step was moved into canonical phase order and its dependent step points to `2.3`.
- **`pthm-csm-tonks-rod-ensemble`:** stated `ACω` and the product/Jordan-to-Lebesgue prerequisites. Added the Heine–Borel supplier for the closed ordered simplex and gave the compact boundary-graph argument establishing Jordan measurability before applying the affine determinant-one volume calculation. The pressure derivative now specifies which physical parameters are held fixed. The result remains limited to the stated one-dimensional hard-rod model.
- **`ex-csm-harmonic-ensemble`:** replaced the implicit orthogonal-complement choice with the explicit determinant-one coordinates `u=q₁`, `rᵢ=qᵢ−q₁`; then bounded the integrand below on a compact positive-volume transverse box while integrating the free translation coordinate. This proves divergence of the declared partition integral without assuming a normalized probability law.
- **`ex-csm-ideal-gas-ensemble`:** carried the mathematical measure hypothesis into the specialization and made the speed-mode conclusion follow from the derivative sign on the positive half-line. Its Poisson probability statements remain consequences of the finite grand-canonical preparation, not empirical observations.
- **`ex-csm-tonks-rod-ensemble`:** carried the parent theorem’s `ACω` premise into the specialization; the remainder computation stays within the parent’s strict `aρ<1` domain.
- **A-page summary `csm-exact-models`:** now records the `ACω` qualifications for the Gaussian covariance, continuous Lebesgue-product, and Jordan-volume calculations, and states that the physical calculations are conditional model consequences rather than measurements or general ensemble claims.

The batch-34 proof contract was refreshed for the nine changed items: derivation text and step inputs were transcribed from the final proof paragraphs, citation-use routes were synchronized, and the ideal-gas endpoint boundary was updated to cite the polar-coordinate step `2.3`. No `verification.judge` record existed on the edited items, so none was retained as stale.

## Items reviewed without edits

`lem-csm-examples-gamma-gaussian-tools`, `thm-csm-examples-spherical-marginal`, `post-csm-examples-ensemble-preparations`, `pthm-csm-ising-ring-correlation`, `pthm-csm-spherical-shell-gas`, `ex-csm-ising-ring-correlation`, and `ex-csm-spherical-shell-gas` were reviewed with their cited dependencies. Their statements and proofs were consistent with their declared domains, inputs, measure conventions, source qualifications, and model scopes; no repair was warranted.

The cross-batch draft dependency `post-csm-counting-and-physical-observables` was also checked because the assigned preparation postulate depends on it. Its direct mathematical supplier `def-csm-phase-space-reference` states the `ACω` premise under which the phase space and Liouville reference are constructed; the dependency closure supplies that premise. No missing-hypothesis finding was recorded for this dependency.

## Page verdicts

- **`csm-exact-models` (A): pass after summary repair.** The page now carries the relevant Countable Choice conditions and correctly limits the physical results to their declared preparations and model conventions.
- **`csm-exact-models-examples` (B): pass, no edit.** The examples accurately summarize the assigned calculations and distinguish exact conditional model results from measurements, equilibration claims, or evidence that a preparation occurs in nature.

## Validation and outstanding issues

- Reflow ran for all nine changed items; all were unchanged by the formatter.
- Precheck passed for all nine changed items.
- The required proof-layout command checked the nine changed items: **43 steps, 0 defects**.
- No in-scope defect remains unedited. No blocker remains.
- Source note: the compact-Jordan change-of-variables supplier lists a Leibman PDF link that did not load during review. Its alternate citation, Lebl Theorem 10.7.2, was accessible and checked against the exact compact-Jordan statement used here; this did not leave a proof gap.
