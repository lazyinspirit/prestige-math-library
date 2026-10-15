---
id: lem-k-sample-null-centering
kind: lemma
title: Exact null centering of the K-sample block bootstrap
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - alg-k-sample-null-constrained-block-bootstrap
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 3.2
      url: https://arxiv.org/pdf/1711.01070
dependency_level: 3
---

## Statement

For fixed data and either mode of [[alg-k-sample-null-constrained-block-bootstrap]], every pseudo-observation in every series has conditional expectation $\bar Y_P$. Consequently, for each $i$,

$$E^*\bar Y_i^*=\bar Y_P,$$

so the conditional mean functions of the $K$ pseudo-series are equal.

## Facts & Assumptions

**Given:** The fixed observed series, the block lengths and the independent uniform block-index randomization in the Statement.

[F1] [[alg-k-sample-null-constrained-block-bootstrap]]: At each series $i$ and within-block position $r$, the algorithm subtracts $c_{i,r}=N_i^{-1}\sum_{j=1}^{N_i}A_{i,j,r}$ from a uniformly selected $A_{i,J_{i,s},r}$, then adds the same pooled mean $\bar Y_P$.

## Proof

**Given:** The data and pseudo-series construction in the Statement.

1.1 Fix $i,s,r$. Uniformity of $J_{i,s}$ gives $E^*A_{i,J_{i,s},r}-c_{i,r}=\frac1{N_i}\sum_{j=1}^{N_i}A_{i,j,r}-c_{i,r}=0$. Therefore $E^*Y^*_{i,(s-1)b_i+r}=\bar Y_P$, including positions in a truncated final block. [F1, given, algebra]

2.1 The bootstrap mean $\bar Y_i^*$ is the average of exactly $n_i$ such pseudo-observations. Linearity of the finite conditional expectation gives $E^*\bar Y_i^*=\bar Y_P$ for every $i$. The common conditional mean proves the stated null imposition. [step 1.1, algebra] ∎
