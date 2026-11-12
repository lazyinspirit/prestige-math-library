---
id: lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers
kind: lemma
title: Open-natural smooth cycle layers by separated-open descent
status: draft
domain: mathematics
deps:
  - thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
  - lem-adjudicate-f6007757a8ac-raw-simplicial-descent
  - lem-adjudicate-d5306176fce5-coherent-realization
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-bloch-higher-cycle-complex
  - def-motivic-filtration
  - def-motivic-cohomology
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-field
  - math:def-perfect-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-open-immersion-schemes
  - math:def-affine-open-subscheme
  - math:def-separated-morphism-schemes
  - math:cor-affine-schemes-separated
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:def-localization-of-a-category-at-a-class-of-morphisms
  - lem-adjudicate-a9ee7502efb6-simplicial-spectra-realization
  - math:def-prime-subfield
  - math:thm-prime-subfield-classification
  - math:def-scheme
  - math:ex-localization-etale-open-immersion
  - math:def-etale-morphism-schemes
  - lem-author-75596422a482-open-restriction
dependency_roles:
  thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison: mathematical-premise
  lem-adjudicate-f6007757a8ac-raw-simplicial-descent: mathematical-premise
  lem-adjudicate-d5306176fce5-coherent-realization: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  def-bloch-higher-cycle-complex: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-field: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-separated-morphism-schemes: mathematical-premise
  math:cor-affine-schemes-separated: mathematical-premise
  math:lem-closed-immersion-affine-quotient-and-base-change: mathematical-premise
  math:def-localization-of-a-category-at-a-class-of-morphisms: mathematical-premise
  lem-adjudicate-a9ee7502efb6-simplicial-spectra-realization: mathematical-premise
  math:def-prime-subfield: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
  math:def-scheme: mathematical-premise
  math:ex-localization-etale-open-immersion: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
  lem-author-75596422a482-open-restriction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes, v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Definition 3.1, p.13; §3.3 (3.5), p.14; §3.1 (3.1)–(3.2), pp.12–13;
        Theorem 3.5(1),(2),(8), Remark 3.6, pp.14–16; Construction 4.36, p.32;
        Theorem 6.1(2), Remark 6.3, Corollary 6.4 and footnote 12, pp.44–45.
      statement: Equation (3.5) defines the cdh complex by sheafifying the
        scheme-level smooth-prime-field left Kan extension; Definition 3.1 gives
        its affine lisse input. The cdh tower has natural graded terms
        Z(j)_cdh[2j] and cdh descent. The actual motivic-to-cdh map is a
        regular-Noetherian equivalence. Remark 3.6 identifies the cdh tower with
        the KGL slice tower. In Remark 3.6, the cdh KH filtration is identified
        with the evaluated slice filtration on KGL on qcqs equal-characteristic
        schemes. The graded mapping-spectrum calculation in this item is a local
        application of that imported tower identification.
      hypotheses: Prime field F; qcqs F-schemes; j>=0. Equivalence requires regular
        Noetherian schemes, without finite generation over F. Classical
        applications here use a fixed perfect extension k/F.
      reading_limits: >-
        Historical records from predecessor proposals (not reading or acceptance
        credit for job-04976):


        Earlier reading records, retained as historical evidence only and
        granting no current reading or acceptance credit: Historical record
        retained from earlier item versions; it grants no reading or acceptance
        credit to the present assignment: Historical reading record retained
        from the existing item, not fresh reading credit for this assignment:
        This assignment read the cached primary v1 PDF at printed pp.12–16 and
        44–45, and the cached extraction of Construction 4.36, p.32: the
        enhanced target convention, cdh construction, graded terms, comparison
        statements and footnote 12. Deep comparison proofs remain imported.
        Theorem 3.5 and Remark 3.6 cite then-in-preparation work; EM v1 does not
        supply that foundational proof. Corollary 6.4 alone is not an
        arbitrary-extension-field comparison.


        Current assignment: checked the cached primary v1 PDF text at printed
        pp.12–16 and 44–45 for the enhanced convention, cdh construction, graded
        terms, comparison statement, filtered equivalence and footnote 12.
        Construction 4.36 and the deep comparison proofs were not newly
        reconstructed.


        Current repair: checked the primary v1 PDF text of the cdh construction,
        Theorem 3.5(1),(2), Remark 3.6, Theorem 6.1(2) and Remark 6.3. These are
        imported statements, not reconstructions of their foundations.
        Construction 4.36 and the other historical locators were not newly read.


        Job-04976 fresh reading: primary v1 PDF text at Definition 3.1, the cdh
        definition (3.5), Theorem 3.5(1),(2),(8), and the opening of §6 through
        Theorem 6.1(2), Remark 6.3 and Corollary 6.4. The sheafification
        universal-property application is local. No reconstruction of the deep
        comparison foundations or fresh reading of Construction 4.36 is claimed.


        Job-04994: freshly read the cached primary v1 PDF at printed pp.12–16,
        including (3.1)–(3.2), (3.5), Theorem 3.5 and the entire Remark 3.6. The
        current augmented-tower supplier was checked at its full Statement and
        External input. The slice identification is an explicit imported
        premise; EM v1 attributes its proof to then-in-preparation work. No
        proof reconstruction or new acceptance is claimed.
    - title: Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes,
        served v1 HTML
      url: https://arxiv.org/html/2508.09915v1
      locator: §1.6; (1.9) and Corollary 1.11; §3.1 and §3.2, mapping-spectrum
        construction, (3.7), and the graded-right-adjoint identity immediately
        following it; (4.7), Remark 4.12, Definition 4.15 and Remark 4.21; proof
        of Theorem 6.3, three construction paragraphs immediately preceding
        (6.4), and the qualification following (6.4); Definition 7.1, Lemma
        7.3(1), Theorem 7.5, Remark 7.7, Definition 7.8 and Remark 7.9.
      statement: Definition 4.15 defines the absolute spectral presheaf Z(j)^A(Y) as
        map_SH(Y)(1_Y,s^j KGL_Y)[-2j]. Remark 4.21 identifies its smooth-field
        restriction with the mapping presheaf represented by s^j KGL_k[-2j],
        through smooth pullback. The application here uses EM Remark 3.6 and the
        existing tower supplier to reach this endpoint; it does not pass from
        affine henselian-local agreement to a scheme-level Kan extension.
        Theorem 7.5 and Remark 7.9 concern the sheafified base comparison;
        Remark 7.7 concerns the older affine construction. These latter
        statements are background, not premises of the repaired field-model leg.
        Before (6.4), the proof of Theorem 6.3 recalls global complex models Z^j
        on Sm_k, their agreement with Bloch cycles in the homotopy category of
        presheaves on the wide subcategory of smooth morphisms, their assembled
        motivic spectrum Z, and the equivalences s^0(1_k) to Z and s^0(KGL_k).
        Formula (6.4) itself asserts only fixed-ambient étale naturality. Its
        phrase homotopy category of presheaves is not used here to identify a
        derived-sheaf localization with the pointwise spectral localization. The
        latter comparison is supplied separately by the coniveau chain in
        reference 2. The same construction characterizes omega-infinity-gr(Z) in
        degree j as Levine's Z^j. Section 3.2 identifies this degree with the
        mapping presheaf of T^j tensor Z, without a further [-2j] shift. This is
        the assembled-spectrum evaluation interface, separate from the
        comparison with raw cycles.
      hypotheses: Any field B in Theorem 7.5 and Remark 7.9, including the prime field
        F; qcqs equal-characteristic schemes for Corollary 1.11. Apply the
        classical spectrum and cycle constructions over one fixed perfect field
        k, in one nonnegative weight j, on smooth separated finite-type
        k-schemes. Open immersions are smooth morphisms. No finite-generation
        assumption on k/F and no cross-weight, multiplicative or global Z-linear
        refinement is used.
      reading_limits: >-
        Historical records from predecessor proposals (not reading or acceptance
        credit for job-04976):


        Earlier reading records, retained as historical evidence only and
        granting no current reading or acceptance credit: Historical record
        retained from earlier item versions; it grants no reading or acceptance
        credit to the present assignment: Historical reading record retained
        from the existing item, not fresh reading credit for this assignment:
        This assignment read the listed served HTML statements and construction
        paragraphs, including the global homotopy-presheaf assertion before
        (6.4), its subsequent fixed-site qualification, the short proof of
        Theorem 7.5 and Remark 7.7 distinguishing the affine and scheme versions
        of lisse extension. The URL displays arXiv v1 dated 13 August 2025 but a
        title date of 24 August 2026; no immutable 2025 snapshot identity is
        asserted. Base independence, the equal-characteristic comparison and
        deep slice/cycle theorems are imported, not reconstructed. The
        conversion of a whole-presheaf isomorphism below is a local categorical
        argument, not an additional theorem attributed to (6.4). Fresh reading
        in this repair: (1.9)/Corollary 1.11; (4.7), Definition 4.15 and Remark
        4.21; the three construction paragraphs before (6.4) and its following
        qualification; Definition 7.1, Lemma 7.3(1), Theorem 7.5 with its short
        proof, Remark 7.7, Definition 7.8 and Remark 7.9, in the served primary
        HTML. No new reconstruction of their deep inputs or reading of every
        earlier historical locator is claimed.


        Current assignment: checked served primary HTML §3.1.1 (reduced
        projective-line motive), §3.2 through the graded-right-adjoint formula
        after (3.7), (4.7), Definition 4.15 and Remark 4.21, and the
        construction paragraphs before (6.4) with its following qualification.
        Also checked (1.9)/Corollary 1.11 and the cached primary HTML at
        Definition 7.1, Lemma 7.3(1), Theorem 7.5 with its short proof, Remark
        7.7, Definition 7.8 and Remark 7.9. The identity of the
        assembled-spectrum entry is used as expressly characterized there; no
        inference from the raw-cycle derived-sheaf comparison alone is made. The
        served v1/date discrepancy remains as recorded historically.


        Current repair: checked the served primary HTML at §3.2 including (3.7)
        and its graded-right-adjoint identity; (4.7), Definition 4.15, Remark
        4.12 and Remark 4.21; (1.9)/Corollary 1.11; the construction paragraphs
        in the proof of Theorem 6.3 before (6.4) and its qualification;
        Definition 7.1, Lemma 7.3(1), Theorem 7.5 with its short proof, Remark
        7.7, Definition 7.8 and Remark 7.9. The deep comparison and slice
        results remain imported. Earlier readings of other locators are
        historical; the served-version/date qualification is retained.


        Assignment job-04965: freshly checked the served primary HTML at §3.2,
        (3.7) and the graded-right-adjoint formula immediately following it;
        (4.7) and Remark 4.21; the construction paragraphs before (6.4) and its
        following fixed-site qualification; (1.9)/Corollary 1.11, Definition
        7.1, Lemma 7.3(1), Theorem 7.5 with its short proof, Remark 7.7,
        Definition 7.8 and Remark 7.9. This verifies the assembled-entry and
        field-model interfaces used here; the deep results are imported, and the
        historical served-version qualification is retained.


        Job-04976 fresh reading: served primary HTML at §3.2 through the formula
        following (3.7), (1.9)/Corollary 1.11, Remark 4.21, the construction
        paragraphs preceding (6.4) and their following qualification, Definition
        7.1, Lemma 7.3(1) with proof, Proposition 7.4, Theorem 7.5 with proof,
        Remark 7.7, Definition 7.8 and Remark 7.9. The field comparison is
        applied after sheafification and then restricted to smooth separated
        finite-type k-schemes; no smoothness or finite-generation hypothesis on
        k/F is used. Deep inputs remain imported. No new independent proof,
        whole-paper reading or immutable-2025 identity for the served HTML is
        claimed.


        Job-04994: checked the served primary HTML at Definition 4.15, Remark
        4.21, Definition 7.1, Lemma 7.3(1), Theorem 7.5, Remark 7.7, Definition
        7.8 and Remark 7.9; also consulted the cached primary HTML for the
        complete displayed absolute and smooth-base evaluation formulas. The
        scheme/affine Kan-extension route is not used in this repair. No new
        complex-linear comparison of the smooth classical inputs or
        reconstruction of deep motivic foundations is asserted. Other historical
        source-reading records remain historical; the served-version/date
        qualification remains binding.
    - title: Marc Levine, The homotopy coniveau tower, arXiv:math/0510334v1
      url: https://arxiv.org/pdf/math/0510334v1
      locator: §§1.1–1.4, pp.7–8 (sequential simplicial spectra and pointwise versus
        Nisnevich localizations); §1.6 and §§2.1–2.2, pp.9–12 (total spectra and
        support construction); Theorem 4.1.1 with its construction, pp.20–22;
        Corollary 4.1.5, p.23; Theorem 5.3.1(3) and its proof, pp.28–29;
        Corollary 5.3.2 and its proof, pp.29–30; §6.2, pp.31–32; Theorem 6.4.1,
        pp.35–36; Theorem 6.4.2 and proof, pp.36–37; §6.5 and the first sentence
        of the proof of Theorem 6.5.1, pp.37–38; Definition 8.1.1, pp.42–43, the
        suspension formula at the end of §8.1, §8.2 and Remark 8.2.1(2),
        pp.43–44; Example 8.2.2(3), pp.45–46; Remark 8.3.1, p.46; Theorem 9.0.3
        and Remark 9.0.4, p.47; §§10.4–10.5, pp.59–61.
      statement: "HSpt(C) is the localization of strict sequential simplicial spectral
        presheaves at pointwise stable weak equivalences. Corollary 4.1.5
        identifies the rectified K-theory layer Q_j with the raw layer on smooth
        morphisms in HSpt. The first sentence of the proof of Theorem 6.5.1
        explicitly states Z^j ≅ K^(j/j+1) in HSpt(k), before deriving the
        theorem about its layers. Theorem 5.3.1(3) and Theorem 6.4.2 compare the
        raw layer through its iterated layer with the ordinary simplicial cycle
        spectrum: the latter proof uses the canonical zeroth Postnikov map and
        checks the cycle face maps. These constructions give the pointwise
        open-restriction chain used here. Section 6.5 by itself also states a
        Nisnevich-derived comparison, from which no pointwise conclusion is
        inferred. Example 8.2.2(3) assembles the ordinary classical spectrum,
        Remark 8.3.1 supplies strict lifts, and Theorem 9.0.3 with Remark 9.0.4
        identifies the stable coniveau and slice towers over perfect fields.
        Sections 10.4–10.5 identify the classical zeroth slice. Only the
        fixed-weight underlying spectrum comparison and its positive ordinary
        coefficient are used. Section 6.5 defines Z^j as the ordinary
        Eilenberg–Mac Lane spectral presheaf of its fibrant complex. Example
        8.2.2(3) and §10.4 assemble these same entries into Z. Sections 8.1–8.2
        give tail suspension and the derived zeroth-entry adjunction, with
        pointwise comparison of entries between fibrant models (Remark
        8.2.1(2)). Section 1.6 makes Postnikov constructions functorial on
        diagrams. Sections 2.1–2.2 give support and layer functoriality for open
        restrictions. Theorem 6.4.1 and the proof of Theorem 6.4.2 supply the
        supported coherent-sheaf G-theory maps and the positive structure-sheaf
        generator used in the local restriction-square argument. The proof of
        Theorem 6.4.1 imports the regular-ambient resolution comparison K(S) to
        G(S) and the supported localization equivalence K^Z(S) with G(Z). The
        localization leg is G(Z) to fib(G(S) to G(S minus Z)); the resolution
        comparisons on the regular ambient and its open complement identify this
        fiber with K^Z(S). The proof of Theorem 6.4.2 uses that same supported
        map from G(Z) to the iterated coniveau layer. The explicit open-pair
        fiber zigzag and its natural inverse in this item are local applications
        of those imported comparisons, not additional theorems attributed to the
        source."
      hypotheses: Smooth separated finite-type schemes; fixed perfect base k for the
        stable slice comparison. Theorem 4.1.1 requires A3 over finite k;
        Theorem 6.4.1 verifies it for K-theory, and Remark 9.0.4 covers the
        finite-perfect-field stable case. Use the global presheaf models and
        ordinary cycle realization. No use of the conditional module assertion
        in Corollary 10.5.2 or Conjecture 11.1.1. The support Z in that G-theory
        map may be singular; its ambient Y times the simplex is smooth. Only
        open restrictions and the simplicial face/degeneracy operations used by
        the source are required for the local diagram comparison. For the
        supported zigzag S is the smooth regular ambient Y times the simplex, S
        minus Z is its smooth open complement, and Z is the admissible integral
        support. K in this auxiliary calculation is Levine's chosen presheaf; no
        separate identification with the EM perfect-complex model is a premise.
      reading_limits: >-
        Historical records from predecessor proposals (not reading or acceptance
        credit for job-04976):


        Earlier reading records, retained as historical evidence only and
        granting no current reading or acceptance credit: Historical record
        retained from earlier item versions; it grants no reading or acceptance
        credit to the present assignment: Fresh reading in this repair: the
        named primary v1 passages at printed pp.7–10, 20–23, 28–32, 35–38, 45–47
        and 59–61 in the cached PDF extraction; the versioned primary arXiv PDF
        was also opened and its §6.5/Theorem 6.5.1 and Corollary 4.1.5
        statements checked. The pointwise Z^j-to-rectified-layer isomorphism is
        imported exactly as asserted in the proof of Theorem 6.5.1; it is not
        reconstructed from the derived-sheaf sentence on p.37. The functorial
        support/Postnikov maps are checked here for open restriction and
        ordinary realization. Long moving, purity, rectification, K-theory
        comparison and reverse-cycle foundations remain imported. No
        journal-version or whole-paper reading is claimed, and the conditional
        module assertion of Corollary 10.5.2 is not used.


        Current assignment: read primary v1 PDF text at printed pp.7–9, 20–23,
        28–32, 35–38, 42–47 and 59–61. In particular checked §6.5's associated
        ordinary spectral presheaf, its HSpt(k) comparison, Definition 8.1.1,
        the suspension formula at the end of §8.1, §8.2 including Remark
        8.2.1(2), Example 8.2.2(3), and the opening definition of Z in §10.4.
        Those passages identify the very complex entries used on both sides of
        the local model-evaluation calculation. The versioned web extraction and
        cached primary PDF text were used; screenshot calls for pp.37, 44 and 59
        failed. Deep foundations and the whole paper were not reconstructed or
        fully read.


        Current repair: read the primary v1 cached PDF text at §1.6, §§2.1–2.2,
        Theorem 4.1.1 and Corollary 4.1.5, Theorem 5.3.1 and Corollary 5.3.2,
        §6.2, Theorems 6.4.1–6.4.2 and §6.5/Theorem 6.5.1. Also checked
        Definition 8.1.1, the tail-suspension formula, §8.2 including Remark
        8.2.1(2), Example 8.2.2(3), Theorem 9.0.3/Remark 9.0.4 and the opening
        of §10.4 for the unchanged model interfaces. The versioned primary web
        PDF text corroborated Theorem 6.4.2 and its proof and §6.5. The
        open-restriction square and the inverse natural group isomorphism are
        locally argued, not attributed to a fixed-scheme face calculation. Deep
        localization, moving, purity, rectification and slice/cycle foundations
        remain imported. No whole-paper or new visual-page reading is claimed.


        Assignment job-04965: freshly read the cached versioned primary PDF text
        at §§1.1–1.6 and §§2.1–2.2; Theorem 4.1.1 construction and Corollary
        4.1.5; Theorem 5.3.1 with proof and Corollary 5.3.2; Theorems
        6.4.1–6.4.2 with their proofs and §6.5/Theorem 6.5.1; Definition 8.1.1
        through §8.2/Remark 8.2.1(2), Example 8.2.2(3), Remark 8.3.1, Theorem
        9.0.3/Remark 9.0.4 and the opening of §10.4. The primary web PDF was
        also opened at the comparison statements. This checks the exact ordinary
        presheaf category, selected entries, supported maps, Postnikov
        construction and positive coefficient. The explicit restriction-fiber
        zigzag and its natural inverse are local deductions, retaining all
        inverted comparison maps. Quillen's foundational theorems are imported
        as used by Levine; their original proofs and the full paper were not
        newly read.


        Job-04976 fresh reading: versioned primary web PDF comparison
        statements, and cached primary v1 PDF extraction at §§1.2–1.6, opening
        of §2.1, Theorems 6.4.1–6.4.2 with proofs, §6.5/Theorem 6.5.1,
        Definition 8.1.1 through Remark 8.2.1(2), Example 8.2.2(3), and opening
        of §10.4. These corroborate the unchanged pointwise comparison,
        supported generator and assembled entries. The source statements of
        Corollary 4.1.5, Theorem 5.3.1 and Corollary 5.3.2 were checked in the
        primary web extraction. Moving, localization, purity, rectification and
        slice foundations remain imported; their full proofs and finite-field
        stable construction were not newly reconstructed.
    - title: Jacob Lurie, Higher Topos Theory, homotopy categories and equivalences
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 1.2.3.9 and its proof, printed pp.32–33; §1.2.4, opening
        definition of equivalence, printed p.33 (PDF indices 49–50).
      statement: Morphisms of the homotopy category of an infinity-category are
        represented by edges, modulo homotopy. Such an edge is an equivalence
        exactly when its class is an isomorphism; two objects isomorphic in that
        homotopy category are equivalent.
      hypotheses: An infinity-category. Apply to Fun(N(O_k)^op,Sp), where O_k is small
        in the specified larger universe. This criterion concerns the homotopy
        category of the whole coherent functor category, not Fun(O_k^op,hSp).
      reading_limits: >-
        Historical records from predecessor proposals (not reading or acceptance
        credit for job-04976):


        Earlier reading records, retained as historical evidence only and
        granting no current reading or acceptance credit: Historical record
        retained from earlier item versions; it grants no reading or acceptance
        credit to the present assignment: Fresh reading in this repair:
        Proposition 1.2.3.9 with its proof and the opening definition of
        equivalence in §1.2.4, printed pp.32–33, primary PDF. Only edge
        representation and equivalence detection in the homotopy category of an
        already supplied infinity-category are imported. This is not a
        rectification assertion about arbitrary diagrams in hSp.


        Current assignment: checked the primary PDF text of Proposition 1.2.3.9
        with proof and the opening definition of equivalence in §1.2.4, printed
        pp.32–33. It is applied only to already supplied infinity-categories and
        coherent functors.


        Current repair: read Proposition 1.2.3.9 with proof and the definition
        of equivalence at the opening of §1.2.4 in the primary PDF text. Apply
        only to the already constructed coherent functor category; no diagram
        rectification theorem is inferred.


        Job-04976 fresh reading: primary PDF text of Proposition 1.2.3.9 with
        proof and the opening of §1.2.4, printed pp.32–33. Only edge
        representation and equivalence detection in the already supplied
        coherent functor category are used.
    - title: Kerodon, Natural Isomorphisms
      url: https://kerodon.net/tag/01DF
      locator: Subsection 4.4.4, Definition 4.4.4.1 and Theorem 4.4.4.4, with the
        evaluation-functor paragraph immediately preceding the theorem.
      statement: For a simplicial indexing set X and an infinity-category C, a given
        natural transformation in Fun(X,C) is an equivalence if and only if each
        component is an equivalence in C.
      hypotheses: A simplicial set X, an infinity-category C, two already supplied
        coherent diagrams and a natural transformation between them. Apply with
        X=N(I)^op and C=Sp to realized strict presheaf maps. This theorem does
        not manufacture a natural transformation from unrelated objectwise
        equivalences.
      reading_limits: >-
        Historical records from predecessor proposals (not reading or acceptance
        credit for job-04976):


        Earlier reading records, retained as historical evidence only and
        granting no current reading or acceptance credit: Historical record
        retained from earlier item versions; it grants no reading or acceptance
        credit to the present assignment: Fresh reading in this repair:
        Definition 4.4.4.1, the evaluation paragraph, and Theorem 4.4.4.4 in the
        primary tagged HTML. The combinatorial proof is imported, not
        reconstructed; the live page is not revision-pinned. Apply only to a
        supplied coherent natural transformation.


        Current assignment: checked Definition 4.4.4.1, the evaluation paragraph
        and Theorem 4.4.4.4 in the primary tagged page. Only the componentwise
        detection theorem is imported; its proof is not reconstructed and no
        natural transformation is inferred from unrelated pointwise
        equivalences.


        Current repair: read Definition 4.4.4.1, the evaluation paragraph and
        Theorem 4.4.4.4 in the primary live tagged HTML. The theorem is
        imported; its proof was not reconstructed. It detects equivalences only
        after a coherent natural transformation has been supplied.


        Job-04976 fresh reading: primary tagged page at Definition 4.4.4.1, the
        evaluation paragraph and Theorem 4.4.4.4. The theorem is imported for
        supplied coherent natural transformations; its full combinatorial proof
        was not reconstructed. The page is live, not revision-pinned.


        Job-04987 fresh reading: Definition 4.4.4.1, Remark 4.4.4.2, the
        evaluation paragraph and Theorem 4.4.4.4 on the live tagged page.
        Applied to the supplied natural Mayer–Vietoris transformation on the
        separated-open index. Its combinatorial proof is not reconstructed. The
        index-retraction homotopy and interchange of limits below are local
        universal-property arguments, not new imported theorems.
