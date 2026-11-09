---
title: Third edge homomorphism
status: published
research_item: def-third-edge-map
dependency_level: 21
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism)
- [def-motivic-filtration](item-def-motivic-filtration)


## Definition
Assume the Axiom of Choice. Let $k$ be a field and let $X$ be a Noetherian $k$-scheme of Krull dimension $3$. Write $F^3_{\mathrm{mot}}K(X)$ for the third stage of the decreasing motivic filtration of the nonconnective $K$-theory spectrum of perfect complexes, and $K_0(X)=\pi_0K(X)$. Its third **image-filtration group** is the subgroup
$$F^3_{\mathrm{mot}}K_0(X)=\operatorname{im}\bigl(\pi_0F^3_{\mathrm{mot}}K(X)\longrightarrow K_0(X)\bigr).$$
The arrow is induced by the transition from stage three to stage zero, identified with $K(X)$. Let $p_3$ be the isomorphism from $\pi_0F^3_{\mathrm{mot}}K(X)$ to $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)=H^6(\mathbb Z(3)_{\mathrm{mot}}(X))$ induced by the canonical map to the third graded cofiber and the specified graded comparison, as in [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism). Here $\pi_0$ denotes the zeroth stable homotopy group, and $H^6$ is degree-six cohomology of the weight-three motivic complex.

The **third edge homomorphism** is the composite
$$\epsilon_3:H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)\xrightarrow{\ p_3^{-1}\ }\pi_0F^3_{\mathrm{mot}}K(X)\longrightarrow F^3_{\mathrm{mot}}K_0(X).$$
The second arrow is the stage-to-$K_0$ homomorphism with its codomain restricted to its image. In particular, $\epsilon_3$ is surjective.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, and a Noetherian $k$-scheme $X$ of Krull dimension $3$.

**Goal:** Justify the definition of $\epsilon_3$ and its surjectivity.

[F1] Under these hypotheses, [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism) supplies the actual third-stage projection $p_3$ as an isomorphism with the displayed motivic cohomology group. It does not assert that the stage-to-$K_0$ map is injective.

[F2] Under the Axiom of Choice, [def-motivic-filtration](item-def-motivic-filtration) supplies the filtration and defines $F^3_{\mathrm{mot}}K_0(X)$ as the image of the stage-to-$K_0$ homomorphism; that homomorphism is surjective onto its image.

## Justification

1.1 The hypotheses in [F1] hold for the given $X$, so $p_3$ has a unique inverse homomorphism from $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ to $\pi_0F^3_{\mathrm{mot}}K(X)$. [F1, given]

2.1 By [F2], the second arrow in the displayed composite is a well-defined surjective homomorphism onto the stated image subgroup. Composing it with the inverse from step 1.1 defines $\epsilon_3$. [F2, step 1.1]

3.1 For any element of the image subgroup, choose a preimage under the second arrow and apply $p_3$ to it. The resulting motivic cohomology class maps to the chosen element under $\epsilon_3$. Thus $\epsilon_3$ is surjective. No injectivity of the stage-to-$K_0$ map is needed for this conclusion. [F1, F2, step 2.1] ∎
