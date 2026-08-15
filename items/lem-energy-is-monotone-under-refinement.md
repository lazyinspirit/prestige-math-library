---
id: lem-energy-is-monotone-under-refinement
kind: lemma
title: "Energy lies in $[0,1]$ and cannot decrease under refinement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-energy-of-a-vertex-partition, lem-cauchy-schwarz-for-finite-random-variables]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Lemma 2.1.12"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

For every vertex partition $\mathcal P$ of a finite graph,
$$0\le q(\mathcal P)\le1.$$
If $\mathcal Q$ refines $\mathcal P$, then
$$q(\mathcal Q)\ge q(\mathcal P).$$

## Facts & Assumptions

**Given:** A finite graph and vertex partitions $\mathcal P,\mathcal Q$ with $\mathcal Q$ refining $\mathcal P$.

[L1] The energy is the weighted mean of the squares of the densities of ordered pairs of parts ([[def-energy-of-a-vertex-partition]]).

[L2] For a finite random variable $Z$, Cauchy--Schwarz gives $(\mathbb E Z)^2\le\mathbb E(Z^2)$ ([[lem-cauchy-schwarz-for-finite-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 Every density belongs to $[0,1]$, and the nonnegative weights $|A||B|/n^2$ in [L1] sum to $1$ when the graph has order $n>0$. Thus $0\le q(\mathcal P)\le1$; the null-graph convention gives the same conclusion when $n=0$. [L1, algebra]

1.2 Fix $A,B\in\mathcal P$. Choose an ordered pair $(x,y)$ uniformly from $A\times B$, and let $Z$ be the density between the two $\mathcal Q$-parts containing $x$ and $y$. Double-counting the relevant ordered edge incidences gives $\mathbb E Z=d(A,B)$. [given, L1, algebra]

2.1 By [L2], the weighted mean square of the refined densities inside $A\times B$ is at least $d(A,B)^2$. [step 1.2, L2]

3.1 Multiply step 2.1 by $|A||B|/n^2$ and sum over all ordered $A,B\in\mathcal P$. The two sides become $q(\mathcal Q)$ and $q(\mathcal P)$ by [L1], proving monotonicity. [step 2.1, L1, algebra] ∎
