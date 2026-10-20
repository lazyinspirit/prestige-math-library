---
id: lem-countably-valued-expectation-is-weighted-series
kind: lemma
title: "Expectation of a countably valued nonnegative random variable is its weighted series"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-probability-measure, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-integrable-real-and-complex-functions-and-their-integrals, cor-expectation-linearity-monotonicity-and-modulus-bound, cor-expectation-of-an-indicator-is-probability, thm-monotone-convergence-for-the-integral, def-nonnegative-extended-series]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John K. Hunter, Measure Theory Notes"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
      locator: "Chapter 4 §4.2, Theorem 4.6 (Monotone Convergence Theorem) and complete proof, PDF pp. 2–3 / printed pp. 41–42."
verification:
  precheck: n/a
---

## Statement

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space. Let $(E_j)_{j\ge1}$ be a countable measurable partition of $\Omega$, let $c_j\in[0,\infty)$ be finite real numbers, and let $Z:\Omega\to[0,\infty)$ be measurable with $Z=c_j$ on $E_j$. Then, as an extended nonnegative value,
$$
\mathbb E[Z]=\sum_{j=1}^{\infty}c_j\,\mathbb P(E_j).
$$
If this series is finite, then $Z$ is integrable and its expectation is that finite sum.

## Statement references

[[def-probability-measure]]: a probability measure has total mass one.

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation of a nonnegative measurable random variable is its Lebesgue integral.

[[def-integrable-real-and-complex-functions-and-their-integrals]]: a real measurable function is integrable exactly when the integral of its absolute value is finite.

[[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear on integrable real random variables.

[[cor-expectation-of-an-indicator-is-probability]]: the expectation of an event indicator equals its probability.

[[thm-monotone-convergence-for-the-integral]]: integrals of increasing nonnegative measurable functions converge to the integral of their pointwise limit.

[[def-nonnegative-extended-series]]: a nonnegative extended series is the supremum of its finite partial sums, including when the value is $+\infty$.

## Facts & Assumptions

**Given:** A probability space, a countable measurable partition $(E_j)_{j\ge1}$, finite constants $c_j\ge0$, and a measurable $Z$ equal to $c_j$ on each $E_j$.

[F1] If measurable nonnegative functions increase pointwise to $Z$, their integrals increase to $\int Z\,d\mathbb P$ ([[thm-monotone-convergence-for-the-integral]]).

[F2] On a probability space, expectation of a nonnegative measurable variable is its nonnegative Lebesgue integral; a real measurable variable is integrable when the integral of its absolute value is finite; a nonnegative extended series is the supremum of its partial sums ([[def-probability-measure]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-nonnegative-extended-series]]).

[F3] Event indicators have expectation equal to event probability, and expectation is linear on finite sums of integrable real variables ([[cor-expectation-of-an-indicator-is-probability]], [[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Proof

1.1 For $N\ge1$, define $Z_N:=\sum_{j=1}^{N}c_j\mathbf1_{E_j}$. This is a measurable nonnegative simple function. On $E_j$, $Z_N=0$ for $N<j$ and $Z_N=c_j=Z$ for $N\ge j$, so $Z_N\uparrow Z$. Each $Z_N$ is bounded by the finite maximum of $c_1,\ldots,c_N$, hence is integrable on the probability space. [given, F2, construct]

2.1 By linearity and the indicator identity in [F3], $\mathbb E[Z_N]=\sum_{j=1}^{N}c_j\mathbb P(E_j)$. [step 1.1, F3, algebra]

3.1 Apply monotone convergence [F1] to step 1.1 and then use step 2.1. The resulting supremum of finite partial sums is exactly the nonnegative extended sum $\sum_{j=1}^{\infty}c_j\mathbb P(E_j)$ by [F2], proving the extended-valued identity. [step 1.1, step 2.1, F1, F2]

4.1 If the series is finite, step 3.1 gives $\int Z\,d\mathbb P<\infty$. Since $Z\ge0$, $|Z|=Z$, so [F2] shows $Z$ is integrable and its ordinary expectation is the same finite sum. [given, F2, step 3.1] ∎
