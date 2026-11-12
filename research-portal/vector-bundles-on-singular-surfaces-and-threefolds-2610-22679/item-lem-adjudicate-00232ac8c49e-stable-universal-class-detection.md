---
title: Finite-rank detection of stable pointed motivic classes
status: published
research_item: lem-adjudicate-00232ac8c49e-stable-universal-class-detection
dependency_level: 21
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated April 14, 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §2.1.1–2.1.4 p. 14; Lemma 3.2.3 p. 23; Definition 4.4.1 and Lemma 4.4.3
        pp. 30–31; Corollaries 4.4.5 and 4.4.7 and Theorem 4.4.6 pp. 31–32
      hypotheses: A homotopy-commutative oriented motivic E1-ring spectrum with PBF in
        the multiplicative category of stacks over Spec(k), with the source
        compactness and size hypotheses. Apply to the supplied actual EM model
        and transfer the target mapping groups to classical coefficients via the
        specified natural equivalence. The smooth site includes nonseparated
        schemes.
      statement: Corollary 4.4.7 computes cohomology of Vect_n as formal series in the
        actual universal Chern generators. Lemma 4.4.3 gives Whitney on smooth
        test schemes. Universal stack stabilization is supplied by the separate
        local argument in the declared computation supplier.
      reading_limits: For this repair read the live primary PDF dated April 14, 2025
        at the smooth-site and cohomology conventions on pp. 14–15 and the
        statements and displayed proofs on pp. 30–32, including Theorem 4.4.6
        and Corollary 4.4.7. The declared computation supplier was read in full,
        including its Grassmannian stabilization argument. The deeper lifting
        and foundational results remain imported; no reconstruction is claimed.
      version: April 14, 2025; primary PDF SHA256
        ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
    - title: Stacks Project, derived limits and the Milnor exact sequence
      url: https://stacks.math.columbia.edu/tag/0919
      locator: Lemma 15.88.5 (tag 0919), statement and proof; Definition 13.34.1 (tag
        08TB); Lemma 15.88.1(2)–(3) (tag 07KW)
      hypotheses: A countable tower in a triangulated category with the required
        products and product-difference derived limit. Here the coherent
        mapping-spectrum tower and its product fiber are supplied before passage
        to the homotopy category of spectra.
      statement: The kernel of Hom(L,Rlim T_n) to lim Hom(L,T_n) is R^1 lim
        Hom(L,T_n[-1]). For a surjective countable system this derived-limit
        obstruction vanishes.
      reading_limits: Read the full primary live statement of the cited derived-limit
        result and its displayed explanation/proof for this repair. The coherent
        spectral product-fiber identification is supplied by the declared
        computation supplier. No coherent data are inferred from a bare
        triangulated diagram.
      version: Primary live tag page read for this repair; no repository-history
        inspection claimed.
    - title: "Stacks Project, derived limits: product-difference triangle"
      url: https://stacks.math.columbia.edu/tag/08TB
      locator: Definition 13.34.1
      statement: A derived limit fits into the distinguished triangle from the limit
        to the countable product, then by one minus the transition shift to that
        product, then to the shifted limit. Such limits exist when the product
        exists, including in D(Ab); uniqueness in the triangulated category is
        only up to a nonunique isomorphism.
      hypotheses: A countable tower in a triangulated category with the required
        products and product-difference derived limit. Here the coherent
        mapping-spectrum tower and its product fiber are supplied before passage
        to the homotopy category of spectra.
      reading_limits: Read the full primary live statement of the cited derived-limit
        result and its displayed explanation/proof for this repair. The coherent
        spectral product-fiber identification is supplied by the declared
        computation supplier. No coherent data are inferred from a bare
        triangulated diagram.
      version: Primary live tag page read for this repair; no repository-history
        inspection claimed.
    - title: Stacks Project, Rlim of abelian groups
      url: https://stacks.math.columbia.edu/tag/07KW
      locator: Lemma 15.88.1(2)–(3), statement and proof
      statement: For a countable inverse system of abelian groups, the derived limit
        is represented by the product-difference complex in degrees zero and
        one. Its first derived-limit group vanishes for a Mittag–Leffler system,
        in particular for a system with surjective transition maps.
      hypotheses: A countable system of abelian groups; the vanishing assertion
        assumes Mittag–Leffler. Here step 1.1 gives surjective transition maps
        on pi_1 of the actual mapping tower.
      reading_limits: Read the full statement and proof of the primary live tag 07KW
        in this repair, using parts (2)–(3). Its deeper derived-functor inputs
        remain imported. Step 2.1 locally gives the preimage recursion in this
        application.
      version: Primary live tag page read for this repair; no repository-history
        inspection claimed.
