---
id: prop-face-boundaries-in-two-connected-plane-graphs
kind: proposition
title: "Every face of a two-connected plane graph is bounded by a cycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-graph-face-and-boundary, def-polygonal-arc-and-polygon, thm-polygonal-jordan-curve, def-vertex-and-edge-connectivity, def-connected-graph-and-connected-component, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-09-29
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.2.6"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

In a two-connected plane graph ([[def-plane-graph-face-and-boundary]], [[def-vertex-and-edge-connectivity]]), every facial boundary walk is a cycle ([[def-graph-walk-trail-path-and-cycle]]). The graph is finite and its edges are polygonal arcs; the separation argument uses [[thm-polygonal-jordan-curve]].

## Facts & Assumptions

**Given:** A finite simple polygonal plane graph $G$ that is two-connected, and one of its faces $f$.

[L1] A plane graph has distinct vertex points and simple polygonal edge arcs with disjoint interiors; its faces are the connected regions of the drawing's complement, and a facial boundary walk follows the face along the frontier ([[def-plane-graph-face-and-boundary]], [[def-polygonal-arc-and-polygon]]).

[L2] Two-connectivity means at least three vertices and connectedness after deleting any one vertex. Paths and cycles have the usual finite-graph meanings ([[def-vertex-and-edge-connectivity]], [[def-connected-graph-and-connected-component]], [[def-graph-walk-trail-path-and-cycle]]).

[L3] A polygon has exactly two complementary regions, each with the polygon as frontier ([[thm-polygonal-jordan-curve]]).

## Proof

**Proof technique:** induction on a finite ear construction.

1.1 The graph $G$ contains a cycle: two-connectivity gives minimum degree at least two, and a nonbacktracking walk in this finite graph eventually repeats a vertex, yielding a cycle. Choose any cycle $C$ and set $H=C$. If $H$ omits a vertex, choose a component $K$ of $G-V(H)$. It has an attachment to $H$ because $G$ is connected, and at least two distinct attachment vertices $a,b$: otherwise its sole attachment would disconnect $G$ when deleted, contrary to [L2]. Choose edges from $a,b$ to vertices of $K$ and a simple path between those vertices within $K$; their union is an $a$–$b$ ear whose internal vertices are new. If $H$ already contains every vertex but misses an edge, add that edge as a one-edge ear. Each operation adds an edge, so finitely many operations exhaust $G$. Every intermediate $H$ stays two-connected: deleting an old vertex leaves the old $H$ connected, with each surviving part of the new ear attached to a surviving endpoint; deleting an internal ear vertex leaves the old $H$ connected and both remaining ear parts attached to it. [given, L1, L2]

1.2 We establish a polygonal crosscut claim, including the unbounded case. Let $J$ be a polygon with complementary regions $V,W$, let $p\ne q$ lie on $J$, and let a simple polygonal arc $Q$ join $p$ to $q$ with $Q\setminus\{p,q\}\subseteq V$. The two $p$–$q$ arcs $J_1,J_2$ of $J$ give simple polygons $D_i=J_i\cup Q$, because $Q$ meets $J$ only at its endpoints. By [L3], each $D_i$ has two regions with frontier $D_i$; let $Z_i$ contain $W$ and let $Y_i$ be the other. Every point of $J\setminus J_i$ has a small connected disk disjoint from $D_i$ that meets $W$, so it lies in $Z_i$. Hence $Y_i$ misses all of $J$; since it also misses $W\subseteq Z_i$, it lies in $V$. Moreover $Y_2$ lies in $Z_1$: it is connected and misses $D_1$, and near any point of the open arc $J_2\setminus\{p,q\}$ it meets $Z_1$, because that arc lies in both $Z_1$ and the frontier of $Y_2$. Symmetrically $Y_1\subseteq Z_2$, so $Y_1\cap Y_2=\varnothing$. At each $x\in Q\setminus\{p,q\}$ choose a disk in $V$ missing nonlocal pieces of $Q$. The disk minus the local straight piece, or the two incident pieces at a bend, has exactly two connected sectors. Since $x$ lies in the frontier of each $Y_i$, both $Y_i$ meet the disk; their disjointness assigns one sector to each. Let $N$ be a component of $V\setminus Q$. It is open because each of its points has a connected small disk in $V\setminus Q$, and it is closed in $V\setminus Q$ as every component is. Its relative closure in $V$ meets $Q\setminus\{p,q\}$; otherwise $N$ would also be closed in connected $V$ and equal $V$, although $Q\setminus\{p,q\}$ is nonempty. A local disk at such a closure point shows $N$ meets $Y_1$ or $Y_2$. Each $Y_i$ is open and closed in $V\setminus Q$, since its frontier $D_i$ misses that set, so connected $N$ lies wholly in one $Y_i$. Conversely each $Y_i$ is connected. Therefore $V\setminus Q=Y_1\sqcup Y_2$ is exactly the two-component decomposition. The other old region $W$ is unchanged. Thus $J\cup Q$ has precisely three regions with frontiers $J,D_1,D_2$, whether $V$ is bounded or unbounded. [L1, L3]

2.1 Induct over the ears from step 1.1 with the invariant that every face $F$ of the current drawing has frontier exactly the drawn image of one graph cycle $J_F$ and is one of the two regions of $\mathbb R^2\setminus J_F$. For the initial cycle $C$, [L3] gives the invariant. Let $Q$ be the next ear. Its relative interior is connected and avoids the old drawing, so it lies in one old face $F$; its distinct endpoints are limits of that interior and hence lie on $\operatorname{Fr}(F)=J_F$. Put $J=J_F$ and let $V=F$. Apply step 1.2: $Q$ splits $F$ into two new regions $Y_1,Y_2$ with frontiers the graph cycles $J_1\cup Q$ and $J_2\cup Q$. Every other old face misses $Q$, remains connected and open in the new complement, and is closed there because its old frontier lies in the retained drawing. Thus each remains one component with its former cycle frontier, and the invariant continues. [base, ih, step 1.1, step 1.2, L1, L3]

3.1 At the final drawing $H=G$, the chosen face $f$ is a region of the complement of its frontier cycle $J_f$. The face lies on one local side of every edge of $J_f$; its facial boundary walk traverses those edges once in cyclic order and no other edge, because its frontier is exactly $J_f$. Therefore the facial boundary walk is that graph cycle. The same induction covers every face, including the unbounded one. [step 2.1, L1, L2, discharge-induction] ∎
