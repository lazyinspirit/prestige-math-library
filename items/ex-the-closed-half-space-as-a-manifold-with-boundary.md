---
id: ex-the-closed-half-space-as-a-manifold-with-boundary
kind: example
title: "The closed half-space as a manifold with boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-euclidean-upper-half-space-and-its-boundary, def-topological-manifold-with-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, thm-smooth-invariance-of-manifold-boundary]
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

For $n\ge1$, the identity chart on $\mathbb H^n$ gives $\operatorname{Int}\mathbb H^n=\{x^n>0\}$ and $\partial\mathbb H^n=\{x^n=0\}$; at the face, inward vectors have positive last component. For $n=0$, $\mathbb H^0$ is a point with empty boundary.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 For $n\ge1$, the identity is a boundary chart on every relatively open set. For $n=0$, the unique chart identifies the point with $\mathbb R^0$. [given]

2.1 For $n\ge1$, the stated interior, boundary, full tangent space $\mathbb R^n$, and sign classification are therefore exactly the coordinate definitions. For $n=0$, the point is interior and the boundary is empty. [step 1.1] ∎
