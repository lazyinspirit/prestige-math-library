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

1.1 The initial values in [L1] give $T_0=U_0=1$, both of degree $0$ and leading coefficient $1$, and $T_1=X$, $U_1=2X$, of degree $1$ and leading coefficients $1$ and $2$. Applying the recurrences once gives $T_2=2X^2-1$ and $U_2=4X^2-1$, of degree $2$ and leading coefficients $2$ and $4$. Thus the asserted formulas hold at the consecutive indices $1,2$; the index-$0$ values used in obtaining index $2$ have been established separately, without applying the formula $2^{n-1}$ at $n=0$. [L1, base, algebra]

1.2 Fix $n\ge1$ and assume the degree and leading-coefficient assertions at the consecutive indices $n,n+1$. [ih]

2.1 Use $T_{n+2}=2XT_{n+1}-T_n$ and $U_{n+2}=2XU_{n+1}-U_n$ from [L1]. The first term in each recurrence has degree $n+2$, whereas the subtracted term has degree $n$. No leading-term cancellation is possible. The next leading coefficients are $2\cdot2^n=2^{n+1}$ for $T_{n+2}$ and $2\cdot2^{n+1}=2^{n+2}$ for $U_{n+2}$. This proves the two formulas at index $n+2$. [L1, step 1.2, algebra]

3.1 This proves the stated degree and leading-coefficient formulas at every index. [discharge-induction] ∎
