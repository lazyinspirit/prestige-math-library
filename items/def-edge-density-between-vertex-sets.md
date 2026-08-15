---
id: def-edge-density-between-vertex-sets
kind: definition
title: "Edge counts and densities between nonempty vertex sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Definition 2.1.1"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.1"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph ([[def-finite-simple-graph]]) and let $X,Y\subseteq V(G)$. Define the ordered cross-edge count
$$e_G(X,Y):=|\{(x,y)\in X\times Y:xy\in E(G)\}|.$$
When $X$ and $Y$ are nonempty, their **edge density** is
$$d_G(X,Y):=\frac{e_G(X,Y)}{|X||Y|}.$$
We omit the subscript when the graph is clear. If $X$ and $Y$ are disjoint, this agrees with the edges between sets in [[def-edges-between-sets-and-pure-mixed-pairs]]. If they overlap, an edge with both endpoints in $X\cap Y$ contributes in both orientations, while diagonal pairs $(x,x)$ never contribute.

For a nonempty graph, write $d(G):=d_G(V(G),V(G))=2|E(G)|/|V(G)|^2$. By convention the density of the null graph is $0$.
