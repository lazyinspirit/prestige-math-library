---
id: cor-depth-depends-only-on-radical
title: Depth depends only on the radical of the ideal
kind: corollary
status: published
origin: pipeline
deps: [lem-depth-radical-invariance-via-ext]
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

Let $R$ be Noetherian, $M$ finite, and $I,J$ ideals contained in the Jacobson
radical. If $\sqrt I=\sqrt J$, then
$$\operatorname{depth}_I(M)=\operatorname{depth}_J(M),$$
including the value $\infty$.

## Facts & Assumptions

**Given:** The data in the statement.

## Proof

**Proof technique:** direct.

1.1 Radical invariance gives equality of the two first nonzero Ext degrees. [given]

2.1 The Ext characterization of depth identifies those degrees with the two depths, with the same infinity convention. [step 1.1] ∎
