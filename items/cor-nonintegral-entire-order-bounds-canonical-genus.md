---
id: cor-nonintegral-entire-order-bounds-canonical-genus
kind: corollary
title: "A nonintegral order bounds the canonical genus by its floor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hadamard-factorization-for-finite-order-entire-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Hadamard's factorization theorem"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let $f$ be a nonzero entire function of finite nonintegral order $\rho$, and
let $(a_n)_{n\ge1}$ be its nonzero zero sequence. Then the canonical genus of
$(a_n)$ is at most $\lfloor\rho\rfloor$.

## Facts & Assumptions

**Given:** A nonzero entire function $f$ of finite nonintegral order $\rho$ and its nonzero zero sequence $(a_n)$.

[F1] Hadamard factorization writes $f$ as an exponential of a polynomial times
the genus-$\lfloor\rho\rfloor$ canonical product over its nonzero zeros
([[thm-hadamard-factorization-for-finite-order-entire-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the genus-$\lfloor\rho\rfloor$ canonical product $\prod_{n\ge1}E_{\lfloor\rho\rfloor}(z/a_n)$ already converges. [F1, given]

2.1 By definition, the canonical genus is the least integer for which the corresponding canonical product converges. Step 1.1 therefore gives $\text{canonical genus}\le\lfloor\rho\rfloor$. The nonintegrality of $\rho$ makes $\lfloor\rho\rfloor$ the largest integer strictly below $\rho$, which is the usual Hadamard bound. [F1, step 1.1, algebra] ∎
