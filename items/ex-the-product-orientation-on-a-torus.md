---
id: ex-the-product-orientation-on-a-torus
kind: example
title: "The product orientation on a torus"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-product-orientation, def-oriented-smooth-manifold-and-oriented-chart]
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

The product orientation on $S^1\times S^1$ is the ray of the ordered pair of positive tangent directions.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 The determinant product rule tensors the two circle rays. [given]

2.1 In angular coordinates this is the positive ray of $(\partial_{\theta_1},\partial_{\theta_2})$, the standard torus orientation. [step 1.1] ∎
