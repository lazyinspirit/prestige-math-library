---
title: Independent transpose Gram fidelity formula
status: published
research_item: thm-qec-prereq-transpose-gram-fidelity
dependency_level: 2
sources:
  references:
    - title: The Near-optimal Performance of Quantum Error Correction Codes
      url: https://link.aps.org/accepted/10.1103/PhysRevLett.132.250602
      locator: Accepted manuscript, Theorem 1, Eq. (4), and discussion following it
      statement: The logical partial-trace expression gives a channel fidelity
        achievable by transpose recovery, with a QEC matrix built from encoded
        Kraus operators.
      hypotheses: A finite-dimensional encoded code and a quantum noise channel with a
        Kraus representation; channel fidelity is evaluated on a purification of
        the maximally mixed logical input.
      reading_limits: The cited theorem and adjacent discussion were read in the
        accepted manuscript; the present finite-dimensional formulation, support
        completion and proof are supplied locally.
---

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)
- [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)
- [lem-qec-prereq-qec-gram-factorization](item-lem-qec-prereq-qec-gram-factorization)
- [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)
- [math:thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison](https://alphabetamath.cc/item/thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison)
- [` The Near-optimal Performance of Quantum Error Correction Codes · Accepted manuscript, Theorem 1, Eq. (4), and discussion following it `](https://link.aps.org/accepted/10.1103/PhysRevLett.132.250602)


## Statement

Let $H_L=\mathbb C^d$ with $d\geq 1$, and let $H_P,H_O$ be nonzero finite-dimensional complex coordinate spaces. Let $V:H_L\to H_P$ be an isometry, $P=VV^\dagger$, and let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel with finite Kraus representation $\mathcal N(X)=\sum_l E_lXE_l^\dagger$. Let $H_E$ have an orthonormal basis indexed by the Kraus operators, and define $A:H_L\otimes H_E\to H_O$ by $A|\mu,l\rangle=E_lV|\mu\rangle$. Put $M=A^\dagger A$ and $Q=\mathcal N(P)$. Let $Q^{-1/2}$ be the inverse square root on the support of $Q$, extended by zero on its kernel, and let $\mathcal T$ be the support-completed transpose recovery with uncompleted Kraus operators $PE_a^\dagger Q^{-1/2}$. Decode its code-supported output by $V^\dagger$ and call the resulting logical channel $\mathcal E$.

Then the entanglement fidelity of $\mathcal E$ at the maximally mixed logical input is $F_e(\mathcal E)=d^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2$. Here $\operatorname{Tr}_L$ traces the first, logical factor, and $\|B\|_F^2=\sum_{a,l}|B_{a,l}|^2$ in the specified error basis. The formula includes singular $M$ and $Q$.

## Statement references

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[lem-qec-prereq-qec-gram-factorization](item-lem-qec-prereq-qec-gram-factorization)

[thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)

[math:thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison](https://alphabetamath.cc/item/thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison)

## Facts & Assumptions

[F1] The coordinate conventions use conjugate-transpose adjoints and ordered product bases. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] The isometric encoding, code projector and decoding of a code-supported recovery give a logical channel. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F3] Entanglement fidelity is the overlap of the maximally entangled vector $|\Phi_d\rangle=d^{-1/2}\sum_\mu|\mu,\mu\rangle$ with its image under the identity on a reference tensor the logical channel. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F4] A positive semidefinite finite operator has an orthonormal eigenbasis, its positive square root acts by the square roots of its eigenvalues, and its support inverse square root acts by reciprocal square roots on positive eigenvalues and zero on the kernel. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F5] The error-vector map has positive semidefinite Gram operator $M=A^\dagger A$, with entries $M_{[\mu,a],[\nu,l]}=\langle\mu|V^\dagger E_a^\dagger E_lV|\nu\rangle$. [lem-qec-prereq-qec-gram-factorization](item-lem-qec-prereq-qec-gram-factorization)

[F6] The completed transpose recovery is a channel with code-supported output, and its completion has no effect on noise outputs of code-supported operators. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F7] A Kraus representation acts by summing conjugations by its operators. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F8] First-factor partial trace has entries $(\operatorname{Tr}_L X)_{a,l}=\sum_\mu X_{[\mu,a],[\mu,l]}$. [math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)

[F9] The squared Frobenius norm of a finite matrix is the sum of the squared moduli of its entries. [math:thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison](https://alphabetamath.cc/item/thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison)

## Proof

**Given:** The finite spaces, isometry, Kraus operators, Gram operator and support-completed recovery in the statement.

**Goal:** Compute the entanglement fidelity of the decoded recovered channel as the stated squared Frobenius norm.

1.1 In the product basis, $AA^\dagger=\sum_l E_lVV^\dagger E_l^\dagger=Q$. Choose an orthonormal eigenbasis $(x_j)$ of $M$, with eigenvalues $\lambda_j\geq0$. If $\lambda_j=0$, then $\|Ax_j\|^2=\langle Mx_j,x_j\rangle=0$, so $Ax_j=0$. If $\lambda_j>0$, then $QAx_j=A Mx_j=\lambda_j Ax_j$, whence $Q^{-1/2}Ax_j=\lambda_j^{-1/2}Ax_j$. Thus $A^\dagger Q^{-1/2}Ax_j=\sqrt{\lambda_j}x_j$ for every $j$, including zero eigenvalues. Consequently $A^\dagger Q^{-1/2}A=\sqrt M$. [given, F1, F4, F5, algebra]

2.1 By the support-completion result, the decoded channel agrees on every logical operator with the Kraus sum whose operators are $B_{a,l}=V^\dagger E_a^\dagger Q^{-1/2}E_lV$. The isometry identity $V^\dagger P=V^\dagger$ gives this expression after decoding. For each pair $a,l$, step 1.1 and the definition of $A$ give $(\sqrt M)_{[\mu,a],[\nu,l]}=\langle\mu|B_{a,l}|\nu\rangle$. Therefore $\operatorname{tr}B_{a,l}=\sum_\mu(\sqrt M)_{[\mu,a],[\mu,l]}=(\operatorname{Tr}_L\sqrt M)_{a,l}$. [given, F1, F2, F6, F7, F8, step 1.1]

3.1 Applying the Kraus sum to the second half of $|\Phi_d\rangle\langle\Phi_d|$ gives $F_e(\mathcal E)=\sum_{a,l}|\langle\Phi_d|(I\otimes B_{a,l})|\Phi_d\rangle|^2$. Expanding the normalized matching-basis vector gives $\langle\Phi_d|(I\otimes B_{a,l})|\Phi_d\rangle=d^{-1}\operatorname{tr}B_{a,l}$. Substitution from step 2.1 and the Frobenius norm formula yield $F_e(\mathcal E)=d^{-2}\sum_{a,l}|(\operatorname{Tr}_L\sqrt M)_{a,l}|^2=d^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2$. The zero-eigenvalue case was included in step 1.1, so no invertibility assumption is needed. [F3, F7, F9, step 1.1, step 2.1, algebra] ∎
