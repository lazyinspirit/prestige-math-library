---
id: lem-affine-product-topology-not-product-topology
kind: lemma
title: The Zariski topology on an affine product is generally not the product topology
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-affine-variety-product-coordinate-ring, cor-zariski-topology-cofinite-on-affine-line, def-product-topology]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: MIT 18.725 Algebraic Geometry, Lecture 7, Remarks 10 and 12
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
---

## Statement

For affine varieties the product construction has the expected set-theoretic fibres, but its Zariski topology need not equal the product topology of the two Zariski topologies.

## Proof

**Given:** The affine product $\mathbf A^1_{\mathbb C}\times_{\mathbb C}\mathbf A^1_{\mathbb C}$.

[F1] Affine varieties over an algebraically closed field have a categorical product with its canonical projections and coordinate ring $k[X]\otimes_k k[Y]$; here the ring is $\mathbb C[x]\otimes_{\mathbb C}\mathbb C[y]\cong\mathbb C[x,y]$ ([[thm-affine-variety-product-coordinate-ring]]).

[F2] The Zariski topology on each affine line over $\mathbb C$ is cofinite ([[cor-zariski-topology-cofinite-on-affine-line]]), and rectangles of opens form a basis for the binary product topology ([[def-product-topology]]).

1.1 By [F1], the affine product has coordinate ring $\mathbb C[x,y]$, so the diagonal $D=\{(c,c):c\in\mathbb C\}$ is the algebraic set $V(x-y)$ and is Zariski closed. [given, F1, algebra]

2.1 Each factor has the cofinite Zariski topology by [F2]. For a point $(a,b)$ off the diagonal, every basic product neighbourhood $U\times V$ of it has $U\cap V\ne\varnothing$, because both $U$ and $V$ are cofinite in the infinite field $\mathbb C$. Choosing $c\in U\cap V$ gives $(c,c)\in(U\times V)\cap D$. Thus no product-topology neighbourhood of $(a,b)$ is contained in the complement of the diagonal. [F2, step 1.1]

3.1 Hence the diagonal is not product-topology closed although it is Zariski closed. For arbitrary affine varieties $X,Y$, the product property in [F1], applied to a one-point affine variety, identifies points of $X\times Y$ with pairs $(x,y)$; the fibre of the first projection over $x$ is therefore set-theoretically $\{x\}\times Y$. In this example its coordinate ring is $\mathbb C[x,y]/(x-a)\cong\mathbb C[y]$. Thus the expected fibres coexist with the topology difference. [F1, step 2.1, algebra] ∎
