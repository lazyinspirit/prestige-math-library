---
id: alg-diagonal-adagrad-online-regret
kind: algorithm
title: Diagonal AdaGrad for online convex losses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-subgradient-and-subdifferential
  - def-euclidean-inner-product
  - def-proximal-mapping
  - def-finite-sum
  - thm-of-square-roots
  - def-convex-subset-of-euclidean-space
  - def-metric-topology
  - lem-metrics-on-rn
  - lem-finite-sum-laws
  - lem-of-square-positive
provenance:
  statement: literature-derived
  proof: not-applicable
justified_by:
  - lem-diagonal-adagrad-subproblem-well-defined
verification:
  precheck: n/a
sources:
  references:
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization, JMLR 12 (2011)"
      url: https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf
      locator: Sections 2–3, Algorithm 1 and the composite mirror-descent update.
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Sections 3.1–3.3, projected convex optimization and online gradient bounds.
---

## Definition

Let d>=1 and let C be a nonempty closed convex subset of R^d, closed in the standard Euclidean metric topology of [[lem-metrics-on-rn]] and convex as in [[def-convex-subset-of-euclidean-space]]. Fix x_1 in C, a constant eta>0, and epsilon>0. On round t, after observing a convex loss ell_t:C->R, choose a subgradient g_t in partial ell_t(x_t), with subgradient convention [[def-subgradient-and-subdifferential]]. For j=1,...,d set

$$s_{t,j}=\sqrt{\epsilon^2+\sum_{k=1}^t g_{k,j}^2},\qquad A_t=\operatorname{diag}(s_{t,1},...,s_{t,d}).$$

For a positive diagonal matrix A, write ||z||_A^2=z^TAz. Set x_{t+1} to the unique minimizer

$$x_{t+1}=\operatorname*{argmin}_{x\in C}\{\eta\langle g_t,x\rangle+\tfrac12\|x-x_t\|_{A_t}^2\}.$$

Because epsilon>0, every diagonal entry s_{t,j} is positive. The displayed minimizer exists and is unique by [[lem-diagonal-adagrad-subproblem-well-defined]], so the procedure is defined at each finite round. This is the proximal update in the diagonal metric A_t; after the coordinate scaling A_t^{1/2}, its subproblem is an ordinary Euclidean proximal problem in the sense of [[def-proximal-mapping]].

## Remarks

Each $g_{k,j}^2$ is nonnegative by [[lem-of-square-positive]], including the
zero case. Clause 4 of [[lem-finite-sum-laws]] makes its finite sum
nonnegative, so $\epsilon^2+\sum_{k=1}^t g_{k,j}^2\ge\epsilon^2>0$.
[[thm-of-square-roots]] therefore supplies a nonnegative, nonzero root
$s_{t,j}$, hence $s_{t,j}>0$. This verifies the positive diagonal hypothesis
used by the subproblem result.
