---
title: Identifying all spectral-sequence pages with the source multiplicative pages
status: draft
research_item: lem-author-74a9c17e63f1-page-product-transport
dependency_level: 16
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface)
- [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison)
- [lem-author-74a9c17e63f1-index-calculation](item-lem-author-74a9c17e63f1-index-calculation)
- [lem-author-74a9c17e63f1-graded-products](item-lem-author-74a9c17e63f1-graded-products)
- [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input)


## Statement
Assume the Axiom of Choice. The additive spectral sequence constructed from the completed tower interface has canonical page products inherited from the source EM multiplicative spectral sequence of the same tower. They agree with the preceding actual graded product on page2, are associative and unital with the source commutativity signs, and satisfy
$$d_s(xy)=d_s(x)y+(-1)^{a+b}x\,d_s(y)\qquad(x\in E_s^{a,b}).$$
When bounded convergence identifies the abutment graded groups, their products are those of the image filtration on $K_*(X)$.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed size conventions of the cited constructions are inherited through [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input). They discharge that supplier’s local-realization premise at its first application below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The Axiom of Choice and the fixed size conventions of the cited constructions, together with the same actual source-filtered algebra and all its stage cofiber maps.

**Goal:** Identify the local additive page construction with the source multiplicative construction through actual exact-couple maps.

[F1] [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) constructs the exact couple from the stage long exact sequences. [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison) gives these actual sequences and source comparison maps.

[F2] [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input) supplies the actual source spectral-sequence pairings and their derivation/abutment compatibility. [lem-author-74a9c17e63f1-graded-products](item-lem-author-74a9c17e63f1-graded-products) identifies their graded product, with the labels of [lem-author-74a9c17e63f1-index-calculation](item-lem-author-74a9c17e63f1-index-calculation).

## Proof
1.1 Use the supplied realization under [A1]. Identify the source and local stage/cofiber diagrams by their actual common filtered object in [F1]. On the initial exact couple this induces the identity on every stage group and the actual $\gamma_r$ comparison on the cofiber groups, commuting with transitions, quotients and boundary maps. Deriving exact couples takes images and the associated kernel/quotient groups functorially. Induction therefore gives specified isomorphisms of every local page with the correspondingly reindexed source page, commuting with differentials. This is an actual exact-couple comparison, not the choice of isomorphisms between unrelated E2 groups. [A1, F1, F2]

2.1 Transport the source products of [F2] through the page isomorphisms in step 1.1. On page2 they are exactly the products already identified in [F2]. The source derivation sign is the sign of homotopy degree $-a-b$, hence $(-1)^{a+b}$; its associativity, unit and symmetry equations transfer through the same isomorphisms. These products need only finite-stage tower data to define a finite-page differential, so no boundedness conclusion is being used to manufacture them. [F1, F2, step 1.1]

3.1 Under bounded convergence, both page constructions use the same image subgroups of $\pi_*K(X)$ and the same stage-to-$K$ maps. The source abutment-pairing compatibility in [F2] consequently identifies the transported limiting products with products in that image filtration. The additive exact-couple construction was used only for the page identification, never as a premise for existence of multiplication. [F1, F2, step 1.1, step 2.1] ∎
