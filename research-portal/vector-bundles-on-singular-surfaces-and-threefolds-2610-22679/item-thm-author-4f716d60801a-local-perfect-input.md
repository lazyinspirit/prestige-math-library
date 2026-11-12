---
title: External local perfection and summand closure
status: published
research_item: thm-author-4f716d60801a-local-perfect-input
dependency_level: 0
sources:
  references:
    - title: The Stacks Project, Cohomology of Sheaves, Perfect complexes
      url: https://stacks.math.columbia.edu/tag/08CL
      locator: Definition 20.49.1; Lemmas 20.49.2, 20.49.3, 20.49.7 and 20.49.9
      statement: Perfect objects are locally represented by strictly perfect
        complexes; every representative is locally perfect as a complex. With
        local stalk rings, bounded finite locally free local models are
        equivalent. Perfection is invariant and local, satisfies
        two-out-of-three in distinguished triangles, and passes to direct
        summands.
      hypotheses: A ringed space and objects of its module-sheaf derived category;
        local stalk rings only for the finite locally free characterization. No
        quasi-compactness or uniform global bound is assumed.
      reading_limits: Read Definition 20.49.1 and the complete displayed statements
        and proof paragraphs of Lemmas 20.49.2, 20.49.3, 20.49.7 and 20.49.9 on
        2026-11-12. The linked pseudo-coherence, Tor-amplitude and local
        strictification arguments are imported, not independently reconstructed.
    - title: The Stacks Project, Cohomology of Sheaves, Strictly perfect complexes
      url: https://stacks.math.columbia.edu/tag/08C3
      locator: Definition 20.46.1 and the immediately following warning
      statement: A strictly perfect complex is bounded, with each term a direct
        summand of a finite free module sheaf. On a general ringed space these
        summands need not be finite locally free.
      hypotheses: An arbitrary ringed space and a complex of module sheaves.
      reading_limits: Read Definition 20.46.1 and its warning on 2026-11-12. No proof
        of the subsequent local lifting or strictification lemmas is claimed.
    - title: The Stacks Project, Sheaves of Modules, Locally free sheaves
      url: https://stacks.math.columbia.edu/tag/01C5
      locator: Definition 17.14.1(1)–(2)
      statement: For a ringed space, a module sheaf is finite locally free when every
        point has an open neighborhood on which it is a finite direct sum of
        copies of the structure sheaf.
      hypotheses: An arbitrary ringed space; zero stalk rings are allowed. This
        definition requires no globally fixed or uniquely defined rank.
      reading_limits: Read the introductory convention and Definition 17.14.1(1)–(3)
        on 2026-11-12. Only the finite-local-freeness definition is imported; no
        general rank-function assertion is used.
    - title: The Stacks Project, Cohomology of Sheaves, Some properties of K-injective
        complexes
      url: https://stacks.math.columbia.edu/tag/0D5U
      locator: Section 20.32, opening paragraph and displayed restriction functor,
        before Lemma 20.32.1
      statement: Restriction to an open subspace of a ringed space is exact, and the
        induced functor on unbounded derived categories is computed by
        restricting any representative complex term by term.
      hypotheses: A ringed space and an open subset with its restricted structure sheaf.
      reading_limits: Read the opening paragraph and displayed derived restriction
        functor on 2026-11-12. No K-injective resolution theorem or later
        assertion of this section is reconstructed or imported here.
