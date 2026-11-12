---
title: The diagonal of a finite subintegral map is a cdh cover
status: published
research_item: lem-author-60d95bfb692a-subintegral-diagonal-cover
dependency_level: 8
sources:
  references:
    - title: "The Stacks Project, integral and finite morphisms: elementary
        properties"
      url: https://stacks.math.columbia.edu/tag/01WG
      locator: Section 29.45, paragraph immediately following Definition 29.45.1
      statement: Finite morphisms of schemes are separated and of finite type.
      hypotheses: A finite morphism of arbitrary schemes, with finiteness defined by
        affine inverse images and finite-module coordinate algebras. No
        noetherian, reducedness or nonemptiness hypothesis is imposed.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read Definition 29.45.1 and the following paragraph on the section
        page. These two properties are asserted there without a displayed proof
        and are imported, not reconstructed. No properness or
        universal-closedness assertion about general finite morphisms is used.
        Current maintenance read the assigned consumer and its exact declared
        supplier interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
    - title: "The Stacks Project, Lemma 29.45.12: closed immersions are finite and
        integral"
      url: https://stacks.math.columbia.edu/tag/035C
      locator: Lemma 29.45.12, complete statement and displayed proof
      statement: A closed immersion of schemes is finite and integral.
      hypotheses: Any closed immersion of schemes; no noetherian, finite-presentation,
        reducedness or nonemptiness hypothesis is imposed.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the entire statement and its one-sentence proof. The proof
        invokes affineness of closed immersions and the finite/integral property
        of surjective ring maps; the linked affineness proof was not
        reconstructed. Apply only to the closed immersion Delta proved below.
        Current maintenance read the assigned consumer and its exact declared
        supplier interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
    - title: "The Stacks Project, Lemma 29.45.6: base change of a finite morphism"
      url: https://stacks.math.columbia.edu/tag/01WL
      locator: Lemma 29.45.6, finite-morphism clause and displayed proof by reference
      statement: The base change of a finite morphism of schemes along any scheme
        morphism is finite.
      hypotheses: A finite scheme morphism and an arbitrary base-change morphism. No
        flatness or finiteness assumption on the base change is required.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the complete statement and the proof referring to Algebra,
        Lemma 10.36.13. That algebra proof was not read or reconstructed. Only
        the finite clause is imported, applied to the first projection of T
        times_X T as the base change of p. Current maintenance read the assigned
        consumer and its exact declared supplier interfaces; no fresh
        primary-source or page-image reading, reconstruction or independent
        acceptance is claimed for this reference."
    - title: "The Stacks Project, Lemma 29.42.6: closed immersions are proper"
      url: https://stacks.math.columbia.edu/tag/01W5
      locator: Lemma 29.42.6, complete statement and displayed proof
      statement: Every closed immersion of schemes is proper, hence universally closed.
      hypotheses: Any closed immersion of schemes; no noetherian, finite-presentation,
        reducedness or nonemptiness hypothesis is imposed.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the statement and full short proof. The proof cites
        base-change stability, separatedness and finite type of closed
        immersions; those linked proofs were not independently reconstructed.
        Apply only to Delta after establishing that it is a closed immersion,
        rather than invoke properness of an arbitrary finite map. Current
        maintenance read the assigned consumer and its exact declared supplier
        interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
    - title: "The Stacks Project, Lemma 29.15.3: composition of finite-type morphisms"
      url: https://stacks.math.columbia.edu/tag/01T3
      locator: Lemma 29.15.3, finite-type clause and both displayed proof paragraphs
      statement: The composite of two finite-type morphisms of schemes is of finite type.
      hypotheses: Two composable finite-type scheme morphisms. No noetherian,
        reducedness, flatness or field-base hypothesis is imposed.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the complete statement and both proof paragraphs. The proof
        invokes locality of finite-type ring maps and composition of
        quasi-compact morphisms; their linked proofs were not reconstructed.
        Apply to q followed by the structural map T to Spec k. Current
        maintenance read the assigned consumer and its exact declared supplier
        interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
---

PDF p. 5: HK18 Theorem 1.4

## Prerequisites

