---
id: lem-two-point-sphere-cuts-unknot-into-boundary-parallel-arcs
kind: lemma
title: "A two-point sphere cuts the unknot into boundary-parallel arcs"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-knot-connected-sum-and-prime-knot
  - lem-relative-transversality-for-embedded-surfaces
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the relative transversality, smooth sphere and surface disk suppliers. The intersection surgeries are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1 case (2), printed pp.39–40; local ball-arc prerequisite for its annulus-splitting step"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $K\subset S^3$ be a smooth unknot and let $S\subset S^3$ be a smoothly embedded sphere transverse to $K$ in exactly two points. Write $B_1,B_2$ for its closed ball sides and $a_i=K\cap B_i$. For each $i$ there is an embedded disk $E_i\subset B_i$ with boundary $a_i\cup b_i$, where $b_i\subset S$ is a simple arc with the same endpoints as $a_i$, and $\operatorname{int}E_i\subset\operatorname{int}B_i$. Thus both ball arcs are boundary-parallel. Disks and arcs may have the usual rounded corners at the two endpoints.

## Statement references

[[def-countable-choice]]

[[def-knot-connected-sum-and-prime-knot]]

## Facts & Assumptions

**Given:** Countable choice, the smooth unknot and the transverse two-point sphere.

[F1] An unknot is ambient isotopic to the standard round circle; carrying its planar spanning disk through that isotopy gives a smooth embedded spanning disk. ([[def-knot-connected-sum-and-prime-knot]])

[F2] A compact embedded surface whose boundary is transverse to a closed embedded surface can be made transverse by an isotopy fixed near its boundary, under countable choice. ([[lem-relative-transversality-for-embedded-surfaces]], [[def-countable-choice]])

[F3] The two closed sides of a smooth embedded sphere in $S^3$ are smooth balls under countable choice. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F4] A regular nullhomotopic circle in a surface bounds a disk region; on a sphere there are two complementary disk regions. For a circle on the given sphere, [F3] identifies the sphere with the standard sphere, and stereographic projection from a point outside the circle supplies a planar linear nullhomotopy. The finite surface normal forms also show that a proper embedded arc in a disk splits it into two disks. For smooth input these disk regions inherit smooth interiors and can have corners rounded in boundary coordinates. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

## Proof

1.1 Take a smooth spanning disk $E$ for $K$ from [F1] and make it transverse to $S$ using [F2]. Its intersection with $S$ is a compact one-manifold with boundary exactly the two points $K\cap S$. Consequently it consists of one proper arc $\alpha\subset E$ and finitely many circles. Indeed every compact one-manifold has finitely many interval and circle components, and precisely one interval is needed to account for these two boundary points. [given, F1, F2, construct]

2.1 If circles occur, choose a circle $c$ bounding a disk $Q\subset S$ whose interior contains neither $\alpha$ nor another intersection circle. Such a choice exists by finite nesting. The disjoint circles cut the sphere into regions with a tree as dual graph: each additional separating circle splits one region in two. Root this tree at the region containing the connected arc $\alpha$ and take a leaf other than the root. Its closure is the required disk $Q$, using the sphere disk regions in [F4]. Thus $\operatorname{int}Q\cap E=\varnothing$ and $Q\cap K=\varnothing$. The circle $c$ also bounds a subdisk $E_c$ in the interior of $E$. This subdisk misses $\alpha$, since $\alpha$ is connected, disjoint from $c$ and has its endpoints on $\partial E$. [F4, step 1.1, construct]

3.1 Replace $E_c$ by a nearby parallel copy of $Q$, keeping the component with the original boundary $K$. This yields another embedded spanning disk. To see this locally, the interior of $Q$ misses $E$ by step 2.1; push it a sufficiently small distance to the side of $S$ containing the retained collar of $E\setminus E_c$, and join it to that collar in product coordinates along $c$. The push and corner rounding introduce no intersection with $S$ or with the retained disk. Outside this collar everything is unchanged. The operation removes $c$ and any intersection circles in $E_c$, introduces none, and preserves $\alpha$. Repeating finitely often produces an embedded spanning disk, still denoted $E$, with $E\cap S=\alpha$. No assertion that these disk replacements are ambient isotopies is needed. [step 2.1, construct]

4.1 Cut this disk along $\alpha$. By [F4] there are two disks, each bounded by $\alpha$ and one of the two arcs into which $K\cap S$ divides $K$. Their interiors miss $S$. Near $\alpha$, transversality places the two disk interiors on opposite sides of $S$; connectedness keeps each interior on its respective side. By [F3] these are the two balls $B_1,B_2$, and the corresponding boundary arcs of $K$ are $a_1,a_2$. The two cut disks are therefore the required $E_i$, with $b_i=\alpha$ on their common boundary sphere. Local endpoint coordinates provide the stated corner convention. [F3, F4, step 1.1, step 3.1, construct] ∎
