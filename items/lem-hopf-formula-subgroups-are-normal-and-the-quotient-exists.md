---
id: lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists
kind: lemma
title: "The Hopf-formula quotient exists"
status: draft
origin: pipeline
deps: [def-free-presentation-kernel-data, def-commutator-and-commutator-subgroup, def-normal-subgroup]
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

[F,R] is normal and contained in R∩[F,F].

## Proof

**Given:** Let $1\to R\to F\to G\to1$ be a free presentation.

1.1 Normality of $R$ gives $[F,R]\le R$, and the commutator identities make $[F,R]$ normal in $F$. [given]

2.1 Every generator $[f,r]$ is in $[F,F]$, so $[F,R]\le R\cap[F,F]$ and the quotient exists. [step 1.1, algebra] ∎
