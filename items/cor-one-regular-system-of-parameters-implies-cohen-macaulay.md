---
id: cor-one-regular-system-of-parameters-implies-cohen-macaulay
title: One regular system of parameters implies Cohen--Macaulayness
kind: corollary
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, thm-dimension-and-parameters-for-modules, thm-depth-bounded-by-support-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
---
## Statement

Let $0\ne M$ be finite over a Noetherian local ring. If one system of
parameters for $M$ is $M$-regular, then $M$ is Cohen--Macaulay. Here a system of parameters for $M$ means a tuple $x_1,\ldots,x_d$ in the maximal ideal, where $d=\dim\operatorname{Supp}_R(M)$, such that $M/(x_1,\ldots,x_d)M$ has finite length.

## Facts & Assumptions

**Given:** A nonzero finite module $M$ over a Noetherian local ring and an $M$-regular parameter tuple of length $d=\dim\operatorname{Supp}_R(M)$, using the terminology introduced in `thm-dimension-and-parameters-for-modules`.

## Proof

**Proof technique:** direct.

1.1 The regular parameter system gives $\operatorname{depth}_R(M)\ge d$. The general support-dimension bound gives $\operatorname{depth}_R(M)\le d$. [given]

2.1 Hence depth and dimension both equal $d$, which is Cohen--Macaulayness. [step 1.1, algebra] ∎