external_input: true
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space)
- [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)
- [math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-bounded-bounded-below-and-bounded-above-complex](https://alphabetamath.cc/item/def-bounded-bounded-below-and-bounded-above-complex)
- [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure)
- [math:def-distinguished-triangle](https://alphabetamath.cc/item/def-distinguished-triangle)
- [math:def-biproduct](https://alphabetamath.cc/item/def-biproduct)
- [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)
- [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-locally-ringed-space](https://alphabetamath.cc/item/def-locally-ringed-space)
- [` The Stacks Project, Cohomology of Sheaves, Perfect complexes · Definition 20.49.1; Lemmas 20.49.2, 20.49.3, 20.49.7 and 20.49.9 `](https://stacks.math.columbia.edu/tag/08CL)
- [` The Stacks Project, Cohomology of Sheaves, Strictly perfect complexes · Definition 20.46.1 and the immediately following warning `](https://stacks.math.columbia.edu/tag/08C3)
- [` The Stacks Project, Sheaves of Modules, Locally free sheaves · Definition 17.14.1(1)–(2) `](https://stacks.math.columbia.edu/tag/01C5)
- [` The Stacks Project, Cohomology of Sheaves, Some properties of K-injective complexes · Section 20.32, opening paragraph and displayed restriction functor, before Lemma 20.32.1 `](https://stacks.math.columbia.edu/tag/0D5U)


## Statement

Assume the Axiom of Choice. Fix Grothendieck universes $\mathbb U\in\mathbb V$ with $\omega\in\mathbb U$. Let $(X,\mathcal O_X)$ be a $\mathbb U$-small ringed space, and let $\mathcal A=\mathrm{Mod}_{\mathbb U}(\mathcal O_X)$ be the abelian category of module sheaves with $\mathbb U$-small section data. Write $D(\mathcal O_X)=K(\mathcal A)[\mathrm{qis}^{-1}]$, with the localization and its Hom sets formed in $\mathbb V$. Use cochain complexes, and the usual distinguished triangles isomorphic to images of mapping-cone triangles.

For an open $W\subseteq X$, put $\mathcal O_W=\mathcal O_X|_W$. The finite free module sheaf $\mathcal O_W^r$ has sections $\mathcal O_W(V)^r$ on $V\subseteq W$, with componentwise restriction. A module sheaf $M$ is a direct summand of $N$ if $M\oplus M'\cong N$ for some module sheaf $M'$. A complex on $W$ is strictly perfect if it is zero outside a finite interval and each term is a direct summand of some $\mathcal O_W^r$ with $r$ finite. A module sheaf is finite locally free if every point has an open neighborhood on which it is isomorphic to some finite free module sheaf. No globally constant rank is required.

An object $E\in D(\mathcal O_X)$ is perfect if some open cover $X=\bigcup_i U_i$ has each $E|_{U_i}$ isomorphic in $D(\mathcal O_{U_i})$ to a strictly perfect complex. Here restriction on derived objects is computed by restricting any representative complex term by term.

Perfection is invariant under isomorphism in the derived category and is local on $X$. When all stalk rings $\mathcal O_{X,x}$ are local, it is equivalent to local representation by bounded complexes of finite locally free module sheaves. The finite degree bounds may depend on the member of the open cover. In a distinguished triangle, perfection of any two objects implies perfection of the third. If $E\oplus F$ is perfect, then both $E$ and $F$ are perfect.

Scheme stalk rings are local.

## Source contract

**Given:** The Axiom of Choice, the stated nested universes, a ringed space and its module sheaves; local stalk rings only for the finite locally free characterization.

**Goal:** Record local perfection, its derived invariance and closure under triangles and direct summands, with the scheme case included.

[F1] The Axiom of Choice is retained as an assumption for the imported results; universes are a size convention, not a consequence of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)).

[F2] The ringed-space and module-sheaf interfaces, including the abelian category in which the complexes live, are [math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space), [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) and [math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category). Cochain, boundedness and quasi-isomorphism conventions are [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-bounded-bounded-below-and-bounded-above-complex](https://alphabetamath.cc/item/def-bounded-bounded-below-and-bounded-above-complex) and [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism), with the cochain reindexing convention.

[F3] Use [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure), [math:def-distinguished-triangle](https://alphabetamath.cc/item/def-distinguished-triangle) and [math:def-biproduct](https://alphabetamath.cc/item/def-biproduct) for the localization, cone triangles and sums. The complex data and morphism data for $\mathbb U$-small sheaves are drawn from sets in $\mathbb V$, so their homotopy category is small in $\mathbb V$. Thus the published localization interface's smallness alternative applies in $\mathbb V$; no unqualified same-universe local-smallness claim is made.

[F4] Open restriction, stalks and local rings mean [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace), [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) and [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring). The derived open-restriction construction is imported below.

[F5] By [math:def-scheme](https://alphabetamath.cc/item/def-scheme) a scheme is a locally ringed space, and [math:def-locally-ringed-space](https://alphabetamath.cc/item/def-locally-ringed-space) specifies exactly the local-stalk condition. This supplies the scheme-stalk assertion, separately from the imported perfection results.

## External input

Import the perfection definition, representative invariance, local finite locally free characterization, triangle closure and summand closure from [Stacks, Section 20.49](https://stacks.math.columbia.edu/tag/08CL), at the exact locators and hypotheses in reference 0.

The inline strictly perfect convention is [Stacks, Definition 20.46.1](https://stacks.math.columbia.edu/tag/08C3), reference 1; finite local freeness on general ringed spaces is [Definition 17.14.1](https://stacks.math.columbia.edu/tag/01C5), reference 2. Finite free summands are not identified with finite locally free sheaves on arbitrary ringed spaces.

The derived open-restriction construction is the opening paragraph of [Stacks, Section 20.32](https://stacks.math.columbia.edu/tag/0D5U), reference 3. These imported assertions retain their recorded reading limits. No local reconstruction of strictification, pseudo-coherence, Tor amplitude or summand closure is claimed.
