---
id: cor-a-restricted-set-contains-a-large-stable-set-or-clique
kind: corollary
title: "A $c$-sparse set $X$ satisfies $\\alpha(G[X])\\ge|X|/(c|X|+1)$, and a $c$-dense set satisfies $\\omega(G[X])\\ge|X|/(c|X|+1)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [def-c-sparse-and-c-restricted-vertex-set, lem-sparsity-depends-only-on-the-induced-subgraph, lem-restrictedness-is-complement-invariant, lem-greedy-colouring-bound, thm-clique-independence-chromatic-bounds, def-clique-and-independence-numbers, def-proper-vertex-colouring-and-chromatic-number, def-graph-adjacency-incidence-neighbourhood-and-degree, lem-complement-swaps-cliques-and-stable-sets, def-graph-isomorphism-and-complement, def-clique-stable-set-and-numbers]
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
  references: []
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph, let $c\ge0$, and let $X\subseteq V(G)$ be
nonempty.

1. If $X$ is $c$-sparse, then $\alpha(G[X])\ge|X|/(c|X|+1)$.
2. If $X$ is $c$-dense, then $\omega(G[X])\ge|X|/(c|X|+1)$.

## Facts & Assumptions

**Given:** A finite simple graph $G$, a real $c\ge0$, and a nonempty set $X\subseteq V(G)$.

[L1] If $X$ is $c$-sparse, then every vertex of $G[X]$ has degree at most $c|X|$ ([[lem-sparsity-depends-only-on-the-induced-subgraph]], [[def-c-sparse-and-c-restricted-vertex-set]]).

[L2] A graph of maximum degree at most $\Delta$ has chromatic number at most $\Delta+1$ ([[lem-greedy-colouring-bound]], [[def-proper-vertex-colouring-and-chromatic-number]]).

[L3] Every finite graph satisfies $|V(G)|\le\chi(G)\alpha(G)$ ([[thm-clique-independence-chromatic-bounds]], [[def-clique-and-independence-numbers]]).

[L4] The published definitions [[def-clique-and-independence-numbers]] and [[def-clique-stable-set-and-numbers]] define the same invariants $\alpha$ and $\omega$ under the same symbols.

[L5] In the complement graph, stable sets become cliques and sparse sets become dense sets by [[lem-complement-swaps-cliques-and-stable-sets]] and [[lem-restrictedness-is-complement-invariant]].

## Proof

**Proof technique:** direct.

1.1 In the sparse case, [L1] gives $\Delta(G[X])\le c|X|$, so [L2] gives $\chi(G[X])\le c|X|+1$. [L1, L2]

1.2 The two published definitions of $\alpha$ and $\omega$ agree by [L4], so the complement statement can be read with the same symbols. [L4]

2.1 Applying [L3] to $G[X]$ yields $|X|\le\chi(G[X])\alpha(G[X])$, hence $\alpha(G[X])\ge|X|/(c|X|+1)$. [step 1.1, L3, algebra]

3.1 If $X$ is $c$-dense, then [L5] makes $X$ $c$-sparse in $\overline G$, so step 2.1 applied there gives a stable set of size at least $|X|/(c|X|+1)$. Reading that set back in $G$ via [L5] gives a clique of the same size. [step 2.1, step 1.2, L5] ∎
