---
id: "def-classical-rational-map"
kind: "definition"
title: "A rational map as an equivalence class of morphisms on nonempty opens"
status: "draft"
origin: "pipeline"
deps: ["lem-classical-affine-variety-nonempty-opens-dense", "def-classical-affine-variety-morphism"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §5l p. 117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
justified_by: ["lem-classical-rational-map-equivalence-transitive"]
---

## Definition

For affine varieties $X,Y$, a representative of a rational map $X\dashrightarrow Y$ is a pair $(U,\phi)$ with $U\subseteq X$ nonempty open and $\phi:U\to Y$ a morphism. Two pairs represent the same rational map when their maps agree on some nonempty open subset of their common domain. A rational map is an equivalence class for this relation; its equivalence-relation well-definedness is supplied by [[lem-classical-rational-map-equivalence-transitive]]. The domain of a representative need not be all of $X$.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §5l p. 117. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
