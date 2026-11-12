---
title: Actual supported Chern operation and its smooth comparison
status: published
research_item: lem-author-d026a7b99ace-supported-chern-map
dependency_level: 28
sources:
  references:
    - title: Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory
        without Homotopy Invariance, 2019 journal version
      url: https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf
      source_sha256: 6736b9710dd4d8d5fd89dfa2863a72cf90fc274ba47a45651fc7024209b4dcbf
      locator: Section 1.1, pp. 250–251; section 1.4, p. 254; section 5, pp. 269–272,
        especially (5.3.1); section 6, pp. 272–273, Proposition 6.1(1)
      reading_limits: Historical source-reading and hash records are retained from the
        existing item. This maintenance read the current universal-operation and
        qcqs Cartan supplier interfaces; the Asakura–Sato PDF was not reread or
        freshly authenticated. Its completion and support statements are
        recorded only under their native admissibility and geometric hypotheses.
        No admissibility of actual EM coefficients or native-to-EM comparison is
        claimed or used.
      statement: Positive-index stable universal Chern classes extend through the
        local Gillet completion; degree zero is separately constant one.
        Supported classes are natural in pairs.
      hypotheses: An admissible cohomology theory on the paper’s category of
        separated, Noetherian, universally catenary finite-dimensional schemes,
        with its specified local simplicial-sheaf models. Not a theorem here on
        all qcqs schemes.
    - title: Spitzweck, A commutative P¹-spectrum representing motivic cohomology over
        Dedekind domains, arXiv:1207.4078v3
      url: https://arxiv.org/pdf/1207.4078v3
      source_sha256: 7da11119650a216f3722152c6b2e6b6b9b9feb1b28bf1f1f335e7e4ab20c6e74
      locator: Theorem 9.16 and Lemma 9.17 (PDF page 77); Proposition 11.1 and Remark
        11.2 (PDF page 79)
      reading_limits: Historical reading record inherited from the existing generated
        item; this dependency-declaration maintenance does not assert fresh
        reading of that external source. Read the primary v3 PDF extraction of
        the named statements, their displayed proofs and Remark 11.2; no page
        images were inspected in this repair. The EM comparison comes from the
        declared integral-field and transport suppliers, not this paper alone.
        Deeper foundations were not reconstructed; retained source hash is
        historical.
      statement: Theorem 9.16 gives E-infinity-compatible residue-field base change;
        Lemma 9.17 gives field-extension base change. Proposition 11.1 gives the
        unique additive orientation, and Remark 11.2 its structured orientation
        map.
      hypotheses: For Theorem 9.16, a mixed-characteristic Dedekind domain and a
        closed point of positive residue characteristic; for Lemma 9.17, a field
        extension. Proposition 11.1 treats smooth schemes over
        mixed-characteristic Dedekind domains; Remark 11.2 also treats smooth
        field-schemes.
    - title: Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes,
        arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Introduction, pp. 2–3, especially the opening of Theorem 1.1
      reading_limits: Historical reading record inherited from the existing generated
        item; this dependency-declaration maintenance does not assert fresh
        reading of that external source. Read the primary v1 PDF extraction of
        the introduction, opening of Theorem 1.1 and its smooth-comparison
        clause. Used only to check scope and sheaf descent; neither the
        construction nor its proof was reconstructed.
      statement: For each nonnegative weight there is a finitary derived Nisnevich
        sheaf of motivic complexes on qcqs schemes over a prime field.
      hypotheses: Prime base field Q or F_p, qcqs schemes, and nonnegative weights.
        Restriction to an arbitrary field is supplied by the declared local
        motivic-complex interface.
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds,
        arXiv:2610.22679v1
      url: https://arxiv.org/abs/2610.22679v1
      locator: Scheme conventions p. 3; Definition 2.2 p. 4; Definition 2.7 p. 6;
        Corollary 6.9 proof p. 17
      reading_limits: Historical reading record inherited from the existing generated
        item; this dependency-declaration maintenance does not assert fresh
        reading of that external source. Read the frozen primary article
        extraction at pp. 3, 4, 6 and 17 for this repair. No new PDF image
        inspection, KM82 reading, or original-author defect adjudication. The
        declared support definition supplies the explicit shifted realization.
      statement: The article fixes qcqs field-schemes and its affine finite-type
        convention, defines motivic complexes and support notation, and reduces
        the Corollary 6.9 factor calculation to smooth point supports.
      hypotheses: Standing algebraically closed field, with the stated qcqs
        conventions; Corollary 6.9 concerns a normal affine threefold. The
        general any-field qcqs operation is supplied locally, not attributed to
        this article.
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [def-total-chern-class](item-def-total-chern-class)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [thm-author-d026a7b99ace-integral-field-model](item-thm-author-d026a7b99ace-integral-field-model)
- [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)
- [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)
- [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport)
- [lem-finite-projective-complements](item-lem-finite-projective-complements)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:thm-smooth-morphisms-stable-base-change-composition](https://alphabetamath.cc/item/thm-smooth-morphisms-stable-base-change-composition)
- [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)
- [lem-author-59b1a831fe59-neighborhood](item-lem-author-59b1a831fe59-neighborhood)
- [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata)
- [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs)
- [lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan](item-lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan)
- [` Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory without Homotopy Invariance, 2019 journal version · Section 1.1, pp. 250–251; section 1.4, p. 254; section 5, pp. 269–272, especially (5.3.1); section 6, pp. 272–273, Proposition 6.1(1) `](https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf)
- [` Spitzweck, A commutative P¹-spectrum representing motivic cohomology over Dedekind domains, arXiv:1207.4078v3 · Theorem 9.16 and Lemma 9.17 (PDF page 77); Proposition 11.1 and Remark 11.2 (PDF page 79) `](https://arxiv.org/pdf/1207.4078v3)
- [` Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 · Introduction, pp. 2–3, especially the opening of Theorem 1.1 `](https://arxiv.org/pdf/2309.08463v1)
- [` Fasel–Yakerson, Vector bundles on singular surfaces and threefolds, arXiv:2610.22679v1 · Scheme conventions p. 3; Definition 2.2 p. 4; Definition 2.7 p. 6; Corollary 6.9 proof p. 17 `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the motivic and perfect K-theory constructions. Let $k$ be any field, let $X$ be a quasi-compact quasi-separated $k$-scheme, and let $i\geq1$. The actual EM Chern classes admit natural pointed K-space operations
$$C_i:\Omega^\infty K(X)\longrightarrow\Omega^\infty\bigl(H\mathbb Z(i)_{\rm mot}(X)[2i]\bigr),$$
where $H\mathbb Z(i)_{\rm mot}(X)$ is the Eilenberg–Mac Lane spectrum of the supplied weight-$i$ cochain complex. Their global values on bundles are the supplied projective-relation classes. For affine $X$, their values on the specified perfect $K_0(X)$ agree with the supplied virtual-series classes. These assertions require no normality, noetherianity or dimension bound.

Let $x\in X$ be a closed point and put $U=X\setminus\{x\}$. Write $K(X/U)=\operatorname{fib}(K(X)\to K(U))$ and $M_i(X/U)=\operatorname{fib}(H\mathbb Z(i)_{\rm mot}(X)\to H\mathbb Z(i)_{\rm mot}(U))$. On non-quasi-compact opens use exactly the inverse-limit extensions over quasi-compact opens in the supplied support convention. Taking fibers of the pointed operations gives operations of pointed sets
$$c_{i,x}^{\rm fib}:\pi_0K(X/U)\longrightarrow H^{2i,i}_x(X),\qquad H^{2i,i}_x(X)=\pi_0\bigl(M_i(X/U)[2i]\bigr).$$
They commute with open restriction and forgetting support. If $U$ is quasi-compact, localization identifies $K(X/U)$ with the category-defined supported perfect K-spectrum $K_x(X)$; the resulting operation is denoted $c_{i,x}:K_{0,x}(X)\to H^{2i,i}_x(X)$. Under this hypothesis, restriction to every quasi-compact open neighbourhood of $x$ is an excision identification for both support theories. For a non-quasi-compact complement, only the declared fiber construction is used here, without claiming that localization comparison. Higher Chern operations are not asserted additive.

For the classical comparison assume additionally that $k$ is perfect and $x$ has a smooth affine finite-type open neighbourhood $V\subseteq X$. Restriction of the fiber operation to $(V,x)$ agrees, through the actual multiplicative coefficient comparison preserving the original Picard orientation, with the classical integral operation defined by transporting this actual EM operation through the inverse coefficient equivalence. Its bundle values are the classical projective-relation classes. For this smooth affine pair, the supplied integral-field comparison further identifies the transported operation with Navarro's independently constructed represented Chern operation on the same perfect-K source via its specified source comparison. This is a pointed natural homotopy on the restriction arrow $(V,V\setminus\{x\})$, hence identifies support fibers and forgetting support. This independent-endpoint assertion is confined to the stated smooth affine pair. When $U$ is quasi-compact this is also its identification by support excision. Use the size-bounded site of smooth qcqs schemes of finite presentation over $V$, with all $V$-morphisms and Zariski covers; its objects and relevant quasi-compact opens are smooth finite-type $k$-schemes. In the article's application, $k$ is algebraically closed in arbitrary characteristic, $X$ is a normal affine finite-type threefold, and $x$ is a smooth closed point on a three-dimensional component; one can choose $V$ of pure dimension three. The pointed construction is only for $i\geq1$; $c_0=1$ remains an unpointed global constant.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible site and universe bounds of the supplied constructions. These are inherited by the actual EM spectrum and orientation models, the sheaf K-space construction, the smooth coefficient comparison, the bundle and virtual Chern constructions, and the support/localization constructions below. These premises are used in steps 1.1–4.1; no additional choice principle is asserted.

[F1] [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) supplies the actual positive-index universal Chern operations by the reduced K-stack mapping-space construction, coherent affine extension, ordinary sheafification and the canonical source unit. It includes the full affine K-space comparison, actual coefficient and restriction naturality, and the inverse-limit extension on open complements. [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) and [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation) supply its actual EM ring model and Picard orientation over the qcqs base $X$. Its separately stated native Gillet completion formula is conditional on an admissible theory in the source category; it supplies no identification with the actual EM operation.

[F2] [lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport) defines the classical pointed perfect-K operation by inverse coefficient transport of the actual EM operation and supplies its natural comparison square and support fibers. That transport construction alone does not identify an independently constructed endpoint. [thm-author-d026a7b99ace-integral-field-model](item-thm-author-d026a7b99ace-integral-field-model) supplies the integral multiplicative, orientation-preserving coefficient comparison on smooth finite-type pairs over a perfect field. Its current Statement and Proof 3.1 separately identify Navarro's independently constructed represented operation in the smooth affine closed-point application, by a pointed natural homotopy before taking restriction fibers. This is the independent-endpoint clause used here; on the general smooth site retain the transported construction. [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison) fixes the ordinary Voevodsky/Bloch classical theory. These inputs are used only under the additional comparison hypotheses in the Statement.

[F3] [def-motivic-chern-classes](item-def-motivic-chern-classes), [def-total-chern-class](item-def-total-chern-class) and [prop-chern-whitney-identities](item-prop-chern-whitney-identities) specify the projective relation, normalization and actual virtual bundle coefficients. [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) identifies the specified affine perfect $K_0$ with the bundle group, by the same object classes, over every commutative unital ring.

[F4] [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface) identifies affine bundles with finite projective modules, preserving sums. The module assertion of [lem-finite-projective-complements](item-lem-finite-projective-complements) gives a finite projective complement over every ring. Only that assertion, not its separately locally noetherian Grothendieck-group clause, is used below; the affine object-class bridge supplies the bundle difference.

[F5] [def-cohomology-with-support](item-def-cohomology-with-support) fixes the unshifted support spectrum $M_i(X/U)$, its $[2i]$ shift, and the actual inverse-limit extension on non-quasi-compact opens. In particular $\pi_0(M_i(X/U)[2i])=H^{2i,i}_x(X)$. [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) supplies the category-to-fiber comparison and K-theory open descent/excision when the complement and neighbourhood are quasi-compact.

[F6] [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies derived Nisnevich descent for the actual EM complexes on all qcqs schemes over the prime field and, by restriction, over $k$. [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface) makes every Zariski open cover Nisnevich. Hence a cover by two quasi-compact opens has a homotopy-cartesian restriction square. [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers) turns that square into motivic support excision; it is not inferred merely from the existence of a fiber.

[F7] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) defines $K(X)=\mathbb K(\operatorname{Perf}(X))$, using the specified enhanced category of perfect complexes, and $K_i(X)=\pi_iK(X)$. For the singleton support, $K_x(X)=\mathbb K(\operatorname{Perf}_{\{x\}}(X))$ and $K_{0,x}(X)=\pi_0K_x(X)$; the supported category consists of perfect complexes whose cohomology stalks vanish off $x$. Its inclusion gives forgetting support. This definition supplies the objects in the Statement and steps 1.1–3.1; a category-to-fiber identification still requires [F5].

[F8] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies coherent spectra, their mapping spaces, zero object, homotopy limits, shifts and homotopy groups. Here $\Omega^\infty E=\operatorname{Map}_{\mathrm{Sp}}(\mathbb S,E)$, based at the zero map, and $\pi_0$ of a space is its set of connected components. A pointed operation preserves the chosen zero basepoint with its specified homotopy; a homotopy fiber includes that homotopy. The coherent Eilenberg realization and its shift convention are those already fixed by [F5]. Since maps into a limit are compatible cones, this mapping-space definition preserves all the limits used in step 2.2; shifts preserve limits since they are equivalences.

[F9] The scheme inputs use [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). In particular, a $k$-scheme has a specified morphism to $\operatorname{Spec}k$, qcqs means quasi-compact and quasi-separated, and affineness means an isomorphism to a spectrum with its structure sheaf. A closed point means that its singleton is closed in the underlying topology. Quasi-compactness and quasi-separatedness of a morphism have the inverse-image and affine-intersection meanings of [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism). Finite type and local finite presentation have the chart meanings of [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) and [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism); for the stated site, finite presentation means local finite presentation together with quasi-compactness and quasi-separatedness of the structural morphism. Smoothness is the local-finite-presentation, flatness and geometric-regularity condition of [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes). A perfect field has separable irreducible polynomials, as in [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field), and algebraically closed has the polynomial-root meaning of [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field). [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) specifies sites and sheaves; here the covers are Zariski open covers and the morphisms are all morphisms over the stated base. The universe closure convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). Fix compatible nested universes with the scheme data in the smaller one and $\omega$ in that universe, as required by [F1]; their existence is assumed separately from Choice.

[F10] [math:thm-smooth-morphisms-stable-base-change-composition](https://alphabetamath.cc/item/thm-smooth-morphisms-stable-base-change-composition) supplies composition of smooth morphisms. [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target) supplies affine locality of finite type on source and target. [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs) makes every open of a finite-type field-scheme quasi-compact and supplies its qcqs domain. [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata) supplies the pure clopen union $X_3$ in the article specialization, with normality meaning integrally closed domain local rings and dimension meaning lengths of strict irreducible-closed chains. Pure dimension three means that every irreducible component has dimension three. Apply [lem-author-59b1a831fe59-neighborhood](item-lem-author-59b1a831fe59-neighborhood) to $X_3$ to obtain the required smooth affine finite-type pure three-dimensional neighbourhood of $x$. Only these geometric conclusions are used from those last two suppliers; their K-class conclusions are not needed here.

[F11] [lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan](item-lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan) gives coefficientwise Cartan for these actual ordinary operations on every qcqs field-scheme, before optional hypercompletion. After the canonical source unit and passage to components, $c_t^{\rm perf}:K_0(X)\to1+\prod_{j\geq1}H^{2j,j}_{\rm mot}(X,\mathbb Z)t^j$ is a homomorphism to multiplicative formal series. Its product is finite coefficient convolution, and its inverse is determined recursively. Thus the affine calculation below uses the original coefficient values and their actual Cartan identity. It does not apply the conditional native completion formula to EM coefficients.

**Given:** The qcqs field-scheme $X$, the positive integer $i$, the closed point when supports are used, and [A1]. For the localization/excision assertions assume the complement is quasi-compact. For the classical comparison assume the perfect field and smooth affine finite-type neighbourhood $V$ in the Statement.

**Goal:** Construct the actual operations and their support, restriction and classical comparison maps with the stated hypotheses.

## Proof
1.1 Fix $i\geq1$. Use the EM P¹-ring model and Picard orientation of [F1] over the qcqs base $X$. The universal supplier gives the actual operation at every qcqs scheme, with its coherent restriction diagram. The universal bundle classes are the projective-relation classes of [F3]; their stability under $E\mapsto E\oplus\mathcal O$ follows from actual Whitney. Apply the ordinary space-valued sheafification factorization in [F1], evaluate its pointed Chern map at $X$, and precompose with the canonical unit from the actual perfect K-space. Its coefficient sheaf has the actual value $\Omega^\infty(H\mathbb Z(i)_{\rm mot}(X)[2i])$ by that same supplier. This uses the ordinary sheaf map before the optional hypercompletion, so no equality with hypercomplete sections is required. This gives the displayed maps $C_i$ and their actual restriction arrows; the target is the shifted Eilenberg spectrum in the Statement. Their values on bundles are the original classes. The specified inputs are the full affine comparison and the ordinary sheafification unit; the proof uses neither unbounded K-hyperdescent nor global bundle representation. [A1, F1, F3, F7, F8, F9, construct]

2.1 On affine $X$, [F3] represents each perfect class as $[P]-[Q]$ for actual bundles. Apply [F4] to obtain a finite projective complement $Q^{\prime}$ with $Q\oplus Q^{\prime}\cong\mathcal O_X^N$. The same class is $[P\oplus Q^{\prime}]-[\mathcal O_X^N]$. By [F11], its actual perfect Chern series is $c_t^{\rm perf}([P\oplus Q^{\prime}])c_t^{\rm perf}([\mathcal O_X^N])^{-1}$. Step 1.1 identifies the values on these bundles with their original bundle series, and [F3] gives $c_t(\mathcal O_X^N)=1$. Hence the actual series on the difference equals $c_t(P\oplus Q^{\prime})$. The actual Whitney identity in [F3] gives $c_t(Q)c_t(Q^{\prime})=1$ and $c_t(P\oplus Q^{\prime})=c_t(P)c_t(Q)^{-1}$, with inverse understood formally. Thus every positive coefficient is the prescribed virtual-series value. Varying ranks are handled on the finite clopen rank strata as in [F3]; no global bundle-difference representation on nonaffine schemes is used. This argument uses the ordinary actual Cartan identity and introduces no native-to-EM completion comparison. [A1, F1, F3, F4, F7, F11, step 1.1]

2.2 If $U$ is not quasi-compact, take the inverse limits of the natural operations over its quasi-compact open subsets, exactly as prescribed in [F1] and [F5]. These subsets are qcqs by quasi-separatedness of $X$. By the mapping-space limit property and shift equivalence in [F8], $\Omega^\infty$ preserves these limits; the resulting source and target spaces are those of the declared extensions. Apply these natural pointed maps to the restriction arrow from $X$ to $U$ and take homotopy fibers over zero. The target is $\Omega^\infty(M_i(X/U)[2i])$, whose $\pi_0$ is $H^{2i,i}_x(X)$ by [F5]. Taking $\pi_0$ defines $c_{i,x}^{\rm fib}$. The natural fiber projections give the support-to-global square; compatible restrictions give open naturality. If $U$ is quasi-compact, [F5] also identifies the source with $K_x(X)$ and its support-forgetting map. This yields the asserted $c_{i,x}$ on the category-defined group. No additive spectrum map for the individual higher Chern operations is asserted. [A1, F1, F5, F7, F8, F9, step 1.1]

3.1 Assume $U$ quasi-compact and let $W\subseteq X$ be a quasi-compact open containing $x$. Then $X=U\cup W$, and $U\cap W=W\setminus\{x\}$ is quasi-compact by quasi-separatedness: take finite affine covers of $U$ and $W$; their pairwise intersections are quasi-compact and form a finite cover of $U\cap W$. All these open subschemes inherit quasi-separatedness from $X$, since their affine opens are affine opens of $X$. The K-localization/open-descent supplier in [F5] and the actual derived motivic descent in [F6] therefore apply to the same four qcqs opens. For the motivic square, let $R_O$ be the full category of arrows to $X$ factoring through an open $O$, and let $R=R_U\cup R_W$. This is the covering sieve of the two-open Nisnevich cover in [F6], with $R_U\cap R_W=R_{U\cap W}$. Each composable string in $R$ lies wholly in one piece, since all arrows before its last object factor through the same open as that object. Thus a coherent cone on the opposite restriction diagram is precisely a pair of cones agreeing on the intersection. Each $R_O$ has terminal object $O\hookrightarrow X$, so its opposite-diagram limit is the actual coefficient value on $O$. The supplied covering-sieve descent gives the homotopy pullback square for the complexes; the realization fixed in [F5] preserves it. The conditional excision lemma of [F6] identifies the support fibers on $X$ and $W$; for K-theory these are also the category-defined support spectra by [F5]. Naturality of step 2.2 gives the commuting squares of supported Chern operations under these excision equivalences, compatible with forgetting support. [A1, F5, F6, F7, F8, F9, step 2.2]

4.1 Under the additional classical-comparison hypotheses, every object $Y$ of the stated site is smooth over $k$ by smooth composition in [F10]. By affine locality in [F10], affine target charts in $V$ have finitely generated $k$-coordinate algebras. The finite-presentation source charts have finitely many generators over those algebras, and the two finite lists together generate over $k$, so $Y$ is locally of finite type over $k$. Since $Y$ is quasi-compact, it is finite type over $k$ by [F9]. The same applies to its quasi-compact opens, by restricting such charts. In particular $V\setminus\{x\}$ is quasi-compact by [F10] and smooth finite type over $k$. Thus [F2] applies naturally to the coefficient restriction diagram on $(V,x)$. Write $e_i:Y_i^{\rm cl}\simeq Y_i^{\rm EM}$ for its pointed coefficient equivalence, where these are the shifted Eilenberg coefficient spaces in [F2], and let $C_i^{\rm cl}=e_i^{-1}C_i$ as a pointed natural transformation on this smooth site. Its inverse equivalence includes the natural inverse homotopies, so $e_iC_i^{\rm cl}\simeq C_i$ on the entire restriction arrow. Taking fibers gives the stated support comparison. Preservation of products and the actual Picard first class identifies the bundle values with the classical projective-relation classes. For Navarro's independent endpoint, now use the separate smooth affine pair clause of the integral-field supplier in [F2]. It supplies a pointed natural homotopy $e_iN_i\simeq C_i$ on the same restriction diagram, where $N_i$ is Navarro's independently constructed represented operation on the perfect-K source via that supplier's specified source comparison. The checked hypotheses are precisely the perfect field, smooth affine finite-type $V$, its closed point $x$, positive index and compatible bounds; the punctured open was checked above. Taking fibers of this one supplied homotopy identifies the actual supported operation with that endpoint and preserves the fiber projections. This comparison uses the independent map-comparison clause, rather than agreement of bundle coefficients alone. No independent endpoint on arbitrary objects of the relative smooth site is asserted. By step 2.2 this is the restriction of the constructed operation; when $U$ is quasi-compact, step 3.1 makes it the asserted excision identification. In the article specialization, algebraic closedness makes each irreducible nonconstant polynomial linear and therefore separable, so $k$ is perfect by [F9]. Every open of the finite-type $X$, in particular $U$, is quasi-compact by [F10]. Its normal components give the pure clopen union $X_3$ containing $x$; the neighbourhood supplier of [F10], with $d=3$, gives a smooth affine finite-type pure three-dimensional neighbourhood $V$ inside $X_3$ and hence inside $X$. Hence the article's $i=3$ setting satisfies the geometric hypotheses of this transport comparison without narrowing the general qcqs construction. In particular the supplied Navarro comparison applies on this smooth affine point pair; the actual operation on the singular ambient $X$ is related to it by the already proved open restriction and support excision, without extending the smooth coefficient equivalence to $X$. The same actual Picard operation is compared throughout; the name of a tautological line alone introduces no extra sign. [A1, F1, F2, F3, F5, F9, F10, step 1.1, step 2.2, step 3.1] ∎

## Index convention
The ordinary total-series constant is $c_0=1$. It is unpointed and is not asserted to give an additive-target support-fiber operation. The supported target in step 2.2 is the fiber of $\mathbb Z(i)_{\rm mot}[2i]$ under restriction; its zeroth homotopy is $H^{2i,i}_x(X)$ in the declared cohomological convention.

## External input
[Asakura–Sato](https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf), reference 0, records the conditional native Gillet completion and support formalism for an admissible theory on its specified geometric category. The actual EM operations here are supplied by [F1], and their affine virtual-class calculation uses [F11]. No admissibility or native-to-EM completion comparison is imported from this paper.

[Spitzweck v3](https://arxiv.org/pdf/1207.4078v3), reference 1, supplies the recorded field base-change and orientation background. The actual multiplicative EM comparison preserving the specified Picard operation is the declared input [F2]. Calling the tautological line $\mathcal O(-1)$ alone does not determine an extra sign for the dual line.

[Elmanto–Morrow v1](https://arxiv.org/pdf/2309.08463v1), reference 2, states prime-field qcqs derived Nisnevich sheafhood. The actual enhanced restriction to $k$-schemes used in [F6] is supplied by the declared motivic-complex item.

The [original article](https://arxiv.org/abs/2610.22679v1), reference 3, supplies context for the conventions, support notation and point-support application. The explicit shifted convention here comes from [F5]; the historical source-indexing finding is retained without fresh author-defect adjudication. The factor-two calculation and KM82 proof are not imported into this operation-construction lemma.

## Source use and reading limits
This maintenance read the current assigned body and its actual supplier interfaces, including the ordinary Cartan identity, the universal supplier's conditional native clause, and the integral-field supplier's new independent Navarro comparison. The latter's supporting comparison statement and definitions were inspected to check its source, perfect-field smooth-pair scope and pointed restriction-arrow homotopy. The earlier readings of external references 0–3 are retained as historical records; those PDFs were not reread for this repair, and no fresh page-image or source-hash authentication is claimed. The operation construction, affine coefficient calculation, support-fiber argument and application of the supplied Navarro comparison are local compositions of declared inputs. No new proof of the independent comparison or independent acceptance is asserted.
