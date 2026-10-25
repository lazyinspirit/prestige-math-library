---
id: cor-expectation-linearity-monotonicity-and-modulus-bound
kind: corollary
title: "Linearity, monotonicity, and the modulus bound for expectation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality, thm-the-lebesgue-integral-respects-almost-everywhere-equality, prop-closure-properties-of-measurable-functions-used-by-the-integral]
proof_strategy: direct
verification:
  repair: research/statistical-models-experiments-62-published-ae-order-expectation-repair.json
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

[L1] Expectation is the Lebesgue integral against the probability measure ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[L2] The Lebesgue integral is linear on $L^1$, the nonnegative integral is monotone, and the modulus of an integral is bounded by the integral of the modulus ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-integral-triangle-inequality]]).

[L3] Almost-everywhere equal integrable functions have equal integrals on every measurable event. ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[L4] The positive part of a measurable real function is measurable. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

## Proof

**Proof technique:** direct.

1.1 Rewriting expectation as the integral by [L1], linearity in [L2] gives $$\mathbb E[aX+bY]=a\,\mathbb E[X]+b\,\mathbb E[Y].$$ [L1, L2]

1.2 Applying the integral triangle inequality from [L2] after [L1] gives $$|\mathbb E[X]|=\left|\int X\,d\mathbb P\right|\le\int |X|\,d\mathbb P=\mathbb E[|X|].$$ [L1, L2]

2.1 If $X\le Y$ almost surely, put $D=Y-X$, which is integrable by [L2]. Its positive part $D^+=\max\{D,0\}$ is measurable by [L4] and integrable because $D^+\le|D|$. Since $D\ge0$ almost surely, $D^+=D$ almost surely, so [L3] gives $\int D\,d\mathbb P=\int D^+\,d\mathbb P\ge0$, where the last inequality concerns a pointwise nonnegative integrand. By [L1] and step 1.1, $0\le\mathbb E[Y-X]=\mathbb E[Y]-\mathbb E[X]$, so $\mathbb E[X]\le\mathbb E[Y]$. [step 1.1, L1, L2, L3, L4]

3.1 Steps 1.1, 1.2, and 2.1 prove the three assertions. [step 1.1, step 1.2, step 2.1] ∎
