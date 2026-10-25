---
id: "def-classical-birational-equivalence"
kind: "definition"
title: "Birational maps and birational equivalence of classical varieties"
status: published
origin: "pipeline"
deps: ["def-classical-rational-map", "def-classical-dominant-morphism-and-rational-map", "lem-classical-dominant-map-pulls-back-function-fields", "def-classical-integral-affine-atlas-and-chartwise-morphism", "lem-classical-integral-affine-charts-have-canonical-common-function-field", "lem-classical-dominant-rational-maps-compose", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §5l p. 117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

Assume AC for the function-field and affine-atlas interfaces used here. For affine varieties, a dominant rational map $\Phi:X\dashrightarrow Y$ is birational if there is a dominant rational map $\Psi:Y\dashrightarrow X$ with $\Psi\circ\Phi=\operatorname{id}_X$ and $\Phi\circ\Psi=\operatorname{id}_Y$ as rational-map classes. Composition here is [[lem-classical-dominant-rational-maps-compose]], the proved composition on nonempty inverse-image domains. For integral classical varieties equipped with compatible affine atlases, birational equivalence means the existence of isomorphic nonempty open subsets. The following theorem identifies this with the inverse-rational-map definition in the affine case and with a $k$-isomorphism of their function fields.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §5l p. 117. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
