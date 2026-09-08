---
id: "def-classical-integral-affine-atlas-and-chartwise-morphism"
kind: "definition"
title: "Integral classical varieties in the compatible affine-atlas register"
status: published
origin: "pipeline"
deps: ["def-classical-affine-variety-interface", "lem-classical-irreducible-space-open-intersection-criterion", "def-classical-regular-function-on-open-set", "lem-classical-regular-functions-locality-and-gluing", "def-classical-affine-variety-morphism", "lem-classical-morphism-inverse-image-of-closed-is-closed", "thm-classical-principal-open-is-affine-variety", "def-classical-affine-open-subset", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Definitions 5.2, 5.7 and Proposition 5.4, pp. 100–102"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

Under AC for the affine-coordinate and principal-open interfaces, an integral classical prevariety over $k$ is a nonempty irreducible topological space $X$ equipped with a finite cover by open charts $U_i$ homeomorphic to classical affine varieties, whose transition maps and inverse transition maps on overlaps are locally regular. The atlas is part of the data. On any open $W\subseteq X$, a function $s:W\to k$ is regular if in each chart it is regular on $W\cap U_i$. A map is a morphism if it is continuous and pulls back regular functions on every target open to regular functions on its inverse image. Equivalently it passes this test locally in source and target charts. An integral classical variety is such a prevariety satisfying the separation axiom: the equalizer of any two morphisms from an affine variety into $X$ is closed. An affine open is an open subset isomorphic, with these functions, to an affine variety.

The chartwise tests are invariant under compatible refinement: on an overlap, [[lem-classical-morphism-inverse-image-of-closed-is-closed]] shows that locally regular transition maps pull local quotient functions back to regular functions, and [[lem-classical-regular-functions-locality-and-gluing]] transfers the test in both directions. More explicitly, if a continuous map passes the affine-chart test, then for any target section on $W$ and any source point over $W$, a target chart and a source chart give a neighbourhood where its pullback is regular. Locality makes the pullback regular on the whole inverse image. The converse is restriction of the global test. Affine targets satisfy the stated separation axiom: choose their finitely many coordinate functions; the equalizer is the intersection of the closed zero sets of the pulled-back coordinate differences. Thus a single affine chart gives an example of an integral classical variety. No theorem constructing a glued space from unspecified charts is asserted.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Definitions 5.2, 5.7 and Proposition 5.4, pp. 100–102. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
