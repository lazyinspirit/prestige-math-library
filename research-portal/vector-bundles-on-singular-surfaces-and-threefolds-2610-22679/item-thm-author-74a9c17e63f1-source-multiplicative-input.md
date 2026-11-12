---
title: External actual graded algebra and multiplicative tower spectral sequence
status: published
research_item: thm-author-74a9c17e63f1-source-multiplicative-input
dependency_level: 14
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: "Version 1 (15 September 2023): §2.2 pp.11–12; Definition4.9 and
        Theorem4.10(1)–(2) pp.21–22; Definition4.23 pp.27–28 and Theorem4.24
        p.28; Theorem4.12 pp.22–23 and Theorem4.27 p.29; §3.1 p.13."
      statement: The specified pullback filtered E_infinity algebras define Z(r)_mot
        as their shifted actual graded pieces, zero in negative weights. Section
        2.2 gives monoidal associated graded. Theorems 4.12(1) and 4.27(1)
        supply bounded multiplicative convergence in finite valuative dimension.
      hypotheses: Qcqs schemes over Q or F_p. No dimension hypothesis for the filtered
        algebra or its graded construction. Finite valuative dimension for the
        boundedness and convergent multiplicative spectral sequence. Only
        qualitative boundedness is used; the printed numerical estimates are
        excluded.
      reading_limits: This repair reread the primary v1 PDF extraction at Section 2.2,
        Definitions 4.9/4.23, Theorems 4.10(1)/4.24(1), Theorems 4.12/4.27 and
        their boundedness paragraphs, and the Section 3.1 connectivity
        paragraph. Import the stated constructions and qualitative boundedness;
        do not reconstruct trace/descent proofs or assert an optimal constant.
        Existing source qualifications are retained, not expanded into a
        prerequisite-source defect audit. No successful source-page image
        inspection or byte-pinned download is claimed.
    - title: Daniel Dugger, Multiplicative structures on homotopy spectral sequences I
      url: https://arxiv.org/pdf/math/0305173v1
      locator: "v1, Section 6: Theorem 6.1 p.13; Theorem 6.2, homotopy/local
        realizability definitions and Proposition 6.4 p.14"
      statement: Theorems 6.1/6.2 construct spectral-sequence pairings for rigid or
        cofibrant point-set towers; Section 6.3 and Proposition 6.4 require
        local realizability for homotopy pairings.
      hypotheses: Rigid tower pairings, cofibrant towers with strict pairings, or
        locally realizable homotopy pairings, respectively. These hypotheses are
        not inferred here from a coherent algebra. This reference documents the
        scope distinction; reference 2 supplies the applicable
        infinity-categorical theorem.
      reading_limits: This repair reread the v1 PDF extraction at these statements and
        the realizability definitions. This reference only distinguishes the
        point-set hypotheses; it supplies no rectification of the coherent EM
        algebra. No fresh reading of Section 5, the proofs on pp.16–17, or
        Appendices B/C is claimed.
    - title: "Alice Petronella Hedenlund, Multiplicative Tate Spectral Sequences (PhD
        thesis, 2020), Part II: Multiplicative spectral sequences via décalage"
      url: https://www.mn.uio.no/math/personer/vit/rognes/theses/hedenlund-thesis.pdf
      locator: "Part II: Definition II.1.1 (PDF p.204), Section II.1.3 (PDF p.207),
        Theorem II.1.21 (PDF pp.214–215), Section II.2.1 including Proposition
        II.2.1 (PDF pp.218–219), Definition II.2.15 (PDF p.230), Proposition
        II.2.19 (PDF p.231), Theorem II.2.22 (PDF pp.233–234), Theorem II.3.2
        (PDF pp.234–235), Definition II.3.4 and Theorem II.3.5 with proof (PDF
        pp.236–239); PDF page numbers are one-based"
      statement: The spectral-sequence functor on coherent integer filtrations of
        spectra with Day convolution is a map of infinity-operads. Pairings
        start with homotopy of the graded product, obey the graded Leibniz rule,
        and commute with the specified page-to-homology identifications.
      hypotheses: The actual infinity-category of spectra and its coherent decreasing
        integer filtrations with Day convolution; multilinear maps in that
        category. No completeness, convergence or compact-sphere grading functor
        is assumed. A commutative Day algebra supplies the required operations
        and unit.
      reading_limits: Read the primary PDF extraction at the listed
        definitions/statements and the proof of II.3.5, including both pairing
        axioms and its use of II.2.22. Read the displayed Leibniz diagram of
        II.1.21 and the Dec construction. Import the Beilinson/Dec theorems; do
        not claim reconstruction of their foundations. Source screenshot
        requests failed with cache misses and shell download failed; no image
        inspection or byte pinning is claimed.
    - title: Benjamin Antieau, Spectral sequences, décalage, and the Beilinson
        t-structure
      url: https://arxiv.org/pdf/2411.09115v1
      locator: v1 (14 November 2024), Example 2.13(a) p.6; Definition 3.25 p.10;
        Construction 4.5 and Remark 4.7 p.14; Definitions 4.8/4.11, Construction
        4.10 and Proposition 4.12 pp.15–16; Theorem 4.13, Corollary 4.14 and
        Remark 4.15 p.16
      statement: Spectra have the standard homotopy t-structure with heart Ab. The
        Dec-page construction agrees naturally, including differentials, with
        the relative-cofiber construction of the spectral sequence (Construction
        4.10 and Definition 4.11).
      hypotheses: A stable infinity-category with sequential limits and colimits and a
        fixed t-structure. Apply to spectra with the standard t-structure. The
        incomplete Beilinson convention is Definition 3.25. No completeness or
        convergence hypothesis is required for this comparison.
      reading_limits: Read the versioned primary PDF extraction at these definitions,
        formulas and comparison statements, including the relative-cofiber image
        formula and the induced differential. The comparison theorem is
        imported; its proof and the construction of Beilinson truncations are
        not reconstructed. Only the local application to the declared tower is
        proved here.
