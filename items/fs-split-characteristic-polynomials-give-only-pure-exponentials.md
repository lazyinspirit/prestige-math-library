---
id: fs-split-characteristic-polynomials-give-only-pure-exponentials
kind: false-statement
title: "FALSE: A split characteristic polynomial always gives a linear combination of pure exponentials"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-closed-form-for-a-linear-recurrence-over-a-splitting-field, lem-binomial-series-for-a-repeated-pole]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. E. Sagan, Combinatorics: The Art of Counting, Section 3.7"
      url: "https://users.math.msu.edu/users/bsagan/Books/Aoc/GSM210.pdf"
pipeline_run: null
---

## Statement

**False claim.** If the characteristic polynomial of a linear recurrence splits, then every solution is a linear combination of pure exponentials $\lambda^n$, with no polynomial factors in $n$.

## Facts & Assumptions

**Given:** The sequence $a_n=n$ over $\mathbb Q$.

[L1] A root of multiplicity $m$ contributes a polynomial in $n$ of degree below $m$ times the corresponding exponential ([[thm-closed-form-for-a-linear-recurrence-over-a-splitting-field]]).

[L2] The double pole $(1-\lambda x)^{-2}$ has coefficients $(n+1)\lambda^n$ ([[lem-binomial-series-for-a-repeated-pole]]).

## Refutation

**Proof technique:** repeated-root counterexample.

1.1 Direct calculation gives $a_{n+2}-2a_{n+1}+a_n=0$, so the characteristic polynomial is $(t-1)^2$, which splits over $\mathbb Q$. [given, algebra]

2.1 A linear combination of pure exponentials supplied only by the characteristic root $1$ is constant, whereas $a_n=n$ is not. Thus no such pure-exponential expression exists. [step 1.1, algebra]

3.1 The required degree-one factor is exactly the repeated-root term permitted by [L1]; equivalently, [L2] with $\lambda=1$ gives coefficients $n+1$, whose one-step shift yields $n$. [step 1.1, L1, L2] ∎
