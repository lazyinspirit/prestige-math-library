---
id: lem-boundary-exchange-middle-disks-have-positive-original-edge-weight
kind: lemma
title: "Boundary exchange middle disks have positive original edge weight"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-boundary-exchange-leaf-caps-for-a-least-weight-disk-have-rigid-edge-counts
  - lem-embedded-projective-planes-meet-the-one-skeleton-of-a-finite-three-triangulation
  - lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

In the leaf/opposite-cap construction of [[lem-boundary-exchange-leaf-caps-for-a-least-weight-disk-have-rigid-edge-counts]], write the regular disk as $F=E+K+E'$, where $E,E'$ are its two end disks and $K$ is the middle disk. Then $w(K)>0$. In particular

$$w(F)>2w(E)=2w(E').$$

This holds without excluding projective planes from the ambient manifold. The one-skeleton and all switches are those of the original triangulation.

## Statement references

[[lem-embedded-projective-planes-meet-the-one-skeleton-of-a-finite-three-triangulation]] — impossibility of a projective plane missing every original edge.

## Facts & Assumptions

**Given:** The retained original normal diagram and its leaf/opposite-cap disks.

[F1] The irregular resolution of the last proper double arc $\alpha$ joins $E,E'$ into an embedded disk $W$ with inessential boundary and joins the two cut sides of $K$ to each other. All other double arcs are already regularly resolved. There are no other image intersections, and every switch misses $T^{(1)}$. Also $N(E)=N(E')$. ([[lem-boundary-exchange-leaf-caps-for-a-least-weight-disk-have-rigid-edge-counts]])

[F2] A connected finite boundary surface of Euler characteristic zero is an annulus or a Mobius band. ([[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]])

[F3] A polygonal simple closed curve contained in the interior of a triangle bounds a polygonal disk inside that triangle. A disk attached to the boundary of a Mobius band gives the projective plane, by its one-crosscap polygon model. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]], [[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]])

[F4] No embedded projective plane in $\operatorname{Int}M$ can miss $T^{(1)}$. ([[lem-embedded-projective-planes-meet-the-one-skeleton-of-a-finite-three-triangulation]])

## Proof

1.1 Suppose $w(K)=0$. The other component of the irregular resolution [F1] is the surface $V$ obtained by joining the two cut-arc sides of the disk $K$. It is connected, embedded and proper; the sole remaining image double arc was resolved. Identifying those two boundary intervals by a joining strip reduces Euler characteristic from one to zero, and its remaining original-boundary intervals are nonempty. Thus $V$ is an annulus or Mobius band by [F2]. It has zero edge weight, since $K$ does and the joining strip misses all edges. [given, F1, F2, construct, algebra]

2.1 Each component of $\partial V$ is contained in one open original boundary face. Indeed it is a connected polygonal curve in $\partial M\setminus T^{(1)}$, whose components are the open boundary triangles. If $V$ were a Mobius band, [F3] would cap its sole boundary circle by a disk $B$ inside that face. The union $V\cup B$ is an embedded projective plane, still missing $T^{(1)}$. It may be pushed into $\operatorname{Int}M$ while preserving that property. Here a finite local construction suffices: take a compact polygonal subdisk of that same open face containing $B$ in its interior, use the adjacent tetrahedron's affine face prism, and move its bottom subdisk a sufficiently small distance inward, tapering the displacement to zero near the outer prism boundary. Triangulate its finitely many graph-bottom cells and cone matching faces to give an injective PL prism map; on the top and outer sides use the identity. The map moves $B$ and the adjoining collar of $V$ inward. The compact surface misses the old edges, so choose the displacement smaller than its positive distance from them. This gives the embedded interior projective plane excluded by [F4]. Thus $V$ is an annulus. [F3, F4, step 1.1, construct, contradiction]

3.1 Label the endpoints of $\alpha$ by $p,q$. Before the join, the two cut sides on $K$ each run from a copy of $p$ to a copy of $q$. In the annular case its two complementary original-boundary arcs connect the two $p$ copies and the two $q$ copies respectively: joining the cut sides without interchanging their ends gives an annulus, whereas interchanging the ends gives the Mobius rectangle model. Consequently one boundary circle of $V$ consists of the $p$-connecting old arc and the short joining arc at $p$; the other is the corresponding $q$ circle. By step 2.1 each such circle lies in the open original face of its endpoint. Its two constituent paths are therefore homotopic with endpoints fixed in that convex face. [F1, F2, step 1.1, step 2.1, construct]

4.1 The regular disk boundary follows the original boundary arc of $E$, one of the two old arcs of $K$, the boundary arc of $E'$, and the other old arc of $K$, with the directions determined by the annular endpoint matching in step 3.1. The irregular disk $W$ follows the same $E,E'$ arcs with the short joining paths at $p,q$ instead. The endpoint-fixed face homotopies in step 3.1 therefore make $\partial F$ freely homotopic to $\partial W$, up to reversal. But the former is essential and the latter is null-homotopic by [F1], a contradiction. This excludes $w(K)=0$. Finally [F1] gives $w(E)=w(E')$ and $w(F)=w(E)+w(K)+w(E')$, so $w(F)>2w(E)$ as stated. [given, F1, step 3.1, contradiction, algebra] ∎
