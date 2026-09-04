---
id: cor-holder-inequality-for-random-variables
kind: corollary
title: "Holder's inequality for random variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-holder-inequality-for-integrals]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "J. R. Norris, Probability and Measure, Theorem 4.4.1"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $p,q\in[1,\infty]$ be conjugate exponents. If $X$ and $Y$ are real random
variables in the spaces named by the corresponding clause of
[[thm-holder-inequality-for-integrals]], then
$$\mathbb E[|XY|]\le\|X\|_p\|Y\|_q.$$

In particular, $XY$ is integrable.

## Facts & Assumptions

**Given:** Real random variables $X,Y$ and conjugate exponents $p,q$ as in the
Statement.

[L1] Expectation is integration against the probability measure
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[L2] Holder's integral inequality, including the endpoint cases, holds on every
measure space ([[thm-holder-inequality-for-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the measure space $(\Omega,\mathcal F,\mathbb P)$. Rewriting the left-hand side with [L1] gives $$\mathbb E[|XY|]=\int |XY|\,d\mathbb P\le\|X\|_p\|Y\|_q.$$ [L1, L2]

2.1 The same theorem [L2] already states that the right-hand side is finite in every allowed case, so $XY$ is integrable. [step 1.1, L2] ∎
