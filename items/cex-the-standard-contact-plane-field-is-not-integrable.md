---
id: cex-the-standard-contact-plane-field-is-not-integrable
kind: counterexample
title: "The standard contact plane field is not integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-distribution-on-a-manifold,
       def-integrable-distribution,
       def-involutive-distribution,
       prop-involutivity-can-be-checked-on-a-local-frame,
       prop-integrable-distributions-are-involutive]
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

## Statement refuted

The standard contact rank-$2$ distribution on $\mathbb R^3$ is integrable.

## Facts & Assumptions

**Given:** Let
$$X_1 := \partial_x + y\partial_z,\qquad X_2 := \partial_y,$$
and let $\mathcal D := \operatorname{span}(X_1,X_2)$.

[A1] This is the kernel of the $1$-form $\alpha = dz - y\,dx$.

[L1] Every integrable smooth distribution is involutive
([[prop-integrable-distributions-are-involutive]]).

## Counterexample

**Proof technique:** direct.

1.1 The two fields $X_1$ and $X_2$ are smooth and pointwise independent, so [given]
they define a smooth rank-$2$ distribution on $\mathbb R^3$. [given]

1.2 Their bracket is [given]
$$[X_1,X_2] = -\partial_z,$$
which is not a linear combination of $X_1$ and $X_2$. Therefore the
distribution is not involutive, even on this global frame. [given, algebra]

1.3 By [L1], an integrable distribution would have to be involutive. Hence this standard [L1]
contact distribution is a counterexample to the claim that it is integrable.
[L1]

2.1 Therefore the displayed statement is refuted. [given] ∎ [given]
