---
title: Logical Kraus operators of the completed transpose decoder
status: published
research_item: lem-author-9fe623b43725-logical-transpose
dependency_level: 2
---

## Prerequisites

- [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)


## Statement

Let $d\ge1$ be an integer, let $H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, and let $V:\mathbb C^d\to H_P$ be a linear isometry. Set $P=VV^\dagger$. Let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel with finite Kraus representation $\mathcal N(X)=\sum_bE_bXE_b^\dagger$, where $E_b:H_P\to H_O$. Here $\mathcal L(H)$ denotes the complex-linear endomorphisms of $H$.

Set $A=\mathcal N(P)$ and let $S$ be the orthogonal projector onto $\operatorname{supp}A=(\ker A)^\perp$. The operator $A^{-1/2}$ is the inverse square root on this support and zero on $\ker A$. For any code state $\sigma$, meaning $\sigma\ge0$, $\operatorname{tr}\sigma=1$ and $P\sigma P=\sigma$, define $R_a=PE_a^\dagger A^{-1/2}$ and the completed transpose recovery $\mathcal T(Y)=\sum_aR_aYR_a^\dagger+\operatorname{tr}((I_{H_O}-S)Y)\sigma$.

The logical decoder $\mathcal D:\mathcal L(H_O)\to\mathcal L(\mathbb C^d)$ given by $\mathcal D(Y)=V^\dagger\mathcal T(Y)V$ is completely positive and trace-preserving (CPTP). On encoded noisy inputs its composition has Kraus operators $K_{ab}=V^\dagger E_a^\dagger A^{-1/2}E_bV$, so $\mathcal D\mathcal N(VXV^\dagger)=\sum_{a,b}K_{ab}XK_{ab}^\dagger$ for every $X\in\mathcal L(\mathbb C^d)$.

## Statement references

[thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

## Facts & Assumptions

**Given:** The spaces, maps and operators in the Statement.

**Goal:** Prove the asserted identities and conclusions.

[F1] The completed transpose map is CPTP, code-supported, and agrees with its support-normalized part on every noisy code-supported operator. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F2] An isometric encoding is $X\mapsto VXV^\dagger$, with $V^\dagger V=I$ and $VV^\dagger=P$. Compressing any code-supported quantum channel $\mathcal T$ by $V^\dagger(\cdot)V$ gives a CPTP logical decoder, as justified by ancilla conjugation and composition. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F3] A finite Kraus representation expresses a complex-linear map as a finite sum of conjugations, with the identity valid for every input operator. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

## Proof

**Given:** The spaces, maps and operators in the Statement.

**Goal:** Prove the asserted identities and conclusions.

**Proof technique:** direct.

1.1 Compression $Z\mapsto V^\dagger ZV$ is completely positive. Every output $Z$ of $\mathcal T$ satisfies $PZP=Z$, so $\operatorname{tr}(V^\dagger ZV)=\operatorname{tr}(PZ)=\operatorname{tr}Z$; the trace equality follows by expanding both traces in orthonormal bases adapted to the code. Thus $\mathcal D$ is trace preserving and completely positive. [given, F1, F2]

2.1 For $VXV^\dagger=P(VXV^\dagger)P$, the completion term vanishes after the noise. Substitute $R_a=PE_a^\dagger A^{-1/2}$ into the composition, and use $V^\dagger P=V^\dagger$ and $PV=V$. This gives exactly the displayed $K_{ab}$ and channel formula. [F1, F2, F3, step 1.1] ∎
