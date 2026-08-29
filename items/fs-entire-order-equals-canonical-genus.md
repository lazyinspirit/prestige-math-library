---
id: fs-entire-order-equals-canonical-genus
kind: false-statement
title: "FALSE: the order of an entire function always equals its canonical genus"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-weierstrass-factorization-for-entire-functions, def-order-of-an-entire-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Functions of finite order"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

The order of an entire function always equals its canonical genus.

## Facts & Assumptions

**Given:** The zero-free entire function $f(z)=e^z$.

[F1] Weierstrass factorization represents a zero-free entire function as a pure
exponential factor, so its canonical product part has genus $0$
([[thm-weierstrass-factorization-for-entire-functions]]).

[F2] The order of an entire function is defined from the growth of $M_f(r)$
([[def-order-of-an-entire-function]]).

## Refutation

1.1 The function $e^z$ has no zeros, so [F1] makes its canonical-product part genus $0$. [F1, given]

2.1 On the positive real axis one has $M_{e^z}(r)\ge e^r$, while everywhere on $|z|=r$ one has $|e^z|=e^{\operatorname{Re}z}\le e^r$; therefore $M_{e^z}(r)=e^r$, and [F2] gives $\rho(e^z)=\limsup_{r\to\infty}\log r/\log r=1$. Hence the order is $1$ while the canonical genus is $0$. [F2, step 1.1, algebra] ∎
