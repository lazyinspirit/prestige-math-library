---
id: lem-cauchy-product-of-absolutely-convergent-complex-series
kind: lemma
title: "The Cauchy product of two absolutely convergent complex series converges absolutely to the product of their sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-absolute-convergence-of-complex-series, thm-complex-plane-is-complete, def-complex-numbers-and-arithmetic, def-monoid-finite-product, thm-generalised-associativity, cor-cauchy-product-absolute, thm-direct-comparison-test, lem-series-linearity, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

If $\sum a_n=A$ and $\sum b_n=B$ converge absolutely in $\mathbb C$, and $c_n=\sum_{k\le n}a_kb_{n-k}$, then $\sum c_n$ converges absolutely and has sum $AB$. The conventions and prerequisite facts used below are recorded in [[thm-absolute-convergence-of-complex-series]], [[thm-complex-plane-is-complete]], [[def-complex-numbers-and-arithmetic]], [[def-monoid-finite-product]], [[thm-generalised-associativity]], [[cor-cauchy-product-absolute]], [[thm-direct-comparison-test]], [[lem-series-linearity]], [[lem-complex-conjugation-and-modulus-laws]].

## Facts & Assumptions

**Given:** Absolutely convergent complex series $(a_n)$ and $(b_n)$.

## Proof

**Proof technique:** direct.

1.1 Define $c_n$ by the recursive finite complex sum. Componentwise expansion is valid because complex addition and multiplication are coordinatewise polynomial formulas. [given]

1.2 Put $d_n=\sum_{k\le n}|a_k||b_{n-k}|$. The triangle and multiplicative modulus laws give $|c_n|\le d_n$. [algebra]

1.3 The real absolute Cauchy-product theorem makes $\sum d_n$ converge; comparison therefore makes $\sum|c_n|$ converge. [given]

2.1 Expanding real and imaginary parts gives four real Cauchy products. Their sums combine by real series linearity to the two coordinates of $AB$, and componentwise convergence identifies $\sum c_n=AB$. [given] ∎
