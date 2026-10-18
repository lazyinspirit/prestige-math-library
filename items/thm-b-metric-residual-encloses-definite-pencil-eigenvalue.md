---
id: thm-b-metric-residual-encloses-definite-pencil-eigenvalue
kind: theorem
title: "A B-dual residual bounds distance to the spectrum of a Hermitian-definite pencil"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-regular-generalized-eigenvalue-pencil
  - def-b-inner-product-and-dual-norm-for-definite-pencil
  - thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §11.4"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "LAPACK Users' Guide, Generalized Symmetric Definite Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node54.html"
---

## Statement

Let $n\ge1$, let $\mathbb F\in\{\mathbb R,\mathbb C\}$, and let
$A,B\in\mathbb F^{n\times n}$ be Hermitian with $B$ positive definite. For
$x\in\mathbb F^n\setminus\{0\}$ and $\mu\in\mathbb R$, put
$r=Ax-\mu Bx$. Then
$$\operatorname{dist}(\mu,\sigma(A,B)) \le \frac{\|r\|_{B^{-1}}}{\|x\|_B},$$
where $\sigma(A,B)$ is the finite generalized spectrum and
$\operatorname{dist}(\mu,S):=\min_{\lambda\in S}|\mu-\lambda|$. Equivalently, the
interval with centre $\mu$ and radius $\|r\|_{B^{-1}}/\|x\|_B$ contains at
least one generalized eigenvalue.

## Facts & Assumptions

**Given:** A Hermitian-definite pencil $(A,B)$, a nonzero vector $x$, and a
real scalar $\mu$.

[F1] [[def-b-inner-product-and-dual-norm-for-definite-pencil]]: for $B=LL^*$,
$\|x\|_B=\|L^*x\|_2$ and $\|r\|_{B^{-1}}=\|L^{-1}r\|_2$.

[F2] [[thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis]]:
$C=L^{-1}AL^{-*}$ has an orthonormal eigenbasis and its eigenvalues are the
generalized eigenvalues of $(A,B)$.

[F3] [[def-regular-generalized-eigenvalue-pencil]]: $\sigma(A,B)$ is the set
of finite ratios $\alpha/\beta$ from homogeneous roots with $\beta\ne0$.

## Proof

1.1 Let $y=L^*x$ and $C=L^{-1}AL^{-*}$. Since $L^{-1}Bx=L^*x=y$, the transformed residual is $L^{-1}r=L^{-1}(Ax-\mu Bx)=(C-\mu I)y.$ By [F1], $\|y\|_2=\|x\|_B$ and $\|L^{-1}r\|_2=\|r\|_{B^{-1}}$. [given, F1, algebra]

2.1 Let $u_1,\ldots,u_n$ be the orthonormal eigenbasis of $C$ from [F2], with real eigenvalues $\lambda_1,\ldots,\lambda_n$. By [F3], these are exactly the finite generalized eigenvalues in $\sigma(A,B)$. Write $y=\sum_i c_i u_i$. Then $\|(C-\mu I)y\|_2^2 =\sum_i |c_i|^2|\lambda_i-\mu|^2 \ge \operatorname{dist}(\mu,\{\lambda_i\})^2\sum_i|c_i|^2 =\operatorname{dist}(\mu,\sigma(A,B))^2\|y\|_2^2.$ Taking square roots and applying step 1.1 proves the bound. [F2, F3, step 1.1, algebra] ∎
