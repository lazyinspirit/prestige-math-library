---
id: lem-induction-ideal-of-a-subgroup-family-is-an-ideal
kind: lemma
title: The induction subgroup is an ideal
status: draft
origin: pipeline
deps: [def-induction-ideal-of-a-family-of-subgroups, prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Lemma 14.2.6
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

For every family $\mathcal F$ of subgroups of a finite group $G$, $I_{\mathcal F}(G)$ is an ideal of $R(G)$.

## Facts & Assumptions

[F1] The cited prerequisite is [[prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings]].

## Proof

**Given:** $H\in\mathcal F$, $\theta\in R(H)$, and $\chi\in R(G)$.

1.1 The projection formula gives $\operatorname{Ind}_H^G\theta\cdot\chi=\operatorname{Ind}_H^G(\theta\cdot\operatorname{Res}_H^G\chi)$. [F1, given]

2.1 Its right side is one of the defining summands of $I_{\mathcal F}(G)$; additivity handles finite sums and additive inverses, so multiplication by every $\chi$ preserves the subgroup. $\square$ [step 1.1]
