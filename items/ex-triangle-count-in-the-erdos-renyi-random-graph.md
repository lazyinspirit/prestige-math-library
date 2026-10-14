---
id: ex-triangle-count-in-the-erdos-renyi-random-graph
kind: example
title: "The expected number of triangles in $G(n,p)$ is $\\binom n3p^3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-erdos-renyi-random-graph, lem-random-graph-fixed-pattern-probability, lem-indicator-expectation-and-products, thm-linearity-of-expectation, def-binomial-coefficient, def-variance-and-covariance]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  repair: research/mathematical-statistics-foundations-37-owner-r6-variance-ex-triangle-count-in-the-erdos-renyi-random-graph-repair.json
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

[L5] On the finite random-graph probability space, variance and covariance are the expectations of the centered square and centered product. ([[def-variance-and-covariance]])

## Verification

**Proof technique:** direct.

1.1 Write $T=\sum_QI_Q$, with $Q$ ranging over three-element vertex sets. Each $I_Q$ requires three present edges and has expectation $p^3$, so $\mathbb E[T]=\binom n3p^3$. [L2, L3, L4]

1.2 Each indicator has variance $p^3-p^6$. Two distinct triangles are independent unless they share an edge; if they share an edge, their joint occurrence requires five edges and their covariance is $p^5-p^6$. [L1, L2, L5, algebra]

1.3 An unordered pair of triangles sharing an edge is determined by the common edge and the two distinct extra vertices, so there are $\binom n2\binom{n-2}2$ such pairs. [L4]

1.4 Put $Y_Q=I_Q-\mathbb E I_Q$. By finite linearity [L3], $T-\mathbb ET=\sum_QY_Q$. Expanding this finite square and applying [L3] gives
$$\operatorname{Var}(T)=\mathbb E\left(\sum_QY_Q\right)^2=\sum_Q\mathbb EY_Q^2+2\sum_{\{Q,R\}:Q\ne R}\mathbb E[Y_QY_R],$$
where the second sum is over unordered pairs of distinct triangles. By [L5] these terms are respectively the individual variances and pairwise covariances. Substituting their values from step 1.2 and their counts from steps 1.1 and 1.3 proves the displayed variance formula. For $n<3$ the triangle family and the relevant pair counts are empty, so the expectation and variance are zero; for $p=0,1$ each variance contribution is zero. [step 1.1, step 1.2, step 1.3, L3, L5, algebra] ∎
