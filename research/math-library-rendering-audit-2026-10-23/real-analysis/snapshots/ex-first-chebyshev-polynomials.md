---
id: ex-first-chebyshev-polynomials
kind: example
title: "$T_0$ through $T_4$ and $U_0$ through $U_3$ from the Chebyshev recurrences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-chebyshev-polynomials-first-and-second-kind, lem-chebyshev-degree-leading-coefficients-and-extreme-values]
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
    - title: "NIST Digital Library of Mathematical Functions, Chapter 18"
      url: "https://dlmf.nist.gov/18"
pipeline_run: null
---

## Example

The recurrences give $T_0=1$, $T_1=x$, $T_2=2x^2-1$, $T_3=4x^3-3x$, $T_4=8x^4-8x^2+1$, and $U_0=1$, $U_1=2x$, $U_2=4x^2-1$, $U_3=8x^3-4x$. The conventions and prerequisite facts used below are recorded in [[def-chebyshev-polynomials-first-and-second-kind]], [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]].

## Facts & Assumptions

**Given:** The defining recurrences.

## Verification

1.1 Apply the $T_n$ recurrence successively and collect like powers through $T_4$. [algebra]

2.1 Apply the $U_n$ recurrence successively and collect like powers through $U_3$. [algebra] ∎
