---
id: fs-the-essential-supremum-equals-the-pointwise-supremum
kind: false-statement
title: "FALSE: the essential supremum equals the pointwise supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one]
proof_strategy: "Refute with the indicator of the rationals on [0, 1], whose pointwise supremum is 1 but whose essential supremum is 0."
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Definition 7.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

For every measurable function, the essential supremum equals the pointwise
supremum.

## Facts & Assumptions

**Given:** The rational-indicator example on $[0,1]$.

[L1] The function $\chi_{\mathbb Q\cap[0,1]}$ has pointwise supremum $1$ but
essential supremum $0$
([[ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one]]).

## Refutation

**Proof technique:** Refute with the indicator of the rationals on $[0,1]$,
whose pointwise supremum is $1$ but whose essential supremum is $0$.

1.1 The single function from [L1] already violates the claimed equality. [L1]

2.1 Therefore the statement is false. [step 1.1] ∎
