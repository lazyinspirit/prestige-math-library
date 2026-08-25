---
id: ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs
kind: example
title: "For $P_3$-free graphs Rödl's theorem holds with $\\delta=\\epsilon$, by an explicit argument"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-rodl-every-h-free-graph-has-a-linear-restricted-set, def-c-sparse-and-c-restricted-vertex-set, def-h-free-and-family-free-graph, cor-connected-components-partition-the-vertex-set, def-standard-complete-bipartite-path-and-cycle-graphs, def-connected-graph-and-connected-component]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

If $G$ is nonempty and $P_3$-free and $\epsilon\in(0,\tfrac12)$, then $G$ contains an
$\epsilon$-restricted set of size at least $\epsilon|V(G)|$.

## Facts & Assumptions

**Given:** A real $\epsilon\in(0,\tfrac12)$ and a nonempty $P_3$-free graph $G$ on $n$ vertices.

[L1] The components of a $P_3$-free graph are cliques: if some component contained two edges sharing a vertex without the third edge, it would contain an induced $P_3$ ([[def-h-free-and-family-free-graph]], [[def-standard-complete-bipartite-path-and-cycle-graphs]], [[cor-connected-components-partition-the-vertex-set]]).

[L2] A clique is $0$-dense, and if every vertex of the whole graph $G$ has fewer than $\epsilon n$ neighbours then $V(G)$ is $\epsilon$-sparse because $|V(G)|=n$ ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], every component of $G$ is a clique. [L1]

2.1 If some component has at least $\epsilon n$ vertices, then that component is a clique and hence $0$-dense by [L2], so it is an $\epsilon$-restricted set of the required size. [step 1.1, L2]

2.2 Otherwise every component has fewer than $\epsilon n$ vertices, so every vertex has fewer than $\epsilon n$ neighbours. Therefore the whole vertex set is $\epsilon$-sparse by [L2]. [step 1.1, L2]

3.1 In either case $G$ has an $\epsilon$-restricted set of size at least $\epsilon n$. [step 2.1, step 2.2, algebra] ∎
