---
id: thm-qec-distinguishability-choi-rank
kind: theorem
domain: mathematics
title: Kraus rank equals Choi rank
status: draft
origin: session
deps:
  - def-qec-distinguishability-kraus-rank
  - lem-qec-prereq-canonical-choi-weights
formulation_deps:
  - def-qec-distinguishability-kraus-rank
argument_deps:
  - def-qec-distinguishability-kraus-rank
  - lem-qec-prereq-canonical-choi-weights
dependency_roles:
  def-qec-distinguishability-kraus-rank: mathematical-premise
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, second paragraph
      statement: The minimum number of Kraus operators representing a channel equals
        the rank of its Choi matrix; the article cites Ref. [43].
      hypotheses: The finite-dimensional channel setting used in the article.
      reading_limits: Attribution from the supplied extracted article text; this
        reference is not used as proof of the result.
dependency_level: 3
---

## Statement

Let $H$ and $K$ be finite-dimensional complex inner-product spaces, with $d=\dim H>0$, and let $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel, meaning a completely positive trace-preserving linear map. Fix an ordered orthonormal basis $(e_i)_{i=1}^d$ of $H$. A Kraus representation is a finite family of linear maps $A_a:H\to K$ satisfying $\mathcal N(X)=\sum_a A_aXA_a^\dagger$ for every $X\in\mathcal L(H)$. Its Kraus rank is the minimum number of operators in such a representation. Define the input-first, unnormalized Choi matrix by $J=\sum_{i,j=1}^d |e_i\rangle\langle e_j|\otimes\mathcal N(|e_i\rangle\langle e_j|)$. Then the Kraus rank of $\mathcal N$ equals $\operatorname{rank}J$.

## Statement references

[[def-qec-distinguishability-kraus-rank]]

## Facts & Assumptions

**Given:** The spaces, channel, basis and Choi matrix in the Statement.

**Goal:** Show that the minimum size of a Kraus representation equals $\operatorname{rank}J$.

[F1] For these finite-dimensional spaces and this Choi convention, the canonical Choi decomposition gives a Kraus representation with $r=\operatorname{rank}J$ operators, and every Kraus representation has at least $r$ operators. [[lem-qec-prereq-canonical-choi-weights]]

[F2] The Kraus rank is the minimum size of a finite Kraus representation, and the displayed formula is the input-first, unnormalized Choi convention. [[def-qec-distinguishability-kraus-rank]]

## Proof

**Given:** The spaces, channel, basis and Choi matrix in the Statement.

**Goal:** Show that the minimum size of a Kraus representation equals $\operatorname{rank}J$.

1.1 The spaces, channel and basis satisfy the hypotheses of [F1], and the Choi matrix in [F1] is the matrix $J$ of the Statement by [F2]. Thus a Kraus representation with $r=\operatorname{rank}J$ operators exists, while every such representation has at least $r$ operators. [given, F1, F2]

2.1 By the definition in [F2], the minimum representation size is therefore both at most and at least $r$. It equals $r=\operatorname{rank}J$, as claimed. [F2, step 1.1] ∎
