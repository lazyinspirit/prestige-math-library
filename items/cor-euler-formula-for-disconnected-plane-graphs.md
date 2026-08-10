---
id: cor-euler-formula-for-disconnected-plane-graphs
kind: corollary
title: "For a plane graph with $c$ components, $|V|-|E|+|F|=1+c$, including the null graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euler-formula-for-connected-plane-graphs, lem-plane-graph-faces-are-finite-with-one-unbounded-face, cor-connected-components-partition-the-vertex-set, def-finite-cardinality, thm-connected-iff-has-spanning-tree, thm-forest-edge-component-count, prop-plane-forest-has-one-face, lem-plane-edge-face-incidence]
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

[L3] A finite graph is connected if and only if it has a spanning tree ([[thm-connected-iff-has-spanning-tree]]).

[L4] A tree on $n$ vertices has $n-1$ edges ([[thm-forest-edge-component-count]]).

[L5] Every plane forest has exactly one face ([[prop-plane-forest-has-one-face]]).

[L6] A cycle edge in a plane graph is incident with two distinct faces ([[lem-plane-edge-face-incidence]]).

## Proof

**Proof technique:** direct.

1.1 Insert the connected component drawings one at a time in their inherited positions. Before a component is inserted, its connected drawing lies in one face of the components already inserted. By [L3] choose a spanning tree; [L4] gives it $|V(G_i)|-1$ edges, and [L5] shows that inserting this tree does not split the containing face. Add the remaining edges in their inherited drawing order. Each joins vertices already connected by the tree, hence lies on a cycle, so [L6] shows that its insertion splits one face into two. There are $|E(G_i)|-|V(G_i)|+1=|F(G_i)|-1$ such edges, where the last equality is [L1]. Starting from the one face of the empty drawing therefore gives $|F|=1+\sum_i(|F(G_i)|-1)$. Vertices and edges add disjointly by [L2]. [L1, L2, L3, L4, L5, L6]

2.1 Therefore $|V|-|E|+|F|=\sum_i(|V(G_i)|-|E(G_i)|+|F(G_i)|)-c+1=2c-c+1=1+c$. [step 1.1, algebra]

3.1 For the null graph, $|V|=|E|=c=0$ and $|F|=1$, so the same formula reads $1=1$. [step 2.1] ∎
