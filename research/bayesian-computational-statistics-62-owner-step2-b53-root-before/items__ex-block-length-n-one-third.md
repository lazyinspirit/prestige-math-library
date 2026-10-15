---
id: ex-block-length-n-one-third
kind: example
title: A block-length sequence in the bootstrap CLT regime
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps: [alg-overlapping-block-resampling]
proof_strategy: direct exponent comparison
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Theorems 2.1 and 2.2"
      url: https://arxiv.org/pdf/1711.01070
---

## Example

For $b_n=\lceil n^{1/3}\rceil$, the two block-length conditions in the moving and tapered block bootstrap theorems are satisfied.

## Verification

**Given:** $b_n=\lceil n^{1/3}\rceil$ and the theorem regime $b_n\to\infty$, $b_n/\sqrt n\to0$.

[F1] [[alg-overlapping-block-resampling]]: A block length is an integer $b_n$ between $1$ and $n$.

1.1 Since $n^{1/3}\le b_n<n^{1/3}+1$, $b_n\to\infty$, and $b_n$ is a positive integer. For every integer $n\ge1$, $n^{1/3}\le n$; since $n$ itself is an integer, taking the least integer above $n^{1/3}$ gives $b_n\le n$. Thus the block length is admissible at every positive sample size. [F1, given, algebra]

2.1 Dividing the same bounds by $\sqrt n$ gives $0\le b_n/\sqrt n<n^{-1/6}+n^{-1/2}\to0$. Thus $b_n^{-1}+b_nn^{-1/2}\to0$. [given, step 1.1, algebra] ∎
