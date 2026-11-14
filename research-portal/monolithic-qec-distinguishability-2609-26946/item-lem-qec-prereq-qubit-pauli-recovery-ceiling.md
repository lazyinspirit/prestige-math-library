---
title: Two orthogonal Pauli alternatives bound recovery fidelity
status: published
research_item: lem-qec-prereq-qubit-pauli-recovery-ceiling
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)
- [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [math:thm-qc-kraus-choi-equivalence](https://alphabetamath.cc/item/thm-qc-kraus-choi-equivalence)
- [math:thm-qc-kraus-map-completely-positive](https://alphabetamath.cc/item/thm-qc-kraus-map-completely-positive)
- [math:thm-qc-trace-preserving-kraus-normalization](https://alphabetamath.cc/item/thm-qc-trace-preserving-kraus-normalization)


## Statement

Let $H=\mathbb C^2$ with its standard ordered basis, and let $\mathcal R:\mathcal L(H)\to\mathcal L(H)$ be a quantum channel: a complex-linear, completely positive, trace-preserving map. Let $U$ be a unitary $2\times2$ matrix, so $U^\dagger U=UU^\dagger=I$, and put $Z=\operatorname{diag}(1,-1)$. For any matrix $V$ write $\operatorname{Ad}_V(X)=VXV^\dagger$. Then $F_e(\mathcal R\circ\operatorname{Ad}_U)+F_e(\mathcal R\circ\operatorname{Ad}_{ZU})\leq 1$, where both entanglement fidelities use the maximally mixed input $I/2$.

## Facts & Assumptions

**Given:** The space, channel $\mathcal R$, and matrices $U,Z$ in the Statement.

**Goal:** Prove the displayed sum of entanglement fidelities is at most one.

[F1] The finite operator conventions use the standard basis and conjugate-transpose adjoints. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] For a channel $\mathcal E$ on $H$, $F_e(\mathcal E)=\langle\Phi|({\rm id}\otimes\mathcal E)(|\Phi\rangle\langle\Phi|)|\Phi\rangle$, where $|\Phi\rangle=(|00\rangle+|11\rangle)/\sqrt2$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F3] A quantum channel is completely positive and trace-preserving. Every finite-dimensional completely positive map has a finite Kraus representation $\mathcal R(X)=\sum_a K_aXK_a^\dagger$. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel) [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation) [math:thm-qc-kraus-choi-equivalence](https://alphabetamath.cc/item/thm-qc-kraus-choi-equivalence)

[F4] A finite Kraus sum is completely positive, and it is trace-preserving exactly when its Kraus operators satisfy $\sum_aK_a^\dagger K_a=I$. [math:thm-qc-kraus-map-completely-positive](https://alphabetamath.cc/item/thm-qc-kraus-map-completely-positive) [math:thm-qc-trace-preserving-kraus-normalization](https://alphabetamath.cc/item/thm-qc-trace-preserving-kraus-normalization)

## Proof

1.1 Since $Z^\dagger Z=I$, both $U$ and $ZU$ are unitary. By [F4], each one-operator sum $\operatorname{Ad}_V$ for $V\in\{U,ZU\}$ is a channel. By [F3], choose a finite Kraus family $(K_a)$ for $\mathcal R$; [F4] gives $\sum_a K_a^\dagger K_a=I$. Direct composition gives Kraus families $(K_aV)$ for $\mathcal R\circ\operatorname{Ad}_V$, and their normalization is $\sum_a V^\dagger K_a^\dagger K_aV=I$. Thus the compositions are channels by [F4]. [given, F3, F4, algebra]

2.1 For any matrix $A$, expansion in the basis in [F1] gives $\langle\Phi|(I\otimes A)|\Phi\rangle=\operatorname{tr}(A)/2$. Using the Kraus formula and [F2] therefore gives $F_e(\mathcal R\circ\operatorname{Ad}_V)=\frac14\sum_a|\operatorname{tr}(K_aV)|^2$ for $V\in\{U,ZU\}$. Put $B_a=UK_a$. Finite matrix-index expansion gives $\operatorname{tr}(K_aU)=\operatorname{tr}(B_a)$ and $\operatorname{tr}(K_aZU)=\operatorname{tr}(B_aZ)$. If the diagonal entries of $B_a$ are $b_{a,00},b_{a,11}$, then $|\operatorname{tr}(B_a)|^2+|\operatorname{tr}(B_aZ)|^2=|b_{a,00}+b_{a,11}|^2+|b_{a,00}-b_{a,11}|^2=2(|b_{a,00}|^2+|b_{a,11}|^2)\leq2\operatorname{tr}(B_a^\dagger B_a)$. [step 1.1, F1, F2, F3, algebra]

3.1 Since $U^\dagger U=I$, the normalization in step 1.1 gives $\sum_a\operatorname{tr}(B_a^\dagger B_a)=\operatorname{tr}(\sum_aK_a^\dagger K_a)=\operatorname{tr}(I)=2$. Summing the inequality in step 2.1 and multiplying by $1/4$ yields $F_e(\mathcal R\circ\operatorname{Ad}_U)+F_e(\mathcal R\circ\operatorname{Ad}_{ZU})\leq1$, as required. [given, step 1.1, step 2.1, F1, algebra] ∎
