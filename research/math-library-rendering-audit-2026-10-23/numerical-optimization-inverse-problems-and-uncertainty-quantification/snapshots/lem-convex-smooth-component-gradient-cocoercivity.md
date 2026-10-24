---
id: lem-convex-smooth-component-gradient-cocoercivity
kind: lemma
title: Cocoercive gradient bound for a convex smooth finite sum
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-sum
  - def-euclidean-inner-product
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-lipschitz-holder-contraction
  - lem-l-smoothness-descent-inequality
  - thm-differentiable-convex-functions-and-gradient-inequality
  - lem-finite-sum-gradient-is-average
  - lem-finite-sum-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Rie Johnson and Tong Zhang, Accelerating Stochastic Gradient Descent using Predictive Variance Reduction, NeurIPS 2013"
      url: https://proceedings.neurips.cc/paper_files/paper/2013/file/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Paper.pdf
      locator: Section 3, inequality (8) and the proof of Theorem 1.
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Section 6.3, Lemma 6.4 and its complete proof.
---

## Statement

Let n,d>=1, L>0, and let f_i:R^d->R be continuously differentiable, convex, with L-Lipschitz gradients. Put F=n^{-1}sum_i f_i. For all x,y in R^d,

$$\frac1n\sum_{i=1}^n\|\nabla f_i(x)-\nabla f_i(y)\|_2^2 \le 2L\big(F(x)-F(y)-\langle\nabla F(y),x-y\rangle\big).$$

## Facts & Assumptions

**Given:** n,d>=1, L>0, the functions and regularity assumptions in the Statement, and the finite-sum convention of [[def-finite-sum]].

[F1] [[lem-l-smoothness-descent-inequality]]: an L-Lipschitz gradient gives f(z)<=f(w)+<grad f(w),z-w>+(L/2)||z-w||_2^2 for all w,z.

[F2] [[thm-differentiable-convex-functions-and-gradient-inequality]]: a differentiable convex function satisfies f(z)>=f(w)+<grad f(w),z-w>.

[F3] [[def-lipschitz-holder-contraction]]: L-Lipschitz means ||grad f_i(a)-grad f_i(b)||_2<=L||a-b||_2.

[F4] [[lem-finite-sum-gradient-is-average]]: grad F(y)=n^{-1}sum_i grad f_i(y).

[F5] [[def-euclidean-inner-product]]: ||z||_2^2=<z,z>, and the inner product is linear in each variable.

[F6] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity is the segment inequality for values of the function.

[F7] [[lem-finite-sum-laws]]: finite sums are additive and scale linearly.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 Fix i and y, and define h_i(z)=f_i(z)-<grad f_i(y),z>. Substituting this expression into the segment inequality [F6] shows that subtracting this linear function preserves convexity, and grad h_i(y)=0. By [F2] applied at y, h_i(z)>=h_i(y) for every z, so y is a global minimizer of h_i. [F2, F6, given, algebra]

2.1 Apply [F1] to h_i at x and z=x-grad h_i(x)/L. Since subtracting a linear function leaves gradient differences unchanged, h_i is still L-smooth; substitution and algebra give h_i(z)<=h_i(x)-||grad h_i(x)||_2^2/(2L). Step 1.1 gives h_i(y)<=h_i(z), hence ||grad f_i(x)-grad f_i(y)||_2^2<=2L(f_i(x)-f_i(y)-<grad f_i(y),x-y>). [F1, F3, F5, step 1.1, given, algebra]

3.1 Sum the step 2.1 inequalities over i and divide by n. By [F4], grad F(y)=n^{-1}sum_i grad f_i(y); additivity and scaling [F7] identify the right side with 2L(F(x)-F(y)-<grad F(y),x-y>). [F4, F7, step 2.1, given, algebra] ∎
