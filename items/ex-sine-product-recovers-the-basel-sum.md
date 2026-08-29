---
id: ex-sine-product-recovers-the-basel-sum
kind: example
title: "The sine product recovers the Basel sum"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sine-has-its-weierstrass-product, thm-complex-trigonometric-and-hyperbolic-power-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Infinite products"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Example

The sine product implies the Basel identity

$$\sum_{n\ge1}\frac1{n^2}=\frac{\pi^2}{6}.$$

## Facts & Assumptions

**Given:** The product formula for $\sin(\pi z)$.

[F1] The Weierstrass product for sine is
$$\frac{\sin(\pi z)}{\pi z}=\prod_{n\ge1}\left(1-\frac{z^2}{n^2}\right)$$
([[thm-sine-has-its-weierstrass-product]]).

[F2] The complex sine power series gives
$$\frac{\sin(\pi z)}{\pi z}=1-\frac{\pi^2z^2}{6}+O(z^4)$$
near $z=0$ ([[thm-complex-trigonometric-and-hyperbolic-power-series]]).

## Verification

1.1 For each $N\ge1$, the partial product $P_N(z):=\prod_{n=1}^{N}(1-z^2/n^2)$ has quadratic expansion $P_N(z)=1-\left(\sum_{n=1}^{N}1/n^2\right)z^2+z^4R_N(z)$, because every term beyond the linear choice from a single factor contains at least two copies of $z^2$. [given, algebra]

2.1 The series $\sum 1/n^2$ converges, so on a fixed neighbourhood of $0$ the functions $R_N$ stay bounded and the quadratic coefficients converge. Passing to the locally uniform limit supplied by [F1] gives $\prod_{n\ge1}(1-z^2/n^2)=1-\left(\sum_{n\ge1}1/n^2\right)z^2+O(z^4)$. [F1, step 1.1, algebra]

3.1 Comparing the quadratic terms in step 2.1 with the expansion from [F2] yields $\sum_{n\ge1}1/n^2=\pi^2/6$. [F2, step 2.1, algebra] ∎
