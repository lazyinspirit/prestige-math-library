---
id: ex-bass-serre-tree-of-an-amalgamated-free-product
kind: example
title: "The Bass-Serre tree of an amalgamated free product"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-bass-serre-tree-of-a-graph-of-groups, thm-one-segment-graph-of-groups-is-an-amalgamated-free-product]
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

## Example

For an amalgamated free product $A\ast_C B$, the Bass-Serre tree has vertices
the left cosets of $A$ and $B$ and edges the left cosets of $C$.

## Facts & Assumptions

**Given:** The one-segment graph-of-groups description of an amalgamated free product.

[L1] A one-segment graph of groups yields an amalgamated free product. ([[thm-one-segment-graph-of-groups-is-an-amalgamated-free-product]])

[L2] In the Bass-Serre tree, vertices are cosets of vertex groups and edges are cosets of edge groups. ([[def-bass-serre-tree-of-a-graph-of-groups]])

## Verification

**Proof technique:** direct.

1.1 Realize $A\ast_C B$ by the one-segment graph of groups from [L1]. Then [L2] says the two vertex orbits are $(A\ast_C B)/A$ and $(A\ast_C B)/B$, while the edge orbit is $(A\ast_C B)/C$. [L1, L2, given]

2.1 The edge coset $\gamma C$ joins the vertices $\gamma A$ and $\gamma B$, so the tree records exactly how the amalgamating subgroup sits in the two factors. [step 1.1, algebra] ∎
