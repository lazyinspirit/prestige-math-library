---
id: fs-runge-gives-polynomial-approximation-on-any-compact-set
kind: false-statement
title: "FALSE: Runge's theorem gives polynomial approximation on every compact set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-one-over-z-not-polynomially-approximable-on-unit-circle]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.1 and §9.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

**False claim:** Every compact set in $\mathbb C$ admits uniform polynomial
approximation for every function holomorphic on a neighbourhood of that set.

## Facts & Assumptions

**Given:** The unit circle and the function $1/z$ on it.

[L1] The function $1/z$ on the unit circle is not uniformly approximable there
by polynomials
([[ex-one-over-z-not-polynomially-approximable-on-unit-circle]]).

## Refutation

**Proof technique:** direct.

1.1 The unit circle is compact, and $1/z$ is holomorphic on a neighbourhood of it. [given]

2.1 If the displayed claim were true, then $1/z$ would be uniformly approximable on that compact set by polynomials. This contradicts [L1]. [step 1.1, L1] ∎
