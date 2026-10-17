---
id: alg-svrg-finite-sum-method
kind: algorithm
title: Finite-sum SVRG
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-sum
  - def-control-variate-estimator
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-axiom-of-choice
  - lem-finite-sum-gradient-is-average
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Rie Johnson and Tong Zhang, Accelerating Stochastic Gradient Descent using Predictive Variance Reduction, NeurIPS 2013"
      url: https://proceedings.neurips.cc/paper_files/paper/2013/file/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Paper.pdf
      locator: Sections 2–3, Figure 1 and Theorem 1.
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Section 6.3, SVRG estimator, Lemma 6.4 and Theorem 6.5.
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018)"
      url: https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf
      locator: Section 5.3.1, Algorithm 5.1 and its gradient-work discussion.
---

## Definition

Let n,d>=1 and let f_1,...,f_n:R^d->R be continuously differentiable convex functions. Define the finite-sum objective

$$
F(x)=\frac1n\sum_{i=1}^n f_i(x),\qquad \nabla F(x)=\frac1n\sum_{i=1}^n\nabla f_i(x),
$$

where the gradient identity follows from [[lem-finite-sum-gradient-is-average]] and the sums use [[def-finite-sum]]. Suppose each component gradient is L-Lipschitz for a common L>0. An SVRG epoch with snapshot \tilde x and inner length m>=1 is:

1. Compute the full gradient \nabla F(\tilde x), set x_0=\tilde x.
2. For t=0,...,m-1, draw I_t uniformly from {1,...,n}, independently of the past, and set
   $$
   v_t=\nabla f_{I_t}(x_t)-\nabla f_{I_t}(\tilde x)+\nabla F(\tilde x),\qquad x_{t+1}=x_t-\eta v_t
   $$
   for a selected step size \eta>0.
3. Independently draw J uniformly from {0,...,m-1} and return x_J as the next snapshot.

Without caching component gradients at \tilde x, one epoch uses n+2m component-gradient evaluations: n for the full gradient and two for each inner update. It stores a constant number of d-vectors and so uses O(d) working memory. The correction has the control-variate form of [[def-control-variate-estimator]] with coefficient one and the known finite-sum reference mean; the conditional properties needed here are proved in local results on this page. Conditional-expectation notation inherits the [[def-axiom-of-choice]] assumption from [[def-stochastic-gradient-oracle-and-unconstrained-update]].
