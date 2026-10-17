---
id: alg-saga-finite-sum-method
kind: algorithm
title: Finite-sum SAGA
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
    - title: "Aaron Defazio, Francis Bach, and Simon Lacoste-Julien, SAGA: A Fast Incremental Gradient Method With Support for Non-Strongly Convex Composite Objectives, NeurIPS 2014"
      url: https://proceedings.neurips.cc/paper_files/paper/2014/file/937964195d6fb3a55cd7cc578165f058-Paper.pdf
      locator: Section 2, SAGA algorithm and Theorem 1.
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018)"
      url: https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf
      locator: Section 5.3.2, Algorithm 5.2, estimator and storage discussion.
    - title: "Robert M. Gower and Alexandre Gramfort, Optimization for Data Science: Stochastic Variance Reduced Gradient Methods, lecture notes"
      url: https://gowerrobert.github.io/pdf/M2_statistique_optimisation/optimization_IV_variance_reduced-expanded.pdf
      locator: Slides 57–59, SAGA convergence and comparison with SAG.
---

## Definition

Let n,d>=1, let f_1,...,f_n:R^d->R be continuously differentiable, and set F(x)=n^{-1}sum_i f_i(x), with \nabla F(x)=n^{-1}sum_i\nabla f_i(x) by [[lem-finite-sum-gradient-is-average]] and [[def-finite-sum]]. Given a deterministic initial point x_0 and step size \eta>0, initialize a table \alpha_i^0=\nabla f_i(x_0) and its mean \bar\alpha_0=n^{-1}sum_i\alpha_i^0. At iteration k:

1. Draw I_k uniformly from {1,...,n}, independently of the history \mathcal F_k.
2. Evaluate $g_k=\nabla f_{I_k}(x_k)$ once. Using the old table, form
   $$
   v_k=g_k-\alpha_{I_k}^k+\bar\alpha_k,\qquad x_{k+1}=x_k-\eta v_k.
   $$
3. Replace only the sampled table entry, using the pre-update point:
   $$
   \alpha_{I_k}^{k+1}=g_k,\qquad \alpha_i^{k+1}=\alpha_i^k\quad(i\ne I_k),
   $$
   and set
   $$
   \bar\alpha_{k+1}=\bar\alpha_k+\frac1n\big(g_k-\alpha_{I_k}^k\big).
   $$

The stored state is the current iterate, the component-gradient table, and its running mean. For each fixed history, each coordinate of the correction is a scalar control-variate estimator in [[def-control-variate-estimator]]: take one uniform sample $I$ from $\{1,\ldots,n\}$, integrand $i\mapsto(\nabla f_i(x_k))_j$, control $i\mapsto(\alpha_i^k)_j$, known control mean $(\bar\alpha_k)_j$, and coefficient $1$. The conditional claims are proved locally. The conditional-expectation convention inherits [[def-axiom-of-choice]] from [[def-stochastic-gradient-oracle-and-unconstrained-update]].
