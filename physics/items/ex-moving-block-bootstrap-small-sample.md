---
id: ex-moving-block-bootstrap-small-sample
kind: example
title: A finite moving-block bootstrap calculation
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [alg-moving-block-bootstrap]
proof_strategy: direct finite enumeration of block positions
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 2.2"
      url: https://arxiv.org/pdf/1711.01070
    - title: "A. DasGupta, Asymptotic Theory of Statistics and Probability, Section 29.18, Block Bootstrap Methods, pp. 478-479"
      url: https://www.stat.purdue.edu/~dasgupta/bootstrap.pdf
---

## Example

Apply [[alg-moving-block-bootstrap]] to the scalar data $0,1,2,3$ with block length $b=2$. There are three overlapping blocks, $(0,1),(1,2),(2,3)$, and two independent uniform block starts are drawn and concatenated.

## Verification

**Given:** The four data values and block length in the Example.

[F1] [[alg-moving-block-bootstrap]]: A length-two moving block starts at one of the three positions uniformly; two such starts are sampled independently and the concatenation has length four.

1.1 At the first position of a selected block, the conditional average over starts is $(0+1+2)/3=1$. At the second position it is $(1+2+3)/3=2$. [F1, given, algebra]

2.1 The output mean is the average of two first-position values and two second-position values, so its conditional expectation is $(1+2)/2=3/2$, which equals the observed sample mean. The resampled blocks preserve each adjacent pair inside its chosen block; only the join between blocks can alter adjacency. [step 1.1, given, algebra] ∎
