---
id: lem-scaffold-convex-control-lag
kind: lemma
title: Convex SCAFFOLD control-lag recursion
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-scaffold
  - def-scaffold-analysis-trajectory-and-errors
  - lem-uniform-client-sampling-moments
  - lem-relaxed-euclidean-squared-norm
  - lem-smooth-convex-gradient-difference
  - lem-finite-sum-gradient-is-average
  - def-euclidean-inner-product
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.1, Lemma 11"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $f_i:\mathbb R^d\to\mathbb R$ be convex, differentiable and
$\beta$-smooth, with $f=N^{-1}\sum_i f_i$ minimized at $x^\star$. Run
Option II SCAFFOLD with a uniform size-$S$ client sample, $1\le S\le N$, and
conditionally unbiased local stochastic gradients of variance at most
$\sigma^2$. Assume the client controls are updated to averages of the $K$
local stochastic gradients when selected, and define the control lag $C_r$
and local drift $E_r$ as in the SCAFFOLD analysis-trajectory definition.
Then, for every $r\ge1$,
$$ C_r\le\left(1-\frac SN\right)C_{r-1} +\frac SN\left(4\beta\mathbb E[f(x_{r-1})-f^\star]+2\beta^2E_r\right). $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.1, Lemma 11 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions
**Given:** The Option II control updates, local paths and convex equal-client objective in the Statement.

[F1] [[alg-scaffold]]: a selected client replaces its control by the average of the local gradients used in the round; an unselected control persists.

[F2] [[def-scaffold-analysis-trajectory-and-errors]]: $C_r$ is the expected squared error of the mean full gradient at a client's stored query anchors from $\nabla f_i(x^\star)$, averaged over clients, and $E_r$ averages the squared displacements at the current gradient-query points $y_{i,k-1}^r$.

[F3] [[lem-smooth-convex-gradient-difference]] and [[lem-finite-sum-gradient-is-average]]: the average client gradient at the minimizer is zero and the population mean of squared client-gradient differences from $x^\star$ is at most $2\beta(f(x)-f^\star)$.

[F4] [[lem-relaxed-euclidean-squared-norm]] and [[def-euclidean-inner-product]]: squared norms are convex and satisfy $\|u+v\|_2^2\le2\|u\|_2^2+2\|v\|_2^2$.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectations preserve the nonnegative inequalities and finite weighted averages used below.

## Proof

1.1 Set $p=S/N$. By [F1], a uniform sample retains a client's old query [given]
anchors with probability $1-p$ and replaces them with the current local
query points with probability $p$. The definition of $C_r$ in [F2] and
Jensen's inequality for the average of $K$ vectors therefore give
$$ C_r\le(1-p)C_{r-1} +\frac{p}{NK}\sum_{i=1}^N\sum_{k=1}^K \mathbb E\|\nabla f_i(y_{i,k-1}^r)-\nabla f_i(x^\star)\|_2^2. $$ [F1, F2, F5, given, algebra]

2.1 For each summand, decompose $\nabla f_i(y)-\nabla f_i(x^\star)= (\nabla f_i(x_{r-1})-\nabla f_i(x^\star))+ (\nabla f_i(y)-\nabla f_i(x_{r-1}))$. By [F4], its squared norm is at most twice the squared norm of each term. Averaging the first term over clients and using [F3] gives at most $4\beta\mathbb E[f(x_{r-1})-f^\star]$; averaging the second over clients and local steps and using $\beta$-Lipschitzness gives at most $2\beta^2E_r$. Average step 1.1 over clients and substitute these two bounds to obtain the recurrence. [F2, F3, F4, step 1.1, given, algebra] ∎