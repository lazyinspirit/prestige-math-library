---
id: thm-expectation-of-products-of-independent-random-variables
kind: theorem
title: "Expectation factors over a finite product of mutually independent random variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-expectation-by-distribution, def-independence-of-finite-random-variables, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Lemma 1.1.9"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "M. Bucic, Probabilistic Method, Proposition A.15"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

If $(X_i)_{i\in I}$ is a finite mutually independent family of real random variables, then
$$\mathbb E\!\left[\prod_{i\in I}X_i\right]=\prod_{i\in I}\mathbb E[X_i].$$
For $I=\varnothing$, both sides equal $1$. The converse is not asserted.

## Facts & Assumptions

**Given:** A finite mutually independent family $(X_i)_{i\in I}$.

[L1] Expectation can be summed over the finite attained values of a random variable ([[lem-expectation-by-distribution]]).

[L2] Mutual independence factors every finite joint attained-value probability ([[def-independence-of-finite-random-variables]]).

[L3] Finite Fubini interchanges iterated sums over finite products ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Grouping outcomes by the joint values $(x_i)_{i\in I}$ gives $\mathbb E[\prod_iX_i]=\sum_{(x_i)}(\prod_ix_i)\mathbb P(X_i=x_i\text{ for all }i)$. [L1, L3]

1.2 Independence changes the last probability to $\prod_i\mathbb P(X_i=x_i)$. [L2]

2.1 Finite Fubini factors the resulting sum as $\prod_i\sum_{x_i}x_i\mathbb P(X_i=x_i)=\prod_i\mathbb E[X_i]$. For $I=\varnothing$, this calculation is the empty product identity $1=1$. [step 1.1, step 1.2, L1, L3] ∎
