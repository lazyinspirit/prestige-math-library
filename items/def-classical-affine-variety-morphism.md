---
id: "def-classical-affine-variety-morphism"
kind: "definition"
title: "A morphism from an open subset of a classical affine variety to an affine variety"
status: "draft"
origin: "pipeline"
deps: ["def-classical-regular-function-on-open-set", "lem-classical-regular-functions-locality-and-gluing"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §3d and Proposition 3.26, pp. 64–67"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

Let $U$ be open in an affine algebraic set $X$ and let $Y$ be an affine algebraic set. A set map $\phi:U\to Y$ is a morphism over $k$ if $s\circ\phi\in\mathcal O_X(U)$ for every $s\in\mathcal O_Y(Y)$. For a map whose target is an open subset of an affine algebraic set, the phrase **locally regular morphism** means a continuous map pulling regular functions on each target open back to regular functions on its inverse image. An **isomorphism** between open subsets of affine algebraic sets is a bijection for which the map and its inverse are locally regular morphisms. Continuity and this local pullback property for the affine-target definition will be established in the next lemma; they are not assumed in the affine-target test.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §3d and Proposition 3.26, pp. 64–67. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
