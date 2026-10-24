---
id: lem-complex-exponential-series-converges-everywhere
kind: lemma
title: "The complex exponential series converges absolutely for every complex argument"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-series-power-series-and-absolute-convergence, def-complex-integer-powers, def-factorial-and-falling-factorial, lem-of-naturals-positive, lem-complex-conjugation-and-modulus-laws, lem-exponential-series-has-infinite-radius, thm-absolute-convergence-of-complex-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For every $z\in\mathbb C$, the series $\sum z^n/n!$ converges absolutely.

## Facts & Assumptions

**Given:** $z\in\mathbb C$.

[F1] A complex series converges absolutely when its real modulus series converges ([[def-complex-series-power-series-and-absolute-convergence]]).

[F2] Complex modulus is multiplicative, and natural factorials are positive and nonzero ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-integer-powers]], [[def-factorial-and-falling-factorial]], [[lem-of-naturals-positive]]).

[F3] For every real $x$, the real series $\sum_{n\ge0}x^n/n!$ converges absolutely ([[lem-exponential-series-has-infinite-radius]]).

[F4] Absolute convergence of a complex series implies convergence ([[thm-absolute-convergence-of-complex-series]]).

## Proof

**Proof technique:** direct.

1.1 Each factorial denominator is nonzero, and multiplicativity of modulus gives $|z^n/n!|=|z|^n/n!$. Thus its modulus series is the real exponential series at the nonnegative real $|z|$. [F2, given, algebra]

2.1 By [F3] this modulus series converges; [F1] makes the complex series absolutely convergent, and [F4] gives convergence as well. [step 1.1, F1, F3, F4] ∎
