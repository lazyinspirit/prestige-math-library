---
id: ex-the-tangent-and-cotangent-bundles-as-vector-bundles
kind: example
title: "Assuming countable choice, the tangent and cotangent bundles are smooth vector bundles"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]
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
## Example

Assume $\mathrm{AC}_\omega$. For a smooth manifold $M$, the tangent bundle
$TM\to M$ and the cotangent bundle $T^*M\to M$ are smooth vector bundles of
rank $\dim M$.

## Facts & Assumptions

**Given:** The axiom $\mathrm{AC}_\omega$ and a smooth manifold $M$.

[L1] The tangent bundle has its canonical smooth $2n$-manifold structure ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]).

[L2] The cotangent bundle has its canonical smooth $2n$-manifold structure ([[thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]).

## Verification

**Proof technique:** direct.

1.1 The earlier tangent-bundle construction gives local coordinates of the form $(p,v)\in U\times\mathbb R^n$, and the fibre over $p$ is the vector space $T_pM$. Thus $TM\to M$ is a smooth rank-$n$ vector bundle. [L1, given]

2.1 The cotangent-bundle construction gives the same kind of local description with fibres $T_p^*M$, so $T^*M\to M$ is likewise a smooth rank-$n$ vector bundle. [L2, step 1.1] ∎