external_input: true
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [math:ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces](https://alphabetamath.cc/item/ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [math:cor-dimension-of-a-finite-polynomial-ring-over-a-field](https://alphabetamath.cc/item/cor-dimension-of-a-finite-polynomial-ring-over-a-field)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · Version 1 (15 September 2023): §2.2 pp.11–12; Definition4.9 and Theorem4.10(1)–(2) pp.21–22; Definition4.23 pp.27–28 and Theorem4.24 p.28; Theorem4.12 pp.22–23 and Theorem4.27 p.29; §3.1 p.13. `](https://arxiv.org/pdf/2309.08463v1)
- [` Daniel Dugger, Multiplicative structures on homotopy spectral sequences I · v1, Section 6: Theorem 6.1 p.13; Theorem 6.2, homotopy/local realizability definitions and Proposition 6.4 p.14 `](https://arxiv.org/pdf/math/0305173v1)
- [` Alice Petronella Hedenlund, Multiplicative Tate Spectral Sequences (PhD thesis, 2020), Part II: Multiplicative spectral sequences via décalage · Part II: Definition II.1.1 (PDF p.204), Section II.1.3 (PDF p.207), Theorem II.1.21 (PDF pp.214–215), Section II.2.1 including Proposition II.2.1 (PDF pp.218–219), Definition II.2.15 (PDF p.230), Proposition II.2.19 (PDF p.231), Theorem II.2.22 (PDF pp.233–234), Theorem II.3.2 (PDF pp.234–235), Definition II.3.4 and Theorem II.3.5 with proof (PDF pp.236–239); PDF page numbers are one-based `](https://www.mn.uio.no/math/personer/vit/rognes/theses/hedenlund-thesis.pdf)
- [` Benjamin Antieau, Spectral sequences, décalage, and the Beilinson t-structure · v1 (14 November 2024), Example 2.13(a) p.6; Definition 3.25 p.10; Construction 4.5 and Remark 4.7 p.14; Definitions 4.8/4.11, Construction 4.10 and Proposition 4.12 pp.15–16; Theorem 4.13, Corollary 4.14 and Remark 4.15 p.16 `](https://arxiv.org/pdf/2411.09115v1)


## Statement
Assume the Axiom of Choice and fix the compatible size conventions of the local filtration realization. On qcqs schemes over $\mathbb Q$ or $\mathbb F_p$ for a prime $p$, the EM filtration used by the completed local filtration definition is the actual pullback filtered $E_\infty$-algebra of EM Definition4.9 in characteristic zero and Definition4.23 in characteristic $p$. Its natural graded equivalence is
$$\gamma_r:\operatorname{gr}^rF_{\mathrm{mot}}K\xrightarrow{\sim}\mathbb Z(r)_{\mathrm{mot}}[2r].$$
For $r\geq0$ these are the very complexes defining the completed motivic cohomology. For $r<0$ both sides are zero under the explicit source convention. Associated graded is strong symmetric monoidal for Day convolution, so this is the specified graded algebra structure, with products induced from the actual filtered multiplication. Its associated tower spectral sequence has multiplicative page pairings, the graded product on its initial page, differential derivation rules and compatibility with the filtered abutment product where bounded convergence applies. No convergence hypothesis is needed to define the products on finite pages.

## Facts & Assumptions
[A1] Assume the Axiom of Choice and the fixed nested universes and scheme-size bounds of the local filtration and complex realizations. Their existence is a size assumption. This retains the supplied foundations of the perfect-complex construction; no new geometric restriction is imposed. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [def-motivic-filtration](item-def-motivic-filtration) [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

**Given:** Choice, these compatible size conventions, a qcqs prime-field scheme $X$, and the same actual multiplicative filtered object and complex-valued functors as in the declared suppliers.

**Goal:** Identify the graded algebra and justify finite-page multiplicativity on this coherent tower, with convergence asserted only under its separate boundedness hypothesis.

[F1] [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input) and [def-motivic-filtration](item-def-motivic-filtration) specify the functorial filtered algebra, its augmentation to $K(X)$, and constant nonpositive extension. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the same prime-field motivic complex functor; [def-motivic-cohomology](item-def-motivic-cohomology) names its cohomology. Reference 0, Definitions 4.9/4.23, identifies it with the shifted graded cofiber of this actual algebra; Theorems 4.10(1)/4.24(1) give zero in negative weights.

[F2] [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) supplies the decreasing Day category, coherent commutative algebras, strong symmetric monoidal associated graded, and compatibility of its products with the cofiber projections. Its tensor is the colimit over $i+j\geq h$ of the stagewise smash products. This is the concrete Day tensor of reference 2, Section II.1.3; thus its coherent finite-input operations, permutations and unit are operations in the source category of Theorem II.3.5.

[F3] [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) gives the actual stable presentable category of spectra, all small limits and colimits, and separately colimit-preserving smash under [A1]. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies its sphere, homotopy groups, shifts and coherent cofiber triangles. Reference 3, Example 2.13(a), supplies the standard homotopy t-structure: connective means $\pi_i=0$ for $i<0$, coconnective means $\pi_i=0$ for $i>0$, and its heart is abelian groups. These are the ambient objects of reference 2 and the hypotheses for the comparison in reference 3. No symmetric monoidal functor from the discrete grading group to sphere shifts is asserted or required.

[F4] Reference 2, Definition II.3.4 and Theorem II.3.5, imports a map of infinity-operads from coherent filtered spectra to spectral sequences with multilinear pairings. Concretely, it preserves finite-input composition, permutations and units; its binary pairings satisfy the differential Leibniz rule and commute with the specified identifications of the next page with homology. Its initial pairing is homotopy of the actual associated-graded pairing, and its proof uses the lax symmetric monoidal Dec functor and the monoidal page-to-homology comparison. This applies directly to [F2], without completeness or a choice of point-set realization. Reference 1 records instead the additional rigid/cofibrant or locally realizable point-set hypotheses; this item does not infer them from a coherent algebra.

[F5] [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) constructs the local pages from the stage long exact sequences. For comparison, write $\widetilde E_u^{h,n}$ for reference 2's $E^u_{n,h}$, so $\widetilde E_1^{h,n}=\pi_n\operatorname{gr}^hF$ and its differential has degree $(u,-1)$. Reference 3, Construction 4.10, Definition 4.11 and Theorem 4.13, identifies the same Dec construction with the relative-cofiber spectral sequence. In its homological coordinates $(p,q)$, put $h=-p$ and $n=p+q$; its page is the image of $\pi_n(F^h/F^{h+u})\to\pi_n(F^{h-u+1}/F^{h+1})$, where $F^i/F^j=\operatorname{cofib}(F^j\to F^i)$ for $i\leq j$. Thus the comparison concerns every differential, not just the initial groups. The local convention remains $E_s^{a,b}=\widetilde E_{s-1}^{-b,-a-b}$ for $s\geq2$.

[F6] [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) specifies finite valuative dimension and degreewise stage bounds. Reference 0, Theorems 4.12(1)/4.27(1), imports bounded multiplicative convergence for the actual EM algebra under finite valuative dimension. Its Section 2.2 boundedness convention gives a finite $B(X)$ with $\pi_mF^j=0$ for $m<j-B(X)$. No printed explicit constant is used.

[F7] [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) identifies spectral $K_0$ on an affine scheme with its vector-bundle Grothendieck group, under [A1]. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface) identifies bundles on $\operatorname{Spec}\mathbb F$ with finite projective $\mathbb F$-modules, preserves sums, and splits short exact bundle sequences. The dimension computation is [math:ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces](https://alphabetamath.cc/item/ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces). [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence) turns the scalar inclusion and polynomial evaluation at zero into the structure map and zero section of $\mathbb A^1_{\mathbb F}=\operatorname{Spec}\mathbb F[t]$. The $n=1$ case of [math:cor-dimension-of-a-finite-polynomial-ring-over-a-field](https://alphabetamath.cc/item/cor-dimension-of-a-finite-polynomial-ring-over-a-field) gives $\dim\mathbb F[t]=1$, hence $\dim\mathbb A^1_{\mathbb F}=1$ by the affine prime-chain convention. These inputs support only the source-qualification tests below.

## External input
The imported graded construction and conditional bounded convergence are reference 0 in [F1] and [F6]. Reference 2 in [F4] imports coherent multiplicativity directly for filtered spectra. Reference 3 in [F3] and [F5] supplies the standard homotopy t-structure and the comparison with relative-cofiber pages. Its hypotheses hold by the declared spectral suppliers. Each source records its statement, hypotheses, locator and actual reading limits. Reference 1 only records the distinct point-set applicability conditions. The application, index comparison and bounded representative argument below are local adaptations of these explicit imports.

## Proof
1.1 Under [A1], evaluate the actual filtered algebra in [F1] on $X$. The complexes in the Statement are exactly its shifted graded pieces by reference 0, so their comparison maps are the specified natural $\gamma_r$; negative pieces vanish by the same input and constant nonpositive extension. Apply [F2] to transport the actual associated-graded algebra along these equivalences. This gives the stated products and their compatibility with stage-to-cofiber maps. The coherent finite-input operations of this Day algebra lie in exactly the category of filtered spectra used by [F4], with ambient spectra and size conditions as in [F3]. Applying the imported map of infinity-operads gives associative, unital and graded-commutative products on all finite pages, compatible with their differentials and homology transitions. It uses the actual spectral symmetry, including its suspension signs, and does not replace that symmetry by the trivial symmetry of a discrete grading group. [A1, F1, F2, F3, F4, given]

2.1 To check that these are the local tower pages, use [F5]. Both sources define Dec by taking underlying colimits of Beilinson connective covers, with the same condition that $\operatorname{gr}^hF$ is $(v-h)$-connective for the cover of degree $v$; their connective-cover right adjoints and hence their Dec functors agree. The comparison theorem in [F5] therefore identifies reference 2's pages and differentials with the relative-cofiber construction. For the latter, put $G_n^i=\pi_nF^i$, let $P_h:G_n^h\to\pi_n\operatorname{gr}^hF$ be projection and $\delta_h:\pi_n\operatorname{gr}^hF\to G_{n-1}^{h+1}$ the connecting map. The stage/cofiber long exact sequences identify its page-$u$ image with $N_u/B_u$, where $N_u=\delta_h^{-1}\operatorname{im}(G_{n-1}^{h+u}\to G_{n-1}^{h+1})$ and $B_u=P_h\ker(G_n^h\to G_n^{h-u+1})$: projection from $\pi_n(F^h/F^{h+u})$ has image $N_u$, and passing to $F^{h-u+1}/F^{h+1}$ kills exactly $B_u$. These are exactly the explicit derived-couple subquotients of the local tower supplier; the connecting maps inducing their differentials are the same. Thus the comparison identifies all pages, differentials and homology transitions. For $u=s-1$, $(h,n)=(-b,-a-b)$ goes to $(h+u,n-1)$, giving the local differential target $(a+s,b-s+1)$. Products add $(h,n)$, hence $(a,b)$; the Leibniz sign is $(-1)^n=(-1)^{a+b}$, and the commutativity sign for homotopy degrees $n,n'$ is $(-1)^{nn'}$. The initial product is that of step 1.1, and the imported compatibility with page-to-homology maps preserves these laws on later pages. No convergence premise has entered. When bounded convergence applies, [F6] imports the actual EM filtered abutment product. More explicitly, the bounds in [F6] and constant nonpositive stages satisfy the degreewise bounds in [F5]; any stable page class is then represented by a stage class. Multiplying stage representatives gives both the page product and the product in the image-filtration quotient, by the graded projection compatibility of [F2]. This verifies that the comparison preserves the stated filtered abutment product, while retaining the full qcqs scope on finite pages. [A1, F2, F3, F4, F5, F6, step 1.1, algebra] ∎

## Source qualifications
In Elmanto–Morrow v1, the classical paragraph on printed p.13 gives the homological lower-bound order $\dim X-j$. Its compatible order is $j-\dim X$: the printed order at $X=\mathbb A^1$, $j=0$ would incorrectly force $K_0(X)=0$. The boundedness proofs on pp.23 and29 similarly print the lower bounds $d+1-j$ and $d+2-j$ for the motivic stages. At stage zero over the respective prime field ($d=0$), these would kill $K_0=\mathbb Z$. These are retained source errors; they do not refute the separately stated boundedness theorem. Only boundedness in the §2.2 sense, with some finite $B(X)$ and connectivity growing as $j-B(X)$, is imported. No corrected explicit numerical constant is asserted here. The characteristic-zero defining square is (4.3), although the p.23 proof refers to (4.6); (4.6) is the characteristic-$p$ square.

Here is the missing justification of the $K_0$ tests, using [F7]. A finite projective module over a field is a finite-dimensional vector space, and conversely: lifting finitely many basis vectors through a surjection gives its projectivity. Thus the affine bundle equivalence and the bridge identify $K_0(\operatorname{Spec}\mathbb F)$ with the Grothendieck group of finite-dimensional $\mathbb F$-vector spaces. Dimension respects short exact relations because a basis of the subspace together with lifts of a basis of the quotient is a basis of the middle space; every class is its dimension times $[\mathbb F]$. Hence dimension and $n\mapsto n[\mathbb F]$ are inverse homomorphisms, giving $K_0(\mathbb F)=\mathbb Z$. For the affine line, the ring maps $\mathbb F\to\mathbb F[t]\to\mathbb F$ (the latter sends $t$ to zero) compose to the identity. The affine anti-equivalence gives $\operatorname{Spec}\mathbb F\xrightarrow{z}\mathbb A^1_{\mathbb F}\xrightarrow{p}\operatorname{Spec}\mathbb F$ with $pz=\mathrm{id}$. Contravariant functoriality of the supplied $K$-theory gives $z^*p^*=\mathrm{id}$ on $K_0(\mathbb F)$. Consequently $p^*(1)$ is nonzero; its image under the rank-at-zero homomorphism is $1$. This proves precisely the needed nonvanishing without claiming a computation of all of $K_0(\mathbb A^1)$. The dimension computation in [F7] makes the classical printed lower bound equal to $1$ at $j=0$. For the prime-field tests, a field is its own fraction field and its only valuation overring therein; its only prime is $(0)$. Thus the valuative dimension is $d=0$ by [F6], as used above.
