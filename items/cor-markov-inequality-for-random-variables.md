---
id: cor-markov-inequality-for-random-variables
kind: corollary
title: "Markov's inequality for random variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-chebyshev-markov-inequality-for-the-integral]
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

If $X:\Omega\to[0,+\infty]$ is a nonnegative random variable on a probability
space and $a>0$, then
$$\mathbb P(X\ge a)\le\frac{\mathbb E[X]}{a}.$$

## Facts & Assumptions

**Given:** A nonnegative random variable $X$ and a real number $a>0$.

[L1] Expectation is integration against the probability measure
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[L2] The integral Markov inequality states
$$\mu(\{f\ge t\})\le t^{-1}\int f\,d\mu$$
for nonnegative measurable $f$ and $t>0$
([[thm-chebyshev-markov-inequality-for-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the probability measure $\mathbb P$, the function $X$, and the threshold $a>0$. Rewriting the integral by [L1] gives $$\mathbb P(X\ge a)\le\frac{\mathbb E[X]}{a}.$$ [L1, L2]

2.1 Step 1.1 is exactly Markov's inequality for random variables. [step 1.1] ∎
