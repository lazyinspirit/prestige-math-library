---
id: lem-anticonnected-components-are-complement-components
kind: lemma
title: "The anticonnected components of $G$ are exactly the connected components of $\\overline G$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-anticonnected-graph-and-anticonnected-component, lem-complement-commutes-with-induced-subgraphs, cor-connected-components-partition-the-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## Statement

For every graph $G$, its anticomponents are exactly the vertex sets of the connected components of $\overline G$. In particular, they partition $V(G)$.

## Facts & Assumptions

**Given:** A finite graph $G$.

[F1] Anticomponents are defined to be the component vertex sets of $\overline G$ ([[def-anticonnected-graph-and-anticonnected-component]]).

[L1] Connected components partition a graph's vertex set ([[cor-connected-components-partition-the-vertex-set]]).

[L2] $\overline{G[A]}=\overline G[A]$ ([[lem-complement-commutes-with-induced-subgraphs]]).

## Proof

**Proof technique:** direct.

1.1 By F1, a set $A$ is an anticomponent of $G$ exactly when it is the vertex set of a connected component of $\overline G$. [F1]

2.1 Equivalently, $\overline G[A]=\overline{G[A]}$ is connected and $A$ is maximal with this property. [step 1.1, L2]

3.1 The component partition theorem applied to $\overline G$ shows that these sets partition $V(\overline G)=V(G)$. [step 1.1, L1] ∎
