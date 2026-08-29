---
id: def-weierstrass-products-canonical-products-and-genus
kind: definition
title: "Weierstrass products, canonical products, and genus"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-weierstrass-elementary-factor]
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
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 The Weierstrass product theorem"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Definition

Let $(a_n)_{n\ge1}$ be a sequence of nonzero complex numbers with no finite
accumulation point, and let $(p_n)_{n\ge1}$ be integers with $p_n\ge0$.

Finite zero multisets are allowed as a separate degenerate case: the associated
products have only finitely many factors, the empty product is $1$, and their
canonical genus is defined to be $0$.

The product

$$\prod_{n\ge1}E_{p_n}(z/a_n)$$

is a **Weierstrass product** for the zero sequence $(a_n)$.

If one integer $p\ge0$ is used for every factor, so the product is

$$\prod_{n\ge1}E_p(z/a_n),$$

it is the **canonical product of genus $p$** associated to $(a_n)$. If there is
at least one integer $p\ge0$ for which that canonical product converges, the
least such $p$ is the **canonical genus** of the sequence. If no such integer
exists, its canonical genus is $+\infty$.
