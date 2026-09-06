---
id: def-induction-ideal-of-a-family-of-subgroups
kind: definition
title: Induction ideal of a subgroup family
status: published
origin: pipeline
deps: [def-virtual-character-and-character-ring-of-a-finite-group, def-induced-character-of-a-complex-representation]
verification:
  audited: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Definition 14.2.5
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

For a finite group $G$ and a family $\mathcal F$ of subgroups of $G$, define
$$I_{\mathcal F}(G)=\sum_{H\in\mathcal F}\operatorname{Ind}_H^G R(H)\subseteq R(G).$$

This is initially an additive subgroup of the complex virtual-character ring; the next lemma proves it is an ideal.
