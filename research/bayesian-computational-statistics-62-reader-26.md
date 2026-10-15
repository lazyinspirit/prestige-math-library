# Step 3a reader report — batch 26

Run: bayesian-computational-statistics-62  
Date: 2026-10-15

## Opened inventory

### Assigned pages

- laplace-approximation-and-marginal-integration (A; Laplace approximation and deterministic quadrature) — library/bayesian-computational-statistics/laplace-approximation-and-marginal-integration.md.
- laplace-approximation-and-marginal-integration-examples (B; Laplace approximation and deterministic quadrature — Examples) — library/bayesian-computational-statistics/laplace-approximation-and-marginal-integration-examples.md.

### Assigned items, reviewed supplier before consumer

- def-composite-trapezoidal-rule (definition; dependency level 0) — items/def-composite-trapezoidal-rule.md.
- lem-positive-definite-gaussian-integral (lemma; dependency level 0) — items/lem-positive-definite-gaussian-integral.md.
- lem-linear-interpolation-error-bound (lemma; dependency level 0) — items/lem-linear-interpolation-error-bound.md.
- thm-laplace-approximation-under-unique-interior-maximum (theorem; dependency level 1) — items/thm-laplace-approximation-under-unique-interior-maximum.md.
- thm-composite-trapezoidal-rule-error-bound (theorem; dependency level 1) — items/thm-composite-trapezoidal-rule-error-bound.md.
- ex-exact-gaussian-laplace-integral (example; dependency level 0) — items/ex-exact-gaussian-laplace-integral.md.
- cex-boundary-mode-changes-laplace-rate (counterexample; dependency level 0) — items/cex-boundary-mode-changes-laplace-rate.md.
- cex-singular-interior-mode-changes-laplace-rate (counterexample; dependency level 0) — items/cex-singular-interior-mode-changes-laplace-rate.md.
- cex-equal-multiple-modes-double-laplace-constant (counterexample; dependency level 2) — items/cex-equal-multiple-modes-double-laplace-constant.md.
- ex-one-panel-composite-trapezoid-on-square (example; dependency level 2) — items/ex-one-panel-composite-trapezoid-on-square.md.

### Direct dependencies opened

All unique external direct dependencies declared for the assigned items were opened at their current definition or statement sections; the cited hypotheses and relevant assumptions were checked against use. They were published carriers. The opened IDs are:

cor-additivity-of-the-nonnegative-lebesgue-integral, cor-exponential-reciprocal-and-positivity, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, cor-second-order-taylor-expansion-with-the-hessian, def-borel-sigma-algebra, def-cholesky-factorisation-with-positive-diagonal, def-ck-and-multi-index-notation-in-several-variables, def-convex-subset-of-euclidean-space, def-countable-choice, def-darboux-integral, def-determinant-of-a-square-matrix, def-euclidean-inner-product, def-finite-sum, def-hessian-and-euclidean-critical-point, def-higher-derivatives-and-smoothness, def-integral-of-a-nonnegative-simple-function, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-matrix-product-and-identity-matrix, def-matrix-space, def-measurable-function-between-measurable-spaces, def-nonnegative-lebesgue-integral, def-product-sigma-algebra-and-finite-product-sigma-algebras, def-self-adjoint-and-normal-endomorphism, lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets, lem-closed-subset-of-a-compact-space-is-compact, lem-metrics-on-rn, prop-closure-properties-of-measurable-functions-used-by-the-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, thm-additivity-over-subintervals, thm-algebra-of-continuous-functions, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-borel-sets-are-lebesgue-measurable, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-cauchy-schwarz-and-the-euclidean-norm, thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, thm-compact-subset-is-closed-and-bounded, thm-composition-of-continuous-functions, thm-continuous-implies-integrable, thm-continuous-preimages-of-borel-sets-are-borel, thm-derivative-of-exponential, thm-determinant-multiplicative, thm-determinant-of-a-triangular-matrix, thm-determinant-of-transpose, thm-dominated-convergence, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-exponential-is-strictly-increasing, thm-extreme-value-metric, thm-gaussian-integral, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, thm-linearity-of-the-integral, thm-monotone-convergence-for-the-integral, thm-monotonicity-of-the-integral, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-newton-leibniz-with-interior-derivative, thm-nonnegative-measurable-functions-admit-increasing-simple-approximations, thm-of-square-roots, thm-real-square-matrix-invertible-iff-determinant-nonzero, thm-rolle, thm-substitution-for-improper-integrals, thm-tonelli-theorem-for-sigma-finite-product-spaces.

