---
title: Mohan Kumar existence of a nontrivial stably trivial bundle on a complex
  affine fourfold
status: published
research_item: thm-author-b02e51f9da03-mohan-kumar-existence-input
dependency_level: 3
sources:
  references:
    - title: Thomas Brazelton, Morgan Opie and Tariq Syed, On Algebraic Vector Bundles
        of Rank 2 over Smooth Affine Fourfolds
      url: https://tbrazel.github.io/assets/papers/fourfolds.pdf
      locator: Example 6.6, printed/PDF pp. 33–34 (existence and p=2
        hypersurface-complement description); section-6 standing field
        restriction, p. 32; MK84/MK85 references, p. 36
      statement: A smooth affine complex fourfold carries a nontrivial stably trivial
        algebraic rank-two bundle. For p=2 the Mohan Kumar variety is the
        complement of three hypersurfaces in P^3 x A^1.
      hypotheses: Algebraic bundles; algebraically closed base field of characteristic
        different from 2 and 3 in section 6. Only the complex p=2 case is
        imported.
      reading_limits: "For this repair read the online author-hosted PDF text:
        title/authors p. 1, introductory existence assertion p. 2, section-6
        field restriction p. 32, Example 6.6 pp. 33–34 and MK84/MK85
        bibliography p. 36. Import the stated existence and geometry; the
        original Mohan Kumar papers, equations and nontriviality proofs were not
        read or reconstructed. The Hermitian-K-theory continuation is not a
        premise. The numbered matrix deduction is local and is not attributed to
        this source."
---

## Prerequisites