---

PDF p. 17: Corollary 6.9; stable universal Chern and support comparison prerequisite

## Prerequisites

- [thm-repair-72891dd58cd0-universal-chern-derived-limit-input](item-thm-repair-72891dd58cd0-universal-chern-derived-limit-input)
- [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)
- [lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge](item-lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [` Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF dated April 14, 2025 · §2.1.1–2.1.4 p. 14; Lemma 3.2.3 p. 23; Definition 4.4.1 and Lemma 4.4.3 pp. 30–31; Corollaries 4.4.5 and 4.4.7 and Theorem 4.4.6 pp. 31–32 `](https://ryomei.com/papers/MotSp.pdf)
- [` Stacks Project, derived limits and the Milnor exact sequence · Lemma 15.88.5 (tag 0919), statement and proof; Definition 13.34.1 (tag 08TB); Lemma 15.88.1(2)–(3) (tag 07KW) `](https://stacks.math.columbia.edu/tag/0919)
- [` Stacks Project, derived limits: product-difference triangle · Definition 13.34.1 `](https://stacks.math.columbia.edu/tag/08TB)
- [` Stacks Project, Rlim of abelian groups · Lemma 15.88.1(2)–(3), statement and proof `](https://stacks.math.columbia.edu/tag/07KW)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds. Let $k$ be a perfect field, let $B_n=BGL_{n,k}$ be pointed by the trivial bundle, and use the stabilization $E\mapsto E\oplus\mathcal O$. Let $B_\infty=\operatorname*{colim}_{n\geq1}B_n$ in pointed local sheaves on the smooth finite-type $k$-site. For $i\geq1$, let $Y_i=\Omega^\infty(\mathbb Z(i)_{\rm cl}[2i])$ be the derived target for classical integral motivic cohomology. Then restriction is injective:
$$[B_\infty,Y_i]_*\longrightarrow\varprojlim_n[B_n,Y_i]_*.$$
Here brackets denote homotopy classes of maps in that sheaf category, not maps of groups of bundle classes. The assertion also holds for the actual EM target through the supplied natural smooth-field equivalence. Consequently, two existing stable pointed universal maps which agree at every finite rank admit a homotopy as maps of sheaves. Restricting this one homotopy to a smooth base and then taking derived sections gives homotopies compatible with its restriction arrows. Both Zariski and Nisnevich sites are permitted, with the same derived targets.

## Statement references

[math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)

[lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge](item-lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge)

[lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)

[lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square)

[thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)

[Annala–Iwasa, April 14, 2025, Corollary 4.4.7](https://ryomei.com/papers/MotSp.pdf)

[Stacks Project, Lemma 15.88.5](https://stacks.math.columbia.edu/tag/0919)

## Facts & Assumptions

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the supplied universes. Choice is inherited from the coefficient constructions and permits the recursive choices in step 2.1. The field is perfect in the sense of [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field).

[F1] The supplied integral field zigzag and actual Picard square identify the classical and actual EM coefficient targets as natural derived targets on the smooth site. They retain products, the unit and the actual orientation. The universal-Chern supplier supplies the existing stable pointed maps and their common source model; no uniqueness of their coherent stabilization is assumed here. [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag) [lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square) [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)

[F2] [thm-repair-72891dd58cd0-universal-chern-derived-limit-input](item-thm-repair-72891dd58cd0-universal-chern-derived-limit-input) supplies Annala–Iwasa Corollary 4.4.7 and the universal stack stabilization formula, with their hypotheses and reading limits. Apply the computation to the actual EM model, whose homotopy-commutative ring structure, actual orientation and PBF are supplied in [F4]. It gives $H^{*,*}_{\rm mot}(B_n)=H^{*,*}_{\rm mot}(k)\lbrack\!\lbrack c_1,\ldots,c_n\rbrack\!\rbrack$ with the actual universal coefficients. Stabilization is evaluation at $c_{n+1}=0$. The supplier proves that stack identity using finite Grassmannian detection; the cited smooth-scheme Whitney lemma alone is not asserted to be a stack detection theorem.

[F3] The stable interface supplies coherent mapping spectra, limits and products, and the exactness supplier gives homotopy exactness of a fiber sequence. The countable tower result in [thm-repair-72891dd58cd0-universal-chern-derived-limit-input](item-thm-repair-72891dd58cd0-universal-chern-derived-limit-input) identifies its coherent limit with the product-difference fiber and its kernel on $\pi_0$ with $R^1\varprojlim\pi_1$. Its imported Stacks Definition 13.34.1, Lemma 15.88.5 and Lemma 15.88.1 give the associated triangle, Hom exact sequence and obstruction group. [def-stable-spectra-interface](item-def-stable-spectra-interface) [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)

[F4] [lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge](item-lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge) supplies the actual model and PBF application interface, the mapping spectra $T_i(P)$, and their identifications with the derived coefficient targets in degrees zero and one. It identifies the Zariski classifying stack with $\mathrm{Vect}_n$ and computes the same target mapping spectra for the Nisnevich sheafification of the classifying presheaf. It also supplies split basepoint evaluation and naturality. This applies to smooth finite-type schemes including nonseparated ones; no separated-only classical site-comparison theorem is used.

## Provenance of application

The universal Chern computation and countable derived-limit results are imported through [thm-repair-72891dd58cd0-universal-chern-derived-limit-input](item-thm-repair-72891dd58cd0-universal-chern-derived-limit-input). The coefficient mapping bridge is a local composition of its declared inputs in [lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge](item-lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge). The detection statement and numbered application argument are locally authored (ai-generated); they do not reconstruct the imported proofs. The cited literature is not asserted to state the detection lemma.

## Proof

**Given:** $k$, $i\geq1$, the pointed universal stacks and the derived coefficient targets on the fixed smooth site.

**Goal:** Remove the possible inverse-limit obstruction to comparing two already constructed stable maps.

1.1 Work first with the actual EM target. By [F4] its model is an oriented homotopy-commutative motivic ring with PBF, and $T_n=T_i(P_n)$ computes the pointed mapping space into that target, on either site, with $\pi_1T_n=\widetilde H^{2i-1,i}_{\rm mot}(B_n)$. The classifying-stack identification in [F4] permits exactly the computation in [F2]. Under stabilization its restriction is evaluation at $c_{n+1}=0$, so it is surjective in bidegree $(2i-1,i)$: lift a formal series by the identical expression in the first $n$ variables. Evaluation at the trivial bundle is the constant coefficient, because all its positive Chern classes vanish; the split basepoint evaluation of [F4] therefore makes restriction on the reduced groups surjective too. Each simplex of the stable general-linear nerve in [F1] is a finite tuple of finite matrices, hence lies in some $GL_n$; filtered colimits commute with its finite products. Sheafification and suspension preserve colimits by their left-adjoint properties in [F4]. Thus the common stable source is the actual coherent colimit defining $B_\infty$, and its mapping spectrum is $\varprojlim_nT_n$. In particular $\operatorname{Map}_*(B_\infty,\Omega^\infty A_i)\simeq\Omega^\infty\varprojlim_nT_n$, with $A_i$ the actual EM coefficient spectrum of [F4]. All these identifications precede passage to homotopy classes. [F1, F2, F4]

2.1 Apply [F3] to this coherent tower. Its product-difference triangle and homotopy exactness give $\prod_n\pi_1T_n\xrightarrow{1-s}\prod_n\pi_1T_n\to\pi_0\varprojlim_nT_n\to\prod_n\pi_0T_n$, where $s((a_n))_n=f_n(a_{n+1})$ for the restriction maps $f_n$. This first arrow is surjective: given $(b_n)$, set $a_1=0$ and recursively choose $a_{n+1}$ with $f_n(a_{n+1})=a_n-b_n$, using step 1.1 and [A1]. Then $(1-s)(a_n)=(b_n)$. Exactness makes the map from $\pi_0\varprojlim_nT_n$ to the product injective; its image lies in the compatible inverse limit. This proves the assertion for EM and removes precisely its possible $R^1\varprojlim$ ambiguity. The natural derived coefficient equivalences in [F1] transport these mapping spaces, their restriction maps and their source limits to the classical targets, proving the displayed classical injectivity as well. Two existing stable pointed maps with equal finite-rank restrictions thus lie in the same component and admit a homotopy as sheaf maps. By the split evaluation of [F4], equality of unpointed coefficient classes also suffices when both maps are pointed. Restricting this single homotopy to the site over any smooth base, and then applying derived sections, gives a homotopy of its entire restriction diagram. This proves existence, not a contractible space of choices, and uses no affine-$K_0$ detection. [A1, F1, F3, F4, step 1.1] ∎
