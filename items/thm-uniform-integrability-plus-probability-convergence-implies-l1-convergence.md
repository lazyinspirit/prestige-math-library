---
id: thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence
kind: theorem
title: "Uniform integrability plus convergence in probability implies $L^1$ convergence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-measure, def-convergence-in-probability, def-uniformly-integrable-family, thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 4.6.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $X_n\to X$ in probability and $\{X_n:n\in\mathbb N\}$ is uniformly
integrable, then $X\in L^1(\mathbb P)$ and $X_n\to X$ in $L^1$.

## Facts & Assumptions

**Given:** Integrable real random variables $X_n$, a real random variable $X$, probability convergence, and uniform integrability of $(X_n)$.

[L1] Probability convergence is convergence in measure for the probability
measure ([[def-convergence-in-probability]]).

[L2] On a finite measure space, convergence in measure plus uniform
integrability is equivalent to $L^1$ convergence
([[thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The underlying measure has total mass one, hence is finite; [L1] converts the hypothesis to convergence in measure. [L1]

2.1 Apply the finite-measure reverse implication of [L2] to $(X_n)$. [step 1.1, L2]
It supplies $X\in L^1$ and $\mathbb E|X_n-X|\to0$, namely $L^1$ convergence.
[step 1.1, L2] ∎
