---
id: prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations
kind: proposition
title: "Nonempty connected orientable manifolds have exactly two orientations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientable-manifold, thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension]
justified_by: []
aliases: []
proof_strategy: direct
verification:
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

A nonempty connected orientable manifold has exactly two orientations; on a disconnected manifold the choices are componentwise.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 Fix one orientation. At each point any other is either it or its opposite, and this sign is locally constant. [given]

2.1 Connectedness makes the sign constant, producing exactly the fixed orientation and its opposite. Nonemptiness excludes the degenerate empty-family wording. [step 1.1] ∎
