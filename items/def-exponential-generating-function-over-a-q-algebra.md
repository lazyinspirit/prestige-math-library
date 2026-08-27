---
id: def-exponential-generating-function-over-a-q-algebra
kind: definition
title: "Exponential generating functions over a commutative $\\mathbb{Q}$-algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-formal-power-series-and-coefficient-extraction, def-formal-exponential-logarithm-and-powers]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §2.3"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative $\mathbb{Q}$-algebra and let $(a_n)_{n\geq0}$ be a
sequence in $R$. Its **exponential generating function** is the formal series

$$A(x):=\sum_{n\geq0}a_n\frac{x^n}{n!}\in R\llbracket x\rrbracket,$$

formed inside [[def-formal-power-series-and-coefficient-extraction]].

The $\mathbb{Q}$-algebra structure is part of the definition: it is what makes
the scalars $1/n!$ meaningful in $R$. The resulting series is formal rather than
analytic, and the formal $\exp$ and $\log$ used later are those of
[[def-formal-exponential-logarithm-and-powers]].
