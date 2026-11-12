---
title: Fixed-site classical cycle comparison on every smooth ambient
status: published
research_item: thm-author-8a080e7d9445-open-natural-classical-input
dependency_level: 10
sources:
  references:
    - title: Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes,
        served v1 HTML
      url: https://arxiv.org/html/2508.09915v1
      locator: §1.6; comparison (1.9), Corollary 1.11; proof of Theorem 6.3, equation
        (6.4) and its surrounding fixed-site qualification; Definition 7.1,
        Theorem 7.5, Definition 7.8 and Remark 7.9
      statement: For every fixed smooth variety S over a field and r>=0, (6.4) is an
        equivalence of presheaves of complexes on S_et between the represented
        A¹ theory and the actual Bloch cycle complex shifted by -2r. The
        canonical cdh-to-A¹ comparison is an equivalence on equal-characteristic
        schemes. Remark 7.9 identifies the restriction of the absolute cdh
        functor with the cdh-local smooth-field left Kan extension.
      hypotheses: Fixed smooth separated finite-type ambient S over a perfect field k;
        r>=0; finite-type separated objects of its small étale site. The
        field-model assertion applies to every field, including the prime field
        F. No finite-generation assumption on k/F.
      reading_limits: "Historical reading record retained from the preceding repair;
        these passages were not reread in this geometry-only round: Reread the
        served HTML at §1.6, (1.9), Corollary 1.11, the proof of Theorem 6.3
        surrounding (6.4), Definition 7.1, Theorem 7.5 and its short proof,
        Definition 7.8 and Remark 7.9 during this repair. These passages specify
        the derived infinity-category convention, field model and fixed-site
        comparison. The served v1 URL identifies 13 August 2025 but bears title
        date August 24, 2026; no immutable August 2025 snapshot was verified.
        Slice theory, moving, base-independence and equal-characteristic
        comparison proofs remain imported, not reconstructed. No global
        compatibility between choices of smooth ambient or weight is inferred."
    - title: Mazza–Voevodsky–Weibel, Lecture notes on motivic cohomology, Rutgers
        served PDF
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/prova-hyperlink.pdf
      locator: Definition 2.14 (printed p.16), Definition 3.1 and Lemma 3.2 (p.21);
        p.126 and Theorem 16.7 (pp.126–127); Definition 17.1 and Properties
        17.4(1) (pp.135–136); Lemma 19.4 and the small-site construction
        (pp.159–160), Theorem 19.8, Proposition 19.12, Definition 19.13 and
        Example 19.14 (pp.161–163). PDF page = printed page + 12.
      statement: Definition 3.1 specifies the classical motivic complex Z(r), a
        complex of Zariski sheaves by Lemma 3.2. The unnormalized
        alternating-face complexes of Definitions 2.14 and 17.1 are used. On a
        fixed smooth scheme the Zariski-sheaf zigzag passes from Z(r) through
        the Suslin–Friedlander complex Z_SF(r) of p.126 to z^r(-×A^r,*)[-2r] by
        Theorems 16.7 and 19.8. The small-site construction on p.160 supplies
        flat, hence étale and open, cycle restriction. Proposition 19.12
        supplies Zariski descent, including the natural
        cycle-value-to-derived-sections comparison. Projection flat pullback is
        a quasi-isomorphism by Properties 17.4(1), and Example 19.14 identifies
        flat maps with actual flat cycle pullback. These maps commute with open
        restriction.
      hypotheses: Smooth separated schemes over a perfect field; r>=0; fixed small
        Zariski site. Applied to finite-type opens of S.
      reading_limits: "Historical reading record retained from the preceding repair;
        these passages were not reread in this geometry-only round: Read the
        listed passages in the existing local 228-page MVW PDF cached at
        scratch/open-diagram-resolution/mvw.pdf in the article run. The Rutgers
        URL timed out on two retrieval attempts in this repair; the cached text
        was actually inspected, with no fresh remote-byte identity assertion.
        Read printed pp.16, 21, 126–127, 135–136 and 159–163; in particular the
        complex convention, coefficient construction, fixed-site maps, descent
        and flat-arrow statements and the displayed short comparison arguments.
        The general finite-correspondence and Suslin comparison foundations,
        moving/localization theorem and homotopy-invariance proof remain
        imported, not reconstructed. Only flat maps on a fixed étale site and
        open restriction on a fixed Zariski site are used; no coherent nonflat
        pullback is asserted."
    - title: The Stacks Project, Cohomology of unbounded complexes
      url: https://stacks.math.columbia.edu/tag/07A5
      locator: Section 21.19, opening paragraph, additive-functor clause (2),
        computation formula and object-sections example (2), before Lemma
        21.19.1
      statement: For a ringed site, every complex of module sheaves admits a
        K-injective replacement functorial in that complex. Right derived
        additive functors are computed by applying the functor to that
        replacement; in particular this applies to evaluation at each object.
      hypotheses: A ringed site with fixed size bounds. Apply to the constant integer
        ring sheaf on the fixed small Zariski site, whose modules are abelian
        sheaves as specified in the local site-derived supplier.
      reading_limits: "Historical reading record retained from the preceding repair;
        these passages were not reread in this geometry-only round: Read these
        opening assertions and the two indicated clauses during this repair. The
        functorial replacement existence theorem cited there is imported, not
        reconstructed; later base-change and torsion assertions are not used."
    - title: The Stacks Project, Lemma 13.31.7
      url: https://stacks.math.columbia.edu/tag/070K
      locator: Lemma 13.31.7, statement and full proof, particularly the K-injective
        quasi-isomorphism sentence
      statement: If every complex in an abelian category has a K-injective
        replacement, right derived functors exist as stated. Its proof
        explicitly records that a quasi-isomorphism between K-injective
        complexes is a chain homotopy equivalence.
      hypotheses: An abelian category; K-injective replacements for the
        derived-functor existence assertion. The homotopy-equivalence assertion
        concerns a quasi-isomorphism between K-injective complexes.
      reading_limits: "Historical reading record retained from the preceding repair;
        these passages were not reread in this geometry-only round: Read the
        complete statement and short proof during this repair. Import its
        homotopy-equivalence consequence; the cited antecedent Lemma 13.31.2 is
        not independently reconstructed."
    - title: The Stacks Project, Morphisms of finite type
      url: https://stacks.math.columbia.edu/tag/01T0
      locator: Section 29.15, Definition 29.15.1 and Lemmas 29.15.3, 29.15.5 and
        29.15.6 (tags 01T3, 01T5, 01T6)
      statement: Finite-type morphisms compose; immersions are locally of finite type;
        a finite-type scheme over a Noetherian scheme is Noetherian.
      hypotheses: Morphisms of schemes; for the last assertion the target is
        Noetherian and the morphism is finite type. Apply to objects T -> S ->
        Spec(k), and to open immersions into S.
      reading_limits: Read the displayed definition, statements and short proofs at
        the indicated locators in the served tagged HTML in this round. The
        affine-locality, finite-type algebra and Hilbert-basis inputs cited in
        those proofs remain imported. No assertion of finite type over the prime
        field is used.
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Section 28.5, opening ring convention, Definition 28.5.1 and Lemmas
        28.5.2–28.5.4
      statement: Noetherian rings satisfy ACC on ideals. Locally Noetherian schemes
        have Noetherian affine neighbourhoods; Noetherian schemes are
        additionally quasi-compact. Open subschemes remain locally Noetherian,
        immersions into a locally Noetherian scheme are quasi-compact, and
        locally Noetherian schemes are quasi-separated.
      hypotheses: Schemes; the immersion assertion assumes a locally Noetherian
        target. Apply to S and to finite-type k-schemes, since a field has only
        the ideals 0 and k.
      reading_limits: Read the opening convention, definition and the statements and
        short arguments of Lemmas 28.5.2–28.5.4 in the served tagged HTML in
        this round. Their ring-locality and topological inputs remain imported;
        no reconstruction of those foundations is claimed.
    - title: The Stacks Project, Cancellation law for étale morphisms
      url: https://stacks.math.columbia.edu/tag/02GW
      locator: Lemma 29.37.19 (tag 02GW), statement and short proof; older chapter
        numbering 29.36.18
      statement: Any S-morphism between two schemes étale over S is étale.
      hypotheses: Schemes T and T′ étale over the same base S, and a morphism T -> T′
        over S. No finiteness or separatedness hypothesis is needed for this
        cancellation assertion.
      reading_limits: Read the tagged statement and its current short proof reducing
        to unramified cancellation in this round. The antecedent cancellation
        theorem is imported, not reconstructed. Apply only to morphisms in the
        specified fixed étale site.
