---
id: lem-author-d4ce11000001-spherical-arrangement-cells
kind: lemma
title: The seven D4 planes give a finite spherical cellulation
status: draft
domain: mathematics
origin: pipeline
deps:
  - ex-d4-restricted-arrangement-artin-tits-normalisers
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
dependency_roles:
  ex-d4-restricted-arrangement-artin-tits-normalisers: mathematical-premise
  math:def-cw-complex-with-closure-finiteness-and-weak-topology: mathematical-premise
proof_strategy: explicit
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 10
formulation_deps:
  - ex-d4-restricted-arrangement-artin-tits-normalisers
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
argument_deps:
  - ex-d4-restricted-arrangement-artin-tits-normalisers
  - math:def-cw-complex-with-closure-finiteness-and-weak-topology
---

## Statement

Let $\mathcal A$ be the seven planes with forms $X,Y,Z,X+Y,X+Z,Y+Z,X+Y+Z$. Their intersections with the unit sphere $S^2=\{(X,Y,Z):X^2+Y^2+Z^2=1\}$ give a finite regular cell decomposition: its open faces are chamber intersections, its open edges are great-circle arcs between intersection points, and its vertices are the intersection points. Here regular means every closed cell is embedded and homeomorphic to a closed disk, with its boundary a union of lower-dimensional cells.

## Statement references

[[ex-d4-restricted-arrangement-artin-tits-normalisers]]

[[math:def-cw-complex-with-closure-finiteness-and-weak-topology]]

## Facts & Assumptions


[F1] The Example in [[ex-d4-restricted-arrangement-artin-tits-normalisers]] states that the independent coordinates $x=f(\alpha_1)$, $y=f(\alpha_3)$ and $z=f(\alpha_4)$ identify the relative arrangement with the kernels of $x,y,z,x+y,x+z,y+z,x+y+z$, and that its chambers are precisely the nonempty strict sign regions. Rename these coordinates $X,Y,Z$ here.

[F2] A finite CW decomposition means finitely many disk characteristic maps with closure-finite weak topology, as in [[math:def-cw-complex-with-closure-finiteness-and-weak-topology]].

## Proof


**Given:** The data in the Statement and the exact supplier facts above.

**Goal:** Establish the Statement.

1.1 The three coordinate planes are present. Each spherical chamber lies in one coordinate octant, so its closure lies in a hemisphere where $h=\epsilon_1X+\epsilon_2Y+\epsilon_3Z>0$, with the octant signs $\epsilon_i$. Radial projection $v\mapsto v/h(v)$ identifies that closed spherical chamber with the section of its closed polyhedral cone by $h=1$. This section is a compact convex polygon with nonempty interior: the octant gives boundedness, and the chamber is full-dimensional. A compact convex polygon is a closed disk by radial lines from any interior point, and its vertices correspond to the cone's extreme rays, while its edges correspond to the cone's two-dimensional facets. [F1]

2.1 Every plane pair meets in a line, giving two sphere points; there are finitely many such points. They split each great circle into finitely many arcs. The polygonal disks from step 1.1, their arcs and vertices cover the sphere, with disjoint open cells and with intersections unions of faces, as follows from their weak linear sign inequalities. Each closed cell is embedded and closed in $S^2$: it is specified on the sphere by finitely many weak linear sign inequalities and equalities. There are finitely many cells, so closure finiteness holds. [F1, F2, step 1.1]

3.1 To check the weak topology in [F2], let $B\subseteq S^2$ have $B\cap\overline e$ closed in $\overline e$ for every cell $e$. Since $\overline e$ is closed in $S^2$, each $B\cap\overline e$ is closed in $S^2$. The closed cells cover the sphere, so $B=\bigcup_e(B\cap\overline e)$ is a finite union of closed subsets and is closed. Conversely, a closed subset of $S^2$ has closed intersection with each closed cell in its subspace topology. The same argument on each skeleton, using its finitely many closed cells, shows that its topology is the quotient topology of the disk attachments along their boundaries: a set is closed exactly when its inverse image in every attaching disk and in the preceding skeleton is closed. Thus these characteristic maps, with the stated boundary faces, give the required CW attachments and weak topology. The asserted finite regular cell decomposition follows. [F2, step 1.1, step 2.1] ∎