dependency_level: 15
formulation_deps:
  - thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
  - lem-adjudicate-f6007757a8ac-raw-simplicial-descent
  - lem-adjudicate-d5306176fce5-coherent-realization
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-bloch-higher-cycle-complex
  - def-motivic-filtration
  - def-motivic-cohomology
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-field
  - math:def-perfect-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-open-immersion-schemes
  - math:def-affine-open-subscheme
  - math:def-separated-morphism-schemes
  - math:cor-affine-schemes-separated
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:def-prime-subfield
  - math:thm-prime-subfield-classification
  - math:def-scheme
  - math:ex-localization-etale-open-immersion
  - math:def-etale-morphism-schemes
  - math:def-localization-of-a-category-at-a-class-of-morphisms
  - lem-adjudicate-a9ee7502efb6-simplicial-spectra-realization
  - lem-author-75596422a482-open-restriction
argument_deps:
  - thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
  - lem-adjudicate-f6007757a8ac-raw-simplicial-descent
  - lem-adjudicate-d5306176fce5-coherent-realization
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-bloch-higher-cycle-complex
  - def-motivic-filtration
  - def-motivic-cohomology
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-field
  - math:def-perfect-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-open-immersion-schemes
  - math:def-affine-open-subscheme
  - math:def-separated-morphism-schemes
  - math:cor-affine-schemes-separated
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:def-localization-of-a-category-at-a-class-of-morphisms
  - lem-adjudicate-a9ee7502efb6-simplicial-spectra-realization
  - math:def-prime-subfield
  - math:thm-prime-subfield-classification
  - math:def-scheme
  - math:ex-localization-etale-open-immersion
  - math:def-etale-morphism-schemes
  - lem-author-75596422a482-open-restriction
