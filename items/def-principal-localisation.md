---
id: def-principal-localisation
kind: definition
title: 'Principal localisation $R_f=\{1,f,f^2,\ldots\}^{-1}R$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multiplicative-subset-and-localisation]
justified_by: []
aliases: []
landmark: false
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

For a commutative ring $R$ and $f\in R$, the powers
$$ S_f=\{1,f,f^2,\ldots\}=\{f^n:n\in\mathbb N\} $$
form a multiplicative subset. The **principal localisation** of $R$ at $f$ is
$$ R_f=S_f^{-1}R. $$
Its elements may be written $r/f^n$. In particular, $R_1$ is canonically isomorphic to $R$, while $R_0$ is the zero ring.
