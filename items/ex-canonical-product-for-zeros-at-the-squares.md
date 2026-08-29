---
id: ex-canonical-product-for-zeros-at-the-squares
kind: example
title: "A genus-zero canonical product for the zero set $\\{n^2:n\\ge1\\}$"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-canonical-product-convergence-from-exponent-sum]
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

## Example

The genus-zero canonical product

$$\prod_{n\ge1}\left(1-\frac{z}{n^2}\right)$$

converges normally on $\mathbb C$ and has zeros exactly at the squares
$n^2$, each with multiplicity $1$.

## Facts & Assumptions

**Given:** The zero sequence $a_n=n^2$.

[F1] If $\sum|a_n|^{-1}$ converges, then the genus-zero canonical product
$\prod E_0(z/a_n)$ converges normally and has exactly the prescribed zeros
([[thm-canonical-product-convergence-from-exponent-sum]]).

## Verification

1.1 Here $\sum_{n\ge1}|a_n|^{-1}=\sum_{n\ge1}1/n^2$ converges, and $E_0(w)=1-w$, so [F1] applies with $p=0$. [F1, given, algebra]

2.1 Therefore $\prod_{n\ge1}(1-z/n^2)$ converges normally on $\mathbb C$ and has zeros exactly at the points $n^2$. [F1, step 1.1] ∎
