---
title: Integral oriented field coefficient comparison with actual Picard and
  support maps
status: published
research_item: thm-author-d026a7b99ace-integral-field-model
dependency_level: 27
sources:
  references:
    - title: Spitzweck, A commutative P¹-spectrum representing motivic cohomology over
        Dedekind domains, arXiv:1207.4078v3
      url: https://arxiv.org/pdf/1207.4078v3
      locator: Lemma 6.6/Theorem 6.7, pp.55–56; Theorem 9.16/Lemma 9.17, p.77;
        Proposition 11.1/Remark 11.2, p.79
      reading_limits: "Historical incoming source-reading record, retained without
        fresh primary-source credit: Historical reading record retained from the
        incoming item; adjudicate-b754cb48695a read the current item and used
        supplier interfaces, without fresh reading of this external source or
        independent acceptance. For this adjudication, read the cached primary
        Spitzweck-primary-extract.txt at original PDF pp.3–4,55–56,77,79,
        including the product statement, Lemma 6.6/Theorem 6.7 and the displayed
        specialization and orientation proofs. Opened the live v3 PDF and
        checked Theorem 9.16/Lemma 9.17 and Proposition 11.1/Remark 11.2 against
        those passages. The deeper cited product and specialization foundations
        are imported through the primary-input supplier, not reconstructed. No
        whole-paper reading, fresh acceptance or separate edition is claimed.
        Current consumer-8588e1795ca8 maintenance read the assigned body and
        checked its current declared supplier contracts, including the
        conditional native clause and actual mapping-space construction. No
        fresh primary-source retrieval, reconstruction of imported foundations,
        independent acceptance or library audit is claimed."
      statement: The field cycle model has compatible products and bonding maps.
        Specialization respects E-infinity structures; field-extension pullback
        is an isomorphism. The mixed-characteristic orientation is unique and
        additive, classifies the tautological line, and pulls back to other
        bases; Remark 11.2 supplies its canonical E-infinity factorization.
      hypotheses: Use the perfect-field product scope of Theorem 6.7. Theorem 9.16
        starts with a mixed-characteristic Dedekind domain and a
        positive-characteristic closed residue point; Lemma 9.17 allows any
        field extension. Proposition 11.1 starts with a smooth scheme over such
        a Dedekind domain; the paragraph after its proof transports the
        orientation by pullback. It is not stated there as a field comparison
        theorem.
    - title: Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes,
        arXiv:2508.09915v1
      url: https://arxiv.org/html/2508.09915v1
      locator: Lemma 4.33 and Construction 4.35/(4.36); Theorem 4.39(1),(4); Theorem
        7.5/Remarks 7.6,7.9–7.10; Theorem 7.12(1)–(2)/(7.14); Corollaries 1.11
        and 9.7/(9.8)
      reading_limits: "Historical incoming source-reading record, retained without
        fresh primary-source credit: Historical reading record retained from the
        incoming item; adjudicate-b754cb48695a read the current item and used
        supplier interfaces, without fresh reading of this external source or
        independent acceptance. For this adjudication, opened the primary HTML
        and read Lemma 4.33 with its determinant argument, Construction 4.35,
        Theorem 4.39(1),(4) with its extension explanation, Theorem 7.5 and
        Remarks 7.6,7.9–7.10, Theorem 7.12(1)–(2), Corollary 1.11, and Corollary
        9.7 with its proof. These readings check the stated constructions,
        scopes and application; deeper proofs and the categorical foundations
        remain imported through the primary-input supplier. Retain the supplied
        HTML-version qualification: the cached HTML displays August 24, 2026
        despite the v1 URL; no identity with an unread PDF is asserted. Formula
        (6.4) is not used for multiplicativity. No new proof acceptance is
        claimed. Current consumer-8588e1795ca8 maintenance read the assigned
        body and checked its current declared supplier contracts, including the
        conditional native clause and actual mapping-space construction. No
        fresh primary-source retrieval, reconstruction of imported foundations,
        independent acceptance or library audit is claimed."
      statement: The determinant/edge construction specifies the first-Chern map and
        its extension. The lisse theories agree Nisnevich-locally across bases,
        also as filtrations; cdh sheafification gives the field identification.
        A multiplicative filtered cdh-to-represented comparison exists and is an
        equivalence in equal characteristic. The unit induces integral
        E-infinity zero-slice equivalences compatible with base change.
      hypotheses: Construction 4.35 requires a regular Noetherian base. Theorem 7.5
        allows a field or mixed-characteristic Dedekind base; Theorem 7.12 and
        Corollary 9.7 use qcqs schemes. Corollary 1.11 requires equal
        characteristic. Apply only on the fixed smooth field site; invert no
        prime.
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)
- [lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection)
- [lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square)
- [lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport)
- [lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport)
- [thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)
- [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-regular-sequence-on-a-module](https://alphabetamath.cc/item/def-regular-sequence-on-a-module)
- [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)
- [math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)
- [math:lem-dual-locally-free-and-base-change](https://alphabetamath.cc/item/lem-dual-locally-free-and-base-change)
- [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs)
- [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)
- [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)
- [lem-consumer-58c9d7aa5419-navarro-em-smooth-comparison](item-lem-consumer-58c9d7aa5419-navarro-em-smooth-comparison)
- [` Spitzweck, A commutative P¹-spectrum representing motivic cohomology over Dedekind domains, arXiv:1207.4078v3 · Lemma 6.6/Theorem 6.7, pp.55–56; Theorem 9.16/Lemma 9.17, p.77; Proposition 11.1/Remark 11.2, p.79 `](https://arxiv.org/pdf/1207.4078v3)
- [` Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes, arXiv:2508.09915v1 · Lemma 4.33 and Construction 4.35/(4.36); Theorem 4.39(1),(4); Theorem 7.5/Remarks 7.6,7.9–7.10; Theorem 7.12(1)–(2)/(7.14); Corollaries 1.11 and 9.7/(9.8) `](https://arxiv.org/html/2508.09915v1)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. Fix a perfect field $k$. The classical coefficient theory here is ordinary Voevodsky motivic cohomology with its Bloch cycle model on smooth schemes. On smooth finite-type $k$-schemes and their closed-support restriction diagrams, the integral Spitzweck/classical coefficient theory used by Navarro and the supplied EM theory are related by the following specified natural equivalence: the unit-induced field zigzag $H_{\rm Spi}\leftarrow s^0\mathbf1_k\to s^0KGL_k$, followed by the inverse of the actual structured EM-to-cdh-to-represented comparison. This is multiplicative, unital and preserves the actual Picard first-Chern map. It therefore preserves the universal projective-relation Chern classes in every nonnegative degree. For every $i\geq1$, it preserves the corresponding completed pointed K-space Chern operations and their maps on closed-support fibers. The coefficient $c_0=1$ is preserved separately as the unpointed total-series constant; it supplies no additive-target support-fiber operation. For regular immersions between smooth schemes it also preserves the refined Gysin and forget-support maps; in particular it sends the positive refined point class to the positive EM point class. On smooth separated schemes the classical pointed operation is also Navarro's independently constructed represented Chern operation, by the comparison in [F2]; the support comparison therefore includes that endpoint in the smooth affine point application. All statements are integral in every characteristic. No new smooth comparison or Gysin formalism on singular normal qcqs schemes is asserted.

## Statement references
[lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)

[lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection)

[lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square)

[lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport)

[lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport)

[thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)

[prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)

[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)

[lem-consumer-58c9d7aa5419-navarro-em-smooth-comparison](item-lem-consumer-58c9d7aa5419-navarro-em-smooth-comparison)

## Definition
The fixed bounds mean compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, large enough for the supplied schemes, sheaf complexes, localizations and coherent diagrams; existence of these universes is an additional size assumption, independent of Choice. A perfect field has every nonconstant irreducible polynomial separable. Smoothness and finite type refer to the structure morphism to $\operatorname{Spec}k$. Use the bounded smooth finite-type site and all its $k$-morphisms, with the Zariski or Nisnevich local convention fixed by the Chern-transport supplier.

The motivic category, sphere, Tate object, effective covers and zeroth slice $s^0$ are the constructions in the primary-input and field-zigzag suppliers. Picard space is the pointed nerve of the groupoid of line bundles and their isomorphisms. Write $e_i:Y_i^{\rm cl}\simeq Y_i^{\rm EM}$ for the specified coefficient equivalence and $C_i^{\rm EM}$ for the supplied actual perfect-K operation. On the full smooth site the classical pointed operation is initially $C_i^{\rm tr}=e_i^{-1}C_i^{\rm EM}$, with its ordinary source map and source unit, as in the current Chern-transport supplier. On the smooth separated subsite, the comparison lemma in [F2] identifies it with Navarro's independently constructed represented operation: actual Cartan compares all integer-rank universal virtual classes, and Riou's genuine K-model and motivic uniqueness theorem then identify the maps. Equality of bundle coefficients alone is not used as a substitute for this argument. No nonseparated extension of Navarro's original site is attributed to his paper. The separate native small-Zariski Bousfield–Kan formula is not applied to the actual EM coefficients. For $Z\subseteq X$ closed, with $U_X=X\setminus Z$, a support fiber means $\operatorname{fib}(E(X)\to E(U_X))$ over zero for the supplied coefficient or perfect K-theory; forgetting support is its projection to $E(X)$. Step 4.1 checks that $U_X$ is again smooth finite type and qcqs, so the evaluations lie on the same site. No category-defined supported K-theory comparison is inferred from this notation.

A regular immersion here means a closed immersion whose ideal is locally generated, along its source, by a finite regular sequence on the ambient local ring. For Gysin, both schemes are smooth over $k$; its normal bundle, Thom class and refined map are precisely the smooth-pair constructions in the purity and Gysin suppliers. For a finite locally free bundle $E$, write $E^\vee=\mathcal Hom(E,\mathcal O)$ for its sheaf dual. Its local freeness, evaluation isomorphism $E\cong E^{\vee\vee}$ and compatibility with base change are supplied by the dual-bundle lemma. Projective bundles use the quotient convention; the line convention parametrizes locally direct-summand sublines. The projective-bundle representing theorem supplies the quotient interpretation used in the final convention paragraph. The positive refined point class means the refined Gysin image of $1$ for a smooth closed-point pair. Its literal reduced-cycle coordinate $+1$ is the additional algebraically closed, pure three-dimensional specialization of the Gysin supplier; the general assertion is preservation of the refined class itself.

## Definition references
[math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-regular-sequence-on-a-module](https://alphabetamath.cc/item/def-regular-sequence-on-a-module)

[math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)

[math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)

[math:lem-dual-locally-free-and-base-change](https://alphabetamath.cc/item/lem-dual-locally-free-and-base-change)

[thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)

[lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)

[lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport)

[lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport)

[lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs)

[math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)

[math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)

## Facts & Assumptions
[A8] The current smooth comparison fixes the ordinary Voevodsky/Bloch model and the actual augmented EM comparison, with its AC premise. [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison), [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)

[A9] Choice is inherited through the current smooth motivic comparison and its classical/cycle model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag), [lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection) and [lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square) specify the actual unit zigzag and prove the actual Picard-map square, with the exact primary input and its reading limits.

[F2] [lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport) supplies the integral bundle-coefficient comparison and the inverse-transported pointed operation on the full smooth site. [lem-consumer-58c9d7aa5419-navarro-em-smooth-comparison](item-lem-consumer-58c9d7aa5419-navarro-em-smooth-comparison) separately identifies Navarro's independently constructed operation on the smooth separated subsite. It uses actual Cartan, all integer-rank Grassmannian classes and Riou's canonical regular-site model and motivic uniqueness theorem, retaining condition (K). Its homotopy is pointed and natural before taking support fibers. [lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport) independently identifies refined smooth Gysin and forgetting support. The unit coefficient remains separately unpointed; no native completion formula supplies the independent endpoint.

[F3] The perfect-field, smoothness, finite-type, universe, closed-immersion and regular-sequence definitions fix the geometric and size conditions in Definition; the projective-bundle definition and its representing theorem fix the quotient convention. The dual-bundle lemma supplies the canonical double-dual and base-change identifications used to convert locally split sublines to line quotients. [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field) [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes) [math:def-regular-sequence-on-a-module](https://alphabetamath.cc/item/def-regular-sequence-on-a-module) [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme) [math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients) [math:lem-dual-locally-free-and-base-change](https://alphabetamath.cc/item/lem-dual-locally-free-and-base-change)

[F4] Under the retained Choice premise, the finite-type field lemma makes the underlying space of every finite-type $k$-scheme Noetherian and every open subset quasi-compact, without requiring separatedness. Local finite type is affine-local on the source and target, hence survives restriction to an open source. Smoothness survives open source restriction by its germwise definition. A morphism is quasi-compact when inverse images of quasi-compact target opens are quasi-compact. These interfaces justify the support-domain check below. [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs) [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target) [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

## External input
Reference 0 records the cycle/product, specialization and orientation premises on their separate stated scopes. Reference 1 records the represented first-class construction, base-independent cdh comparison and unit/slice premises on their separate stated scopes. Their actual map-level composition is supplied by the declared field-zigzag and Picard-square lemmas, and is applied locally below. The refined Gysin and Chern-completion inputs are supplied by the declared smooth-site lemmas; this theorem does not claim a new proof of the imported foundations.

## Proof
**Given:** The fixed perfect field, smooth pairs, actual coefficient models, AC and compatible site and universe bounds in the statement.

**Goal:** Fill the orientation-preserving-map prerequisite, not only identify groups or conventions.

1.1 Apply [F1]. Its zigzag consists of the unit-induced ring maps and canonical structured graded comparisons. EM regular comparison applies because each smooth finite-type scheme over $k$ is regular Noetherian even when $k$ is not finite over its prime field. The Kan-extension argument identifies the actual Picard maps before restriction to $k$. Thus the equivalence preserves their full natural line-bundle maps. [F1, A8, A9, F3]

2.1 Transport Spitzweck's actual Picard map through the unit-induced ring zigzag. The primary input identifies its restriction to the reduced projective line with the unit-adjoint class, after the stated line/quotient and Tate-coordinate convention is matched. The unital maps of the zigzag preserve that class. Apply the Picard-map detector of [F1] with the represented slice coefficients: their negative weights vanish and they satisfy PBF. Thus this transported map is homotopic to the represented Picard map, as a natural map of Picard spaces. Combining it with the EM square of step 1.1 proves the claimed preservation of the actual first Picard operation, including descent data. [F1, A9, F3, step 1.1]

3.1 Apply [F2]. Inverse coefficient transport constructs the classical pointed operation on the full smooth site, and the inverse-equivalence homotopy gives its actual EM comparison with the common source unit. Its bundle coefficients are classical by the projective relation. For Navarro's independently constructed endpoint use the separate comparison lemma in [F2], on the smooth separated subsite. Its actual Cartan calculation treats every integer-rank universal virtual class; Riou's motivic uniqueness theorem, with its target condition verified, then gives equality on the genuine K-model. The additive target makes that homotopy pointed. Thus this endpoint is identified, rather than defined to equal the transported operation. On a separated $V$, its open complement is again in that subsite by the same lemma; in particular both $V$ and $V\setminus\{x\}$ qualify in the smooth affine point application. Taking fibers of this one natural homotopy gives the supported Navarro-to-EM comparison and forget-support square. On nonseparated objects retain the original transported comparison, without claiming an independently supplied Navarro extension. The unital comparison preserves $c_0=1$ separately. Smooth purity and the matching Thom class in [F2] identify refined Gysin and its positive point class. All comparisons are within the stated smooth scope; no coefficient equivalence is extended to a singular ambient scheme. [F1, F2, F3, A9, step 1.1, step 2.1]

4.1 This is an integral statement: the field unit zigzag and the primary positive-characteristic specialization use no p-inversion. All coefficient comparisons and support restriction diagrams used here remain on the fixed smooth finite-type site. For any site object $X$ and closed subset $Z$, put $U_X=X\setminus Z$. By [F4] and [A9], $U_X$ is quasi-compact. The restriction $U_X\to\operatorname{Spec}k$ is smooth by the germwise smoothness definition, and locally of finite type by source locality of local finite type in [F4]. The base $\operatorname{Spec}k$ has only the empty and whole open subsets; their inverse images are empty and $U_X$, both quasi-compact. Thus the restricted structure morphism is quasi-compact by [F4], hence finite type by [F3]. Applying the finite-type field lemma of [F4] to $U_X$ also gives qcqs. These statements include the empty complement and require no separatedness. Consequently the entire restriction arrow, and hence its fiber comparison, stays within the supplied smooth finite-type domain. The Gysin application uses only regular immersions between smooth schemes. No comparison on a singular ambient scheme is deduced in this theorem. This proves the stated smooth-site assertions with their full integral and support scope. [F1, F2, A8, A9, F3, F4, step 1.1, step 3.1] ∎

## Convention and source scope
Spitzweck Proposition 11.1 uses the tautological subline $\mathcal O(-1)$ in its line-parametrizing convention. The Picard operation assigns a line its own class. Concretely, $\mathbb P_{\rm lines}(E^\vee)\cong\mathbb P_{\rm quot}(E)$ identifies the dual of the tautological subline with the tautological quotient: dualizing a locally split inclusion $L\hookrightarrow E^\vee$ gives the line quotient $E\cong E^{\vee\vee}\twoheadrightarrow L^\vee$, and conversely. Locally a line quotient splits by lifting its frame, so dualization gives a direct-summand subline; the evaluation isomorphisms make the two operations inverse. The dual-bundle base-change isomorphism and quotient representing theorem in [F3] make this identification natural in the base scheme, including the empty rank-zero case. Evaluate both Picard maps on that same line, and use the same Tate-coordinate identification for the unit-adjoint reduced class. The argument compares actual maps with these conventions; the symbol $\mathcal O(-1)$ alone neither proves nor refutes compatibility. The retained Choice assumption also discharges the projective-bundle suppliers' construction premise. EM v1 Remark 3.6 states its tower identification with then-in-preparation [7]; the additional BEM v1 constructions above supply the specified structured bridge, while BEM (6.4) is used for no multiplicative assertion.
