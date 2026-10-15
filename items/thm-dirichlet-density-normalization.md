---
id: thm-dirichlet-density-normalization
kind: theorem
title: "Dirichlet density normalization by iterated Beta integrals"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - thm-real-power-continuity-and-derivatives
  - thm-algebra-of-continuous-functions
  - thm-composition-of-continuous-functions
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-borel-sets-are-lebesgue-measurable
  - def-dirichlet-density-kernel
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-beta-density-normalization
  - thm-real-beta-gamma-identity
  - thm-real-gamma-euler-integral-convergence
  - def-real-gamma-function-by-the-euler-integral
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the nonnegative Lebesgue change-of-variables supplier. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §3.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Gero Walter, A Technical Note on the Dirichlet-Multinomial Model, 2013"
      url: "https://epub.ub.uni-muenchen.de/14068/1/tech-rep-131_gero-walter.pdf"
---

## Statement

Assume Countable Choice. For $k\ge2$ and $\alpha_j>0$,
$$\int_{\Delta_{k-1}}\prod_{j=1}^kp_j^{\alpha_j-1}\,dp_1\cdots dp_{k-1} =\frac{\prod_{j=1}^k\Gamma(\alpha_j)}{\Gamma(\alpha_+)}\in(0,\infty).$$
Consequently the density kernel in [[def-dirichlet-density-kernel]] has
integral one.

## Facts & Assumptions

**Given:** Countable Choice, $k\ge2$, and $\alpha_1,\ldots,\alpha_k>0$.

[A1] Countable Choice is required for the stated nonnegative Lebesgue change-of-variables theorem. [[def-countable-choice]].

[F1] The simplex and its nonnegative density kernel are defined in coordinate Lebesgue measure by [[def-dirichlet-density-kernel]].

[F2] A $C^1$ diffeomorphism between open sets changes variables in a nonnegative Lebesgue integral under Countable Choice. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]].

[F3] Tonelli factors a nonnegative product integral over sigma-finite product spaces. Under Countable Choice, Lebesgue measures are sigma-finite, their products agree with Euclidean Lebesgue measure on Borel sets, and Euclidean Borel sigma-algebras are the corresponding product Borel sigma-algebras. Thus Tonelli applies to nonnegative Borel functions in coordinate Lebesgue integrals. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]].

[F4] For $u,v>0$, the one-dimensional Beta integrand has Lebesgue integral $B(u,v)=\Gamma(u)\Gamma(v)/\Gamma(u+v)$, finite and positive. [[lem-beta-density-normalization]].

[F5] The Beta-Gamma identity holds for positive arguments. [[thm-real-beta-gamma-identity]].

[F6] For every $s>0$, $\Gamma(s)$ is strictly positive by the positive-integrand observation in its definition and finite by the Euler-integral convergence theorem. [[def-real-gamma-function-by-the-euler-integral]] [[thm-real-gamma-euler-integral-convergence]].

[F7] Positive-coordinate real powers are continuous; finite sums, products and compositions of continuous real functions are continuous. Continuous maps have Borel preimages, and Borel subsets of Euclidean space are Lebesgue measurable under Countable Choice. [[thm-real-power-continuity-and-derivatives]] [[thm-algebra-of-continuous-functions]] [[thm-composition-of-continuous-functions]] [[thm-continuous-preimages-of-borel-sets-are-borel]] [[thm-borel-sets-are-lebesgue-measurable]].

## Proof

**Given:** Countable Choice, $k\ge2$, and positive $\alpha_1,\ldots,\alpha_k$.

1.1 On the open simplex, each coordinate $p_i$ for $i<k$ and the residual coordinate $p_k=1-\sum_{i<k}p_i$ is continuous and strictly positive. By [F7], $p\mapsto\prod_{j=1}^kp_j^{\alpha_j-1}$ is therefore continuous, hence Borel measurable there. Since the simplex is open, extending this nonnegative function by zero outside it gives a Borel measurable function on $\mathbb R^{k-1}$; Borel sets are Lebesgue measurable by [F7], so the integrand has the Lebesgue measurability required by [F2]. Define the stick-breaking map from $(0,1)^{k-1}$ to $\Delta_{k-1}$ by $p_i=z_i\prod_{j<i}(1-z_j)$ for $i<k$. Its inverse is $z_i=p_i/(1-\sum_{j<i}p_j)$, so it is a $C^1$ diffeomorphism. Its derivative matrix is lower triangular with diagonal entries $\prod_{j<i}(1-z_j)$; hence its Jacobian is $\prod_{i=1}^{k-2}(1-z_i)^{k-i-1}$. [A1, F1, F2, F7, algebra]

2.1 Under this change of variables, each factor $p_j^{\alpha_j-1}$ contributes $z_j^{\alpha_j-1}$ and a factor $(1-z_i)^{\alpha_j-1}$ for each $i<j$; the Jacobian adds exponent $k-i-1$ to $1-z_i$. Thus the transformed integrand is $\prod_{i=1}^{k-1}z_i^{\alpha_i-1} (1-z_i)^{\sum_{j>i}\alpha_j-1}.$ This factorization is valid because all coordinates and residuals are strictly positive on the open cube. [step 1.1, algebra]

3.1 Each one-variable factor in step 2.1 is continuous on $(0,1)$, hence Borel measurable by [F7]. Using the product-measure identification in [F3], repeated Tonelli and [F4] now give the integral as $\prod_{i=1}^{k-1}B\!\left(\alpha_i,\sum_{j>i}\alpha_j\right).$ Applying [F5] to each factor cancels the intermediate Gamma terms and leaves $\prod_{j=1}^k\Gamma(\alpha_j)/\Gamma(\alpha_+)$. [A1, F3, F4, F5, F6, F7, step 2.1, algebra]

4.1 By [F6] the displayed ratio is finite and positive. Multiplying the integrand by the reciprocal constant in [F1] therefore gives integral one, which proves normalization. [F1, F6, step 3.1, algebra] ∎