---

## Statement
Assume the Axiom of Choice and fixed compatible nested Grothendieck universes containing $\omega$, the field, schemes, opens and all diagrams below; universe existence is a separate size hypothesis. Let $k$ be perfect, let $F$ be its prime subfield, and let $j\geq0$. On smooth finite-type $k$-schemes and open immersions, including nonseparated schemes, the specified EM tower has a natural equivalence
$$\operatorname{gr}^jK(Y)\simeq\mathcal H(\mathbb Z(j)_{\mathrm{mot}}(Y))[2j]\simeq\mathcal H(z^j(Y,\bullet)).$$
Here $\mathcal H$ is the supplied coherent ordinary Eilenberg–Mac Lane realization. On the right a homological complex is reindexed by $A^q=A_{-q}$ with the same differential, so $\pi_i\mathcal H(z^j)=H_i z^j$. Cochain shift is $A[m]^q=A^{q+m}$ with differential $(-1)^m d$, and $[m]$ on spectra means suspension. The comparison is an equivalence of coherent open-restriction diagrams before taking homotopy groups, with each cycle arrow actual open restriction. Consequently it applies simultaneously to a scheme and its open complement and then to their restriction fiber.

The route is the actual augmented EM-to-cdh tower map, its induced graded map, and the standard classical cycle comparison, extended from separated opens as constructed below. It agrees with that fixed standard comparison on separated schemes. This supplies the layer shift and naturality required by the supported second-stage argument. It asserts neither multiplicative compatibility with cycles nor cross-weight compatibility. The source-version qualification in External input remains binding.

