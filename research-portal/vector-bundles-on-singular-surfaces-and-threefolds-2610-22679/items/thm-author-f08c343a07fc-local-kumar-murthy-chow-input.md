---
id: thm-author-f08c343a07fc-local-kumar-murthy-chow-input
kind: theorem
title: Mohan Kumar–Murthy rank-three Chow classification
status: published
domain: mathematics
deps:
  - lem-author-f08c343a07fc-local-chern-interface
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-irreducible-component-of-a-topological-space
  - math:def-grothendieck-universe-closure-convention
  - lem-adjudicate-f63a33a7279d-smooth-affine-components
  - lem-adjudicate-f63a33a7279d-clopen-chern-products
dependency_roles:
  lem-author-f08c343a07fc-local-chern-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-irreducible-component-of-a-topological-space: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  lem-adjudicate-f63a33a7279d-smooth-affine-components: mathematical-premise
  lem-adjudicate-f63a33a7279d-clopen-chern-products: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds (v5)
      url: https://arxiv.org/pdf/1204.0770v5
      locator: Printed p. 2, Section 1, Theorem 1 and the immediately following
        paragraph, displayed rank-three Chern map.
      statement: The contextual paragraph attributes bijectivity of the ordinary
        rank-three Chern-triple map to Mohan Kumar and Murthy [KM82].
      hypotheses: "The displayed map uses X of the preceding Theorem 1: a smooth
        affine threefold over an algebraically closed field of characteristic
        different from two. This citation alone is not used to assert the
        arbitrary-characteristic or non-irreducible scheme scope."
      reading_limits: Freshly read the extracted p. 2 Theorem 1 and following
        paragraph in this repair. The PDF screenshot call failed with Cache
        miss. No KM82 proof or later Asok–Fasel proof was read or reconstructed.
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds (v1)
      url: https://arxiv.org/pdf/1204.0770v1
      locator: Printed p. 2, Section 1, opening paragraph before Theorem 1.
      statement: The opening paragraph attributes to Mohan Kumar and Murthy existence
        and uniqueness of rank-three bundles with prescribed Chern classes on a
        smooth affine k-variety of dimension three.
      hypotheses: An algebraically closed field of arbitrary characteristic and a
        smooth affine variety of dimension three. We apply this statement only
        to integral smooth affine components, never directly to a
        non-irreducible scheme. The following Theorem 1 has a characteristic
        exclusion and is not the imported premise.
      reading_limits: Freshly read the extracted opening paragraph and following
        Theorem 1 on printed p. 2. The PDF screenshot call failed with Cache
        miss. No original KM82 proof or later proof in v1 was read. The variety
        classification is accepted here as a precise external premise, not
        reconstructed.
dependency_level: 16
formulation_deps:
  - lem-author-f08c343a07fc-local-chern-interface
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-irreducible-component-of-a-topological-space
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-f08c343a07fc-local-chern-interface
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-irreducible-component-of-a-topological-space
  - math:def-grothendieck-universe-closure-convention
  - lem-adjudicate-f63a33a7279d-smooth-affine-components
  - lem-adjudicate-f63a33a7279d-clopen-chern-products
---

## Statement
Assume AC and the suitable Grothendieck universes required by the supplied bundle-class interface; universe existence is assumed separately from AC. Let $k$ be an algebraically closed field of arbitrary characteristic and $Y$ a smooth affine threefold over $k$. Here this means a nonempty affine $k$-scheme of finite type whose structure morphism $Y\to\operatorname{Spec}k$ is smooth and whose irreducible components all have dimension three; irreducibility of $Y$ is not assumed. Dimension is the supremum of the lengths $n$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_n$ of nonempty irreducible closed subsets of the underlying topological space; a one-member chain has length zero and $\dim\varnothing=-\infty$. Then $C_3:\mathrm{Vect}_3(Y)\to\mathrm{CH}^1(Y)\times\mathrm{CH}^2(Y)\times\mathrm{CH}^3(Y)$, $[G]_{\mathrm{iso}}\mapsto(c_1(G),c_2(G),c_3(G))$, is bijective. The classes are the ordinary integral Chow Chern classes with the quotient-projective-bundle normalization. Thus every triple occurs, and two such bundles are isomorphic exactly when their triples agree.

