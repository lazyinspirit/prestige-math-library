---
id: lem-hyperelementary-permutation-subring-reduction
kind: lemma
title: Hyperelementary permutation subring reduction
status: published
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed, def-induction-ideal-of-a-family-of-subgroups, thm-mackey-double-coset-formula-for-restricting-an-induced-character, thm-transitivity-of-induction-for-finite-groups, prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Lemma 14.3.3
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Let $\mathcal H'$ be the $p$-hyperelementary subgroups of $G$, for all primes $p$. The additive span $P(\mathcal H')=\sum_{H\in\mathcal H'}\mathbb Z\operatorname{Ind}_H^G1_H$ is a subring of $R(G)$. Moreover, if $1_G\in P(\mathcal H')$, then proving $1_H\in I_{\mathcal E}(H)$ for each hyperelementary $H$ implies $1_G\in I_{\mathcal E}(G)$.

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-mackey-double-coset-formula-for-restricting-an-induced-character]].

[F2] Induction satisfies the projection formula on character rings ([[prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings]]). Hyperelementary groups are closed under subgroups ([[lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed]]), and induction is transitive along subgroup chains ([[thm-transitivity-of-induction-for-finite-groups]]).

[F3] The induction ideal $I_{\mathcal E}(G)$ is the additive span of characters induced from elementary subgroups ([[def-induction-ideal-of-a-family-of-subgroups]]).

## Proof

**Given:** $H,K\in\mathcal H'$ and $\mathcal E$ is the elementary family.

1.1 By the projection formula, $(\operatorname{Ind}_H^G1_H)(\operatorname{Ind}_K^G1_K)=\operatorname{Ind}_H^G(\operatorname{Res}_H^G\operatorname{Ind}_K^G1_K)$. Mackey's formula expresses the restricted character as a finite sum of $\operatorname{Ind}_{H\cap xKx^{-1}}^H1_{H\cap xKx^{-1}}$. Each intersection is hyperelementary by subgroup closure; transitivity then makes every summand induced back to $G$ equal to $\operatorname{Ind}_{H\cap xKx^{-1}}^G1_{H\cap xKx^{-1}}$. Thus products of the displayed generators stay in $P(\mathcal H')$, and bilinearity makes its additive span a subring. [F1, F2, given]

2.1 If $1_H\in I_{\mathcal E}(H)$, express it by [F3] as an integral sum of characters induced from elementary subgroups of $H$. Inducing this sum to $G$ and using transitivity puts $\operatorname{Ind}_H^G1_H$ in $I_{\mathcal E}(G)$. Apply this to every summand of a relation for $1_G$ in $P(\mathcal H')$. ∎ [F2, F3, step 1.1]
