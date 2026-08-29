---
id: thm-fundamental-groups-from-different-maximal-trees-are-isomorphic
kind: theorem
title: "Different maximal trees give isomorphic graph-of-groups fundamental groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bass-serre-tree-of-a-graph-of-groups, def-quotient-graph-of-groups-from-a-tree-action, thm-bass-serre-structure-theorem, thm-fundamental-group-acts-on-its-bass-serre-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Statement

Let $\mathcal G$ be a graph of groups on a connected graph $X$. If $T$ and
$T'$ are maximal subtrees of $X$, then $\pi_1(\mathcal G,T)$ and
$\pi_1(\mathcal G,T')$ are isomorphic.

## Facts & Assumptions

**Given:** A graph of groups $\mathcal G$ on a connected graph $X$, and maximal subtrees $T,T'\subseteq X$.

[L1] The graph-of-groups fundamental group acts on its Bass-Serre tree, with quotient equal to the original graph and with stabilizers of the base cosets equal to the chosen vertex and edge groups. ([[thm-fundamental-group-acts-on-its-bass-serre-tree]])

[L2] The Bass-Serre tree has vertices and edges given by cosets of the chosen vertex and edge groups. ([[def-bass-serre-tree-of-a-graph-of-groups]])

[L3] A tree action produces a quotient graph of groups from chosen vertex and edge lifts. ([[def-quotient-graph-of-groups-from-a-tree-action]])

[L4] Bass-Serre structure reconstructs the acting group from that quotient graph of groups and any chosen maximal subtree. ([[thm-bass-serre-structure-theorem]])

## Proof

**Proof technique:** direct.

1.1 Let $\Gamma:=\pi_1(\mathcal G,T)$, and let $\widetilde X$ be its Bass-Serre tree. By [L1], $\Gamma$ acts on $\widetilde X$ without inversions, the quotient graph is $X$, and for the standard lifts $G_v$ and $G_e$ from [L2] the stabilizers are exactly the chosen groups of $\mathcal G$. Thus the quotient graph of groups recovered from this action is the original graph of groups $\mathcal G$. [L1, L2, L3, given]

2.1 Apply [L4] to the action of $\Gamma$ on $\widetilde X$, but choose the maximal subtree $T'$ of the quotient graph. Step 1.1 identifies that quotient graph of groups with $\mathcal G$, so [L4] gives $$ \Gamma\cong\pi_1(\mathcal G,T'). $$ Since $\Gamma=\pi_1(\mathcal G,T)$, the two relative fundamental groups are isomorphic. [L4, step 1.1] ∎