## Facts & Assumptions
**Given:** AC, the stated size hypotheses, the fixed perfect field $k/F$, nonnegative weight $j$, and the actual tower.

**Goal:** Extend the standard separated classical comparison to the full open diagram without inventing naturality from objectwise equivalences.

[A1] [[math:def-axiom-of-choice]] and [[math:def-grothendieck-universe-closure-convention]] specify the inherited Choice and size conventions. All limits and functor categories below lie in the chosen larger universe; no simultaneous selection of unrelated pointwise inverses is made.

[F1] [[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison]] gives the actual natural augmented equivalence $F^\bullet_{\mathrm{mot}}K\to F^\bullet_{\mathrm{cdh}}KH$ on smooth finite-type $k$-schemes. Reference 0 identifies its graded targets with $\mathcal H(C_{j,F})[2j]$, where $C_{j,F}=\mathbb Z(j)_{\mathrm{cdh},F}$ is exactly the cdh-local smooth-prime-field extension. Its graded source is the actual $\mathcal H(\mathbb Z(j)_{\mathrm{mot}})[2j]$. The source supplies coherent comparison maps, not merely agreement of cohomology groups.

[F2] Let $\mathcal O_k$ have all smooth separated finite-type $k$-schemes as objects and open immersions as arrows. Use the absolute slice-tower identification already supplied by [[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison]] and reference 0, Remark 3.6, on qcqs schemes of equal characteristic. Explicitly, the evaluated absolute tower is $S^q(Y)=\operatorname{map}_{\mathrm{SH}(Y)}(1_Y,f_q\mathrm{KGL}_Y)$, where $f_q$ is the right-adjoint $q$-effective cover, with its counit and transitions; $s^j=\operatorname{cofib}(f_{j+1}\to f_j)$. The imported identification is one of towers, not merely of their homotopy groups. With [F1]'s graded identification, its degree-$j$ cofiber gives $\mathcal H(C_{j,F})[2j]\simeq\mathbb Z(j)^{\mathbb A}[2j]$ as underlying coherent spectral presheaves. Reference 1, Definition 4.15, defines this latter endpoint by $\mathbb Z(j)^{\mathbb A}(Y)=\operatorname{map}_{\mathrm{SH}(Y)}(1_Y,s^j\mathrm{KGL}_Y)[-2j]$. This uses the evaluated absolute slice tower, rather than a comparison of unsheafified lisse constructions. Restrict the entire tower comparison along $\mathrm{Sch}_k\to\mathrm{Sch}_F$ and then to $\mathcal O_k$; [F5] checks its qcqs equal-characteristic domain, without any smoothness or finite-generation requirement on $k/F$. Reference 1, Remark 4.21, identifies its shifted smooth-$k$ restriction with $R_j(Y)=\operatorname{map}_{\mathrm{SH}(k)}(M_k(Y),s^j\mathrm{KGL}_k)$. Here $\mathrm{SH}(k)$ is the stable infinity-category of motivic spectra; $M_k(Y)$ is the suspension motive of $Y$; $\operatorname{map}$ is its mapping spectrum; $s^j$ is the cofiber of consecutive effective covers. These are the imported constructions of §§3.1–3.3 and Definition 4.15. Formula (4.7) gives $s^j\mathrm{KGL}_k\simeq\mathbb T_k^{\otimes j}\otimes s^0\mathrm{KGL}_k$, where $\mathbb T_k$ is the reduced suspension motive of the projective line. The proof of Theorem 6.3, before (6.4), recalls the equivalences $s^0\mathrm{KGL}_k\leftarrow s^0(1_k)\to\mathcal Z$; $1_k$ denotes the motivic sphere. Use exactly the Bloch motivic spectrum assembled from Levine's §6.5 complexes, with the sequential models and represented evaluation specified in [F9]. Write $G_j=J(G_j^{\mathrm{s}})$. Step 1.1 derives $R_j\simeq G_j$ from that construction and the graded right adjoint, before composing with the pointwise coniveau chain. For the further leg to $B^{\mathrm{s}}=\mathrm{EM}_{\mathrm{s}}(z^j(-,\bullet))$ use the explicit pointwise coniveau comparisons in [F8]. Neither the wording homotopy category of presheaves before (6.4) nor the derived-sheaf statement in Levine §6.5 alone identifies the required pointwise localization. The functor and additive comparison of [F7] identify $J(B^{\mathrm{s}})$ naturally with $B=\mathcal H(z^j(-,\bullet))$. The resulting fixed-weight chain is $\mathcal H(C_{j,F})[2j]\simeq R_j\simeq G_j\simeq B$. Select this standard comparison once, with ordinary unnormalized alternating-face realization, actual open restrictions and the positive field coefficient specified in [F8]. Formula (6.4) alone is not used to provide global open naturality.

