---
id: thm-smooth-invariance-of-manifold-boundary
kind: theorem
title: "Smooth invariance of the manifold boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions, prop-chain-rule-for-smooth-half-space-maps, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
landmark: true
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

A smooth diffeomorphism between relatively open half-space sets carries face points to face points and relative-interior points to relative-interior points; consequently $\partial M$ and $\operatorname{Int}M$ are intrinsic.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 Let $f$ and its inverse have Euclidean extensions near a face point and its image. Their derivatives are inverse by the half-space chain rule. [given]

2.1 If a face point mapped to the interior, the last coordinate of an extension of $f^{-1}$ would be nonnegative and have an interior zero, hence have zero differential there, contradicting invertibility. Apply the same argument to $f^{-1}$ for the converse. [step 1.1] ∎
