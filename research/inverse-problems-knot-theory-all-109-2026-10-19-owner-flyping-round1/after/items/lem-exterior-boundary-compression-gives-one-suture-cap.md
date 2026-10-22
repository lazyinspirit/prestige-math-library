---
id: lem-exterior-boundary-compression-gives-one-suture-cap
kind: lemma
title: "An exterior boundary compression gives a one-suture cap"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the argument uses collars of the supplied finite surface and a single supplied disk, and the classification of one embedded arc in an annulus."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, End-essential spanning surfaces for links in thickened surfaces, Definition 1.6 and exterior formulation, manuscript pp. 3–4"
      url: "https://arxiv.org/pdf/2210.03218v2"
    - title: "Thomas Kindred, How natural of a geometric operation is Murasugi sum?, Appendix, Remark 5.15, manuscript p. 27"
      url: "https://arxiv.org/pdf/2609.13093v1"
---

## Statement

Let $F$ be a compact smoothly embedded spanning surface for a link $L\subset S^3$, supplied with a finite disk-and-band presentation. Let $E=S^3\setminus\operatorname{int}\nu L$, and regard $F_E=F\cap E$ as a properly embedded surface, with one boundary curve on each boundary torus of $E$. Suppose $F_E$ is geometrically incompressible: every embedded disk in $E$ whose interior misses $F_E$ and whose boundary lies in $F_E$ has boundary bounding a disk in $F_E$.

Cut $E$ along $F_E$ to obtain $N$. Its boundary contains the normal double cover $P$ of $F_E$ and, for each component of $L$, an annulus $A_i$ obtained by cutting its boundary torus along the boundary curve of $F_E$. Choose a core $s_i$ of each $A_i$, and put $s=\bigcup_i s_i$. If $F_E$ has an exterior boundary-compressing disk, meaning an embedded disk $X\subset E$ with boundary the union of an arc $\beta\subset F_E$ and an arc $\alpha\subset\partial E$, interior disjoint from $F_E\cup\partial E$, and with $\beta$ not boundary-parallel in $F_E$, then there is a properly embedded disk $\widetilde X\subset N$ whose boundary meets $s$ transversely in exactly one point. In particular, the absence of such one-suture disks, together with geometric incompressibility, implies geometric incompressibility and boundary-incompressibility in the link exterior.

## Statement references

[Kindred, *End-essential spanning surfaces for links in thickened surfaces*, Definition 1.6](https://arxiv.org/pdf/2210.03218v2)

[Kindred, *How natural of a geometric operation is Murasugi sum?*, Remark 5.15](https://arxiv.org/pdf/2609.13093v1)

## Facts & Assumptions

**Given:** The surface, exterior, cut manifold and boundary annuli in the statement, together with an exterior boundary-compressing disk $X$.

[F1] Geometric incompressibility and the condition that $\beta$ is not boundary-parallel are hypotheses, rather than consequences of a homology calculation.

[F2] A boundary-parallel proper arc in a surface is one which, together with an arc in the surface boundary, bounds an embedded disk in that surface.

## Proof

1.1 Lift $X$ to the cut manifold $N$. The interior lifts without identification because it misses $F_E$. Along $\beta$, the disk selects a continuous side of $F_E$, giving one lift of this arc to $P$. The other boundary arc lifts into a single annulus $A_i$, since the interior of $\alpha$ misses the boundary curves of $F_E$. Thus the lifted disk is properly embedded, with one boundary arc in $P$ and the other a proper embedded arc of $A_i$. [given, construct]

2.1 A proper embedded arc in an annulus either has both endpoints on the same boundary circle and cuts off a disk, or joins the two boundary circles. To see this directly, cut the annulus along an arc joining its boundary circles and unwrap its translates to a strip. A lift of the given embedded arc has disjoint integer translates. If both ends lie on the same edge of the strip, the interval between them on that edge and the lifted arc bound a disk on the strip side; the interior of this disk cannot meet a translate of the arc, since an innermost such translate would have interlaced endpoints, forcing an intersection. This disk therefore projects injectively to a disk in the annulus. If the endpoints lie on different edges, the arc is a spanning arc. Cutting along a spanning arc gives a disk, so its position is a product arc in some product parametrization of the annulus. [step 1.1, construct]

3.1 The same-boundary case is impossible here. Its annular disk descends to a disk $Q$ in the boundary torus, with boundary $\alpha\cup\eta$, where $\eta$ is an arc of $\partial F_E$; its interior misses $\partial F_E$. Join $X$ and $Q$ along $\alpha$ and push the interior slightly off the torus. The result has boundary $\beta\cup\eta$ and interior disjoint from $F_E$. Both endpoints of the lifted $\alpha$ lie on the same boundary circle of $A_i$, so the selected side of $F_E$ at the two ends agrees along $\eta$. In a thin boundary collar of $F_E$, move the portion $\eta$ slightly into $F_E$, simultaneously adjusting the disk near that portion; this gives a disk whose simple closed boundary $\gamma$ lies in the interior of $F_E$. By [F1], $\gamma$ bounds a disk in $F_E$. The collar between $\eta$ and its displaced copy adjoins to that disk, yielding a disk in $F_E$ bounded by $\beta$ and a boundary arc. Thus $\beta$ is boundary-parallel by [F2], a contradiction. [F1, F2, step 1.1, step 2.1, construct]

4.1 Therefore the annular arc joins the two boundary circles. By the product parametrization in step 2.1, a core of $A_i$ can be chosen to meet this arc transversely once. Any two cores of an annulus are isotopic: cut along a spanning arc and straighten a core in the resulting disk, then reglue. Apply the inverse of such a core isotopy to the annular arc, and extend this boundary isotopy to a collar in $N$, moving the lifted disk with it. The resulting disk meets the prescribed $s_i$ once along its boundary. Its remaining boundary arc lies in $P$, so it misses every other $s_j$. This gives the required $\widetilde X$. [step 1.1, step 2.1, step 3.1, construct]

5.1 If there are no one-suture disks in $N$, step 4.1 rules out every exterior boundary-compressing disk. Combined with the assumed geometric incompressibility, this is the stated essentiality conclusion. The argument never restricts the longitudinal winding of $\alpha$; a spanning arc may wind before it meets the core once. It therefore does not identify arbitrary exterior boundary compression with meridional boundary compression of a spanning surface. [given, F1, step 4.1, construct] ∎