## External input
The v1 opening paragraph (Asok–Fasel, printed p. 2) supplies the classical rank-three existence and uniqueness theorem for integral smooth affine three-dimensional varieties over an algebraically closed field of arbitrary characteristic. An affine variety here is an integral affine finite-type scheme over the field. The v5 contextual display on printed p. 2 identifies the ordinary Chow Chern tuple, but its variable $X$ inherits the characteristic-not-two hypothesis of the preceding theorem; it is not our source for arbitrary characteristic. The extension to a possibly non-irreducible $Y$ is the local componentwise argument below, using the two declared helpers. Only the variety theorem is imported; the proof here composes it with those helpers. The ordinary integral Chow Chern classes have the convention fixed by the supplied Chern interface.

## Facts & Assumptions

**Given:** The data, geometric conventions, AC and universe assumptions in the statement.

**Goal:** Establish the stated conclusion without an irreducibility assumption on $Y$.

[F1] For an integral smooth affine three-dimensional variety over an algebraically closed field, the classical rank-three classification by prescribed ordinary Chern classes is the external premise recalled in Asok–Fasel v1, p. 2, opening paragraph. There is no characteristic restriction in that paragraph. The v5 display specifies the Chern tuple but is used only within its inherited characteristic-not-two scope.

[F2] The ordinary Chow Chern map and its coefficient convention are fixed in [[lem-author-f08c343a07fc-local-chern-interface]]. This supplies $\mathrm{Vect}_3(Y)$ as rank-three bundle isomorphism classes, the codimension-graded Chow groups, isomorphism invariance, and the quotient-projective-bundle normalization on smooth equidimensional finite-type schemes.

[F3] Algebraic closure means that every nonconstant polynomial over $k$ has a root in $k$. A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; affineness means being isomorphic to the spectrum of a ring. Smoothness is that of the structure morphism, and finite type means locally of finite type and quasi-compact. Irreducible components are maximal irreducible subsets, where irreducible means nonempty and not the union of two proper closed subsets in the subspace topology. The statement defines chain dimension inline and requires every component to have dimension three, so $Y$ is equidimensional in the scope of [F2]. [[math:def-algebraically-closed-field]], [[math:def-scheme-over-base]], [[math:def-affine-scheme]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-irreducible-component-of-a-topological-space]]

[F4] AC and the universe closure convention are assumed as in the supplied bundle-class and Chern interfaces. The universe existence assumption is separate from Choice; these inherited assumptions permit application of [F2] with its set of isomorphism classes. [[math:def-axiom-of-choice]], [[math:def-grothendieck-universe-closure-convention]]

[F5] Under AC every nonempty smooth affine finite-type pure three-dimensional scheme is a finite disjoint union of integral smooth affine three-dimensional components, with their open and closed scheme structures. [[lem-adjudicate-f63a33a7279d-smooth-affine-components]]

[F6] On a finite open-and-closed partition into smooth schemes of the same pure dimension, restriction identifies bundle isomorphism classes and each integral Chow group with the products of those on the pieces, and commutes with ordinary Chern classes. If the Chern tuple map is bijective on every piece, it is bijective on the union. [[lem-adjudicate-f63a33a7279d-clopen-chern-products]]

## Proof

1.1 The geometric hypotheses in [F3] put $Y$ in the scope of [F5], which gives $Y=\bigsqcup_{a=1}^m Y_a$ with each $Y_a$ integral, smooth, affine, finite type and of dimension three. Thus each $Y_a$ is a smooth affine variety in exactly the scope of the v1 premise [F1]. Apply that premise to each $Y_a$ over the given algebraically closed field, in any characteristic. By [F2] and [F4] the ordinary Chern tuple on each piece is the well-defined normalized tuple of the statement. Each component Chern map $C_3(Y_a)$ is therefore bijective. This step applies no variety theorem directly to the possibly non-irreducible $Y$. [F1, F2, F3, F4, F5, given]

2.1 The finite component decomposition from step 1.1 satisfies the hypotheses of [F6]. Its restriction bijections identify the stated $C_3(Y)$ with the product of the bijections $C_3(Y_a)$, so $C_3(Y)$ is bijective. Surjectivity gives every prescribed triple, and injectivity says bundles with the same triple have the same isomorphism class. Conversely isomorphic bundles have equal classes by [F2]. This proves the full statement, including the non-irreducible case and the ordinary integral normalization. [F2, F4, F6, step 1.1] ∎
