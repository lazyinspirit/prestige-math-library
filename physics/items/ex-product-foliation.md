---
id: ex-product-foliation
kind: example
title: "The product foliation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-regular-foliation-atlas,
       thm-regular-foliations-and-integrable-distributions-correspond,
       prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
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

On a product manifold $M \times N$, the connected components of the fibres
$M \times \{q\}$ for $q \in N$ form a regular foliation of leaf dimension
$\dim M$.

## Facts & Assumptions

**Given:** The product smooth structure on $M \times N$.

[A1] Product charts have the form $(u,v)$.

## Verification

**Proof technique:** direct.

1.1 In a product chart, the slices $v = \text{constant}$ are exactly the local [given] pieces of the fibres $M \times \{q\}$. Their connected components are therefore the local plaques. [given]

1.2 Transition maps preserve the second coordinate up to a change depending only [given] on the old second coordinate, so these charts satisfy the defining condition of a regular foliation atlas. [given]

2.1 Hence the connected components of the fibres of the projection [given] $M \times N \to N$ form the product foliation. [given] ∎
