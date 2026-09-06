---
id: cor-elementary-local-integrality-criterion
kind: corollary
title: Elementary local generalized-character criterion
status: draft
origin: pipeline
deps: [thm-brauer-induction, prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings, def-virtual-character-and-character-ring-of-a-finite-group]
proof_strategy: direct
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Corollary 14.4.1
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: ai-altered
  proof: literature-derived
---

## Statement

Let $F\subseteq\mathbb C$ be a characteristic-zero splitting field for $G$. A class function $f:G\to F$, viewed as complex-valued, is a generalized character if and only if $f|_H$ is a generalized character for every elementary subgroup $H$ of $G$.

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-brauer-induction]].

## Proof

**Given:** $f|_H\in R(H)$ for every elementary $H$.

1.1 The forward implication is restriction stability. For the converse, choose the Brauer relation $1_G=\sum_i n_i\operatorname{Ind}_{H_i}^G\lambda_i$. [F1, given]

2.1 Pointwise multiplication and the projection formula give $f=\sum_i n_i\operatorname{Ind}_{H_i}^G(\lambda_i f|_{H_i})$. Each inner product is in $R(H_i)$, so the right side is in $R(G)$. $\square$ [step 1.1]