[F3] Reference 0 makes $C_{j,F}$ a derived cdh sheaf, hence gives binary Zariski Mayer–Vietoris and zero value on the empty scheme. [[lem-adjudicate-f6007757a8ac-raw-simplicial-descent]] proves these same binary squares for the raw cycle complexes on possibly nonseparated smooth finite-type schemes. Its canonical raw-to-derived-sections unit is open-natural; thus the raw construction, rather than a substituted definition of cycles, is retained. [[lem-author-75596422a482-open-restriction]] supplies the actual cycle arrow: an admissible integral generator restricts to its open subscheme if nonempty and to zero otherwise, and this rule commutes with the alternating face differential. Successive restrictions compose because successive intersections with opens agree.

[F4] [[lem-adjudicate-d5306176fce5-coherent-realization]] preserves all small limits, zero objects, fibers and shifts, with $\pi_i\mathcal H(A)=H^{-i}(A)$. [[def-stable-spectra-interface]] supplies coherent limits and their mapping-space universal property. Apply these constructions to the enhanced presheaves of [[lem-author-b747b28c359f-elmanto-morrow-complexes]], not to diagrams chosen in an ordinary homotopy category. [[def-decreasing-filtered-spectrum]], [[def-motivic-filtration]] and [[def-motivic-cohomology]] fix the actual tower, graded cofiber and coefficient notation.

[F5] The prime subfield is the smallest subfield, as defined in [[math:def-prime-subfield]]; [[math:thm-prime-subfield-classification]] identifies it with $\mathbb Q$ or $\mathbb F_p$, so the prime-field suppliers apply. Field, perfectness, structure maps, smoothness and finite type use [[math:def-field]], [[math:def-perfect-field]], [[math:def-scheme-over-base]], [[math:def-smooth-morphism-schemes]] and [[math:def-locally-finite-type-and-finite-type-morphism]]. The geometric clause of [[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison]] checks regular Noetherianity and the qcqs domain, without separatedness. An open immersion is étale by [[math:ex-localization-etale-open-immersion]], hence smooth by [[math:def-etale-morphism-schemes]]; therefore every arrow of $\mathcal O_k$ belongs to the smooth-morphism category used in [F8]. Open restriction and affine charts use [[math:def-open-immersion-schemes]] and [[math:def-affine-open-subscheme]]. Every open is again smooth finite type by the explicit geometric argument in Proof 1.1 of [[lem-adjudicate-f6007757a8ac-raw-simplicial-descent]]. In particular it is quasi-compact; [[math:def-scheme]] supplies its affine open neighbourhoods, so its affine opens cover it and a finite subcover exists.

[F6] [[math:def-separated-morphism-schemes]] defines separatedness by a closed diagonal. [[math:cor-affine-schemes-separated]] makes every affine chart separated over $k$. An open of a separated $k$-scheme is separated: its diagonal is the base change of the original diagonal to the product of that open with itself; use [[math:lem-closed-immersion-affine-quotient-and-base-change]]. Intersections of separated open subschemes are therefore separated. No separatedness of their union is asserted.

[F7] [[math:def-localization-of-a-category-at-a-class-of-morphisms]] supplies the ordinary localization universal property. For a small ordinary category $I$, write $\mathrm{Spt}(I)$ for strict presheaves of the source's spectrum models and $\mathrm{HSpt}(I)$ for their localization at pointwise stable weak equivalences, as in reference 2, §§1.2–1.4. [[lem-adjudicate-a9ee7502efb6-simplicial-spectra-realization]] supplies the actual functor $J(E)=\mathcal R(|E|)$ for these sequential pointed simplicial spectra, without assuming their levels Kan. It inverts stable weak equivalences and naturally identifies the source's ordinary additive Eilenberg–Mac Lane models with the fixed $\mathcal H$, including shifts, raw unnormalized complexes, restriction maps and the positive integer unit. Apply this single functor to every value and arrow, then take the homotopy category, to obtain the functor to $h\operatorname{Fun}(N(I)^{\mathrm{op}},\mathrm{Sp})$. Here $N(I)$ records composable strings of arrows and $h$ takes components of mapping spaces. Each pointwise stable weak equivalence maps to an isomorphism of coherent diagrams by reference 4, Theorem 4.4.4.4: it is a supplied natural transformation whose components are equivalences. Reference 3 supplies the criterion that an isomorphism in this latter homotopy category is represented by an equivalence of entire coherent diagrams. This does not identify it with $\operatorname{Fun}(I^{\mathrm{op}},h\mathrm{Sp})$.

