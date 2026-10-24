---
id: def-qa-24-pue-svd-data
kind: definition
title: Projected-unitary encoding and singular vectors
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-22-block-encoding
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-singular-value-decomposition
  - def-qc-dirac-notation-conversion
  - def-orthogonal-projection
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - thm-finite-dimensional-isometry-characterisations
  - def-real-and-complex-inner-product-space
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
axiom_use: "None; all spaces are finite-dimensional and the construction uses only a finite SVD."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Definitions 11–12"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF pp. 15–16."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed pp. 146–147; PDF pp. 154–155, Hermitian special case."
---

## Definition

Let $H$ be a finite-dimensional complex inner-product space, let $U:H\to H$ be unitary, and let $\Pi_R,\Pi_L:H\to H$ be orthogonal projections. Write $H_R=\operatorname{ran}(\Pi_R)$ and $H_L=\operatorname{ran}(\Pi_L)$. The **projected-unitary encoding** (PUE) of this data is the linear map

$$A:H_R\to H_L,\qquad Ax=\Pi_L Ux.$$

Equivalently, its ambient-space compression is $\Pi_LU\Pi_R$, restricted to $H_R$ and regarded as taking values in $H_L$. The map $A$ is a contraction: $\|A\|_{\mathrm{op}}\le1$.

Put $n=\dim H_R$, $m=\dim H_L$, and $r=\operatorname{rank}(A)$. A singular-value decomposition consists of orthonormal bases $v_1,\ldots,v_n$ of $H_R$ and $u_1,\ldots,u_m$ of $H_L$, and positive singular values $1\ge\sigma_1\ge\cdots\ge\sigma_r>0$, such that

$$A=\sum_{j=1}^{r}\sigma_j|u_j\rangle\langle v_j|.$$

The remaining right basis vectors span $\ker A$ and the remaining left basis vectors span $\ker A^*$. Empty bases and sums are allowed when a dimension or the rank is zero. The pairing in each rank-one map is the root-linear-first Dirac conversion of [[def-qc-dirac-notation-conversion]].

An exact square block encoding is a special case: identify the system with the all-zero ancilla subspace and take $\Pi_L=\Pi_R$ equal to that subspace. Under the injection $J_a$ of [[def-qa-22-block-encoding]], the compression is $J_a^*UJ_a$; an exact $(\alpha,a,0)$ block encoding has compressed block $A/\alpha$.

## Facts & Assumptions

**Given:** A finite-dimensional complex inner-product space $H$, a unitary $U:H\to H$, orthogonal projections $\Pi_R,\Pi_L$, and the definitions of operator norm and PUE above.

[F1] [[def-orthogonal-projection]]: every vector is the sum of its projection into the range and an orthogonal vector in the complement.

[F2] [[lem-pythagorean-theorem-and-finite-orthogonal-sums]]: the squared norm of a sum of orthogonal vectors is the sum of their squared norms.

[F3] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary operator preserves the norm of every vector.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum of $\|Tx\|$ over unit vectors, with norm zero on the zero domain.

[F5] [[thm-singular-value-decomposition]]: every linear map between finite-dimensional inner-product spaces has orthonormal singular bases and positive singular values such that the displayed SVD formula holds.

[F6] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle v|$ maps $x$ to $\langle x,v\rangle_{\mathrm{root}}u$.

[F7] [[def-qa-22-block-encoding]]: the all-zero ancilla compression of $U$ is $J_a^*UJ_a$, and an exact block encoding sets this compression equal to the normalized target matrix.

[F8] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the adjoint is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F9] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear map between finite-dimensional inner-product spaces has a unique adjoint.

[F10] [[thm-finite-dimensional-isometry-characterisations]]: a finite-dimensional unitary satisfies $U^*=U^{-1}$ and preserves inner products.

[F11] [[def-real-and-complex-inner-product-space]]: the inner product is positive definite, so pairings with every vector distinguish vectors.

## Proof



1.1 If $H_R=0$, then $A$ is the zero map and its operator norm is zero by [F4]. Otherwise take any unit $x\in H_R$. The decomposition $Ux=\Pi_LUx+(I-\Pi_L)Ux$ has orthogonal terms by [F1], so [F2] gives $\|\Pi_LUx\|^2\le\|Ux\|^2$. By [F3], $\|Ux\|=1$, hence $\|Ax\|\le1$. Taking the maximum over unit $x$ proves $\|A\|_{\mathrm{op}}\le1$. [given, F1, F2, F3, F4, algebra]

1.2 In the square block-encoding case, $J_a$ is the isometric identification of the system with $H_R=H_L=\operatorname{ran}(\Pi_a)$. The definition of the projected block in [F7] is exactly $J_a^*UJ_a$, and the exact case identifies it with the normalized target. Thus this is the stated special case. [F7, given, algebra]

2.1 Apply [F5] to the finite-dimensional map $A:H_R\to H_L$. For each positive singular pair, $Av_j=\sigma_j u_j$ and $\|v_j\|=\|u_j\|=1$, so [F4] and step 1.1 give $\sigma_j=\|Av_j\|\le1$. The rank-one terms in the SVD sum have the coordinate action fixed by [F6]. When $r=0$, the positive singular list and the displayed sum are empty; the kernel bases still exist by [F5]. [F4, F5, F6, step 1.1, algebra]

3.1 For each $k\le r$ and every $x\in H_R$, the SVD formula, root-linear-first rank-one action [F6], and orthonormality of the $u_j$ give $\langle Ax,u_k\rangle=\sigma_k\langle x,v_k\rangle$; for $k>r$ the same pairing is zero. By [F8]–[F9], $\langle Ax,u_k\rangle=\langle x,A^*u_k\rangle$, so positive definiteness [F11] gives $A^*u_k=\sigma_kv_k$ for $k\le r$ and $A^*u_k=0$ for $k>r$. The SVD formula also gives $Av_k=\sigma_ku_k$ for $k\le r$ and $Av_k=0$ for $k>r$. Since each singular list is a basis, expanding an arbitrary vector in those bases shows that $\ker A=\operatorname{span}\{v_{r+1},\ldots,v_n\}$ and $\ker A^*=\operatorname{span}\{u_{r+1},\ldots,u_m\}$: the positive-index coefficients must vanish because the corresponding singular values are positive and the other basis is orthonormal. The argument includes empty bases and sums. [F5, F6, F8, F9, F11, step 2.1, algebra]

4.1 By [F1], orthogonal decomposition gives $\langle \Pi_LUx,y\rangle=\langle Ux,y\rangle$ and $\langle x,\Pi_RU^*y\rangle=\langle x,U^*y\rangle$ for $x\in H_R$ and $y\in H_L$. The adjoint rule [F8] for $U$ therefore gives $\langle Ax,y\rangle=\langle x,\Pi_RU^*y\rangle$. Thus $y\mapsto\Pi_RU^*y$ is an adjoint of $A$, and uniqueness [F9] yields $A^*=\Pi_RU^*|_{H_L}$. Also, [F10] applies to the unitary $U$ and shows that $U^*=U^{-1}$ is unitary. [F1, F8, F9, F10, given, algebra] ∎
