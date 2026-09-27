---
id: def-product-varieties-universal-property
kind: definition
title: Products of classical algebraic sets and their universal property
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-products-and-coproducts, def-affine-algebraic-set, def-projective-algebraic-set]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, §5g Products
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: MIT 18.725 Algebraic Geometry, Lecture 7
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  audited: 2026-09-07
  precheck: n/a
---

## Definition

Fix the page's algebraically closed field $k$. Let $\mathcal C$ be the category whose objects are classical affine or projective algebraic sets over $k$ (including empty and reducible ones), and whose arrows are regular $k$-maps. Objects isomorphic to such sets are understood with their transported algebraic structure. No existence of products for arbitrary mixed affine/projective factors is asserted.

For $X,Y$ in $\mathcal C$, a **constructed product** $X\times_kY$
is an object of $\mathcal C$ with morphisms $p:X\times_kY\to X$ and
$q:X\times_kY\to Y$ such that, for every object $T$ of $\mathcal C$ and morphisms $f:T\to X$, $g:T\to Y$, there is a unique
morphism $\langle f,g\rangle:T\to X\times_kY$ satisfying
$p\langle f,g\rangle=f$ and $q\langle f,g\rangle=g$. Thus it is the
categorical product of [[def-products-and-coproducts]] in $\mathcal C$.

The underlying set is written as pairs when a construction supplies that identification. If either factor is empty, the product set is empty. A product with the one-point affine algebraic set has the evident projection isomorphism. When $X,Y$ are varieties, this definition is used only after a construction shows that the resulting nonempty algebraic set is irreducible.
