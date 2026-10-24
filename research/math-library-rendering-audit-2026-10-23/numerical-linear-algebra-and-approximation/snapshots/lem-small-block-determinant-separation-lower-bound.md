---
id: lem-small-block-determinant-separation-lower-bound
kind: lemma
title: "A determinant and Frobenius norm give a certified lower bound for small-block separation"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-frobenius-matrix-norm
  - thm-singular-value-decomposition
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - thm-determinant-multiplicative
  - cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
  - thm-determinant-of-a-triangular-matrix
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
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

Let $F\in\{\mathbb R,\mathbb C\}$, $q\ge1$, and $M\in F^{q\times q}$. Define

$$\delta(M)=\begin{cases}0,&\|M\|_F=0,\\[2pt]\dfrac{|\det M|}{\|M\|_F^{q-1}},&\|M\|_F>0.\end{cases}$$

With the empty product convention when $q=1$, $0\le\delta(M)\le\sigma_{\min}(M)$.

## Facts & Assumptions

**Given:** A finite square matrix $M$ over $\mathbb R$ or $\mathbb C$.

[F1] [[thm-singular-value-decomposition]]: There are orthonormal bases on the domain and codomain and singular values $s_1\ge\cdots\ge s_r>0$, with zeros appended to length $q$, giving $M=U\operatorname{diag}(s_1,\ldots,s_q)V^*$ for unitary $U,V$.

[F2] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: $\|M\|_F^2=\sum_{i=1}^{q}s_i^2$.

[F3] [[thm-determinant-multiplicative]]: $\det(AB)=\det(A)\det(B)$ for square matrices over a commutative ring.

[F4] [[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]: every unitary matrix has determinant modulus one.

[F5] [[thm-determinant-of-a-triangular-matrix]]: the determinant of a diagonal matrix is the product of its diagonal entries.

## Proof

1.1 If $M=0$, then $\delta(M)=0=\sigma_{\min}(M)$ by the definition and the singular values in [F1]. [given, F1]

1.2 Suppose $M\ne0$ and choose singular values $s_1\ge\cdots\ge s_q\ge0$ from [F1], with $M=U\operatorname{diag}(s_1,\ldots,s_q)V^*$ for unitary $U,V$. By [F3], $\det(M)=\det(U)\det(\operatorname{diag}(s_1,\ldots,s_q))\det(V^*)$; [F4] gives $|\det(U)|=|\det(V^*)|=1$, and [F5] gives $\det(\operatorname{diag}(s_1,\ldots,s_q))=\prod_{i=1}^{q}s_i$. Thus $|\det M|=\prod_{i=1}^{q}s_i$. By [F2], every $s_i\le\|M\|_F$; hence $|\det M|\le s_q\|M\|_F^{q-1}$. [F1, F2, F3, F4, F5, choose, algebra]

2.1 Since $s_q=\sigma_{\min}(M)$ and $\|M\|_F>0$, divide the inequality in step 1.2 by $\|M\|_F^{q-1}$ to obtain $\delta(M)\le\sigma_{\min}(M)$. The lower bound $\delta(M)\ge0$ follows from its definition. [step 1.2, algebra] ∎
