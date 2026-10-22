---
id: lem-qsmx-real-skew-orthogonal-normal-form
kind: lemma
title: Orthogonal normal form of a finite real skew matrix
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - lem-qsm-matrix-state-calculus
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "G. B. Mbeng, A. Russomanno, and G. E. Santoro, The quantum Ising chain for beginners, arXiv:2009.09208v2, §§5–6.2"
      url: "https://arxiv.org/pdf/2009.09208"
    - title: "Pieter Claeys, Quench dynamics in the Transverse Field Ising Model, Many-body Quantum Dynamics @ TU Dresden lecture notes, §6"
      url: "https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf"
---

## Statement

For every integer $N\ge1$ and real skew-symmetric matrix $A\in M_{2N}(\mathbb R)$, there are an orthogonal real matrix $O$ and numbers $\epsilon_1,\ldots,\epsilon_N\ge0$ such that
$$OAO^{\mathsf T}=\bigoplus_{r=1}^N\begin{pmatrix}0&\epsilon_r\\-\epsilon_r&0\end{pmatrix}.$$
The positive $\epsilon_r$ are the positive singular values of $A$, each listed once for its two-dimensional invariant plane; zero values pair the kernel directions.

## Facts & Assumptions

**Given:** $N\ge1$ and $A^{\mathsf T}=-A$.

[F1] [[lem-qsm-matrix-state-calculus]]: every Hermitian matrix on a finite-dimensional complex inner-product space has an orthonormal eigenbasis with real eigenvalues, and its eigenspaces and spectral projections are basis-independent.

## Proof

1.1 Regard $B=iA$ as a complex matrix on $\mathbb C^{2N}$. Since $A^{\mathsf T}=-A$ and $A$ is real, $B^*=(-i)A^{\mathsf T}=iA=B$. By [F1], $B$ has an orthonormal eigenbasis with real eigenvalues. Complex conjugation sends an eigenvector of eigenvalue $\epsilon>0$ to an eigenvector of eigenvalue $-\epsilon$, because conjugating $iAz=\epsilon z$ gives $-iA\overline z=\epsilon\overline z$. Thus nonzero eigenvalues occur in opposite pairs. [given, F1, algebra]

2.1 Fix a unit eigenvector $z=u+iv$ for $\epsilon>0$, with real vectors $u,v$. The vectors $z$ and $\overline z$ belong to distinct eigenspaces of the Hermitian matrix $B$, so $\langle z,\overline z\rangle=0$. Expanding this equality gives $\|u\|^2=\|v\|^2$ and $u\cdot v=0$; $\|z\|=1$ then gives $\|u\|=\|v\|=1/\sqrt2$. From $Az=-i\epsilon z$, comparison of real and imaginary parts gives $Au=\epsilon v$ and $Av=-\epsilon u$. Therefore $e_1=\sqrt2u$ and $e_2=-\sqrt2v$ are orthonormal and $Ae_1=-\epsilon e_2$, $Ae_2=\epsilon e_1$, which is the displayed block in this basis. [step 1.1, algebra]

3.1 Choose an orthonormal basis in each positive eigenspace of $B$; [F1] supplies these finite-dimensional bases. The associated real planes from step 2.1 are mutually orthogonal: positive eigenspaces are orthogonal to one another, and each is orthogonal to every negative eigenspace. On the zero eigenspace, $Az=0$, so its real and imaginary parts lie in $\ker A$; an orthonormal real basis of $\ker A$ can be paired because its dimension is $2N$ minus twice the total number of positive eigenvectors, hence even. Each such pair gives a zero block. The resulting real orthonormal basis gives the required $O$. [given, F1, step 1.1, step 2.1, construct, algebra]

4.1 On each displayed block, $A^{\mathsf T}A=\epsilon_r^2I_2$. Therefore the singular values of $A$, defined as the nonnegative square roots of the eigenvalues of $A^{\mathsf T}A$, are $\epsilon_r,\epsilon_r$ for each block. This identifies every positive $\epsilon_r$ once per real two-plane and completes the statement. [step 3.1, F1, algebra] ∎
