---
id: thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting
kind: theorem
title: "Every closed oriented smooth three-manifold has a Heegaard splitting"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-axiom-of-choice
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - def-heegaard-splitting-of-closed-oriented-three-manifold
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Danny Calegari, Notes on 3-Manifolds"
      url: "https://sschleimer.warwick.ac.uk/Teach/2021_3MFDS/References/2014notes_on_three-manifolds.pdf"
      locator: "Proposition 3.22, §3, printed p. 23"
---

## Statement

Assume the Axiom of Choice. Every nonempty closed connected oriented smooth $3$-manifold admits a Heegaard splitting, meaning a union of two orientable handlebodies of the same genus along their common boundary surface.

## Statement references

[[def-heegaard-splitting-of-closed-oriented-three-manifold|Definition of a Heegaard splitting]]

[Danny Calegari, Notes on 3-Manifolds, Proposition 3.22](https://sschleimer.warwick.ac.uk/Teach/2021_3MFDS/References/2014notes_on_three-manifolds.pdf)

## Facts & Assumptions

**Given:** Full AC and a nonempty closed connected oriented smooth $3$-manifold $M$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]: under AC, every compact smooth manifold has a finite corner-adapted triangulation; for closed $M$ the triangulation has no boundary faces.

[F2] [[def-heegaard-splitting-of-closed-oriented-three-manifold]]: a Heegaard splitting is a union of two orientable handlebodies with the same common boundary surface, glued by an orientation-reversing boundary diffeomorphism.

## Proof

1.1 By [A1] and [F1], choose a finite triangulation $\mathcal T$ of $M$. Its $1$-skeleton is connected: if it were disconnected, each simplex would have all its vertices in a single graph component because every pair of vertices of a simplex is joined by an edge; the realization would therefore be a disjoint union of nonempty subcomplexes, contrary to connectedness of $M$. [given, A1, F1, algebra, choose]

2.1 In the barycentric subdivision, thicken the finite embedded $1$-skeleton by taking disjoint small $3$-balls at its vertices and disjoint narrow tubes around the edge interiors, each tube meeting its endpoint balls in end disks. The vertex balls joined by the tubes along a spanning tree form a $3$-ball: adding a leaf ball and its joining tube joins two balls along a tube and again gives a ball. Each remaining edge tube attaches along two disks to this connected boundary and is one $1$-handle. There are $|E|-|V|+1$ such edges; the cycles formed by each non-tree edge with its spanning-tree path form a basis of the graph's first homology, so this number is $b_1$. The resulting connected orientable manifold is a handlebody of genus $b_1$ by the definition. [given, step 1.1, construct]

2.2 In the barycentric dual cell structure, put one vertex in each tetrahedron and join two such vertices through the barycentre of each common triangular face. This dual graph is connected: choose a piecewise-linear path between interior points of any two tetrahedra and perturb its finitely many segments inside simplex stars so it avoids the primal $1$-skeleton and meets triangular faces transversely. Each crossing then passes between tetrahedra sharing that face, producing a finite path in the dual graph. [given, step 1.1, construct]

3.1 Take the vertex balls and edge tubes in step 2.1 as the primal barycentric blocks, so their complement is made of the dual blocks. In each tetrahedron the complementary block is a $3$-ball about its barycentre; across each common triangular face, the two balls join by a tube about the dual edge through that face. Thus the dual balls and tubes form the closure of $M\setminus\operatorname{int}H_-$. The dual graph is connected by step 2.2; joining its vertex balls along a spanning tree gives a $3$-ball, and each other dual edge contributes one $1$-handle. Thus the complementary closure is a handlebody $H_+$. Since $M$ is closed, its boundary is the same surface $\Sigma=\partial H_-$ as the boundary of $H_+$. [step 1.1, step 2.1, step 2.2, construct]

4.1 Both boundaries are $\Sigma$, so the handlebodies have equal genus by the definition of genus as the genus of their boundary. Their induced boundary orientations are opposite because they are the two sides of the oriented manifold $M$; the gluing map is therefore orientation-reversing. By [F2], $M=H_-\cup_\Sigma H_+$ is a Heegaard splitting. [given, F2, step 2.1, step 3.1] ∎

## Diagram

The two rounded regions denote the regular neighbourhoods of the primal and dual graphs. Their shared curve represents the common boundary surface schematically; the drawing does not specify the graph or gluing map, and the proof above does not use it.

~~~tikz
\begin{tikzpicture}
  \draw[thick,rounded corners] (-2,-1) rectangle (2,-0.15);
  \draw[thick,rounded corners] (-2,0.15) rectangle (2,1);
  \draw[thick] (-2,0) -- (2,0);
  \node at (0,-0.58) {$H_-$: neighbourhood of $\mathcal T^{(1)}$};
  \node at (0,0) [above] {$\Sigma$};
  \node at (0,0.58) {$H_+$: neighbourhood of the dual graph};
\end{tikzpicture}
~~~
