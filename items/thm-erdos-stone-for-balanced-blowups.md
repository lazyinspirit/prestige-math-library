---
id: thm-erdos-stone-for-balanced-blowups
kind: theorem
title: "Erdős–Stone for balanced blowups: $\\pi(K_r[s])=1-1/(r-1)$ for $r\\ge2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-turan-exact-and-unique, thm-extremal-graph-supersaturation, thm-hypergraph-kovari-sos-turan-bound, def-extremal-number-turan-graph-and-blowup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
    - title: "Reinhard Diestel, Graph Theory, Chapter 7"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch7.pdf"
pipeline_run: null
---

## Statement

For integers $r\ge2$ and $s\ge1$,

$$\pi(K_r[s])=1-\frac1{r-1}.$$

Equivalently,

$$\operatorname{ex}(n,K_r[s])=\left(1-\frac1{r-1}+o(1)\right)\binom n2.$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] For $n\in\mathbb N$ and $r\ge1$, Turán's theorem gives $\operatorname{ex}(n,K_{r+1})=e(T_{n,r})$, and an $n$-vertex $K_{r+1}$-free graph attains equality exactly when it is isomorphic to $T_{n,r}$ ([[thm-turan-exact-and-unique]]).

[F2] For every $\varepsilon>0$, a sufficiently large graph with density at least $\pi(H)+\varepsilon$ contains at least $\delta n^{v(H)}$ injective copies of $H$ ([[thm-extremal-graph-supersaturation]]).

[F3] For fixed integers $r\ge2$ and $s\ge2$, $\operatorname{ex}(n,K^{(r)}_{s,\ldots,s})=O_{r,s}(n^{r-1/s^{r-1}})=o(n^r)$ ([[thm-hypergraph-kovari-sos-turan-bound]]).

[F4] The balanced blowup $H[s]$ replaces each vertex by an independent $s$-set and each edge by all cross edges between the corresponding parts ([[def-extremal-number-turan-graph-and-blowup]]).

## Proof

**Proof technique:** turn many cliques into a complete partite clique hypergraph.

1.1 If $s=1$, the assertion is exactly Turán's theorem for $K_r$. Assume $s\ge2$. The graph $T_{n,r-1}$ contains no $K_r$, hence no $K_r[s]$, and its normalized edge count tends to $1-1/(r-1)$. This gives the lower bound for the density. [given, F1, F4]

1.2 Fix $\varepsilon>0$. A graph with density at least $1-1/(r-1)+\varepsilon$ has, by Turán's theorem and supersaturation for $K_r$, at least $c n^r$ injective embeddings of $K_r$ for all large $n$, for some $c>0$. Each clique supports at most $r!$ such embeddings, so after decreasing $c$ there are at least $c n^r$ distinct $r$-vertex cliques. Make these clique vertex sets the edges of an $r$-uniform hypergraph. [given, F1, F2]

2.1 Hypergraph KST says that, for large $n$, an $r$-graph with $c n^r$ edges contains $K^{(r)}_{s,\ldots,s}$. In the underlying graph every transversal of its $r$ parts is a clique. Given vertices in two distinct parts, extend them by one vertex from each other part; the resulting clique shows their cross edge is present. Thus the original graph contains $K_r[s]$. [step 1.2, given, F3, F4]

3.1 Step 2.1 gives the density upper bound $1-1/(r-1)+\varepsilon$ for every $\varepsilon>0$, while step 1.1 gives the matching lower bound. Hence the limit and the equivalent asymptotic formula follow, including $s=1$. [step 1.1, step 2.1] ∎