external_input: true
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:thm-smooth-morphisms-stable-base-change-composition](https://alphabetamath.cc/item/thm-smooth-morphisms-stable-base-change-composition)
- [math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition)
- [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)
- [` Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes, served v1 HTML · §1.6; comparison (1.9), Corollary 1.11; proof of Theorem 6.3, equation (6.4) and its surrounding fixed-site qualification; Definition 7.1, Theorem 7.5, Definition 7.8 and Remark 7.9 `](https://arxiv.org/html/2508.09915v1)
- [` Mazza–Voevodsky–Weibel, Lecture notes on motivic cohomology, Rutgers served PDF · Definition 2.14 (printed p.16), Definition 3.1 and Lemma 3.2 (p.21); p.126 and Theorem 16.7 (pp.126–127); Definition 17.1 and Properties 17.4(1) (pp.135–136); Lemma 19.4 and the small-site construction (pp.159–160), Theorem 19.8, Proposition 19.12, Definition 19.13 and Example 19.14 (pp.161–163). PDF page = printed page + 12. `](https://sites.math.rutgers.edu/~weibel/MVWnotes/prova-hyperlink.pdf)
- [` The Stacks Project, Cohomology of unbounded complexes · Section 21.19, opening paragraph, additive-functor clause (2), computation formula and object-sections example (2), before Lemma 21.19.1 `](https://stacks.math.columbia.edu/tag/07A5)
- [` The Stacks Project, Lemma 13.31.7 · Lemma 13.31.7, statement and full proof, particularly the K-injective quasi-isomorphism sentence `](https://stacks.math.columbia.edu/tag/070K)
- [` The Stacks Project, Morphisms of finite type · Section 29.15, Definition 29.15.1 and Lemmas 29.15.3, 29.15.5 and 29.15.6 (tags 01T3, 01T5, 01T6) `](https://stacks.math.columbia.edu/tag/01T0)
- [` The Stacks Project, Noetherian schemes · Section 28.5, opening ring convention, Definition 28.5.1 and Lemmas 28.5.2–28.5.4 `](https://stacks.math.columbia.edu/tag/01OU)
- [` The Stacks Project, Cancellation law for étale morphisms · Lemma 29.37.19 (tag 02GW), statement and short proof; older chapter numbering 29.36.18 `](https://stacks.math.columbia.edu/tag/02GW)


## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$, large enough for the scheme and site data, and use larger bounds for their categories. Existence of these bounds is a standing hypothesis, not a consequence of Choice. Let $k$ be perfect, let $F$ be its prime subfield, and let $r\in\mathbb Z_{\geq0}$. Let $C_{r,F}$ be the cdh-local left Kan extension of classical weight-$r$ motivic cohomology from smooth $F$-schemes to qcqs $F$-schemes, using the canonical field-model construction. Here qcqs means quasi-compact and quasi-separated; the left Kan extension and cdh sheafification are those of BEM Definitions 7.1 and 7.8 and Remark 7.9, in the derived infinity-category, with their specified units.

Fix a smooth separated finite-type $k$-scheme $S$. Write $\mathcal E_S$ for the category of finite-type separated étale $S$-schemes, with morphisms over $S$ and the topology of jointly surjective étale covering families; it is the indicated part of the small étale site $S_{\mathrm{et}}$. Write $\operatorname{Open}(S)$ for its subcategory of open subschemes and inclusions, equipped, when used as a site, with the usual open-cover topology. All these categories are taken within the fixed size bounds.

Write $\mathrm D(\mathbb Z)$ for the derived infinity-category obtained from unbounded complexes of abelian groups by inverting quasi-isomorphisms, retaining mapping spaces and higher homotopies. Its homotopy category is the ordinary unbounded derived category. A presheaf on $\mathcal E_S$ means a functor from its opposite category, regarded through its ordinary nerve, to this enhanced target. An equivalence of presheaves means an equivalence in $\operatorname{Fun}(\mathcal E_S^{\mathrm{op}},\mathrm D(\mathbb Z))$, including coherent restriction maps, and the analogous convention applies to the open diagram. Thus inverses below are taken in the functor infinity-category. Use the unnormalized Bloch complex $z^r(U,\bullet)$ with its proper-face admissibility and alternating face differential. Homological degree $n$ is cochain degree $-n$ before shifting; for a cochain complex $A$, $A[m]^q=A^{q+m}$ and $d_{A[m]}^q=(-1)^m d_A^{q+m}$. Étale cycle arrows are flat pullbacks; open arrows are restriction of cycles.

There is an equivalence of presheaves on this fixed site
$$C_{r,F}|_{\mathcal E_S}\simeq z^r(-,\bullet)[-2r].$$
In particular, the restriction to the entire diagram of opens of this fixed $S$ is coherent, and each cycle arrow is actual open restriction. On that open diagram it also identifies $C_{r,F}$ with $U\mapsto R\Gamma_{\mathrm{Zar}}(U,\mathbb Z(r)|_{S_{\mathrm{Zar}}})$. Here $\mathbb Z(r)$ is the classical motivic complex of MVW Definition 3.1, restricted to the fixed small Zariski site; derived sections mean right derived evaluation on its abelian sheaves. They can be computed by one K-injective replacement on this fixed site followed by evaluation at each open, with the resulting restriction maps. K-injective means that every map from an acyclic complex is nullhomotopic. The equivalence may depend on $S$ and $r$; no compatibility between choices for different ambients or weights, or multiplicative compatibility, is asserted. There is no finite-generation requirement on $k/F$.

## External input

- Import BEM's explicit equivalence (6.4) on each fixed smooth ambient's étale site, with its derived infinity-category convention in §1.6. The field-model identification and equal-characteristic comparison are the canonical maps of the supplied field model and BEM (1.9), Corollary 1.11, Theorem 7.5 and Remark 7.9.
- Import the MVW coefficient complex of Definition 3.1 and Lemma 3.2 and the Suslin–Friedlander complex $\mathbb Z_{SF}(r)$ defined on printed p.126. The latter is the equidimensional-cycle model used as the intermediate complex in Theorems 16.7 and 19.8; its construction is imported, not independently defined by the notation. Import the fixed-site chain maps, flat cycle functoriality, Zariski descent and homotopy invariance at the exact locators in reference 1. The chain convention is the unnormalized alternating-face convention of MVW Definitions 2.14 and 17.1, agreeing with the supplied local Bloch definition. The deep source theorems are not reconstructed here.
- Import functorial K-injective replacement on a fixed ringed site from reference 2, using the constant integer sheaf as in the site-derived supplier. Reference 3 supplies that a quasi-isomorphism between K-injective complexes is a chain homotopy equivalence. These precise premises let the local application evaluate the coefficient zigzag as actual coherent diagrams; the resolution existence proof is not reconstructed.

- References 4 and 5 import finite-type composition, preservation of Noetherianity over a Noetherian base, local finite type of immersions, and the Noetherian open-immersion and quasi-separatedness assertions. Reference 5 also specifies the Noetherian conventions. Reference 6 imports étale cancellation for morphisms over a common base. Their applications to the specified site are recorded in [F5]; their cited antecedents are not reconstructed.

The imported comparison results and their proofs are literature-derived. The numbered proof below is a locally authored application argument: it composes the supplied comparisons, restricts them to the fixed open diagram, and inverts equivalences in the corresponding functor categories. The separate `local_argument_provenance: ai-altered` records this local composition; the literature-derived proof provenance records the imported results and does not attribute the application argument as written to either source.

## Facts & Assumptions
**Given:** The hypotheses, fixed sites, coefficient complexes and derived convention of the statement.

**Goal:** Compare the whole fixed-site diagram before taking cohomology or fibers.

[F0] [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) supplies the smooth finite-type cycle complex, proper-face convention and its unnormalized differential. [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) supplies cochain shifts and the ordinary derived category; [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input), applied to the ring $\mathbb Z$, supplies its enhanced localization and functor-category universal property. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) supplies scheme sites; [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes), [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field) supply the remaining formulation conditions. Smoothness and finite type over $k$ refer to the structure morphism to $\operatorname{Spec}k$. The particular site categories and the meaning of coherent presheaf equivalence are specified in the Statement.

[F1] [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model) supplies the canonical field-model identification for every field $F$; BEM Corollary 1.11 supplies the natural equivalence from that absolute cdh functor to its A¹ theory on equal-characteristic schemes.

[F2] BEM Theorem 6.3 proof, equation (6.4), supplies an equivalence of presheaves of complexes on the fixed $S_{\mathrm{et}}$ in each nonnegative weight. Its target is the enhanced derived category of BEM §1.6, not merely the ordinary category of cohomology groups.

[F3] MVW Theorems 16.7 and 19.8, Proposition 19.12, Properties 17.4(1) and Example 19.14 supply the actual fixed-site chain maps, descent and projection flat-pullback quasi-isomorphism recorded in reference 1. Their coefficient and cycle conventions are the imported constructions specified in External input.

[F4] [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) applies to the small Zariski site of $S$ just specified, and supplies K-injective derived evaluation of complexes of abelian sheaves. Reference 2 explicitly supplies replacement functorial in the sheaf complex, and reference 3 supplies that quasi-isomorphisms between K-injective complexes are chain homotopy equivalences. Computing evaluation on the fixed site retains its open restriction maps; it does not choose unrelated coefficient objects on different opens. The maps and descent comparisons to which this construction is applied are the actual sheaf-complex maps in [F3].

[F5] Étale morphisms are smooth and flat by [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes). Smoothness composes by [math:thm-smooth-morphisms-stable-base-change-composition](https://alphabetamath.cc/item/thm-smooth-morphisms-stable-base-change-composition) under [A1], and separatedness composes by [math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition). Finite type composes by reference 4. A field is Noetherian since its only ideals are $0$ and itself; references 4 and 5 therefore make every finite-type $k$-scheme Noetherian and qcqs. Here Noetherian means locally covered by spectra of rings satisfying ACC on ideals, and quasi-compact, as in reference 5. Every open immersion into $S$ is quasi-compact by reference 5 and locally of finite type by reference 4, hence finite type; it is separated since its diagonal is an isomorphism, and étale by [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion). Thus every open of $S$ belongs to $\mathcal E_S$. Finally, reference 6 makes every $S$-morphism between objects of $\mathcal E_S$ étale, hence flat, so the flat cycle maps in [F3] apply to its arrows.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specify the foundational convention inherited by the imported enhancement, site-resolution and comparison constructions. Choice is used through these imported existence constructions in steps 1.1–1.2 and the smooth-composition supplier of [F5] in step 1.1; the displayed compositions require no additional objectwise choices. Universe existence is separately assumed as in the Statement.

## Proof
1.1 Restrict the canonical field-model equivalence and canonical equal-characteristic comparison to $\mathcal E_S$. For an object $T\to S$, [F5] makes $T\to\operatorname{Spec}k$ smooth, separated and finite type by composition; it is Noetherian and qcqs. Its $k$-structure makes it equal-characteristic. Thus the cycle convention of [F0] and both canonical comparisons apply. By [F5], all site arrows are flat and every open of $S$ lies in the site. Compose with the equivalence of presheaves of complexes (6.4) on this same fixed site. In the enhanced target of [F0] and [F2], this gives the displayed equivalence in the functor category, including all étale restriction maps; it is not an inference from separate objectwise equivalences. [A1, F0, F1, F2, F5]

1.2 Restrict to $\operatorname{Open}(S)$. On the small Zariski site use the actual zigzag $\mathbb Z(r)\simeq\mathbb Z_{SF}(r)\to z^r(-\times\mathbb A^r,\bullet)[-2r]\leftarrow z^r(-,\bullet)[-2r]$, with the imported models and unnormalized convention of [F3]; here $\mathbb A^r=\operatorname{Spec}k[t_1,\ldots,t_r]$. The first two comparisons are sheaf quasi-isomorphisms. Apply the functorial sheaf-complex replacement in [F4] to this fixed-site zigzag, and evaluate on all opens. Quasi-isomorphisms between the replacements are sheaf chain homotopy equivalences by [F4], so their evaluations are chain homotopy equivalences simultaneously on the open diagram. Proposition 19.12 supplies the natural maps from cycle values to their derived sections and makes them quasi-isomorphisms on every open. Projection flat pullback is an objectwise quasi-isomorphism by Properties 17.4(1). These are maps of diagrams, since the sheaf maps, descent units and flat pullbacks commute with open restriction; the objectwise quasi-isomorphisms therefore become equivalences in the enhanced functor category. This identifies the MVW coefficient functor on all opens of $S$ with the cycle functor on that same diagram. [A1, F0, F3, F4]

2.1 Invert these equivalences only in their fixed-site functor categories and compose them. Inverses of natural equivalences are natural equivalences, and restriction to any open subdiagram preserves them. This proves the classical-intermediate and actual-open-arrow assertions without choosing unrelated inverses at individual objects or requiring compatibility with another ambient. [step 1.1, step 1.2] ∎
