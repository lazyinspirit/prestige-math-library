---
id: def-off-diagonal-ramsey-number
kind: definition
title: "The off-diagonal Ramsey number $R(s,t)$ as the least $N$ with $N\\to(s,t)^2$, for positive $s,t$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-finite-graph-ramsey-binomial-bound, def-ramsey-colouring-and-arrow-notation, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Fox et al., Graph Ramsey Theory, Section 2.1"
      url: "https://math.mit.edu/~fox/paper-graphramsey.pdf"
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 9, Section 9.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch9.pdf"
pipeline_run: null
---

## Definition

For positive natural numbers $s,t$, the **off-diagonal Ramsey number** is

$$R(s,t):=\min\{N\ge1:N\to(s,t)^2\},$$

where the arrow is defined in [[def-ramsey-colouring-and-arrow-notation]]. The defining set is nonempty because [[thm-finite-graph-ramsey-binomial-bound]] supplies the member $\binom{s+t-2}{s-1}$, and it has a least element by [[thm-well-ordering-principle]]. Thus the notation presupposes neither an unproved existence claim nor a choice.

