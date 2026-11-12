---
title: Krishna's affine zero-cycle divisibility and kernel input
status: published
research_item: thm-author-b87d598e83f3-krishna-cycle-input
dependency_level: 13
sources:
  references:
    - title: Amalendu Krishna, Murthy’s conjecture on 0-cycles, arXiv:1511.04221v3 (18
        March 2019)
      url: https://arxiv.org/pdf/1511.04221v3
      locator: §1.9 finite-type convention; §2 opening and §2.1, pp. 6–8, especially
        (2.1)–(2.2) and the image-independence paragraph immediately after
        (2.2); Corollary 7.6 and its proof, p. 34
      statement: The relative Cartier-curve quotient has the residue-class cycle map
        (2.2), whose image is independent of the admissible forbidden subset Y.
        Corollary 7.6 makes this image F^d K_0 uniquely divisible.
      hypotheses: "For §2.1: reduced quasi-projective X of dimension d >= 1 over a
        perfect field; Y is closed, contains the source-defined componentwise
        singular locus, and contains no d-dimensional component. For Corollary
        7.6: reduced finite-type affine algebra over an algebraically closed
        field, d >= 2. The local proof checks Y = X minus its intrinsic smooth
        locus, d = 3."
      reading_limits: Read the versioned HTML §1.9, §2 opening and §2.1 through (2.2)
        and its following image and K-theory paragraphs, and Corollary 7.6 with
        its short proof; checked the image paragraph and corollary in
        browser-extracted v3 PDF text. The deep proofs and cited Levine moving
        result were not reconstructed. No equality of the two regular-locus
        conventions is imported.
    - title: The Stacks Project, reduced immersions
      url: https://stacks.math.columbia.edu/tag/03DQ
      locator: Lemma 29.3.3 (tag 03DQ)
      statement: An immersion from a reduced scheme factors as an open immersion
        followed by a closed immersion. Applied to X into projective space, X is
        an open subscheme of a projective k-scheme.
      hypotheses: An immersion of schemes whose source is reduced. Here X is reduced
        by assumption and its immersion into finite-dimensional projective space
        is supplied by the declared affine finite-type immersion lemma.
      reading_limits: Read Lemma 29.3.3 and its displayed proof at tag 03DQ in this
        assignment. Its cited factorization and reduced-induced-structure
        results were not reconstructed.
    - title: Rahul Gupta and Amalendu Krishna, K-theory and 0-cycles on schemes,
        arXiv:1803.00837v4
      url: https://arxiv.org/pdf/1803.00837v4
      locator: §1.10, p. 6; §2.1, p. 7; §3.2, p. 14, equation (3.6); proof of Theorem
        4.2, p. 21
      statement: Section 2.1 uses the intrinsic regular-point Levine–Weibel group.
        Section 3.2 defines its point-class cycle map and its descent. The proof
        of Theorem 4.2 explicitly supplies injectivity of that cycle map for
        reduced pure-dimensional affine schemes over algebraically closed
        fields, invoking Krishna Corollary 7.6 when d >= 2.
      hypotheses: The separated finite-type perfect-field convention of §1.10; reduced
        quasi-projective schemes for the definitions and cycle map; reduced
        pure-dimensional affine schemes over an algebraically closed field for
        the injectivity application. Here d = 3.
      reading_limits: Read §1.10, §2.1 through the Cartier-curve quotient, the first
        paragraph of §3.2 through (3.6), and Theorem 4.2 with its short proof in
        browser-extracted v4 PDF text. Import the explicitly asserted intrinsic
        cycle-map injectivity; do not reconstruct Bloch’s formula, the moving
        results or the cited original Levine–Weibel proposition. The browser
        screenshot of p. 21 failed.
    - title: The Stacks Project, schemes smooth over fields
      url: https://stacks.math.columbia.edu/tag/04QM
      locator: Lemmas 33.25.3–33.25.4 and 33.25.8, §33.25 (tag 04QM)
      statement: Smooth schemes over a field are regular and normal and are locally
        Noetherian. For a reduced locally finite-type scheme over a perfect
        field the intrinsic smooth and regular loci agree and form a dense open
        subscheme.
      hypotheses: A field for the smooth-scheme assertions; a perfect field and
        reduced locally finite-type scheme for Lemma 33.25.8. Apply to X and its
        intrinsic smooth open U.
      reading_limits: Read Lemmas 33.25.3–33.25.4 and 33.25.8 with their displayed
        proofs. Their cited algebraic and geometric results were not
        reconstructed.
    - title: The Stacks Project, locally Noetherian normal schemes
      url: https://stacks.math.columbia.edu/tag/033H
      locator: Lemma 28.7.7, with Lemma 28.7.5 and its component argument
      statement: A locally Noetherian normal scheme is a disjoint union of integral
        normal open subschemes, its irreducible components. In particular every
        point has an integral open neighbourhood.
      hypotheses: A locally Noetherian normal scheme. Apply only to the intrinsic
        smooth open U, which has both properties by the preceding smooth-scheme
        input; normality of X is not assumed.
      reading_limits: Read Lemmas 28.7.5 and 28.7.7 and the displayed proof of 28.7.5.
        The source omits the proof of 28.7.7 and gives a topological hint; its
        statement is imported, not locally reconstructed. The cited affine
        normal-ring theorem was not reconstructed.
