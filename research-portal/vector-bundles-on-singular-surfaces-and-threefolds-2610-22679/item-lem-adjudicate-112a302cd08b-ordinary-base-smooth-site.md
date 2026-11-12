---
title: The native smooth site over an ordinary base and transport of coefficients
status: published
research_item: lem-adjudicate-112a302cd08b-ordinary-base-smooth-site
dependency_level: 1
sources:
  references:
    - title: Jacob Lurie, Spectral Algebraic Geometry (3 February 2018)
      url: https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf
      locator: "Chapter 25, introductory discussion before §25.1: paragraphs
        describing derived schemes via sheaves of simplicial commutative rings,
        their local affine characterization, and the distinction from spectral
        smoothness"
      statement: The derived geometry uses sheaves of simplicial commutative rings and
        Zariski-local affine spectra. Its smooth morphisms are flat. These are
        the derived conventions referred to by Annala–Iwasa §2.1, as
        distinguished from differential smoothness of general spectral schemes.
      hypotheses: Derived schemes in the simplicial-commutative-ring sense of Chapter
        25, with compatible size bounds; use derived smoothness, not
        differential smoothness of arbitrary spectral schemes.
      reading_limits: Read the primary-source indexed extraction of the Chapter 25
        introductory discussion, including its local-affine description and
        smoothness paragraph. Direct full-PDF opening was refused because of
        file size, and shell retrieval failed DNS resolution. No full SAG
        reading, screenshot inspection, or proof reconstruction is claimed. The
        numbered local comparison below is our consequence of these conventions
        and reference 1, not a quoted SAG theorem.
    - title: Adeel A. Khan, An introduction to derived algebraic geometry (19 June
        2023)
      url: https://www.preschema.com/lecture-notes/2023-kias/dagkias.pdf
      locator: p. 7, Example 1.20 and Definition 1.21; p. 10, Definition/Proposition
        2.1 and Definition 2.3; pp. 11–12, Definitions 2.8, 2.10 and 2.11
      statement: Ordinary rings embed fully faithfully as discrete derived rings;
        animation agrees with localized simplicial commutative rings. Flatness
        is ordinary flatness on pi_0 together with pi_i(A) tensor pi_0(B) =
        pi_i(B). Smoothness means flatness and smoothness on pi_0. Open
        immersions and derived schemes are defined by local affine charts and
        gluing, and schematic smoothness is affine-local.
      hypotheses: Connective derived commutative rings, equivalently simplicial
        commutative rings localized at weak homotopy equivalences; derived
        schemes with Zariski affine covers. No characteristic, regularity or
        noetherian hypothesis.
      reading_limits: Read the live primary PDF extraction at Example 1.20, Definition
        1.21, the complete Definition/Proposition 2.1 and Definition 2.3, and
        Definitions 2.8, 2.10 and 2.11. Only the specified ring, chart and
        smoothness interfaces are imported. The foundations of animation and the
        proofs of these imported interfaces are not reconstructed. The global
        site and coefficient transport below are locally argued; no claim is
        based on the subsequent Remark 2.12.
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [` Jacob Lurie, Spectral Algebraic Geometry (3 February 2018) · Chapter 25, introductory discussion before §25.1: paragraphs describing derived schemes via sheaves of simplicial commutative rings, their local affine characterization, and the distinction from spectral smoothness `](https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf)
- [` Adeel A. Khan, An introduction to derived algebraic geometry (19 June 2023) · p. 7, Example 1.20 and Definition 1.21; p. 10, Definition/Proposition 2.1 and Definition 2.3; pp. 11–12, Definitions 2.8, 2.10 and 2.11 `](https://www.preschema.com/lecture-notes/2023-kias/dagkias.pdf)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied framework. Let $S$ be an ordinary qcqs scheme, regarded as a discrete derived scheme in the native Annala–Iwasa convention. Let $C_S$ be the category of ordinary smooth $S$-schemes with qcqs underlying schemes and all $S$-morphisms, with Zariski covers. The ordinary embedding induces an equivalence of sites $N(C_S)\simeq\mathrm{Sm}_S$, where $N$ denotes the nerve of an ordinary category. In particular every object of this native smooth site is discrete, and its mapping spaces are the discrete sets of ordinary $S$-morphisms.

Under this equivalence, restriction identifies space-valued and spectrum-valued Zariski sheaves, their products, tensor products and pointed constructions. It identifies the native pointed projective line with the ordinary $(\mathbb P^1_S,\infty)$ and the native Picard stack with the nerve of the ordinary line-bundle groupoid, preserving tensor product, the trivial line and $[\mathcal O(1)]$. Consequently precomposition with an inverse equivalence transports a coherent graded coefficient algebra, a pointed Picard map, its chosen nullhomotopies, and its projective-line equivalences to the native site with the same values on ordinary tests. No $\mathbb A^1$ localization is involved. This statement concerns ordinary bases; it asserts no extension of a theory from ordinary schemes to all derived schemes over a non-discrete base.

## Facts & Assumptions
[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible universe bounds of [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework) are standing premises. Universe existence is not inferred from Choice. The two sites use the same bounds on underlying scheme data.

[F1] [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework) supplies the native geometric category, its smooth Zariski site, coefficient categories, pointed projective line and Picard stack. Reference 0 identifies this derived geometric convention, not a replacement by the category of arbitrary spectral schemes. Its affine-local smoothness and discrete-ring interfaces are made explicit by reference 1.

[F2] Reference 1 supplies the fully faithful inclusion of ordinary rings as discrete derived rings and the affine smoothness criterion: for a smooth map $A\to B$, the ordinary map $\pi_0A\to\pi_0B$ is smooth and $\pi_iB\cong\pi_iA\otimes_{\pi_0A}\pi_0B$ for $i>0$. Conversely a map of discrete rings that is ordinarily smooth satisfies this criterion. Its open-immersion and chart definitions allow these affine statements to be glued.

[F3] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) fix the ordinary scope conditions. [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts) fixes ordinary projective space and its coordinate charts. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) fixes ordinary finite locally free sheaves and rank-one lines. The native vector bundles in [F1] are locally free modules in those same ranks; their local identifications, and the sheaf and pointed constructions in the Statement, are taken in the supplied framework.

