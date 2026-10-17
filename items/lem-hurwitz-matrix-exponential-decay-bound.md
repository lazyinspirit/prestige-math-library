---
id: lem-hurwitz-matrix-exponential-decay-bound
kind: lemma
title: "A Hurwitz matrix exponential has a polynomial-exponential decay bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-hurwitz-matrix-and-continuous-lyapunov-equation
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - thm-schur-triangularisation
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-the-complex-numbers-are-algebraically-closed
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

Let $A\in\mathbb C^{n\times n}$ be Hurwitz, let $\alpha=-\max\{\operatorname{Re}\lambda:\lambda\in\sigma(A)\}>0$, and write $e^{tA}=\sum_{k=0}^{\infty}t^kA^k/k!$. If $A=UTU^*$ is a unitary Schur triangularization and $T=D+N$ with $D$ diagonal and $N$ strictly upper triangular, then for every $t\ge0$,

$$
\|e^{tA}\|_2\le e^{-\alpha t}\sum_{k=0}^{n-1}\frac{(t\|N\|_2)^k}{k!}.
$$

For real Hurwitz $A$, the same bound holds for its real matrix exponential, with the complex operator norm of its realification equal to the real one.

## Facts & Assumptions

**Given:** A finite-dimensional real or complex matrix $A$ whose eigenvalues all have negative real part.

[F1] [[def-hurwitz-matrix-and-continuous-lyapunov-equation]]: Hurwitz means every complex eigenvalue has strictly negative real part.

[F2] [[thm-schur-triangularisation]]: Over $\mathbb C$, a finite-dimensional endomorphism has an orthonormal basis in which it is upper triangular.

[F3] [[lem-exponential-series-of-a-bounded-operator]]: In a Banach space, the norm-convergent exponential series satisfies $(e^{tM})'=Me^{tM}=e^{tM}M$.

[F4] [[cor-finite-dimensional-normed-spaces-are-banach]]: Every finite-dimensional normed space is complete.

[F5] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: A unitary operator preserves the norm of every vector.

[F6] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: For compatible finite-dimensional maps, $\|ST\|_2\le\|S\|_2\|T\|_2$.

[F7] [[thm-the-complex-numbers-are-algebraically-closed]]: Every nonconstant complex polynomial splits over $\mathbb C$.

## Proof


1.1 For complex $A$, its characteristic polynomial splits by [F7], so [F2] gives $A=UTU^*$ with $T$ upper triangular. For real $A$, regard its same real-entry matrix as acting on $\mathbb C^n$; its characteristic polynomial also splits by [F7], so [F2] gives a unitary Schur triangularization there. If $z=x+iy$ with real $x,y$, then $\|Az\|_2^2=\|Ax\|_2^2+\|Ay\|_2^2$, so the real and complex operator norms agree. [F2, F7, algebra]

2.1 Write $T=D+N$, where $D$ contains its diagonal and $N$ is strictly upper triangular. By [F3] and [F4], the exponential series is differentiable in operator norm for each finite matrix. The identity $(UTU^*)^k=UT^kU^*$ in each series term gives $e^{tA}=Ue^{tT}U^*$; [F5] gives $\|U\|_2=\|U^*\|_2=1$. Each diagonal exponential satisfies $\|e^{sD}\|_2\le e^{-\alpha s}$ for $s\ge0$. [F1, F3, F4, F5, step 1.1, algebra]

3.1 Differentiate $e^{(t-s)D}e^{sT}$ with respect to $s$ and integrate from $0$ to $t$. Since $T-D=N$, this gives $e^{tT}=e^{tD}+\int_0^t e^{(t-s)D}N e^{sT}\,ds$. Iterating this identity produces ordered-integral terms with $k$ factors $N$ and diagonal exponentials between them. The remainder after $n$ iterations contains $n$ strictly upper-triangular factors, with diagonal factors between them and an upper-triangular exponential at the end; every nonzero matrix-entry path would have to increase its index at least $n$ times in an $n\times n$ matrix, so this remainder is zero. [F3, step 2.1, algebra]

4.1 The ordered simplex for $k$ integration variables has volume $t^k/k!$. By [F6], each $k$th term has norm at most $e^{-\alpha t}\|N\|_2^k t^k/k!$. Summing the terms $0\le k<n$ proves the bound for $e^{tT}$; [F5] and step 2.1 transfer it to $e^{tA}$. [F5, F6, step 2.1, step 3.1, algebra] ∎
