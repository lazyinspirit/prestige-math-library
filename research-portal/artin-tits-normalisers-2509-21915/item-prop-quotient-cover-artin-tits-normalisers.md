---
title: Quotient groupoids give normal covers
status: draft
research_item: prop-quotient-cover-artin-tits-normalisers
dependency_level: 9
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 6, §2.4, last paragraph
      statement: For a group acting freely on the objects of a connected groupoid, the
        quotient is a groupoid and its quotient functor is a normal cover with
        deck group isomorphic to the acting group and the stated vertex-group
        exact sequence.
      hypotheses: The groupoid is small and connected; the group acts by automorphisms
        and freely on objects.
      reading_limits: The frozen article text at the cited passage was read for
        attribution; it is not used as a proof premise.
---

PDF p. 6: ` §2.4, last paragraph `

## Prerequisites

- [def-groupoid-action-quotient-artin-tits-normalisers](item-def-groupoid-action-quotient-artin-tits-normalisers)
- [def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)
- [prop-groupoid-orbit-interface-artin-tits-prerequisites](item-prop-groupoid-orbit-interface-artin-tits-prerequisites)


## Statement

Let a group $N$ act by automorphisms on a connected small groupoid $\mathcal G$, freely on objects. Thus $\mathcal G$ has sets of objects and arrows, every arrow is invertible, and an arrow exists between every ordered pair of objects; freeness means $nx=x$ only for $n=1$. Use the left action and left-to-right arrow composition conventions of [def-groupoid-action-quotient-artin-tits-normalisers](item-def-groupoid-action-quotient-artin-tits-normalisers).

Every arrow orbit whose source is the object orbit $[x]$ has a unique representative with source $x$. The object and arrow orbits form a groupoid $\mathcal G/N$, with composition obtained by aligning consecutive representatives. The quotient functor $Q:\mathcal G\to\mathcal G/N$ is a normal covering, and $n\mapsto(a\mapsto na)$ is an isomorphism $N\cong\operatorname{Deck}(Q)$, where deck transformations are automorphisms over $Q$. For every object $x$ there is an exact sequence $1\to\mathcal G_x\xrightarrow{Q}(\mathcal G/N)_{[x]}\xrightarrow{\delta}N\to1$, where the vertex groups consist of arrows from the indicated object to itself. If the unique representative of a loop orbit with source $x$ ends at $nx$, then $\delta$ sends that orbit to $n$.

## Statement references

[def-groupoid-action-quotient-artin-tits-normalisers](item-def-groupoid-action-quotient-artin-tits-normalisers)

[def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)

[prop-groupoid-orbit-interface-artin-tits-prerequisites](item-prop-groupoid-orbit-interface-artin-tits-prerequisites)

## Facts & Assumptions

[F1] For a left action by automorphisms on a connected small groupoid, free on objects, the orbit construction has unique representatives with prescribed source and produces a connected groupoid and a normal covering. Its deck group is the acting group via the action, and the vertex-group sequence defined by endpoints of lifted loops is exact. [prop-groupoid-orbit-interface-artin-tits-prerequisites](item-prop-groupoid-orbit-interface-artin-tits-prerequisites)

[F2] In the quotient convention, objects and arrows are their respective $N$-orbits, and composition aligns the source of the second representative with the target of the first. A normal covering is a covering whose deck group acts transitively on a fibre. [def-groupoid-action-quotient-artin-tits-normalisers](item-def-groupoid-action-quotient-artin-tits-normalisers) [def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)

## Proof
**Given:** The groupoid and free object action in the Statement.


**Proof technique:** direct.

**Goal:** Establish the quotient construction, normal covering, deck-group identification and exact sequence.

1.1 **Apply the orbit construction.** The hypotheses of [F1] hold by the Given. Its quotient has the orbit and composition conventions recorded in [F2], so it is precisely $\mathcal G/N$ as defined here. Hence the prescribed-source representative is unique, the composition is well defined, and $Q$ is a normal covering. [F1, F2, given]

2.1 **Identify the group maps.** By [F1], the action homomorphism is an isomorphism from $N$ to $\operatorname{Deck}(Q)$. The same result gives the exact vertex-group sequence, with $\delta$ defined by the endpoint $nx$ of the unique lift from $x$. These are the maps in the Statement, completing the proof. [F1, step 1.1] ∎
