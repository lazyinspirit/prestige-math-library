---
id: ex-euler-formula-on-a-tree-cycle-and-k-four
kind: example
title: "Euler's formula checked on a plane tree, a cycle, and the four-face embedding of $K_4$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euler-formula-for-connected-plane-graphs, prop-plane-forest-has-one-face, thm-forest-edge-component-count, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Theorem 4.2.9"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Example

Euler's formula gives the same value on a plane tree, a cycle, and the tetrahedral embedding of $K_4$.

## Facts & Assumptions

**Given:** A plane tree on $n\ge1$ vertices, a plane cycle on $n\ge3$ vertices, and the standard plane embedding of $K_4$.

[L1] Every connected plane graph satisfies $|V|-|E|+|F|=2$ ([[thm-euler-formula-for-connected-plane-graphs]]).

[L2] A finite forest satisfies $|V|=|E|+c$, so a tree on $n$ vertices has $n-1$ edges ([[thm-forest-edge-component-count]]).



## Verification

**Proof technique:** direct.

1.1 By [L2], a tree on $n$ vertices has $n-1$ edges, and its plane embedding has one face by [[prop-plane-forest-has-one-face]]. Thus $|V|-|E|+|F|=n-(n-1)+1=2$. This includes the one-vertex tree, for which the edge count is zero. [L1, L2, algebra]

1.2 A plane cycle $C_n$, in the notation of [[def-standard-complete-bipartite-path-and-cycle-graphs]], has $n$ vertices and $n$ edges. Its polygon bounds one face and has the unbounded face on the other side, so $|V|-|E|+|F|=n-n+2=2$. [L1, algebra]

2.1 Embed three vertices of $K_4$ as a triangle and place the fourth inside it, joined to all three corners. The graph has four vertices, six edges, three bounded triangular faces, and the unbounded triangular face. Hence $|V|-|E|+|F|=4-6+4=2$, as [L1] requires. [L1, construct, algebra] ∎
