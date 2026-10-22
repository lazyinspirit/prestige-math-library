---
id: cor-every-smooth-manifold-admits-a-riemannian-metric
kind: corollary
title: "Assuming countable choice, every smooth manifold admits a Riemannian metric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Assume $\mathrm{AC}_\omega$. Every smooth manifold admits a Riemannian metric.

## Facts & Assumptions

**Given:** The axiom $\mathrm{AC}_\omega$ and a smooth manifold $M$.

[L1] The tangent bundle $TM\to M$ is a smooth vector bundle ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]).

[L2] Every smooth vector bundle admits a smooth bundle metric ([[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the tangent bundle of $M$ is a smooth vector bundle. [L1, given]

2.1 Apply [L2] to $TM$. A smooth bundle metric on $TM$ is exactly a Riemannian metric on $M$. [L2, step 1.1] ∎
