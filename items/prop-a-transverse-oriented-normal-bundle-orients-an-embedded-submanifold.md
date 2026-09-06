---
id: prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold
kind: proposition
title: "An oriented transverse normal bundle orients an embedded submanifold"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-normal-and-conormal-bundles-of-an-embedded-submanifold, prop-normal-and-conormal-bundles-are-smooth-vector-bundles]
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

For an embedded submanifold, any two of the orientations of the ambient tangent bundle, tangent bundle, and transverse normal bundle determine the third.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 The exact sequence $0\to TS\to TM|_S\to\nu S\to0$ gives an ordered determinant isomorphism $\det(TM|_S)\cong\det(TS)\otimes\det(\nu S)$. [given]

2.1 Tensoring or solving for either one-dimensional ray proves each of the three determinations. [step 1.1] ∎
