---
id: def-p-primary-component-of-an-abelian-group
kind: definition
title: "The p-primary component of an abelian group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-power, def-order-in-a-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Definition

Let $G$ be an abelian group and $p$ a prime. Its **$p$-primary component** is $$G(p)=\{g\in G:g^{p^k}=e\text{ for some }k\in\mathbb N\}.$$ Thus the identity is included by $k=0$. In additive notation, $G(p)=\{g:p^kg=0\text{ for some }k\in\mathbb N\}$. Powers and element orders use [[def-group-power]] and [[def-order-in-a-group]]. No finiteness or maximality is part of the definition.
