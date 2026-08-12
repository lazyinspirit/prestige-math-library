---
id: def-formal-order-and-x-adic-topology
kind: definition
title: "Order of a formal series, congruence modulo $x^N$, and the $x$-adic notions of convergence and Cauchy sequence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-formal-power-series-and-coefficient-extraction]
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

For a nonzero $f\in R\llbracket x\rrbracket$, its **formal order** is

$$\operatorname{ord}_x(f):=\min\{n\in\mathbb N:[x^n]f\ne0\},$$

and $\operatorname{ord}_x(0):=+\infty$. We use the conventions $m<+\infty$, $m+(+\infty)=+\infty$, and $\min(m,+\infty)=m$.

For $N\in\mathbb N$, write

$$f\equiv g\pmod{x^N}$$

when $[x^n]f=[x^n]g$ for every $n<N$. Equivalently, $\operatorname{ord}_x(f-g)\ge N$. At $N=0$ the coefficient condition is empty, so all two series are congruent modulo $x^0=1$.

A sequence $(f_j)_{j\ge0}$ **converges $x$-adically** to $f$ if for every $N$ there is $J$ such that $f_j\equiv f\pmod{x^N}$ whenever $j\ge J$. It is **$x$-adically Cauchy** if for every $N$ there is $J$ such that $f_j\equiv f_k\pmod{x^N}$ whenever $j,k\ge J$. Thus convergence and the Cauchy condition mean eventual stability of each finite coefficient prefix; they do not assert analytic convergence.
