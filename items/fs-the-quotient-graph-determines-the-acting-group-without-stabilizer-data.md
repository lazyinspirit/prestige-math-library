---
id: fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data
kind: false-statement
title: "FALSE: the quotient graph determines the acting group without stabilizer data"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-bass-serre-structure-theorem, thm-one-loop-graph-of-groups-is-an-hnn-extension, thm-fundamental-group-acts-on-its-bass-serre-tree, thm-free-groups-are-torsion-free, cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
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

If two groups act on trees with the same quotient graph, then the acting groups
must be isomorphic.

## Facts & Assumptions

**Given:** The Bass-Serre structure theorem.

[L1] A tree action is recovered from the full quotient graph of groups, including the vertex and edge stabilizers and the boundary monomorphisms. ([[thm-bass-serre-structure-theorem]])

[L2] A one-loop graph of groups has the corresponding HNN extension as its fundamental group. ([[thm-one-loop-graph-of-groups-is-an-hnn-extension]])

[L3] A graph-of-groups fundamental group acts on its Bass-Serre tree with the original underlying graph as quotient. ([[thm-fundamental-group-acts-on-its-bass-serre-tree]])

[L4] Every free group is torsion-free. ([[thm-free-groups-are-torsion-free]])

[L5] Every vertex group embeds in its graph-of-groups fundamental group. ([[cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group]])

## Refutation

**Proof technique:** direct.

1.1 Take a one-loop quotient graph. Giving it trivial vertex and edge groups produces the fundamental group $\mathbb Z$ by [L2]. Giving the same loop vertex group $C_2$ and trivial edge group produces $C_2\ast\mathbb Z$. By [L3], each fundamental group acts on its Bass-Serre tree with that same one-loop quotient graph. [L1, L2, L3, given, algebra]

2.1 The first group is free and hence torsion-free by [L4], while [L5] embeds the order-$2$ vertex subgroup $C_2$ in the second, so they are not isomorphic. Thus the quotient graph alone does not determine the acting group. [L4, L5, step 1.1, algebra] ∎
