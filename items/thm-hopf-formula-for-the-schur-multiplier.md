---
id: thm-hopf-formula-for-the-schur-multiplier
kind: theorem
title: "Hopf formula for the Schur multiplier"
status: draft
origin: pipeline
deps: [def-schur-multiplier-of-a-group, def-hopf-formula-quotient, lem-five-term-homology-sequence-for-a-free-presentation]
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

For G=F/R with F free, M(G)≅(R∩[F,F])/[F,R].

## Proof

**Given:** Let $G=F/R$ with $F$ free.

1.1 In the low-degree exact sequence, the kernel of $R/[F,R]\to F_{ab}$ is $(R\cap[F,F])/[F,R]$. [given]

2.1 Exactness identifies that kernel with $H_2(G;\mathbb Z)=M(G)$, giving the stated isomorphism. [step 1.1, algebra] ∎
