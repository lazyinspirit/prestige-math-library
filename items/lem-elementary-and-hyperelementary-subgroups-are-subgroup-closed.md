---
id: lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed
kind: lemma
title: Subgroups of elementary and hyperelementary groups
status: draft
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, lem-subgroups-of-finite-p-groups-are-p-groups, thm-sylow-first-theorem]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Lemma 14.1.2
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Every subgroup of a finite $p$-elementary group is $p$-elementary, and every subgroup of a finite $p$-hyperelementary group is $p$-hyperelementary.

## Facts & Assumptions

[F1] The cited prerequisite is [[def-p-elementary-and-p-hyperelementary-finite-groups]].

## Proof

**Given:** $G=C\rtimes P$ is $p$-hyperelementary and $H\leq G$; in the elementary case the action is trivial.

1.1 Put $C_H=H\cap C$. It is cyclic, normal in $H$, and $H/C_H$ embeds in $G/C\cong P$; hence it is a $p$-group. A Sylow $p$-subgroup $P_H$ of $H$ maps isomorphically onto $H/C_H$, because its image has the full $p$-power order and $C_H$ has order prime to $p$. [F1, given]

2.1 Thus $H=C_H\rtimes P_H$. If $G=C\times P$, its Sylow $p$-subgroup is unique, so $P_H=H\cap P$ and it commutes with $C_H$; consequently $H=C_H\times P_H$. $\square$ [step 1.1]
