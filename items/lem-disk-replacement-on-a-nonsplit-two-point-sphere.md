---
id: lem-disk-replacement-on-a-nonsplit-two-point-sphere
kind: lemma
title: "Disk replacement on a two-point sphere in a nonsplit link"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-split-link
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-smooth-ball-windows-and-boundary-disk-absorption
  - thm-isotopy-extension
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from smooth sphere, disk-window, surface and isotopy suppliers. All parity arguments and disk replacements are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1 case (2), printed p.39"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
    - title: "Jessica S. Purcell and Anastasiia Tsvietkova, Standard position for surfaces in link complements in arbitrary 3-manifolds, Theorem 6.2, printed p.16, condition (0)"
      url: "https://users.monash.edu/~jpurcell/papers/StandardPosition.pdf"
---

## Statement

Assume countable choice. Let $L\subset S^3$ be a nonsplit smooth link and let $S\subset S^3$ be a smooth sphere meeting $L$ transversely in two points. Let $D$ be an embedded disk with $\partial D=c\subset S\setminus L$ and $\operatorname{int}D\cap(S\cup L)=\varnothing$. Assume the disk meets $S$ transversely along its boundary collar.

Then $c$ bounds a disk $E\subset S\setminus L$. Replacing $E$ by $D$, with a small collar push and corner rounding near $c$, gives a sphere $S'$ ambient isotopic to $S$ by an isotopy fixing $L$ pointwise. The endpoint sphere agrees with $S$ outside $E$ and an arbitrarily small collar of $c$, and its new disk lies in an arbitrarily small neighborhood of $D$. In particular the two punctures and the nontriviality of either side tangle are preserved.

## Statement references

[[def-countable-choice]]

[[def-split-link]]

## Facts & Assumptions

**Given:** Countable choice, the nonsplit link, its transverse two-point sphere and the supplied disk.

[F1] A sphere disjoint from a nonsplit link cannot have link points on both sides. ([[def-split-link]])

[F2] A smooth sphere in $S^3$ has two ball sides, identified compatibly along their boundary under countable choice. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F3] A regular circle on a sphere bounds complementary disk regions, using a stereographic linear nullhomotopy and the surface disk criterion. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[F4] A ball with a disk window is a standard ball-window pair. A boundary-attached ball and its attaching collar can be absorbed, or removed, by maps supported near that ball and collar. ([[lem-smooth-ball-windows-and-boundary-disk-absorption]])

[F5] Under countable choice a smooth compact-source isotopy extends to an ambient isotopy; the local vector-field construction permits support in a prescribed neighborhood of its compact track. ([[thm-isotopy-extension]], [[def-countable-choice]])

## Proof

1.1 A sphere transverse to a closed link has an even number of intersection points with each link component. By [F2] its two sides are distinct open balls; along a parametrized link circle a transverse boundary crossing switches the side. Returning to the starting point requires an even number of switches. This applies equally after small corner roundings supported away from $L$. [given, F2, construct]

2.1 By [F3] the circle $c$ bounds two disks on $S$. They cannot each contain one of the two punctures. If they did, joining either to $D$ and rounding along $c$ would give a sphere meeting $L$ exactly once, contrary to step 1.1. Thus one of the two disks, denoted $E$, contains no puncture. The union $E\cup D$, after rounding, is a sphere disjoint from $L$. By [F1] and [F2] one of its closed ball sides, denoted $V$, contains no link points. [F1, F2, F3, step 1.1, construct]

3.1 Perform the usual two-copy disk surgery along $D$: cut a thin annular collar of $c$ from $S$, cap its two sides by nearby disjoint copies of $D$, and round. It gives disjoint spheres $S_0,S_1$, where $S_0$ is the rounded $E\cup D$ and $S_1$ is the disk-replacement sphere containing both original punctures. The ball $V$ from step 2.1 may be adjusted by the same small collar push, remaining disjoint from $L$. The connected sphere $S_1$ is disjoint from $\partial V=S_0$ and contains link points outside $V$, so it lies entirely outside $V$. Thus $\operatorname{int}V\cap S_1=\varnothing$. [F2, step 2.1, construct]

4.1 Reversing this two-copy surgery joins $S_0$ to $S_1$ by the short tube in the product neighborhood of $D$ and recovers $S$. Absorb that short joining collar into $V$. The result is an embedded ball $V'$ meeting $S_1$ just in one disk window and disjoint from the rest of $S_1$; adjoining a short disk collar to a ball is the elementary disk absorption in [F4]. Its interior and a sufficiently small neighborhood are disjoint from $L$. Replacing the window of $S_1$ by the other boundary disk of $V'$ recovers the original sphere, up to the arbitrarily small corner choices. The retained punctured disk $S\setminus\operatorname{int}E$ is outside this window. [F4, step 3.1, construct]

5.1 This empty ball bulge is removed by an isotopy, not merely by a diffeomorphism assertion. Use the standard ball-window coordinates of [F4], retaining the window's disk coordinates and extending them across its collar. In these coordinates the bulged disk is the graph $t=\gamma(x)$ over a planar disk, where $\gamma\ge0$ is smooth and vanishes on a collar of the disk boundary; the unbulged disk is $t=0$. This is the thin-cap representation obtained by flattening one window collar and rounding its edge. The graphs $t=(1-u)\gamma(x)$, $0\le u\le1$, give a smooth isotopy of the whole sphere, fixed outside the window, because each graph remains embedded and agrees with the fixed sphere near the window boundary. Its compact track lies in the link-free ball neighborhood. Extend it by [F5], with support there. The resulting ambient isotopy fixes $L$ pointwise and carries the original sphere to the disk-replacement sphere. [F4, F5, step 4.1, construct]

6.1 The two-copy and graph constructions permit all their collar widths to be arbitrarily small. Hence the final replacement disk can lie arbitrarily close to $D$, and the final sphere equals the original retained punctured disk outside a small collar of $c$. The punctures were fixed throughout. The ambient isotopy carries each ball side together with its entire link tangle, so a boundary-parallel arc disk and the absence or presence of closed components transport in both directions. Thus side-tangle nontriviality is preserved as asserted. [step 2.1, step 5.1, construct] ∎
