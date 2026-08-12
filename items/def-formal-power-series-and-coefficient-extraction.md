---
id: def-formal-power-series-and-coefficient-extraction
kind: definition
title: "Formal power series over a commutative ring and the coefficient-extraction functional $[x^n]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutative-ring, def-finite-sum-in-a-commutative-monoid, def-polynomial-ring-over-a-commutative-ring]
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
    - title: "Herbert S. Wilf, generatingfunctionology"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring. A **formal power series over $R$** is a coefficient function $a:\mathbb N\to R$, written

$$f=\sum_{n\ge 0}a_nx^n,$$

and $R\llbracket x\rrbracket$ is the set of all such functions. The symbol $x$ is an indeterminate. The notation asserts no analytic convergence and no value of $x$ is being chosen.

For $n\in\mathbb N$, the **coefficient-extraction functional** is evaluation at $n$:

$$[x^n]f:=a_n.$$

Define zero and one coefficientwise, put $[x^n](f+g)=[x^n]f+[x^n]g$, and define the Cauchy product by

$$[x^n](fg)=\sum_{i+j=n}[x^i]f\,[x^j]g=\sum_{i=0}^{n}[x^i]f\,[x^{n-i}]g.$$

The last sum is finite, including when $n=0$. The constant $r\in R$ denotes the series with coefficient $r$ at $0$ and $0$ elsewhere. The series $x$ has coefficient $1$ at $1$ and $0$ elsewhere. Thus $x^0=1$, and $x^n$ is supported at $n$.

The finitely supported coefficient functions form the polynomial part of $R\llbracket x\rrbracket$. Under the coefficient-function definition of [[def-polynomial-ring-over-a-commutative-ring]], a polynomial is therefore the same data as a finitely supported formal series; the next theorem verifies that this identification respects the ring operations.
