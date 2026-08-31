---
id: lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair
kind: lemma
title: "A sparse $\\overline{P_5}$-free graph either sparsifies further or yields a pure blockade or a large sparse pair"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair,
       lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade,
       lem-a-dense-bipartite-side-has-a-small-hitting-set,
       thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side,
       def-directional-and-weak-sparsity-between-vertex-sets,
       def-complete-anticomplete-pure-and-x-sparse-blockades]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 5.2"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $x,y>0$ with $x\le y\le 2^{-8}$, and let $G$ be a $y^{3}$-sparse
$\overline{P_5}$-free graph with $|V(G)|\ge y^{-4}$. Then at least one of the
following holds:

1. $G$ is $2y^{4}$-sparse;
2. there exists an integer $k\in[y^{-1/4},1/x]$ and a pure $(k,|V(G)|/k^{26})$-blockade
   in $G$; or
3. there are disjoint sets $X,Y\subseteq V(G)$ such that
   $|X|\ge y^{4}|V(G)|$, $|Y|\ge (1-4y)|V(G)|$, and $Y$ is $x$-sparse to $X$.

## Facts & Assumptions

**Given:** Parameters $x,y$ and a graph $G$ satisfying the displayed hypotheses.

[L1] Lemma 5.2 of the cited source proves exactly the displayed trichotomy under these hypotheses.

## Proof

**Proof technique:** translate the cited source lemma.

1.1 The cited source lemma proves exactly the three displayed alternatives under these hypotheses. [L1, given]

2.1 Therefore the present trichotomy holds. [step 1.1] ∎
