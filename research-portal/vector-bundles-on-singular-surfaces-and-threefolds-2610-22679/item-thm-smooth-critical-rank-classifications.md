---
title: Classical smooth critical-rank classifications
status: published
research_item: thm-smooth-critical-rank-classifications
dependency_level: 17
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed p. 1, Introduction, first paragraph; printed p. 3, Notation and
        conventions for the affine finite-type convention.
      statement: The introduction attributes classification by the first two Chern
        classes on smooth affine surfaces to Murthy–Swan, and the corresponding
        rank-three classification on smooth affine threefolds to Mohan
        Kumar–Murthy. The conventions assume affine schemes finite type over the
        base field.
      hypotheses: Smooth affine surfaces and threefolds over an algebraically closed
        field; bundles of rank two and three respectively. The separate rank-two
        threefold theorem has characteristic different from two.
      reading_limits: Read the supplied article extraction at printed pp. 1 and 3.
        These passages support the attributions and conventions. Neither the
        original Murthy–Swan proof nor the original Mohan Kumar–Murthy proof was
        read. The surface argument here is the local composition of the declared
        cylinder, splitting-reduction and cancellation interfaces.
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds
      url: https://arxiv.org/pdf/1204.0770v5
      locator: Printed p. 2, Section 1, contextual paragraph immediately after Theorem
        1, displayed rank-three Chern map; printed p. 4, opening preliminaries
        for the finite-type convention.
      statement: The map (c1,c2,c3) from rank-three bundle isomorphism classes to the
        product of CH^1, CH^2 and CH^3 on a smooth affine threefold is
        bijective, attributed to Mohan Kumar–Murthy [KM82].
      hypotheses: Smooth affine threefold over an algebraically closed field;
        rank-three bundles. The recalled result has no characteristic
        restriction. The characteristic-not-two assumption in the preceding
        rank-two Theorem 1 is separate.
      reading_limits: Read the extracted PDF text at printed p. 2, including the
        displayed map and adjacent Theorem 1, and p. 4 opening preliminaries.
        The original KM82 paper and its proof were not read; no proof
        reconstruction is claimed. The existing citation identifies it as Ann.
        Math. 116 (1982), 579–591, DOI 10.2307/2007024, Theorem 2.1(iii); that
        locator was not checked in the original paper.
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds (v1)
      url: https://arxiv.org/pdf/1204.0770v1
      locator: Printed p. 2, Section 1, opening paragraph before Theorem 1.
      statement: The opening paragraph recalls unique existence of a rank-three bundle
        with given Chern classes, attributed to Mohan Kumar–Murthy.
      hypotheses: An algebraically closed field and a smooth affine variety of
        dimension three; the opening paragraph has no characteristic
        restriction. The following Theorem 1 adds a characteristic restriction
        and is separate.
      reading_limits: Read the extracted PDF text of the opening paragraph and the
        following Theorem 1 on printed p. 2. No original KM82 proof or later
        proof in this version was read or reconstructed.
---

PDF p. 1: Introduction, first paragraph

## Prerequisites

