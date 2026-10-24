---
id: cex-zariski-product-topology-too-coarse
kind: counterexample
title: The product of Zariski topologies is too coarse on A1 times A1
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-affine-product-topology-not-product-topology, def-product-topology]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: MIT 18.725 Algebraic Geometry, Lecture 7, Remark 10
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

For every field $k$, the Zariski topology of
$\mathbf A^1_k\times\mathbf A^1_k$ equals the product of the two factor
Zariski topologies.

## Facts & Assumptions

**Given:** An infinite field $k$ and the diagonal $D=V(x-y)\subseteq\mathbf A^1_k\times\mathbf A^1_k$.

## Counterexample

1.1 The affine-product coordinate ring is $k[x,y]$, so $D$ is Zariski closed. [given, algebra]

2.1 Each factor has the cofinite Zariski topology. For a point $(a,b)$ off $D$, every basic product neighbourhood $U\times V$ has $U\cap V\ne\varnothing$. Thus it contains $(c,c)\in D$ for some $c\in U\cap V$. [step 1.1]

3.1 Hence no product-topology neighbourhood of $(a,b)$ lies in the complement of $D$. The complement is not open, so $D$ is not closed in the product topology, although it is closed in the affine-product Zariski topology. This refutes the statement. [step 2.1] ∎
