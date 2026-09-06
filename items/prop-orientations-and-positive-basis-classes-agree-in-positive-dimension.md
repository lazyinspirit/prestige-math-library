---
id: prop-orientations-and-positive-basis-classes-agree-in-positive-dimension
kind: proposition
title: "Orientations and positive basis classes agree in positive dimension"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
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

**Given:** A finite-dimensional real vector space $V$ of dimension $n$.

[L1] An orientation of $V$ is a positive ray in $\det V=\Lambda^nV$, including either ray of $\mathbb R=\Lambda^0V$ when $n=0$ ([[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]]).

## Proof

**Proof technique:** direct.

1.1 The wedge of an ordered basis is nonzero in $\det V$, and changing basis multiplies it by the determinant of the change-of-basis matrix. [given, L1, algebra]

2.1 Thus two bases determine the same ray exactly when their change determinant is positive. When $n=0$, the unique empty wedge is $+1$, so it represents only the positive one of the two rays in [L1]. [L1, step 1.1] ∎