- [lem-author-f08c343a07fc-local-chern-interface](item-lem-author-f08c343a07fc-local-chern-interface)
- [lem-author-f08c343a07fc-local-cylinder-geometry](item-lem-author-f08c343a07fc-local-cylinder-geometry)
- [lem-author-f08c343a07fc-local-stabilized-chern](item-lem-author-f08c343a07fc-local-stabilized-chern)
- [lem-author-f08c343a07fc-local-surface-uniqueness-reduction](item-lem-author-f08c343a07fc-local-surface-uniqueness-reduction)
- [lem-author-f08c343a07fc-local-surface-existence-reduction](item-lem-author-f08c343a07fc-local-surface-existence-reduction)
- [lem-author-f08c343a07fc-cancel-cancellation-interface](item-lem-author-f08c343a07fc-cancel-cancellation-interface)
- [thm-author-f08c343a07fc-cancel-suslin-module-input](item-thm-author-f08c343a07fc-cancel-suslin-module-input)
- [thm-author-f08c343a07fc-local-kumar-murthy-chow-input](item-thm-author-f08c343a07fc-local-kumar-murthy-chow-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [def-article-conventions](item-def-article-conventions)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor)
- [math:def-invertible-sheaf-of-cartier-divisor](https://alphabetamath.cc/item/def-invertible-sheaf-of-cartier-divisor)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [lem-adjudicate-fa9c7180089a-polynomial-spectrum-dimension](item-lem-adjudicate-fa9c7180089a-polynomial-spectrum-dimension)
- [` Fasel–Yakerson, Vector bundles on singular surfaces and threefolds · Printed p. 1, Introduction, first paragraph; printed p. 3, Notation and conventions for the affine finite-type convention. `](https://arxiv.org/abs/2610.22679v1)
- [` Aravind Asok and Jean Fasel, A cohomological classification of vector bundles on smooth affine threefolds · Printed p. 2, Section 1, contextual paragraph immediately after Theorem 1, displayed rank-three Chern map; printed p. 4, opening preliminaries for the finite-type convention. `](https://arxiv.org/pdf/1204.0770v5)
- [` Aravind Asok and Jean Fasel, A cohomological classification of vector bundles on smooth affine threefolds (v1) · Printed p. 2, Section 1, opening paragraph before Theorem 1. `](https://arxiv.org/pdf/1204.0770v1)



## Statement
Assume AC and suitable Grothendieck universes for the supplied bundle-class and perfect K-theory interfaces; universe existence is assumed separately from AC. Over an algebraically closed field $k$ of arbitrary characteristic, the ordinary integral Chow Chern maps are bijections $C_2:\mathrm{Vect}_2(X)\xrightarrow{\sim}\mathrm{CH}^1(X)\times\mathrm{CH}^2(X)$ for every smooth affine surface $X$, meaning a nonempty affine finite-type $k$-scheme of dimension two whose irreducible components all have dimension two, and $C_3:\mathrm{Vect}_3(Y)\xrightarrow{\sim}\mathrm{CH}^1(Y)\times\mathrm{CH}^2(Y)\times\mathrm{CH}^3(Y)$ for every smooth affine threefold $Y$, meaning a nonempty affine finite-type $k$-scheme of dimension three whose irreducible components all have dimension three. Smoothness means that the structure morphism to $\operatorname{Spec}k$ is smooth. Here affine schemes are spectra of commutative unital $k$-algebras; finite type on an affine scheme means that its coordinate algebra is finitely generated over $k$. Pure dimension $d$ means that every irreducible component has dimension $d$; an irreducible component is a maximal irreducible closed subset, and dimension is the chain dimension of the article conventions. In each case every tuple is realized, and its realizing bundle is unique up to isomorphism. These are the classical surface classification of Murthy–Swan and threefold classification of N. Mohan Kumar–M. P. Murthy. Here a rank-$r$ bundle is a finite locally free module sheaf locally isomorphic to $\mathcal O^r$, and $\mathrm{Vect}_r$ denotes its set of isomorphism classes. Write $\mathrm{CH}^i$ for the integral codimension-$i$ Chow group of cycles modulo rational equivalence. The map $C_r$ sends a bundle class to $(c_1,\ldots,c_r)$, and $c_i$ is the coefficient of the standard quotient-projective-bundle Chern relation, with $c_1(\mathcal O(D))=[D]$ for every effective Cartier divisor $D$ on the scheme in question. Such a divisor is locally cut out by a nonzerodivisor; $\mathcal O(D)$ is its associated invertible sheaf, locally $f^{-1}\mathcal O$ for a local equation $f$, and $[D]$ denotes its divisor cycle class in $\mathrm{CH}^1$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The exact all-characteristic rank-three classification is imported in [thm-author-f08c343a07fc-local-kumar-murthy-chow-input](item-thm-author-f08c343a07fc-local-kumar-murthy-chow-input).

[F2] The ordinary Chow Chern interface, cylinder geometry and stabilized Chern data are supplied by [lem-author-f08c343a07fc-local-chern-interface](item-lem-author-f08c343a07fc-local-chern-interface), [lem-author-f08c343a07fc-local-cylinder-geometry](item-lem-author-f08c343a07fc-local-cylinder-geometry), [lem-author-f08c343a07fc-local-stabilized-chern](item-lem-author-f08c343a07fc-local-stabilized-chern).

[F3] The local cylinder reductions establish surface uniqueness subject to line cancellation and surface existence subject to cylinder rank-three existence. [lem-author-f08c343a07fc-local-surface-uniqueness-reduction](item-lem-author-f08c343a07fc-local-surface-uniqueness-reduction), [lem-author-f08c343a07fc-local-surface-existence-reduction](item-lem-author-f08c343a07fc-local-surface-existence-reduction)

[F4] The module cancellation theorem and its local bundle/K-zero interface establish cancellation on any affine surface at rank two. [thm-author-f08c343a07fc-cancel-suslin-module-input](item-thm-author-f08c343a07fc-cancel-suslin-module-input), [lem-author-f08c343a07fc-cancel-cancellation-interface](item-lem-author-f08c343a07fc-cancel-cancellation-interface)

[F5] The article conventions supply finite generation of the coordinate algebra of an affine scheme, bundle rank and chain dimension. A commutative ring is noetherian when every ideal is finitely generated. A field is noetherian, and a finite-type algebra over a noetherian ring is noetherian. For a nonzero noetherian ring $A$, the dimension comparison gives $\dim A=\dim\operatorname{Spec}A$. A scheme with a finite affine open cover by spectra of noetherian rings is noetherian. Thus for our surface $X=\operatorname{Spec}A$, $A$ is nonzero, finite type, noetherian and of dimension two, and its single affine chart makes $X$ noetherian. [def-article-conventions](item-def-article-conventions), [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian), [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian), [lem-adjudicate-fa9c7180089a-polynomial-spectrum-dimension](item-lem-adjudicate-fa9c7180089a-polynomial-spectrum-dimension), [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[F6] Smoothness is that of the structural morphism, and the ordinary Chern normalization satisfies the stated formula for effective Cartier divisors with the associated invertible sheaf. AC is inherited by the Chow, cylinder and affine/K-zero suppliers; the suitable universes have the declared closure convention and are assumed separately. [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle), [math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor), [math:def-invertible-sheaf-of-cartier-divisor](https://alphabetamath.cc/item/def-invertible-sheaf-of-cartier-divisor), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F7] On an affine scheme in the stated AC and universe scope, the article's spectral $K_0$ is the vector-bundle Grothendieck group: its bundle classes are invariant under isomorphism and satisfy $[B]=[B']+[B'']$ for every short exact sequence $0\to B'\to B\to B''\to0$. The noetherian affine surface is in its qcqs scope, as checked by the cancellation interface. [def-vector-bundle-classes](item-def-vector-bundle-classes), [lem-author-f08c343a07fc-cancel-cancellation-interface](item-lem-author-f08c343a07fc-cancel-cancellation-interface)

## Proof

1.1 The threefold assertion, including both realization of every tuple and uniqueness for that tuple, is exactly [F1] with its actual Chern map as in [F2]. [F1, F2, given]

1.2 Let $X=\operatorname{Spec}A$ be a smooth affine surface. Its cylinder is a smooth affine threefold by [F2], so [F1] supplies every rank-three Chern triple there. The surface-existence reduction in [F3] consequently realizes every pair on $X$ by a rank-two bundle. [F1, F2, F3]

1.3 By [F5], $A$ is a nonzero noetherian finite-type algebra of dimension two over algebraically closed $k$, and $X$ is noetherian. Thus the module theorem in [F4] makes every constant-rank-two finite projective $A$-module cancellative, since $2\geq\dim A$. To verify the line-cancellation hypothesis of [F3], take any rank-two bundles $E,F$ with $E\oplus\mathcal O_X\cong F\oplus\mathcal O_X$. The split sequences $0\to E\to E\oplus\mathcal O_X\to\mathcal O_X\to0$ and its analogue for $F$ are exact: inclusion into the first factor has image equal to the kernel of projection onto the second, and this projection has the section $a\mapsto(0,a)$. By [F7], the isomorphic middle terms give $[E]+[\mathcal O_X]=[F]+[\mathcal O_X]$. Subtracting the common class gives $[E]=[F]$ in spectral $K_0(X)$, so the local interface in [F4] gives $E\cong F$. Now the surface-uniqueness reduction [F3] applies, with rank-three uniqueness from [F1] on the cylinder of [F2], and proves that equal Chern pairs imply isomorphic rank-two bundles. Thus $C_2$ is injective. [F1, F2, F3, F4, F5, F7, given]

2.1 Steps 1.2 and 1.3 prove surface bijectivity; step 1.1 proves threefold bijectivity. The divisor normalization is [F6]. In both cases isomorphisms preserve Chern tuples by [F2], so these bijections have exactly the existence and uniqueness interpretation asserted. [F2, F6, step 1.1, step 1.2, step 1.3] ∎

## Source notes
The surface attribution is retained from Fasel–Yakerson, Vector bundles on singular surfaces and threefolds, p. 1, citing Murthy–Swan, Vector bundles over affine surfaces, Invent. Math. 36 (1976), 125–165, DOI 10.1007/BF01390007. The original Murthy–Swan proof was not read. The local proof uses a cylinder, the Serre splitting supplied inside the surface-existence reduction and a separately namespaced cancellation import. Ordinary Chow classes are the interface here; no unnamed motivic comparison is assumed. The two smooth schemes are understood equidimensional, as surfaces and threefolds in the article; finitely many disjoint equidimensional components can equally be handled componentwise. The stated supplier interfaces already permit these schemes without an irreducibility assumption; the stabilization supplier explains the separation of cycles across finite clopen strata.

The threefold input is checked through Asok–Fasel v5, p. 2, including its displayed rank-three Chow map, and v1, p. 2, opening paragraph for the unrestricted algebraically closed field hypothesis. The original Mohan Kumar–Murthy proof is not reproduced. The rank-two cancellation application uses the existing Suslin input; Keshari v1, p. 1, opening conventions, cancellation definition and Theorem 1.1(i) were checked for its common finite free summand and rank-at-least-dimension scope. Neither Suslin's original proof nor Keshari's later proofs were reconstructed.
