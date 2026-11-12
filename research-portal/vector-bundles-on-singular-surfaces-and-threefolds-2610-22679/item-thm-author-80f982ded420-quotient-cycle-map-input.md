---
title: External Levine–Weibel quotient cycle map with exact generators
status: published
research_item: thm-author-80f982ded420-quotient-cycle-map-input
dependency_level: 0
sources:
  references:
    - title: Amalendu Krishna, Murthy’s conjecture on 0-cycles,
        arXiv1511.04221v3,18March2019
      url: https://arxiv.org/pdf/1511.04221v3
      locator: Section1.9 and opening Section2.1, printed/PDF p6; Cartier curves and
        quotient equation(2.1),p7; cycle map equation(2.2) and K-theory
        convention,p8. Intro p1 height-d regular maximal ideals and p2 §1.3
        cycle-map/image statement.
      statement: The Cartier-curve principal-divisor quotient admits
        cyc_X:CH^d(X,Y)→K_0(X), sending a permitted regular closed point x to
        [k(x)]; it recalls Levine–Weibel Proposition2.1 for its existence. Its
        image is the subgroup classically denoted F^dK_0(X). In §2.1 the
        permitted X_reg uses smooth loci of d-dimensional components, excluding
        lower-dimensional components in a nonpure scheme.
      hypotheses: Section 2 assumes a perfect field unless stated otherwise. In §2.1,
        X is reduced quasi-projective of finite type and dimension d≥1; Y
        contains the source X_sing and contains no d-dimensional component. This
        item specializes to normal affine finite-type X and Y=X_sing in
        Krishna’s dimension-d convention. No equidimensionality, algebraic
        closedness, infinitude or characteristic restriction is imposed by this
        import. AC is carried only for the selected local-library formulation
        interfaces; no new AC-free implementation of those interfaces is
        claimed. Comparisons with the local pure-dimensional cycle presentation
        and local perfect-spectrum model are separate applications.
      reading_limits: "For this repair, read the primary v3 PDF text on printed/PDF
        pp. 6–8: §1.9, the perfect-field convention at the opening of §2, §2.1
        through (2.2), and the following K-theory convention; also pp. 1–2 for
        the projective-module target and image convention. Read the named
        mathematical library interfaces for their actual definitions and
        assumptions, not their transitive proof chains. Screenshot requests for
        pp. 6–8 failed with cache misses; no visual reading is claimed. The
        recalled Levine–Weibel Proposition 2.1 proof was not read or
        reconstructed. Only the stated quotient construction and normalized
        cycle map are imported; no torsion, injectivity or isomorphism theorem
        is imported."
external_input: true
---

