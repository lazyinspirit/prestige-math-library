---
title: Transpose (Petz) recovery on a code
status: published
research_item: def-qec-distinguishability-transpose-recovery
dependency_level: 2
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, checking-time discussion; p. 9, text before Eq. (S1.9)
      statement: The article uses transpose recovery for codes and channels and gives
        recovery Kraus operators of the form $P K_k^\dagger\mathcal
        N(P)^{-1/2}$.
      hypotheses: The displayed application is to the four-level channel and code; the
        main text describes the transpose map for any code and channel.
      reading_limits: Read the supplied article text at the cited passages. This
        reference attributes the article's formulation; the finite-dimensional
        completion and its justification use the independent local supplier, not
        the article as proof.
---

PDF p. 9: ` Text before Eq. (S1.9) `; PDF p. 2: ` Checking-time discussion `

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)


## Definition

Let $H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces. Write $\mathcal L(H)$ for the linear operators on $H$, and let $P$ be the orthogonal projector onto a nonzero code subspace of $H_P$. Let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel, meaning a linear, completely positive, trace-preserving map, with finite Kraus representation $\mathcal N(X)=\sum_k K_k X K_k^\dagger$. Here $\dagger$ denotes the adjoint.

Put $A=\mathcal N(P)$ and let $S$ project onto its support $(\ker A)^\perp$. The symbol $A^{-1/2}$ denotes the inverse of the positive square root on this support and zero on the kernel. The support-normalized transpose map is $\mathcal T_0(Y)=\sum_k R_k Y R_k^\dagger$, where $R_k=P K_k^\dagger A^{-1/2}$. Its output lies in the code and it preserves trace on operators $Y=SYS$.

To make a recovery channel on all of $\mathcal L(H_O)$, choose a code state $\sigma$, meaning a positive semidefinite trace-one operator with $P\sigma P=\sigma$, and define $\mathcal T(Y)=\mathcal T_0(Y)+\operatorname{tr}((I-S)Y)\sigma$. We call any such completion a transpose recovery. The completion choice does not affect $\mathcal T(\mathcal N(X))$ for $X=PXP$.

## Facts & Assumptions

[F1] The finite operator conventions define adjoints and operator notation. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] A quantum channel is linear, completely positive and trace-preserving, and a code-supported physical recovery is a channel whose outputs satisfy $PZP=Z$. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F3] A finite Kraus representation acts as the sum of conjugations by its Kraus operators. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F4] For a positive semidefinite finite-dimensional operator, the support inverse square root is zero on the kernel and satisfies $A^{-1/2}AA^{-1/2}=S$. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F5] Under the stated finite-dimensional hypotheses, the support-normalized map is completely positive and trace-preserving on the support; the displayed completion is a code-supported channel and does not change its action after noise on code-supported operators. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

## Justification

The channel and Kraus conventions in [F2] and [F3] give $A=\sum_k K_k P K_k^\dagger$, a positive semidefinite operator. Thus the support and inverse square root are well-defined by [F4]. A code state exists because the code is nonzero: the projector onto any unit code vector is one. The maps in the definition are therefore well-defined. The support normalization, complete positivity, trace-preserving completion and its independence on noise outputs of code-supported inputs follow from [F5] with $E_a=K_k$. In particular, the formula applies to every finite-dimensional code and channel satisfying these hypotheses; the article describes its use more generally and cites Refs. [30,34–36].
