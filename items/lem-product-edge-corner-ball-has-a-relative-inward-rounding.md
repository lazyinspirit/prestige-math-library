---
id: lem-product-edge-corner-ball-has-a-relative-inward-rounding
kind: lemma
title: "A product-edge corner ball has a relative inward rounding"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-euclidean-implicit-function-theorem
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from smooth cutoffs and smooth Schoenflies. The corner collars, their modifications and all surface intersection points are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, crossing-ball setup, printed pp.38–40; finite relative corner rounding is supplied here"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $B\subset S^3$ be an embedded topological closed ball with smooth boundary faces and finitely many disjoint edge circles. Supply disjoint product collars of the edges, with coordinates $(s,u,v)$, where $s$ is the circle parameter and $B$ has the local form $v\ge|u|$. Away from the edges its boundary is smooth. Let $\Sigma$ be a compact smooth surface without boundary, transverse to the smooth faces and to the edge circles. Let $K$ be a compact subset of $B$ disjoint from the edges, to be retained unchanged.

One may round the boundary inward to a smooth ball $B'\subset B$, agreeing with $B$ near $K$, so that $\Sigma\cap B'$ is a neat proper surface with the same component and boundary-circle counts and the same component homeomorphism types as $\Sigma\cap B$ with its corner charts. Moreover suppose finitely many adapter product boxes in the edge collars have closures disjoint from $\Sigma\cup K$, and contain supplied compact sets $Z_\nu$ in their interiors. The boxes may be taken with $|u|<a$, $|v|<b$, $a<b/4$, and the supplied sets with $v<b/4$. The rounding can additionally exclude every $Z_\nu$ from $B'$, by a boundary indentation supported in these boxes. Thus closed link pieces localized there can be kept out of the rounded ball interior while all specified surface pieces and compact cores are retained.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the cornered topological ball with the explicit product collars, the transverse compact surface, retained compact set and optional disjoint adapter boxes with their compact forbidden sets.

[F1] A smooth equation with nonzero derivative in one coordinate has a smooth local solution graph; higher smoothness follows from the implicit derivative formula. ([[thm-euclidean-implicit-function-theorem]])

[F2] A smooth embedded sphere in $S^3$ has smooth ball closures on both sides, under countable choice. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F3] Smooth cutoffs equal to one near a compact set and supported in a chosen open set exist under countable choice. ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]])

## Proof

1.1 In one edge collar replace the boundary graph $v=|u|$ by $v=f_\epsilon(u)=|u|+\chi(u)(\sqrt{u^2+\epsilon^2}-|u|)$, where $\chi=1$ near $u=0$ and vanishes before the ends of the collar. It is smooth: near zero it is the square-root graph and away from zero every term is smooth. It equals the old graph near the collar sides, lies above it and differs from it by at most $\epsilon$. Use sufficiently small positive constants in the finitely many collars, all with modification support disjoint from $K$. This gives an inward-rounded boundary except for optional further adapter indentations. It introduces no new edge, because each graph is smooth throughout its product collar and agrees with the smooth old faces at its ends. [given, F3, construct]

2.1 In an adapter box choose a nonnegative smooth bump $\gamma(s,u)$ supported in its $(s,u)$ rectangle and equal to a constant greater than $b/4$ on the projection of $Z_\nu$. Such a projection is compact in the rectangle. For example take the constant $b/3$, and choose the base $\epsilon$ smaller than $b/16$. The graph $f_\epsilon(u)+\gamma(s,u)$ is then strictly above every point of $Z_\nu$, since its $v$ coordinate is less than $b/4$. The part shaved off remains inside the box: $|u|<a<b/4$ and the total graph height is less than $b$ there. Taper the bump before the rectangle edges. The boxes are disjoint from $\Sigma\cup K$, so these extra indentations affect neither. All boundary replacements are smooth graphs lying above $|u|$, hence define a contained region $B'\subset B$. [step 1.1, F3, construct]

3.1 These replacements preserve the topological ball type. In each product collar set $d(s,u)=f_\epsilon(u)+\gamma(s,u)-|u|\ge0$, using $\gamma=0$ outside its boxes. The fiber map $v\mapsto v+d(s,u)\eta(v-|u|)$, with $\eta=1$ near zero and zero at the upper end of a slightly larger collar, is strictly increasing when $\|d\|_\infty\|\eta'\|_\infty<1$. The small graph heights and a larger surrounding collar ensure this inequality; the adapter boxes can first be chosen inside that collar. It carries the old boundary to the new graph and is the identity near the far collar boundary. It is a homeomorphism, with its continuous inverse on each fiber, and is allowed to be nonsmooth at $u=0$ because the original boundary was cornered. Its finite product extensions identify $B$ homeomorphically with $B'$. The new boundary is a smooth sphere by steps 1.1–2.1, so [F2] makes its contained region a smooth standard ball. No smooth map from a corner to a rounded face has been asserted. [step 1.1, step 2.1, F2, construct]

4.1 The intersections of $\Sigma$ with the edge circles form a finite set by compact transverse zero-dimensionality. Near each, transversality to the edge means the edge coordinate can be solved as $s=h(u,v)$ by [F1]. Thus the surface has local coordinates $(u,v)$, and its intersection with the original ball is exactly the quadrant-shaped region $v\ge|u|$. The adapter boxes miss $\Sigma$, so in these charts the new region is $v\ge f_\epsilon(u)$, independent of $s$. Rounding the tip of a quadrant preserves its disk and boundary-interval topology, relative to the outer chart boundary, by the same increasing fiber formula of step 3.1 applied in the surface's own $(u,v)$ coordinates. The new boundary on the surface is smooth and transverse, since the defining function $v-f_\epsilon(u)$ has nonzero $v$ derivative. Choose the constants small enough that all such charts are disjoint and that elsewhere the unchanged face transversality persists. These local replacements therefore preserve every component, every boundary circle and the homeomorphism type of each surface piece. [given, step 1.1, step 2.1, step 3.1, F1, construct]

5.1 Steps 1.1–3.1 give a contained smooth ball agreeing near $K$ and avoiding the forbidden sets, while step 4.1 gives the neat surface pieces with all the claimed topology unchanged. Empty edge or adapter families require no respective modification. Every selection used finitely many collars and finitely many transverse intersection points. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
