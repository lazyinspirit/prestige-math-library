---
id: def-endomorphism-ring-of-a-module
kind: definition
title: "The endomorphism ring $\\operatorname{End}_R(M)$ under addition and composition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hom-groups-and-induced-hom-maps, def-ring]
justified_by: [prop-endomorphisms-form-a-ring]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Definition

For a left $R$-module $M$, define $$\operatorname{End}_R(M):=\operatorname{Hom}_R(M,M).$$ Addition is pointwise and multiplication is composition, $(fg)(m):=f(g(m))$. The ring laws and the identity endomorphism are established in [[prop-endomorphisms-form-a-ring]].
