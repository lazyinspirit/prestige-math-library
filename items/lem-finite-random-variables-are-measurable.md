---
id: lem-finite-random-variables-are-measurable
kind: lemma
title: "Finite random variables are measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-random-element-and-real-random-variable, def-finite-real-random-variable-and-distribution, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "J. R. Norris, Probability and Measure, Section 2.1"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $(\Omega,w)$ be a finite probability space, and regard it as the probability
space $(\Omega,\mathcal P(\Omega),\mathbb P_w)$ from
[[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]].
Then every function $X:\Omega\to\mathbb R$ is a real random variable.

In particular, the published finite definition
[[def-finite-real-random-variable-and-distribution]] is exactly the
measure-theoretic definition on that full-power-set probability space.

## Facts & Assumptions

**Given:** A finite probability space $(\Omega,w)$ and a function
$X:\Omega\to\mathbb R$.

[L1] The theorem on finite probability spaces identifies $(\Omega,w)$ with a
probability measure on $(\Omega,\mathcal P(\Omega))$
([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]]).

[L2] A real random variable is a measurable map from the sample-space
sigma-algebra to $(\mathbb R,\mathcal B(\mathbb R))$
([[def-random-element-and-real-random-variable]]).

[L3] On a finite probability space, a real random variable is simply a function
$\Omega\to\mathbb R$ ([[def-finite-real-random-variable-and-distribution]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every subset of $\Omega$ is measurable. Hence for every Borel set $B\subseteq\mathbb R$, the preimage $X^{-1}(B)$ is a subset of $\Omega$, so it lies in $\mathcal P(\Omega)$. Therefore $X$ is measurable. [L1, L2]

2.1 Step 1.1 proves that every finite random variable in the sense of [L3] is a real random variable in the sense of [L2], so the two notions agree exactly on finite full-power-set probability spaces. [step 1.1, L2, L3] ∎
