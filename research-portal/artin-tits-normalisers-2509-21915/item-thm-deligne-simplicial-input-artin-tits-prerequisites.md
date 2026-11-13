---
title: Independent finite simplicial arrangement theorem
status: published
research_item: thm-deligne-simplicial-input-artin-tits-prerequisites
dependency_level: 6
---

## Prerequisites

- [lem-author-d3116e202611-antipodal-garside](item-lem-author-d3116e202611-antipodal-garside)
- [lem-author-d3116e202611-gallery-cover](item-lem-author-d3116e202611-gallery-cover)
- [def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)
- [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)
- [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)
- [math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space)
- [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)
- [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)


## Statement

For a finite central real hyperplane arrangement with open simplicial chambers, the complexified complement is aspherical. Its fundamental groupoid on chamber basepoints is the groupoid completion of positive galleries modulo equal-endpoint minimal-gallery relations. The positive gallery category has a finite-type atomic categorical Garside structure: the automorphism is antipodes, the Garside arrow at $A$ is $u(A,-A)$, its simple arrows are minimal galleries, and both outgoing left-divisibility and incoming right-divisibility orders are lattices.

## Statement references

[lem-author-d3116e202611-antipodal-garside](item-lem-author-d3116e202611-antipodal-garside)

[lem-author-d3116e202611-gallery-cover](item-lem-author-d3116e202611-gallery-cover)

[def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)

[def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)

[def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)

[math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space)

[lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)

[math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)

## Facts & Assumptions

[F1] Use [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category) for the finite central arrangement, open simplicial chambers, the positive gallery category $P$, its minimal-gallery congruence and the classes $u(A,B)$. Use [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites) for the groupoid completion of this category. Products follow traversal order.

[F2] Use [lem-author-d3116e202611-antipodal-garside](item-lem-author-d3116e202611-antipodal-garside) for the antipodal Garside structure and [def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites) for finite type, simple arrows, atomicity and the two divisibility-lattice conditions.

[F3] Use [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites) with $T=V$ for the complexified complement $Y$, [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space) for endpoint-fixed path-homotopy classes and their composition, and [math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space) for the $K(\pi,1)$ convention. Choose a real basepoint $b_A$ in each chamber $A$. The groupoid on chamber basepoints means the full subgroupoid with objects $b_A$ and all endpoint-fixed path-homotopy classes in $Y$ between them, composed in traversal order.

[F4] Use [lem-author-d3116e202611-gallery-cover](item-lem-author-d3116e202611-gallery-cover) for the identification of the gallery completion with this full fundamental subgroupoid and for asphericity, under the same finite central simplicial hypotheses. The substantial arrangement-theoretic inputs are imported in the two supplier lemmas, whose source records give their locators and reading limits; this item composes their conclusions.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the Statement.

1.1 Apply [lem-author-d3116e202611-antipodal-garside](item-lem-author-d3116e202611-antipodal-garside) to the category $P$ of [F1] for the given finite central simplicial arrangement. Its hypotheses are exactly those given. In the convention of [F2], it identifies both divisibility lattices and all of the atomic Garside data stated above, including the antipodal automorphism, the arrow $u(A,-A)$ and minimal gallery classes as the simple arrows. [F1, F2, given]

2.1 Apply [lem-author-d3116e202611-gallery-cover](item-lem-author-d3116e202611-gallery-cover) to the same arrangement and the complement $Y$ of [F3]. With the positive wall-crossing convention of that lemma, it identifies the groupoid completion of $P$ with the full fundamental subgroupoid on the chosen chamber basepoints, and gives asphericity of $Y$. These are the remaining assertions. The finite central simplicial hypotheses must be checked afresh for any restricted arrangement consuming this theorem. No infinite or nonsimplicial arrangement is covered. [F1, F3, F4, step 1.1] ∎
