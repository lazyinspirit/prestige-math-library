---
id: fs-weierstrass-factorization-is-unique
kind: false-statement
title: "FALSE: Weierstrass factorization is unique"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-weierstrass-factorization-for-entire-functions]
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
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 The Weierstrass product theorem"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Weierstrass factorization is unique.

## Facts & Assumptions

**Given:** The constant entire function $1$.

[F1] Weierstrass factorization writes an entire function as an exponential
factor times a product carrying the zeros
([[thm-weierstrass-factorization-for-entire-functions]]).

## Refutation

1.1 The function $1$ has no zeros, so [F1] allows the trivial product part and gives the factorization $1=e^0\cdot1$. [F1, given]

2.1 But also $1=e^{2\pi i}\cdot1$, and the exponential factors $e^0$ and $e^{2\pi i}$ come from different entire logarithms. Therefore the factorization is not unique. [step 1.1, algebra] ∎
