---
id: prop-schur-multiplier-of-a-cyclic-group-is-trivial
kind: proposition
title: "Multiplier of a cyclic group"
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

M(C)=0 for every cyclic group C.

## Proof

**Given:** For finite cyclic $C_n$, take $F=\langle x\rangle$ and $R=\langle x^n\rangle$; the infinite cyclic group is free.

1.1 The group $F$ is abelian, hence $R\cap[F,F]=1$. [given]

2.1 Hopf’s formula gives $M(C_n)=0$, and the free case gives the infinite cyclic result. [step 1.1, algebra] ∎
