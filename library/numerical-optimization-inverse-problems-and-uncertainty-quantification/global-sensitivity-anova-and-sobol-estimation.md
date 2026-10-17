---
page: global-sensitivity-anova-and-sobol-estimation
title: Global sensitivity anova and sobol estimation
status: draft
items:
  - def-dependent-input-shapley-effects
  - def-product-coordinate-projections
  - lem-uniform-interval-poincare-inequality
  - alg-exact-permutation-shapley-effects
  - alg-monte-carlo-permutation-shapley-effects
  - lem-product-coordinate-projections-commute-and-contract
  - thm-shapley-effects-are-nonnegative-and-efficient
  - def-product-hoeffding-anova-components
  - thm-monte-carlo-shapley-effects-clt-and-standard-errors
  - thm-product-hoeffding-anova-decomposition
  - def-first-and-total-sobol-indices
  - thm-complete-chaos-tensor-expansions-give-sobol-coefficients
  - thm-pick-freeze-sobol-covariance-identities
  - thm-poincare-bound-for-total-sobol-effect
  - alg-pick-freeze-monte-carlo-sobol-estimators
  - thm-pick-freeze-sobol-ratio-joint-clt-and-mcse
examples: []
---

## Objective

For a finite independent product input and a square-integrable real output,
[[thm-product-hoeffding-anova-decomposition]] constructs orthogonal Hoeffding
ANOVA components with variance sum. [[def-first-and-total-sobol-indices]]
defines first-order and total Sobol indices only when the output variance is
positive. [[thm-pick-freeze-sobol-covariance-identities]] gives unbiased
numerator identities, and the independent-bundle procedure
[[alg-pick-freeze-monte-carlo-sobol-estimators]] has a joint CLT and plug-in
MCSE under AC, finite fourth moment and positive output variance, while its
ratio is not generally unbiased.

The derivative bound [[thm-poincare-bound-for-total-sobol-effect]] uses a
coordinate Poincare inequality when a real product-measurable representative has
almost-everywhere coordinate sections that are absolutely continuous with
square-integrable derivatives. Under Countable
Choice and Dependent Choice, Fourier Parseval proves the sharp uniform-interval
constant $L_i^2/\pi^2$; more general coordinate laws may use any established
Poincare constant $C_i$.
[[thm-complete-chaos-tensor-expansions-give-sobol-coefficients]] gives
support-grouped Sobol coefficients under Countable Choice and an explicit
completeness hypothesis. UQ1's finite cutoff assumptions alone do not assert
completeness.

For dependent inputs and $Y=f(X)$, the separate Shapley definition
[[def-dependent-input-shapley-effects]] uses the game
$$v(S)=\operatorname{Var}(\mathbb E[Y\mid\sigma(X_j:j\in S]))$$
and averages its marginal gains over all input permutations; its
conditional-expectation interface assumes AC. Do not apply independent Sobol
formulas to dependent coordinates. The RQMC lemma
[[lem-b-adic-anova-parseval]] assumes Countable Choice and the uniform cube
$[0,1)^d$; its b-adic frequency components are not identified with arbitrary
product-law conditional ANOVA components.
