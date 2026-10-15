---
id: ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy
kind: example
title: 'Uniform endpoint: ordinary bootstrap failure and the m-out-of-n remedy'
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-m-out-of-n-bootstrap-and-subsampling
  - thm-ordinary-bootstrap-fails-for-uniform-endpoint
  - thm-m-out-of-n-resampling-valid-for-uniform-endpoint
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take IID $U(0,1)$ observations and estimate the unknown upper endpoint $1$ by the sample maximum $M_n$. Compare the ordinary bootstrap root $n(M_n^*-M_n)$ with the size-$m$ roots $m(M_{m,n}^*-M_n)$ and $m(M_I-M_n)$ when $m\to\infty$ and $m/n\to0$.

## Facts & Assumptions

**Given:** The IID uniform sample and the three roots in the statement.

[F1] [[thm-ordinary-bootstrap-fails-for-uniform-endpoint]], Proof step 1.2: the unique sample maximum is selected by at least one ordinary bootstrap draw with conditional probability $1-(1-1/n)^n\to1-e^{-1}$, giving the bootstrap root a conditional atom at zero.

[F2] [[thm-m-out-of-n-resampling-valid-for-uniform-endpoint]], Proof step 1.1: for every sample size $k$, the actual root $k(M_k-1)$ has CDF $0$ for $x<-k$, $(1+x/k)^k$ for $-k\le x<0$, and $1$ for $x\ge0$; these CDFs converge to the continuous limit $F(x)=e^x$ for $x<0$ and $1$ for $x\ge0$.

[F3] [[def-m-out-of-n-bootstrap-and-subsampling]]: With-replacement and without-replacement resampling are distinct laws, and the resampled root uses the size-$m$ normalization.

[F4] [[thm-m-out-of-n-resampling-valid-for-uniform-endpoint]], Statement: for either resampling method, the conditional CDF converges uniformly in probability to $F$ when $m\to\infty$ and $m/n\to0$.

## Verification

1.1 By [F3], the ordinary root is $n(M_n-1)$ and its bootstrap root is centered at $M_n$ with the same $n$-scale. By [F1], the conditional bootstrap root has an atom at zero with limiting mass $1-e^{-1}$; by [F2], the sampling-root law converges to the continuous CDF $F$. [F1, F2, F3, given]

1.2 For the smaller-resample methods the corresponding endpoint root is $m(M_m-1)$, and the conditional roots are centered at the full-sample maximum but scaled by $m$. [F3, given]

2.1 By [F4], for either replacement design the conditional CDF converges uniformly in probability to the CDF of the actual size-$m$ sampling-root limit, so the smaller-resample approximation is first-order valid in this model. This conclusion is specific to the displayed uniform endpoint model and does not give uniform coverage over other laws. [F2, F4, step 1.2] ∎
