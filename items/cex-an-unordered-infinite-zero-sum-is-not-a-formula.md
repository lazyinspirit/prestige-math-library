---
id: cex-an-unordered-infinite-zero-sum-is-not-a-formula
kind: counterexample
title: "An unordered infinite zero sum is not an explicit formula"
status: published
origin: pipeline
deps: [thm-von-mangoldt-explicit-formula-smoothed, thm-von-mangoldt-explicit-formula-truncated]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nick Andersen, Analytic Number Theory, Chapter 12"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement refuted

For $x>1$, the bare unordered expression $\sum_\rho x^\rho/\rho$ is a
defined quantity equal to the sharp explicit-formula zero contribution.

## Counterexample

**Given:** the sharp and smoothed explicit formulas.

1.1 The sharp formula asserts only finite sums $\sum_{|\Im\rho|<T}$ and specifies an error before any limit is taken. [given, algebra]

2.1 The smoothed formula supplies a different convergence mechanism through its Mellin decay.  Neither result assigns a value to the displayed unordered bare sum, so the asserted equality has no defined left side. [step 1.1, contradiction] ∎
