---
id: def-formal-derivative-of-a-polynomial
kind: definition
title: 'The formal derivative of a polynomial'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring]
justified_by: [prop-formal-derivative-laws]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Section 1'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $f=\sum_{i\ge0}a_i x^i\in R[x]$. Its **formal derivative** is

$$ f':=\sum_{i\ge1} i a_i x^{i-1}. $$

Here $i a_i$ means the sum of $i$ copies of $a_i$ in the additive group of $R$. Equivalently, the coefficient of $x^n$ in $f'$ is $(n+1)a_{n+1}$. The sequence defining $f'$ has finite support because the coefficient sequence of $f$ does ([[def-polynomial-ring-over-a-commutative-ring]]). This is an algebraic operation and does not use a limit.
