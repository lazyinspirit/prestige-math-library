---
id: thm-equivalence-violation-bounds-d-optimal-design-gap
kind: theorem
title: "The D-equivalence violation bounds the finite-budget design's log-determinant gap"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-finite-budget-multiplicative-d-optimal-design
  - thm-multiplicative-design-update-well-defined-and-terminates
  - def-approximate-linear-model-design-and-optimality-criteria
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - lem-log-determinant-concavity-on-positive-definite-matrices
  - thm-determinant-differential-and-jacobis-formula
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule-for-total-derivatives
  - thm-d-optimality-equivalence-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §§3.1.5 and 7.5.2"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "The complete book was retrieved; §§3.1.5 and 7.5.2 were read for positive-definite log-determinant concavity and the D-optimal dual/equivalence interpretation."
    - title: "Holger Dette, Andrey Pepelyshev, and Anatoly Zhigljavsky, Improving Updating Rules in Multiplicative Algorithms for Computing D-optimal Designs, §§1–2"
      url: "https://eldorado.tu-dortmund.de/bitstreams/45748862-e3e2-4e73-b8a5-7528e8b409c0/download"
      locator: "The complete 15-page paper was retrieved and read; §2's finite-design multiplicative update and sensitivity function were inspected. No asymptotic convergence claim is imported."
---

## Statement

Let $\mathcal X$ be a finite nonempty candidate set, let $p\ge1$, and let $\xi$ be any returned nonsingular approximate design from [[alg-finite-budget-multiplicative-d-optimal-design]]. Put $M=M(\xi)$ and
$$s_x=f_x^TM^{-1}f_x,\qquad v=\max_{x\in\mathcal X}s_x-p.$$
Then $v\ge0$, every nonsingular approximate competitor $\eta$ satisfies
$$\log\det M(\eta)-\log\det M(\xi)\le v,$$
and $v=0$ if and only if $\xi$ is D-optimal among nonsingular approximate designs.

## Facts & Assumptions

**Given:** A finite candidate set $\mathcal X$, feature vectors $f_x\in\mathbb R^p$, $p\ge1$, and a nonsingular approximate design $\xi$ returned by the stated algorithm.

[F1] [[alg-finite-budget-multiplicative-d-optimal-design]]: $M(\xi)=\sum_x\xi_xf_xf_x^T$, the finite sensitivity is $s_x=f_x^TM(\xi)^{-1}f_x$, and the returned violation is $v=\max_xs_x-p$.

[F2] [[def-approximate-linear-model-design-and-optimality-criteria]]: approximate design weights are nonnegative and sum to one; nonsingular means $M(\xi)$ is positive definite; D-optimality maximizes $\log\det M(\xi)$ over nonsingular designs.

[F3] [[lem-log-determinant-concavity-on-positive-definite-matrices]]: $\log\det$ is concave along every segment of positive-definite matrices.

[F4] [[thm-determinant-differential-and-jacobis-formula]], [[thm-logarithm-derivative-and-integral]], and [[thm-chain-rule-for-total-derivatives]]: along an invertible differentiable matrix path $M_t$, $(\log\det M_t)'=\operatorname{tr}(M_t^{-1}M_t')$.

[F5] [[def-trace-of-a-square-matrix]] and [[def-matrix-product-and-identity-matrix]]: trace is the sum of diagonal entries and matrix products are the finite coordinate products.

[F6] [[thm-d-optimality-equivalence-theorem]]: a nonsingular approximate design is D-optimal exactly when $f_x^TM(\xi)^{-1}f_x\le p$ for every candidate $x$.

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F5],
$$\sum_x\xi_xs_x=\sum_x\xi_x\operatorname{tr}(M^{-1}f_xf_x^T)=\operatorname{tr}\!\left(M^{-1}\sum_x\xi_xf_xf_x^T\right)=\operatorname{tr}(M^{-1}M)=\operatorname{tr}(I_p)=p.$$
The first rank-one trace identity follows by expanding the diagonal sum: $\operatorname{tr}(M^{-1}f_xf_x^T)=\sum_{i,j}(M^{-1})_{ij}(f_x)_j(f_x)_i=f_x^TM^{-1}f_x$. Since the $\xi_x$ are nonnegative and sum to one, their weighted average of the $s_x$ is at most their maximum. The displayed equality therefore gives $\max_xs_x\ge p$ and $v\ge0$. [F1, F2, F5, given, algebra]

1.2 Let $\eta$ be any nonsingular approximate competitor and put $N=M(\eta)$ and $M_t=(1-t)M+tN$. The segment is positive definite because for each nonzero $u$, $u^TM_tu=(1-t)u^TMu+t u^TNu>0$. Define $g(t)=\log\det M_t$. By [F3], $g$ is concave, and [F4] gives $g'(0)=\operatorname{tr}(M^{-1}(N-M))$. For $0<s<1$, concavity gives $g(s)\ge(1-s)g(0)+sg(1)$, hence $g(1)-g(0)\le(g(s)-g(0))/s$. Letting $s\downarrow0$ and using the right derivative $g'(0)$ proves $\log\det N-\log\det M\le\operatorname{tr}(M^{-1}(N-M))$. [F2, F3, F4, given, algebra]

2.1 Expand $N=\sum_x\eta_x f_xf_x^T$ and $M=\sum_x\xi_xf_xf_x^T$. By the rank-one trace identity proved in step 1.1, $\operatorname{tr}(M^{-1}N)=\sum_x\eta_xs_x$ and $\operatorname{tr}(M^{-1}M)=p$. Since $\eta$ is an approximate design, $\sum_x\eta_xs_x\le\max_xs_x=p+v$. Thus step 1.2 yields $\log\det M(\eta)-\log\det M(\xi)\le v$. [step 1.1, step 1.2, F2, F5, algebra]

3.1 If $v=0$, then $s_x\le p$ for every $x$, so [F6] makes $\xi$ D-optimal. Conversely, if $\xi$ is D-optimal, [F6] gives $s_x\le p$ for every $x$; step 1.1 says their $\xi$-weighted average equals $p$, so their maximum is exactly $p$ and $v=0$. This proves both directions. [step 1.1, F6, algebra] ∎
