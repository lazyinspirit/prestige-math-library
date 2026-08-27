---
id: fs-pointwise-limits-of-integrable-functions-are-integrable
kind: false-statement
title: "FALSE: pointwise limits of integrable functions are integrable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-counting-measure, prop-counting-measure-is-a-measure, def-integrable-real-and-complex-functions-and-their-integrals]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

Whenever integrable functions $f_n$ converge pointwise to $f$, the limit $f$ is
integrable.

## Facts & Assumptions

**Given:** The statement above.

[L1] Counting measure is a measure on $\mathbb N$ ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]]).

[L2] Integrability means finiteness of the integral of the modulus ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Refutation

**Proof technique:** direct.

1.1 On $(\mathbb N,\mathcal P(\mathbb N),\#)$, let [L1, L2, given, construct]
$$f_n:=\chi_{\{0,\dots,n\}}.$$
Each $f_n$ is integrable because it has finite support, and $f_n(k)\to1$ for
every $k\in\mathbb N$.

2.1 The pointwise limit is the constant function $1$, whose counting-measure [step 1.1, L1, L2, algebra] ∎
integral is $+\infty$, so it is not integrable by [L2]. Therefore the Statement
is false.
