---
id: cor-zero-dimensional-local-modules-are-cohen-macaulay
title: Zero-dimensional finite local modules are Cohen--Macaulay
kind: corollary
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, cor-depth-of-a-finite-local-module-at-most-its-dimension]
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
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Every nonzero finite module $M$ of dimension $0$ over a Noetherian local ring
is Cohen--Macaulay.

## Facts & Assumptions

**Given:** $M\ne0$ and $\dim_R(M)=0$.

## Proof

**Proof technique:** direct.

1.1 Depth is nonnegative, while `cor-depth-of-a-finite-local-module-at-most-its-dimension` gives $\operatorname{depth}_R(M)\le0$. [given]

2.1 Thus $\operatorname{depth}_R(M)=0=\dim_R(M)$, which is precisely the definition of Cohen--Macaulayness. [step 1.1, algebra] ∎
