---
id: ex-repeated-pole-produces-a-polynomial-factor
kind: example
title: "The repeated pole $(1-2x)^{-2}$ produces the sequence $(n+1)2^n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-binomial-series-for-a-repeated-pole, rem-reciprocal-root-convention-for-recurrences, def-linear-recurrence-and-recurrence-characteristic-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. E. Sagan, Combinatorics: The Art of Counting, Section 3.7"
      url: "https://users.math.msu.edu/users/bsagan/Books/Aoc/GSM210.pdf"
pipeline_run: null
---

## Example

In $\mathbb Q\llbracket x\rrbracket$,

$$\frac{1}{(1-2x)^2}=\sum_{n\ge0}(n+1)2^nx^n.$$

The coefficient sequence $a_n=(n+1)2^n$ satisfies

$$a_{n+2}-4a_{n+1}+4a_n=0,$$

whose characteristic polynomial is $(t-2)^2$. Thus the root $2$ of multiplicity two produces a polynomial factor of degree one.

## Facts & Assumptions

**Given:** The repeated pole $(1-2x)^{-2}$.

[L1] The repeated-pole expansion is $(1-\lambda x)^{-j}=\sum_{n\ge0}\binom{n+j-1}{j-1}\lambda^nx^n$ ([[lem-binomial-series-for-a-repeated-pole]]).

[L2] A factor $(t-\lambda)^m$ in the characteristic polynomial corresponds to $(1-\lambda x)^m$ in the reciprocal denominator ([[rem-reciprocal-root-convention-for-recurrences]]).

[L3] The characteristic polynomial of $a_{n+2}+c_1a_{n+1}+c_2a_n=0$ is $t^2+c_1t+c_2$ ([[def-linear-recurrence-and-recurrence-characteristic-polynomial]]).

## Verification

**Proof technique:** direct calculation.

1.1 Apply [L1] with $j=2$ and $\lambda=2$; since $\binom{n+1}{1}=n+1$, this gives the displayed series. [given, L1, algebra]

1.2 Direct substitution gives $a_{n+2}-4a_{n+1}+4a_n=2^n(4n+12-8n-16+4n+4)=0$. [algebra]

2.1 By [L3], the recurrence polynomial is $t^2-4t+4=(t-2)^2$, and [L2] matches it to the given double pole. [step 1.2, L2, L3, algebra] ∎
