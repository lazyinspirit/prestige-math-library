---
id: def-dirichlet-convolution
kind: definition
title: "Dirichlet convolution of arithmetic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function, def-divides-in-z, def-finite-sum-in-a-commutative-monoid, lem-divisibility-poset-is-lower-finite-and-factorises]
justified_by: []
aliases: []
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Section 2.9"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Definition 3.5"
      url: "https://kskedlaya.org/ant/chapter-3.html"
pipeline_run: null
---

## Definition

Let $f,g$ be arithmetic functions. Their **Dirichlet convolution** is the
arithmetic function $f*g$ defined by

$$
(f*g)(n):=\sum_{\substack{d\mid n\\d>0}} f(d)g(n/d)
$$

for each positive integer $n$, where divisibility is that of
[[def-divides-in-z]].

This sum is finite: the positive divisors of $n$ form a finite interval in the
divisibility poset by [[lem-divisibility-poset-is-lower-finite-and-factorises]],
and the summation is the finite commutative-monoid sum of
[[def-finite-sum-in-a-commutative-monoid]].

## Remarks

- The sum runs over positive divisors only. No value at $0$ occurs anywhere in
  the definition.
