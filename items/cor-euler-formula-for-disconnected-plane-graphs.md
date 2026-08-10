---
id: cor-euler-formula-for-disconnected-plane-graphs
kind: corollary
title: "For a plane graph with $c$ components, $|V|-|E|+|F|=1+c$, including the null graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euler-formula-for-connected-plane-graphs, lem-plane-graph-faces-are-finite-with-one-unbounded-face, cor-connected-components-partition-the-vertex-set, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

If a plane graph has $c$ connected components, then

$$|V|-|E|+|F|=1+c.$$

This includes the null graph, for which $c=0$ and the complement is its single face. Component sets and their finite cardinalities are those of [[cor-connected-components-partition-the-vertex-set]] and [[def-finite-cardinality]], and face finiteness is [[lem-plane-graph-faces-are-finite-with-one-unbounded-face]].

## Facts & Assumptions

**Given:** A plane graph $G$ with components $G_1,\ldots,G_c$ when $c>0$.

[L1] For every connected plane graph, $|V|-|E|+|F|=2$ ([[thm-euler-formula-for-connected-plane-graphs]]).

[L2] The vertex sets of the connected components of a graph are nonempty, cover the vertex set, and any two are equal or disjoint ([[cor-connected-components-partition-the-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 Sum [L1] over the components. Vertices and edges add disjointly by [L2]. Each component has an unbounded face, but in the combined drawing these exterior regions merge into the single unbounded face of $G$; all bounded faces remain distinct. Hence $|F|=1+\sum_i(|F(G_i)|-1)$. [L1, L2]

2.1 Therefore $|V|-|E|+|F|=\sum_i(|V(G_i)|-|E(G_i)|+|F(G_i)|)-c+1=2c-c+1=1+c$. [step 1.1, algebra]

3.1 For the null graph, $|V|=|E|=c=0$ and $|F|=1$, so the same formula reads $1=1$. [step 2.1] ∎
