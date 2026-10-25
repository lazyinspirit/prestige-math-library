---
id: def-localisation-at-a-prime-ideal
kind: definition
title: 'Localisation at a prime ideal: $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multiplicative-subset-and-localisation, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.18: Local rings'
      url: 'https://stacks.math.columbia.edu/tag/07BH'
pipeline_run: frontier-12
---

## Definition

Let $R$ be a commutative ring and let $\mathfrak p\subset R$ be a prime ideal. Since $1\notin\mathfrak p$ and the product of two elements outside $\mathfrak p$ remains outside $\mathfrak p$, the complement $R\setminus\mathfrak p$ is multiplicative. The **localisation of $R$ at $\mathfrak p$** is
$$ R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R. $$
Its elements are fractions $r/s$ with $s\notin\mathfrak p$.
