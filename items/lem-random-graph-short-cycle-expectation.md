---
id: lem-random-graph-short-cycle-expectation
kind: lemma
title: "The expected number of cycles of length at most $\\ell$ in $G(n,p)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-erdos-renyi-random-graph, def-graph-distance-and-girth, def-graph-walk-trail-path-and-cycle, lem-random-graph-fixed-pattern-probability, def-factorial-and-falling-factorial, thm-number-of-injections, lem-indicator-expectation-and-products, thm-linearity-of-expectation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, proof of Theorem 4.2.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, proof of Theorem 6.3"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

Let $X_{\le\ell}$ be the number of cycles of lengths $3$ through $\ell$ in $G(n,p)$. Then
$$\mathbb E[X_{\le\ell}]=\sum_{r=3}^{\ell}\frac{n^{\underline r}}{2r}p^r\le\sum_{r=3}^{\ell}\frac{n^rp^r}{2r}.$$
If $\ell<3$, both sums are empty and equal zero.

## Facts & Assumptions

**Given:** Naturals $n,\ell$ and $p\in[0,1]$.

[L1] $G(n,p)$ has mutually independent Bernoulli edge coordinates ([[def-erdos-renyi-random-graph]]).

[L2] A cycle is a closed walk of length at least $3$ whose vertices, apart from the coinciding endpoints, are distinct ([[def-graph-walk-trail-path-and-cycle]]), and the girth is the least length of a cycle ([[def-graph-distance-and-girth]]).

[L3] A prescribed set of $r$ present edges has probability $p^r$ ([[lem-random-graph-fixed-pattern-probability]]).

[L4] The falling factorial $n^{\underline r}$ is defined by $n^{\underline0}=1$ and $n^{\underline{k+1}}=n^{\underline k}(n-k)$ ([[def-factorial-and-falling-factorial]]), and for finite sets $|A|=n$, $|B|=r$ the injections $B\to A$ number $n^{\underline r}$ ([[thm-number-of-injections]]). An ordered list of $r$ distinct vertices is such an injection, so there are $n^{\underline r}$ of them.

[L5] Indicators count occurrences and expectation is linear ([[lem-indicator-expectation-and-products]], [[thm-linearity-of-expectation]]).

## Proof

**Proof technique:** direct.

1.1 An undirected $r$-cycle is represented by $2r$ ordered lists of its vertices, one for each starting point and direction. Hence there are $n^{\underline r}/(2r)$ labelled $r$-cycles. [L2, L4, algebra]

1.2 In $G(n,p)$, each such cycle occurs with probability $p^r$. [L1, L3]

2.1 Sum its indicator over all cycles and all $3\le r\le\ell$. By [L5], the expectation is the first displayed sum. [step 1.1, step 1.2, L5]

3.1 Since $n^{\underline r}\le n^r$, the stated upper bound follows. When $\ell<3$ the index set is empty. The formula includes $p=0,1$. [step 2.1, algebra] ∎
