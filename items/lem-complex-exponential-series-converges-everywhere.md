---
id: lem-complex-exponential-series-converges-everywhere
kind: lemma
title: "The complex exponential series converges absolutely for every complex argument"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-exponential, lem-exponential-series-has-infinite-radius, thm-absolute-convergence-of-complex-series]
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

For every $z\in\mathbb C$, the series $\sum z^n/n!$ converges absolutely. The conventions and prerequisite facts used below are recorded in [[def-complex-exponential]], [[lem-exponential-series-has-infinite-radius]], [[thm-absolute-convergence-of-complex-series]].

## Facts & Assumptions

**Given:** $z\in\mathbb C$.

## Proof

**Proof technique:** direct.

1.1 Its modulus series is $\sum |z|^n/n!$, the real exponential series at the nonnegative real $|z|$. [algebra]

2.1 The real infinite-radius lemma and complex absolute-convergence theorem give the result. [given] ∎
