---
id: lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair
kind: lemma
title: "A sparse $\\overline{P_5}$-free graph has a large nearly covered sparse pair"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-dense-bipartite-side-has-a-small-hitting-set,
       def-directional-and-weak-sparsity-between-vertex-sets,
       def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 5.2.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $x,y>0$ with $x\le y\le 2^{-8}$, and let $G$ be a $y^{3}$-sparse
$\overline{P_5}$-free graph with $|V(G)|\ge y^{-4}$. Suppose that $G$ is not
$2y^{4}$-sparse, and that there do not exist disjoint sets $X,Y\subseteq V(G)$
such that

$$ |X|\ge y^{4}|V(G)|,\qquad |Y|\ge (1-4y)|V(G)|, $$

and $Y$ is $x$-sparse to $X$. Then there exist disjoint sets
$A,B\subseteq V(G)$ such that:

1. $|A|\ge (1-3y)|V(G)|$ and $|B|\ge y^{4}|V(G)|$;
2. $A$ is $y^{2}$-sparse to $B$; and
3. every vertex of $B$ has at least $x^{2}|A|$ neighbours in $A$.

## Facts & Assumptions

**Given:** Parameters $x,y$ and a graph $G$ satisfying the displayed hypotheses.

[L1] Claim 5.2.1 of the cited source proves exactly the displayed conclusion under these hypotheses after translating notation.

## Proof

**Proof technique:** translate the cited source claim.

1.1 The cited source claim proves exactly this large nearly covered sparse-pair conclusion after translating notation. [L1, given]

2.1 Therefore the present statement follows. [step 1.1] ∎
