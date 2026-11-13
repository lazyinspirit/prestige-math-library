---
title: Transport of a Garside structure to the presented monoid
status: published
research_item: lem-author-f758f7dd29a6-garside-transport
dependency_level: 3
---

## Prerequisites

- [math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)
- [def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility)
- [def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)
- [lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)
- [lem-author-f758f7dd29a6-positive-image-identification](item-lem-author-f758f7dd29a6-positive-image-identification)


## Statement

Let $j:M\to A^+$ be the positive-image isomorphism associated with an injective canonical map of an Artin monoid. Suppose $(A^+,\phi^+,\Delta^+)$ is a one-object categorical Garside structure and $j(\Delta)=\Delta^+$. Put $\phi=j^{-1}\phi^+j$. Then $(M,\phi,\Delta)$ is an atomic categorical Garside structure. Left and right gcds and lcms transfer through $j$, and $x$ is simple in $M$ exactly when $j(x)$ is simple in $A^+$. Here left and right gcds and lcms mean meets and joins in the respective divisibility orders.

## Statement references

[math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)

[def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility)

[def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)

[lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)

[lem-author-f758f7dd29a6-positive-image-identification](item-lem-author-f758f7dd29a6-positive-image-identification)

## Facts & Assumptions

[F1] A one-object atomic categorical Garside structure consists of an atomic cancellative monoid, an automorphism $\phi$ with $x\Delta=\Delta\phi(x)$, simple atoms, and lattice orders for left and right divisibility; simple means $xy=\Delta$ for some $y$. ([def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites), [def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility))

[F2] The isomorphism $j$ and its inverse preserve products, both divisibility relations and atoms. ([lem-author-f758f7dd29a6-positive-image-identification](item-lem-author-f758f7dd29a6-positive-image-identification))

[F3] The presented Artin monoid has factorizations into atoms and a degree bounding all nonidentity factorizations. ([lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree))

## Proof



**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all assertions of the statement.

1.1 Conjugating $\phi^+$ by the isomorphism yields a monoid automorphism $\phi$. Applying the injective $j$ to the desired naturality equation gives $j(x)\Delta^+=\Delta^+\phi^+(j(x))$, which holds by the assumed structure. Cancellation in $M$ follows by applying $j$ and using cancellation in $A^+$. Atomicity holds by [F3], including bounded lengths of all nonidentity factorizations. [F1, F2, F3, given]

2.1 By [F2] each divisibility order is order-isomorphic to its counterpart in $A^+$. The inverse image of the meet or join satisfies exactly its defining universal property, giving both gcds and lcms. An equality $j(x)y^+=\Delta^+$ pulls back uniquely to $xy=\Delta$; therefore simplicity transfers. Atoms transfer by [F2], so each is simple since atoms in $A^+$ are simple. Together these verify every condition in [F1]. [F1, F2, step 1.1] ∎
