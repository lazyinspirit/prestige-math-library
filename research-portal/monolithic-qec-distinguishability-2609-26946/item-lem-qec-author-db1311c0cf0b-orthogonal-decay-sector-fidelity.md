---
title: Orthogonal decay sectors yield a strict fidelity margin
status: published
research_item: lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity
dependency_level: 4
---

## Prerequisites

- [lem-qec-author-db1311c0cf0b-two-step-cascade-channel](item-lem-qec-author-db1311c0cf0b-two-step-cascade-channel)
- [lem-qec-author-db1311c0cf0b-one-decay-transpose-bound](item-lem-qec-author-db1311c0cf0b-one-decay-transpose-bound)
- [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)
- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)
- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice (AC) and the full hypotheses of the two-step cascade channel lemma, including $\gamma>0$, $\omega_0>0$ and $\Delta\in\mathbb R$. For its finite cascade and restricted isometry, let $F_D(t)$ be the entanglement fidelity after its channel-specific transpose recovery. Then $F_D$ is continuous on $[0,\infty)$, $F_D(0)=1$, and for $x=\gamma t$,
$$F_D(t)=p_0+p_1 F_e(T_tC_t)+p_2/4\ \ge\ \frac{1+3e^{-x}}4+\frac{x e^{-x}}8,$$
where $p_0=e^{-x}$, $p_1=xe^{-x}$, $p_2=1-(1+x)e^{-x}$ and $T_t$ is the transpose recovery for $C_t$. Thus the lower bound strictly exceeds $(1+3e^{-x})/4$ for every finite $t>0$. Moreover, $F_D(t)<1$ for every $t>0$ and $F_D(t)\to1/4$ as $t\to\infty$.

## Facts & Assumptions

[F1] The code-restricted noise has three orthogonal output sectors, of weights $p_0,p_1,p_2$, with a no-decay isometry, one-decay channel $C_t$ and ground replacement channel. [lem-qec-author-db1311c0cf0b-two-step-cascade-channel](item-lem-qec-author-db1311c0cf0b-two-step-cascade-channel)

[F2] The one-decay channel has recovered fidelity at least 3/8, and its recovered fidelity is a finite sum of squared Hilbert–Schmidt output norms. [lem-qec-author-db1311c0cf0b-one-decay-transpose-bound](item-lem-qec-author-db1311c0cf0b-one-decay-transpose-bound)

[F3] Transpose recovery uses the support inverse square root of the noise image of the code projector. [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[F4] Entanglement fidelity is linear in a sum of recovered channels and lies in [0,1] for a channel. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F5] Use finite adjoints, traces and orthogonal direct-sum output blocks. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F6] Every finite channel has a finite Kraus family, permitting a family whose members are separately supported in the orthogonal output blocks. [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

[F7] Assume full AC as required by the two-step cascade lemma. Its use here is inherited through that lemma's time-integration construction of the sector decomposition and the continuous family $C_t$; the blockwise recovery calculation requires no additional choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [lem-qec-author-db1311c0cf0b-two-step-cascade-channel](item-lem-qec-author-db1311c0cf0b-two-step-cascade-channel)

## Proof

**Given:** Full AC, the cascade under its stated hypotheses, and the channel-specific transpose recovery.

**Goal:** Compute the recovered fidelity by output sectors and derive the margin and endpoint behavior.

1.1 More generally, for channels $C_j$ with mutually orthogonal output spaces and weights $p_j>0$, the channel $N=\bigoplus_j p_jC_j$ has Kraus maps $\sqrt{p_j}K_{j,a}$ in the separate blocks. Its image of $I_2$ is $\bigoplus_j p_jC_j(I_2)$. The support inverse square root has block $p_j^{-1/2}C_j(I_2)^{-1/2}$. Therefore its transpose Kraus maps restrict on block $j$ to $K_{j,a}^\dagger C_j(I_2)^{-1/2}$ and vanish on all other blocks. Composition with $N$ gives $TN=\sum_j p_j T_jC_j$. Zero-weight sectors contribute nothing and use the support convention. Fidelity is consequently the corresponding weighted sum. [given, F3, F4, F5, F6, algebra]

2.1 Under [F7], apply step 1.1 to the cascade decomposition in [F1]. Transpose recovery exactly inverts the no-decay isometry on its image: its support image of $I_2$ is the range projector and the recovery is the adjoint isometry. Its recovered fidelity is one. For the ground replacement channel, Kraus maps $|g\rangle\langle0|$, $|g\rangle\langle1|$ give the transpose output $I_2/2$ on input $|g\rangle\langle g|$; its recovered channel is $X\mapsto\operatorname{Tr}(X)I_2/2$ and has entanglement fidelity $1/4$, by inserting the maximally entangled projector. Hence $F_D=p_0+p_1F_e(T_tC_t)+p_2/4$. By [F2] this is at least $p_0+3p_1/8+p_2/4=(1+3e^{-x})/4+xe^{-x}/8$. [F1, F2, F3, F4, F7, step 1.1, algebra]

3.1 Under the inherited hypothesis [F7], the one-decay maps extend continuously to zero by [F1]; their transpose fidelities are continuous and bounded in $[0,1]$ by the squared-norm formula in [F2]. The sector formula therefore proves continuity including at zero and gives $F_D(0)=1$. For $t>0$, $p_2>0$: its derivative in $x$ is $xe^{-x}>0$ and its value at zero is zero. Since the other recovered-sector fidelities are at most one, $F_D\le1-3p_2/4<1$. Finally $p_0,p_1\to0$ and $p_2\to1$, while the one-decay fidelity stays bounded, so $F_D\to1/4$. Strict positivity of $xe^{-x}$ at finite $t>0$ gives the claimed margin. [F1, F2, F4, F7, step 2.1, algebra] ∎
