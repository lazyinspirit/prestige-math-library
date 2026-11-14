---
title: Support-normalized transpose recovery and completion
status: draft
research_item: thm-qec-prereq-transpose-support-completion
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [math:thm-trace-of-ab-equals-trace-of-ba](https://alphabetamath.cc/item/thm-trace-of-ab-equals-trace-of-ba)
- [math:def-qc-fidelity](https://alphabetamath.cc/item/def-qc-fidelity)


## Statement

Let $H_P,H_O$ be finite-dimensional complex inner-product spaces, let $P$ be the orthogonal projector onto a nonzero code subspace of $H_P$, and let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel with finite Kraus representation $\mathcal N(X)=\sum_a E_aXE_a^\dagger$. Put $A=\mathcal N(P)$, let $S$ be the orthogonal projector onto $\operatorname{supp}A=(\ker A)^\perp$, and let $A^{-1/2}$ be the inverse square root on this support and zero on $\ker A$. Define $R_a=PE_a^\dagger A^{-1/2}$ and $\mathcal T_0(Y)=\sum_a R_aYR_a^\dagger$.

The map $\mathcal T_0$ is completely positive, has output supported on the code, and preserves trace for every $Y$ supported on $\operatorname{supp}A$, meaning $Y=SYS$. For any code state $\sigma$—a positive semidefinite operator of trace one with $P\sigma P=\sigma$—the map $\mathcal T(Y)=\mathcal T_0(Y)+\operatorname{tr}((I-S)Y)\sigma$ is a quantum channel with code-supported output. For every $X=PXP$, the output $\mathcal N(X)$ is supported on $\operatorname{supp}A$; consequently $\mathcal T(\mathcal N(X))=\mathcal T_0(\mathcal N(X))$. In particular, completion does not change any recovered code-state output or the value of any function of that output with all other arguments fixed. Explicitly, let $\rho$ be any code state and let $\tau$ be any density operator on $H_P$, meaning a positive semidefinite operator of trace one. With the root-fidelity convention $F(B,C)=\|\sqrt B\sqrt C\|_1$ for density operators $B,C$ on the same space, where $\|\cdot\|_1$ denotes the trace norm, one has $F(\tau,\mathcal T(\mathcal N(\rho)))=F(\tau,\mathcal T_0(\mathcal N(\rho)))$. The same equality holds for squared fidelity $F^2$.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, nonzero code projector, channel, Kraus family and code state in the Statement.

**Goal:** Establish the support normalization, the completed channel, and equality on outputs of code-supported inputs.

[F1] A quantum channel is linear, completely positive and trace-preserving; a code-supported physical recovery has outputs $Z$ satisfying $PZP=Z$. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] For positive semidefinite $A$, the support inverse square root is zero on the kernel and satisfies $A^{-1/2}AA^{-1/2}=S$. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F3] The given Kraus representation means $\mathcal N(X)=\sum_a E_aXE_a^\dagger$ for every input operator. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F4] For compatible finite matrices, $\operatorname{tr}(BC)=\operatorname{tr}(CB)$, including rectangular products. [math:thm-trace-of-ab-equals-trace-of-ba](https://alphabetamath.cc/item/thm-trace-of-ab-equals-trace-of-ba)

[F5] For density operators $B,C$ on the same nonzero finite-dimensional complex inner-product space, root fidelity is $F(B,C)=\|\sqrt B\sqrt C\|_1$, where $\|\cdot\|_1$ is the trace norm; squared fidelity is $F(B,C)^2$. [math:def-qc-fidelity](https://alphabetamath.cc/item/def-qc-fidelity)

## Proof

**Proof technique:** direct.

**Given:** The finite-dimensional spaces, nonzero code projector, channel, Kraus family and code state in the Statement.

**Goal:** Establish the support normalization, the completed channel, and equality on outputs of code-supported inputs.

**Proof technique:** direct.

1.1 Each $E_aPE_a^\dagger$ is positive semidefinite, since its quadratic form at $y$ is the squared norm of $PE_a^\dagger y$. Thus $A=\sum_a E_aPE_a^\dagger$ is positive semidefinite. By [F2], $\sum_a R_a^\dagger R_a=A^{-1/2}(\sum_a E_aPE_a^\dagger)A^{-1/2}=S$. Each $R_a$ has range in the code, so $P\mathcal T_0(Y)P=\mathcal T_0(Y)$. Conjugation by any operator remains positive after tensoring with a finite ancilla, and finite sums preserve positivity; hence $\mathcal T_0$ is completely positive. By [F4], $\operatorname{tr}\mathcal T_0(Y)=\operatorname{tr}(SY)$, which equals $\operatorname{tr}Y$ when $Y=SYS$. [given, F2, F3, F4]

2.1 Write $Q=I-S$. Choose an orthonormal basis $(w_j)$ of the range of $Q$ and a spectral decomposition $\sigma=\sum_i p_i|u_i\rangle\langle u_i|$, where $p_i\geq0$, $\sum_i p_i=1$, and the vectors with nonzero weights lie in the code. The operators $C_{ij}=\sqrt{p_i}|u_i\rangle\langle w_j|$ satisfy $\sum_{i,j}C_{ij}YC_{ij}^\dagger=\operatorname{tr}(QY)\sigma$ and $\sum_{i,j}C_{ij}^\dagger C_{ij}=Q$. Therefore the completion term is completely positive and code-supported. Together with step 1.1, it makes $\mathcal T$ completely positive and code-supported; its trace is $\operatorname{tr}(SY)+\operatorname{tr}(QY)=\operatorname{tr}Y$. Thus $\mathcal T$ is a channel by [F1]. [given, F1, F2, F4, step 1.1]

3.1 If $y\in\ker A$, then $0=\langle Ay,y\rangle=\sum_a\|PE_a^\dagger y\|^2$. Every summand is nonnegative, so $PE_a^\dagger y=0$ for every $a$. Taking adjoints gives $QE_aP=0$ and $PE_a^\dagger Q=0$. Hence, for $X=PXP$, both $Q\mathcal N(X)=0$ and $\mathcal N(X)Q=0$; equivalently $\mathcal N(X)=S\mathcal N(X)S$. Its completion term therefore vanishes. [given, F2, F3, step 1.1, step 2.1]

4.1 For a code state $\rho$, the operator $Z=\mathcal T(\mathcal N(\rho))$ is positive semidefinite and has trace one because $\mathcal N$ and $\mathcal T$ are channels. By step 3.1 it equals $\mathcal T_0(\mathcal N(\rho))$, which is therefore also a density operator. For any density operator $\tau$ on $H_P$, both sides of the asserted root-fidelity identity are consequently defined by [F5] and equal $F(\tau,Z)$. Squaring gives the squared-fidelity identity. More generally, substitution of the equal recovered operators into any function defined at their common value, with all other arguments fixed, gives equal values. [given, F1, F5, step 2.1, step 3.1] ∎
