---
id: def-smooth-distribution-on-a-manifold
kind: definition
title: "Smooth distributions on a manifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-subbundle,
       thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Definition

Assume $\mathrm{AC}_\omega$, so that $TM$ carries the canonical smooth vector
bundle structure supplied by
[[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]. Let
$M$ be a smooth manifold and let $k \geq 0$ be an integer. A
**smooth distribution of rank $k$ on $M$** is a rank-$k$ smooth vector
subbundle $\mathcal D \subseteq TM$.

Equivalently, to each $p \in M$ it assigns a $k$-dimensional linear subspace
$\mathcal D_p \subseteq T_pM$, with the dependence on $p$ smooth in the sense
of vector subbundles.
