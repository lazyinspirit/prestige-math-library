---
id: cor-cauchy-schwarz-for-random-variables
kind: corollary
title: "Cauchy-Schwarz for random variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-holder-inequality-for-random-variables, cor-cauchy-schwarz-inequality-for-l-two]
proof_strategy: direct
verification:
  audited: 2026-09-04
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

If $X,Y\in L^2(\mathbb P)$ are real random variables, then
$$\mathbb E[|XY|]\le\big(\mathbb E[X^2]\big)^{1/2}\big(\mathbb E[Y^2]\big)^{1/2}.$$

Equality holds if and only if at least one of $X,Y$ is zero almost surely, or
there is a constant $c>0$ with
$$|X|^2=c\,|Y|^2\qquad\mathbb P\text{-almost surely}.$$

## Facts & Assumptions

**Given:** Real random variables $X,Y\in L^2(\mathbb P)$.

[L1] Holder's inequality on a probability space specializes to
$$\mathbb E[|XY|]\le\|X\|_2\|Y\|_2$$
([[cor-holder-inequality-for-random-variables]]).

[L2] The $L^2$ Cauchy-Schwarz equality criterion is already proved for general
measure spaces ([[cor-cauchy-schwarz-inequality-for-l-two]]).

## Proof

**Proof technique:** direct.

1.1 Step [L1] at $p=q=2$ gives $$\mathbb E[|XY|]\le\|X\|_2\|Y\|_2=\big(\mathbb E[X^2]\big)^{1/2}\big(\mathbb E[Y^2]\big)^{1/2}.$$ [L1]

2.1 The equality clause is exactly the probability-measure specialization of [L2]. [step 1.1, L2] ∎
