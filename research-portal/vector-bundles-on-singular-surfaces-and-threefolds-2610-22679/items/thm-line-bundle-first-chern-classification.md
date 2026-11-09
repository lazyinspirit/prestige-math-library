---
id: thm-line-bundle-first-chern-classification
kind: theorem
title: Line bundles and first motivic Chern class
status: published
domain: mathematics
deps:
  - prop-motivic-weight-one
  - prop-first-chern-determinant
  - lem-nisnevich-line-bundle-torsors
  - lem-author-ec13f1db88a5-perfect-determinant
  - math:def-axiom-of-choice
dependency_roles:
  prop-motivic-weight-one: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  lem-nisnevich-line-bundle-torsors: mathematical-premise
  lem-author-ec13f1db88a5-perfect-determinant: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Introduction, p. 1; equation (2.3), p. 4; Proposition 3.2 and its
        proof, p. 8
      reading_limits: The cited introduction, equation and proposition with its short
        proof were read in the supplied article text. The weight-one comparison
        and perfect-complex determinant are used through the stated completed
        suppliers; their underlying proofs were not independently reconstructed
        here.
dependency_level: 24
---

## Statement
Assume the Axiom of Choice and the site-size and universe bounds required for the weight-one comparison, Nisnevich cohomology and perfect-complex determinant below. Let $k$ be a field and $X$ a quasi-compact quasi-separated $k$-scheme. The first motivic Chern class gives a natural group isomorphism
$$c_1:\operatorname{Pic}(X)\xrightarrow{\sim}H^{2,1}_{\mathrm{mot}}(X,\mathbb Z).$$
Consequently two line bundles on $X$ are isomorphic exactly when their first motivic Chern classes agree, and every class in the displayed motivic cohomology group is the first class of a line bundle.

A line bundle is a Zariski locally free $\mathcal O_X$-module of rank one; $\operatorname{Pic}(X)$ is the group of its isomorphism classes under tensor product. The group $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-two cohomology of the supplied weight-one motivic complex. The map $c_1$ is the supplied first motivic Chern class on an actual line bundle. Its inverse first applies the inverse of the weight-one comparison to obtain a class in $H^1_{\mathrm{Nis}}(X,\mathbb G_m)$ and then takes the line bundle descended from the corresponding frame torsor. Here $\mathbb G_m$ is the sheaf of invertible regular functions on the small Nisnevich site.

## Statement references
[[prop-motivic-weight-one]]

[[prop-first-chern-determinant]]

[[lem-nisnevich-line-bundle-torsors]]

## Facts & Assumptions

**Given:** A field $k$, a quasi-compact quasi-separated $k$-scheme $X$, the Axiom of Choice and the site-size and universe bounds in the cited suppliers.

**Goal:** Prove that the actual first motivic Chern class is the stated natural bijective group homomorphism, with the specified inverse.

[F1] The natural weight-one comparison induces an isomorphism $H^1_{\mathrm{Nis}}(X,\mathbb G_m)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ under Choice and its stated site-size bounds. [[prop-motivic-weight-one]]

[F2] Under Choice and its specified small-site and universe bounds, the frame-torsor construction identifies $\operatorname{Pic}(X)$ with $H^1_{\mathrm{Nis}}(X,\mathbb G_m)$ as a group; descent from frames gives the inverse. [[lem-nisnevich-line-bundle-torsors]]

[F3] For every qcqs scheme over a field, under the stated Choice and universe bounds, the actual first motivic Chern class on a bundle agrees with the composite of its determinant and the weight-one orientation $\gamma_X:\operatorname{Pic}(X)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$. This orientation is the isomorphism obtained from the weight-one comparison and the Picard identification. [[prop-first-chern-determinant]]

[F4] The determinant of a bundle agrees with its exterior determinant. In rank one the top exterior power is the bundle itself, canonically. [[lem-author-ec13f1db88a5-perfect-determinant]]

[F5] The Axiom of Choice is assumed as required by the cited cohomological and determinant constructions. [[math:def-axiom-of-choice]]

## Proof

**Proof technique:** Identify the first Chern class with a composite of the frame-torsor and weight-one isomorphisms.

1.1 By [F2], a line bundle class maps to the class of its frame torsor, and this defines a group isomorphism from $\operatorname{Pic}(X)$ to $H^1_{\mathrm{Nis}}(X,\mathbb G_m)$. Compose it with the isomorphism of [F1]. The resulting map $\gamma_X$ is a group isomorphism, with inverse given by the two inverse constructions in reverse order. [F1, F2, F5]

2.1 Let $L$ be a line bundle. Its determinant is canonically $L$ by [F4]. Applying the actual bundle-class comparison in [F3] therefore gives $c_1(L)=\gamma_X([L])$. Thus the map of step 1.1 is precisely the stated first Chern class, including its orientation. [F3, F4, step 1.1]

3.1 Since $c_1=\gamma_X$, it is a natural group isomorphism. Its injectivity says that equal first classes give the same Picard class, hence isomorphic line bundles; its surjectivity gives a line bundle representing each motivic class. The inverse is the one described in the statement by steps 1.1 and 2.1. Naturality follows from the naturality of the two supplied comparison maps. [F1, F2, step 1.1, step 2.1] ∎
