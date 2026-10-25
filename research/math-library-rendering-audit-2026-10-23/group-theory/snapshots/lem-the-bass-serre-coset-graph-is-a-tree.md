---
id: lem-the-bass-serre-coset-graph-is-a-tree
kind: lemma
title: "The Bass-Serre coset graph is a tree"
status: published
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
  audited: 2026-08-29
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

2.1 Suppose a nontrivial reduced closed path has $n>0$ edges. Left multiplication of all its coset labels by the inverse of its initial representative preserves the incidence formulas in [L1], so assume its initial and final vertex is $G_v$. Those formulas successively write its oriented edges as $g_0G_{e_1},\ g_0e_1g_1G_{e_2},\ldots,g_0e_1g_1\cdots e_{n-1}g_{n-1}G_{e_n}$, with each $g_i$ in the appropriate vertex group. Its terminal vertex is $wG_v$, where $w=g_0e_1g_1\cdots e_ng_n$ and we take $g_n=1$. If $e_{i+1}=\bar e_i$, the next lifted edge equals the reverse of the preceding one exactly when $g_i\in\alpha_{\bar e_i}(G_{e_i})$, by the edge-reversal formula of [L1]. The path has no such backtrack, so this closed graph-of-groups word is reduced. Returning to $G_v$ gives $wG_v=G_v$, hence only $w=a\in G_v$, not necessarily $w=1$. Replace its terminal coefficient $g_n$ by $g_na^{-1}$. This changes none of the internal coefficients tested for reducedness, leaves the same positive edge length and closed underlying edge path, and gives a word representing $wa^{-1}=1$. That contradicts the actual reduced closed-word assertion in [L2]. Thus no nontrivial reduced closed path exists. [L1, L2, step 1.1]

3.1 Being connected and having no nontrivial reduced closed path, $\widetilde X$ is a simplicial tree. [step 1.1, step 2.1, algebra] ∎
