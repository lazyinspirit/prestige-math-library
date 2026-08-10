---
id: def-uniform-ramsey-number
kind: definition
title: "The uniform Ramsey number $R_k(r;c)$ as the least finite witness for $c$ colours on $k$-element subsets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-finite-ramsey-for-uniform-subsets, def-ramsey-colouring-and-arrow-notation, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 9, Section 9.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch9.pdf"
pipeline_run: null
---

## Definition

For positive natural numbers $k,r,c$, the **uniform Ramsey number** is

$$R_k(r;c):=\min\{N\ge1:N\to(r)^k_c\},$$

using the arrow of [[def-ramsey-colouring-and-arrow-notation]]. The defining set is nonempty by [[thm-finite-ramsey-for-uniform-subsets]] and therefore has a least member by [[thm-well-ordering-principle]].

