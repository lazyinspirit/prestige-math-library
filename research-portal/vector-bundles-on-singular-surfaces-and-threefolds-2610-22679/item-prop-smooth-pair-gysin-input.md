---
title: Gysin purity for a smooth closed pair
status: published
research_item: prop-smooth-pair-gysin-input
dependency_level: 17
sources:
  references:
    - title: Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture notes on
        motivic cohomology (xprova PDF)
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: "Theorem 15.15, printed p.130, PDF page 141. Corollary 15.13 and
        Exercise 15.14, printed pp.129–130, PDF pages 140–141. Sm/k convention:
        Lecture 1, printed p.5, PDF page 16."
      statement: "For X smooth over a perfect field and a smooth closed subscheme Z of
        pure codimension c, the source supplies the distinguished Gysin triangle
        C_*Z_tr(X−Z)→C_*Z_tr(X)→C_*Z_tr(Z)(c)[2c]→C_*Z_tr(X−Z)[1]. The middle
        map is its constructed Gysin map. All schemes are in the source Sm/k
        convention: smooth separated finite-type schemes over k."
      hypotheses: k perfect; X and Z smooth separated finite type over k; Z closed in
        X and of a single pure codimension c. Coefficients here are integral.
        This input is not stated for a singular closed subscheme or for
        arbitrary qcqs schemes outside Sm/k.
      reading_limits: Read the actual Theorem 15.15 statement and complete displayed
        proof, plus the complete adjacent Corollary 15.13 statement/proof and
        Exercise 15.14. The exercise compatibility, normal-bundle construction
        and linked Nisnevich reduction proofs are not locally reconstructed or
        independently validated. The theorem is imported as established
        literature, not presented as a consequence of the five formal local
        lemmas.
    - title: Mazza–Voevodsky–Weibel, motive and Tate-twist conventions
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Definition 14.1, printed p.113/PDF p.124; Definition 14.2 and following
        tensor conventions pp.113–114; Lemma 14.4 and first Properties 14.5,
        p.114/PDF p.125.
      statement: The source uses the triangulated category DM_eff,−_Nis(k,Z) obtained
        from bounded-above derived Nisnevich sheaves with transfers by
        A¹-localization. M(X) is the class of Z_tr(X), naturally isomorphic
        there to C_*Z_tr(X). The twist (c) is tensoring with Z(c); [2c] is the
        cohomological translation in this triangulated category.
      hypotheses: Use the source category of smooth separated finite-type schemes over
        k, integral coefficients and its stated derived/localization setting.
        The Gysin application further assumes k perfect.
      reading_limits: Read the actual definition, tensor discussion, complete
        statement and short displayed proof of Lemma 14.4, and first Properties
        14.5. The referred constructions and proofs in earlier lectures are not
        reconstructed. No claim of a new foundational construction or an
        automatic enhanced comparison to the article theory is made.
external_input: true
---

PDF p. 7: Motivic purity at a smooth closed point

## Prerequisites