The batch proof-contract file research/bayesian-computational-statistics-62-batch-26.proof-contracts.json was checked for all ten assigned entries and compared with the current carriers; it was treated as evidence rather than a verdict.

## Review and edits

One citation locator was repaired in the assigned draft item lem-linear-interpolation-error-bound. It previously pointed to §2.1, Theorem 3 and a broadly described second-order interpolation remainder; the exact pointwise remainder is in §1.1, Theorem 1 (Cauchy interpolation remainder), equations (5)–(6). Equation (6) with degree one gives M/2 |(x-a)(x-b)| = M(x-a)(b-x)/2, exactly the lemma’s bound. The proof and statement were unchanged. Its proof-contract entries concern the proof-local facts and derivations, which did not change; the contract has no external bibliography-locator field. No verification.judge record was present to remove.

The item reflow reported unchanged, precheck passed, and the final proof-layout run reported one item, four steps, and zero defects. No other assigned item or page was edited. Existing proof steps had blank-line separation and valid terminal tags/QED placement.

## Citation checks

- Endre Süli, [Numerical Computation](https://people.maths.ox.ac.uk/suli/nc.pdf), §1.1 Theorem 1 and equations (5)–(6) give the pointwise Lagrange interpolation remainder; its degree-one case is the lemma’s bound. Section 2.1 Theorem 3 and equation (14), PDF pp. 12–13, give the one-panel trapezium bound; §2.2 equations (20)–(21), PDF pp. 15–16, give the composite formula and bound.
- Driscoll and Braun, [Fundamentals of Numerical Computation](https://tobydriscoll.net/fnc-julia/localapprox/integration.html), §5.6, equations (5.6.1)–(5.6.4) and the second-order accuracy discussion, gives the equal-panel trapezoid formula and its order context; the exact bound is proved locally.
- [NIST DLMF §2.3(iii)](https://dlmf.nist.gov/2.3), equations (2.3.13)–(2.3.18) and conditions (a)–(c), treats one-dimensional endpoint Laplace asymptotics. The assigned items accurately identify it as context and note where its setting differs from their local theorems.
- The UConn PHYS 2400 seven-page [Laplace-method PDF](https://www.phys.uconn.edu/~rozman/Courses/P2400_23S/downloads/laplace-method-integrals.pdf) contains one-dimensional Gaussian scaling and endpoint/nonquadratic examples on pp. 2–6; it does not prove the assigned multivariate Gaussian lemma, which is proved locally.
- Francis Bach, [Approximating Integrals with Laplace’s Method](https://francisbach.com/laplace-method/), gives the compact-domain Hessian/Jacobian derivation used as context; the local theorem supplies its own domination and off-mode bounds.

## Defects not repaired

None remain unrepaired.

## Page verdicts

- laplace-approximation-and-marginal-integration: pass. Its summary accurately states the compact unique-mode hypotheses, local rescaling/DCT and exponential off-mode control, the absence of a general noncompact-tail claim and a relative O(n^-1) rate, and the composite trapezoid result.
- laplace-approximation-and-marginal-integration-examples: pass. Its summary accurately describes the exact Gaussian case, boundary and singular-mode counterexamples, equal-mode sum, and sharp one-panel quadrature witness.

## Blocker and coverage note

No blocker. I reviewed all assigned page and item carriers and the directly declared published dependency definitions/statements needed to check the uses in the authored proofs. I did not independently re-prove the published suppliers’ proofs. No unresolved mathematical uncertainty remains in the assigned claims.