[F8] Reference 2 supplies the following coniveau models over the fixed perfect field. Its $\mathrm{Sm}/k$ has smooth separated finite-type objects and all morphisms; $\mathrm{Sm}//k$ has the same objects and smooth morphisms. Its support construction $E^{(p)}(Y,n)$ is the homotopy colimit of restriction fibers $E^W(Y\times\Delta^n)$ over closed supports meeting every face in codimension at least $p$; $E^{(p/p+1)}$ is the consecutive cofiber, and $|{-}|$ denotes its total simplicial spectrum as in §§1.6–2.1. These constructions and their functorial replacements are imported, not newly proved foundations. Put $Q_j=K^{(j/j+1)}\in\mathrm{Spt}(\mathrm{Sm}/k)$ for the rectified layer. Corollary 4.1.5 gives $Q_j|_{\mathrm{Sm}//k}\cong A_j$, where $A_j(Y)=|K^{(j/j+1)}(Y,\bullet)|$, in $\mathrm{HSpt}(\mathrm{Sm}//k)$. Crucially, the first sentence of the proof of Theorem 6.5.1 states the separate global isomorphism $\mathcal Z^j\cong Q_j$ in $\mathrm{HSpt}(k)$, meaning the pointwise category of §§1.2–1.3. Here the source has just defined $\mathcal Z^j$ as the ordinary Eilenberg–Mac Lane spectrum of its fibrant complex presheaf. Thus it is exactly the model $G_j^{\mathrm{s}}$ selected in [F9], up to the ordinary additive model comparison of [F7]. Import this assertion for those models; it is not an assertion about an unspecified component of an arbitrary representative of $\mathcal Z$. Theorem 5.3.1(3) and the proof of Theorem 6.4.2 then identify $A_j$ with the total spectrum $T_j$ of $T_{j,n}(Y)=(Q_j)^{(j/j+1)}(Y,n)$. The same proof constructs the weak equivalence $T_{j,n}(Y)\to K(z^j(Y,n),0)$ as its canonical zeroth Postnikov map: Corollary 5.3.2 identifies its summands with the ordinary coefficient $K_0(k(x))=\mathbb Z$ at admissible codimension-$j$ points. It verifies compatibility with the simplicial maps by the displayed generic G-theory/cycle diagrams on pp.36–37. The ordinary coefficient is dimension, sending the one-dimensional field class to $+1$. Theorem 6.4.1 checks homotopy invariance, Nisnevich excision and the finite-field axiom A3 for K-theory; Remark 9.0.4 removes an infinite-field restriction in the stable construction. Thus the required coniveau comparisons apply to this $k$ and $j$. Section 1.6, p.9, supplies functorial Postnikov constructions, applicable to a whole diagram; (6.4.1) uses the ordinary zeroth-layer endpoint $K(\pi_0E,0)$. Here $K(A,0)$ denotes the Eilenberg–Mac Lane spectrum of the abelian group $A$ in degree zero, not algebraic $K$-theory. Retain functorial replacement zigzags if the chosen model requires them. Sections 2.1–2.2, pp.10–12, supply the support construction's functoriality for open immersions, its layers and its natural transformations. In Theorem 6.4.1 and the proof of Theorem 6.4.2, $G(Z)$ means the algebraic $K$-theory of coherent sheaves on the support $Z$, which need not be smooth; the ambient scheme is smooth. For each admissible integral $Z$ with generic point $x$, the supported map $G(Z)\to T_{j,n}(Y)$ of that proof sends $[\mathcal O_Z]$ to coefficient $+1$ at $x$ and zero at the other codimension-$j$ generic points under Corollary 5.3.2. For precision, these imports include the resolution comparison $c_S:K(S)\to G(S)$ on the smooth regular ambient $S$ and its smooth open complement $S\setminus Z$, and the localization equivalence $\lambda_{S,Z}:G(Z)\to\operatorname{fib}(G(S)\to G(S\setminus Z))$. They are the comparisons used in the proof of Theorem 6.4.1, p.35, to obtain $K^Z(S)\simeq G(Z)$, and then in the displayed supported map of the proof of Theorem 6.4.2, p.36. Here $S=Y\times\Delta^n$ and $Z$ is an admissible integral closed subscheme. Throughout this auxiliary coniveau construction, $K$ denotes reference 2's chosen presheaf; it is not being identified with the EM perfect-complex model. The latter enters through [F1], while the connection between the two comparison legs is the assembled motivic spectrum in [F9]. Step 1.1 forms the supported inverse from $c$ and $\lambda$ as a natural zigzag on open pairs, checks the generator restriction square, and constructs the natural inverse group isomorphism before applying [F7].

[F9] Fix the following model interface from references 1–2. Let $L_j$ be the strict fibrant complex presheaf called $Z^j$ in Levine §6.5, pp.37–38, with homological degree $n$ read as cohomological degree $-n$. Set $G_j^{\mathrm{s}}=\mathrm{EM}_{\mathrm{s}}(L_j)$, with the ordinary additive model comparison in [F7] understood. Section 6.5 supplies its natural localization equivalences $G_j^{\mathrm{s}}\to\Omega_{\mathbb P^1}G_{j+1}^{\mathrm{s}}$. Definition 8.1.1, Example 8.2.2(3) and the opening of §10.4 identify $\mathcal Z$ with the resulting $\mathbb P^1$-Omega spectrum $(G_0^{\mathrm{s}},G_1^{\mathrm{s}},\ldots)$ of ordinary sequential $S^1$-spectral presheaves. These entries are spectra, not their zeroth pointed spaces. Section 8.1 defines positive $\mathbb P^1$ suspension by the tail $(E_1,E_2,\ldots)$; §8.2 gives the derived zeroth-entry right adjoint, and Remark 8.2.1(2) states that weak equivalences between fibrant motivic models induce pointwise weak equivalences on their $S^1$-spectral entries. In the coherent notation of reference 1, §3.2, $\omega^\infty(E)=\operatorname{map}_{\mathrm{SH}(k)}(M_k(-),E)$ and $\omega^{\infty,\mathrm{gr}}(E)^j=\omega^\infty(E\otimes\mathbb T_k^{\otimes j})$. Its proof of Theorem 6.3 characterizes this same assembled $\mathcal Z$ by $\omega^{\infty,\mathrm{gr}}(\mathcal Z)^j=\mathcal Z^j$, where the right side is the complex-valued presheaf just recalled from Levine §6.5, viewed as a spectral presheaf by ordinary Eilenberg–Mac Lane realization. Consequently its coherent spectral value is $\mathcal H(L_j)$, naturally identified with $J(G_j^{\mathrm{s}})$ by [F7]. This imports the model assembly and its derived-evaluation interface. It does not identify $L_j$ with the raw cycles by a sheaf-local inference; that further pointwise comparison is precisely [F8].

## External input
Reference 0 imports the actual graded identifications, cdh descent and regular-Noetherian tower comparison. Its Remark 3.6 attributes the slice foundation to then-in-preparation work; that foundation is not reconstructed here. Reference 0, Remark 3.6, and the existing augmented-tower supplier import the identification of the cdh tower with the evaluated absolute slice tower on qcqs equal-characteristic schemes. Reference 1, Definition 4.15 and Remark 4.21, supplies its absolute graded evaluation and represented smooth-field restriction in [F2]; the classical motivic spectrum is supplied by its proof of Theorem 6.3. Taking the graded cofiber and restricting these coherent functors is the local application in step 1.1. No affine-lisse-to-scheme-lisse identification is imported or inferred. Its §3.2 and proof of Theorem 6.3, together with reference 2, §§6.5, 8.1–8.2 and 10.4, supply the precise assembled-spectrum and derived-evaluation interface in [F9]. The local application in step 1.1 identifies its entry with the sequential presheaf actually used below, with no extra shift. Reference 2 supplies the separate pointwise isomorphisms and actual coniveau/Postnikov models in [F8], with the exact model meaning of [F7]. Its §1.6 supplies the functorial Postnikov construction, §§2.1–2.2 the open-functorial support operations, and Theorem 6.4.1 with the proof of Theorem 6.4.2 the supported G-theory maps and positive coefficient. The open-restriction square, the supported inverse of the resolution comparison on the whole open-pair diagram, and the natural inverse on abelian-group diagrams in step 1.1 are local deductions from these operations. The auxiliary coniveau K-model is used only in that leg; its interface with the represented leg is the common assembled spectrum, not an unstated identification with global vector-bundle K-theory. They supply the whole-diagram comparison before realization. In particular, use the explicit $\mathrm{HSpt}(k)$ assertion at the start of the proof of Theorem 6.5.1, together with Corollary 4.1.5 and the construction in Theorem 6.4.2; a Nisnevich-derived comparison alone is not promoted to a pointwise comparison. The local simplicial-realization supplier in [F7] identifies the ordinary additive endpoints with the fixed coherent realization. Reference 3 supplies the homotopy-category equivalence criterion; reference 4 detects equivalences of supplied coherent natural transformations componentwise. Their hypotheses and reading limits are in the six-field source records. Step 1.1 checks the application to the whole open diagram and then constructs the separated-open extension; step 2.1 composes with the actual tower map. These are local deductions from precise imported premises, not a local proof of their deep foundations.

