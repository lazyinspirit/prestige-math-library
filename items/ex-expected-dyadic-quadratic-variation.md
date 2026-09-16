---
id: ex-expected-dyadic-quadratic-variation
kind: example
title: "Expected dyadic quadratic variation"
status: draft
origin: pipeline
deps: [def-quadratic-variation-along-a-partition-sequence, def-brownian-motion, lem-gaussian-even-moment-bound-for-brownian-increments, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Let $B$ be a standard Brownian motion, fix $T>0$ and for $n\ge1$ let $\pi_n$
be the dyadic partition of $[0,T]$ with points $kT/2^n$. Then the expected
quadratic sum over the $2^n$ equal subintervals is exactly the elapsed time,
$$E\sum_{k=1}^{2^n}\bigl(B_{kT/2^n}-B_{(k-1)T/2^n}\bigr)^2=T,$$
for every $n\ge1$; no independence is needed for this mean computation.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, $T>0$ and $n\ge1$ with $h=T/2^n$ and $\Delta_k=B_{kh}-B_{(k-1)h}$.

[F1] The terminal quadratic sum over the dyadic partition is the number $[B]^{\pi_n}_T$ of [[def-quadratic-variation-along-a-partition-sequence]]. [[def-quadratic-variation-along-a-partition-sequence]]

[F2] Each increment over an interval of length $h$ has law $N(0,h)$ and $E(\Delta B)^2=h$. [[def-brownian-motion]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 For each $k$ the increment $\Delta_k$ has the law $N(0,h)$ by [F2], so $E\Delta_k^2=h$. [given, F2]

2.1 By [F1] the terminal dyadic sum is $\sum_{k=1}^{2^n}\Delta_k^2$, and linearity of expectation with [step 1.1] gives $E\sum_k\Delta_k^2=\sum_k h=2^n\cdot T/2^n=T$. [step 1.1, F1]

3.1 The cases are covered: $T>0$ and $n\ge1$ give $h>0$ and $2^n$ summands, including the degenerate case $n=1$; the mean computation uses only the marginal law of each increment, not independence or any joint distribution; and AC enters only through [F3]. [step 2.1, F3, given] ∎

## Source notes

Lawler, Section 2.8, computes the mean of the squared-increment sums as the total elapsed time. The example isolates the mean computation, which uses only the variance of the increments.
