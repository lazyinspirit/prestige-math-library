---
id: lem-bubble-disk-pieces-satisfy-the-sphere-euler-count
kind: lemma
title: "Bubble disk pieces satisfy the sphere Euler count"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-euler-poincare-formula-for-finite-cw-complexes
  - cor-homology-of-spheres
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the supplied finite disk pieces directly give a finite CW structure. No triangulation-existence theorem is invoked."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, printed pp.39–42, saddle and shifted-sphere decompositions"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Let a sphere $T$ be decomposed by finitely many crossing balls and two complementary open-side balls, with compatible corner conventions. Suppose each crossing-ball piece is a quadrilateral saddle disk, with two upper and two lower hemisphere arcs and four distinct equatorial corners, and each open-side piece is a disk. Let $s$ be the number of saddle disks, and let $u,\ell$ be the numbers of upper and lower disk pieces. Along the common projection face the upper and lower pieces are glued, and at each equatorial corner one upper piece, one lower piece and its saddle meet in the usual three-sector chart. Then
$$u+\ell-s=2.$$
In particular if there is exactly one upper and one lower piece, there are no saddles. Link punctures on the common-face arcs do not change this count.

## Facts & Assumptions

**Given:** The sphere, its finite disk pieces, quadrilateral saddle corners and the stipulated gluing charts.

[F1] For a finite CW complex, its alternating cell count is the alternating rank sum of integral homology. ([[thm-euler-poincare-formula-for-finite-cw-complexes]])

[F2] The integral homology of a sphere $S^2$ has rank one in degrees zero and two and rank zero in other degrees. ([[cor-homology-of-spheres]])

## Proof

1.1 Use the saddle boundaries and the common-face arcs as a finite graph on $T$. The saddle corners give $4s$ vertices. There are $4s$ hemisphere edges, one for each saddle boundary arc. At each corner the stated three-sector chart has exactly one further edge in the common projection face, so these further nonclosed arcs have $4s$ endpoints and give $2s$ edges. There can also be $z$ whole common-face circles with no saddle corner. Put one auxiliary vertex and one loop edge on each. This gives $4s+z$ vertices and $6s+z$ edges. A link puncture may be left in the interior of an edge; subdividing at it adds one vertex and one edge and changes no alternating count. [given, construct]

2.1 The complementary open cells are precisely the $u+\ell+s$ supplied disk interiors. Their characteristic maps are the supplied disk parametrizations, with the finite boundary arcs attached to the graph just counted. This is a finite CW structure on $T$: the boundary maps have finite image in the one-skeleton, and the quotient of finitely many compact cells onto the supplied Hausdorff surface has its usual topology. Therefore its alternating cell count is $(4s+z)-(6s+z)+(u+\ell+s)=u+\ell-s$. This includes $s=0$, where the auxiliary circle vertices provide the one-skeleton. [given, step 1.1, construct, algebra]

3.1 By [F1] and [F2] the same alternating count is $1+1=2$. Thus $u+\ell-s=2$, and $u=\ell=1$ forces $s=0$. The optional puncture subdivisions cancel as shown in step 1.1. [step 1.1, step 2.1, F1, F2, algebra] ∎
