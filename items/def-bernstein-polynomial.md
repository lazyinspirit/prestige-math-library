---
id: def-bernstein-polynomial
kind: definition
title: "The Bernstein polynomial $B_n(f)$ on $[0,1]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-sum, def-binomial-coefficient, def-metric-continuity]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Bernstein polynomial (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Bernstein_polynomial"
pipeline_run: null
---

## Definition

Let $f:[0,1]\to\mathbb R$ and $n\in\mathbb N$. Its **Bernstein polynomial with index $n$** is

$$B_n(f)(x):=\sum_{k<n+1}\iota\!\binom nk f\!\left(\frac{\iota(k)}{\iota(n)}\right)x^k(1-x)^{n-k}\qquad(0\le x\le1),$$

when $n\ge1$. It is a polynomial of degree at most $n$ when nonzero, and it may be the zero polynomial (for example when $f=0$). Here the finite sum and binomial coefficients are those of [[def-finite-sum]] and [[def-binomial-coefficient]]. For $n=0$ set $B_0(f)(x):=f(0)$; this separate clause avoids the undefined quotient $0/0$.
