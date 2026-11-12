---
title: Rank-two uniqueness on singular threefolds
status: published
research_item: op-rank-two-threefold-uniqueness
dependency_level: 18
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed p. 3, Corollary D, the paragraph immediately following it, and
        Notation and conventions
      reading_limits: Read the frozen article text at printed p. 3, Corollary D, its
        immediately following paragraph, and Notation and conventions. These
        passages support the formulation, stated surjectivity and the authors'
        open-question status in the cited v1. The supplementary formulation
        definitions and applicability deductions use the declared library
        interfaces. No new arXiv version-history reading, exhaustive
        later-literature search, proof of uniqueness, or audit of upstream
        motivic-cohomology sources is claimed.
      statement: Corollary D states that the first two integral motivic Chern classes
        give a surjection from rank-two vector-bundle isomorphism classes on a
        normal affine threefold over an algebraically closed field. The
        following paragraph asks whether these classes also determine a rank-two
        bundle uniquely on a singular affine threefold. The conventions require
        affine schemes to have finite type over the base field.
      hypotheses: The base field is algebraically closed; the affine scheme is normal,
        of finite type over that field, and has dimension three. The uniqueness
        question concerns the singular case and bundles of rank two. Choice and
        suitable universes are inherited assumptions of the portal's declared
        construction suppliers, not additional assumptions attributed to the
        article.
---

PDF p. 3: Following Corollary D

## Prerequisites

- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)
- [math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · Printed p. 3, Corollary D, the paragraph immediately following it, and Notation and conventions `](https://arxiv.org/abs/2610.22679v1)


## Open problem
Assume the Axiom of Choice and the suitable universes used by the supplied constructions. Let $k$ be an algebraically closed field and let $X$ be a normal singular affine threefold of finite type over $k$. For rank-two vector bundles $E$ and $F$ on $X$, do the equalities $c_1(E)=c_1(F)$ in $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ and $c_2(E)=c_2(F)$ in $H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ imply $E\cong F$?

Here an affine threefold of finite type over $k$ is a scheme $\operatorname{Spec}A$, with $A$ a nonzero finitely generated commutative $k$-algebra, of Krull dimension three. Normal means that every local ring is an integrally closed domain; singular means that at least one local ring is not regular. A rank-two vector bundle is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^2$, and $E\cong F$ means an invertible $\mathcal O_X$-linear map. The supplied construction assigns to such a bundle its first and second integral motivic Chern classes in the indicated motivic cohomology groups, invariant under isomorphism. Equivalently, the question asks whether the map $(c_1,c_2)$ from the set of isomorphism classes of rank-two bundles to the product of these two groups is injective.

The local rings used in the regularity condition are Noetherian, where Noetherian means that every ideal is finitely generated. Indeed, finite type gives a presentation $A\cong k[t_1,\ldots,t_m]/I$ for some finite $m$ and ideal $I$; polynomial rings in finitely many variables over a field are Noetherian, as are their quotients and localizations. For the point $x$ corresponding to a prime $\mathfrak p$, the affine stalk identification gives $\mathcal O_{X,x}\cong A_{\mathfrak p}$, so the supplied definition of regular local ring applies. Moreover, an affine scheme is quasi-compact under the assumed Choice and is quasi-separated, so $X$ satisfies the quasi-compact quasi-separated hypothesis of both supplied constructions. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that intersections of affine open subschemes are quasi-compact.

## Open problem references
[def-vector-bundle-classes](item-def-vector-bundle-classes)

[def-motivic-chern-classes](item-def-motivic-chern-classes)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)

[math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)

[math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)

[math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)

[math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

## Status
Fasel and Yakerson state this uniqueness question as open immediately after Corollary D. At that location they state surjectivity of $(c_1,c_2)$ for normal affine threefolds over algebraically closed fields; surjectivity alone does not settle injectivity. This entry records the article's status as of its cited 2026 version, not an exhaustive assessment of subsequent work. No solution is asserted.

The Choice assumption is inherited from the supplied bundle-class and motivic Chern-class constructions used to formulate the question; it also discharges the stated hypothesis of affine quasi-compactness. The existence of suitable universes is assumed separately from Choice, with the supplied universe closure convention.
