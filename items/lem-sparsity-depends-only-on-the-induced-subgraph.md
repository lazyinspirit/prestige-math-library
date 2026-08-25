---
id: lem-sparsity-depends-only-on-the-induced-subgraph
kind: lemma
title: "A set is $c$-sparse exactly when the maximum degree of the graph it induces is at most $c$ times its size"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, A. Scott, P. Seymour, and S. Spirkl, Strengthening Rödl's theorem, sec. 1"
      url: "https://arxiv.org/pdf/2105.07370"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph, let $c\ge0$, and let $X\subseteq V(G)$ be
nonempty. Then $X$ is $c$-sparse in $G$ if and only if every vertex of the
induced subgraph $G[X]$ has degree at most $c|X|$. In particular, if
$X\subseteq W\subseteq V(G)$, then $X$ is $c$-sparse in $G$ if and only if it is
$c$-sparse in $G[W]$.

## Facts & Assumptions

**Given:** A finite simple graph $G$, a real $c\ge0$, and a nonempty set $X\subseteq V(G)$.

[L1] The set $X$ is $c$-sparse when $|N_G(x)\cap X|\le c|X|$ for every $x\in X$ ([[def-c-sparse-and-c-restricted-vertex-set]]).

[L2] In the induced subgraph $G[X]$, the neighbours of a vertex $x\in X$ are exactly the vertices of $N_G(x)\cap X$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], for each $x\in X$ the degree of $x$ in $G[X]$ is exactly $|N_G(x)\cap X|$. [L2]

2.1 Therefore the inequalities in [L1] are exactly the degree bounds in the induced subgraph. [step 1.1, L1]

3.1 The same identity of neighbourhoods holds in any larger induced subgraph $G[W]$ containing $X$, so the ambient graph is irrelevant once the vertex set $X$ is fixed. [step 1.1] ∎
