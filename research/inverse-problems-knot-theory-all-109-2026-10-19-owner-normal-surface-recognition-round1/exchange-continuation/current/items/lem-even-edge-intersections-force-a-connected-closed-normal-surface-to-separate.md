---
id: lem-even-edge-intersections-force-a-connected-closed-normal-surface-to-separate
kind: lemma
title: "Even edge intersections force a connected closed normal surface to separate"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf"
      locator: "§5, parity tests for separation by normal surfaces. The edgewise sufficiency used below is proved by finite tetrahedral coloring."
---

## Statement

Let $T$ be a finite simplicial triangulation of a connected compact PL three-manifold $M$, and let $S\subset\operatorname{int}M$ be a nonempty connected closed normal surface. If $|S\cap e|$ is even for every edge $e$ of $T$, then $M\setminus S$ is disconnected. More precisely, its points admit a locally constant coloring by $\{0,1\}$, equal to $0$ at every triangulation vertex and changing color across every local sheet of $S$.

Thus a nonseparating connected closed normal surface meets at least one original triangulation edge an odd number of times. This conclusion is finite and requires no orientability, irreducibility, duality or choice hypothesis.

## Statement references

[[def-normal-surface-coordinate-box]] — normal disks and their edge intersections.

## Facts & Assumptions

**Given:** The finite triangulation, connected closed normal surface and even edge counts.

[F1] Each normal disk separates its tetrahedron into two sides: a triangle cuts off one vertex, and a quadrilateral separates one pair of opposite vertices from the other pair. This is the disk-type condition in [[def-normal-surface-coordinate-box]], not an assertion about an arbitrary disk with an unspecified embedding. Its restriction to a face it meets is one separating proper normal arc.

[F2] A finite disjoint family of proper polygonal arcs in a triangle cuts it into disk regions, with a tree as its region-adjacency graph. Add the arcs one at a time; polygonal separation shows that each splits one region into two. A coloring that changes across every arc is therefore determined by its value in any one region. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

## Proof

1.1 Fix a tetrahedron $\Delta$ and its first vertex $a$ in a finite ordering. For each disk $Q$ of $S\cap\Delta$, give its side containing $a$ the label $0$ and its other side the label $1$, as allowed by [F1]. At a point $x\in\Delta\setminus S$, let $c_\Delta(x)$ be the sum modulo $2$ of these finitely many side labels. This is locally constant off the disks, has $c_\Delta(a)=0$, and changes by exactly one across each local sheet, since the disks are disjoint. The same construction on face and edge germs gives its continuous restriction to their complements. [given, F1, construct]

2.1 Every vertex $b$ of $\Delta$ has color $0$. Along its edge from $a$, the color changes once at each normal disk crossing, so $$c_\Delta(b)-c_\Delta(a)=|S\cap [a,b]|\pmod2.$$ Each edge of a tetrahedron is an actual edge of the supplied simplicial triangulation. The assumed even count makes the right side zero. Thus all four vertex colors agree with $c_\Delta(a)=0$. [given, step 1.1, algebra]

3.1 If tetrahedra $\Delta,\Delta'$ share a face $f$, their surface arcs in $f$ agree by normal matching. Both colorings change across exactly those arcs. By [F2], their restrictions to the complement of the arcs are determined by the color near a vertex of $f$. Both give that color $0$ by step 2.1, so they agree on the entire face complement. They also agree at all its edge-complement points by the same local restriction. Hence all tetrahedral colorings glue to a coloring $c:M\setminus S\to\{0,1\}$. [given, F2, step 1.1, step 2.1, construct]

4.1 This glued coloring is locally constant also at a face, edge or vertex of the triangulation. Indeed, finitely many tetrahedral sectors meet there; each has a neighborhood missing $S$ when the point is outside $S$, and step 3.1 equates their colors along the common face sectors. The manifold link connects the incident sectors, so their union has just one color near that point. At a local sheet of $S$, the two colors differ by step 1.1, and the gluing respects this across faces. Since $S$ is nonempty, both colors occur near one of its disk interiors. The two nonempty inverse images $c^{-1}(0)$ and $c^{-1}(1)$ are disjoint open subsets whose union is $M\setminus S$. This proves separation and its contrapositive. Every ordering and sum used above is finite. [given, step 1.1, step 3.1, construct] ∎
