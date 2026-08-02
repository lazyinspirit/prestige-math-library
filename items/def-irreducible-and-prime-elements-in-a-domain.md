---
id: def-irreducible-and-prime-elements-in-a-domain
kind: definition
title: "Irreducible and prime elements of an integral domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-divisibility-and-associates-in-a-domain, def-invertible-element]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, Advanced Ring Theory"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Definition

Let $R$ be an integral domain and let $p\in R$ be nonzero and not a unit.
The element $p$ is **irreducible** if every factorisation $p=ab$ has $a$ or $b$
a unit. It is **prime** if

$$p\mid ab\quad\Longrightarrow\quad p\mid a\text{ or }p\mid b$$

for all $a,b\in R$.
