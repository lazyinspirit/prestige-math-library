---
id: def-order-of-zero-holomorphic-function
kind: definition
title: "The order of a zero of a holomorphic function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-taylor-series-holomorphic-function, def-extended-reals, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Definitions 2.26 and 2.30"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Definition

Let $f$ be holomorphic on a neighbourhood of $a$, and let $(c_n)$ be the coefficients of its Taylor series at $a$ ([[def-taylor-series-holomorphic-function]]). The order $\operatorname{ord}_a(f)$ is the least natural $n$ for which the $n$th Taylor coefficient is nonzero, and is $+\infty$ when every Taylor coefficient is zero.

If the set $\{n\in\mathbb N:c_n\ne0\}$ is nonempty, its least element exists and is unique by [[thm-well-ordering-principle]]. If the set is empty, the separate value $+\infty\in\overline{\mathbb R}$ is supplied by [[def-extended-reals]]. Thus the cases are exhaustive and do not overlap. When $f(a)\ne0$, the order is $0$; when $f(a)=0$ and the order is finite, it is a positive natural number; the infinite value records that every Taylor coefficient vanishes rather than naming a natural exponent.
