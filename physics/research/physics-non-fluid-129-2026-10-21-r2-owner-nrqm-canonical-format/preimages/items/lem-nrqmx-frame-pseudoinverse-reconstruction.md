---
id: lem-nrqmx-frame-pseudoinverse-reconstruction
kind: lemma
title: "The Gram pseudoinverse reconstructs a spanning Hermitian frame"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse
  - lem-nrqmx-finite-hermitian-trace-inner-product
  - lem-qsm-matrix-state-calculus
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
dependency_roles:
  def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse: mathematical-premise
  lem-nrqmx-finite-hermitian-trace-inner-product: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-moore-penrose-pseudoinverse: mathematical-premise
  thm-moore-penrose-pseudoinverse-exists-and-is-unique: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Xhek Turkeshi and Markus Heinrich, Quantum Information Methods for Many-Body Physics, §3.1, linear inversion"
      url: "https://www.quantum-randomness.com/teaching_files/qinfo_for_mbp/lecture_notes6.pdf"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
---

## Statement

Let $d,m\ge1$, let $F_1,\ldots,F_m\in\mathsf H_d$ span $\mathsf H_d$ over $\mathbb R$, and form $S$, $G=S^*S$, $G^+$, and $D_a$ as in the preceding finite-frame definition. If $G=\sum_{\lambda>0}\lambda P_\lambda$ is its finite spectral resolution, then $G^+=\sum_{\lambda>0}\lambda^{-1}P_\lambda$. Moreover, every $X\in\mathsf H_d$ is reconstructed by
$$
X=\sum_{a=1}^m\operatorname{Tr}(XF_a)D_a.
$$
This holds for redundant families as well as bases; $G$ need not be invertible.

## Statement references

[[def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse]]

## Facts & Assumptions

**Given:** $d,m\ge1$, a spanning family $F_1,\ldots,F_m\in\mathsf H_d$, its synthesis map $S$, Gram matrix $G=S^*S$, Moore–Penrose inverse $G^+$, and canonical dual $D_a$.

[A1] The finite family $F_1,\ldots,F_m$ spans $\mathsf H_d$ over $\mathbb R$, as required in the Statement.

[F1] [[def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse]]: $\mathsf H_d$ is a real space with the trace pairing $\operatorname{Tr}(AB)$; $G_{ab}=\operatorname{Tr}(F_aF_b)$; $D_a=\sum_b(G^+)_{ba}F_b$.

[F2] [[lem-nrqmx-finite-hermitian-trace-inner-product]]: the Hilbert–Schmidt trace pairing is a real inner product, $G=S^*S$ is real positive semidefinite, and $\ker G=\ker S$.

[F3] [[lem-qsm-matrix-state-calculus]]: every finite Hermitian matrix has an orthonormal eigenbasis with real eigenvalues.

[F4] [[def-moore-penrose-pseudoinverse]]: $G^+$ satisfies $GG^+G=G$, $G^+GG^+=G^+$, and both $GG^+$ and $G^+G$ are self-adjoint.

[F5] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: every finite real matrix has a unique matrix satisfying the four Penrose equations.

## Proof

1.1 By [F2], $G$ is real symmetric positive semidefinite, $G=S^*S$, and $\ker G=\ker S$. The coordinate formula for the adjoint is $(S^*X)_a=\langle F_a,X\rangle_{\mathrm{HS}}=\operatorname{Tr}(XF_a)$ by [F1] and [F2]. [F1, F2, algebra]

1.2 Regard the real symmetric positive semidefinite matrix $G$ as a complex Hermitian matrix and apply [F3]. Its eigenvalues are real. If $z=x+iy$ is in the complex eigenspace for a real eigenvalue $\lambda$, then realness of $G$ gives $Gx=\lambda x$ and $Gy=\lambda y$; thus that eigenspace is the complexification of its real eigenspace. Real eigenspaces for distinct eigenvalues are orthogonal, since $Gu=\lambda u$, $Gv=\mu v$, and symmetry give $(\lambda-\mu)u^{\mathsf T}v=0$. Their real direct sum is $\mathbb R^m$ because the complex eigenspaces span $\mathbb C^m$ by [F3] and each is the complexification of its real eigenspace. Choosing a real orthonormal basis in each gives a real spectral resolution $G=\sum_{\lambda\ge0}\lambda P_\lambda$ with real orthogonal projections whose sum is $I$. Put $H_0=\sum_{\lambda>0}\lambda^{-1}P_\lambda$. Orthogonality gives $GH_0G=G$, $H_0GH_0=H_0$, and $GH_0=H_0G=\sum_{\lambda>0}P_\lambda$, which are self-adjoint. Thus $H_0$ satisfies the four Penrose equations [F4], and uniqueness in [F5] gives $H_0=G^+$. Consequently $Q=G^+G=\sum_{\lambda>0}P_\lambda$ is an orthogonal projection and $\ker Q=\ker G$, so $\operatorname{Ran}(I-Q)=\ker G=\ker S$ by [F2]. [F2, F3, F4, F5, step 1.1, algebra]

2.1 The synthesis map of the canonical dual is $D=SG^+$ by [F1]. For any $X\in\mathsf H_d$, the spanning hypothesis [A1] supplies $c\in\mathbb R^m$ with $X=Sc$. Then
$$
D(S^*X)=SG^+S^*Sc=SG^+Gc=SQc=Sc=X,
$$
because $c-Qc\in\operatorname{Ran}(I-Q)=\ker S$ by step 1.2. The coordinates of $S^*X$ are $\operatorname{Tr}(XF_a)$ by step 1.1, which proves the stated sum. [A1, F1, F2, step 1.1, step 1.2, algebra] ∎
