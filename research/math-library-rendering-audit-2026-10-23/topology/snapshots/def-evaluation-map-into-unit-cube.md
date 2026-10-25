---
id: def-evaluation-map-into-unit-cube
kind: definition
title: "The evaluation map from a space into the unit cube indexed by a family of continuous functions"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-unit-interval-function-family-separates-points-from-closed-sets, def-product-topology]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Definition

For a family $\mathcal F$ of maps $f:X\to[0,1]$, its **evaluation map** is
$$e_{\mathcal F}:X\longrightarrow[0,1]^{\mathcal F},\qquad e_{\mathcal F}(x)(f)=f(x).$$
The target has the product topology ([[def-product-topology]]). The formula is a function because each value $f(x)$ lies in $[0,1]$; if $\mathcal F=\varnothing$, its target is the one-element empty product and the formula still defines the unique map to it.
