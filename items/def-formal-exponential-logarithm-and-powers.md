---
id: def-formal-exponential-logarithm-and-powers
kind: definition
title: "Formal exponential, logarithm, and binomial powers over a commutative $\\mathbb Q$-algebra"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ring-homomorphism, thm-rat-field, def-summable-family-of-formal-series, thm-formal-power-series-unit-criterion]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Definition

A **commutative $\mathbb Q$-algebra** here means a commutative ring $R$ equipped with a unital ring homomorphism $\mathbb Q\to R$. We identify each rational with its image in $R$.

For $u\in xR\llbracket x\rrbracket$, define

$$\exp(u):=\sum_{n\ge0}\frac{u^n}{n!},\qquad \log(1+u):=\sum_{n\ge1}(-1)^{n-1}\frac{u^n}{n}.$$

For $c\in R$, define the **formal binomial power**

$$(1+u)^c:=\exp\bigl(c\log(1+u)\bigr).$$

Since $\operatorname{ord}_x(u^n)\ge n$, each displayed family is summable. The unit criterion makes $1+u$ a unit. These symbols name formal series only; no analytic exponential, logarithm, branch, or convergence is involved.
