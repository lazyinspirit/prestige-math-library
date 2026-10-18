---
id: def-euclidean-domain
kind: definition
title: "Euclidean domain and Euclidean function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-zero-divisor-and-integral-domain, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, Advanced Ring Theory"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Definition

An integral domain $R$ is a **Euclidean domain** if it has a function

$$\delta:R\setminus\{0\}\longrightarrow\mathbb N$$

such that for every $a\in R$ and nonzero $b\in R$, there are $q,r\in R$ with

$$a=bq+r,\qquad r=0\ \text{or}\ \delta(r)<\delta(b).$$

Such a function $\delta$ is a **Euclidean function**. No multiplicative
monotonicity condition on $\delta$ is included in this convention.
