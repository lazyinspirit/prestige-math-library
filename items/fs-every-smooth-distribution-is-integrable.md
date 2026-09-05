---
id: fs-every-smooth-distribution-is-integrable
kind: false-statement
title: "Every smooth distribution is integrable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-distribution-on-a-manifold,
       def-integrable-distribution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Every smooth distribution is integrable.

## Facts & Assumptions

**Given:** On $\mathbb R^3$, let
$$X_1 := \partial_x + y\partial_z,\qquad X_2 := \partial_y,$$
and let $\mathcal D := \operatorname{span}(X_1,X_2)$.

[A1] This is the standard contact plane field.

## Refutation

**Proof technique:** direct.

1.1 The fields $X_1$ and $X_2$ are smooth and pointwise independent, so [given]
$\mathcal D$ is a smooth rank-$2$ distribution. [given]

1.2 Their bracket is [given]
$$[X_1,X_2] = -\partial_z,$$
which does not lie in the span of $X_1$ and $X_2$ at any point. Hence the
distribution is not involutive. [given, algebra]

1.3 A rank-$2$ integral manifold would force brackets of tangent vector fields [given]
to remain tangent, so such manifolds cannot realize this distribution. Thus the
distribution is smooth but not integrable. [given]

2.1 Therefore the universal statement is false. [given] ∎ [given]
