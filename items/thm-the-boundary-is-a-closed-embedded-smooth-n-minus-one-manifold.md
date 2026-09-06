---
id: thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
kind: theorem
title: "The boundary of a positive-dimensional manifold is a closed embedded smooth (n-1)-manifold"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, thm-smooth-invariance-of-manifold-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]
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

## Statement

If $M$ has dimension $n\ge1$, $\partial M$ is a closed embedded smooth $(n-1)$-manifold. For $n=0$, $\partial M=\varnothing$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 In each boundary chart restrict to the face $x^n=0$; its transitions are smooth by extending the ambient transitions and restricting. [given]

2.1 The face is a closed coordinate half-slice, so these charts give an embedded submanifold and its complement is the open interior. The stipulated $n=0$ convention gives the final case without a negative dimension. [step 1.1] ∎
