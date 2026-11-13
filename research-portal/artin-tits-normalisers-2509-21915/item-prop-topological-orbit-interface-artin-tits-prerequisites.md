---
title: Covering-space actions and fundamental-groupoid quotients
status: published
research_item: prop-topological-orbit-interface-artin-tits-prerequisites
dependency_level: 1
---

## Prerequisites

- [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)
- [math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)
- [math:thm-orbit-map-of-a-covering-space-action-is-a-covering](https://alphabetamath.cc/item/thm-orbit-map-of-a-covering-space-action-is-a-covering)
- [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)
- [math:thm-path-lifting-for-covering-maps](https://alphabetamath.cc/item/thm-path-lifting-for-covering-maps)
- [math:thm-homotopy-lifting-for-covering-maps](https://alphabetamath.cc/item/thm-homotopy-lifting-for-covering-maps)
- [math:thm-covering-maps-inject-fundamental-groups](https://alphabetamath.cc/item/thm-covering-maps-inject-fundamental-groups)
- [math:def-semilocally-simply-connected-space](https://alphabetamath.cc/item/def-semilocally-simply-connected-space)
- [math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)
- [math:def-locally-connected](https://alphabetamath.cc/item/def-locally-connected)
- [math:def-covering-map-and-evenly-covered-neighbourhoods](https://alphabetamath.cc/item/def-covering-map-and-evenly-covered-neighbourhoods)
- [math:def-deck-transformation-and-deck-group](https://alphabetamath.cc/item/def-deck-transformation-and-deck-group)
- [math:def-based-loops-and-fundamental-group](https://alphabetamath.cc/item/def-based-loops-and-fundamental-group)
- [math:def-universal-covering-space](https://alphabetamath.cc/item/def-universal-covering-space)
- [math:def-path-connected](https://alphabetamath.cc/item/def-path-connected)
- [math:def-group-action](https://alphabetamath.cc/item/def-group-action)
- [math:def-induced-homomorphism-on-fundamental-groups](https://alphabetamath.cc/item/def-induced-homomorphism-on-fundamental-groups)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)


## Statement

Let a group $N$ act on a nonempty, path-connected, locally path-connected space $X$ by homeomorphisms, with every point having an open neighbourhood disjoint from all its nonidentity translates. Give $B=X/N$ the quotient topology and write $p:X\to B$ for the orbit map. Then $p$ is a regular covering: its deck transformations act transitively on each fibre. Its deck group is precisely $N$, acting as given.

The induced action on the fundamental groupoid $\Pi_1(X)$ sends points and endpoint-fixed path classes to their translates. Its orbit groupoid has object and arrow orbits, with composition defined by choosing representatives whose endpoints agree. Projection induces an isomorphism $\Pi_1(X)/N\cong\Pi_1(B)$. The induced functor $\Pi_1(X)\to\Pi_1(B)$ is a groupoid covering: for each point upstairs, it bijects the arrows starting there with the arrows starting at its image.

For $x\in X$, use first-path-first multiplication on fundamental groups. The endpoint of the lift of a loop at $p(x)$ starting at $x$ is $n x$ for a unique $n\in N$; this defines the last map in the exact sequence $1\to\pi_1(X,x)\xrightarrow{p_*}\pi_1(B,p(x))\to N\to1$. No universal cover is used here. Semilocal simple connectedness is a separate local condition to be checked when invoking the usual universal-cover existence theorem.

## Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)

[math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)

[math:def-semilocally-simply-connected-space](https://alphabetamath.cc/item/def-semilocally-simply-connected-space)

[math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)

[math:def-locally-connected](https://alphabetamath.cc/item/def-locally-connected)

[math:def-covering-map-and-evenly-covered-neighbourhoods](https://alphabetamath.cc/item/def-covering-map-and-evenly-covered-neighbourhoods)

[math:def-deck-transformation-and-deck-group](https://alphabetamath.cc/item/def-deck-transformation-and-deck-group)

[math:def-based-loops-and-fundamental-group](https://alphabetamath.cc/item/def-based-loops-and-fundamental-group)

[math:def-universal-covering-space](https://alphabetamath.cc/item/def-universal-covering-space)

[math:def-path-connected](https://alphabetamath.cc/item/def-path-connected)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-induced-homomorphism-on-fundamental-groups](https://alphabetamath.cc/item/def-induced-homomorphism-on-fundamental-groups)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

## Facts & Assumptions

[F1] The disjoint-neighbourhood condition is the definition of a covering-space action; it implies that the action is free. [math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)

[F2] The orbit map of a covering-space action is a covering, and for path-connected total space its deck transformations are exactly the acting transformations. [math:thm-orbit-map-of-a-covering-space-action-is-a-covering](https://alphabetamath.cc/item/thm-orbit-map-of-a-covering-space-action-is-a-covering)

[F3] A fundamental groupoid has points as objects and endpoint-fixed path-homotopy classes as arrows, with composition by path concatenation. A groupoid has invertible arrows and a functor preserves sources, targets, identities and composition. [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space) [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[F4] A path in the base of a covering has a unique lift from each chosen point over its starting point. A homotopy has a unique lift extending a specified lift of its initial map. [math:thm-path-lifting-for-covering-maps](https://alphabetamath.cc/item/thm-path-lifting-for-covering-maps) [math:thm-homotopy-lifting-for-covering-maps](https://alphabetamath.cc/item/thm-homotopy-lifting-for-covering-maps)

[F5] A covering induces an injective homomorphism on based fundamental groups. [math:thm-covering-maps-inject-fundamental-groups](https://alphabetamath.cc/item/thm-covering-maps-inject-fundamental-groups)

[F6] Semilocal simple connectedness is a local condition on the images of fundamental groups of neighbourhoods. [math:def-semilocally-simply-connected-space](https://alphabetamath.cc/item/def-semilocally-simply-connected-space)

## Proof
**Given:** The action, space, quotient and basepoint in the Statement.


**Given:** The hypotheses and the basepoint $x$ in the Statement.

**Goal:** Establish the covering, groupoid identification and exact sequence.

**Proof technique:** direct.

1.1 By [F1] and [F2], $p$ is a covering and its deck transformations are exactly the transformations from $N$. The action is free and every fibre is an orbit, so these transformations act freely and transitively on each fibre. Thus the covering is regular in the stated sense and $N$ identifies with its deck group. [F1, F2]

2.1 Projection sends a path class upstairs to its projected class and is invariant under translation. Given two composable arrow orbits, translate a representative of the second so that its source equals the target of a representative of the first. Freeness gives a unique such translate; translating both representatives together changes the composite only by a common translate. Hence this rule gives a well-defined orbit groupoid, and projection defines a functor from it to $\Pi_1(B)$. [step 1.1, F3]

2.2 For a based loop downstairs, [F4] gives a lift from $x$ ending at a unique $n x$ by step 1.1. Endpoint-fixed homotopy lifting makes $n$ independent of the representative. If lifts of loops $\alpha$ and $\beta$ end at $n x$ and $m x$, respectively, then the lift of their first-path-first concatenation is the lift of $\alpha$ followed by the $n$-translate of the lift of $\beta$; it ends at $nm x$. Thus the endpoint map is a homomorphism. [step 1.1, F4]

3.1 Each point of $B$ is an orbit, and [F4] lifts every base path from a chosen point over its source. Thus the functor of step 2.1 is surjective on arrows. If two projected paths are endpoint-fixed homotopic, first translate one lift so their initial points agree. Lift the homotopy starting with the first path. Its initial endpoint remains fixed by uniqueness of path lifts; its final endpoint also remains fixed, since it lifts a constant path. The final lifted path is therefore the second path by uniqueness, and the two original arrow classes differ by a translation. The functor is consequently injective on arrows and is an isomorphism. The same lifting argument gives the asserted bijection on arrows starting at any specified point. [step 2.1, F3, F4]

4.1 Every $n\in N$ occurs: path-connectedness supplies a path from $x$ to $nx$, whose projection is a loop. The endpoint map has kernel exactly the projected classes of loops at $x$: a lifted loop has endpoint $x$, and conversely endpoint $x$ makes the lifted path a loop. Finally $p_*$ is injective by [F5]. These facts prove exactness; no semilocal simple connectedness or universal cover was used. The separate condition in [F6] is relevant only to an additional universal-cover invocation. [step 2.2, F5, F6] ∎
