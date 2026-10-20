---
id: alg-private-randomized-weighted-majority
kind: algorithm
title: "Randomized weighted majority with full information"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-measurable-space
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-real-exponential-function-and-e
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used for the finite-round procedure.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy, Chapter 11 §11.2"
      url: "https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf"
---

## Definition

Let $k,T$ be positive integers, let $\eta>0$, and let $[k]=\{1,\ldots,k\}$. A loss vector at round $t$ is $\ell_t=(\ell_t(1),\ldots,\ell_t(k))\in[0,1]^k$. Initialize $w_{1,j}=1$ for each $j\in[k]$. At round $t=1,\ldots,T$, choose action $a_t=j$ with probability
$$p_{t,j}=\frac{w_{t,j}}{\sum_{r=1}^k w_{t,r}}, \qquad w_{t,j}=\exp\!\left(-\eta\sum_{s<t}\ell_s(j)\right).$$
The empty sum at $t=1$ is zero. After drawing $a_t$, observe the entire vector $\ell_t$ and update $w_{t+1,j}=w_{t,j}\exp(-\eta\ell_t(j))$. Return the full transcript $(a_1,\ldots,a_T)$. Each action draw is fresh conditional on the loss history and previous actions. The finite history spaces carry their power-set sigma-algebras.

## Definition references

[[def-real-exponential-function-and-e|The real exponential function]]

[[def-probability-measure|Probability measures on finite action spaces]]

[[def-measure-kernel-and-probability-kernel|Probability kernels for the conditional action laws]]

Cynthia Dwork and Aaron Roth, *The Algorithmic Foundations of Differential Privacy*, Algorithm 15, printed pp. 223–224, and Algorithm 16, printed pp. 224–225: [full text](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf).

## Facts & Assumptions

**Given:** Positive integers $k,T$, an update parameter $\eta>0$, and full-information loss vectors in $[0,1]^k$.

[F1] The real exponential is finite at every real input and is strictly positive there. [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]]

[F2] A measurable space is a set equipped with a sigma-algebra; a power-set sigma-algebra makes every subset measurable. [[def-measurable-space]]

[F3] A probability measure has total mass one. [[def-probability-measure]]

[F4] A probability kernel has probability-measure sections and measurable event evaluations. [[def-measure-kernel-and-probability-kernel]]

## Verification

**Given:** The hypotheses and procedure in the Definition.

1.1 For each $t$ and $j$, the sum $\sum_{s<t}\ell_s(j)$ is a finite real number. By [F1], every weight $w_{t,j}$ is finite and strictly positive. Since $[k]$ is finite and nonempty, $Z_t:=\sum_{r=1}^k w_{t,r}$ is finite and strictly positive, so every $p_{t,j}$ is defined and nonnegative. [given, F1, construct]

2.1 The finite sum of the action probabilities is $\sum_{j=1}^k p_{t,j}=Z_t/Z_t=1$. For each fixed loss input, every history-to-event map is a function on a finite history space with its power-set sigma-algebra; for each fixed history, the action law is the probability measure assigning mass $p_{t,j}$ to $j$. Thus the conditional action laws meet both conditions of [F4]. [F2, F3, F4, step 1.1, algebra] ∎

## Source notes

This is the full-information finite-action procedure. Its regret and privacy claims are proved separately; this definition alone makes no regret or privacy assertion.
