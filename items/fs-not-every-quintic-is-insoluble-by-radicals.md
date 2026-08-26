---
id: fs-not-every-quintic-is-insoluble-by-radicals
kind: false-statement
title: "FALSE: every quintic is insoluble by radicals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-x-fifth-minus-two-is-solvable-by-radicals]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 7"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.8"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Statement

**False claim:** every quintic is insoluble by radicals.

## Facts & Assumptions

**Given:** The quintic polynomial $x^5-2$ over $\mathbb Q$.

[L1] The polynomial $x^5-2$ is solvable by radicals ([[ex-x-fifth-minus-two-is-solvable-by-radicals]]).

## Refutation

**Proof technique:** direct.

1.1 The polynomial $x^5-2$ has degree five, so it is a quintic. [L1, algebra]

2.1 By [L1] it is solvable by radicals, so the statement that every quintic is insoluble by radicals is false. [step 1.1, L1] ∎
