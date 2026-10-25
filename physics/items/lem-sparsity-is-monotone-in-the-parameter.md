---
id: lem-sparsity-is-monotone-in-the-parameter
kind: lemma
title: "Sparsity is preserved when the parameter grows, and every nonempty set of at most two vertices is $0$-restricted"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set]
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

Let $G$ be a finite simple graph and let $0\le c\le c'$.

1. If a nonempty set $X\subseteq V(G)$ is $c$-sparse, then it is $c'$-sparse.
2. If $X$ is nonempty and $|X|\le2$, then $X$ is $0$-restricted.

## Facts & Assumptions

**Given:** A finite simple graph $G$, reals $0\le c\le c'$, and a nonempty set $X\subseteq V(G)$.

[L1] A nonempty set $Y$ is $c$-sparse when every vertex of $Y$ has at most $c|Y|$ neighbours in $Y$; it is $c$-dense when every vertex has at most $c|Y|$ non-neighbours in $Y$ other than itself; and it is $c$-restricted when it is $c$-sparse or $c$-dense ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 If $X$ is $c$-sparse, then every vertex of $X$ has at most $c|X|\le c'|X|$ neighbours in $X$, so [L1] makes $X$ $c'$-sparse. [L1, algebra]

1.2 If $|X|=1$, then its only vertex has no neighbour and no non-neighbour inside $X\setminus\{x\}$, so [L1] makes $X$ both $0$-sparse and $0$-dense. [L1]

2.1 If $|X|=2$, then either the two vertices are adjacent or they are not. In the first case $X$ is $0$-dense, and in the second it is $0$-sparse. So [L1] makes every two-element set $0$-restricted. [L1] ∎
