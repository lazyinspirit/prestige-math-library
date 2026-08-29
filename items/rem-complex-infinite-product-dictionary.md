---
id: rem-complex-infinite-product-dictionary
kind: remark
title: "Complex infinite-product convention extending the published real definition"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-infinite-product, thm-infinite-product-criterion]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Infinite products"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Remark

The published definition [[def-infinite-product]] is stated for real factors.
This page extends its tail convention explicitly to complex factors: for a
complex sequence $(b_n)$, the product $\prod_{n\ge0}b_n$ **converges** when
there is an index $N$ such that $b_n\ne0$ for every $n\ge N$ and the complex
partial products $\prod_{n=N}^m b_n$ converge as $m\to\infty$ to a nonzero
complex limit.

For a complex sequence $(a_n)$, the phrase

$$\prod_{n\ge0}(1+a_n)\text{ converges absolutely}$$

means exactly that the real product

$$\prod_{n\ge0}(1+|a_n|)$$

converges in the sense of [[def-infinite-product]]. By
[[thm-infinite-product-criterion]], this is equivalent to the numerical series
$\sum_{n\ge0}|a_n|$ converging.

The zero-factor convention is also unchanged. A finite number of zero factors is
harmless because convergence is tail-based, but infinitely many zero factors
prevent any admissible nonzero tail limit. Later theorems will therefore isolate
finite zero sets first and then work on zero-free tails.
