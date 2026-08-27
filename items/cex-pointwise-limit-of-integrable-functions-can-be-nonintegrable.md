---
id: cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable
kind: counterexample
title: "A pointwise limit of integrable functions need not be integrable"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-counting-measure, prop-counting-measure-is-a-measure, def-integrable-real-and-complex-functions-and-their-integrals]
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Example 2.55"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement refuted

Every pointwise limit of integrable functions is integrable.

## Facts & Assumptions

**Given:** Counting measure on $\mathbb N$ and the functions
$f_n=\chi_{\{0,\dots,n\}}$.

[L1] Counting measure is a measure on $\mathbb N$ ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]]).

[L2] Integrability means finiteness of the integral of the modulus ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $f_n$ has finite support, so it is integrable on [L1, L2, given]
$(\mathbb N,\mathcal P(\mathbb N),\#)$.

2.1 For every $k\in\mathbb N$, one has $f_n(k)\to1$. The pointwise limit is the [step 1.1, L1, L2, algebra] ∎
constant function $1$, whose integral under counting measure is $+\infty$, so it
is not integrable by [L2]. Thus the Statement is false.
