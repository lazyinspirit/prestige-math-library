---
id: cor-elementary-restriction-detects-generalized-characters
kind: corollary
title: Elementary restriction detects generalized characters
status: draft
origin: pipeline
deps: [thm-brauer-induction, prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings, def-virtual-character-and-character-ring-of-a-finite-group]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Proposition 4.6.8
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

The map $R(G)\to\prod_{H\in\mathcal E}R(H)$ given by restriction to all elementary subgroups is injective.

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-brauer-induction]].

## Proof

**Given:** $\chi\in R(G)$ restricts to $0$ on every elementary subgroup.

1.1 Brauer induction writes $1_G=\sum_i n_i\operatorname{Ind}_{H_i}^G\lambda_i$ with $H_i$ elementary and $\lambda_i$ linear. [F1, given]

2.1 The projection formula yields $\chi=\sum_i n_i\operatorname{Ind}_{H_i}^G(\lambda_i\cdot\operatorname{Res}_{H_i}^G\chi)=0$, as every restriction is zero. $\square$ [step 1.1]
