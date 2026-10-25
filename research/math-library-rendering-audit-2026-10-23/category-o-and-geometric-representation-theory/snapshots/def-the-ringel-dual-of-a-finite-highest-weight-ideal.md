---
id: def-the-ringel-dual-of-a-finite-highest-weight-ideal
kind: definition
title: "The Ringel dual of a finite highest weight ideal"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 28
deps:
  - thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o
  - def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category
  - lem-finite-length-objects-decompose-into-indecomposables
  - thm-finite-length-grothendieck-groups-have-simple-class-bases
  - def-split-grothendieck-group-of-an-additive-category
  - def-projective-object
  - thm-projectives-in-category-o-have-verma-flags
  - thm-parabolic-category-o-is-a-highest-weight-category
  - def-axiom-of-choice
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Section 4.5, Theorems 4.9-4.10 (printed pp. 20-21): characteristic tilting module, ext-self-orthogonality, finite projective dimension, the Ringel dual as the opposite endomorphism algebra and Ringel self-duality for category O; complete passage read."
    - title: "Jonathan Brundan, Tilting modules for Lie superalgebras, Comm. Algebra 32 (2004) 2251-2268 (complete arXiv article)"
      url: "https://arxiv.org/pdf/math/0209235"
      locator: "Sections 5-6, Theorem 5.4, Corollary 5.7 and Theorem 6.4 (printed pp. 8-12): the equivalence between the free and cofree categories and the contravariant equivalence exchanging projectives with tiltings; complete passage read."
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In a finite
highest-weight block or in a lower Serre ideal $\Gamma$ of
[[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]]
put
$$T_\Gamma=\bigoplus_{A\in\Gamma}T(A),\qquad R_\Gamma=\operatorname{End}(T_\Gamma)^{\mathrm{op}},$$
the **characteristic tilting generator** and its opposite endomorphism ring.
By the classification theorem
([[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]])
$T_\Gamma$ is Ext-self-orthogonal and has finite projective dimension.

The **Ringel-dual category** of $\Gamma$ is the category of finite-dimensional
left $R_\Gamma$-modules, made a highest-weight category by the reversed poset
and the standards
$$\Delta_R(A)=\operatorname{Hom}(T_\Gamma,\nabla(A)),\qquad A\in\Gamma .$$
The functor $\operatorname{Hom}(T_\Gamma,-)$ is exact and fully faithful on
costandard-filtered objects and identifies them with standard-filtered
Ringel-dual objects; projectives of the dual category correspond to tilting
objects of the original. Its algebraic realization by the opposite-parabolic
highest-weight quotient is proved in the next theorem.

## Facts & Assumptions

**Given:** A finite highest-weight block or lower Serre ideal $\Gamma$ with its generalized standards $M(A)$, costandards $\nabla(A)$, tiltings $T(A)$ and filtered categories, as in [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]] and [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]].

[F1] Tilting and filtered structure ([[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]], [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]): the homological criteria, the maximal-support normalization of the indecomposable tiltings $T(A)$, that every tilting is a finite sum of these, and closedness of the flag categories under extensions and summands.

[F2] Grothendieck and projective machinery ([[thm-finite-length-grothendieck-groups-have-simple-class-bases]], [[def-split-grothendieck-group-of-an-additive-category]], [[def-projective-object]], [[thm-projectives-in-category-o-have-verma-flags]], [[lem-finite-length-objects-decompose-into-indecomposables]]): finite-length decomposition, projective objects and standard flags of projectives.

[F3] Axiom of Choice ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 **Ext-self-orthogonality and finite projective dimension.** Each $T(A)$ has a standard flag and each $T(B)$ has a costandard flag. All positive $\operatorname{Ext}$ groups between these two kinds of flags vanish by the locally proved criterion of [F1], giving $\operatorname{Ext}^i(T(A),T(B))=0$ for every $i>0$. The actual projective sequence onto each standard has a standard-filtered kernel with strictly higher labels; starting at maximal labels, where the standard is projective, downward induction on the finite poset gives finite projective dimension for every standard. Long exact sequences along a finite standard flag then give finite projective dimension for every $T(A)$ and their finite sum $T_\Gamma$. The second flag in the Ext argument is costandard, and no standard/standard Ext vanishing is assumed. [F1, F2, F3]

2.1 **Costandard presentations by tiltings.** Dual to the normalized standard inclusion $M(A)\hookrightarrow T(A)$, every costandard object admits a surjection from a tilting object with costandard-filtered kernel; induction on the costandard flag length gives such presentations for every costandard-filtered object. [F1, step 1.1]

3.1 **Exactness and full faithfulness of $\operatorname{Hom}(T_\Gamma,-)$.** On costandard flags the functor sends the presentations of step 2.1 to projective presentations of the images; two tilting presentations lift every map and identify its kernel, so the functor is exact on costandard-filtered objects and fully faithful. It sends tilting objects to projective objects because $\operatorname{Hom}(T_\Gamma,T(A))$ is a direct summand of the regular module. [F1, step 1.1, step 2.1]

4.1 **The highest-weight structure of the dual.** The quotient $\operatorname{Hom}(T_\Gamma,T(A))\to\Delta_R(A)=\operatorname{Hom}(T_\Gamma,\nabla(A))$ has a kernel filtered by standards with labels strictly higher in the reversed order, and its endomorphism ring is $\mathbb C$ with head labelled $A$; this follows from full faithfulness in step 3.1 and the maximal tilting support of [F1]. Hence the Ringel-dual category is highest weight with the reversed poset and the displayed standards, and its filtered image is $\mathcal F(\Delta_R)$, not $\mathcal F(\nabla_R)$. [F1, step 3.1]

5.1 **Conclusion.** $T_\Gamma$ is a characteristic tilting generator with Ext-self-orthogonal summands and finite projective dimension, the Ringel-dual category has the reversed poset with standards $\Delta_R(A)=\operatorname{Hom}(T_\Gamma,\nabla(A))$, and $\operatorname{Hom}(T_\Gamma,-)$ is an exact fully faithful equivalence from costandard-filtered objects to standard-filtered dual objects, exchanging tiltings with projectives; the algebraic realization is proved in the next theorem. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
