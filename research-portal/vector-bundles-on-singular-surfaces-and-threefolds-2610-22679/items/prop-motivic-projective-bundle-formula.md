---
id: prop-motivic-projective-bundle-formula
kind: proposition
title: Motivic projective bundle formula
status: draft
domain: mathematics
deps:
  - def-motivic-cohomology
  - def-bigraded-oriented-theory
  - def-vector-bundle-classes
  - lem-author-79117e1d72ed-bigraded-ring
  - lem-author-79117e1d72ed-additive-c1
  - lem-author-79117e1d72ed-dual-conventions
  - lem-author-79117e1d72ed-all-bidegrees
  - lem-author-79117e1d72ed-base-change
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  def-bigraded-oriented-theory: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
  lem-author-79117e1d72ed-bigraded-ring: mathematical-premise
  lem-author-79117e1d72ed-additive-c1: mathematical-premise
  lem-author-79117e1d72ed-dual-conventions: mathematical-premise
  lem-author-79117e1d72ed-all-bidegrees: mathematical-premise
  lem-author-79117e1d72ed-base-change: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p.2 introductory property; p.8 Section3 opening; original statement
        retained
      reading_limits: Original target and source locators read; construction/proof
        supplied through the exact EM inputs above.
proof_strategy: direct
dependency_level: 13
---

## Statement
Assume AC. On the article category of qcqs $k$-schemes, the supplied motivic cohomology, with $H^{a,b}(X)=0$ explicitly for $b<0$, is an additively oriented bigraded theory satisfying the projective bundle contract. This holds over any field $k$ (hence in particular the article’s algebraically closed base), without smoothness, reducedness, Noetherianity or dimension hypotheses. Its ring is the actual EM graded cup-product ring and its orientation is EM Definition5.2. For a bundle $E$ of constant rank $r>0$, the quotient convention $\mathbb P_X(E)=\operatorname{Proj}_X\operatorname{Sym}(E)$ with $\xi=c_1(\mathcal O(1))$ gives, for every $(a,b)\in\mathbb Z^2$,
$$\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\xrightarrow{\ \sum_m\pi^*(-)\xi^m\ } H^{a,b}(\mathbb P_X(E)),$$
a natural isomorphism. No rank-zero projective-bundle assertion is required.

## Statement references
[[def-bigraded-oriented-theory]]

## Facts & Assumptions
[A1] Assume the Axiom of Choice, as formulated in [[math:def-axiom-of-choice]]. It discharges the choice hypotheses of the projective-bundle contract in steps 1.1–1.2 and of all three projective-bundle suppliers in [F3] in step 2.1.

[F1] [[def-motivic-cohomology]] fixes the groups in nonnegative weight. [[lem-author-79117e1d72ed-bigraded-ring]] supplies the extension, natural ring and first-degree sign.

[F2] [[lem-author-79117e1d72ed-additive-c1]] supplies the actual additive natural first Chern class.

[F3] [[lem-author-79117e1d72ed-dual-conventions]], [[lem-author-79117e1d72ed-all-bidegrees]] and [[lem-author-79117e1d72ed-base-change]] supply the quotient convention, exact formula in all degrees, and category/base-change requirements. [[def-vector-bundle-classes]] specifies the finite locally free bundles.

[F4] [[def-bigraded-oriented-theory]] lists the four clauses of the contract.

## Proof
**Given:** The stated scheme category, AC and motivic suppliers.

**Goal:** Exhibit all four clauses with the actual source maps.

1.1 Use [F1] to define all integer bidegrees by zero extension and the direct-sum ring. Its unit, product bidegrees, associativity, graded commutativity and functorial unital pullbacks are precisely clauses1–2 of [F4]. [A1, F1, F4]

1.2 Use the map in [F2] for the orientation. Its additivity, zero value on the trivial line and naturality give clause3; no orientation is selected from an arbitrary Picard-group isomorphism. [A1, F2, F4]

2.1 Under [A1], by [F3] all projective bundles/base-change maps stay in the scheme category, and the displayed formula is the actual quotient-tautological-class map. It is an isomorphism for every integer bidegree, including zero source/target for negative target weights. This gives clause4, completing the contract and the proposition. [A1, F3, F4, step 1.1, step 1.2] ∎
