---
id: cor-complex-differentiability-implies-continuity
kind: corollary
title: "Complex differentiability at a point implies continuity there"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       thm-total-differentiability-gives-a-local-linear-bound-and-continuity,
       def-complex-metric-convergence-and-continuity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Proposition 2.1.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

If $f:U\to\mathbb C$ is complex differentiable at $a\in U$, then $f$ is continuous at $a$.

## Facts & Assumptions

**Given:** An open set $U\subseteq\mathbb C$, a point $a\in U$, and a function $f:U\to\mathbb C$ complex differentiable at $a$.

[L1] Complex differentiability at $a$ is equivalent to real total differentiability there with derivative given by multiplication by a complex number ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L2] If a Euclidean map is totally differentiable at a point, then it is continuous there ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[F1] Under $\mathbb C=\mathbb R^2$, the modulus metric is exactly the Euclidean metric, and continuity on subsets of $\mathbb C$ is metric continuity for this metric ([[def-complex-metric-convergence-and-continuity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $f$ is real totally differentiable at $a$ under the Euclidean identification. [given, L1]

2.1 By [L2], the coordinate map is continuous at $a$; [F1] identifies this with continuity in the complex modulus metric. [step 1.1, L2, F1] ∎
