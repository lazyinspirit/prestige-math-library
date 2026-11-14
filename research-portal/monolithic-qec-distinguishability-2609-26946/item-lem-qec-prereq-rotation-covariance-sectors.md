---
title: Rotation covariance and operator-weight sectors
status: published
research_item: lem-qec-prereq-rotation-covariance-sectors
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [def-qec-prereq-liouville-choi-reshuffle](item-def-qec-prereq-liouville-choi-reshuffle)
- [physics:prop-nrqm-orbital-and-spin-finite-spin-matrices](https://alphabetamath.cc/physics/item/prop-nrqm-orbital-and-spin-finite-spin-matrices)
- [physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)
- [math:lem-skew-hermitian-matrix-exponential-is-unitary](https://alphabetamath.cc/item/lem-skew-hermitian-matrix-exponential-is-unitary)


## Statement

Let $J_z=\operatorname{diag}(m_1,\ldots,m_d)$ have real diagonal entries, and let $H=H^\dagger$ be diagonal in the same basis. Let $L_1,\ldots,L_r$ be matrices satisfying $[J_z,L_a]=q_aL_a$, where each $q_a$ is real. Define the finite GKSL generator $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$ and $R_\theta=e^{-i\theta J_z}$ for real $\theta$. Then $R_\theta L_aR_\theta^\dagger=e^{-iq_a\theta}L_a$, and $\mathcal L$ commutes with the map $X\mapsto R_\theta X R_\theta^\dagger$.

For each real difference $\omega$, the operator-weight sector $W_\omega=\operatorname{span}\{E_{jk}:m_j-m_k=\omega\}$ is invariant under $\mathcal L$. Here $E_{jk}$ is the matrix unit with a single $1$ in row $j$, column $k$. In particular, the same conclusion applies to the standard finite-spin diagonal matrix $J_z$ with magnetic labels $m=-s,-s+1,\ldots,s$. If the weight convention is instead $[J_z,L_a]=-q_aL_a$, the jump phase is $e^{+iq_a\theta}$.

## Statement references

[def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[def-qec-prereq-liouville-choi-reshuffle](item-def-qec-prereq-liouville-choi-reshuffle)

[physics:prop-nrqm-orbital-and-spin-finite-spin-matrices](https://alphabetamath.cc/physics/item/prop-nrqm-orbital-and-spin-finite-spin-matrices)

[physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)

## Facts & Assumptions

[F1] The finite GKSL interface defines the displayed generator for Hermitian $H$ and a finite family of matrices, with $[A,B]=AB-BA$, $\{A,B\}=AB+BA$ and $\dagger$ denoting conjugate transpose. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] In an ordered finite basis, matrix units form a basis for the matrix space, so every matrix has a unique expansion in them. [def-qec-prereq-liouville-choi-reshuffle](item-def-qec-prereq-liouville-choi-reshuffle)

[F3] For $s\in\frac12\mathbb N$, the standard finite-spin matrix $J_z$ is diagonal with real entries $m=-s,-s+1,\ldots,s$. [physics:prop-nrqm-orbital-and-spin-finite-spin-matrices](https://alphabetamath.cc/physics/item/prop-nrqm-orbital-and-spin-finite-spin-matrices)

[F4] For a finite complex matrix $A$ and complex scalar $z$, the matrix exponential is $e^{zA}=\sum_{n=0}^{\infty}z^nA^n/n!$, with $A^0=I$ and absolute convergence in operator norm. [physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)

[F5] If a finite complex matrix $A$ satisfies $A^\dagger=-A$, then $e^{tA}$ is unitary for every real $t$. [math:lem-skew-hermitian-matrix-exponential-is-unitary](https://alphabetamath.cc/item/lem-skew-hermitian-matrix-exponential-is-unitary)

## Proof

**Given:** The matrices, real weights and real parameter in the statement.

**Goal:** Prove the jump phases, covariance and invariance of each stated sector.

1.1 By [F4], the exponential series for the diagonal matrix gives $R_\theta=\operatorname{diag}(e^{-i\theta m_1},\ldots,e^{-i\theta m_d})$. Since $(-iJ_z)^\dagger=iJ_z=-(-iJ_z)$, [F5] with $A=-iJ_z$ and $t=\theta$ gives $R_\theta^\dagger=R_\theta^{-1}$. The $(j,k)$ entry of $[J_z,L_a]=q_aL_a$ is $(m_j-m_k-q_a)(L_a)_{jk}=0$. Consequently every nonzero entry of $L_a$ has $m_j-m_k=q_a$, and entrywise multiplication gives $R_\theta L_aR_\theta^\dagger=e^{-iq_a\theta}L_a$. Replacing $q_a$ by $-q_a$ gives the stated alternative phase. [given, F1, F4, F5, algebra]

2.1 Write $C_\theta(X)=R_\theta X R_\theta^\dagger$. Because $H$ and $R_\theta$ are diagonal, $C_\theta(H)=H$. Conjugation by the unitary $R_\theta$ preserves products and adjoints. The phases from step 1.1 therefore cancel in both $C_\theta(L_a)C_\theta(X)C_\theta(L_a)^\dagger$ and $C_\theta(L_a)^\dagger C_\theta(L_a)$. Applying this to each term of the generator yields $C_\theta(\mathcal L(X))=\mathcal L(C_\theta(X))$. [given, F1, step 1.1, algebra]

3.1 For $E_{jk}$, direct multiplication gives $C_\theta(E_{jk})=e^{-i\theta(m_j-m_k)}E_{jk}$. If $X\in W_\omega$, linearity and step 2.1 imply $C_\theta(\mathcal L(X))=e^{-i\theta\omega}\mathcal L(X)$ for every real $\theta$. Expand $\mathcal L(X)=\sum_{j,k}c_{jk}E_{jk}$ using [F2]. Comparing the $(j,k)$ entries for all $\theta$ shows $c_{jk}=0$ whenever $m_j-m_k\ne\omega$, since the two real-frequency exponentials then differ for some $\theta$. Hence $\mathcal L(X)\in W_\omega$. The finite-spin instance follows from [F3]. [given, F2, F3, step 1.1, step 2.1, algebra] ∎
