---
id: prop-schur-multiplier-of-a-free-group-is-trivial
kind: proposition
title: "Multiplier of a free group"
status: draft
origin: pipeline
deps: [thm-hopf-formula-for-the-schur-multiplier, def-free-presentation-kernel-data]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

M(F)=0 for F free.

## Proof

**Given:** Write the free group as $F/1$.

1.1 Hopf’s numerator is $1\cap[F,F]=1$ and its denominator is $[F,1]=1$. [given]

2.1 Thus the Hopf quotient, and hence $M(F)$, is zero. [step 1.1, algebra] ∎
