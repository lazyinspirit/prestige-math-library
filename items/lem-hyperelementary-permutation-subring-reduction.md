---
id: lem-hyperelementary-permutation-subring-reduction
kind: lemma
title: Hyperelementary permutation subring reduction
status: draft
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed, def-induction-ideal-of-a-family-of-subgroups, thm-mackey-double-coset-formula-for-restricting-an-induced-character, thm-transitivity-of-induction-for-finite-groups]
proof_strategy: direct
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

## Proof

**Given:** $H,K\in\mathcal H'$ and $\mathcal E$ is the elementary family.

1.1 Mackey's formula expresses $\operatorname{Res}_H^G\operatorname{Ind}_K^G1_K$ as a sum of permutation characters induced from $H\cap xKx^{-1}$. Those intersections are hyperelementary by subgroup closure, and induction back to $G$ shows that products of the displayed generators stay in $P(\mathcal H')$. [F1, given]

2.1 If $1_H\in I_{\mathcal E}(H)$, transitivity puts $\operatorname{Ind}_H^G1_H$ in $I_{\mathcal E}(G)$. Apply this to every summand of a relation for $1_G$ in $P(\mathcal H')$. $\square$ [step 1.1]
