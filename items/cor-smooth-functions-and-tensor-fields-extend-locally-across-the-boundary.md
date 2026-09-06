---
id: cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary
kind: corollary
title: "Smooth functions and tensor fields extend locally across the boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-double-has-a-well-defined-smooth-structure, def-smooth-tensor-field, def-smooth-differential-k-form, def-smooth-function-on-a-relatively-open-subset-of-a-half-space]
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

Every smooth function or tensor field on a manifold with boundary extends smoothly across each boundary point to some neighbourhood in its double; the extension is not canonical.

## Facts & Assumptions

**Given:** A smooth manifold $M$ with boundary, a smooth function or smooth tensor field $T$ on $M$, and a boundary point $p\in\partial M$.

[L1] A seam point of the smooth double has a chart identifying the two labelled halves with the two closed Euclidean half-spaces ([[thm-the-double-has-a-well-defined-smooth-structure]]).

[L2] A smooth map on a relatively open half-space set has a smooth Euclidean extension near each point ([[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]]).

[L3] A smooth tensor field is a smooth section of its tensor bundle ([[def-smooth-tensor-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a seam chart at $p$ in which the labelled copy of $M$ is a half-space. A function extends there by [L2]. For a tensor field, [L3] expresses it in the smooth coordinate frame with finitely many smooth component functions, each of which extends by [L2]. [given, L1, L2, L3]

2.1 Reassemble the extended components in the same coordinate frame and restrict to a smaller neighbourhood of $p$ in the double. The resulting tensor is smooth and restricts to $T$ on $M$. Since [L2] supplies no unique Euclidean extension, this construction is not canonical. [L2, step 1.1] ∎