## Proof
1.1 First check the absolute slice evaluation in [F2]. Use exactly the cdh-to-slice tower identification imported in [F1], including its transition maps, on the qcqs equal-characteristic schemes in [F5]. For each such $Y$, the functor $\operatorname{map}_{\mathrm{SH}(Y)}(1_Y,-)$ preserves limits and zero objects. It therefore commutes with loops, hence also with their inverse suspension; since a cofiber is the suspension of a fiber, it preserves finite cofibers. Taking the degree-$j$ cofiber of that tower identification therefore gives $\mathcal H(C_{j,F}(Y))[2j]\simeq\operatorname{map}_{\mathrm{SH}(Y)}(1_Y,s^j\mathrm{KGL}_Y)$. These are maps of the supplied whole presheaves: the tower identification and its graded cofiber retain all restriction maps and composition coherences. Reference 1, Definition 4.15, identifies the right endpoint with $\mathbb Z(j)^{\mathbb A}(Y)[2j]$, and Remark 4.21 identifies its restriction to $\mathcal O_k$ with $R_j(Y)$, using its smooth-pullback comparison. Thus the shift cancels before the represented-model leg, and this leg uses the actual absolute slice map fixed in [F1]. No comparison between scheme-level and affine Kan extensions is needed. This application retains the explicit source-version qualification of reference 0, Remark 3.6; its foundational tower identification remains imported. Now establish the represented-model leg of [F2]. Choose the single equivalence $s^0\mathrm{KGL}_k\simeq\mathcal Z$ supplied by its unit comparison through $s^0(1_k)$. By [F9], applying the coherent functor $E\mapsto\operatorname{map}_{\mathrm{SH}(k)}(M_k(-),\mathbb T_k^{\otimes j}\otimes E)$ gives $R_j\simeq\omega^{\infty,\mathrm{gr}}(\mathcal Z)^j\simeq\mathcal H(L_j)\simeq J(G_j^{\mathrm{s}})$, using the Bott/slice equivalence in [F2] for the first term and [F7] for the last. This computes the derived evaluation on the selected Omega-spectrum model; it does not evaluate an arbitrary nonfibrant representative. The shift is fixed: $\omega^{\infty,\mathrm{gr}}(\mathcal Z)^j=\mathcal Z(j)[2j]$ in reference 1, §3.2, whereas $R_j$ is already the unshifted graded spectrum, so the entry is the unshifted $L_j$. Every arrow in this calculation is a transformation of whole presheaves on smooth separated schemes. In particular precomposition by $M_k(V)\to M_k(Y)$ for an open immersion $V\hookrightarrow Y$ supplies its restriction and all composition coherences. The additive endpoint identification also commutes with these maps by [F7]. Thus the same $G_j^{\mathrm{s}}$ is available both as the represented endpoint and as the source of [F8]'s isomorphism. Now construct the last leg of [F2] from [F8]. Restrict its global $G_j^{\mathrm{s}}\cong Q_j$ to $\mathcal O_k$, then use Corollary 4.1.5 to compare $Q_j$ with $A_j$, and the coniveau self-layer comparison to compare $A_j$ with $T_j$. These are the specified isomorphisms of whole presheaves in the pointwise localization, not an inference from a derived-sheaf isomorphism. For the final $T_j$-to-cycle leg, use the fixed rectified presheaf $Q_j$ and its strict diagram $(Y,[n])\mapsto T_{j,n}(Y)$ on $\mathcal O_k^{\mathrm{op}}\times\Delta^{\mathrm{op}}$. Here $\Delta$ is the category of finite nonempty ordered sets and order-preserving maps. The support construction in [F8] supplies both open and simplicial arrows in this same diagram. For each admissible integral $Z\subseteq Y\times\Delta^n$, let $a_{Y,n}([Z])$ be the image of $[\mathcal O_Z]\in G_0(Z)=\pi_0G(Z)$ under [F8]'s supported map, and extend by integral linearity. By Corollary 5.3.2 and Theorem 6.4.2, $a_{Y,n}:z^j(Y,n)\to\pi_0T_{j,n}(Y)$ is an isomorphism: it sends each basis element to coefficient $+1$ at its own generic point and zero at the others. They also show $\pi_rT_{j,n}(Y)=0$ for $r\ne0$. For an open immersion $h:V\hookrightarrow Y$, put $Z_V=Z\times_Y V$. Exact restriction of coherent sheaves sends $\mathcal O_Z$ to $\mathcal O_{Z_V}$, or to zero if the restriction is empty. Write $S=Y\times\Delta^n$ and $S_V=V\times\Delta^n$. Use exactly [F8]'s auxiliary resolution/localization maps: $c_S$, $c_{S\setminus Z}$ and $\lambda_{S,Z}$, and the corresponding maps for $(S_V,Z_V)$. Exact open restriction commutes with the comparison functors defining $c$ and with closed pushforward from $Z$; its square with localization therefore induces the restriction map on the $G$-theory fibers. Thus $e_{S,Z}:=\operatorname{fib}(c_S,c_{S\setminus Z}):K^Z(S)\to\operatorname{fib}(G(S)\to G(S\setminus Z))$ is a natural equivalence on this diagram of open pairs, since both components of $c$ are equivalences by [F8]. The supported comparison is the natural zigzag $G(Z)\xrightarrow{\lambda_{S,Z}}\operatorname{fib}(G(S)\to G(S\setminus Z))\xleftarrow{e_{S,Z}}K^Z(S)$. Invert $e$ in the localization of the whole diagram, rather than selecting unrelated inverses on its values. If $q_{S,Z}:K^Z(S)\to T_{j,n}(Y)$ denotes [F8]'s supported coniveau map, the generator just defined is consequently $a_{Y,n}([Z])=\pi_0(q_{S,Z}e_{S,Z}^{-1}\lambda_{S,Z})([\mathcal O_Z])$. This makes the particular supported map, its direction and its restriction naturality explicit, using only the source's imported resolution/localization equivalences and its auxiliary $K$-model. The support-index maps, layer maps for the fixed $Q_j$, homotopy colimits and cofibers used in the supported map of Theorem 6.4.2 are functorial in this square; retain the natural zigzags representing any inverted comparison. On $\pi_0$ it follows that $\pi_0(h^*)a_{Y,n}=a_{V,n}h^*$, with precisely [F3]'s raw cycle restriction on the right. This checks the equality on every generator, including empty restrictions; an arbitrary open immersion factors through its open image and uses the same pullback operations. Theorem 6.4.2's two G-theory/cycle squares on pp.36–37 establish the face-map equality for these very generator maps. For a degeneracy, the simplex map is flat; its exact pullback carries the supported structure sheaf to its pulled-back structure sheaf, and the generic lengths give the ordinary flat cycle pullback. This agrees with the simplicial cycle structure of §6.2. Consequently $a$ is a natural isomorphism of abelian-group diagrams on the entire product category. Write $b=a^{-1}$; for every diagram arrow $r$, multiplying $\pi_0(r)a=a r$ by the inverse components gives $b\pi_0(r)=r b$, so these inverses are natural together. Apply the functorial Postnikov construction of [F8] to the entire strict spectral diagram and then apply $K(-,0)$ to $b$. This gives a natural comparison, allowing the functorial connective-cover zigzag, $T_{j,\bullet}\xleftarrow{\sim}\tau_{\geq0}T_{j,\bullet}\longrightarrow K(\pi_0T_{j,\bullet},0)\xrightarrow{K(b,0)}K(z^j(-,\bullet),0)$. Every arrow is a degreewise stable weak equivalence because $T_{j,n}(Y)$ has only its zeroth homotopy group and $b$ is a group isomorphism. The arrows and replacement zigzags are functors on the entire product diagram, so they retain all composition compatibilities before localization. Taking the source's total simplicial spectra gives $T_j\simeq B^{\mathrm{s}}$ in $\mathrm{HSpt}(\mathcal O_k)$. By [F7], ordinary additive realization agrees naturally with $\mathrm{EM}_{\mathrm{s}}$ of the unnormalized alternating-face complex, retaining the positive integer generator. Composing yields $G_j^{\mathrm{s}}\cong B^{\mathrm{s}}$ in that pointwise localization. Apply the single model-to-coherent-diagram functor of [F7]. It inverts pointwise weak equivalences, so the ordinary localization property factors it through $\mathrm{HSpt}(\mathcal O_k)$. The composite isomorphism and its inverse become inverse in $h\operatorname{Fun}(N(\mathcal O_k)^{\mathrm{op}},\mathrm{Sp})$. Reference 3 represents this isomorphism by an equivalence of entire coherent presheaves. The additive comparison identifies the right endpoint with the fixed $\mathcal H(z^j(-,\bullet))$, including open restrictions and shifts. Compose with the absolute slice-tower and represented-spectrum maps of [F2], already maps of whole functors, and fix this separated comparison with its stated normalization. Now fix a smooth finite-type $X/k$ and put $P(W)=\mathcal H(C_{j,F}(W))[2j]$ and $B(W)=\mathcal H(z^j(W,\bullet))$ for opens $W\subseteq X$. These are coherent spectral presheaves by [F1]–[F4]. For either $E=P$ or $B$, let $\mathcal S(W)$ be the poset of separated open subschemes $A\subseteq W$ and set $D_E(W)=\lim_{A\in\mathcal S(W)^{\mathrm{op}}}E(A)$. The index is small by [A1]; its arrows are restrictions. This defines a coherent presheaf by restriction of limiting cones and a natural map $u_E:E\to D_E$. If $W$ is separated, the unique arrows from the initial object $W$ in the opposite index identify the space of coherent cones with its component at $W$, so $u_E(W)$ is an equivalence. Here is an explicit comparison of the varying indices. Write $C_W=\mathcal S(W)^{\mathrm{op}}$, and for any open $U\subseteq W$ define $t_U:C_W\to C_U$ by $t_U(A)=A\cap U$. It is defined by [F6], including when $U$ is not separated. Let $i_U:C_U\hookrightarrow C_W$ be inclusion. Then $t_Ui_U=\mathrm{id}$, and the restrictions $A\to A\cap U$ give a natural transformation $\eta_U:\mathrm{id}_{C_W}\to i_Ut_U$ satisfying $t_U\eta_U=\mathrm{id}$ and $\eta_Ui_U=\mathrm{id}$. For a coherent diagram $F:N(C_U)\to\mathrm{Sp}$ and a test spectrum $T$, denote its coherent cone space by $\operatorname{Cone}_{C_U}(T,F)=\operatorname{Map}_{\operatorname{Fun}(N(C_U),\mathrm{Sp})}(\operatorname{const}T,F)$. Restriction along $i_U$ and precomposition along $t_U$ give maps between $\operatorname{Cone}_{C_W}(T,Ft_U)$ and $\operatorname{Cone}_{C_U}(T,F)$. Restriction after precomposition is the identity because $t_Ui_U=\mathrm{id}$. In the other order a cone $\alpha$ is sent to $\alpha i_Ut_U$; naturality along $\eta_U$ identifies it with $\alpha$, since both its constant source and $Ft_U$ send $\eta_U$ to identity arrows. This is a homotopy of maps of cone spaces, not just an equality of their components: the nerve of $\eta_U$ is a map $N(C_W)\times\Delta[1]\to N(C_W)$, and whiskering cones with this map supplies the homotopy and all its simplex compatibilities. Thus the two cone-space maps are inverse equivalences, naturally in $T$ and $F$. By the limit universal property in [F4], restriction along $i_U$ consequently gives $\lim_{A\in C_W}E(A\cap U)\simeq D_E(U)$. These identifications respect inclusions of opens: for $U'\subseteq U$, intersection twice equals intersection with $U'$, and the transformations $\eta$ are the corresponding composable restriction arrows. In particular they identify the maps induced by $E(A\cap U)\to E(A\cap U')$ with the canonical restriction $D_E(U)\to D_E(U')$. Now let $W=R\cup S$. For each $A\in C_W$, [F6] makes $A\cap R$, $A\cap S$ and $A\cap R\cap S$ separated, and [F3]–[F4] make the canonical restriction square a pullback. These squares form a coherent diagram in $A$, because they are restrictions of the single presheaf $E$. Thus the canonical transformation $E(A)\to E(A\cap R)\times_{E(A\cap R\cap S)}E(A\cap S)$ is an equivalence of whole $C_W$-diagrams, by reference 4 applied to its equivalence components. Taking its limit gives $D_E(W)\simeq (\lim_{C_W}E(A\cap R))\times_{\lim_{C_W}E(A\cap R\cap S)}(\lim_{C_W}E(A\cap S))$. To justify this interchange without selecting objectwise pullback inverses, for any $T$ the cone space on the pullback diagram is the pullback of the three cone spaces: a coherent map to a pullback is a pair of maps with their specified homotopy, and imposing compatibility with every simplex of $N(C_W)$ imposes that same condition on the cones. Equivalently, both orders of limits classify cones on the product of $N(C_W)$ and the span indexing the pullback. This proves the interchange by [F4]'s mapping-space universal property, naturally in all restriction maps. Apply the preceding intersection comparison for $U=R,S,R\cap S$. It identifies this pullback with $D_E(R)\times_{D_E(R\cap S)}D_E(S)$ and identifies its map from $D_E(W)$ with the canonical restrictions. This proves binary Mayer–Vietoris for $D_E$, including all higher coherences and naturality under inclusions of separated opens. Now choose a finite affine cover of $W$ by [F5]. Induct on its size using binary Mayer–Vietoris for both $E$ and $D_E$. At an induction step the new intersection is an open of the final affine chart, hence separated by [F6], so $u_E$ is already an equivalence there; it is also one on that chart and on the preceding union by induction. Pullbacks preserve these equivalences. The empty case has value zero on both sides, since the empty open is separated. Therefore $u_E(W)$ is an equivalence for every $W$. The global separated comparison [F2] gives an equivalence of the two limiting diagrams, hence $D_P\simeq D_B$. Compose $P\xrightarrow{u_P}D_P\simeq D_B\xleftarrow{u_B}B$ and invert only natural equivalences. This gives a coherent comparison on all opens, independent of the finite cover used to verify equivalence, and equal to the selected comparison on separated opens. The indexing poset consists intrinsically of separated opens of $W$, so the construction commutes with open immersions also when the ambient $X$ changes. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, given, construct]

