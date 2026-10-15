---
id: alg-overlapping-block-resampling
kind: algorithm
title: Overlapping block-index resampling
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 2.2"
      url: https://arxiv.org/pdf/1711.01070
    - title: "A. DasGupta, Asymptotic Theory of Statistics and Probability, Section 29.18, Block Bootstrap Methods, pp. 478-479"
      url: https://www.stat.purdue.edu/~dasgupta/bootstrap.pdf
---

## Definition

**Input:** a finite sequence $x_1,\ldots,x_n$ in a measurable space, with $n\ge1$, and an integer block length $b$ satisfying $1\le b\le n$. Set $N=n-b+1$ and $k=\lceil n/b\rceil$.

**Randomization:** draw $J_1,\ldots,J_k$ independently and uniformly from $\{1,\ldots,N\}$.

**Output:** in order $s=1,\ldots,k$, append the block $x_{J_s},x_{J_s+1},\ldots,x_{J_s+b-1}$, then retain the first $n$ entries of the concatenation. Thus the final selected block is truncated to its first $r=n-b\lfloor n/b\rfloor$ entries when $r>0$. Conditional expectation given the input sequence means expectation over the indices $J_s$ alone.
