---
id: cor-cohen-macaulayness-localises
title: Cohen--Macaulayness localizes
kind: corollary
status: draft
origin: pipeline
deps: [def-maximal-and-global-cohen-macaulay-modules, lem-localisation-of-cohen-macaulay-module-depth-dimension-equality]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
---
## Statement

If $M$ is a finite Cohen--Macaulay module over a Noetherian local ring $R$,
then $M_\mathfrak p$ is Cohen--Macaulay over $R_\mathfrak p$ for every
$\mathfrak p\in\operatorname{Supp}_R(M)$.

## Facts & Assumptions

**Given:** localization at a support prime is nonzero.

## Proof

**Proof technique:** direct.

1.1 The localization lemma gives equality of depth and support dimension for $M_\mathfrak p$. [given]

2.1 That equality is exactly the local definition of Cohen--Macaulayness. [step 1.1, algebra] ∎