- [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)
- [def-cdh-topology-interface](item-def-cdh-topology-interface)
- [lem-adjudicate-dba56f870de6-closed-immersion-residue-fields](item-lem-adjudicate-dba56f870de6-closed-immersion-residue-fields)
- [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [math:def-diagonal-morphism-scheme](https://alphabetamath.cc/item/def-diagonal-morphism-scheme)
- [math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes)
- [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition)
- [` The Stacks Project, integral and finite morphisms: elementary properties · Section 29.45, paragraph immediately following Definition 29.45.1 `](https://stacks.math.columbia.edu/tag/01WG)
- [` The Stacks Project, Lemma 29.45.12: closed immersions are finite and integral · Lemma 29.45.12, complete statement and displayed proof `](https://stacks.math.columbia.edu/tag/035C)
- [` The Stacks Project, Lemma 29.45.6: base change of a finite morphism · Lemma 29.45.6, finite-morphism clause and displayed proof by reference `](https://stacks.math.columbia.edu/tag/01WL)
- [` The Stacks Project, Lemma 29.42.6: closed immersions are proper · Lemma 29.42.6, complete statement and displayed proof `](https://stacks.math.columbia.edu/tag/01W5)
- [` The Stacks Project, Lemma 29.15.3: composition of finite-type morphisms · Lemma 29.15.3, finite-type clause and both displayed proof paragraphs `](https://stacks.math.columbia.edu/tag/01T3)


## Statement
For a finite subintegral morphism $p:T\to X$ of separated finite-type schemes over a field, its diagonal $\Delta:T\to T\times_X T$ is a finite subintegral morphism and a cdh covering singleton. The diagonal is the unique map whose composites with both projections are the identity of $T$.

## Statement references
[def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)

[def-cdh-topology-interface](item-def-cdh-topology-interface)

[lem-adjudicate-dba56f870de6-closed-immersion-residue-fields](item-lem-adjudicate-dba56f870de6-closed-immersion-residue-fields)

[math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-diagonal-morphism-scheme](https://alphabetamath.cc/item/def-diagonal-morphism-scheme)

[math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes)

[math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition)

## Facts & Assumptions

**Given:** Such a morphism $p$ in the category of separated finite-type schemes over the fixed field $k$.

**Goal:** Prove the assertion about $\Delta$.

[F1] A subintegral morphism is integral, bijective on points and induces residue-field isomorphisms; it is a universal homeomorphism, meaning that its pullback along every scheme morphism is a homeomorphism on underlying spaces. [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)

[F2] Scheme fibre products exist and represent compatible pairs of maps. Base change is the corresponding projection. The diagonal is the unique morphism whose composites with both projections are the identity. [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property) [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) [math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes) [math:def-diagonal-morphism-scheme](https://alphabetamath.cc/item/def-diagonal-morphism-scheme)

[F3] Finiteness means affine inverse images of affine opens with coordinate algebras finite as modules. [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes) Finite morphisms are separated and of finite type, by the paragraph following Definition 29.45.1 in [Stacks, Section 29.45](https://stacks.math.columbia.edu/tag/01WG). Separatedness means that the diagonal is a closed immersion. [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes) A closed immersion is a homeomorphism onto a closed subset with surjective structure-sheaf map. [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes) It is finite and integral by [Stacks, Lemma 29.45.12](https://stacks.math.columbia.edu/tag/035C). These structural facts are imported as specified below.

[F4] A closed immersion induces an isomorphism on residue fields at each source point. [lem-adjudicate-dba56f870de6-closed-immersion-residue-fields](item-lem-adjudicate-dba56f870de6-closed-immersion-residue-fields)

[F5] A closed immersion is proper, by the imported [Stacks, Lemma 29.42.6](https://stacks.math.columbia.edu/tag/01W5). A proper morphism is separated, of finite type and universally closed. Within the separated finite-type $k$-scheme category, a proper morphism with a residue-field-isomorphic lift of every target point is completely decomposed proper, and its singleton is a cdh covering family. [def-cdh-topology-interface](item-def-cdh-topology-interface)

[F6] Base change preserves finite morphisms, by the imported [Stacks, Lemma 29.45.6](https://stacks.math.columbia.edu/tag/01WL). Compositions of separated morphisms are separated. [math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition) Finite type means locally of finite type and quasi-compact. [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) Compositions of finite-type morphisms are of finite type, by the imported [Stacks, Lemma 29.15.3](https://stacks.math.columbia.edu/tag/01T3).

## External input
The paragraph following Definition 29.45.1 in [Stacks, Section 29.45](https://stacks.math.columbia.edu/tag/01WG) supplies separatedness and finite type for a finite morphism. Apply it to $p$ and to its base-changed projection $q$ below. The finite/integral conclusion for a closed immersion is imported from [Stacks, Lemma 29.45.12](https://stacks.math.columbia.edu/tag/035C), applied to $\Delta$.

The finiteness of $q$ is imported from [Stacks, Lemma 29.45.6](https://stacks.math.columbia.edu/tag/01WL). The composite finite-type structural map is supplied by [Stacks, Lemma 29.15.3](https://stacks.math.columbia.edu/tag/01T3). The base change is unrestricted and both factors of that composite will be of finite type.

Properness of the closed immersion $\Delta$ is imported directly from [Stacks, Lemma 29.42.6](https://stacks.math.columbia.edu/tag/01W5). The two steps below are a local composition of these premises with the declared interfaces; they do not reconstruct the imported structural theorems.

## Proof

**Proof technique:** Use the universal homeomorphism and then the completely decomposed proper criterion.

1.1 By [F2], form $P=T\times_X T$ with first projection $q:P\to T$ and the unique diagonal $\Delta:T\to P$ whose two projection composites are $\operatorname{id}_T$. The map $q$ is a base change of $p$, so [F1] makes it a homeomorphism on underlying spaces. The equation $q\Delta=\operatorname{id}_T$ and bijectivity of $q$ imply bijectivity of $\Delta$: its underlying map is the inverse of that of $q$. Since $p$ is finite, [F3] makes it separated and hence makes $\Delta$ a closed immersion. The same fact gives finiteness and integrality of $\Delta$, and [F4] supplies its residue-field isomorphisms. Thus $\Delta$ is subintegral by [F1]. [F1, F2, F3, F4, given]

2.1 By [F6], $q$ is finite; by [F3], it is separated and of finite type. The structural map $T\to\operatorname{Spec}k$ is separated and of finite type by hypothesis, so composition in [F6] makes $P$ separated and of finite type over $k$. Thus both source and target of $\Delta$ belong to the site in [F5]. That fact also makes the closed immersion $\Delta$ proper. Its bijection on points and residue-field isomorphisms from step 1.1 give a residue-field-isomorphic lift of every point of $P$. It is therefore completely decomposed proper, so its singleton is a cdh covering family by [F5]. [F3, F5, F6, step 1.1, given] ∎
