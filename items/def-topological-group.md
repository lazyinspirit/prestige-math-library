---
id: def-topological-group
kind: definition
title: "Topological group: multiplication and inversion are continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-continuous-map-top, def-product-topology]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Definition

A **topological group** is a group $G$ ([[def-group]]) with a topology such that multiplication $m:G\times G\to G$, $m(x,y)=xy$, and inversion $\iota:G\to G$, $\iota(x)=x^{-1}$, are continuous ([[def-continuous-map-top]]) for the product topology ([[def-product-topology]]).
