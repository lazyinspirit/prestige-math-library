---
id: lem-ip-bpdn-dual-certificates
kind: lemma
title: "Primal and infeasibility certificates for basis pursuit denoising"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
axiom_base: "No additional axiom; finite-dimensional real algebra only."
deps:
  - def-p-norms-on-rn
  - def-euclidean-inner-product
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-fenchel-conjugate-on-finite-dimensional-euclidean-space
  - lem-finite-sum-laws
  - lem-p-norms-are-norms-and-induce-the-published-metrics
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Antonin Chambolle and Thomas Pock, A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging, §2"
      url: "https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf"
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.3"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
---

## Statement

Let $m,n\in\mathbb N$ with $m,n\ge1$, let $A\in\mathbb R^{m\times n}$ act by matrix multiplication in the standard finite coordinate bases, with row and column labels $1$ through their dimensions corresponding to library coordinates $0$ through one less, let $y\in\mathbb R^m$, and let $\epsilon\ge0$. Define $g:\mathbb R^m\to\{0,+\infty\}$ by $g(u)=0$ when $\|u-y\|_2\le\epsilon$ and $g(u)=+\infty$ otherwise. For $p\in\mathbb R^m$, define $g^*(p):=\sup_{u\in\mathbb R^m}\{\langle p,u\rangle-g(u)\}$. Then
$$g^*(p)=\langle p,y\rangle+\epsilon\|p\|_2\qquad(p\in\mathbb R^m).$$
Let $A^*:\mathbb R^m\to\mathbb R^n$ be the Euclidean adjoint, characterized by $\langle A^*p,z\rangle=\langle p,Az\rangle$ for all $p,z$. If $x\in\mathbb R^n$ satisfies $\|Ax-y\|_2\le\epsilon$ and a vector $p\in\mathbb R^m$ satisfies $\|A^*p\|_\infty\le1$ and
$$\|x\|_1=-\langle p,y\rangle-\epsilon\|p\|_2,$$
then $x$ minimizes $\|z\|_1$ over that residual ball. If instead $p\ne0$, $A^*p=0$, and $|\langle p,y\rangle|>\epsilon\|p\|_2$, then the residual ball is disjoint from the range of $A$.

## Statement references

[[def-fenchel-conjugate-on-finite-dimensional-euclidean-space|Fenchel conjugate]]

[[def-adjoint-of-a-linear-map-between-inner-product-spaces|Euclidean adjoint]]

[[thm-adjoint-exists-and-is-unique-in-finite-dimension|Existence of the finite-dimensional adjoint]]

[[def-p-norms-on-rn|Finite-dimensional one-, two-, and maximum norms]]

[[thm-cauchy-schwarz-and-the-euclidean-norm|Cauchy–Schwarz for Euclidean norms]]

[[lem-p-norms-are-norms-and-induce-the-published-metrics|Positive definiteness of the Euclidean norm]]

[Chambolle and Pock, *A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging*, §2](https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf)

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.3](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

## Facts & Assumptions

**Given:** Integers $m,n\ge1$, a real linear map $A:\mathbb R^n\to\mathbb R^m$, its Euclidean adjoint $A^*$, a vector $y\in\mathbb R^m$, a radius $\epsilon\ge0$, and the residual ball $\{u:\|u-y\|_2\le\epsilon\}$.

[F1] [[def-fenchel-conjugate-on-finite-dimensional-euclidean-space]]: $g^*(p)=\sup_{u\in\mathbb R^m}\{\langle p,u\rangle-g(u)\}$.

[F2] [[def-euclidean-inner-product]]: $\langle p,u\rangle$ is the finite Euclidean coordinate pairing and $\|p\|_2^2=\langle p,p\rangle$.

[F3] [[def-p-norms-on-rn]]: $\|z\|_1=\sum_{j=1}^n|z_j|$, $\|u\|_2=(\sum_i|u_i|^2)^{1/2}$, and $\|v\|_\infty=\max_j|v_j|$ in positive dimensions.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle A^*p,z\rangle=\langle p,Az\rangle$ for every $p,z$.

[F5] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: the Euclidean adjoint $A^*$ exists and is unique.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle p,v\rangle|\le\|p\|_2\|v\|_2$.

[F7] [[lem-finite-sum-laws]]: finite sums of nonnegative terms are nonnegative.

[F8] [[lem-p-norms-are-norms-and-induce-the-published-metrics]]: the Euclidean $2$-norm is positive definite, so $\|p\|_2>0$ whenever $p\ne0$.

## Proof

1.1 In the supremum defining $g^*(p)$, only $u$ in the residual ball contributes. Write $u=y+v$ with $\|v\|_2\le\epsilon$. For $p\in\mathbb R^m$, define $g^*(p):=\sup_{u\in\mathbb R^m}\{\langle p,u\rangle-g(u)\}$. Then $g^*(p)=\langle p,y\rangle+\sup_{\|v\|_2\le\epsilon}\langle p,v\rangle.$ By [F6], the last supremum is at most $\epsilon\|p\|_2$. If $p=0$ or $\epsilon=0$, $v=0$ attains this value. Otherwise $v=\epsilon p/\|p\|_2$ is feasible and gives $\langle p,v\rangle=\epsilon\|p\|_2$. This proves the conjugate formula, including the zero cases. [given, F1, F2, F3, F6, F8, choose, algebra]

1.2 Let $z$ be any feasible vector and put $q=A^*p$. The condition $\|q\|_\infty\le1$ means $|q_j|\le1$ for every coordinate. Hence each term $|z_j|+q_jz_j$ is nonnegative, and [F7] gives $\|z\|_1+\langle q,z\rangle=\sum_j(|z_j|+q_jz_j)\ge0.$ By [F4], $\|z\|_1\ge-\langle p,Az\rangle$. Feasibility and [F6] give $|\langle p,Az-y\rangle|\le\epsilon\|p\|_2$, so $\|z\|_1\ge-\langle p,Az\rangle\ge-\langle p,y\rangle-\epsilon\|p\|_2.$ If $x$ is feasible and attains equality with the last quantity, it has objective no larger than any feasible $z$, proving the optimality certificate. [given, F3, F4, F5, F6, F7, algebra]

2.1 If $p\ne0$, $A^*p=0$, and $|\langle p,y\rangle|>\epsilon\|p\|_2$, then for every $z\in\mathbb R^n$, [F4] gives $|\langle p,Az-y\rangle|=|\langle A^*p,z\rangle-\langle p,y\rangle|=|\langle p,y\rangle|>\epsilon\|p\|_2.$ By [F6], this forces $\|Az-y\|_2>\epsilon$. Thus no $z$ is feasible, proving the infeasibility certificate. [given, F4, F6, F8, algebra] ∎