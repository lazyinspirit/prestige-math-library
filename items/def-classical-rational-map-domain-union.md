---
id: "def-classical-rational-map-domain-union"
kind: "definition"
title: "The candidate domain of a rational map"
status: published
origin: "pipeline"
deps: ["def-classical-rational-map", "lem-classical-rational-map-equivalence-transitive"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
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
---

## Definition

For a rational-map class $\Phi:X\dashrightarrow Y$, define its candidate domain by $$D(\Phi)=\bigcup_{(U,\phi)\in\Phi}U.$$ It is open and nonempty because every representative domain is open and the class contains a representative. At this point the definition is only a union of domains; it asserts neither a glued map nor maximality.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §5l p. 117. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
