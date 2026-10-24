---
id: thm-multiplicative-design-update-well-defined-and-terminates
kind: theorem
title: "Finite-budget multiplicative design updates preserve the simplex and nonsingularity"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-finite-budget-multiplicative-d-optimal-design
  - def-nonlinear-experimental-design-and-local-identifiability
  - def-approximate-linear-model-design-and-optimality-criteria
  - thm-local-information-positive-definite-iff-full-column-rank
  - def-euclidean-inner-product
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Holger Dette, Andrey Pepelyshev, and Anatoly Zhigljavsky, Improving Updating Rules in Multiplicative Algorithms for Computing D-optimal Designs, §2"
      url: "https://eldorado.tu-dortmund.de/bitstreams/45748862-e3e2-4e73-b8a5-7528e8b409c0/download"
      locator: "The complete 15-page paper was retrieved; §2's multiplicative recurrence and finite-design conditions were inspected. This theorem proves only finite-budget well-definedness, not the paper's asymptotic convergence result."
---

## Statement

For the algorithm [[alg-finite-budget-multiplicative-d-optimal-design]], suppose the initial weights form an approximate design and its information matrix is positive definite. Then every update preserves nonnegative weights summing to one and positive definiteness of the information matrix. For every finite budget $N$, the procedure returns after at most $N$ updates and at most $N+1$ sensitivity scans.

## Facts & Assumptions

**Given:** A finite candidate set $\mathcal X$, feature vectors $f_x\in\mathbb R^p$, $p\ge1$, initial weights $\xi^{(0)}$ summing to one with $M_0=\sum_x\xi_x^{(0)}f_xf_x^T$ positive definite, and a finite nonnegative integer budget $N$.

[F1] [[alg-finite-budget-multiplicative-d-optimal-design]]: the update is $\xi_x^+=\xi_x s_x/p$ with $s_x=f_x^TM^{-1}f_x$, and the sensitivity scan is over the finite set $\mathcal X$.

[F2] [[def-nonlinear-experimental-design-and-local-identifiability]] and [[thm-local-information-positive-definite-iff-full-column-rank]]: for scalar maps $F_x(\theta)=f_x^T\theta$ with precision $W_x=1$, the information matrix is $\sum_x\xi_xf_xf_x^T$ and it is positive definite exactly when the stacked supported feature rows have trivial kernel.

[F3] [[def-approximate-linear-model-design-and-optimality-criteria]]: approximate design weights are nonnegative and sum to one.

[F4] [[def-trace-of-a-square-matrix]]: $\operatorname{tr}(A)$ is the sum of its diagonal entries, so $\operatorname{tr}(I_p)=p$.

[F5] [[def-matrix-product-and-identity-matrix]]: matrix multiplication is the finite coordinate product, is associative, and $M^{-1}M=I_p$ for an invertible $M$.

## Proof

**Proof technique:** direct.

1.1 Fix an update at a current approximate design with positive-definite $M=\sum_x\xi_xf_xf_x^T$. For each $x$, put $s_x=f_x^TM^{-1}f_x$. Since $M$ is symmetric positive definite, $s_x\ge0$, and $s_x>0$ whenever $f_x\ne0$: writing $u=M^{-1}f_x$, one has $f_x^TM^{-1}f_x=u^TMu>0$ for $f_x\ne0$. By [F4] and [F5], $\sum_x\xi_xs_x=\sum_x\xi_x\operatorname{tr}(M^{-1}f_xf_x^T)=\operatorname{tr}(M^{-1}M)=\operatorname{tr}(I_p)=p$. Therefore $\xi_x^+=\xi_xs_x/p$ is nonnegative and $\sum_x\xi_x^+=1$, so it is again an approximate design. [given, F1, F3, F4, F5, algebra]

2.1 For every feature $f_x$, a positive old weight remains positive after the update exactly when $f_x\ne0$: step 1.1 gives $s_x>0$ for nonzero $f_x$, and $s_x=0$ for $f_x=0$; zero weights remain zero. Thus the stacked scalar sensitivity matrix loses at most zero rows, so its kernel is unchanged. The current matrix is positive definite, so [F2] gives this kernel is trivial; applying [F2] to the new weights gives positive definiteness of the updated matrix. Induction applies this argument at every update, so no later inverse is undefined. [step 1.1, F1, F2, algebra, induction]

3.1 The loop checks one finite candidate set at each index $k=0,\ldots,N$, returns immediately on zero violation, and otherwise makes an update only when $k<N$. Thus it makes at most $N$ updates and at most $N+1$ sensitivity scans, and at $k=N$ returns the current design and its finite violation. The invariant argument above ensures every scan and update is well-defined. [step 2.1, F1, given, induction] ∎
