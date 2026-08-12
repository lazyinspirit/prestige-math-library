---
id: def-products-and-coproducts
kind: definition
title: "Products and coproducts as limits and colimits of discrete diagrams, including their existence-and-uniqueness equations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-and-colimit-of-a-diagram, def-indexed-family]
justified_by: []
aliases: [def-categorical-product, def-categorical-coproduct]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definitions 3.1.9 and 3.1.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

Let $(A_i)_{i\in I}$ be an indexed family of objects
([[def-indexed-family]]), regarded as a diagram on the discrete category $I$.
Its **product** is its limit ([[def-limit-and-colimit-of-a-diagram]]): an object
$P=\prod_{i\in I}A_i$ with projections $p_i:P\to A_i$ such that every family
$f_i:X\to A_i$ has a unique pairing

$$\langle f_i\rangle_{i\in I}:X\to P, \qquad p_i\langle f_i\rangle=f_i\quad(i\in I).$$

Its **coproduct** is its colimit: an object $Q=\coprod_{i\in I}A_i$ with
injections $\iota_i:A_i\to Q$ such that every family $f_i:A_i\to X$ has a
unique copairing

$$[f_i]_{i\in I}:Q\to X, \qquad [f_i]_{i\in I}\iota_i=f_i\quad(i\in I).$$

The empty product is therefore terminal and the empty coproduct initial. A
one-object product or coproduct is canonically the object itself. A product or
coproduct need not exist.
