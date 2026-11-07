---
id: lem-uppermost-saddle-rectangle-supplies-a-meridional-disk
kind: lemma
title: "An uppermost saddle rectangle supplies a meridional disk"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball
  - lem-empty-boundary-rectangle-supplies-a-surface-bridge-disk
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-meridional-splitting-retains-a-nontrivial-decomposing-sphere
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the bridge, sphere-separation and nontrivial-child suppliers; all level and intersection data are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1 case (2), printed p.40, Figure 5(a)"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $S$ be a smooth sphere transverse to a smooth link $L$ in two points. Supply a unit coordinate crossing ball $C$, with $L\cap C$ exactly the upper semicircle $A_+=\{y=0,x^2+z^2=1,z\ge0\}$ and lower semicircle $A_-=\{x=0,y^2+z^2=1,z\le0\}$. Suppose $S\cap C$ is a nonempty finite collection of ordered disks $D_h$ from the explicit quadrilateral saddle foliation, disjoint from $L$. Let $\sigma=D_{h_*}$ have the largest level parameter.

Supply a ball $B$ with interior disjoint from $C\cup L$, having the upper hemisphere $H=\partial C\cap\{z\ge0\}$ as a boundary face. Suppose $S\cap B$ is a finite family of neat proper disks, and both upper boundary arcs of $\sigma$ lie on the same component $E$. Let $R\subset H$ be the central rectangle between those arcs, containing $A_+$, and suppose $\operatorname{int}_H R$ misses $S$. Use supplied compatible corner roundings at shared faces.

Then there is an embedded disk $D$ whose boundary is the union of an arc in $\sigma$ and an arc in $E$, whose interior misses $S$, and which meets $L$ transversely in exactly one interior point. Its boundary separates the two punctures on $S$. If both side tangles of the two-point sphere are nontrivial, meridional surgery along $D$ has a child sphere with both side tangles nontrivial. This assertion does not assert a saddle decrease for that child.

## Statement references

[[def-countable-choice]]

[[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]]

## Facts & Assumptions

**Given:** Countable choice and the supplied sphere, link, two coordinate-side balls, ordered saddle disks, uppermost saddle, disk piece and central empty rectangle.

[F1] For $|h|<1$ in the supplied middle band the saddle is the graph defined by $z+x^2-y^2-hd(z)=0$, with positive $z$ derivative; its upper boundary arcs surround the positive and negative $y$ directions, and higher levels lie strictly above lower levels. The overpass has $q\ge1$ and the underpass $q\le-1$. ([[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]])

[F2] In a ball cut along one member of a finite proper disk family, an empty boundary rectangle supplies a bridge disk on its side ball, avoiding all disk components. Its proof uses a boundary-sphere cap pushed inward and finite circle surgeries fixed near the boundary. ([[lem-empty-boundary-rectangle-supplies-a-surface-bridge-disk]])

[F3] Every smooth sphere in $S^3$ separates it into two balls under countable choice. A closed link component meets a transverse separating sphere an even number of times, since each crossing changes its ball side. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F4] A meridional disk on one side of a two-point sphere, whose boundary separates the punctures, has a nontrivial decomposing child whenever both original side tangles are nontrivial. ([[lem-meridional-splitting-retains-a-nontrivial-decomposing-sphere]])

## Proof

1.1 In the plane $x=0$, the section $\eta=\sigma\cap\{x=0\}$ is one graph arc joining the two upper boundary arcs of $\sigma$. Indeed its equation is $z-y^2-h_*d(z)=0$ with strictly positive $z$ derivative by [F1]. The boundary endpoints on the sphere lie in the upper hemisphere because $q\le-1$ along the lower semicircle, whereas $h_*>-1$. The upper meridian $\rho\subset H\cap\{x=0\}$ joining these two endpoints lies in $R$, passing through the north pole. The planar region $\Omega$ between $\eta$ and $\rho$ is a disk. Its interior lies strictly above $\sigma$, so misses every other saddle by uppermostness and [F1]. It misses the underpass, which lies below $\sigma$, and meets the overpass only at the north pole, presently on its boundary arc $\rho$. [given, F1, construct]

2.1 Indent the central rectangle slightly into the side ball of $B$ cut along $E$, keeping its attaching arcs fixed. In a boundary collar this replaces $t\ge0$ by $t\ge\gamma$ for a small nonnegative function supported inside $R$; the map $t\mapsto t-\gamma\chi(t)$ has positive derivative after shrinking $\gamma$. Denote the pushed core by $\rho^+$. Extend $\Omega$ by the collar strip between $\rho$ and $\rho^+$, making the north pole an interior point. This extension is on the exterior side of the indented side ball, whereas a bridge constructed inside that ball will lie on its other side. The strip can be arbitrarily small; away from its attaching endpoints $R$ misses $S$, so it introduces no sphere intersection. In the $x=0$ plane the overpass tangent at the north pole is in the $x$ direction. Thus the extended disk meets it transversely once. The underpass remains below $\eta$, and compact small collars avoid all other parts of $L$, giving exactly this one link intersection. [step 1.1, F1, construct]

3.1 Choose any proper arc $\beta\subset E$ joining the endpoints of $\rho^+$. Use the boundary-cap and circle-elimination construction of [F2] inside the indented side ball to obtain a bridge disk $Q$ with boundary $\beta\cup\rho^+$, interior disjoint from all disk pieces. Its interior lies on the side of $\rho^+$ opposite to the added strip in step 2.1. Glue it to the extended $\Omega$ along $\rho^+$ and round the seam using these opposite product collars. Their interiors are disjoint: one lies inside the indented side ball and the other lies in $C$ and its exterior collar strip. The union is consequently an embedded disk $D$ with boundary $\eta\cup\beta$. Its interior misses $S$, since the planar part lies above the uppermost saddle and the bridge missed all pieces in $B$. Its only link intersection is the transverse north-pole intersection from step 2.1, because $\operatorname{int}B$ misses $L$. Near its boundary, the graph section and the bridge collar are transverse to $S$, so $D$ is a proper disk in the closure of one side of $S$. [step 1.1, step 2.1, F2, construct]

4.1 The circle $\partial D$ must separate the two punctures of $S$. Otherwise it bounds a disk on $S$ containing neither puncture. Capping that disk by $D$, with its boundary corner rounded away from $L$, would produce an embedded sphere meeting $L$ in exactly one transverse point. This contradicts the even-intersection consequence of [F3]. Thus each complementary disk on $S$ contains exactly one puncture. [step 3.1, F3, construct, contradiction]

5.1 The disk from step 3.1 and puncture separation from step 4.1 give all hypotheses for the meridional-disk conclusion. If the original two side tangles are nontrivial, [F4] supplies a child sphere with nontrivial tangles on both sides. This is the stated nontrivial-child conclusion; no saddle count for that child was used. [step 3.1, step 4.1, F4] ∎