PDF p. 3: Levine–Weibel image after TheoremC; PDF p. 14: Definition6.5 pure-dimensional smooth-point subgroup

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:thm-hilbert-basis-theorem](https://alphabetamath.cc/item/thm-hilbert-basis-theorem)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-smooth-morphism-classical](https://alphabetamath.cc/item/def-smooth-morphism-classical)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)
- [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)
- [` Amalendu Krishna, Murthy’s conjecture on 0-cycles, arXiv1511.04221v3,18March2019 · Section1.9 and opening Section2.1, printed/PDF p6; Cartier curves and quotient equation(2.1),p7; cycle map equation(2.2) and K-theory convention,p8. Intro p1 height-d regular maximal ideals and p2 §1.3 cycle-map/image statement. `](https://arxiv.org/pdf/1511.04221v3)


## Statement
Assume the Axiom of Choice for the selected library formulation interfaces. For a normal affine scheme $X$ of finite type over a perfect field and of dimension $d\geq1$, use Krishna's Section2.1 dimension-$d$ convention: the free generators are smooth closed points on its dimension-$d$ components, the forbidden locus includes all lower-dimensional components, and the relations are divisors of semilocal units on the specified relative Cartier curves. There is an established quotient cycle map
$$\operatorname{cyc}^{\mathrm{Kr}}_X:\operatorname{CH}^{d}_{\mathrm{Kr}}(X)\longrightarrow K_0(X),\qquad [x]\longmapsto[\kappa(x)].$$
In particular every specified Cartier-curve principal-divisor relation maps to zero. The target is the classical projective-module $K_0$ in the affine case, equivalently the quasi-projective perfect/Thomason–Trobaugh convention recorded immediately after equation2.2. Comparisons with the local perfect-spectrum model and the local pure-dimensional Levine–Weibel presentation are separate application arguments.

## Source contract
**Given:** Exactly the restricted perfect-field, normal affine finite-type and dimension-$d$ point/Cartier-curve convention above, with Choice as specified in the Statement.

**Goal:** Import the established relation theorem with its actual map normalization, not a local reconstruction of its proof.

The notation is fixed by $Y=X\setminus X^{\mathrm{Kr}}_{\mathrm{reg}}$ with reduced induced structure, and $\operatorname{CH}^{d}_{\mathrm{Kr}}(X)=\operatorname{CH}^{d}(X,Y)$ in Krishna's equation (2.1). The set $X^{\mathrm{Kr}}_{\mathrm{reg}}$ is the disjoint union of smooth loci of the dimension-$d$ irreducible components, exactly as specified in §2.1. Thus lower-dimensional components are forbidden even when smooth. This source convention, rather than the local equidimensional Levine–Weibel definition, supplies the nonpure source group.

## Facts & Assumptions
[F1] Krishna, §2.1, pp. 6–8, equations (2.1)–(2.2), supplies both the source quotient and the normalized map. The generators are closed points outside $Y$. An allowed relative Cartier curve is a reduced purely one-dimensional closed subscheme, with no component in $Y$, whose ideal at each point of intersection with $Y$ is generated by a regular sequence. Its relation functions are units in the semilocal ring at those intersection points and all generic points; their principal divisors, summed over the curve components, generate the relation subgroup. These precise constructions, including the divisor convention, are imported from that passage. This is not an assertion that point classes alone establish descent.

[F2] The field is perfect in the sense of [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field). Write $X=\operatorname{Spec}A$ using [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), where $A$ is a finitely generated $k$-algebra as in [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras). In particular it has a finite polynomial-algebra quotient presentation. The dimension $d$ is the Krull dimension of $A$, in [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring); the positive finite dimension excludes the zero ring. Normality is the local condition in [math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring), allowing multiple components, not a requirement that $A$ be a domain. Smoothness uses the local standard smooth presentations in [math:def-smooth-morphism-classical](https://alphabetamath.cc/item/def-smooth-morphism-classical), while [F1] specifies exactly which components contribute smooth points.

[F3] The Noetherian hypotheses of the selected library interfaces hold: a field has only the ideals $(0)$ and $(1)$, so it is Noetherian; finite iteration of [math:thm-hilbert-basis-theorem](https://alphabetamath.cc/item/thm-hilbert-basis-theorem) makes the polynomial algebra in [F2] Noetherian; [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations) then makes $A$ and its prime localizations Noetherian. The affine scheme is therefore locally Noetherian. For the imported source hypotheses, the same finite presentation realizes $X$ as a closed subscheme of affine space, hence as a locally closed subscheme of projective space; it is quasi-projective. Normality makes every local ring a domain and hence reduced, so $X$ is reduced. These checks use no purity assumption and do not impose infinitude of $k$ from the separate Lemma 2.1 in Krishna.

[F4] The residue field $\kappa(x)$ is that of [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point). The target $K_0(X)$ here follows Krishna's convention, not the coherent-sheaf notation of [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme): it corresponds to that supplier's vector-bundle $K^0(X)$. In affine language it is generated by finitely generated projective $A$-modules, with $[P\oplus Q]=[P]+[Q]$, as on Krishna p. 1; projective has the lifting-property meaning of [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module). The symbol $[\kappa(x)]$ denotes the finite-projective-resolution class supplied by [F1], not a claim that the residue module itself is projective. The source's quasi-projective Quillen/Thomason–Trobaugh convention is recorded immediately after (2.2); transport to this collection's particular perfect-spectrum model is deferred to consumers.

[F5] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) supplies the Choice assumption carried by the selected smoothness and vector-bundle Grothendieck-group interfaces. Its use here is to adopt those interfaces under their stated hypotheses; no new local proof of relation-vanishing, or of a Choice-free version of these interfaces, is claimed.

## External input
Import [F1], with the full exact source record. The factorization through the Cartier-curve relations is substantial external input; it is not inferred locally merely from the existence of point classes. The local perfect-spectrum and pure-dimensional comparisons are separate application arguments, not premises used to establish this source-side import.

## Adjudication reading limits
For this repair, read Krishna's primary v3 PDF text, §1.9 and §2.1 through equation (2.2) and the following K-theory convention, printed/PDF pp. 6–8; also pp. 1–2 for the projective-module and image conventions. The original Levine–Weibel Proposition 2.1 proof was not read or reconstructed. Screenshot requests for pp. 6–8 failed with cache misses; no visual inspection is claimed. The three direct consumers were read only to check use of this interface and its carried assumptions; their other prerequisite chains were not audited.
