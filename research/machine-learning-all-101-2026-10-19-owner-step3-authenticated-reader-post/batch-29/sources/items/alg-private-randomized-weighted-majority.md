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

Let $k,T$ be positive integers, let $\eta>0$, and let $[k]=\{1,\ldots,k\}$. The input also supplies a full-information loss process: before the round-$t$ action draw, its vector $\ell_t\in[0,1]^k$ is fixed using only the previous transcript and any external randomness, and the vector is revealed after the draw. Put $H_t=([k]\times[0,1]^k)^{t-1}$, with $H_1=\{()\}$, and give $H_t$ its power-set sigma-algebra; these histories have finite length but need not be finite sets. Initialize $w_{1,j}=1$ for each $j\in[k]$. At round $t$, given $h_{t-1}=((a_s,\ell_s))_{s<t}$, compute
$$p_{t,j}=\frac{w_{t,j}}{\sum_{r=1}^k w_{t,r}}.$$
Draw $a_t=j$ with probability $p_{t,j}$, observe the entire vector $\ell_t$, and update $w_{t+1,j}=w_{t,j}\exp(-\eta\ell_t(j))$. Equivalently, the conditional action kernel is $K_t(h_{t-1},A)=\sum_{j\in A}p_{t,j}$ for each $A\subseteq[k]$. The action draw uses fresh randomness independent of the loss process, so its conditional law given the past and the already fixed current loss vector is $K_t$. Return the action transcript $(a_1,\ldots,a_T)$.

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

1.1 By induction on $t$, each $w_{t,j}$ is finite and strictly positive: this holds initially since $w_{1,j}=1$, and each update multiplies such a weight by the finite positive number $\exp(-\eta\ell_t(j))$ from [F1]. Since $[k]$ is finite and nonempty, $Z_t:=\sum_{r=1}^k w_{t,r}$ is finite and strictly positive, so every $p_{t,j}$ is defined and nonnegative. [given, F1, construct, induction]

2.1 The finite sum of the action probabilities is $\sum_{j=1}^k p_{t,j}=Z_t/Z_t=1$. For each history $h$, define $\mu_t^h(A)=\sum_{j\in A}p_{t,j}(h)$ for $A\subseteq[k]$. This is countably additive because a pairwise disjoint family of subsets of the finite set $[k]$ has only finitely many nonempty members, and $\mu_t^h([k])=1$. For each event $A$, the map $h\mapsto\mu_t^h(A)$ is measurable since $H_t$ has its power-set sigma-algebra. Hence $K_t$ is a probability kernel by [F3] and [F4]. [F2, F3, F4, step 1.1, algebra] ∎

## Source notes

This is the full-information finite-action procedure. Its regret and privacy claims are proved separately; this definition alone makes no regret or privacy assertion.
