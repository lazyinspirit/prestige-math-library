---
id: def-normal-convergence-of-holomorphic-products
kind: definition
title: "Normal convergence of holomorphic products"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-complex-infinite-product-dictionary]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Definition

Let $\Omega\subseteq\mathbb C$ be open, and let $f_n:\Omega\to\mathbb C$ be
holomorphic functions for $n\ge0$.

The product

$$\prod_{n\ge0}f_n(z)$$

is **normally convergent on $\Omega$** if for every compact set $K\subseteq\Omega$
there is an integer $N$ such that $f_n$ has no zero on $K$ for all $n\ge N$ and

$$\sum_{n\ge N}\sup_{z\in K}|f_n(z)-1|<\infty.$$

Equivalently, after discarding finitely many factors that may contribute zeros,
the deviations from $1$ are absolutely summable uniformly on each compact set.
This is the product analogue of normal convergence for holomorphic series.
