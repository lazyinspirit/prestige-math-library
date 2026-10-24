---
id: ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set
kind: example
title: "In a disjoint union of cliques of order $k$ the whole vertex set is $(k/n)$-sparse"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, def-clique-stable-set-and-numbers, cor-connected-components-partition-the-vertex-set, def-connected-graph-and-connected-component]
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
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 1.1"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Example

Let $G$ be a nonempty disjoint union of cliques, each of order at most $k$, on a
total of $n\ge1$ vertices. Then $V(G)$ is $(k/n)$-sparse.

## Facts & Assumptions

**Given:** A nonempty graph $G$ on $n\ge1$ vertices whose connected components are cliques of order at most $k$.

[L1] In a disjoint union of cliques, each vertex is adjacent exactly to the other vertices in its own clique component ([[cor-connected-components-partition-the-vertex-set]], [[def-connected-graph-and-connected-component]]).

[L2] A set is $c$-sparse when every vertex has at most $c|X|$ neighbours inside it ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], every vertex of $G$ lies in a clique component of size at most $k$, so it has at most $k-1\le k$ neighbours in the whole vertex set. [L1]

2.1 Since the whole set has size $n$, the bound of step 1.1 reads $|N_G(v)|\le(k/n)n$ for every vertex $v$. Therefore [L2] makes $V(G)$ $(k/n)$-sparse. [step 1.1, L2, algebra] ∎
