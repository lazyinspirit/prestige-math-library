---
id: lem-sparsity-transfers-to-a-large-subset
kind: lemma
title: "A subset occupying at least a $\\lambda$ fraction of a $c$-sparse set is $(c/\\lambda)$-sparse"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, lem-sparsity-depends-only-on-the-induced-subgraph, def-subgraph-induced-subgraph-and-spanning-subgraph]
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
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph, let $c\ge0$, let $\lambda>0$, and let
$X'\subseteq X\subseteq V(G)$ be nonempty. If $X$ is $c$-sparse and
$|X'|\ge\lambda|X|$, then $X'$ is $(c/\lambda)$-sparse.

## Facts & Assumptions

**Given:** A finite simple graph $G$, reals $c\ge0$ and $\lambda>0$, and nonempty sets $X'\subseteq X\subseteq V(G)$ such that $X$ is $c$-sparse and $|X'|\ge\lambda|X|$.

[L1] In the induced subgraph on a set, sparsity is exactly a maximum-degree bound ([[lem-sparsity-depends-only-on-the-induced-subgraph]], [[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 For every $x\in X'$, the degree of $x$ in $G[X']$ is at most its degree in $G[X]$. [L1]

2.1 Since $X$ is $c$-sparse, [L1] gives $\deg_{G[X]}(x)\le c|X|$; and because $|X'|\ge\lambda|X|$, one has $|X|\le|X'|/\lambda$. Hence $\deg_{G[X']}(x)\le(c/\lambda)|X'|$ for every $x\in X'$. [step 1.1, L1, algebra]

3.1 Applying [L1] again shows that $X'$ is $(c/\lambda)$-sparse. [step 2.1, L1] ∎
