---
id: cor-chebyshev-inequality-for-random-variables
kind: corollary
title: "Chebyshev's inequality for random variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-moments-variance-and-covariance, cor-markov-inequality-for-random-variables]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "J. R. Norris, Probability and Measure, Section 4.2"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

If $X$ is a square-integrable real random variable and $a>0$, then
$$\mathbb P(|X-\mathbb E[X]|\ge a)\le\frac{\operatorname{Var}(X)}{a^2}.$$

## Facts & Assumptions

**Given:** A square-integrable real random variable $X$ and a real number
$a>0$.

[L1] Variance is the expectation of the squared centered variable
([[def-moments-variance-and-covariance]]).

[L2] Markov's inequality applies to every nonnegative random variable
([[cor-markov-inequality-for-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 The random variable $Y:=(X-\mathbb E[X])^2$ is nonnegative, and $$\{Y\ge a^2\}=\{|X-\mathbb E[X]|\ge a\}.$$ [given, algebra]

2.1 Applying [L2] to $Y$ and using [L1] gives $$\mathbb P(|X-\mathbb E[X]|\ge a)=\mathbb P(Y\ge a^2)\le\frac{\mathbb E[Y]}{a^2}=\frac{\operatorname{Var}(X)}{a^2}.$$ [step 1.1, L1, L2] ∎
