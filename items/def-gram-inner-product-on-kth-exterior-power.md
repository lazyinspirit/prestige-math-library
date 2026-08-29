---
id: def-gram-inner-product-on-kth-exterior-power
kind: definition
title: "The Gram inner product on $\\Lambda^kV$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-kth-exterior-power-by-quotient, def-inner-product-space, def-determinant-of-a-square-matrix]
justified_by: [thm-gram-inner-product-on-exterior-powers-is-positive-definite]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §8.1"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Definition

Let $V$ be a finite-dimensional real inner product space ([[def-inner-product-space]]) and $k\ge0$. On decomposable wedges of [[def-kth-exterior-power-by-quotient]] put

$$\langle v_1\wedge\cdots\wedge v_k,\ w_1\wedge\cdots\wedge w_k\rangle:=\det\bigl(\langle v_i,w_j\rangle\bigr)_{i,j\le k},$$

the determinant ([[def-determinant-of-a-square-matrix]]) of the $k\times k$ matrix of pairings. For $k=0$ both sides are the empty determinant, which is $1$.

For each fixed list $(w_1,\ldots,w_k)$, the assignment $(v_1,\ldots,v_k)\mapsto\det(\langle v_i,w_j\rangle)$ is $k$-linear (each entry is linear in the corresponding $v_i$, and the determinant is multilinear in its rows) and alternating (if $v_i=v_{i'}$, two rows of the matrix are equal, so the determinant vanishes). It therefore descends to a linear functional on $\Lambda^kV$ in the first slot, and symmetrically in the second slot. The resulting bilinear pairing is the **Gram inner product** on $\Lambda^kV$; that it is an inner product in the sense of [[def-inner-product-space]] is proved in [[thm-gram-inner-product-on-exterior-powers-is-positive-definite]], which also discharges the well-definedness obligation recorded above.
