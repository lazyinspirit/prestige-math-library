---
id: lem-chebyshev-degree-leading-coefficients-and-extreme-values
kind: lemma
title: "Degrees and leading coefficients of the Chebyshev polynomials"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-chebyshev-polynomials-first-and-second-kind, thm-induction-principle, def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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

## Statement

For $n\ge1$, $T_n$ has degree $n$ and leading coefficient $2^{n-1}$, while $U_n$ has degree $n$ and leading coefficient $2^n$. The conventions and prerequisite facts used below are recorded in [[def-chebyshev-polynomials-first-and-second-kind]], [[thm-induction-principle]], [[def-integer-power]].

## Facts & Assumptions

**Given:** A natural $n$.

[L1] [[def-chebyshev-polynomials-first-and-second-kind]] defines $T_0=1$, $T_1=x$, $T_{n+1}=2xT_n-T_{n-1}$ and $U_0=1$, $U_1=2x$, $U_{n+1}=2xU_n-U_{n-1}$.

## Proof

**Proof technique:** induction.

1.1 The initial values in [L1] give the asserted degrees and leading coefficients at $n=1$ (and the recurrence needs the consecutive base indices $0,1$). [L1, base]

1.2 Assume the degree and leading-coefficient assertions at consecutive indices. [ih]

2.1 In each recurrence of [L1], $2x$ times the degree-$n$ term has degree $n+1$, whereas the subtracted predecessor has degree $n-1$. Thus no leading-term cancellation is possible, and the next leading coefficients are $2\cdot2^{n-1}=2^n$ for $T_{n+1}$ and $2\cdot2^n=2^{n+1}$ for $U_{n+1}$. [L1, step 1.2, algebra]

3.1 This proves the stated degree and leading-coefficient formulas at every index. [discharge-induction] ∎
