---
id: ex-bass-serre-tree-of-a-free-product
kind: example
title: "The Bass-Serre tree of a free product"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-bass-serre-tree-of-a-graph-of-groups, thm-fundamental-group-acts-on-its-bass-serre-tree]
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

## Example

For a free product $A\ast B$, the Bass-Serre tree has vertex set
$(A\ast B)/A\;\sqcup\;(A\ast B)/B$ and one edge for each left coset of the
trivial amalgamating subgroup.

## Facts & Assumptions

**Given:** The Bass-Serre construction for a graph of groups.

[L1] The Bass-Serre tree uses cosets of vertex groups for vertices and cosets of edge groups for edges. ([[def-bass-serre-tree-of-a-graph-of-groups]])

[L2] The fundamental group acts on that tree with quotient the underlying graph. ([[thm-fundamental-group-acts-on-its-bass-serre-tree]])

## Verification

**Proof technique:** direct.

1.1 View $A\ast B$ as the graph of groups with two vertices, vertex groups $A$ and $B$, and one trivial edge group between them. Then [L1] gives vertex cosets $(A\ast B)/A$ and $(A\ast B)/B$, while the edge cosets are just the elements of $A\ast B$ itself. [L1, given]

2.1 By [L2], the quotient is a single segment. Thus each edge joins one $A$-coset to one $B$-coset, giving the usual bipartite Bass-Serre tree of the free product. [L2, step 1.1] ∎
