---
id: cor-expectation-linearity-monotonicity-and-modulus-bound
kind: corollary
title: "Linearity, monotonicity, and the modulus bound for expectation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $X,Y$ be integrable real or complex random variables on one probability
space.

1. For scalars $a,b$,
   $$\mathbb E[aX+bY]=a\,\mathbb E[X]+b\,\mathbb E[Y].$$
2. If $X$ and $Y$ are real-valued and $X\le Y$ almost surely, then
   $$\mathbb E[X]\le\mathbb E[Y].$$
3. $$|\mathbb E[X]|\le\mathbb E[|X|].$$

## Facts & Assumptions

**Given:** Integrable random variables $X,Y$.

[L1] Expectation is the Lebesgue integral against the probability measure
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[L2] The Lebesgue integral is linear on $L^1$, the nonnegative integral is
monotone, and the modulus of an integral is bounded by the integral of the
modulus
([[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[thm-integral-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Rewriting expectation as the integral by [L1], linearity in [L2] gives $$\mathbb E[aX+bY]=a\,\mathbb E[X]+b\,\mathbb E[Y].$$ [L1, L2]

1.2 Applying the integral triangle inequality from [L2] after [L1] gives $$|\mathbb E[X]|=\left|\int X\,d\mathbb P\right|\le\int |X|\,d\mathbb P=\mathbb E[|X|].$$ [L1, L2]

2.1 If $X\le Y$ almost surely, then $Y-X\ge0$ almost surely. Hence [L1] and [L2] give $$0\le\mathbb E[Y-X]=\mathbb E[Y]-\mathbb E[X],$$ so $\mathbb E[X]\le\mathbb E[Y]$. [step 1.1, L1, L2]

3.1 Steps 1.1, 1.2, and 2.1 prove the three assertions. [step 1.1, step 1.2, step 2.1] ∎
