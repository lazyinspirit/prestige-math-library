---
id: def-divisor-power-sum-functions
kind: definition
title: "The power functions $\\operatorname{id}_k$ and the divisor-power-sum functions $\\sigma_k$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function, def-divides-in-z, thm-complex-numbers-form-a-field]
justified_by: []
aliases: []
verification:
  audited: 2026-08-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Definition 3.8"
      url: "https://kskedlaya.org/ant/chapter-3.html"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Exercise 2.50"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Definition

For an integer $k$, define the arithmetic function $\operatorname{id}_k$ by

$$
\operatorname{id}_k(n):=n^k.
$$

The corresponding **divisor-power-sum function** is

$$
\sigma_k(n):=\sum_{\substack{d\mid n\\d>0}} d^k.
$$

In particular, $\sigma:=\sigma_1$.

## Remarks

- Since $n>0$, the value $n^k$ is well defined for every integer $k$ and lies in
  the copy of $\mathbb R\subset\mathbb C$ from [[thm-complex-numbers-form-a-field]].
