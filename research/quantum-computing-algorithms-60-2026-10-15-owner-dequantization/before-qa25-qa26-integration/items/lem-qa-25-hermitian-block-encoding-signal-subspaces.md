---
id: lem-qa-25-hermitian-block-encoding-signal-subspaces
kind: lemma
title: Hermitian block-encoding signal subspaces
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-25-qubitization-access-model
  - def-qa-22-block-encoding
  - lem-qa-24-pue-svd-invariant-subspaces
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
axiom_use: "None; the decomposition is finite-dimensional and choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.4"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
---

## Statement

Let $(U,J,\alpha)$ be an exact Hermitian block encoding from [[def-qa-25-qubitization-access-model]], and choose an orthonormal eigenbasis $K\psi_j=\lambda_j\psi_j$. Put $x_j=\lambda_j/\alpha$ and $s_j=\sqrt{1-x_j^2}$. For $|x_j|<1$, define
$$\eta_j=(I-\Pi)UJ\psi_j/s_j,\qquad \widetilde\eta_j=(I-\Pi)U^*J\psi_j/s_j.$$
The $\eta_j$ are orthonormal in $\ker\Pi$, as are the $\widetilde\eta_j$. In the paired input basis $(J\psi_j,\widetilde\eta_j)$ and output basis $(J\psi_j,\eta_j)$, $U$ has matrix
$$\begin{pmatrix}x_j&s_j\\s_j&-x_j\end{pmatrix}.$$
The unitary $U^*$ maps in the reverse direction by the same matrix. If $|x_j|=1$, the complement is absent and $UJ\psi_j=x_jJ\psi_j=U^*J\psi_j$; no division by zero is used. The value $x_j=0$ is an ordinary two-dimensional signal plane.

## Facts & Assumptions

**Given:** A finite-dimensional self-adjoint $K$, an exact block encoding, and the associated signal projector $\Pi$.

[F1] [[def-qa-25-qubitization-access-model]]: $J^*UJ=K/\alpha$ and $\Pi=JJ^*$; taking adjoints and using $K=K^*$ gives $J^*U^*J=K/\alpha$.

[F2] [[lem-qa-24-pue-svd-invariant-subspaces]]: the positive singular pairs of a projected unitary give orthogonal paired two-dimensional subspaces; their endpoint complements are absent.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional self-adjoint endomorphism has an orthonormal eigenbasis with real eigenvalues.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tx,y\rangle=\langle x,T^*y\rangle$, so a unitary and its adjoint preserve inner products.

[F5] [[def-qa-22-block-encoding]]: the normalized compression has operator norm at most one, hence $|\lambda_j/\alpha|\le1$.

## Proof

**Given:** As in Facts & Assumptions.

1.1 Fix an eigenvector $\psi_j$ with unit norm and write $v_j=J\psi_j$. From [F1], $\Pi Uv_j=x_jv_j$ and $\Pi U^*v_j=x_jv_j$, because $K=K^*$. Since $U,U^*$ preserve norm, orthogonal decomposition by $\Pi$ gives $\|(I-\Pi)Uv_j\|^2=\|(I-\Pi)U^*v_j\|^2=1-x_j^2=s_j^2$. For $|x_j|<1$, the displayed $\eta_j,\widetilde\eta_j$ are therefore unit vectors in $\ker\Pi$. [given, F1, F4, F5, algebra]

2.1 If $i\ne j$, orthogonality of eigenvectors and [F4] give $\langle Uv_i,Uv_j\rangle=\langle v_i,v_j\rangle=0$, while $\langle\Pi Uv_i,\Pi Uv_j\rangle=x_ix_j\langle v_i,v_j\rangle=0$. Subtracting the projected components shows $\langle\eta_i,\eta_j\rangle=0$; the same calculation for $U^*$ proves orthogonality of the $\widetilde\eta_j$. [F1, F3, F4, step 1.1, algebra]

2.2 Decomposing $Uv_j$ into its $\Pi$ and $I-\Pi$ parts gives $Uv_j=x_jv_j+s_j\eta_j$. Also $s_jU\widetilde\eta_j=U(I-\Pi)U^*v_j=v_j-U\Pi U^*v_j=v_j-x_jUv_j=s_j^2v_j-x_js_j\eta_j.$ Division by $s_j>0$ yields $U\widetilde\eta_j=s_jv_j-x_j\eta_j$, which is the second column of the displayed matrix. Taking adjoints gives the reverse-basis action of $U^*$. [F1, F4, step 1.1, algebra]

3.1 If $|x_j|=1$, the orthogonal complement of $\Pi Uv_j=x_jv_j$ has squared norm $1-|x_j|^2=0$, so $Uv_j=x_jv_j$; the same argument for $U^*$ gives $U^*v_j=x_jv_j$. Thus the endpoint plane collapses. At $x_j=0$, step 1.1 has $s_j=1$, so both normalized vectors are well-defined. The mutually orthogonal paired spaces and endpoint lines exhaust the clean input and output signal spaces by the SVD decomposition in [F2]; their orthogonal residual complements stay in $\ker\Pi$ and cannot contribute to the clean compression. [F1, F2, F3, step 1.1, algebra] ∎
