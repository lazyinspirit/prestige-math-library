---
id: ex-double-tree-shortcutting-for-a-metric-tsp-instance
kind: example
title: "Double-tree shortcutting on the four-vertex square metric"
status: draft
origin: pipeline
deps:
  - def-metric-tsp
  - def-spanning-tree
  - def-weighted-graph-and-minimum-spanning-tree
  - cor-tree-edge-count
  - lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp
  - lem-euler-double-tree-shortcutting-does-not-increase-cost
  - thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §2.4 Theorem 2.12 algorithm and proof, printed pp. 45–46"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Let the four vertices be $A,B,C,D$, with the four cyclic side lengths
$AB=BC=CD=DA=1$ and diagonals $AC=BD=2$. For $T=\{AB,BC,CD\}$, the
doubled-tree Euler walk $A\text{-}B\text{-}C\text{-}D\text{-}C\text{-}B\text{-}A$
has cost $6$. First-visit shortcutting gives the tour
$A\text{-}B\text{-}C\text{-}D\text{-}A$ of cost $4$; in particular the closing
edge $D\text{-}A$ has length $1$, at most the bypass $D\text{-}C\text{-}B\text{-}A$
of length $3$. The MST has weight $3$, the optimum tour has weight $4$, and the
output meets the $2\cdot\mathrm{MST}$ bound.

## Facts & Assumptions

**Given:** The four-vertex graph with distances $d(A,B)=d(B,C)=d(C,D)=d(D,A)=1$ and $d(A,C)=d(B,D)=2$, the tree $T=\{AB,BC,CD\}$, and the doubled-tree algorithm.

[F1] A metric-TSP instance has nonnegative symmetric rational lengths with $d(u,u)=0$ and the triangle inequality $d(u,w)\le d(u,v)+d(v,w)$, a tour is a cyclic ordering with cost the sum of consecutive lengths including the closing edge, and all ties are resolved by fixed orders. ([[def-metric-tsp]])

[F2] A spanning tree of a graph is a spanning connected acyclic subgraph, its weight is the sum of its edge lengths, and a tree on $n\ge1$ vertices has exactly $n-1$ edges. ([[def-spanning-tree]], [[def-weighted-graph-and-minimum-spanning-tree]], [[cor-tree-edge-count]])

[F3] Doubling the edges of a spanning tree and shortcutting an Euler circuit in first-visit order yields a Hamiltonian tour of cost at most $2w(T)$, with each shortcut edge bounded by the length of the walk segment it replaces. ([[lem-euler-double-tree-shortcutting-does-not-increase-cost]])

[F4] A minimum spanning tree $T$ satisfies $w(T)\le\operatorname{OPT}_{\mathrm{TSP}}$, and the double-tree algorithm returns a tour of cost at most $2w(T)\le2\operatorname{OPT}_{\mathrm{TSP}}$ in polynomial time. ([[lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp]], [[thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp]])

## Verification

**Proof technique:** direct.

1.1 The six stated distances are nonnegative and symmetric with $d(u,u)=0$; every distance between distinct vertices is $1$ or $2$, so for any three vertices with $u\ne v\ne w$ one has $d(u,v)+d(v,w)\ge1+1=2\ge d(u,w)$, and inserting $v=u$ or $v=w$ gives the equality $d(u,w)=d(u,v)+d(v,w)$. The triangle inequality therefore holds and the data form a metric-TSP instance on four vertices. [F1, given, algebra]

2.1 The edge set $T=\{AB,BC,CD\}$ has $4$ vertices, $3$ edges, and forms the path $A-B-C-D$, hence is connected and acyclic, a spanning tree; its weight is $w(T)=1+1+1=3$. Every spanning tree of a four-vertex graph has exactly $3$ edges by [F2] and every edge length is at least $1$, so every spanning tree has weight at least $3$; therefore $T$ is a minimum spanning tree and $w(T)=3$. [F2, step 1.1, algebra]

2.2 Every tour is a cyclic ordering of the four vertices and consists of four edges, each of length at least $1$, so every tour has cost at least $4$; the cyclic ordering $A-B-C-D-A$ has cost $1+1+1+1=4$. Hence $\operatorname{OPT}_{\mathrm{TSP}}=4$. [F1, step 1.1, algebra]

3.1 Doubling the three tree edges produces the multigraph with edges $AB,BA,BC,CB,CD,DC$; it is connected and the degrees are $\deg(A)=2$, $\deg(B)=4$, $\deg(C)=4$, $\deg(D)=2$, all even. The closed walk $A-B-C-D-C-B-A$ uses each of the six edges exactly once, so it is an Euler circuit of the doubled multigraph, with total cost $1+1+1+1+1+1=6=2w(T)$. [F3, step 2.1, algebra]

4.1 The vertices occur for the first time along this walk in the order $A,B,C,D$, so first-visit shortcutting yields the tour $A-B-C-D-A$. Its segments are the walks $A\to B$, $B\to C$, $C\to D$ of length $1$ each and the return segment $D\to C\to B\to A$ of length $3$; the shortcut edge $DA$ has length $1\le3$, the sum of the segment lengths, so the shortcut tour has cost $1+1+1+1=4\le6=2w(T)$, and by step 2.2 it equals $\operatorname{OPT}_{\mathrm{TSP}}$. [F3, step 2.2, step 3.1, algebra]

5.1 The computed tree satisfies $w(T)=3\le4=\operatorname{OPT}_{\mathrm{TSP}}$, in agreement with the minimum-spanning-tree lower bound, and the shortcut tour has cost $4\le6=2w(T)\le2\operatorname{OPT}_{\mathrm{TSP}}=8$, so this instance realizes the double-tree guarantee of [F4] with a strict improvement over the doubled walk. [F4, step 2.2, step 4.1, algebra] ∎
