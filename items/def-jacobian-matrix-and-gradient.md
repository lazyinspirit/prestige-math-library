---
id: def-jacobian-matrix-and-gradient
kind: definition
title: "The Jacobian matrix of partial derivatives and the gradient in the scalar-valued case"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-directional-and-partial-derivatives, def-euclidean-inner-product, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

If every partial derivative $\partial_jf_i(a)$ of $f:U\to\mathbb R^n$ exists, the **Jacobian matrix** is $Jf(a)=(\partial_jf_i(a))_{i<n,j<m}$. For scalar-valued $f$, its **gradient** is

$$\nabla f(a):=(\partial_0f(a),\ldots,\partial_{m-1}f(a))\in\mathbb R^m,$$

with coordinates understood in the standard basis ([[lem-standard-basis-of-f-n]]). The partial derivatives are those of [[def-directional-and-partial-derivatives]].
