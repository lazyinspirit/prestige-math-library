---
id: fs-every-zero-sequence-admits-a-genus-zero-canonical-product
kind: false-statement
title: "FALSE: every zero sequence admits a genus-zero canonical product"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-weierstrass-elementary-factor, thm-p-series-rational, thm-infinite-product-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Infinite products"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Every discrete zero sequence in $\mathbb C$ admits a genus-zero canonical
product.

## Facts & Assumptions

**Given:** The sequence $a_n=n$ for $n\ge1$.

[F1] The genus-zero elementary factor is $E_0(w)=1-w$ ([[def-weierstrass-elementary-factor]]).

[F2] The harmonic series $\sum_{n\ge1}1/n$ diverges ([[thm-p-series-rational]]).

[F3] For nonnegative reals $p_n$, the product $\prod(1+p_n)$ converges if and only if $\sum p_n$ converges ([[thm-infinite-product-criterion]]).

## Refutation

1.1 The sequence $a_n=n$ has no finite accumulation point, so it is a legitimate zero sequence. [given]

2.1 For this sequence the genus-zero canonical product is $$\prod_{n\ge1}E_0(z/n)=\prod_{n\ge1}\left(1-\frac{z}{n}\right)$$ by [F1]. Evaluating at $z=-1$ gives the positive-factor product $$\prod_{n\ge1}\left(1+\frac1n\right).$$ [F1, step 1.1, algebra]

3.1 The series $\sum_{n\ge1}1/n$ diverges by [F2], so [F3] implies that the product in step 2.1 does not converge. Therefore the genus-zero canonical product for $a_n=n$ fails even pointwise at $z=-1$, and the statement is false. [F2, F3, step 2.1, algebra] ∎
