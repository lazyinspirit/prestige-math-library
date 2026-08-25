---
id: ex-zero-sparse-sets-are-the-stable-sets
kind: example
title: "The $0$-sparse sets are exactly the stable sets and the $0$-dense sets exactly the cliques"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, def-clique-stable-set-and-numbers, lem-restrictedness-is-complement-invariant]
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
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 1.1"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Example

For a nonempty set $X$, the condition of being $0$-sparse is exactly that
$G[X]$ have no edges, and the condition of being $0$-dense is exactly that
$G[X]$ be complete.

## Facts & Assumptions

**Given:** A finite simple graph $G$ and a nonempty set $X\subseteq V(G)$.

[L1] A set is $0$-sparse when every vertex of it has at most $0\cdot|X|=0$ neighbours inside it ([[def-c-sparse-and-c-restricted-vertex-set]]).

[L2] Stable sets and cliques are the edgeless and complete induced subgraphs, respectively ([[def-clique-stable-set-and-numbers]]).

[L3] Complementation exchanges sparse and dense sets ([[lem-restrictedness-is-complement-invariant]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $X$ is $0$-sparse exactly when every vertex of $X$ has no neighbour in $X$, which is exactly the statement that $G[X]$ has no edges. [L1, L2]

2.1 Therefore [L2] identifies the $0$-sparse sets with the stable sets. [step 1.1, L2]

3.1 Applying [L3] to step 2.1 shows that the $0$-dense sets are exactly the cliques. [step 2.1, L3] ∎
