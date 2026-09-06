---
id: prop-boundary-orientation-is-independent-of-the-outward-vector-field
kind: proposition
title: "Boundary orientation is independent of the outward vector field"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-boundary-orientation, def-inward-outward-and-boundary-tangent-vectors, prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]
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

The outward-normal-first boundary orientation is independent of the chosen outward vector field. On the interval $[a,b]$ with its standard orientation, it gives $\partial[a,b]=\{b\}-\{a\}$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 Two outward vectors differ by a positive normal multiple plus a boundary-tangent vector. [given]

2.1 Alternation kills the tangent contribution in the determinant, and positive scaling preserves its ray. At $b$ the outward vector is positive and at $a$ it is negative, giving the displayed signs. [step 1.1] ∎
