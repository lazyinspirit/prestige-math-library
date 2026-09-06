---
id: cor-discriminant-valuation-from-different-exponents
kind: corollary
title: "Discriminant valuations from different exponents"
status: draft
origin: pipeline
deps: [thm-discriminant-is-the-norm-of-the-different, thm-ideal-norm-is-multiplicative, def-prime-ideal-valuations-on-fractional-ideals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Corollary 4.16"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Statement

For a rational prime $p$,
$$v_p(d_K)=\sum_{\mathfrak P\mid p}f(\mathfrak P/p)v_{\mathfrak P}(\mathfrak D_K).$$

## Proof

**Given:** the prime-ideal factorisation of the different.

1.1 Factor $\mathfrak D_K$ into its finite prime powers and apply norm multiplicativity, using $N\mathfrak P=p^{f(\mathfrak P/p)}$ over $p$. [given, algebra]

2.1 The norm-of-the-different identity makes the $p$-adic valuation of that product $v_p(d_K)$, which is the displayed sum. [step 1.1, algebra] ∎
