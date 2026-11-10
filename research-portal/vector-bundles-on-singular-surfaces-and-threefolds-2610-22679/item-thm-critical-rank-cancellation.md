---
title: Critical-rank cancellation used in the article
status: published
research_item: thm-critical-rank-cancellation
dependency_level: 14
---

PDF p. 2: Sus77 reduction; PDF p. 12: Theorem A opening; PDF p. 17: Theorem B injectivity

## Prerequisites

- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)
- [lem-author-7dc5154c7a6f-cancellation-interface](item-lem-author-7dc5154c7a6f-cancellation-interface)
- [thm-author-7dc5154c7a6f-suslin-module-input](item-thm-author-7dc5154c7a6f-suslin-module-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [Manoj Kumar Keshari, Cancellation problem for projective modules over affine algebras · p. 1, Introduction: definition of cancellative and Theorem 1.1(i); p. 16, reference  20 ](https://arxiv.org/pdf/0708.2961v1)

## Statement
Assume AC and the universes of the article\'s K-theory construction. Let $k$ be an algebraically closed field of arbitrary characteristic and $X=\operatorname{Spec}A$ a nonempty affine finite-type $k$-scheme of dimension $d$. For any two vector bundles $E,F$ of the same constant rank $r\geq d$, $E\cong F$ if and only if $[E]=[F]$ in the article\'s perfect spectral $K_0(X)$. In particular this applies to rank $d$ on every normal affine surface or threefold in the article. Here $[E]$ is the perfect-K-theory object class, and the affine comparison identifies it with the vector-bundle Grothendieck class; no coherent-sheaf G-zero identification is used.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The precise module cancellation input applies in every characteristic to this affine algebra and ranks at least d. [thm-author-7dc5154c7a6f-suslin-module-input](item-thm-author-7dc5154c7a6f-suslin-module-input)

[F2] The local application lemma proves the K-zero/isomorphism equivalence whenever the corresponding constant-rank projective modules are cancellative. [lem-author-7dc5154c7a6f-cancellation-interface](item-lem-author-7dc5154c7a6f-cancellation-interface)

[F3] The affine perfect/bundle comparison and stable-equivalence supplier fix the actual class map. [def-vector-bundle-classes](item-def-vector-bundle-classes), [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)

## Proof

1.1 A finite-type algebra over a field is noetherian, so the local affine K-zero application applies to $X$. The imported cancellation theorem makes every constant-rank-$r$ projective module cancellative since $r\geq d$. Thus [F2] gives the desired equivalence for $E,F$, using the class convention in [F3]. [F1, F2, F3, given]

2.1 A normal affine surface or threefold in the article is an affine finite-type scheme over the same algebraically closed field, and its critical rank is respectively $d=2$ or $d=3$. Substitution $r=d$ yields exactly the original assertion. Isomorphic bundles always have equal object classes, so both directions have been retained. [F1, F2, step 1.1] ∎

## Source notes
The original article invokes Sus77 on pp. 2, 12 and 17 (https://arxiv.org/abs/2610.22679v1). Its rank-d normal settings are preserved as special cases of the broader precise sourced theorem. The proof is a local application of an imported theorem; no proof acceptance is asserted.
