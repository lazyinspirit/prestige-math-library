---
id: def-quotient-module
kind: definition
title: 'Quotient module $M/N$ with scalar multiplication on additive cosets'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-submodule, def-quotient-group, def-left-and-right-modules]
justified_by: [thm-quotient-module-laws]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Definition

Let $N\le M$ be a submodule of a left $R$-module. Since the additive group of
$M$ is abelian, $N$ is normal, so the additive quotient group $M/N$ consists of
the cosets $m+N$. Its proposed scalar action is

$$r(m+N):=rm+N.$$

The well-definedness and module laws are established in
[[thm-quotient-module-laws]]. The resulting module is the **quotient module**
$M/N$.
