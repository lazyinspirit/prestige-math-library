---
id: def-external-direct-product-of-groups
kind: definition
title: 'The external direct product $G\times H$ with componentwise multiplication'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: [thm-external-direct-product-is-a-group]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, direct products"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Definition

Let $G$ and $H$ be groups. Their **external direct product** has underlying set

$$G\times H:=\{(g,h):g\in G,\ h\in H\}$$

and componentwise operation

$$(g,h)(g',h') := (gg',hh').$$

The fact that this operation makes $G\times H$ a group, with the indicated
identity and inverses, is proved in [[thm-external-direct-product-is-a-group]].
Until that result is used, this definition introduces only the set and its
componentwise binary operation.
