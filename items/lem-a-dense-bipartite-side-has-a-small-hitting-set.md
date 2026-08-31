---
id: lem-a-dense-bipartite-side-has-a-small-hitting-set
kind: lemma
title: "A dense bipartite side has a small hitting set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 4.2"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $A,B$ be disjoint nonempty vertex sets in a graph, and let $x\in(0,1]$.
Assume every vertex of $B$ has at least $x|A|$ neighbours in $A$. Then there is
a set $S\subseteq A$ with $|S|\le \lceil 1/x\rceil$ that meets the
neighbourhood in $A$ of at least half of the vertices of $B$.

## Facts & Assumptions

**Given:** Disjoint nonempty vertex sets $A,B$ in a graph and a real $x\in(0,1]$ such that every $b\in B$ has at least $x|A|$ neighbours in $A$.

[L1] If $S=A$, then every neighbourhood in $A$ is hit; otherwise a uniform $m$-subset of $A$ misses a fixed $b$-neighbourhood with probability at most $(1-x)^m$.

## Proof

**Proof technique:** probabilistic existence.

1.1 If $\lceil 1/x\rceil\ge |A|$, take $S:=A$ and every neighbourhood in $A$ is hit. Otherwise let $m:=\lceil 1/x\rceil<|A|$ and choose a subset $S\subseteq A$ uniformly among all subsets of size $m$. For a fixed vertex $b\in B$, the probability that $S\cap N(b)=\varnothing$ is at most $(1-x)^m\le e^{-xm}\le e^{-1}<1/2$. [L1, given, choose, algebra]

2.1 In the first case every vertex of $B$ is hit. In the second case the expected number of vertices of $B$ whose neighbourhood misses $S$ is less than $|B|/2$, so some choice of $S$ misses fewer than half of $B$. Thus in either case there is a set $S\subseteq A$ with $|S|\le\lceil 1/x\rceil$ that meets the neighbourhood of at least half of the vertices of $B$. [step 1.1, algebra] ∎
