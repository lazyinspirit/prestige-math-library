---
id: lem-affine-product-topology-not-product-topology
kind: lemma
title: The Zariski topology on an affine product is generally not the product topology
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-affine-variety-product-coordinate-ring, def-product-topology]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: MIT 18.725 Algebraic Geometry, Lecture 7, Remarks 10 and 12
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
---

## Statement

For affine varieties the product construction has the expected set-theoretic fibres, but its Zariski topology need not equal the product topology of the two Zariski topologies.

## Proof

**Given:** The affine product $\mathbf A^1_k\times_k\mathbf A^1_k$.

1.1 Its coordinate ring is $k[x]\otimes_k k[y]\cong k[x,y]$, so the diagonal is the algebraic set $V(x-y)$ and is Zariski closed. [given, algebra]

2.1 Each factor has the cofinite Zariski topology. For a point $(a,b)$ off the diagonal, every basic product neighbourhood $U\times V$ of it has $U\cap V\ne\varnothing$, because both $U$ and $V$ are cofinite in the infinite field $k$. Choosing $c\in U\cap V$ gives $(c,c)\in(U\times V)\cap D$. Thus no product-topology neighbourhood of $(a,b)$ is contained in the complement of the diagonal. [step 1.1]

3.1 Hence the diagonal is not product-topology closed although it is Zariski closed. The projections still have fibres obtained by quotienting $k[x,y]$ by the corresponding coordinate values, so the asserted fibre behaviour remains. [step 2.1, algebra] ∎
