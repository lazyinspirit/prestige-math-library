---
id: def-pole-pushing-along-a-chain-of-discs
kind: definition
title: "Pole pushing along a chain of discs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rational-approximation-with-a-runge-pole-set]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.2 before Lemma 9.2.2"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, §4.4 before Lemma 4.4.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Definition

Let $K\subseteq\mathbb C$ be compact. A **pole-pushing chain from $a_0$ to
$a_m$ relative to $K$** is a finite list of closed discs
$\overline D_1,\dots,\overline D_m$ such that

1. $\overline D_j\cap K=\varnothing$ for every $j$;
2. $a_{j-1},a_j\in D_j$ for every $j=1,\dots,m$.

Given $\varepsilon>0$, **pushing the pole of $(z-a_0)^{-1}$ along that chain to
$a_m$** means finding a rational function $r$ with the following properties:

1. $r$ is holomorphic on a neighbourhood of $K$;
2. $r$ has at most one finite pole, namely at $a_m$;
3. $\sup_{z\in K}|r(z)-(z-a_0)^{-1}|<\varepsilon$.

If the terminal point is declared to be $\infty$, the third clause is kept and
the second is replaced by "the approximant is a polynomial".
