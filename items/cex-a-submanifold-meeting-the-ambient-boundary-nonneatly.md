---
id: cex-a-submanifold-meeting-the-ambient-boundary-nonneatly
kind: counterexample
title: "A submanifold meeting the ambient boundary nonneatly"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-embedded-smooth-submanifold-with-boundary, def-neat-submanifold-of-a-manifold-with-boundary]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement refuted

In $M=[0,\infty)\times\mathbb R$, the embedded interval $S=\{0\}\times[-1,1]$ is not neat.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Counterexample

**Proof technique:** direct.

1.1 It is an embedded submanifold with boundary $\partial S=\{(0,-1),(0,1)\}$. [given]

2.1 But $S\cap\partial M=S$, not $\partial S$, so the defining equality for neatness fails. [step 1.1] ∎