- [lem-author-b02e51f9da03-matrix-kernel](item-lem-author-b02e51f9da03-matrix-kernel)
- [lem-author-b02e51f9da03-matrix-completion](item-lem-author-b02e51f9da03-matrix-completion)
- [def-stably-free-bundles](item-def-stably-free-bundles)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-article-conventions](item-def-article-conventions)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-variety-scheme-theoretic](https://alphabetamath.cc/item/def-variety-scheme-theoretic)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)
- [math:thm-the-complex-numbers-are-algebraically-closed](https://alphabetamath.cc/item/thm-the-complex-numbers-are-algebraically-closed)
- [math:thm-complex-numbers-form-a-field](https://alphabetamath.cc/item/thm-complex-numbers-form-a-field)
- [` Thomas Brazelton, Morgan Opie and Tariq Syed, On Algebraic Vector Bundles of Rank 2 over Smooth Affine Fourfolds · Example 6.6, printed/PDF pp. 33–34 (existence and p=2 hypersurface-complement description); section-6 standing field restriction, p. 32; MK84/MK85 references, p. 36 `](https://tbrazel.github.io/assets/papers/fourfolds.pdf)


## Statement
There exist a nonempty smooth affine complex algebraic variety $X$ of dimension four and a rank-two vector bundle $E$ with $E\not\cong\mathcal O_X^2$ but $E\oplus\mathcal O_X^N\cong\mathcal O_X^{2+N}$ for some integer $N\geq1$. The variety can be taken to be the complement of a union of three hypersurfaces in $\mathbb P^3_{\mathbb C}\times_{\operatorname{Spec}\mathbb C}\mathbb A^1_{\mathbb C}$, as in Mohan Kumar's construction. No particular defining equations are selected in this input. Assuming the Axiom of Choice (AC) for the matrix translation, write $X=\operatorname{Spec}A$. There is a right-invertible matrix $q:A^{2+N}\to A^N$ whose associated kernel bundle is $E$ and which cannot be completed to an invertible $(2+N)\times(2+N)$ matrix.

Here a complex algebraic variety means an integral separated scheme of finite type over $\operatorname{Spec}\mathbb C$; smooth means that its structure morphism is smooth, and affine means isomorphic to the spectrum of its coordinate ring. Dimension is the chain dimension of the underlying space, as in the article conventions. A rank-two vector bundle means a finite locally free $\mathcal O_X$-module of constant rank two. The finite direct sums, trivial bundles and stable triviality have their usual sheaf meanings. A right-invertible matrix is the standard matrix of an $A$-linear map $q$ admitting an $A$-linear right inverse $j$, with $qj=\operatorname{id}_{A^N}$. Completion means that $q$ is the last $N$ rows of an invertible square matrix.

The ambient spaces are the standard-chart projective space $\mathbb P^3_{\mathbb C}$ and the affine line $\mathbb A^1_{\mathbb C}=\operatorname{Spec}\mathbb C[t]$; their displayed product is the fibre product over $\operatorname{Spec}\mathbb C$. In this description a hypersurface means a closed algebraic subset which locally on affine opens $\operatorname{Spec}R$ is $V(f)$ for a nonzero $f\in R$, where $V(f)=\{\mathfrak p:f\in\mathfrak p\}$. Only these underlying closed subsets matter for the complement. Their union is removed with the induced open-subscheme structure, whose structure sheaf is the restriction of the ambient structure sheaf.

## Statement references
[lem-author-b02e51f9da03-matrix-kernel](item-lem-author-b02e51f9da03-matrix-kernel)

[lem-author-b02e51f9da03-matrix-completion](item-lem-author-b02e51f9da03-matrix-completion)

[def-stably-free-bundles](item-def-stably-free-bundles)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[def-article-conventions](item-def-article-conventions)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-variety-scheme-theoretic](https://alphabetamath.cc/item/def-variety-scheme-theoretic)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

[math:thm-the-complex-numbers-are-algebraically-closed](https://alphabetamath.cc/item/thm-the-complex-numbers-are-algebraically-closed)

[math:thm-complex-numbers-form-a-field](https://alphabetamath.cc/item/thm-complex-numbers-form-a-field)

## External input
The bundle existence, algebraic nontriviality and three-hypersurface description are imported from [Brazelton–Opie–Syed, Example 6.6](https://tbrazel.github.io/assets/papers/fourfolds.pdf), printed pp. 33–34, citing Mohan Kumar MK84/MK85. The numbered argument locally expands stable triviality and deduces the matrix obstruction. It neither reconstructs the deep existence proof nor supplies defining equations, matrix entries or an independently computed nontriviality invariant.

## Facts & Assumptions

**Given:** The complex base field and conventions in the statement. Assume AC for the two affine matrix interfaces below. No K-theory or universe-size premise is used in this argument.

**Goal:** Retain the imported existence and geometry and deduce the stated matrix obstruction.

[A1] AC is the Axiom of Choice. It is inherited from the affine module–bundle equivalence and projective-module results used by the matrix suppliers in [F3]; its use here is exactly their application in step 2.1. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Example 6.6 supplies a smooth affine complex fourfold and an algebraic rank-two bundle that is nontrivial but stably trivial, with the stated three-hypersurface description. This is the imported premise recorded in External input and the source reference, not a local existence proof.

[F2] Stable triviality means an actual isomorphism $E\oplus\mathcal O_X^N\cong\mathcal O_X^{2+N}$ for some integer $N\geq0$. The zero-fold direct sum is zero, so $N=0$ would make $E$ trivial. [def-stably-free-bundles](item-def-stably-free-bundles)

[F3] Assuming AC, for a stably trivial rank-two bundle on an affine scheme the matrix-kernel construction supplies some integer $N\geq0$ and $A$-linear maps $q:A^{2+N}\to A^N$ and $j:A^N\to A^{2+N}$ with $qj=\operatorname{id}_{A^N}$ and associated kernel bundle isomorphic to $E$. Its splitting gives an actual isomorphism $E\oplus\mathcal O_X^N\cong\mathcal O_X^{2+N}$ for this same $N$. The completion criterion says that this $q$ is completable if and only if $E$ is trivial. The free modules have their standard coordinate bases, and completion uses the last $N$ rows. [lem-author-b02e51f9da03-matrix-kernel](item-lem-author-b02e51f9da03-matrix-kernel), [lem-author-b02e51f9da03-matrix-completion](item-lem-author-b02e51f9da03-matrix-completion)

[F4] Scheme dimension, finite type for affine schemes, and constant bundle rank follow the article conventions. Varieties, affine schemes and smoothness have the scheme meanings specified in the statement. [def-article-conventions](item-def-article-conventions), [math:def-variety-scheme-theoretic](https://alphabetamath.cc/item/def-variety-scheme-theoretic), [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[F5] Projective space uses standard charts; affine space over a base gives $\mathbb A^1_{\mathbb C}=\operatorname{Spec}\mathbb C[t]$. The fibre product is defined by its universal property and exists for these schemes. The inline hypersurface convention uses affine vanishing sets, and the complement uses the open-subscheme structure and restricted structure sheaf. [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property), [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist), [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets), [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes), [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

[F6] The complex field is algebraically closed and contains the embedded real field. In particular $2$ and $3$ are nonzero in $\mathbb C$, so the section-6 characteristic restriction holds for this application of Example 6.6. [math:thm-the-complex-numbers-are-algebraically-closed](https://alphabetamath.cc/item/thm-the-complex-numbers-are-algebraically-closed), [math:thm-complex-numbers-form-a-field](https://alphabetamath.cc/item/thm-complex-numbers-form-a-field)

## Proof

1.1 Apply the imported existence statement [F1] over $\mathbb C$, whose field hypotheses hold by [F6], using the geometric conventions in [F4] and [F5]. It supplies $X$ and the nontrivial stably trivial bundle $E$ with the stated hypersurface-complement description. By [F2], this $E$ admits a finite free stabilization. [F1, F2, F4, F5, F6]

2.1 Write $X=\operatorname{Spec}A$ using its affineness in [F4]. Apply the matrix-kernel construction [F3] to the stably trivial rank-two bundle $E$ from step 1.1, with AC as in [A1]. Choose the integer $N\geq0$ and maps $q,j$ supplied together by that construction. The associated splitting in [F3] gives $E\oplus\mathcal O_X^N\cong\mathcal O_X^{2+N}$ for this same $N$. If $N=0$, this isomorphism would make $E$ trivial by [F2], contradicting [F1]; hence $N\geq1$. If $q$ were completable, the completion criterion in [F3], applied to these maps and the isomorphism of their kernel bundle with $E$, would likewise make $E$ trivial. Thus $q$ is not completable. This is a local consequence of the imported bundle existence, not an assertion that the source explicitly computes $q$. [A1, F1, F2, F3, F4, step 1.1] ∎
