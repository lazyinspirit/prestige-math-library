---
title: Fundamental groupoids of free topological quotients
status: draft
research_item: prop-topological-quotient-groupoid-artin-tits-normalisers
dependency_level: 9
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 7, §2.4, first paragraph
      statement: For a path-connected, locally path-connected and semilocally simply
        connected space with a free properly discontinuous group action, the
        orbit map is a normal covering and the induced fundamental-groupoid
        covering identifies the base groupoid with the quotient groupoid.
      hypotheses: The space and action satisfy the hypotheses stated in the cited
        paragraph.
      reading_limits: The frozen extracted article text at the cited paragraph was
        read for attribution. It is not used as a proof premise.
---

PDF p. 7: ` §2.4, first paragraph `

## Prerequisites

- [def-groupoid-action-quotient-artin-tits-normalisers](item-def-groupoid-action-quotient-artin-tits-normalisers)
- [def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)
- [prop-topological-orbit-interface-artin-tits-prerequisites](item-prop-topological-orbit-interface-artin-tits-prerequisites)
- [math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)
- [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)
- [math:def-semilocally-simply-connected-space](https://alphabetamath.cc/item/def-semilocally-simply-connected-space)
- [math:def-covering-map-and-evenly-covered-neighbourhoods](https://alphabetamath.cc/item/def-covering-map-and-evenly-covered-neighbourhoods)
- [math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)


## Statement

Let $X$ be a nonempty, path-connected, locally path-connected and semilocally simply connected space. Thus any two points of $X$ can be joined by a path; each point has a basis of path-connected neighbourhoods; and each point has a neighbourhood whose inclusion sends every based loop in that neighbourhood to a null-homotopic loop in $X$. Let a group $N$ act on $X$ by homeomorphisms, freely and properly discontinuously, in the following sense: for each $x\in X$ there is an open neighbourhood $U$ of $x$ such that $nU\cap U=\varnothing$ for every nonidentity $n\in N$. Write $p:X\to X/N$ for the orbit map, with the quotient topology on $X/N$.

Then $p$ is a normal covering: it is a covering map and its deck transformations, the homeomorphisms $h:X\to X$ satisfying $p\circ h=p$, act transitively on each fibre. The induced functor $p_*:\Pi_1(X)\to\Pi_1(X/N)$ is a groupoid covering: for every $x\in X$, it bijects the arrows starting at $x$ with those starting at $p(x)$. Here $\Pi_1$ has points as objects and endpoint-fixed path-homotopy classes as arrows, composed by concatenation.

The action of $N$ on points and path classes induces an action by groupoid automorphisms on $\Pi_1(X)$. Its quotient $\Pi_1(X)/N$ has object and arrow orbits, with composition defined by aligning representatives. Projection induces a canonical isomorphism $\overline p_*:\Pi_1(X)/N\to\Pi_1(X/N)$, and $p_*=\overline p_*\circ Q$, where $Q$ is the orbit functor. Thus the two groupoid coverings agree under this canonical identification.

## Statement references

[math:def-covering-map-and-evenly-covered-neighbourhoods](https://alphabetamath.cc/item/def-covering-map-and-evenly-covered-neighbourhoods)

[math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)

[math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)

[math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)

[math:def-semilocally-simply-connected-space](https://alphabetamath.cc/item/def-semilocally-simply-connected-space)

[def-groupoid-action-quotient-artin-tits-normalisers](item-def-groupoid-action-quotient-artin-tits-normalisers)

[def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)

[prop-topological-orbit-interface-artin-tits-prerequisites](item-prop-topological-orbit-interface-artin-tits-prerequisites)

## Facts & Assumptions

[F1] A group action by homeomorphisms with the stated disjoint-neighbourhood condition is a covering-space action. [math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)

[F2] For such an action on a nonempty path-connected, locally path-connected space, the orbit map is a regular covering, its induced fundamental-groupoid functor is a groupoid covering, and projection induces an isomorphism from the orbit groupoid to the fundamental groupoid of the quotient. [prop-topological-orbit-interface-artin-tits-prerequisites](item-prop-topological-orbit-interface-artin-tits-prerequisites)

[F3] The fundamental groupoid consists of points and endpoint-fixed path-homotopy classes. For a free object action, its quotient has object and arrow orbits and composition by aligned representatives. A groupoid covering has unique arrow lifts from a prescribed source. [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space) [def-groupoid-action-quotient-artin-tits-normalisers](item-def-groupoid-action-quotient-artin-tits-normalisers) [def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)

## Proof
**Given:** $X$, $N$ and $p$ satisfy the hypotheses in the Statement.


**Proof technique:** direct.

**Goal:** Prove the topological covering, the induced groupoid covering, and the stated identification of quotient groupoids and functors.

1.1 **Apply the covering-space result.** The Given supplies homeomorphisms and the disjoint-neighbourhood condition, so [F1] applies. The nonempty, path-connected and locally path-connected hypotheses satisfy [F2]. Hence $p$ is a regular, equivalently normal, covering in the sense stated: deck transformations act transitively on each fibre. The semilocal simple connectedness hypothesis is retained from the article but is not needed for this application. [F1, F2, given]

2.1 **Identify the groupoid maps.** By [F2], translation induces the action on points and path classes, projection gives an isomorphism $\overline p_*:\Pi_1(X)/N\to\Pi_1(X/N)$, and $p_*$ is a groupoid covering. The quotient and covering conventions are those of [F3]. By construction, $Q$ sends a point or path class to its orbit, and $\overline p_*$ sends that orbit to its projection; their composite therefore equals $p_*$ on both objects and arrows. This gives the asserted equality of the two coverings after the canonical identification. [F2, F3, step 1.1] ∎
