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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
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
For a real square matrix $A$, $A^{\mathsf T}A$ is positive semidefinite because $v^{\mathsf T}A^{\mathsf T}Av=\sum_j(Av)_j^2\ge0$ for every real column vector $v$. Its singular-value multiset is the multiset of nonnegative square roots of the eigenvalues of $A^{\mathsf T}A$, each eigenvalue repeated according to its eigenspace dimension. In the displayed form, the positive $\epsilon_r$ are precisely the positive singular values of $A$: each block with $\epsilon_r>0$ contributes two entries equal to $\epsilon_r$, counting repeated block values separately. Every zero block pairs two kernel directions.

## Facts & Assumptions

**Given:** $N\ge1$ and $A^{\mathsf T}=-A$.

[F1] [[lem-qsm-matrix-state-calculus]]: every Hermitian matrix on a finite-dimensional complex inner-product space has an orthonormal eigenbasis with real eigenvalues, and its eigenspaces and spectral projections are basis-independent.

## Proof

1.1 Regard $B=iA$ as a complex matrix on $\mathbb C^{2N}$. Since $A^{\mathsf T}=-A$ and $A$ is real, $B^*=(-i)A^{\mathsf T}=iA=B$. By [F1], $B$ has an orthonormal eigenbasis with real eigenvalues. Complex conjugation sends an eigenvector of eigenvalue $\epsilon>0$ to an eigenvector of eigenvalue $-\epsilon$, because conjugating $iAz=\epsilon z$ gives $-iA\overline z=\epsilon\overline z$. Thus nonzero eigenvalues occur in opposite pairs. [given, F1, algebra]

2.1 Fix a unit eigenvector $z=u+iv$ for $\epsilon>0$, with real vectors $u,v$. The vectors $z$ and $\overline z$ belong to distinct eigenspaces of the Hermitian matrix $B$, so $\langle z,\overline z\rangle=0$. Expanding this equality gives $\|u\|^2=\|v\|^2$ and $u\cdot v=0$; $\|z\|=1$ then gives $\|u\|=\|v\|=1/\sqrt2$. From $Az=-i\epsilon z$, comparison of real and imaginary parts gives $Au=\epsilon v$ and $Av=-\epsilon u$. Therefore $e_1=\sqrt2u$ and $e_2=-\sqrt2v$ are orthonormal and $Ae_1=-\epsilon e_2$, $Ae_2=\epsilon e_1$, which is the displayed block in this basis. [step 1.1, algebra]

3.1 Choose an orthonormal basis in each positive eigenspace of $B$; [F1] supplies these finite-dimensional bases. Together with their complex conjugates, the chosen vectors are orthonormal: conjugation preserves orthonormality, and every positive eigenspace is orthogonal to every negative eigenspace of the Hermitian matrix $B$. Hence the real planes from step 2.1 are mutually orthogonal. On the zero eigenspace, $Az=0$, so the real and imaginary parts of each vector lie in the real kernel of $A$. The real and complex kernels have equal dimension because row reduction of the real matrix $A$ has the same pivots over $\mathbb R$ and $\mathbb C$; this dimension is $2N$ minus twice the total number of positive eigenvectors, hence even. Choose a real basis of $\ker A$ and successively subtract projections onto earlier vectors and normalize each nonzero residual; this gives an orthonormal real basis. Pairing consecutive vectors gives zero blocks. The resulting real orthonormal basis gives the required $O$. [given, F1, step 1.1, step 2.1, construct, algebra]

4.1 Since $O$ is orthogonal, $(OAO^{\mathsf T})^{\mathsf T}(OAO^{\mathsf T})=OA^{\mathsf T}AO^{\mathsf T}=\bigoplus_{r=1}^N\epsilon_r^2I_2$. Thus the singular-value multiset from the Statement has two entries $\epsilon_r$ for each block $r$, including its two zero entries when $\epsilon_r=0$. This identifies every positive block value once per real two-plane and completes the multiplicity assertion. [step 3.1, F1, algebra] ∎
