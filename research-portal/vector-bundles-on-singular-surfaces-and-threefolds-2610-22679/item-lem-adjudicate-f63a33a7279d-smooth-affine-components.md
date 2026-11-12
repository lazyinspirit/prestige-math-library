---
title: Integral components of a smooth affine pure-dimensional scheme
status: published
research_item: lem-adjudicate-f63a33a7279d-smooth-affine-components
dependency_level: 0
sources:
  references:
    - title: The Stacks Project, Schemes smooth over fields
      url: https://stacks.math.columbia.edu/tag/056T
      locator: Lemma 33.25.4 (056T), statement and proof.
      statement: A scheme smooth over a field is geometrically regular, geometrically
        normal and geometrically reduced; in particular it is normal.
      hypotheses: A smooth morphism X to Spec(k), k any field; no irreducibility,
        connectedness or characteristic restriction.
      reading_limits: Read the complete displayed lemma and its short proof on the tag
        page. Only normality over k is used; the cited algebraic proofs inside
        Stacks were not reconstructed.
    - title: The Stacks Project, Normal schemes
      url: https://stacks.math.columbia.edu/tag/033H
      locator: Definition 28.7.1; Lemma 28.7.5 and its proof; Lemma 28.7.6 (tag 033M)
        and its proof.
      statement: A normal Noetherian scheme is a finite disjoint union of integral
        normal schemes; the summands are its irreducible components with open
        scheme structures. Normality means all local rings are integrally closed
        domains.
      hypotheses: The decomposition is applied only to a Noetherian normal scheme. The
        more general Lemma 28.7.5 requires finitely many irreducible components
        on every quasi-compact open.
      reading_limits: Read Definition 28.7.1 and Lemmas 28.7.5–28.7.6 with their
        proofs in the section, and the separate tag 033M statement and proof.
        The cited commutative algebra decomposition proof was not reconstructed.
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:lem-clopen-subset-gives-idempotent-decomposition](https://alphabetamath.cc/item/lem-clopen-subset-gives-idempotent-decomposition)
- [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [` The Stacks Project, Schemes smooth over fields · Lemma 33.25.4 (056T), statement and proof. `](https://stacks.math.columbia.edu/tag/056T)
- [` The Stacks Project, Normal schemes · Definition 28.7.1; Lemma 28.7.5 and its proof; Lemma 28.7.6 (tag 033M) and its proof. `](https://stacks.math.columbia.edu/tag/033H)


## Statement
Assume AC. Let $k$ be a field and $X$ a nonempty smooth affine finite-type $k$-scheme whose irreducible components all have dimension $d$, where $d\geq0$ is an integer. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets, with a one-member chain of length zero. Then $X$ is a finite disjoint union $X=\bigsqcup_{a=1}^m X_a$, $m\geq1$, of nonempty open and closed integral smooth affine finite-type $k$-schemes of dimension $d$. These pieces are precisely its irreducible components with their open subscheme structures. Here integral means reduced and irreducible, and open and closed means that both a subset and its complement are open.

## External input
Two established geometric facts are used: smooth schemes over a field are normal (Stacks Project, Lemma 33.25.4, tag 056T), and a normal Noetherian scheme is a finite disjoint union of integral normal schemes (Lemma 28.7.6, tag 033M; its component identification is explained in Lemma 28.7.5). Normal means that every local ring is a domain integrally closed in its fraction field. The finite-type and affine refinements below are proved locally from the declared library interfaces.

## Facts & Assumptions

**Given:** AC, $k$, $X$, $d$ and the dimension convention of the statement.

**Goal:** Produce the asserted finite disjoint integral affine decomposition.

[F1] The field, base-scheme, affine, smooth and finite-type conventions are supplied by [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) and [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Smoothness is preserved on open subschemes. Irreducible components are maximal irreducible subsets, and integral schemes are nonempty reduced irreducible schemes. [math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space), [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[F2] Under AC, an affine finite-type scheme $X=\operatorname{Spec}A$ over a field has finitely generated coordinate $k$-algebra $A$. A field is Noetherian; a finitely generated algebra over a Noetherian ring is Noetherian; a single affine chart with Noetherian coordinate ring makes a scheme Noetherian. [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated), [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian), [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian), [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[F3] The two imported normality and decomposition facts are precisely those recorded in External input. They impose no characteristic restriction. For a Noetherian normal scheme its irreducible components are integral open and closed subschemes, and there are only finitely many of them.

[F4] Under AC, a clopen subset of $\operatorname{Spec}A$ is $D(1-e)$ for an idempotent $e\in A$, meaning $e^2=e$. The open subscheme $D(f)$ is $\operatorname{Spec}A_f$, where $A_f$ denotes localization by the powers of $f$. Under AC every affine scheme is quasi-compact. If $A=k[b_1,\ldots,b_s]$, this localization is generated over $k$ by the images of the $b_i$ and $f^{-1}$. [math:lem-clopen-subset-gives-idempotent-decomposition](https://alphabetamath.cc/item/lem-clopen-subset-gives-idempotent-decomposition), [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion), [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras), [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[A1] AC is inherited by the affine-coordinate and clopen-idempotent suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

1.1 Write $X=\operatorname{Spec}A$ by [F1]. By [F2], $A$ is a finitely generated $k$-algebra and is Noetherian, so $X$ is Noetherian. Smoothness and the first imported fact in [F3] make $X$ normal. The second imported fact decomposes $X$ into finitely many nonempty integral open subschemes $X_a$, exactly its irreducible components. Each complement is the union of the other open pieces, hence each piece is also closed. Nonemptiness of $X$ makes the number $m$ of pieces positive. [F1, F2, F3, A1, given]

2.1 Fix a piece $X_a$. By [F4] its clopen underlying subset is $D(1-e_a)$ for an idempotent $e_a\in A$, and its open scheme structure is $\operatorname{Spec}A_{1-e_a}$. If $b_1,\ldots,b_s$ generate $A$ over $k$, their images together with $(1-e_a)^{-1}$ generate this localization, so it is finite type over $k$; it is locally of finite type on this chart and is quasi-compact by [F4], hence finite type by [F1]. Restricting the original smooth structure morphism gives smoothness by [F1]. Its underlying space is the original irreducible component with the subspace topology, so its chain dimension is $d$ by the given purity assumption. Its integrality was obtained in step 1.1. This proves all the claimed properties, for every piece. [F1, F4, A1, step 1.1, given] ∎
