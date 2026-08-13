---
id: ex-chebyshev-inequality-is-sharp
kind: example
title: "A symmetric two-point distribution attains equality in Chebyshev's inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-finite-probability-space, def-finite-real-random-variable-and-distribution, def-expectation-on-a-finite-probability-space, def-variance-and-covariance, thm-chebyshev-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 8.1 after Example 8.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
pipeline_run: null
---

## Example

For every $\varepsilon>0$, let $X$ be uniform on $\{-\varepsilon,+\varepsilon\}$. At the weak threshold $\varepsilon$, equality holds in Chebyshev's inequality.

## Facts & Assumptions

**Given:** A real $\varepsilon>0$ and the random variable in the Example.

[L1] The two points in a uniform finite space each have probability $1/2$ ([[def-uniform-finite-probability-space]]).

[L2] A finite real random variable and its expectation are defined by finite weighted sums ([[def-finite-real-random-variable-and-distribution]], [[def-expectation-on-a-finite-probability-space]]).

[L3] Variance is the expectation of the squared centred variable ([[def-variance-and-covariance]]).

[L4] Chebyshev states $\mathbb P(|X-\mathbb E[X]|\ge t)\le\operatorname{Var}(X)/t^2$ for $t>0$ ([[thm-chebyshev-inequality]]).

## Verification

**Proof technique:** direct.

1.1 Symmetry gives $\mathbb E[X]=0$, and $X^2=\varepsilon^2$ everywhere, so $\operatorname{Var}(X)=\varepsilon^2$. [L1, L2, L3, algebra]

2.1 The event $|X-\mathbb E[X]|\ge\varepsilon$ is all of the outcome space and has probability $1$. [step 1.1, L1]

3.1 The right side of [L4] at $t=\varepsilon$ is $\varepsilon^2/\varepsilon^2=1$, so equality holds. Positivity of $\varepsilon$ licenses the division. [step 1.1, step 2.1, L4, algebra] ∎
