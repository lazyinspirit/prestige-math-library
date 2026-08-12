---
id: def-summable-family-of-formal-series
kind: definition
title: "Summable families of formal series are locally finite in every coefficient range"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-formal-order-and-x-adic-topology, def-finite-sum-in-a-commutative-monoid]
justified_by: [thm-summable-families-and-rearrangement]
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

Let $(f_i)_{i\in I}$ be a family in $R\llbracket x\rrbracket$. It is **summable** if, for every $N\in\mathbb N$, only finitely many $i\in I$ have a nonzero coefficient in a degree $n<N$. Its sum is defined coefficientwise by

$$[x^n]\sum_{i\in I}f_i:=\sum_{i\in I}[x^n]f_i,$$

where the right side is the finite sum over indices whose displayed coefficient is nonzero. The empty family is summable and has sum $0$.

For a sequence $(u_k)_{k\ge0}$ with $\operatorname{ord}_x(u_k)\to+\infty$, define

$$\prod_{k\ge0}(1+u_k)$$

to be the unique series whose residue class modulo $x^N$ equals every sufficiently long finite partial product modulo $x^N$. Such stabilization is part of the definition until existence and uniqueness are proved. The empty product is $1$.
