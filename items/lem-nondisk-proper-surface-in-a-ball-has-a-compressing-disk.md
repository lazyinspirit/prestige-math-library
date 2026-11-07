---
id: lem-nondisk-proper-surface-in-a-ball-has-a-compressing-disk
kind: lemma
title: "A nondisk proper surface in a ball has a compressing disk"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-collar-neighborhood-theorem
  - lem-relative-transversality-for-embedded-surfaces
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from collars, relative transversality and surface disk regions. All auxiliary disk surgeries are finite and strictly decrease the intersection-circle count."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jessica S. Purcell and Anastasiia Tsvietkova, Standard position for surfaces in link complements in arbitrary 3-manifolds, Theorem 6.2, printed p.16, condition (0); expanded finite ball prerequisite"
      url: "https://users.monash.edu/~jpurcell/papers/StandardPosition.pdf"
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1, printed pp.39–40"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $B$ be a supplied smooth closed $3$-ball and let $F\subset B$ be a compact neatly properly embedded smooth surface, possibly disconnected, with no closed components. If at least one component of $F$ is not a disk, there exists an embedded disk $X\subset\operatorname{int}B$ such that $X\cap F=\partial X$ and $\partial X$ does not bound a disk in $F$. The assertion concerns a geometric compressing disk for the whole surface; it does not require specifying its boundary component in advance.

## Statement references

[[def-countable-choice]]

[[lem-relative-transversality-for-embedded-surfaces]]

## Facts & Assumptions

**Given:** Countable choice, the ball, the compact neat proper surface and a nondisk component with nonempty boundary.

[F1] Smooth manifolds with boundary have collars under countable choice. A neat proper surface has simultaneous boundary coordinates in which the ball is a half-space and the surface a transverse half-plane. ([[thm-collar-neighborhood-theorem]], [[def-countable-choice]])

[F2] A compact embedded surface with boundary transverse to a closed embedded surface can be made transverse by an isotopy fixed near its boundary. ([[lem-relative-transversality-for-embedded-surfaces]])

[F3] A regular nullhomotopic circle in a surface bounds a disk region. On a sphere the two complementary regions are disks; in a disk an interior circle bounds a subdisk. Boundary disk and band normal forms give smooth versions for smooth input, with local corner rounding. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

## Proof

1.1 Choose a boundary circle $C$ of a nondisk component $P$ of $F$ and a sufficiently close interior parallel $c\subset P$. The circle $c$ does not bound a disk in $F$: its annular collar with $C$, together with such a disk, would give a disk component with boundary $C$, which must exhaust the connected component $P$, contrary to its choice. Parametrize the supplied ball by the standard ball. The circle $C$ bounds a disk $R$ on its boundary sphere by [F3], since stereographic projection from a point outside $C$ gives a planar linear nullhomotopy. A sufficiently short inward collar from [F1] can be chosen tangent to $F$ along $\partial F$: in its neat half-plane coordinates choose an inward field tangent to $F$, patch these finitely many local fields near $\partial F$, and extend it to the boundary collar. Thus the inward parallel copy $Q$ of $R$ has boundary $c$, lies otherwise in $\operatorname{int}B$, and near $c$ meets $F$ just along its boundary. [given, F1, F3, construct]

2.1 Make the interior of $Q$ transverse to $F$ while keeping its collar of $c$ fixed. One way to apply [F2] literally is to double the ball and the neat surface across their product boundary collars. The double of $F$ is a closed smooth embedded surface in the doubled ball. Remove a smaller boundary collar of $Q$; the resulting disk boundary is disjoint from the doubled surface and hence transverse. Apply [F2] to this smaller disk and reattach the unchanged collar. A sufficiently small perturbation stays in the interior of $B$. The result has intersection with $F$ equal to $c$ and finitely many interior circles: the intersections form a compact transverse one-manifold away from the boundary collar, with no endpoints there. [F1, F2, step 1.1, construct]

3.1 If an interior intersection circle bounds a disk in $F$, select such a disk whose interior misses $Q$. This is possible by finite nesting: inside any disk bounded by an inessential intersection circle, every intersection circle also bounds its inner disk there; choose an innermost one. The curve $c$ cannot lie in this disk, because it is essential in $F$ by step 1.1. Denote the selected disk by $A$ and its boundary by $d$. Surger $Q$ along two nearby copies of $A$, retain the disk with original boundary $c$ and discard the sphere. The interior of $A$ misses $Q$, so the result is embedded. Near $d$ push the retained copy of $A$ to the side of $F$ containing the retained collar of $Q\setminus d$ and round the seam. This removes $d$ and any intersection circles discarded with the other component and introduces none; the pushed disk is disjoint from $F$. It leaves the boundary collar of $Q$ unchanged. Repeating decreases the finite number of interior circles strictly, so after finitely many surgeries none of the remaining interior circles bounds a disk in $F$. [F3, step 1.1, step 2.1, construct]

4.1 If an interior intersection circle remains, choose one innermost on the auxiliary disk $Q$. Its inner subdisk $X$ has interior disjoint from $F$, lies in $\operatorname{int}B$, and has boundary not bounding a disk in $F$ by step 3.1. It is the required compression. If no interior circle remains, use $X=Q$: its interior misses $F$, and its boundary is the essential curve $c$ from step 1.1. In both cases a geometric compressing disk for $F$ has been constructed. [F3, step 1.1, step 3.1, construct] ∎
