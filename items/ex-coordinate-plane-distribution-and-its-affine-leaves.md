---
id: ex-coordinate-plane-distribution-and-its-affine-leaves
kind: example
title: "The coordinate-plane distribution and its affine leaves"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-distribution-on-a-manifold,
       def-integral-manifold-of-a-distribution,
       thm-frobenius-local-coordinate-theorem]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
---

## Example

On $\mathbb R^n$, fix $1 \leq k \leq n$ and let

$$ \mathcal D = \operatorname{span}(\partial_{x^1},\dots,\partial_{x^k}). $$

Its maximal connected integral manifolds, or leaves, are the affine coordinate
$k$-planes with $x^{k+1},\dots,x^n$ constant. Connected open subsets of those
planes are also integral manifolds.

## Facts & Assumptions

**Given:** The standard coordinates on $\mathbb R^n$ and the span of the first
$k$ coordinate fields.

[A1] The remaining coordinates are constant along the displayed planes.

## Verification

**Proof technique:** direct.

1.1 The fields $\partial_{x^1},\dots,\partial_{x^k}$ are smooth and pointwise [given]
independent, so they define a smooth rank-$k$ distribution. [given]

1.2 For fixed constants $c_{k+1},\dots,c_n$, the affine plane [given]
$\{x^{k+1}=c_{k+1},\dots,x^n=c_n\}$ has tangent space spanned by those same
coordinate fields at every point. Hence it is an integral manifold. [given]

1.3 Every connected integral manifold has constant transverse coordinates, so it [given]
lies in one of the affine planes from step 1.2. Those full planes are connected
and cannot be enlarged while retaining that property. Therefore they are
exactly the maximal leaves. [given] ∎
