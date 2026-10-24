---
id: def-involutive-distribution
kind: definition
title: "Involutive distributions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-field-tangent-to-a-distribution,
       def-lie-bracket-of-smooth-vector-fields]
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

A smooth distribution $\mathcal D$ on $M$ is **involutive** when

$$ X,Y \in \Gamma(\mathcal D) \implies [X,Y] \in \Gamma(\mathcal D). $$

That is, the smooth vector fields tangent to $\mathcal D$ are closed under the
Lie bracket.
