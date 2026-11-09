---
id: thm-normal-surface-classification
kind: theorem
title: Motivic Chern classification on normal affine surfaces
status: draft
domain: mathematics
deps:
  - def-vector-bundle-classes
  - def-motivic-filtration
  - def-filtration-projections
  - lem-filtered-stage-exact-sequence
  - lem-zero-projection-rank
  - lem-first-projection-chern
  - lem-author-3cde9692a7e9-first-class-and-coefficients
  - prop-second-projection-chern
  - lem-high-filtration-vanishing
  - lem-surface-chern-prescription
  - thm-critical-rank-cancellation
  - thm-line-bundle-first-chern-classification
  - math:def-axiom-of-choice
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-filtration-projections: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  lem-zero-projection-rank: mathematical-premise
  lem-first-projection-chern: mathematical-premise
  lem-author-3cde9692a7e9-first-class-and-coefficients: mathematical-premise
  prop-second-projection-chern: mathematical-premise
  lem-high-filtration-vanishing: mathematical-premise
  lem-surface-chern-prescription: mathematical-premise
  thm-critical-rank-cancellation: mathematical-premise
  thm-line-bundle-first-chern-classification: mathematical-premise
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
      locator: Abstract; PDF p. 2, Theorem A and following paragraph; p. 12, proof of
        Theorem A
      statement: On a normal affine surface over an algebraically closed field the
        first and second motivic Chern classes classify rank-two vector bundles.
      hypotheses: The article conventions make affine schemes finite type over the
        standing algebraically closed field.
      reading_limits: The theorem and the displayed proof passage in the supplied
        extracted article text were read. The named completed suppliers are used
        for the underlying filtration, prescription and cancellation results;
        their external proofs are not reconstructed here.
dependency_level: 30
---

## Statement
Assume the Axiom of Choice and the site-size and universe bounds required for the specified motivic and perfect K-theory constructions. Let $k$ be an algebraically closed field and let $X$ be a normal affine finite-type $k$-scheme of Krull dimension two. The map
$$ (c_1,c_2):\mathrm{Vect}_2(X)\longrightarrow H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)\times H^{4,2}_{\mathrm{mot}}(X,\mathbb Z) $$
is a bijection. Under the first-Chern-class identification of $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ with the Picard group, its first component is the determinant. Thus rank-two bundles are classified by their determinant and second motivic Chern class.

A vector bundle is a finite locally free $\mathcal O_X$-module; rank two means that it is locally isomorphic to $\mathcal O_X^2$. The set $\mathrm{Vect}_2(X)$ consists of its isomorphism classes. A line bundle is a rank-one vector bundle, the determinant of a rank-two bundle is its second exterior power, and the Picard group is the group of line-bundle isomorphism classes under tensor product. Normal means that every local ring is an integrally closed domain. Krull dimension is the supremum of the lengths of chains of irreducible closed subsets. The displayed motivic groups are cohomology groups of the indicated integral weight-one and weight-two motivic complexes, and $c_i$ are the specified motivic Chern classes. Choice means that every family of nonempty sets has a choice function; the size bounds fix the sites and ambient universes used by the supplied constructions.

## Facts & Assumptions

**Given:** The field $k$, scheme $X$, Choice and site-size and universe bounds in the statement.

**Goal:** Prove that the displayed map is well-defined and bijective, and identify its first component with the determinant.

[F1] A bundle has a well-defined isomorphism class and a class in $K_0(X)$, the zeroth homotopy group of the nonconnective K-theory spectrum of perfect complexes. On an affine scheme the latter agrees with the vector-bundle Grothendieck group. [[def-vector-bundle-classes]]

[F2] The motivic image filtration $F^iK_0(X)$ is the image of the zeroth homotopy group of stage $i$ in $K_0(X)$; stage zero is $K(X)$. For $i=0,1,2$, the actual stage-to-image maps are isomorphisms under the stated normal finite-type hypotheses. The exact sequence of consecutive stages implies $\ker p_0=F^1K_0(X)$ and $\ker p_1=F^2K_0(X)$ for the transported graded projections. [[def-motivic-filtration]] [[def-filtration-projections]] [[lem-filtered-stage-exact-sequence]]

[F3] For the stated $X$, $p_0$ is the locally constant rank and $p_1$ on $F^1K_0(X)$ is the actual perfect first Chern class. Normality implies seminormality, as an element of the fraction field whose square and cube belong to a normal domain is integral and therefore belongs to it. [[lem-zero-projection-rank]] [[lem-first-projection-chern]]

[F4] The actual perfect Chern operations restrict to bundle Chern classes. When two perfect classes have equal first Chern classes, the second Chern class of their difference is the difference of their second Chern classes. [[lem-author-3cde9692a7e9-first-class-and-coefficients]]

[F5] On $F^2K_0(X)$, $p_2=-c_2$ and its kernel is $F^3K_0(X)$. For a noetherian two-dimensional scheme over a field, the zeroth homotopy group of stage three vanishes; hence its image $F^3K_0(X)$ vanishes. [[prop-second-projection-chern]] [[lem-high-filtration-vanishing]] [[def-motivic-filtration]]

[F6] Every pair in the displayed target is realized by a rank-two bundle on $X$. [[lem-surface-chern-prescription]]

[F7] Two rank-two bundles on this nonempty affine surface are isomorphic exactly when their classes in the specified perfect $K_0(X)$ agree. The first Chern class identifies the Picard group with $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ and sends the determinant to the first Chern class of the bundle. [[thm-critical-rank-cancellation]] [[thm-line-bundle-first-chern-classification]] [[lem-first-projection-chern]]

## Proof

**Proof technique:** Compare the difference of two bundle classes successively with the first three filtration stages, and use the separate prescription theorem for surjectivity.

1.1 The given finite-type scheme is noetherian and, because its dimension is two, nonempty. Chern classes are invariant under bundle isomorphism, so the displayed assignment is well-defined on $\mathrm{Vect}_2(X)$. The target groups and bundle classes use the constructions and assumptions in [F1]–[F4]. [F1, F4, given]

1.2 Let rank-two bundles $E$ and $F$ have equal first and second Chern classes, and put $x=[E]-[F]\in K_0(X)$. Both bundles have rank two at every point, so $p_0(x)=0$ by [F3]. Exactness in [F2] therefore gives $x\in F^1K_0(X)$. [F1, F2, F3, given, construct]

2.1 The first Chern class of $x$ is $c_1(E)-c_1(F)=0$, since the actual first operation is additive and restricts to the bundle operation. Thus [F3] gives $p_1(x)=0$, and [F2] gives $x\in F^2K_0(X)$. [F2, F3, F4, step 1.2]

3.1 By the equal-first-class difference formula in [F4], $c_2(x)=c_2(E)-c_2(F)=0$. Hence [F5] gives $x\in F^3K_0(X)=0$. Therefore $[E]=[F]$, and [F7] gives $E\cong F$. The displayed map is injective. [F4, F5, F7, step 2.1]

4.1 For an arbitrary pair in the target, [F6] supplies a rank-two bundle with exactly those two Chern classes, so the map is surjective. Finally, [F7] identifies the first component with the determinant under the Picard isomorphism. Together with step 3.1 this proves the bijection and the stated classification. [F6, F7, step 3.1] ∎
