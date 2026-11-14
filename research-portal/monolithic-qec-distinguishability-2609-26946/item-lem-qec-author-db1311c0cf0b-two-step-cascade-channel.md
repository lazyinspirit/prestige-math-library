---
title: Exact two-step equal-rate cascade restricted to the detection isometry
status: published
research_item: lem-qec-author-db1311c0cf0b-two-step-cascade-channel
dependency_level: 3
---

## Prerequisites

- [lem-qec-author-db1311c0cf0b-spin-two-downward-populations](item-lem-qec-author-db1311c0cf0b-spin-two-downward-populations)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [lem-qec-prereq-dipole-strength-sum-contract](item-lem-qec-prereq-dipole-strength-sum-contract)
- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)
- [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves)
- [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)


## Statement

Assume AC. Work on $V_2\oplus V_1\oplus V_0$ with the spin bases and the isometry $W$ from the spin-two population lemma. Fix $\gamma>0$, $\omega_0>0$ and real $\Delta$. Take the diagonal matrix $H e_{J,m}=[\omega_0J(J+1)+\Delta Jm]e_{J,m}$ and finite lowering matrices $L_\delta$, whose $V_J\to V_{J-1}$ blocks are $\sqrt\gamma\sqrt{(2J+1)/(2J-1)}\,C^{J-1,m+\delta}_{1,\delta;J,m}$ for $J=1,2$, and whose other blocks vanish. Let $\mathcal N_t=e^{t\mathcal L}$ be their finite GKSL channel, and let $g=e_{0,0}$. For every $t\ge0$ and every $X\in\mathcal L(\mathbb C^2)$, the restricted channel $\mathcal N_t(WXW^\dagger)$ has orthogonal output sectors $V_2,V_1,V_0$ of the form
$$p_0 W_tXW_t^\dagger\ \oplus\ p_1 C_t(X)\ \oplus\ p_2\operatorname{Tr}(X)|g\rangle\langle g|,$$
where $x=\gamma t$, $p_0=e^{-x}$, $p_1=xe^{-x}$, $p_2=1-(1+x)e^{-x}$, and $W_t=e^{-itH|_{V_2}}W$ is an isometry. For $t>0$, $C_t:\mathcal L(\mathbb C^2)\to\mathcal L(V_1)$ is a channel with $C_t(I_2)=2I_3/3$ and $C_t(Z)=\operatorname{diag}(1/3,-2/3,1/3)$, where $Z=\operatorname{diag}(1,-1)$ on the logical input and output order is $m=-1,0,1$. The family $C_t$ has a continuous extension to $t=0$. At $t=0$ the sector formula uses this extension.

## Facts & Assumptions

[F1] The normalized $V_2$-to-$V_1$ jump blocks $B_\delta$ have the stated input-isometry populations and adjoint-product normalization. [lem-qec-author-db1311c0cf0b-spin-two-downward-populations](item-lem-qec-author-db1311c0cf0b-spin-two-downward-populations)

[F2] Spin-block coordinates, ladder coefficients, magnetic labels and coupled phases are fixed. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F3] The normalized lowering components have adjoint-product sum equal to identity separately on V2 and V1. [lem-qec-prereq-dipole-strength-sum-contract](item-lem-qec-prereq-dipole-strength-sum-contract)

[F4] A finite Hermitian Hamiltonian and finite jump matrices define the displayed GKSL exponential channel. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F5] Matrix exponentials are differentiable groups and solve finite constant-coefficient linear evolution uniquely. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F6] Continuous finite-dimensional integrands obey the fundamental theorem of calculus under Countable Choice. [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves)

[F7] Reorder absolutely integrable matrix entries over finite time intervals by Fubini. [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)

[F8] Assume full AC, carrying Countable Choice for integration. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F9] Every finite-dimensional completely positive trace-preserving map admits a finite normalized Kraus family. [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

## Proof

**Given:** The three finite spin blocks and matrices in the statement.

**Goal:** Derive the number-of-decays sector formula and the needed one-decay population identities.

1.1 Because different output spin blocks are orthogonal, [F3] gives $\sum L_\delta^\dagger L_\delta=\gamma(I_{V_2}\oplus I_{V_1})\oplus0$. Starting with an operator in $V_2$, the block-diagonal Hamiltonian and lowering jumps preserve the direct sum of diagonal spin-block operator sectors; no off-diagonal spin block is produced. Its top sector is therefore $Z_2(t)=e^{-\gamma t}U_2(t)WXW^\dagger U_2(t)^\dagger$, where $U_J(v)=e^{-ivH|_{V_J}}$. This is obtained by direct differentiation of the block GKSL equation. [given, F1, F2, F3, F4, F5, algebra]

1.2 Variation of constants in the V1 sector gives
$$Z_1(t)=\gamma e^{-\gamma t}\int_0^t\sum_\delta U_1(t-s)B_\delta U_2(s)WXW^\dagger U_2(s)^\dagger B_\delta^\dagger U_1(t-s)^\dagger\,ds.$$
Indeed differentiating this expression gives its incoming jump term from $Z_2$ and the V1 no-jump generator, with zero initial value. Define $C_t$ as the integral in this expression divided by $t$. Each integrand is a channel: its Kraus operators are $U_1(t-s)B_\delta U_2(s)W$ and their adjoint-product sum is $I_2$ by [F1]. Its average is completely positive at every finite ancilla and trace-preserving. It is thus a finite-dimensional channel and has a finite Kraus family by [F9]. This yields $Z_1=p_1 C_t(X)$. [F1, F4, F5, F6, F8, F9, step 1.1, algebra]

2.1 The ground block is a scalar multiple of $|g\rangle\langle g|$, and its scalar derivative is $\gamma\operatorname{Tr}Z_1(t)$ by the V1 normalization. Since $\operatorname{Tr}Z_1(t)=\gamma t e^{-\gamma t}\operatorname{Tr}X$, integration gives $Z_0(t)=[1-(1+\gamma t)e^{-\gamma t}]\operatorname{Tr}X|g\rangle\langle g|$. The displayed sectors solve the entire block equation and have the correct initial data; uniqueness follows by multiplying the difference of solutions by $e^{-t\mathcal L}$ and differentiating. Thus they are exactly the channel, including its two-decay sector. [F3, F4, F5, F6, F8, step 1.1, step 1.2, algebra]

3.1 Before a first jump, $U_2(s)a$ differs from $a$ only by phases on its two magnetic components and a common phase, whereas $U_2(s)b$ differs from $b$ only by a common phase. Thus [F1] gives diagonal one-decay output populations $(1/2,0,1/2)$ and $(1/6,2/3,1/6)$ for every $s$. The subsequent diagonal $U_1(t-s)$ leaves them unchanged. Summing these two outputs gives $C_t(I_2)=2I_3/3$ and subtracting them gives the stated $C_t(Z)$. Rescale $s=tu$ in the definition of $C_t$: it becomes an integral over $0\le u\le1$ of matrix entries continuous jointly in $(t,u)$. Compact-uniform continuity then gives a continuous extension to $t=0$ by integration, without dividing by a vanishing time. [F1, F2, F6, F7, step 1.2, algebra] ∎
