---
id: lem-free-presentation-construction-is-a-central-extension
kind: lemma
title: "Free-presentation construction is central"
status: draft
origin: pipeline
deps: [def-universal-central-extension-from-a-free-presentation, def-central-and-stem-extensions]
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

For perfect G, [F,F]/[F,R]→G is central.

## Proof

**Given:** Let $G=F/R$ be perfect.

1.1 Perfectness gives $F=[F,F]R$, so $[F,F]/[F,R]\to G$ is onto and has kernel $(R\cap[F,F])/[F,R]$. [given]

2.1 The latter kernel commutes with $[F,F]/[F,R]$, since every $[r,f]$ is killed; therefore the extension is central. [step 1.1, algebra] ∎
