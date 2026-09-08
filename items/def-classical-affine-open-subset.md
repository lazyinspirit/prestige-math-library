---
id: "def-classical-affine-open-subset"
kind: "definition"
title: "A classical affine open subset and its coordinate ring"
status: "draft"
origin: "pipeline"
deps: ["def-classical-affine-variety-morphism", "thm-classical-affine-morphisms-coordinate-ring-antiequivalence", "thm-classical-principal-open-is-affine-variety", "def-axiom-of-choice"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §3h pp. 71–72"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

An affine open subset $U$ of a classical affine variety $X$ is an open subset equipped with an isomorphism, in the locally regular sense, to a classical affine variety. Assume AC for the coordinate-ring and principal-open interfaces used here. Its coordinate algebra is $\mathcal O_X(U)$; any specified affine realization identifies this algebra with that realization’s coordinate ring. Two such identifications differ by the pullback of their transition isomorphism in [[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]], so the algebra of functions on $U$ is independent of the realization. Nonempty principal opens have this property by [[thm-classical-principal-open-is-affine-variety]]. Arbitrary opens are not declared affine.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §3h pp. 71–72. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
