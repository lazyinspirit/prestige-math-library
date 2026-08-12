---
id: thm-linearity-of-expectation
kind: theorem
title: "Expectation is linear for every finite family of random variables, without any independence hypothesis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-on-a-finite-probability-space, lem-finite-sum-laws, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Lemma 3.1.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Theorem 6.2"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
pipeline_run: null
---

## Statement

For a finite family of real random variables $(X_i)_{i\in I}$ on one finite probability space and real scalars $(a_i)_{i\in I}$,
$$\mathbb E\!\left[\sum_{i\in I}a_iX_i\right]=\sum_{i\in I}a_i\mathbb E[X_i].$$
No independence hypothesis is required. For $I=\varnothing$, both sides are $0$.

## Facts & Assumptions

**Given:** A finite probability space, random variables $X_i$, and real scalars $a_i$, indexed by a finite set $I$.

[L1] Expectation is a finite weighted sum over outcomes ([[def-expectation-on-a-finite-probability-space]]).

[L2] Finite sums are additive and compatible with real scaling ([[lem-finite-sum-laws]]).

[L3] Finite Fubini permits the two finite summations to be interchanged ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Expanding the left side gives $\sum_{\omega\in\Omega}\sum_{i\in I}a_iX_i(\omega)w(\omega)$. [L1]

2.1 Finite Fubini and distributivity turn step 1.1 into $\sum_{i\in I}a_i\sum_{\omega\in\Omega}X_i(\omega)w(\omega)=\sum_{i\in I}a_i\mathbb E[X_i]$. [step 1.1, L2, L3, algebra]

3.1 The calculation uses no independence identity. If $I=\varnothing$, the two sums in step 2.1 are empty and equal $0$. [step 2.1] ∎
