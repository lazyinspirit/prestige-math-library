---
id: cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction
kind: corollary
title: "For every $\\lambda>0$ a bounded number of disjoint $\\epsilon$-restricted sets covers all but $\\lambda|V(G)|$ vertices of an $H$-free graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-rodl-every-h-free-graph-has-a-linear-restricted-set, lem-sparsity-depends-only-on-the-induced-subgraph, def-c-sparse-and-c-restricted-vertex-set, lem-forbidden-induced-subgraph-classes-are-hereditary, lem-induced-freeness-passes-to-induced-subgraphs, def-h-free-and-family-free-graph, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, A. Scott, P. Seymour, and S. Spirkl, Strengthening Rödl's theorem, proof sketch of Theorem 1.3"
      url: "https://arxiv.org/pdf/2105.07370"
pipeline_run: null
---

## Statement

Fix a graph $H$, a real $\epsilon\in(0,\tfrac12)$, and $\lambda>0$. Then there
is an integer $t=t(H,\epsilon,\lambda)$ such that every nonempty $H$-free finite simple
graph $G$ contains pairwise disjoint $\epsilon$-restricted sets
$X_1,\dots,X_s$ for some $s\le t$, whose union misses fewer than
$\lambda|V(G)|$ vertices.

## Facts & Assumptions

**Given:** A graph $H$, reals $\epsilon\in(0,\tfrac12)$ and $\lambda>0$.

[L1] Every induced subgraph of an $H$-free graph is $H$-free ([[lem-forbidden-induced-subgraph-classes-are-hereditary]], [[lem-induced-freeness-passes-to-induced-subgraphs]], [[def-h-free-and-family-free-graph]]).

[L2] Rödl's theorem provides a constant $\delta>0$ such that every nonempty $H$-free graph contains an $\epsilon$-restricted set of size at least $\delta$ times its order ([[cor-rodl-every-h-free-graph-has-a-linear-restricted-set]]).

[L3] Sparsity is internal to induced subgraphs, so a set that is $\epsilon$-restricted in an induced subgraph is also $\epsilon$-restricted in the ambient graph ([[lem-sparsity-depends-only-on-the-induced-subgraph]], [[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $\delta$ be the constant from [L2]. Choose $t$ minimal with $(1-\delta)^t<\lambda$. [L2, choose]

1.2 Starting from $G$, repeatedly apply [L2] to the induced subgraph on the current remainder while that remainder has at least $\lambda|V(G)|$ vertices. By [L1] each remainder is still $H$-free, so this produces pairwise disjoint $\epsilon$-restricted sets $X_1,X_2,\dots$. [L1, L2, choose]

2.1 After each extraction, at least a $\delta$ fraction of the current remainder is removed. Hence after $k$ steps the remainder has size at most $(1-\delta)^k|V(G)|$. In particular, after $t$ steps it has size strictly below $\lambda|V(G)|$ by the choice of $t$. [step 1.1, step 1.2, algebra]

3.1 The process therefore stops after some number $s\le t$ of extractions, and [L3] makes every extracted set $\epsilon$-restricted in the original graph. [step 1.2, step 2.1, L3] ∎
