---
id: lem-qa-24-pue-svd-invariant-subspaces
kind: lemma
title: PUE singular-space invariant decomposition
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qa-24-pue-svd-data
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - prop-adjoint-algebra
  - thm-singular-value-decomposition
  - def-orthogonal-projection
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
axiom_use: "None; the decomposition is finite-dimensional and uses no choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Definitions 11–14 and Lemma 14"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF pp. 15–18."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed pp. 146–147; PDF pp. 154–155, Hermitian special case."
---

## Statement

Let $A:H_R\to H_L$ be the PUE map of [[def-qa-24-pue-svd-data]], with positive singular pairs $(\sigma_j,v_j,u_j)$. For every $0<\sigma_j<1$, set

$$w_j=\frac{(I-\Pi_R)U^*u_j}{\sqrt{1-\sigma_j^2}},\qquad \widetilde w_j=\frac{(I-\Pi_L)Uv_j}{\sqrt{1-\sigma_j^2}}.$$

The vectors $w_j$ form an orthonormal family in $\ker\Pi_R$ and the vectors $\widetilde w_j$ form an orthonormal family in $\ker\Pi_L$. In the input basis $(v_j,w_j)$ and output basis $(u_j,\widetilde w_j)$,

$$U\big|_{\operatorname{span}(v_j,w_j)}=\begin{pmatrix}\sigma_j&\sqrt{1-\sigma_j^2}\\\sqrt{1-\sigma_j^2}&-\sigma_j\end{pmatrix}.$$

For $\sigma_j=1$, $Uv_j=u_j$ and the complementary vector is absent. A right zero-singular vector $v\in\ker A\cap H_R$ satisfies $Uv\in\ker\Pi_L$; a left zero-singular vector $u\in\ker A^*\cap H_L$ satisfies $U^*u\in\ker\Pi_R$. Let $M_R$ be the orthogonal sum of all positive-singular input planes or lines, $\ker A$, and $U^*(\ker A^*)$; let $M_L$ be the corresponding sum of positive-singular output planes or lines, $U(\ker A)$, and $\ker A^*$. Then $U(M_R)=M_L$. The residual ambient subspaces $M_R^\perp$ and $M_L^\perp$ lie in $\ker\Pi_R$ and $\ker\Pi_L$, and $U(M_R^\perp)=M_L^\perp$. Thus each named block is invariant under its corresponding projector, with no implicit pairing of the two kernels.

## Facts & Assumptions

**Given:** A PUE $(U,\Pi_R,\Pi_L)$ and the SVD data from [[def-qa-24-pue-svd-data]].

[F1] [[def-qa-24-pue-svd-data]]: $A=\Pi_LU|_{H_R}$, $A^*=\Pi_RU^*|_{H_L}$, the positive singular pairs satisfy $Av_j=\sigma_j u_j$ and $A^*u_j=\sigma_j v_j$, the trailing bases span $\ker A$ and $\ker A^*$, and $U^*$ is unitary.

[F2] [[thm-singular-value-decomposition]]: every finite-dimensional linear map has complete orthonormal singular bases and a positive-term SVD formula.

[F3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F4] [[prop-adjoint-algebra]]: adjoints reverse products, $T^{**}=T$, and $I^*=I$.

[F5] [[def-orthogonal-projection]]: a vector is the sum of its projection into a subspace and an orthogonal component.

[F6] [[lem-pythagorean-theorem-and-finite-orthogonal-sums]]: orthogonal components have squared norms that add.

## Proof

1.1 For $0<\sigma_i,\sigma_j<1$, [F1] gives $\Pi_RU^*u_i=\sigma_i v_i$. Since $U^*$ preserves inner products by [F1], orthogonal projection and [F6] give $\langle (I-\Pi_R)U^*u_i,(I-\Pi_R)U^*u_j\rangle=\langle U^*u_i,U^*u_j\rangle-\langle \Pi_RU^*u_i,\Pi_RU^*u_j\rangle=\delta_{ij}(1-\sigma_i^2)$. Dividing by the positive square roots shows that the $w_i$ are orthonormal and lie in $\ker\Pi_R$. The same calculation, using $\Pi_LUv_i=\sigma_i u_i$, proves that the $\widetilde w_i$ are orthonormal in $\ker\Pi_L$. [given, F1, F3, F4, F5, F6, algebra]

1.2 If $\sigma_i=1$, then $\Pi_RU^*u_i=v_i$ has norm one, as does $U^*u_i$. By the orthogonal decomposition in [F5] and Pythagoras [F6], its component in $\ker\Pi_R$ is zero, so $U^*u_i=v_i$ and $Uv_i=u_i$. [F1, F3, F5, F6, algebra]

2.1 Decompose $Uv_i=\Pi_LUv_i+(I-\Pi_L)Uv_i=\sigma_i u_i+\sqrt{1-\sigma_i^2}\,\widetilde w_i$. Also $\sqrt{1-\sigma_i^2}\,Uw_i=U(I-\Pi_R)U^*u_i=u_i-U\Pi_RU^*u_i=u_i-\sigma_iUv_i$, where the middle equality uses $UU^*=I$ and the last uses [F1]. Substitution of the first equation yields $Uw_i=\sqrt{1-\sigma_i^2}\,u_i-\sigma_i\widetilde w_i$, which is the displayed matrix. [F1, F3, F4, step 1.1, algebra]

3.1 If $v\in\ker A\cap H_R$, then $\Pi_LUv=Av=0$, so $Uv\in\ker\Pi_L$. If $u\in\ker A^*\cap H_L$, then $\Pi_RU^*u=A^*u=0$, so $U^*u\in\ker\Pi_R$. Every right singular vector lies in $H_R$ and is orthogonal to each $w_i$ and each $U^*u$ from the left kernel, since those vectors lie in $\ker\Pi_R$. For a positive singular vector and a left-kernel vector, $\langle (I-\Pi_R)U^*u_i,U^*u_k\rangle=\langle U^*u_i,U^*u_k\rangle-\langle \Pi_RU^*u_i,\Pi_RU^*u_k\rangle=0-0=0$, because $u_i\perp u_k$ and $\Pi_RU^*u_k=0$. Thus the listed source blocks are mutually orthogonal. Their orthogonal complement is contained in $\ker\Pi_R$, because the right singular vectors, including a basis of $\ker A$, span $H_R$. Applying $U$ preserves orthogonality. The listed output blocks are also mutually orthogonal: the left singular vectors, including a basis of $\ker A^*$, span $H_L$; the vectors $\widetilde w_i$ are orthonormal by step 1.1; and for $v\in\ker A$, $\langle \widetilde w_i,Uv\rangle=\langle Uv_i,Uv\rangle-\langle \Pi_LUv_i,\Pi_LUv\rangle=0$, since $v_i\perp v$ and $Av=0$. The remaining named output vectors $Uv$ lie in $\ker\Pi_L$, so they are orthogonal to $H_L$. The output complement is therefore contained in $\ker\Pi_L$. Since $U$ maps each listed source block onto its corresponding output block, it maps the source complement onto the output complement. These are ambient-space decompositions; the residual blocks are not part of $H_R$ or $H_L$. Each projector phase is scalar on the residual source and output blocks, so no residual component mixes into a projected singular-space block. [F1, F2, F3, F4, F5, step 1.1, step 1.2, algebra] ∎