---

## Prerequisites

- [def-levine-weibel-zero-cycles](item-def-levine-weibel-zero-cycles)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-reduced-affine-scheme](https://alphabetamath.cc/item/def-reduced-affine-scheme)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect)
- [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated)
- [math:lem-affine-finite-type-source-immerses-in-relative-projective-space](https://alphabetamath.cc/item/lem-affine-finite-type-source-immerses-in-relative-projective-space)
- [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)
- [math:lem-irreducible-components-of-a-topological-space](https://alphabetamath.cc/item/lem-irreducible-components-of-a-topological-space)
- [math:lem-irreducibility-criteria-and-open-subspaces](https://alphabetamath.cc/item/lem-irreducibility-criteria-and-open-subspaces)
- [` Amalendu Krishna, Murthy’s conjecture on 0-cycles, arXiv:1511.04221v3 (18 March 2019) · §1.9 finite-type convention; §2 opening and §2.1, pp. 6–8, especially (2.1)–(2.2) and the image-independence paragraph immediately after (2.2); Corollary 7.6 and its proof, p. 34 `](https://arxiv.org/pdf/1511.04221v3)
- [` The Stacks Project, reduced immersions · Lemma 29.3.3 (tag 03DQ) `](https://stacks.math.columbia.edu/tag/03DQ)
- [` Rahul Gupta and Amalendu Krishna, K-theory and 0-cycles on schemes, arXiv:1803.00837v4 · §1.10, p. 6; §2.1, p. 7; §3.2, p. 14, equation (3.6); proof of Theorem 4.2, p. 21 `](https://arxiv.org/pdf/1803.00837v4)
- [` The Stacks Project, schemes smooth over fields · Lemmas 33.25.3–33.25.4 and 33.25.8, §33.25 (tag 04QM) `](https://stacks.math.columbia.edu/tag/04QM)
- [` The Stacks Project, locally Noetherian normal schemes · Lemma 28.7.7, with Lemma 28.7.5 and its component argument `](https://stacks.math.columbia.edu/tag/033H)


## Statement
Assume the Axiom of Choice and the fixed universe bounds of the affine perfect comparison. Let $k$ be algebraically closed and let $X$ be a reduced, pure-dimensional affine $k$-scheme of finite type and dimension $3$. For the intrinsic Levine–Weibel zero-cycle group and actual residue-class cycle map $\operatorname{cyc}_X:\operatorname{CH}^{LW}_0(X)\to K_0(X)$ described below and transported to perfect $K_0$ by the affine comparison, multiplication by every positive integer is bijective on $\operatorname{CH}^{LW}_0(X)$, and every element of $\ker(\operatorname{cyc}_X)$ is killed by $2$.

## Statement references

[def-levine-weibel-zero-cycles](item-def-levine-weibel-zero-cycles)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)

[math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-reduced-affine-scheme](https://alphabetamath.cc/item/def-reduced-affine-scheme)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

## Facts & Assumptions

**Given:** The field and scheme, Choice and universe assumptions in the Statement.

[F1] The quotient and its intrinsic smooth locus $U$ are those of [def-levine-weibel-zero-cycles](item-def-levine-weibel-zero-cycles). Pure dimension $3$ means that every irreducible component has dimension $3$; dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. Write $Y=X\setminus U$ with its reduced closed structure. The field, affine scheme, structure morphism and reducedness conventions are [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field), [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) and [math:def-reduced-affine-scheme](https://alphabetamath.cc/item/def-reduced-affine-scheme).

[F2] By [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect), $k$ is perfect in every characteristic. Writing $X=\operatorname{Spec}A$, [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated) makes $A$ finitely generated over $k$, and [F1] makes it reduced of dimension $3$. By [math:lem-affine-finite-type-source-immerses-in-relative-projective-space](https://alphabetamath.cc/item/lem-affine-finite-type-source-immerses-in-relative-projective-space) and Stacks Lemma 29.3.3, $X$ is open in a closed subscheme of some $\mathbb P^N_k$, hence quasi-projective in [F1]'s convention. This also supplies the separated finite-type applicability required by the cited sources.

[F3] The geometric external inputs below make $U$ dense open, regular, normal and locally Noetherian, with integral open neighbourhoods. They apply to $U$, without assuming that $X$ is normal.

[F4] The external inputs below supply the relative cycle-map image independent of the admissible forbidden subset, its unique divisibility, and injectivity of the intrinsic group's cycle map $\lambda:\operatorname{CH}^{LW}_0(X)\to K^0(X)$. Here $K^0(X)$ denotes the vector-bundle Grothendieck group; every permitted point is sent to the bundle Euler class of its residue sheaf. A homomorphism's image is its set of values, and its kernel is the set mapped to zero. Multiplication by a positive integer $n$ is the sum of $n$ copies; unique divisibility means that each such multiplication is bijective.

[F5] [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) supplies the inverse Euler isomorphism $J:K^0(X)\to K_0(X)$ to perfect $K$ zero, identifying each residue-sheaf Euler class with the perfect class of that same sheaf. Define $\operatorname{cyc}_X=J\lambda$.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) for the Levine–Weibel quotient, affine finite-type and immersion results, and affine perfect comparison in [F1], [F2] and [F5], and for the component-existence input in [F6]. Fix the compatible universes required by that comparison, with [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); their existence is a separate assumption.

[F6] An irreducible component is a maximal irreducible closed subset, with its reduced induced scheme structure when regarded as a scheme, as in [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme). Under the assumed Choice, [math:lem-irreducible-components-of-a-topological-space](https://alphabetamath.cc/item/lem-irreducible-components-of-a-topological-space) makes the closure of an irreducible subset irreducible and places it in an irreducible component. [math:lem-irreducibility-criteria-and-open-subspaces](https://alphabetamath.cc/item/lem-irreducibility-criteria-and-open-subspaces) makes every nonempty open of an irreducible space irreducible and dense. These are the component and density inputs used in step 1.1.

## External input
Krishna, §2.1, (2.1)–(2.2), supplies the relative Cartier-curve quotient and residue-class map for an admissible $Y$. The paragraph immediately after (2.2) states that its image is independent of $Y$. Corollary 7.6 makes this image uniquely divisible for reduced affine algebras over algebraically closed fields in dimension at least two. These are image assertions; no identification of the source's componentwise regular locus with the intrinsic locus is assumed.

Gupta–Krishna, §2.1 and §3.2, supplies the intrinsic Levine–Weibel group and the cycle map on its point classes. The proof of Theorem 4.2 explicitly asserts this map's injectivity under the present hypotheses. The point-class descriptions identify its image with that of Krishna's relative map once $Y$ is checked admissible. This imports the injectivity assertion, not a new proof of the cited theorem.

Stacks Lemma 29.3.3 supplies the reduced-immersion factorization used in [F2]. Lemma 33.25.8 gives the intrinsic smooth/regular-locus equality and density. Lemmas 33.25.3–33.25.4 make the smooth scheme $U$ regular, normal and locally Noetherian. Lemma 28.7.7 supplies its integral open neighbourhoods. The five source records specify hypotheses and actual reading limits; none of the substantial imported proofs is claimed as reconstructed here.

## Proof

**Goal:** Prove unique divisibility of the intrinsic zero-cycle group and the stated kernel bound.

**Proof technique:** Compare the actual cycle-map images, use intrinsic injectivity, and transport unique roots.

1.1 Apply [F1]–[F3]. For $x\in U$, choose an integral open neighbourhood $V\subseteq U$. If an irreducible component $C$ of $X$ meets $V$, its nonempty open $C\cap V$ is dense in $C$ by [F6]. The closure $\overline V$ is irreducible and lies in an irreducible component by [F6], so maximality forces every such $C$ to equal that component. Thus $V$ meets only one component, and its reduced induced component structure agrees with $X$ on $V$. Consequently $x$ is smooth on that component. Purity makes it a three-dimensional component. Hence the complement of the source's componentwise regular locus is contained in $Y$; density makes $Y$ contain no component, so it is admissible. The generators, Cartier curves and unit relations for this $Y$ are precisely [F1]'s quotient. The two residue-class maps have the same values on every point generator. By [F4], their common image $I=\lambda(\operatorname{CH}^{LW}_0(X))\subseteq K^0(X)$ is therefore Krishna's uniquely divisible image. This compares images without equating the two regular loci. [F1, F2, F3, F4, F6, A1, given, construct]

2.1 For $a\in\operatorname{CH}^{LW}_0(X)$ and $n>0$, step 1.1 gives a unique $c\in I$ with $nc=\lambda(a)$. Since $I$ is the image, write $c=\lambda(b)$. Then $\lambda(nb-a)=0$, and [F4]'s injectivity gives $nb=a$. If $nb'=a$ as well, uniqueness of $c$ gives $\lambda(b')=c=\lambda(b)$, and injectivity gives $b'=b$. Thus every positive multiplication is bijective. By [F5], the transported map is exactly the stated perfect residue-class map. If $\operatorname{cyc}_X(a)=0$, injectivity of $J$ and of $\lambda$ gives $a=0$, hence $2a=0$, retaining the stated bound. Choosing a preimage for this one $c$ requires no additional choice principle. This is a local composition of the imported inputs, not a reconstruction of their deep proofs. [F4, F5, A1, step 1.1, algebra] ∎