2.1 Apply [F1] on every open, which is in the same smooth finite-type qcqs domain by [F5]. Taking the actual graded cofiber of its augmented tower comparison gives $\operatorname{gr}^jK\simeq\mathcal H(\mathbb Z(j)_{\mathrm{mot}})[2j]\simeq P$. Compose with step 1.1. The shifts cancel because $C_{j,F}$ compares with the reindexed raw cycle complex shifted by $-2j$, and [F4] commutes with integer shifts. Thus the last term is $B$, with $\pi_iB=H_i z^j$. All constructions were maps or equivalences of coherent diagrams, so restricting this diagram to any open-complement arrow and taking its fiber preserves the equivalence. No arbitrary objectwise choice, cross-weight compatibility or cycle multiplication has entered. [F1, F4, F5, step 1.1] ∎

## Reading limits
Job-04987 read the entire current assigned body, verified its frozen SHA256, and compared every one of its 29 declared suppliers at the current Statement/Definition interface. The full interfaces were consulted where the frozen excerpt was truncated. The raw-descent supplier's Proof 1.1 was also checked for the domain of all opens. This is an application and prerequisite check, not a supplier-proof audit.

The current Statements and actual use paragraphs F6 of `lem-smooth-leading-cycle-normalization` and F3 of `lem-adjudicate-3b3fcff266fc-smooth-relative-slice-transport` were read. This repair leaves the assigned Statement, its fixed separated comparison, positive generator and shift unchanged. Neither consumer requires an interface edit.

Fresh primary-source reading for job-04987 is limited to the final paragraph of reference 4. All preceding source-reading records belong to earlier jobs and grant this assignment no reading or acceptance credit. The other four source records and their imported premises are retained without a claim of fresh primary-source verification. The new proof supplies the intersection-retraction homotopy on coherent cone spaces and the pullback of diagram limits locally. No original-PDF defect, independent rejudgment, library audit, publication or gate credit is claimed. Coverage and historical reports are unchanged.

Job-04994 read the entire frozen assigned source, all 29 current direct Statement/Definition supplier interfaces (using the full current sources rather than truncated excerpts), the augmented-tower supplier's External input and the raw-descent supplier's Proof 1.1. The two direct consumers' Statements and actual use paragraphs F6 and F3 were checked. Their interfaces are unchanged and need no maintenance. Fresh field-model source reading is limited to the passages recorded under references 0–1. A spot check of the cached Levine extraction at the end of the proof of Theorem 6.4.2 and in Section 6.5, including the opening of the proof of Theorem 6.5.1, corroborated the unchanged pointwise endpoint; no broader Levine reading is claimed. The other deep imported comparisons are retained without fresh proof-review credit. The repair changes no Statement, positive generator, cycle leg, coverage, authoring home or report page. It supplies a local cofiber application of an existing exact imported tower interface. Independent rejudgment remains pending.
