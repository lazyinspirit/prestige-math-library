---
id: prop-pointwise-orientation-sign-of-a-local-diffeomorphism
kind: proposition
title: "Pointwise orientation sign of a local diffeomorphism"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-oriented-smooth-manifold-and-oriented-chart, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]
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

A local diffeomorphism between oriented manifolds has at each source point a well-defined sign according as its determinant map preserves or reverses the selected rays. In positive dimension this is the Jacobian sign when computed in oriented source and target charts, and it is constant on a nonempty connected source.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 The differential is an isomorphism, hence maps a source determinant ray to one of the two target rays. In oriented source and target coordinates the representing scalar is the Jacobian determinant. [given]

2.1 It cannot cross zero, so the sign is locally constant. Connectedness makes it constant; the determinant-line description also covers dimension zero. [step 1.1] ∎
