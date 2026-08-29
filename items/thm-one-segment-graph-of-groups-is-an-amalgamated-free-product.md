---
id: thm-one-segment-graph-of-groups-is-an-amalgamated-free-product
kind: theorem
title: "A one-segment graph of groups gives an amalgamated free product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-free-product-with-amalgamation, thm-bass-serre-structure-theorem, def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Statement

If a graph of groups has two vertices joined by one geometric edge and that
edge lies in the chosen maximal subtree, then its fundamental group is the
amalgamated free product of the two vertex groups over the edge group.

## Facts & Assumptions

**Given:** A one-segment graph of groups with vertex groups $A,B$ and edge group $C$.

[L1] A free product with amalgamation is the pushout of the two injective edge maps $C\hookrightarrow A$ and $C\hookrightarrow B$. ([[def-free-product-with-amalgamation]])

[L2] The relative fundamental group is obtained from the path group by killing the chosen tree edge. ([[def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree]])

## Proof

**Proof technique:** direct.

1.1 Because the unique geometric edge belongs to the maximal subtree, [L2] kills the edge symbol. The only remaining generators are the two vertex groups, and the only remaining cross relation is that the two images of the edge group agree. [L2, given]

2.1 That is exactly the pushout presentation named in [L1], so the fundamental group of the one-segment graph of groups is $A\ast_C B$. [L1, step 1.1] ∎
