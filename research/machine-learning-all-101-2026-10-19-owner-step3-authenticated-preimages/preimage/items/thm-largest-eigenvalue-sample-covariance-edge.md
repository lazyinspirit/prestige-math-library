---
id: thm-largest-eigenvalue-sample-covariance-edge
kind: theorem
title: "Almost-sure limit of the largest sample-covariance eigenvalue"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - lem-largest-sample-covariance-eigenvalue-upper-bound
  - lem-largest-sample-covariance-eigenvalue-lower-bound
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yin, Bai, and Krishnaiah, On the Limit of the Largest Eigenvalue of the Large Dimensional Sample Covariance Matrix, Theorem 3.1"
      url: "https://link.springer.com/content/pdf/10.1007/BF00353874.pdf"
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 5, §5.2"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid array of real random variables with mean zero, variance one and finite fourth moment. For each $n$, let $X_n=(\xi_{ij})_{1\le i\le n,1\le j\le p_n}$ and suppose $p_n/n\to\gamma\in(0,\infty)$. For $S_n=X_n^{\mathsf T}X_n/n$, the largest eigenvalue satisfies
$$\lambda_{\max}(S_n)\longrightarrow(1+\sqrt\gamma)^2\quad\text{almost surely}.$$

## Statement references

Yin, Bai, and Krishnaiah, Theorem 3.1 and §4, printed pp. 517–520 ([complete paper PDF](https://link.springer.com/content/pdf/10.1007/BF00353874.pdf)).

Bai and Silverstein, Theorem 5.10, printed pp. 105–112 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

[F1] [[lem-largest-sample-covariance-eigenvalue-upper-bound]] gives $\limsup\lambda_{\max}(S_n)\le(1+\sqrt\gamma)^2$.

[F2] [[lem-largest-sample-covariance-eigenvalue-lower-bound]] gives the independent reverse inequality for the liminf.

## Proof

**Given:** The nested iid array and hypotheses in the Statement.

1.1 The two suppliers apply to exactly the same upper-left blocks, law, normalization and aspect ratio as in the Statement. Intersect their probability-one events to obtain the upper bound in F1 and lower bound in F2 simultaneously. [given, F1, F2]

2.1 On this event the liminf and limsup of $\lambda_{\max}(S_n)$ coincide with $(1+\sqrt\gamma)^2$. Thus the sequence converges to that value almost surely. [step 1.1, algebra] ∎
