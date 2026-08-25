---
id: lem-a-sparse-set-has-small-self-density
kind: lemma
title: "A $c$-sparse set has self-density at most $c$, and a $c$-dense set has self-density at least $1-c-1/|X|$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, def-edge-density-between-vertex-sets, thm-double-counting, def-sum-over-a-finite-index-set, lem-sparsity-depends-only-on-the-induced-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, A. Scott, P. Seymour, and S. Spirkl, Strengthening Rödl's theorem, sec. 1"
      url: "https://arxiv.org/pdf/2105.07370"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph, let $c\ge0$, and let $X\subseteq V(G)$ be
nonempty.

1. If $X$ is $c$-sparse, then $d_G(X,X)\le c$.
2. If $X$ is $c$-dense, then $d_G(X,X)\ge1-c-1/|X|$.

## Facts & Assumptions

**Given:** A finite simple graph $G$, a real $c\ge0$, and a nonempty set $X\subseteq V(G)$.

[L1] A set is $c$-sparse exactly when every vertex of the induced graph $G[X]$ has degree at most $c|X|$ ([[lem-sparsity-depends-only-on-the-induced-subgraph]], [[def-c-sparse-and-c-restricted-vertex-set]]).

[L2] The self-density is $d_G(X,X)=e_G(X,X)/|X|^2$ ([[def-edge-density-between-vertex-sets]]).

[L3] The ordered edge count satisfies $e_G(X,X)=\sum_{x\in X}\deg_{G[X]}(x)$ ([[thm-double-counting]], [[def-sum-over-a-finite-index-set]]).

## Proof

**Proof technique:** direct.

1.1 If $X$ is $c$-sparse, then [L1] bounds every summand in [L3] by $c|X|$, so $e_G(X,X)\le c|X|^2$. [L1, L3]

2.1 Dividing the inequality of step 1.1 by $|X|^2$ and using [L2] gives $d_G(X,X)\le c$. [step 1.1, L2, algebra]

3.1 If $X$ is $c$-dense, then every vertex of $G[X]$ has at most $c|X|$ non-neighbours in $X\setminus\{x\}$, so it has at least $|X|-1-c|X|$ neighbours in $X$. Summing as in [L3] gives $e_G(X,X)\ge(1-c-1/|X|)|X|^2$, and [L2] turns this into $d_G(X,X)\ge1-c-1/|X|$. [L3, L2, given, algebra] ∎
