---
title: Adapted frames identify the universal quotient-projective stack
status: published
research_item: lem-adjudicate-63e8cd82ee4c-projective-stack-adapted-frames
dependency_level: 15
sources:
  references:
    - title: Stacks Project, effective fpqc descent of quasi-coherent sheaves
      url: https://stacks.math.columbia.edu/tag/023T
      locator: Proposition 35.5.2 (tag 023T), full statement and displayed proof
      statement: Quasi-coherent modules and their morphisms descend effectively and
        fully faithfully along fpqc covering families.
      hypotheses: A scheme T and an fpqc covering family, with quasi-coherent modules,
        overlap isomorphisms and the triple-overlap cocycle identity. Source
        reference 2 verifies that the fppf torsor-trivializing cover qualifies;
        Zariski covers qualify as well.
      reading_limits: In this repair, read the live tag 023T statement and displayed
        proof. The affine module-descent and sheaf-gluing foundations it cites
        remain imported. Its final descent-datum compatibility verification is
        omitted in the source. Only the stated equivalence for quasi-coherent
        modules and maps is imported; no infinite-rank freeness assertion is
        used.
    - title: Stacks Project, finite locally free modules descend fpqc locally
      url: https://stacks.math.columbia.edu/tag/05B2
      locator: Lemma 35.7.6 (tag 05B2), full statement and one-paragraph proof
      statement: A quasi-coherent module whose pullbacks along an fpqc cover are
        finite locally free is finite locally free.
      hypotheses: A scheme T, a quasi-coherent module on T, and an fpqc covering
        family on which that module is finite locally free. In the application
        the descended modules have constant finite ranks n and one, checked on
        the surjective cover.
      reading_limits: In this repair, read the live tag 05B2 statement and its
        complete displayed proof. Its finite-presentation and flatness descent
        inputs and the cited algebraic characterization remain imported, not
        reconstructed. The application concerns finite locally free modules
        only.
    - title: Stacks Project, fpqc covering families and the fppf-to-fpqc comparison
      url: https://stacks.math.columbia.edu/tag/022A
      locator: Section 34.9, Definition 34.9.1 (022B), Lemma 34.9.7 (022C), and Lemma
        34.9.9
      statement: An fpqc covering is a flat family with finitely many affine opens
        above each affine base open whose images cover that base open. Every
        fppf covering is fpqc. Over an affine base, an fpqc covering admits a
        finite refinement by affine opens in its members.
      hypotheses: An arbitrary scheme T and a covering family. The comparison assumes
        an fppf covering; the finite affine-refinement conclusion assumes T
        affine and the family fpqc. Apply after restricting a
        torsor-trivializing fppf cover to each affine open of T.
      reading_limits: Freshly read the indicated definition, both lemma statements and
        their displayed proofs in the live primary section. Openness of flat
        locally finitely presented morphisms and affine quasi-compactness used
        by the comparison remain imported. No single finite refinement over a
        non-quasi-compact base is claimed.
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-general-linear-group-scheme-and-its-coordinate-ring](https://alphabetamath.cc/item/lem-general-linear-group-scheme-and-its-coordinate-ring)
- [math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)
- [math:lem-relative-spec-glues-affine-algebras](https://alphabetamath.cc/item/lem-relative-spec-glues-affine-algebras)
- [math:def-flat-and-faithfully-flat-modules-and-ring-maps](https://alphabetamath.cc/item/def-flat-and-faithfully-flat-modules-and-ring-maps)
- [thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input](item-thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input)
- [math:def-fppf-topology-on-schemes](https://alphabetamath.cc/item/def-fppf-topology-on-schemes)
- [math:def-descent-data-and-stack-in-groupoids](https://alphabetamath.cc/item/def-descent-data-and-stack-in-groupoids)
- [` Stacks Project, effective fpqc descent of quasi-coherent sheaves · Proposition 35.5.2 (tag 023T), full statement and displayed proof `](https://stacks.math.columbia.edu/tag/023T)
- [` Stacks Project, finite locally free modules descend fpqc locally · Lemma 35.7.6 (tag 05B2), full statement and one-paragraph proof `](https://stacks.math.columbia.edu/tag/05B2)
- [` Stacks Project, fpqc covering families and the fppf-to-fpqc comparison · Section 34.9, Definition 34.9.1 (022B), Lemma 34.9.7 (022C), and Lemma 34.9.9 `](https://stacks.math.columbia.edu/tag/022A)


## Statement
Assume the Axiom of Choice and the compatible size bounds of the stack input. Let $F$ be a field and $n\geq1$. Let $B_n(T)$ be the groupoid of rank-$n$ vector bundles on an $F$-scheme $T$, and let $U_n$ denote its universal bundle. Let $P_n(T)$ be the groupoid of pairs $(V,q:V\twoheadrightarrow L)$ with $V$ of rank $n$ and $L$ invertible; its morphisms are pairs of bundle isomorphisms commuting with $q$. Thus $P_n=\mathbb P(U_n)$ in the quotient convention, with projection $p:P_n\to B_n$ and tautological line $L$. Here a vector bundle is a finite locally free module and an invertible module has rank one. Let $q_0:F^n\to F$ be the last-coordinate quotient and let $H_n$ be its stabilizer: an element is a pair $(g,\lambda)$ with $g\in GL_n$, $\lambda\in\mathbb G_m$ and $q_0g=\lambda q_0$. Equivalently $g$ has block form $\begin{pmatrix}b&v\\0&\lambda\end{pmatrix}$, with $b\in GL_{n-1}$. There is a natural equivalence $P_n\simeq BH_n$ of fppf stacks, compatible with every base change. Here $BH_n$ is the groupoid of right $H_n$-torsors, locally trivial in the fppf topology. Under the equivalence, $p$ and $L$ are induced by the standard $n$-dimensional representation and the character $g\mapsto\lambda$. The diagonal of $P_n$ is affine. All these assertions restrict to the classical smooth Zariski site. For $n=1$ the empty block is omitted and $H_1=\mathbb G_m$.

## Statement references
[math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)

[thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input](item-thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input)

[math:def-fppf-topology-on-schemes](https://alphabetamath.cc/item/def-fppf-topology-on-schemes)

[math:def-descent-data-and-stack-in-groupoids](https://alphabetamath.cc/item/def-descent-data-and-stack-in-groupoids)

## Facts & Assumptions
[A1] Choice and compatible universes are assumed for the geometric and stack suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The quotient projective bundle represents line quotients, including the tautological quotient and its compatibility with pullback. Apply this on each test scheme to the classified bundle $V$; it identifies the fiber of $P_n\to B_n$ with $\mathbb P(V)$. [math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)

[F2] The general linear group represents invertible matrices over every test algebra, including nonreduced algebras, with $GL_0$ the trivial group. The stack input fixes $BG$ as the stack of right fppf torsors and isomorphisms. [math:lem-general-linear-group-scheme-and-its-coordinate-ring](https://alphabetamath.cc/item/lem-general-linear-group-scheme-and-its-coordinate-ring) [thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input](item-thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input)

[F3] Source reference 0 supplies effective and fully faithful descent of quasi-coherent modules and maps along fpqc covering families. Source reference 1 supplies descent of finite local freeness. Source reference 2 supplies the fpqc covering-family definition, proves that every fppf covering is fpqc, and supplies a finite affine refinement when the base is affine. Thus these descent inputs apply to an fppf torsor-trivializing cover, without any quasi-compactness assumption on the whole base. Faithfully flat tensor extension reflects exact sequences, so surjectivity of a descended quotient can be checked on that cover. [math:def-flat-and-faithfully-flat-modules-and-ring-maps](https://alphabetamath.cc/item/def-flat-and-faithfully-flat-modules-and-ring-maps)

[F4] Compatible quasi-coherent algebra sheaves have a relative spectrum that is affine over each affine open of the base; its localization formula glues the local affine charts. [math:lem-relative-spec-glues-affine-algebras](https://alphabetamath.cc/item/lem-relative-spec-glues-affine-algebras)

[F5] An fppf covering is a jointly surjective family of flat, locally finitely presented morphisms; Zariski open covers qualify, and coverings are stable under pullback and composition. A category fibred in groupoids is an fppf stack when, for every such covering, restriction to objects with overlap isomorphisms satisfying the triple-overlap cocycle is an equivalence of groupoids; this includes descent of morphisms and effective descent of objects. These are the covering and stack meanings used here. [math:def-fppf-topology-on-schemes](https://alphabetamath.cc/item/def-fppf-topology-on-schemes) [math:def-descent-data-and-stack-in-groupoids](https://alphabetamath.cc/item/def-descent-data-and-stack-in-groupoids)

## Proof
**Given:** $F,n$, the quotient convention and the size and Choice assumptions above.

**Goal:** Establish the stated natural stack equivalence, its representation identifications, affine diagonal and base-change compatibility.

1.1 For $(V,q:V\twoheadrightarrow L)$ let $Q$ be the sheaf of adapted frames $(a:\mathcal O_T^n\xrightarrow{\sim}V,\ell:\mathcal O_T\xrightarrow{\sim}L)$ satisfying $qa=\ell q_0$. It has right action $(a,\ell)(g,\lambda)=(ag,\ell\lambda)$. Full faithfulness in [F3] applied to fppf covers makes this adapted-frame presheaf a sheaf in the topology of [F5]. To see that it has Zariski local sections, trivialize $V$ and $L$. Write $q=(a_1,\ldots,a_n)$ in those coordinates. At each point at least one coefficient is a unit on a neighbourhood, since the row is surjective. After permuting this coefficient to position $n$, use the vectors $e_j-(a_j/a_n)e_n$ for $j<n$ and $a_n^{-1}e_n$ for the last vector. Their images are $0,\ldots,0,1$, and the change-of-basis matrix is invertible with inverse obtained by the reverse elementary operations. This constructs an adapted frame. Any two adapted frames differ by a unique $(g,\lambda)$ with $q_0g=\lambda q_0$, hence by a unique section of $H_n$. On each such neighbourhood $Q$ is therefore $H_n\times T$, with its translation action; these identifications describe a right torsor and commute with pullback. Conversely, trivialize any right $H_n$-torsor fppf locally, using the assumed Choice to select the trivializations on a covering family within the fixed size bounds. By [F3] this family is an fpqc covering. More explicitly, over each affine open of $T$ its restriction has a finite covering refinement by affine opens in its members; this is an fpqc refinement by source reference 2. No finite covering of the whole $T$ is required. On the overlaps its transition matrices and characters act on the standard quotient $\mathcal O^n\twoheadrightarrow\mathcal O$. Their cocycle identities descend these two modules and their quotient by [F3]; finite local freeness descends, their ranks remain $n$ and one, and faithful flatness reflects surjectivity. Denote the resulting pair by $Q\times^{H_n}(F^n\twoheadrightarrow F)$; this notation means the descended pair, so representability of a separate orbit quotient is not assumed. The constructions on maps also descend by full faithfulness. Starting instead with arbitrary descent data of bundle-quotient pairs on any fppf cover, the same [F3] descends both modules and the quotient map, their finite local freeness and surjectivity. Descent of morphisms and their inverses is fully faithful. Thus $P_n$ is an fppf stack in the precise sense of [F5]; forgetting the line and quotient gives the same conclusion for $B_n$. Evaluation $[(a,\ell),x]\mapsto a(x)$, and its line analogue, identify the pair reconstructed from adapted frames with $(V,q,L)$. Conversely a point of a torsor gives an adapted frame of its descended pair; this equivariant map is an isomorphism on a trivializing cover and therefore an isomorphism of torsor sheaves. These two isomorphisms are natural and give inverse equivalences on groupoids. The torsor construction also identifies the projection and line with their stated representations. By [F1] its bundle-quotient groupoid is precisely $\mathbb P(U_n)$. The constructions commute with restriction and their natural inverse isomorphisms identify the descent groupoids as well, so $BH_n$ satisfies the same stack condition. This proves the stack equivalence, not just a bijection on object classes. [A1, F1, F2, F3, F5, construct]

2.1 For two pairs $(V,q,L)$ and $(V',q',L')$ over $T$, describe their isomorphisms locally where all four bundles are free. Introduce matrices $f,g$ for maps $V\to V'$ and $V'\to V$ and scalars $u,v$ for maps $L\to L'$ and $L'\to L$. Impose $gf=1$, $fg=1$, $uv=vu=1$ and $q'f=uq$. These are polynomial equations over the local base ring. Their affine coordinate algebra represents exactly an isomorphism of pairs; the inverse variables are uniquely determined, so they add no extra choices. On overlaps, changing bundle frames changes these variables by invertible linear coordinate changes. Thus these finitely presented algebra sheaves glue, with their cocycle identity inherited from the changes of frames, to a quasi-coherent algebra on $T$. By [F4] its relative spectrum is affine over $T$ and represents the isomorphism sheaf. This proves that every pullback of the diagonal of $P_n$ is affine. For $n=1$ the same adapted-frame argument has no kernel vectors and all formulas reduce to the invertible line quotient; the empty base causes no exception. Every construction used only pullback, descent or intrinsic evaluation, hence commutes with base change and restricts to the smooth Zariski site as asserted. [F1, F2, F3, F4, step 1.1] ∎

## External input
Source reference 0 imports the equivalence for quasi-coherent descent, including morphisms; source reference 1 imports preservation of finite local freeness under that descent. Source reference 2 imports the covering-family definition and the fppf-to-fpqc comparison with its affine refinement. Their foundational proofs are not reconstructed. The adapted-frame torsor, inverse descended quotient, stack condition, natural inverse equivalences and affine diagonal are proved locally above using those premises and the declared covering and stack definitions. This locally authored lemma is not marked external_input.
