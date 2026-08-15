---
id: def-bimodule
kind: definition
title: "$(S,R)$-bimodules and commuting left and right scalar actions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-modules]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
pipeline_run: null
---

## Definition

Let $S$ and $R$ be unital rings. An **$(S,R)$-bimodule** is an abelian group $N$ that is a left $S$-module and a right $R$-module ([[def-left-and-right-modules]]) such that the two actions commute:

$$(sn)r=s(nr)$$

for every $s\in S$, $n\in N$, and $r\in R$. It is denoted ${}_SN_R$ when the rings need to be displayed.

Every ring $R$ is an $(R,R)$-bimodule by left and right multiplication. If $R$ is commutative, every left $R$-module becomes an $(R,R)$-bimodule by defining $mr:=rm$.
