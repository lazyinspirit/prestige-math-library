---
id: lem-punctured-disk-window-slides-across-a-trivial-arc-ball
kind: lemma
title: "A punctured disk window slides across a trivial-arc ball"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-trivial-ball-arc-with-a-marked-boundary-window-is-standard
  - lem-the-extended-time-dependent-field-has-a-global-time-one-flow
  - thm-neat-submanifolds-have-boundary-adapted-slice-charts
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from marked ball standardization and compactly supported flows. The graph movie is explicit."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1 case (2), printed p.40; local puncture-slide construction supplied here"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $L$ be a smooth link and $S$ a smooth closed embedded surface in $S^3$. Supply a smooth closed ball $W$ and a disk $U\subset\partial W$ such that $W\cap S=U$, and put $V=\overline{\partial W\setminus U}$. Suppose $L\cap W$ is a neat proper boundary-parallel arc $a$ with endpoints $p\in\operatorname{int}U$ and $q\in\operatorname{int}V$, with an actual boundary-parallelism disk supplied. Thus $U$ contains precisely one transverse link intersection.

Let $K\subset S^3$ be closed with $K\cap V=\varnothing$. Then an ambient isotopy preserving $L$ setwise, supported in any prescribed neighborhood of $W$, takes $S$ to a surface that agrees with $S$ outside $\operatorname{int}U$ and replaces $U$ by a disk disjoint from $K$. It fixes a collar of $\partial U$ in $S$, and the new puncture lies arbitrarily close to $q$ on $a$. In particular the old intersections $U\cap K$ are deleted without affecting other surface pieces. Link preservation here is setwise: its intersection point with the moving window travels along $a$.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the link and surface, the supplied marked trivial-arc ball, its boundary-parallelism disk, the closed set avoiding its opposite boundary disk, and the desired support neighborhood.

[F1] A ball with a supplied boundary-parallel proper arc and a marked boundary disk containing exactly one endpoint is diffeomorphic to the round ball with vertical diameter and lower hemisphere, respecting the order of endpoints. ([[lem-trivial-ball-arc-with-a-marked-boundary-window-is-standard]])

[F2] A smooth compactly supported time-dependent field has a global smooth flow; its time maps are diffeomorphisms with inverse reverse flow, and uniqueness identifies any prescribed family of trajectories. ([[lem-the-extended-time-dependent-field-has-a-global-time-one-flow]])

[F3] A neat proper arc and the ambient boundary have simultaneous half-space slice charts. ([[thm-neat-submanifolds-have-boundary-adapted-slice-charts]])

## Proof

1.1 Use [F1] to identify $W$ with the unit ball in coordinates $(x,y,z)$, with $a$ the vertical diameter, $U$ the lower hemisphere and $V$ the upper hemisphere. Write $r=\sqrt{x^2+y^2}$ and $f(r)=-\sqrt{1-r^2}$ for the lower graph on $r<1$. Because $K$ is closed and misses the compact upper hemisphere, a sufficiently small neighborhood of that whole hemisphere in $W$ misses $K$. Likewise a sufficiently small neighborhood of its equatorial boundary circle in $W$ misses $K$. The surface outside $U$ misses the ball interior and meets its boundary only along $\partial U$, by hypothesis. [given, F1, construct]

2.1 Choose a smooth radial cutoff $\theta$ that is one for $r\le1-2\delta$ and zero for $r\ge1-\delta$, with $\delta>0$ small. For a small $\epsilon>0$ define $g(r)=\theta(r)(2-\epsilon)\sqrt{1-r^2}$. This is smooth as a function of $(x,y)$ on the whole plane after extension by zero, since its support is inside $r<1$. The graph $z=f(r)+g(r)$ agrees with $U$ near the equator. On $r\le1-2\delta$ it is $(1-\epsilon)\sqrt{1-r^2}$, arbitrarily close to the upper hemisphere; on the remaining annulus it stays inside the ball and has distance tending uniformly to zero from the equatorial circle as $\delta\to0$. Choose $\delta$ first for the equatorial neighborhood of step 1.1, then $\epsilon$ for the upper-hemisphere neighborhood. The resulting disk misses $K$. Its axis point is $z=1-\epsilon$, so can be arbitrarily close to $q$. [step 1.1, construct, choose]

3.1 Move through the graphs $z=f(r)+t g(r)$, $0\le t\le1$, retaining the unchanged hemisphere collar where $g=0$. These form a smooth isotopy of disks, since every moving point is in the compact region $r\le1-\delta$, where graph coordinates are smooth, and the complement is stationary. All disks meet the vertical axis transversely exactly once, at $z=-1+t(2-\epsilon)$. On a small neighborhood of the compact moving track use the vertical field $X_t=g(r)\psi(z-f(r)-t g(r))\partial_z$, where $\psi=1$ near zero and is supported in a small normal interval. Multiply by a further spatial cutoff equal to one on the moving track and zero outside its chosen neighborhood. The field has the prescribed graph velocity. It is vertical along the axis, so preserves the axis setwise; it is zero near the equator. The initial track meets the boundary of $W$ only in the interior of $U$, and the later nonstationary track is in $\operatorname{int}W$. Thus the field can be supported away from every stationary surface piece. [step 1.1, step 2.1, construct]

4.1 Transfer this field back to a neighborhood of its track in $S^3$. In the interior of $W$ the ball diffeomorphism supplies the coordinates directly. Across the initial face $U$, its coordinate functions extend smoothly to boundary charts, and their full-rank differential gives an extension to a common narrow neighborhood. At $p$, take the extension in the simultaneous arc-boundary chart of [F3], retaining the vertical axis as $L$ on both sides; it agrees with the already prescribed coordinates along the inside axis. One constructs this relative extension by extending its coordinate functions off the half-space and then subtracting their unwanted transverse values on the exterior axis, using an axis cutoff: those values and all their jets vanish at the boundary point because the interior axis was already straight. Hence the correction is smooth across the boundary and does not alter the inside chart; a small extension keeps the differential invertible. Compactness and the local inverse property give a common injective neighborhood for the compact initial moving patch. Other portions of $L$ and of $S\setminus\operatorname{int}U$ are disjoint from the moving track, so shrinking the neighborhood avoids them. The transferred field is therefore tangent to the actual link wherever its support meets it, is zero on all other link components, and can be extended by zero within the prescribed neighborhood of $W$. [step 1.1, step 3.1, F3, construct]

5.1 Apply [F2] to this compactly supported field. Uniqueness makes its flow carry the old disk to the prescribed graphs, while every stationary surface piece remains fixed. The field's restriction to $L$ is tangent, so both forward and reverse uniqueness preserve $L$ setwise. At time one the new disk misses $K$ by step 2.1 and its unique puncture is the point near $q$ specified there. The collar of $\partial U$ and the rest of $S$ were outside the support. This proves all support, fixed-piece and puncture-motion claims. [step 2.1, step 3.1, step 4.1, F2, construct] ∎
