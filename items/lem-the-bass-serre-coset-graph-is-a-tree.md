---
id: lem-the-bass-serre-coset-graph-is-a-tree
kind: lemma
title: "The Bass-Serre coset graph is a tree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bass-serre-tree-of-a-graph-of-groups, thm-normal-form-for-fundamental-groups-of-graphs-of-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Statement

The Bass-Serre coset graph of a graph of groups is a simplicial tree.

## Facts & Assumptions

**Given:** A graph of groups $\mathcal G$, a maximal subtree $T$, and its Bass-Serre coset graph $\widetilde X$.

[L1] The vertices and edges of $\widetilde X$ are the cosets prescribed in the Bass-Serre construction. ([[def-bass-serre-tree-of-a-graph-of-groups]])

[L2] In the graph-of-groups fundamental group, every element has a reduced normal form and a reduced word with positive edge length is nonidentity. ([[thm-normal-form-for-fundamental-groups-of-graphs-of-groups]])

## Proof

**Proof technique:** direct.

1.1 The graph $\widetilde X$ is connected. Indeed, a reduced graph-of-groups word for $\gamma\in\pi_1(\mathcal G,T)$ records an edge path from the base coset $G_{v_0}$ to the vertex $\gamma G_v$, so every vertex is reached from a base vertex by some path in $\widetilde X$. [L1, L2, given]

2.1 A reduced closed path in $\widetilde X$ based at a vertex coset determines a reduced graph-of-groups word of positive edge length representing the identity element, because following the path returns to the initial coset. That contradicts [L2]. Hence $\widetilde X$ has no nontrivial reduced closed path. [L1, L2, step 1.1]

3.1 Being connected and having no nontrivial reduced closed path, $\widetilde X$ is a simplicial tree. [step 1.1, step 2.1, algebra] ∎
