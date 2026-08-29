---
id: ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free
kind: example
title: "The product $\\prod_{n\\ge0}(1+z/2^n)$ defines an entire zero-free tail limit after the first factor"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-normal-convergence-of-holomorphic-products]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Example

The product

$$\prod_{n\ge1}\left(1+\frac{z}{2^n}\right)$$

converges normally on $\mathbb C$, hence defines an entire function. On every
compact set, all but finitely many factors are zero-free, so the tail limit is
zero-free there.

## Facts & Assumptions

**Given:** The factors $f_n(z)=1+z/2^n$ for $n\ge1$.

[F1] A normally convergent holomorphic product defines a holomorphic function,
and after finitely many factors the tail contributes no zeros on a fixed compact
set ([[thm-normal-convergence-of-holomorphic-products]]).

## Verification

1.1 On a compact disc $|z|\le R$ one has $\sum_{n\ge1}\sup|f_n(z)-1|=\sum_{n\ge1}R/2^n<\infty$, so the product is normally convergent. [F1, given, algebra]

2.1 Therefore [F1] makes the product entire, and on each compact disc only finitely many factors can vanish because $-2^n$ eventually lies outside the disc. [F1, step 1.1, algebra] ∎
