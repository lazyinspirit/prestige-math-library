---
id: prop-orientations-and-positive-basis-classes-agree-in-positive-dimension
kind: proposition
title: "Orientations and positive basis classes agree in positive dimension"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]
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

For $\dim V=n>0$, determinant-line rays are in bijection with positive-basis equivalence classes. For $n=0$, the unique empty basis sees only the positive ray.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 The wedge of an ordered basis is nonzero in $\det V$, and changing basis multiplies it by its determinant. [given]

2.1 Thus two bases determine the same ray exactly when their change determinant is positive. In dimension zero the empty wedge is $+1$, leaving the negative ray unrepresented. [step 1.1] ∎