- [lem-author-9415fc97ee80-relative-cone-quotient-model](item-lem-author-9415fc97ee80-relative-cone-quotient-model)
- [lem-author-9415fc97ee80-contravariant-relative-hom](item-lem-author-9415fc97ee80-contravariant-relative-hom)
- [lem-author-9415fc97ee80-purity-shift-index](item-lem-author-9415fc97ee80-purity-shift-index)
- [lem-author-9415fc97ee80-compatible-relative-transport](item-lem-author-9415fc97ee80-compatible-relative-transport)
- [lem-author-9415fc97ee80-relative-empty-split-cases](item-lem-author-9415fc97ee80-relative-empty-split-cases)
- [def-supported-complex-indexing](item-def-supported-complex-indexing)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)
- [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture notes on motivic cohomology (xprova PDF) · Theorem 15.15, printed p.130, PDF page 141. Corollary 15.13 and Exercise 15.14, printed pp.129–130, PDF pages 140–141. Sm/k convention: Lecture 1, printed p.5, PDF page 16. `](https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf)
- [` Mazza–Voevodsky–Weibel, motive and Tate-twist conventions · Definition 14.1, printed p.113/PDF p.124; Definition 14.2 and following tensor conventions pp.113–114; Lemma 14.4 and first Properties 14.5, p.114/PDF p.125. `](https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf)


## Statement
Let $k$ be a perfect field and let $X$ be in $\mathrm{Sm}/k$, meaning a scheme smooth, separated and of finite type over $k$. Let $i:Z\hookrightarrow X$ be a closed immersion with $Z$ smooth over $k$ and of pure codimension an integer $c\geq0$, and put $U=X\setminus Z$ with its restricted structure sheaf. Here pure codimension $c$ means that, for every irreducible component $C$ of the underlying closed subset $|Z|$, the supremum of lengths $n$ of strict chains $C=C_0\subsetneq C_1\subsetneq\cdots\subsetneq C_n\subseteq |X|$ of nonempty irreducible closed subsets of $|X|$ is $c$. An irreducible component here means a maximal nonempty irreducible closed subset of $|Z|$; for empty $Z$ this condition is vacuous. Thus codimension is measured inside the actual ambient scheme, without a difference of global dimensions or an algebraic-closure hypothesis.

In the classical category $DM^{\mathrm{eff},-}_{\mathrm{Nis}}(k,\mathbb Z)$ there is the distinguished Gysin triangle
$$M(U)\longrightarrow M(X)\xrightarrow{\gamma}M(Z)(c)[2c]\longrightarrow M(U)[1].$$
Here $M(W)$ is the source motive of $W$, represented by $\mathbb Z_{\mathrm{tr}}(W)$ and isomorphic in this category to $C_*\mathbb Z_{\mathrm{tr}}(W)$; $(c)$ is the Tate twist by tensoring with $\mathbb Z(c)$, and $[2c]$ is cohomological translation. The first arrow is induced by the open immersion, and $\gamma$ is the source's Gysin map.

Equivalently one may take the relative motive of the pair, a cofiber of $M(U)\to M(X)$, to be $M(Z)(c)[2c]$. Any separately chosen cone triangle for that first arrow admits a compatible isomorphism of its third object with this one; a unique or functorial choice of that cone is not asserted from triangulated axioms alone.

This is a classical smooth-pair input, not a purity statement for a singular curve. For the formal coefficient applications, $a,j\in\mathbb Z$. Article-theory or derived-sections applications retain AC and the relevant site and size bounds. The enhanced Hom route additionally requires the supplied enhancement, lifted cofiber and coherent restriction-arrow comparison data; a complex-valued conclusion through that route also requires the coherent linear mapping lift. A separately supplied compatible comparison of theories on both $X$ and $U$ suffices, by the transport construction, to identify the article's support complex; a direct compatible comparison of support objects is another possible input. Computing its cohomological twist shift further requires the relevant coefficient representability and twist comparison in the weights used. Under precisely those premises the formal shift is $(a,j)\mapsto(a-2c,j-c)$, not $(a+2c,j-c)$. No negative-weight convention or comparison outside its given scope is silently introduced.

## Facts & Assumptions

**Given:** The perfect field, the two smooth schemes, closed immersion and pure codimension in the Statement. Additional application premises, including the conditional Choice and size assumptions in [A1], are as explicitly stated.

**Goal:** Record the exact imported triangle and give its rigorous formal interpretation without claiming a local proof of Gysin purity.

[F1] MVW Theorem 15.15 supplies the displayed triangle for precisely this smooth pair. The source's category and $M(W)\cong C_*\mathbb Z_{\mathrm{tr}}(W)$ notation are fixed in Definition 14.1 and Lemma 14.4. These are explicit external inputs in the source records.

[F2] For a termwise monomorphic cochain map $f:A\to B$, the canonical projection $\operatorname{Cone}(f)\to\operatorname{coker}(f)$ is a quasi-isomorphism of complexes. For a relative motive, this supplies a quotient-complex model when the supplier's functor, shift identification and complete cofiber-compatible triangle comparison are additionally supplied. These are sufficient conditions; termwise monicity is not asserted necessary. In general the relative object is specified by its cofiber triangle. [lem-author-9415fc97ee80-relative-cone-quotient-model](item-lem-author-9415fc97ee80-relative-cone-quotient-model)

[F3] Contravariant representable Hom reverses this triangle to the cohomological restriction long exact sequence. Its enhanced restriction-fiber conclusion requires a supplied stable enhancement, a specified cofiber lifting the entire triangle, and an equivalence of coherent restriction-arrow diagrams. A complex-valued conclusion additionally requires the supplier's coherent linear mapping lift; none of these data follows from the Hom groups alone. [lem-author-9415fc97ee80-contravariant-relative-hom](item-lem-author-9415fc97ee80-contravariant-relative-hom)

[F4] A supplied twist comparison gives the cohomological shift $a-2c$ and weight $j-c$ with its exact weight bounds. [lem-author-9415fc97ee80-purity-shift-index](item-lem-author-9415fc97ee80-purity-shift-index)

[F5] Compatible isomorphisms on the two initial objects transport cone triangles, and compatible derived comparisons on $X,U$ transport the support fiber. [lem-author-9415fc97ee80-compatible-relative-transport](item-lem-author-9415fc97ee80-compatible-relative-transport), [def-supported-complex-indexing](item-def-supported-complex-indexing)

[F6] Identity, zero and split-pair maps have the formal relative/support special cases already computed, independently of Gysin purity. [lem-author-9415fc97ee80-relative-empty-split-cases](item-lem-author-9415fc97ee80-relative-empty-split-cases)


[F7] Perfectness, smoothness over $k$, closed immersion, separatedness over $k$, finite type and open immersion have their published scheme-theoretic meanings. The notation $|X|$ refers to the underlying topological space of a scheme. The chain convention for pure codimension is defined inline in the Statement, using irreducibility in the subspace topology; it is not restricted to classical varieties over an algebraically closed field. [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes), [math:def-scheme](https://alphabetamath.cc/item/def-scheme), [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)

[F8] A triangulated category includes its specified translation and distinguished triangles. The source record supplies this structure for the particular classical category; the definition alone does not construct motives. [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)

[A1] For article-theory or derived-sections applications, assume the Axiom of Choice and the relevant site and size hypotheses of the supplied interfaces. When using the enhanced Hom route of [F3], also supply its enhancement, lifted cofiber and coherent restriction-arrow comparison data, including its coherent linear mapping lift for a complex-valued conclusion. A direct supplied comparison of support objects needs no construction by that route. Choice is used only when invoking the supplied article-theory or derived-sections constructions; no choice of enhancements or comparison maps is inferred, and the formal cone and Hom calculations add no Choice assumption. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## External input
Import the whole smooth-pair Gysin theorem in [F1]. The five local prerequisites establish setup, covariance, indexing, transport and boundary cases. They do not reconstruct the normal-bundle proof, the affine-space Gysin normalization, or Exercise 15.14. The source's displayed proof invokes those established ingredients; this authoring assistance does not claim to have filled their foundational proofs.

## Justification

1.1 Apply the imported [F1] to the stated perfect-field smooth pair. Its third term, with its map from $M(X)$ and connecting map, is a specified cofiber in the triangulated sense. If another relative cone was chosen for the same first arrow, [F5] applied with identities on $M(U)$ and $M(X)$ gives a compatible isomorphism to this third term. This establishes the relative-motive reformulation without asserting uniqueness of that isomorphism. [F1, F5, F7, F8, given]

2.1 In a complex model, [F2] supplies a sufficient condition for a quotient model; interpreting it as a model of the relative motive also uses its stipulated cofiber-compatible comparison. Apply [F3] to the distinguished triangle of step 1.1 to obtain its contravariant Hom long exact sequence. For the enhanced Hom route, under the exact lifted-cofiber, coherent restriction-arrow and, in the complex-valued case, coherent linear-lift premises of [F3], the relative Hom is the restriction fiber. Invoke [A1] when using the article-theory or derived-sections interfaces. If a second theory has a compatible derived comparison on both $X$ and $U$, [F5] transports that fiber to the second theory's support fiber. These are applications of explicit premises, not automatic identifications with the article's motivic complex. If coefficient representability and the twist identification of [F4] are also supplied, apply it with $A=M(Z)$. The relative Hom group in degree $a$ becomes the coefficient group on $Z$ in degree $a-2c$ and weight $j-c$. Only the supplied weight range is used. For empty or split support cases satisfying the independent functor premises of [F6], its direct calculations give the indicated formal boundary cases without invoking an extension of purity. [F2, F3, F4, F5, F6, A1, step 1.1] ∎

## Scope and application limit
Both smoothness hypotheses matter. In particular a possibly singular integral curve inside a smooth threefold is not covered by this input merely because its embedding has pure codimension. Nor does the source's Sm/k statement automatically extend to every qcqs scheme, a nonseparated smooth scheme, or an arbitrary smooth locus without checking the actual finite-type pair to which it is applied. The article's smooth motivic comparison and any twist/cancellation comparison retain their own authoring and scope obligations; this target supplies neither by renaming the classical cohomology theory.
