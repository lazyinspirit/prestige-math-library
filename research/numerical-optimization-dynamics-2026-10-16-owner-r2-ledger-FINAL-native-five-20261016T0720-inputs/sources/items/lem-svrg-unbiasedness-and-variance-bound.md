---
id: lem-svrg-unbiasedness-and-variance-bound
kind: lemma
title: SVRG conditional unbiasedness and variance bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-svrg-finite-sum-method
  - lem-convex-smooth-component-gradient-cocoercivity
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
  - lem-conditioning-a-known-variable-and-an-independent-variable
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-finite-sum-gradient-is-average
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rie Johnson and Tong Zhang, Accelerating Stochastic Gradient Descent using Predictive Variance Reduction, NeurIPS 2013"
      url: https://proceedings.neurips.cc/paper_files/paper/2013/file/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Paper.pdf
      locator: Section 3, Theorem 1 proof and the conditional estimator variance inequality.
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Section 6.3, Lemma 6.4 and the full variance calculation in Theorem 6.5.
---

## Statement

Let f_i:R^d->R be convex and continuously differentiable with L-Lipschitz gradients, set F=n^{-1}sum_i f_i, and let x* satisfy grad F(x*)=0. Conditional on a filtration \mathcal F_t, suppose x_t and the snapshot \tilde x are measurable, the uniform index I_t is independent of \mathcal F_t, and the relevant second moments are finite. For

$$
v_t=\nabla f_{I_t}(x_t)-\nabla f_{I_t}(\tilde x)+\nabla F(\tilde x),
$$

one has

$$
\mathbb E[v_t\mid\mathcal F_t]=\nabla F(x_t),\qquad
\mathbb E[\|v_t\|_2^2\mid\mathcal F_t]
\le4L(F(x_t)-F(x^*))+4L(F(\tilde x)-F(x^*)).
$$

## Facts & Assumptions

**Given:** The finite-sum hypotheses and filtration in the Statement, AC for conditional-expectation classes, and the SVRG estimator definition.

[F1] [[alg-svrg-finite-sum-method]]: v_t=grad f_{I_t}(x_t)-grad f_{I_t}(\tilde x)+grad F(\tilde x), with I_t uniform and independent of the past.

[F2] [[lem-convex-smooth-component-gradient-cocoercivity]]: n^{-1}sum_i||grad f_i(x)-grad f_i(y)||_2^2<=2L(F(x)-F(y)-<grad F(y),x-y>).

[F3] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: filtration-measurable iterates and conditional expectations use the stated oracle convention; AC is assumed for the conditional-expectation classes.

[F4] [[def-conditional-expectation-as-an-ae-class]]: conditional expectations are almost-sure classes whose existence is supplied under AC.

[F5] [[lem-conditioning-a-known-variable-and-an-independent-variable]]: an integrable real variable independent of the conditioning sigma-algebra has conditional expectation equal to its mean.

[F6] [[thm-taking-out-what-is-known]]: an integrable measurable factor can be taken outside conditional expectation.

[F7] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and preserves finite integrable sums.

[F8] [[def-euclidean-inner-product]]: the inner product is bilinear and ||u||_2^2=<u,u>.

[F9] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: |<u,v>|<=||u||_2||v||_2.

[F10] [[lem-finite-sum-gradient-is-average]]: the gradient of F is the finite average of the component gradients.

[A1] [[def-axiom-of-choice]]: assume AC for existence of the conditional-expectation classes used below.

## Proof

**Given:** The objects, hypotheses, and finite second moments in the Statement.

1.1 Condition on \mathcal F_t. Each component gradient at x_t or \tilde x is known given \mathcal F_t, while the indicators 1_{I_t=i} have conditional expectation 1/n by [F5]. Taking the known component gradients outside with [F6], summing by [F7], and using [F10] gives E[v_t|\mathcal F_t]=n^{-1}sum_i(grad f_i(x_t)-grad f_i(\tilde x))+grad F(\tilde x)=grad F(x_t). [A1, F1, F3, F4, F5, F6, F7, F10, given, algebra]

2.1 Write $a_i=\nabla f_i(x_t)-\nabla f_i(x^*)$ and $b_i=\nabla f_i(\widetilde x)-\nabla f_i(x^*)$. Since $\nabla F(x^*)=0$, [F1] gives $v_t=a_{I_t}-(b_{I_t}-\bar b)$ with $\bar b=n^{-1}\sum_i b_i=\nabla F(\widetilde x)$. The centered term has conditional mean zero by [F5]–[F7], and $\mathbb E[\|b_{I_t}-\bar b\|_2^2\mid\mathcal F_t]=n^{-1}\sum_i\|b_i-\bar b\|_2^2=n^{-1}\sum_i\|b_i\|_2^2-\|\bar b\|_2^2\le n^{-1}\sum_i\|b_i\|_2^2$, by expansion and $n^{-1}\sum_i b_i=\bar b$. [A1, F1, F3, F5, F6, F7, F8, F9, step 1.1, given, algebra]

3.1 Expanding the square and applying [F9] together with 2ab<=a^2+b^2 gives ||a_{I_t}-(b_{I_t}-\bar b)||_2^2<=2||a_{I_t}||_2^2+2||b_{I_t}-\bar b||_2^2. Apply [F2] with y=x* to the first finite average and to the second; grad F(x*)=0 makes the linear term vanish, so the two averages are at most 2L(F(x_t)-F(x*)) and 2L(F(\tilde x)-F(x*)). Multiplying their sum by 2 proves the displayed second-moment bound. [A1, F2, F8, F9, step 2.1, given, algebra] ∎
