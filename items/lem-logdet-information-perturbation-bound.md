---
id: lem-logdet-information-perturbation-bound
kind: lemma
title: "A uniform positive eigenvalue floor controls log-determinant error"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-trace-of-a-square-matrix
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-determinant-differential-and-jacobis-formula
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - def-determinant-of-a-square-matrix
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule-for-total-derivatives
  - thm-trace-of-ab-equals-trace-of-ba
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §3.1.5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "The complete book was retrieved; §3.1.5, printed pp. 73–74, was inspected for log-determinant concavity on the positive-definite cone. The Lipschitz perturbation bound is proved locally here."
---

## Statement

Let $p\ge1$ and let $A,B\in\mathbb R^{p\times p}$ be symmetric. Put $E=B-A$ and $A_t=(1-t)A+tB$ for $0\le t\le1$. Suppose there is $\alpha>0$ such that $v^T A_t v\ge\alpha\|v\|_2^2$ for every $v\in\mathbb R^p$ and every $t\in[0,1]$. Then $A_t$ is positive definite and
$$|\log\det B-\log\det A|\le\frac{p\|E\|_2}{\alpha}.$$

## Facts & Assumptions

**Given:** Symmetric real matrices $A,B\in\mathbb R^{p\times p}$, $p\ge1$, and the uniform quadratic-form bound $v^TA_tv\ge\alpha\|v\|_2^2$ with $\alpha>0$ for every $t\in[0,1]$.

[F1] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: every real symmetric matrix has an orthonormal eigenbasis.

[F2] [[thm-determinant-differential-and-jacobis-formula]]: if $C$ is invertible, then $D\det(C)[H]=\det(C)\operatorname{tr}(C^{-1}H)$.

[F3] [[thm-logarithm-derivative-and-integral]]: for $z>0$, $(\log z)'=1/z$.

[F4] [[thm-trace-of-ab-equals-trace-of-ba]] and [[def-trace-of-a-square-matrix]]: trace is the sum of diagonal entries and is invariant under cyclic exchange of conformable products.

[F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $\|Ev\|_2\le\|E\|_2\|v\|_2$ and $|u^Tv|\le\|u\|_2\|v\|_2$.

[F6] [[cor-mean-value-theorem]]: a real function continuous on $[0,1]$ and differentiable on $(0,1)$ has its endpoint increment equal to its derivative at some interior point.

[F7] [[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]], and [[def-determinant-of-a-square-matrix]]: determinant is multiplicative, a diagonal determinant is the product of its diagonal entries, and $\det I_p=1$.

[F8] [[thm-chain-rule-for-total-derivatives]]: along a differentiable matrix path, derivatives of scalar compositions are given by the chain rule.

## Proof

**Proof technique:** direct.

1.1 Fix $t\in[0,1]$. The matrix $A_t$ is symmetric. By [F1], it has an orthonormal eigenbasis; if $q$ is a unit eigenvector with eigenvalue $\lambda$, the assumed quadratic-form inequality gives $\lambda=q^TA_tq\ge\alpha>0$. Thus $A_t$ is invertible, and if $A_t=Q\Lambda Q^T$ then [F7] gives $\det A_t=\det(Q)\det(\Lambda)\det(Q^T)=\det(QQ^T)\prod_i\lambda_i=\prod_i\lambda_i>0$. The determinant is Fréchet differentiable by [F2] and hence continuous, and $\log$ is differentiable, hence continuous, on the positive reals by [F3]. Thus $g(t)=\log\det A_t$ is continuous on $[0,1]$ and differentiable on $(0,1)$ by [F2], [F3], and [F8]. [given, F1, F2, F3, F7, F8, algebra]

2.1 Since $A_t=A+tE$ and is invertible, [F2], [F3], and the chain rule [F8] give $g'(t)=\operatorname{tr}(A_t^{-1}E)$. [step 1.1, F2, F3, F8, algebra]

2.2 Diagonalize $A_t=Q\Lambda Q^T$ as in step 1.1. By [F4], $\operatorname{tr}(A_t^{-1}E)=\operatorname{tr}(\Lambda^{-1}Q^TEQ)=\sum_{i=1}^p\lambda_i^{-1}q_i^TEq_i$. Each $q_i$ is unit, so [F5] gives $|q_i^TEq_i|\le\|Eq_i\|_2\le\|E\|_2$, while $\lambda_i\ge\alpha$; hence $|g'(t)|\le p\|E\|_2/\alpha$ for every $t$. [step 1.1, F1, F4, F5, algebra]

3.1 Apply [F6] to $g$ on $[0,1]$. For some $c\in(0,1)$, $\log\det B-\log\det A=g(1)-g(0)=g'(c)$, whose absolute value is bounded by step 2.2. [step 2.1, step 2.2, F6] ∎
