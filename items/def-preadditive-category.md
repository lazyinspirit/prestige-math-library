---
id: def-preadditive-category
kind: definition
title: "Preadditive category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Solid modules over an ordinary ring, Definition 1.2.1"
      url: "https://www.kskedlaya.org/condensed/sec_solid1.html"
    - title: "The Stacks Project, Section 12.3, Definition 12.3.1"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Definition

A category $\mathcal C$ ([[def-category]]) is **preadditive** when every
hom-set $\mathcal C(A,B)$ is an abelian group and composition is bilinear in
the sense that for all composable morphisms
$k:A'\to A$, $f,g:A\to B$, and $h:B\to B'$,

$$h\circ(f+g)=h\circ f+h\circ g,\qquad (f+g)\circ k=f\circ k+g\circ k.$$

The additive identity in $\mathcal C(A,B)$ is written $0_{A,B}$ and is called
the **zero element** of that hom-group.
