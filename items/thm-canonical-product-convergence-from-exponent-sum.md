---
id: thm-canonical-product-convergence-from-exponent-sum
kind: theorem
title: "A canonical product converges when the $(p+1)$-power reciprocal sum converges"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-convergence-of-holomorphic-products, lem-unit-disc-estimate-for-weierstrass-elementary-factors, def-weierstrass-products-canonical-products-and-genus, def-exponent-of-convergence-of-a-zero-sequence, thm-normal-convergence-of-holomorphic-products]
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
---

## Statement

Let $(a_n)_{n\ge1}$ be a sequence of nonzero complex numbers with no finite
accumulation point, and fix an integer $p\ge0$. If

$$\sum_{n\ge1}|a_n|^{-(p+1)}<\infty,$$

then the canonical product

$$\prod_{n\ge1}E_p(z/a_n)$$

converges normally on $\mathbb C$ and therefore defines an entire function whose
zeros are exactly the points $a_n$, counted with multiplicity.

## Facts & Assumptions

**Given:** The sequence $(a_n)$ and the integer $p\ge0$.

[F1] The factor estimate gives $|1-E_p(w)|\le e|w|^{p+1}$ for $|w|\le1$ ([[lem-unit-disc-estimate-for-weierstrass-elementary-factors]]).

[F2] Canonical products are the fixed-genus Weierstrass products ([[def-weierstrass-products-canonical-products-and-genus]]).

[F3] A normally convergent holomorphic product defines a holomorphic function with exactly the zeros contributed by the finitely many nonzero exceptional factors on each compact set ([[thm-normal-convergence-of-holomorphic-products]]).

## Proof

**Proof technique:** direct.

1.1 Fix a compact disc $K_R=\{z:|z|\le R\}$. Since $(a_n)$ has no finite accumulation point, $|a_n|\to\infty$, so there is $N$ with $|a_n|>R$ for $n\ge N$; then $|z/a_n|\le1$ on $K_R$ for every $n\ge N$. [given, choose]

2.1 For $z\in K_R$ and $n\ge N$, [F1] gives $|1-E_p(z/a_n)|\le |z/a_n|^{p+1}\le R^{p+1}|a_n|^{-(p+1)}$. Because the reciprocal power series converges, the Weierstrass $M$-test makes $\sum_{n\ge N}\sup_{z\in K_R}|1-E_p(z/a_n)|$ convergent. [F1, step 1.1, algebra]

3.1 By [F2], the product $\prod_{n\ge1}E_p(z/a_n)$ is a canonical product, and step 2.1 is exactly the normal-convergence condition on the arbitrary compact disc $K_R$. Hence [F3] makes the product entire, with zeros exactly at the points $a_n$ and with their multiplicities. [F2, F3, step 2.1, algebra] ∎
