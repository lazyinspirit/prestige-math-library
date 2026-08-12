---
id: ex-triangle-count-in-the-erdos-renyi-random-graph
kind: example
title: "The expected number of triangles in $G(n,p)$ is $\\binom n3p^3$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-erdos-renyi-random-graph, lem-random-graph-fixed-pattern-probability, lem-indicator-expectation-and-products, thm-linearity-of-expectation, def-binomial-coefficient, def-variance-and-covariance, thm-variance-of-a-finite-sum]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Chapters 1 and 3"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Example

Let $T$ be the number of triangles in $G(n,p)$. Then
$$\mathbb E[T]=\binom n3p^3,$$
and
$$\operatorname{Var}(T)=\binom n3(p^3-p^6)+2\binom n2\binom{n-2}2(p^5-p^6).$$

## Facts & Assumptions

**Given:** The random graph $G(n,p)$ and its triangle count $T$.

[L1] $G(n,p)$ has independent Bernoulli edge coordinates ([[def-erdos-renyi-random-graph]]).

[L2] A prescribed set of $r$ present edges has probability $p^r$ ([[lem-random-graph-fixed-pattern-probability]]).

[L3] Indicators count occurrences and expectation is linear ([[lem-indicator-expectation-and-products]], [[thm-linearity-of-expectation]]).

[L4] There are $\binom n3$ vertex triples and $\binom n2$ vertex pairs ([[def-binomial-coefficient]]).

[L5] Variance and covariance obey their centred-product definitions, and the variance of a finite sum is the sum of individual variances plus twice the unordered pairwise covariances ([[def-variance-and-covariance]], [[thm-variance-of-a-finite-sum]]).

## Verification

**Proof technique:** direct.

1.1 Write $T=\sum_QI_Q$, with $Q$ ranging over three-element vertex sets. Each $I_Q$ requires three present edges and has expectation $p^3$, so $\mathbb E[T]=\binom n3p^3$. [L2, L3, L4]

1.2 Each indicator has variance $p^3-p^6$. Two distinct triangles are independent unless they share an edge; if they share an edge, their joint occurrence requires five edges and their covariance is $p^5-p^6$. [L1, L2, L5, algebra]

1.3 An unordered pair of triangles sharing an edge is determined by the common edge and the two distinct extra vertices, so there are $\binom n2\binom{n-2}2$ such pairs. [L4]

2.1 Sum the individual variances and twice the unordered covariances to obtain the formula. For $n<3$ all relevant binomial coefficients vanish; for $p=0,1$ the variance is zero. [step 1.1, step 1.2, step 1.3, L5] ∎