## External input
Reference 0 imports only the source-native geometric convention, local affine description and flatness of smooth maps. Reference 1 imports the discrete-ring, flatness, smoothness and gluing interfaces in [F2]. Their foundations remain external. The equivalence of sites and the transport argument below are local deductions from these interfaces, rather than a claimed new reading of a published site-comparison theorem.

## Proof
**Given:** The ordinary qcqs base $S$, the assumptions [A1], and the two bounded sites in the Statement.

**Goal:** Identify the entire smooth site and its actual coefficient constructions.

1.1 Work on an ordinary affine open $\operatorname{Spec}A\subseteq S$ and an affine chart $\operatorname{Spec}B$ of a native smooth test object over it. By [F2], $\pi_iB=\pi_iA\otimes_A\pi_0B=0$ for $i>0$, since $A$ is discrete. Thus $B\simeq\pi_0B$, and the induced ordinary map is smooth. These discrete charts glue to the ordinary truncation, so the whole test object is its ordinary smooth scheme. Conversely every ordinary smooth scheme gives a native smooth scheme by the converse in [F2], locally and hence globally. The embedding is fully faithful on affine discrete rings by [F2]. On general schemes, maps and their compatibilities are glued on Zariski affine charts: the affine mapping spaces are discrete ordinary ring maps, so the compatible mapping space is precisely the discrete set of ordinary morphisms. Taking the fiber over the given structural map to the discrete base gives the same conclusion for $S$-morphisms. This proves full faithfulness and essential surjectivity. The embedding retains the underlying topological space and all open restrictions; hence qcqs conditions and Zariski covering families coincide, giving the asserted equivalence of bounded sites. [A1, F1, F2, F3, given]

2.1 Choose inverse equivalences of these sites. Precomposition in either direction gives inverse functors on presheaves; because covering diagrams coincide, these restrict to inverse functors on sheaves. Limits and colimits are preserved by equivalences. Cartesian products and pointed finite-limit/colimit constructions therefore agree; after ordinary stabilization, the tensor product is the colimit-preserving extension of the pointed product, so the coefficient equivalence is symmetric monoidal as well. The native projective line is smooth over the ordinary base, so step 1.1 makes it discrete. On ordinary charts and their overlaps its coordinate description is the projective line of [F3], with the same infinity section and the same tautological line. Native rank-one bundles on these discrete charts are free rank-one modules glued by invertible ordinary scalars: their local endomorphism spaces are discrete because maps from a free rank-one module to itself are its underlying discrete ring. Gluing retains exactly their ordinary isomorphisms and the line-bundle groupoid, and retains their tensor products and trivializations. Thus the Picard stack and $[\mathcal O(1)]$ agree, including the specified trivialization at infinity. Precomposition transports every map and homotopy of a graded algebra simultaneously; it preserves equivalences and the restriction maps used in the projective-line fiber. Consequently it transports the stated coefficient structures and their coherences without changing any value on an ordinary test scheme. This is transport on equivalent sites over this ordinary $S$, with no homotopy-invariance localization. [A1, F1, F2, F3, step 1.1] ∎
