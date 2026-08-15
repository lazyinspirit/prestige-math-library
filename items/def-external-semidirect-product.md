---
id: def-external-semidirect-product
kind: definition
title: ' The external semidirect product $N\rtimes_\alpha H$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-action-by-automorphisms, def-group]
justified_by: [thm-external-semidirect-product-is-a-group]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Definition

Let $N$ and $H$ be groups ([[def-group]]), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication

$$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr).$$

When the action is clear, the subscript is omitted.
