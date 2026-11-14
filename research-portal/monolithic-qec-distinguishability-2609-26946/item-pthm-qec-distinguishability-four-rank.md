---
title: Onset of the third four-level Kraus operator
status: draft
research_item: pthm-qec-distinguishability-four-rank
dependency_level: 5
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, Kraus-rank paragraph; PDF p. 7, onset paragraph and Fig. 5
      statement: The four-level channel has two Kraus directions at zero splitting and
        a third direction when the splitting is nonzero, associated with
        distinguishability of the two decay paths.
      hypotheses: The idealized four-level decay model, with positive decay rate and
        positive elapsed time.
      reading_limits: Attribution from the supplied extracted article text; the
        article is not used as proof of the rank claim. No experimental
        observation or figure measurement is asserted.
---

PDF p. 3: ` Kraus-rank paragraph `; PDF p. 7: ` Onset paragraph and Fig. 5 `

## Prerequisites

- [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)
- [pthm-qec-distinguishability-four-kraus](item-pthm-qec-distinguishability-four-kraus)
- [pthm-qec-distinguishability-four-kraus-degenerate](item-pthm-qec-distinguishability-four-kraus-degenerate)
- [def-qec-distinguishability-kraus-rank](item-def-qec-distinguishability-kraus-rank)
- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [thm-qec-distinguishability-choi-rank](item-thm-qec-distinguishability-choi-rank)


## Statement

Assume the four-level spontaneous-decay model, with decay rate $\gamma>0$, elapsed time $t>0$, and real splitting $\Delta$. The channel acts on the full four-dimensional state space with ordered orthonormal basis $|0\rangle,|1\rangle,|2\rangle,|3\rangle$. Its Kraus rank, the minimum number of operators in a Kraus representation of the channel, is two when $\Delta=0$ and three when $\Delta\ne0$. The additional direction is the phase-adjusted difference of the two decay-path operators $|2\rangle\langle0|$ and $|3\rangle\langle1|$; its nonzero weight represents the distinction between the paths in this model.

## Statement references

[post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[def-qec-distinguishability-kraus-rank](item-def-qec-distinguishability-kraus-rank)

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

## Facts & Assumptions

**Given:** The model and parameters in the Statement.

**Goal:** Determine the minimum Kraus representation size and identify the additional direction.

[F1] The model channel has a Kraus representation $K_1,K_2,K_3$ in which $K_1$ is diagonal and nonzero, $K_2=a(uF_0+F_1)$ and $K_3=b(-uF_0+F_1)$, where $F_0=|2\rangle\langle0|$, $F_1=|3\rangle\langle1|$, $|u|=1$, $a^2=e^{-\gamma t}f_+(t)/2$, and $b^2=-e^{-\gamma t}f_-(t)/2$. Here $f_+(t)=\gamma|e^{(\gamma+i\Delta)t}-1|/|\gamma+i\Delta|+(e^{\gamma t}-1)$. [pthm-qec-distinguishability-four-kraus](item-pthm-qec-distinguishability-four-kraus)

[F2] For $\gamma>0$ and $t>0$, $f_-(t)\leq0$, with equality exactly when $\Delta=0$. [pthm-qec-distinguishability-four-kraus-degenerate](item-pthm-qec-distinguishability-four-kraus-degenerate)

[F3] The input-first unnormalized Choi matrix of a channel is $J=\sum_{i,j}|i\rangle\langle j|\otimes\mathcal N(|i\rangle\langle j|)$, and the minimum Kraus representation size equals $\operatorname{rank}J$. [def-qec-distinguishability-kraus-rank](item-def-qec-distinguishability-kraus-rank) [thm-qec-distinguishability-choi-rank](item-thm-qec-distinguishability-choi-rank)

[F4] The basis outer products obey $\operatorname{Tr}[(|k\rangle\langle j|)^\dagger|l\rangle\langle m|]=\delta_{kl}\delta_{jm}$. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

## Proof

1.1 Since $\gamma t>0$, $e^{\gamma t}-1>0$, so [F1] gives $f_+(t)>0$ and $a>0$. By [F2], $b=0$ exactly at $\Delta=0$, and $b>0$ otherwise. The path operators $F_0,F_1$ are nonzero and orthogonal for the Hilbert–Schmidt inner product $\langle A,B\rangle=\operatorname{Tr}(A^\dagger B)$. Thus $K_2$ is nonzero, and $K_3$ is nonzero exactly when $\Delta\ne0$. [given, F1, F2, F4, algebra]

2.1 By [F4], the diagonal $K_1$ is orthogonal to both path operators, while $\langle uF_0+F_1,-uF_0+F_1\rangle=-|u|^2+1=0$. Therefore the nonzero operators among $K_1,K_2,K_3$ are mutually orthogonal and hence linearly independent. Expanding the Choi formula in [F3] using the representation in [F1] gives $J=\sum_{k=1}^3|K_k\rangle\!\rangle\langle\!\langle K_k|$, where $|K\rangle\!\rangle=\sum_i|i\rangle\otimes K|i\rangle$. These vectorized operators are mutually orthogonal whenever nonzero, since their inner products are $\operatorname{Tr}(K_j^\dagger K_k)$. Consequently the rank of $J$ is the number of nonzero operators: two at zero splitting and three otherwise. [F1, F3, F4, step 1.1, algebra]

3.1 By [F3], this Choi rank is the minimum number of Kraus operators, proving both rank values. The third operator is proportional to $-uF_0+F_1$, the phase-adjusted difference of the decay paths; its squared Hilbert–Schmidt norm is $2b^2$, positive precisely for nonzero splitting. This identifies the additional distinguishability direction as a consequence of the model. [F1, F3, F4, step 1.1, step 2.1, algebra] ∎
