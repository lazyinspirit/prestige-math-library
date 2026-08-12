---
id: def-formal-series-composition
kind: definition
title: "Composition $f\\circ g$ of formal series when the outer series is a polynomial or the inner series has zero constant term"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-summable-family-of-formal-series, lem-formal-order-laws, def-formal-power-series-and-coefficient-extraction]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Definition

For $f=\sum_{n\ge0}a_nx^n$ and $g\in R\llbracket x\rrbracket$, define the **formal composition**

$$f\circ g:=\sum_{n\ge0}a_ng^n$$

in either of these cases:

1. $f$ is a polynomial, so the sum is finite; or
2. $[x^0]g=0$, so $\operatorname{ord}_x(g^n)\ge n$ and the displayed family is summable.

Both rules give the same result when both apply. In particular $f\circ0=[x^0]f$, $f\circ x=f$, and $x\circ g=g$ whenever the displayed compositions are admissible.

If $f$ has infinitely many nonzero coefficients and $[x^0]g\ne0$, the expression is not defined over a bare commutative ring: even its constant coefficient could require an infinite sum in $R$. This is a failure of formal local finiteness, not a question of analytic convergence.
