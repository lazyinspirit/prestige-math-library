---
title: A uniform transpose-fidelity bound for the one-decay channel
status: draft
research_item: lem-qec-author-db1311c0cf0b-one-decay-transpose-bound
dependency_level: 3
---

## Prerequisites

- [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)
- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)
- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)
- [physics:lem-qsm-dt-finite-trace-pairing-cyclicity](https://alphabetamath.cc/physics/item/lem-qsm-dt-finite-trace-pairing-cyclicity)


## Statement

Let $C:\mathcal L(\mathbb C^2)\to\mathcal L(\mathbb C^3)$ be a channel such that $C(I_2)=2I_3/3$ and $C(Z)=\operatorname{diag}(1/3,-2/3,1/3)$, with $Z=\operatorname{diag}(1,-1)$. Let $T$ be its transpose recovery for the full logical code $I_2$. Then $F_e(TC)\ge3/8$. More precisely, if $C^*$ denotes the adjoint for the Hilbert–Schmidt inner product $\langle A,B\rangle_{\rm HS}=\operatorname{Tr}(A^\dagger B)$ and $Q_0=I_2/\sqrt2$, $Q_1=Z/\sqrt2$, $Q_2=\begin{pmatrix}0&1\\1&0\end{pmatrix}/\sqrt2$, $Q_3=\begin{pmatrix}0&-i\\i&0\end{pmatrix}/\sqrt2$, then
$$TC=\tfrac32 C^*C,\qquad F_e(TC)=\tfrac38\sum_{j=0}^3\|C(Q_j)\|_{\rm HS}^2\ge\tfrac38.$$
Here $\|A\|_{\rm HS}^2=\operatorname{Tr}(A^\dagger A)$ is the sum of squared entry moduli.

## Facts & Assumptions

[F1] For code $I_2$ the transpose map has Kraus maps $K_a^\dagger C(I_2)^{-1/2}$, with no output-support ambiguity when $C(I_2)$ is positive definite. [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[F2] The qubit entanglement fidelity is the maximally entangled overlap and is linear in the recovered channel. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F3] Use finite matrix units, adjoints and ordered tensor coordinates. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F4] A finite-dimensional channel has a finite Kraus representation $C(X)=\sum K_a X K_a^\dagger$ with normalized adjoint-product sum. [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

[F5] For compatible finite rectangular matrices $A\in M_{e\times d}(\mathbb C)$ and $B\in M_{d\times e}(\mathbb C)$, the diagonal-sum trace satisfies $\operatorname{Tr}_e(AB)=\operatorname{Tr}_d(BA)$; in particular, square matrix trace is cyclic. [physics:lem-qsm-dt-finite-trace-pairing-cyclicity](https://alphabetamath.cc/physics/item/lem-qsm-dt-finite-trace-pairing-cyclicity)

## Proof

**Given:** The channel, its two specified output matrices and the full logical code.

**Goal:** Obtain a positive-square expression for its recovered fidelity and a uniform lower bound.

1.1 Choose a finite Kraus representation by [F4]. Its Hilbert–Schmidt adjoint is $C^*(Y)=\sum_aK_a^\dagger YK_a$, since rectangular trace cyclicity in [F5] verifies the defining adjoint identity entrywise. Because $C(I_2)^{-1/2}=\sqrt{3/2}I_3$, the transpose formula [F1] gives $T(Y)=(3/2)C^*(Y)$. Hence $E:=TC=(3/2)C^*C$ and $\langle Q,E(Q)\rangle_{\rm HS}=(3/2)\|C(Q)\|_{\rm HS}^2$ for every matrix $Q$. [given, F1, F3, F4, F5, algebra]

2.1 Expanding the qubit maximally entangled projector in matrix units $E_{ab}=|a\rangle\langle b|$ in [F2] gives $F_e(E)=\frac14\sum_{a,b}\operatorname{Tr}(E_{ab}^\dagger E(E_{ab}))$. The sum is unchanged under any orthonormal change of matrix basis: substituting its unitary coefficient matrix makes the cross coefficients collapse to Kronecker deltas. The four stated $Q_j$ are an orthonormal basis, as multiplication of their entries verifies. Thus $F_e(E)=\frac14\sum_j\langle Q_j,E(Q_j)\rangle_{\rm HS}=\frac38\sum_j\|C(Q_j)\|_{\rm HS}^2$. [F2, F3, F5, step 1.1, algebra]

3.1 The first specified output has $\|C(Q_0)\|_{\rm HS}^2=\frac12\operatorname{Tr}((2I_3/3)^2)=2/3$. The second has $\|C(Q_1)\|_{\rm HS}^2=\frac12(1/9+4/9+1/9)=1/3$. The remaining two squared norms are nonnegative, so their sum with these first two is at least one. Substitution in step 2.1 gives $F_e(TC)\ge3/8$. [given, F3, F5, step 2.1, algebra] ∎
