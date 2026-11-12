---
title: Finite-type schemes over fields are qcqs
status: published
research_item: lem-adjudicate-d6ce097ccb62-finite-type-qcqs
dependency_level: 0
sources:
  references:
    - title: The Stacks Project, Morphisms of finite type
      url: https://stacks.math.columbia.edu/tag/01T6
      locator: Lemma 29.15.6, complete statement and short displayed proof.
      statement: A finite-type morphism to a Noetherian scheme has Noetherian source;
        the corresponding local assertion also holds.
      hypotheses: A morphism of schemes, Noetherian target, and finite-type morphism
        for the global assertion. Here the target is Spec k, shown Noetherian in
        step 1.1.
      reading_limits: Freshly read the statement and displayed proof at tag 01T6.
        Import the Noetherian-source theorem; its cited Hilbert basis theorem is
        not reconstructed. The field-base and qcqs deductions below are local.
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Definition 28.5.1 and Lemma 28.5.4, with the displayed proof of the
        latter.
      statement: A Noetherian scheme is locally Noetherian and quasi-compact. Every
        locally Noetherian scheme is quasi-separated.
      hypotheses: A scheme that is locally Noetherian for Lemma 28.5.4. Step 1.1
        obtains the stronger Noetherian hypothesis on X.
      reading_limits: Freshly read Definition 28.5.1 and the statement and displayed
        proof of Lemma 28.5.4, including its reduction to intersections of
        affine opens. Import the quasi-separatedness result; the cited immersion
        and algebraic-spectrum inputs are not reconstructed.
---

## Prerequisites

- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:cor-spectrum-with-structure-sheaf-locally-ringed](https://alphabetamath.cc/item/cor-spectrum-with-structure-sheaf-locally-ringed)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [` The Stacks Project, Morphisms of finite type · Lemma 29.15.6, complete statement and short displayed proof. `](https://stacks.math.columbia.edu/tag/01T6)
- [` The Stacks Project, Noetherian schemes · Definition 28.5.1 and Lemma 28.5.4, with the displayed proof of the latter. `](https://stacks.math.columbia.edu/tag/01OU)

## Statement
Let $k$ be a field and $X$ a finite-type $k$-scheme. Then $X$ is quasi-compact and quasi-separated. No separatedness hypothesis on $X$ is required.

## Facts & Assumptions
**Given:** A field $k$ and a finite-type structure morphism $X\to\operatorname{Spec}k$.

**Goal:** Verify the qcqs domain required by the motivic comparison.

[F1] The field and structure-morphism conventions are those of [math:def-field](https://alphabetamath.cc/item/def-field) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). Finite type refers to this morphism, as in [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Quasi-compactness and quasi-separatedness mean the conditions in [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme).

[F2] A field has only the zero ideal and itself and is Noetherian, by [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian). Points of $\operatorname{Spec}k$ are the prime ideals, by [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum), with primality as in [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals). A Noetherian scheme is a quasi-compact scheme with an affine open cover by spectra of Noetherian rings, by [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme).

[F3] Reference 0 supplies the theorem that a finite-type morphism to a Noetherian scheme has Noetherian source.

[F4] Reference 1 supplies quasi-separatedness of every locally Noetherian scheme.

[F5] Here $\operatorname{Spec}k$ carries its standard structure sheaf: the resulting spectrum is a locally ringed space by [math:cor-spectrum-with-structure-sheaf-locally-ringed](https://alphabetamath.cc/item/cor-spectrum-with-structure-sheaf-locally-ringed), an affine scheme by [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), and a scheme by [math:def-scheme](https://alphabetamath.cc/item/def-scheme), using the whole space as its affine open neighbourhood.

## External input
The Noetherian-source theorem in [F3] and the locally-Noetherian quasi-separatedness theorem in [F4] are imported from the cited Stacks statements under their exact hypotheses. The field-base verification and composition below are local arguments, not reconstructions of those imported theorems. This item is a locally proved consequence, rather than an imported claim of a local proof of either theorem.

## Proof
1.1 By [F5], $\operatorname{Spec}k$ is an affine scheme with its standard structure sheaf. By [F2], $k$ is Noetherian. Its zero ideal is prime: if $ab=0$ and $a\ne0$, multiplying by $a^{-1}$ gives $b=0$. Since its only other ideal is the improper ideal, $\operatorname{Spec}k$ has one point. Any open cover of a one-point space has a single member covering that point, so this space is quasi-compact. Its one-chart cover by $\operatorname{Spec}k$ therefore makes it a Noetherian scheme by [F2]. The given finite-type morphism now satisfies [F3], so $X$ is Noetherian. [given, F1, F2, F3, F5]

2.1 By the Noetherian-scheme definition in [F2], $X$ is quasi-compact and locally Noetherian. Apply [F4] to conclude it is quasi-separated. These are precisely the two conditions in [F1]. This also includes the empty scheme, and no separatedness assumption has been used. [F1, F2, F4, step 1.1] ∎
