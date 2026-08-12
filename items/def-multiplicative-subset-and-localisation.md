---
id: def-multiplicative-subset-and-localisation
kind: definition
title: 'Multiplicative subsets and the localisation $S^{-1}R$ as equivalence classes of fractions'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutative-ring, def-ring-homomorphism, lem-ring-units-form-a-group]
justified_by: []
aliases: [localization]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.9: Localization'
      url: 'https://stacks.math.columbia.edu/tag/00CM'
pipeline_run: frontier-12
---

## Definition

Let $R$ be a commutative ring. A subset $S\subseteq R$ is **multiplicative** if $1\in S$ and $s,t\in S$ implies $st\in S$.

On $R\times S$, define
$$ (r,s)\sim(r',s')\quad\Longleftrightarrow\quad u(rs'-r's)=0\text{ for some }u\in S. $$
The **localisation** of $R$ at $S$, denoted $S^{-1}R$, is the set of equivalence classes for this relation. The class of $(r,s)$ is written $r/s$, and its arithmetic is
$$ \frac r s+\frac{r'}{s'}=\frac{rs'+r's}{ss'},\qquad \frac r s\frac{r'}{s'}=\frac{rr'}{ss'}. $$
The **localisation map** is the ring homomorphism
$$ \lambda_S:R\longrightarrow S^{-1}R,\qquad r\longmapsto r/1. $$
Every $s\in S$ maps to a unit, with $(s/1)^{-1}=1/s$. The construction permits $0\in S$; in that case the localisation is the zero ring.
