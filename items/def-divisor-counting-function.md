---
id: def-divisor-counting-function
kind: definition
title: "The divisor-counting function $\\tau$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function, def-divides-in-z, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Definition 3.8"
      url: "https://kskedlaya.org/ant/chapter-3.html"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Exercise 2.49"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Definition

The **divisor-counting function** is the arithmetic function $\tau$ defined by

$$
\tau(n):=\sum_{\substack{d\mid n\\d>0}} 1.
$$

Equivalently, $\tau(n)$ is the number of positive divisors of $n$.

## Remarks

- The index set is finite, so the displayed sum is a legitimate finite sum in
  the sense of [[def-sum-over-a-finite-index-set]].
