---
id: lem-minimal-joint-bubble-complexity-forces-disk-pieces
kind: lemma
title: "Minimal joint bubble complexity forces disk pieces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-flype-crossing-ball-and-alternating-tangle-data
  - thm-well-ordering-principle
  - lem-nondisk-proper-surface-in-a-ball-has-a-compressing-disk
  - lem-disk-replacement-on-a-nonsplit-two-point-sphere
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the two geometric disk suppliers. Minimization is successive minimization of two nonempty subsets of the natural numbers, and all patch counts are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1, printed pp.39–40"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
    - title: "Jessica S. Purcell and Anastasiia Tsvietkova, Standard position for surfaces in link complements in arbitrary 3-manifolds, Theorem 6.2, printed p.16, condition (0)"
      url: "https://users.monash.edu/~jpurcell/papers/StandardPosition.pdf"
---

## Statement

Assume countable choice. Supply smooth closed balls $B_+,B_-\subset S^3$ with disjoint interiors and $\partial B_\pm\cap\operatorname{int}B_\mp=\varnothing$, and finitely many pairwise disjoint closed crossing balls $C_1,\ldots,C_n$ disjoint from both open ball interiors. These balls may share boundary faces. Let $L$ be a nonsplit smooth link disjoint from $\operatorname{int}B_+\cup\operatorname{int}B_-$.

Suppose a smooth sphere $S_0$ meets $L$ transversely twice, away from the crossing balls, is transverse to $\partial B_+$ and $\partial B_-$, and meets each $C_j$ in finitely many saddle disks. All specified pieces and boundary intersections are understood with supplied compatible corner roundings, so the ball pieces are neat proper surfaces. For any sphere $S$ with the same properties and ambient isotopic to $S_0$ by an isotopy fixing $L$ pointwise, put
$$s(S)=\sum_{j=1}^n\#\pi_0(S\cap C_j),\qquad c(S)=\#\pi_0(S\cap\partial B_+)+\#\pi_0(S\cap\partial B_-).$$
There is such a sphere minimizing $(s(S),c(S))$ in lexicographic order. In every minimizing sphere, each component of $S\cap B_+$ and $S\cap B_-$ is a disk. This assertion supplies disk pieces from an already supplied finite saddle position; it does not assert the initial existence of that position or the repeated-bubble condition.

## Statement references

[[def-countable-choice]]

[[def-flype-crossing-ball-and-alternating-tangle-data]]

## Facts & Assumptions

**Given:** The two open-side balls, protected crossing balls, nonsplit link, supplied finite saddle-position sphere and countable choice.

[F1] A saddle disk is a proper disk in its crossing ball whose boundary has two arcs on each hemisphere. Deleting whole components from a collection of such disks preserves this local condition. ([[def-flype-crossing-ball-and-alternating-tangle-data]])

[F2] Every nonempty subset of the natural numbers has a least member. ([[thm-well-ordering-principle]])

[F3] A compact neat proper surface in a ball, all of whose components have boundary, has a geometric compressing disk whenever some component is not a disk. The disk compresses the entire surface, so its interior misses every component. ([[lem-nondisk-proper-surface-in-a-ball-has-a-compressing-disk]])

[F4] In a nonsplit link, a disk with interior disjoint from a transverse two-point sphere and the link has boundary bounding a puncture-free disk on the sphere. Replacing that sphere disk by a nearby copy of the supplied disk is realized by an ambient isotopy fixing the link; the retained part of the sphere is unchanged outside an arbitrarily small boundary collar. ([[lem-disk-replacement-on-a-nonsplit-two-point-sphere]])

## Proof

1.1 Call the spheres satisfying all the stated geometric conditions admissible. This class is nonempty because it contains $S_0$. Each admissible sphere has finite $s(S)$ by hypothesis and finite $c(S)$: its transverse intersections with a compact boundary sphere form a compact one-manifold, hence finitely many circles. Apply [F2] first to the nonempty set of saddle counts and then to the cut-circle counts among spheres with the least saddle count. Choose a sphere attaining these two minima. It minimizes $(s,c)$ in lexicographic order, without requiring a simultaneous choice from an infinite family of witnesses. [given, F2, construct]

2.1 For either sign, $F_\pm=S\cap B_\pm$ is a compact neat proper surface by the supplied corner conventions. Every component has boundary. Indeed a closed component would be an entire connected component of the sphere $S$, since it is open in $S$ and compact, so it would equal $S$. But $S$ meets $L$ outside the open ball, and transversality to the boundary ensures that a sphere touching that boundary also has points on its other side. Thus the whole sphere cannot be contained in $B_\pm$ as a closed piece. [given, step 1.1, construct]

3.1 Suppose $F_+$ has a nondisk component. By [F3] there is an embedded disk $D\subset\operatorname{int}B_+$ whose boundary $a$ lies in the interior of $F_+$, whose interior misses $F_+$ and whose boundary does not bound a disk in $F_+$. The disk's interior also misses the rest of $S$, because that rest is outside $\operatorname{int}B_+$. It misses $L$, every $C_j$, and both boundary spheres. The last assertion follows from $D\subset\operatorname{int}B_+$ and the stated disjointness properties. Apply [F4] to obtain the puncture-free sphere disk $E\subset S$ bounded by $a$. [given, F3, F4, step 2.1, construct]

4.1 The disk $E$ contains at least one component of $S\cap\partial B_+$. Otherwise, since its boundary lies in $\operatorname{int}B_+$, its connected interior would stay in $\operatorname{int}B_+$ and it would be a disk in $F_+$ bounded by $a$, contradicting step 3.1. Every cut circle that meets $E$ lies entirely in its interior, because $\partial E=a$ misses both boundary spheres. Likewise, each saddle component of $S\cap C_j$ either lies wholly inside $E$ or misses its interior: it is connected and cannot cross $a$, which is outside every $C_j$. Thus removing $E$ removes whole cut circles and whole saddle patches. [given, F1, step 3.1, construct]

5.1 Use [F4] to replace $E$ by a nearby copy of $D$. The copy and its rounding collar can be kept inside $\operatorname{int}B_+$, since the compact disk $D$ is disjoint from its boundary, from the other boundary sphere and from every crossing ball. The new sphere $S'$ therefore adds no cut circle and no saddle patch. Its retained part is unchanged near all these sets, while step 4.1 removes at least one cut circle and possibly some saddle disks. Its two link punctures remain fixed. It is consequently admissible, with $s(S')\le s(S)$ and $c(S')<c(S)$. If the saddle count decreases, the first coordinate decreases; otherwise the second coordinate decreases. Either case contradicts the joint minimum in step 1.1. [F1, F4, step 1.1, step 4.1, construct, contradiction]

6.1 Hence every component of $F_+$ is a disk. The identical argument with the signs exchanged treats $F_-$, because the geometric disjointness assumptions are symmetric. Both conclusions hold simultaneously for the same minimizing sphere. [F3, F4, step 2.1, step 5.1, construct] ∎
