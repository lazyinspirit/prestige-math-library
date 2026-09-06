---
id: thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension
kind: theorem
title: "Positive oriented atlases characterize orientations in positive dimension"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-oriented-smooth-manifold-and-oriented-chart, prop-orientations-and-positive-basis-classes-agree-in-positive-dimension, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]
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

For $n>0$, a continuous orientation of tangent determinant lines is equivalent to an atlas whose transition Jacobians are positive. In dimension zero, arbitrary pointwise signs remain the governing formulation.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 A chart frame is either in a selected ray or its negative; continuity makes that sign locally constant. Choose the positive charts. [given]

2.1 On overlaps both coordinate frames are positive precisely when their change determinant is positive. Conversely positive transitions make the chart-frame rays agree and define a continuous orientation. [step 1.1] ∎
