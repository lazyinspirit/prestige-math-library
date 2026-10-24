---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-bass-serre-tree-of-an-amalgamated-free-product.json
  precheck: pass
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


## Remarks

Write $\Gamma=A\ast_C B$. The following schematic shows one geometric edge of the Bass-Serre tree; it does not depict the whole tree. The two vertex types belong to the disjoint sets $\Gamma/A$ and $\Gamma/B$, while edges are indexed by $\Gamma/C$.

```tikz
\begin{tikzpicture}
\node[circle,draw,inner sep=2pt,label=above:{$\gamma A$},label=below:{$\Gamma/A$}] (a) at (0,0) {};
\node[circle,draw,inner sep=2pt,label=above:{$\gamma B$},label=below:{$\Gamma/B$}] (b) at (5,0) {};
\draw (a) -- node[above] {$\gamma C$} (b);
\end{tikzpicture}
```

The segment has no preferred orientation. Its endpoints are precisely those of step 2.1: replacing $\gamma$ by $\gamma c$ with $c\in C$ preserves both endpoints because the identified images of $C$ lie in $A$ and $B$. In the one-segment presentation the tree-edge symbol is killed, so the general Bass-Serre incidence formula reduces to these endpoints. The verification above is independent of this illustration.
