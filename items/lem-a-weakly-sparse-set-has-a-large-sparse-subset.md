---
id: lem-a-weakly-sparse-set-has-a-large-sparse-subset
kind: lemma
title: "A set of self-density at most $c$ has a subset of at least half its size that is $4c$-sparse"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, def-directional-and-weak-sparsity-between-vertex-sets, lem-weak-sparsity-is-a-bound-on-the-edge-density, def-edge-density-between-vertex-sets, thm-double-counting, cor-the-averaging-principle, def-a-finite-incidence-relation-and-its-fibres, def-sum-over-a-finite-index-set, lem-sparsity-depends-only-on-the-induced-subgraph]
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
    - title: "M. Chudnovsky, A. Scott, P. Seymour, and S. Spirkl, Strengthening Rödl's theorem, sec. 1"
      url: "https://arxiv.org/pdf/2105.07370"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph, let $c\ge0$, and let $X\subseteq V(G)$ be
nonempty. If $d_G(X,X)\le c$, then there is a subset $X'\subseteq X$ with
$|X'|\ge|X|/2$ such that $X'$ is $4c$-sparse.

## Facts & Assumptions

**Given:** A finite simple graph $G$, a real $c\ge0$, and a nonempty set $X\subseteq V(G)$ with $d_G(X,X)\le c$.

[L1] The ordered internal edge count is the sum of the internal degrees: $e_G(X,X)=\sum_{x\in X}\deg_{G[X]}(x)$ ([[thm-double-counting]], [[def-sum-over-a-finite-index-set]]).

[L2] The self-density inequality $d_G(X,X)\le c$ is equivalent to $e_G(X,X)\le c|X|^2$ ([[def-edge-density-between-vertex-sets]]).

[L3] A set is $4c$-sparse exactly when every vertex of the induced graph on it has degree at most $4c$ times its size ([[lem-sparsity-depends-only-on-the-induced-subgraph]], [[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the average internal degree of a vertex of $X$ is at most $c|X|$. [L1, L2, algebra]

2.1 Let $B:=\{x\in X:\deg_{G[X]}(x)>2c|X|\}$. If $|B|\ge|X|/2$, then the sum of the nonnegative internal degrees would be strictly larger than $|B|\,2c|X|\ge c|X|^2$, contradicting step 1.1. Hence $X':=X\setminus B$ has $|X'|>|X|/2$, and every $x\in X'$ has $\deg_{G[X]}(x)\le2c|X|$. [step 1.1, algebra, choose]

3.1 For $x\in X'$ one has $\deg_{G[X']}(x)\le\deg_{G[X]}(x)\le2c|X|\le4c|X'|$, because $|X'|\ge|X|/2$. Thus [L3] makes $X'$ $4c$-sparse. [step 2.1, L3, algebra] ∎
