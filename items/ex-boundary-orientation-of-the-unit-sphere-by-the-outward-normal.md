---
id: ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal
kind: example
title: "Boundary orientation of the unit sphere by the outward normal"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-orientation-on-a-hypersurface-from-a-coorientation, def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field, ex-the-closed-ball-and-its-sphere-boundary]
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

## Example

For $n\ge1$, the boundary orientation of $S^{n-1}=\partial B^n$ is the standard hypersurface orientation for which the radial outward normal is first.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 The outward normal of the ball at $u$ is the radial vector $u$. [given]

2.1 The boundary rule declares a tangent determinant positive precisely when $(u,v_1,\ldots,v_{n-1})$ is positive in $\mathbb R^n$, which is the standard sphere convention. [step 1.1] ∎
