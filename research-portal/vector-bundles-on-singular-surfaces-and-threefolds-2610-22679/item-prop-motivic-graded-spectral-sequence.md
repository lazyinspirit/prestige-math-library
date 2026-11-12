---
title: Motivic graded pieces and spectral sequence
status: published
research_item: prop-motivic-graded-spectral-sequence
dependency_level: 20
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, conventions and Section 2 opening; p. 4, equation (2.1),
        Definition 2.2 and following spectral-sequence paragraph; p. 9, Lemma
        4.2 proof
      statement: The motivic filtration has the indicated cofiber triangles, shifted
        motivic graded pieces and page-2 formula. Finite valuative dimension
        gives completeness and convergence. Lemma 4.2 invokes eventual stagewise
        boundedness.
      hypotheses: Qcqs schemes over the standing algebraically closed field in Section
        2; weight nonnegative for equation (2.1). Completeness and convergence
        require finite valuative dimension. Lemma 4.2 concerns
        finite-dimensional Noetherian schemes. The arbitrary-field restriction,
        differential convention and explicit product sign are local applications
        of the declared suppliers.
      reading_limits: Historical reading record retained from the current item; these
        passages were not freshly inspected in this adjudication. Read the
        frozen PDF extraction at pp. 3–4 and the Lemma 4.2 proof on pp. 9–10,
        and inspected the supplied PDF page-4.png. This records only the
        relevant article assertions, without importing its other low-weight
        comparisons or claiming an independent reconstruction of Elmanto–Morrow.
    - title: Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: "v1, 15 September 2023 (title date 18 September): Theorem 1.1(1), p.3;
        section 2.2, pp.11–12; Definitions 4.9/4.23, pp.21 and 27–28; Theorems
        4.10(1)/4.24(1), pp.21 and 28; Theorems 4.12(1)/4.27(1), pp.22–23 and
        29."
      statement: Theorem 1.1(1) gives the actual motivic graded comparison and asserts
        completeness and convergence in finite valuative dimension. Section 2.2
        defines completeness as zero tower limit; the named construction and
        boundedness suppliers supply the remaining source data.
      hypotheses: Qcqs over Q or F_p. Finite valuative dimension is required only for
        the bound and convergence.
      reading_limits: Freshly checked the versioned primary PDF text at the
        prime-field convention on p. 2, Theorem 1.1(1) on p. 3 and Section 2.2
        on pp. 11–12 in this adjudication. The other retained locators were not
        freshly inspected and are used through the declared graded-algebra and
        stage-bound suppliers. Earlier reading records remain historical. Trace,
        descent and categorical foundations remain imported; no numerical
        connectivity estimate or reconstruction of those proofs is claimed.
    - title: Jacob Lurie, Higher Algebra (September 18, 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Theorem 7.1.2.13 and proof, printed pp. 1212–1213; Theorem 7.1.2.1,
        first proof paragraph, p. 1206; Remark 7.1.2.9, p. 1211; Definition
        7.1.1.2, p. 1199.
      statement: The canonical equivalence between HZ-module spectra and unbounded
        derived abelian groups identifies underlying spectral homotopy with
        chain homology, naturally in the complex. In cochain indexing this gives
        pi_n(U C) isomorphic to H^{-n}(C).
      hypotheses: Specialize the commutative ring R to Z. Use the same canonical
        equivalence defining U, unbounded complexes, Choice and compatible size
        conventions. There is no connectivity or boundedness hypothesis.
      reading_limits: Freshly checked Theorem 7.1.2.13 and its complete short proof,
        printed pp. 1212–1213, and the first proof paragraph of Theorem 7.1.2.1,
        p. 1206, in the primary PDF text. Their homology/Ext and free-module
        homotopy formulas give the stated identification after cochain
        reindexing. The other retained locators and earlier reading records are
        historical; recognition and model-category foundations are imported, not
        reconstructed.
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface)
- [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison)
- [lem-author-74a9c17e63f1-index-calculation](item-lem-author-74a9c17e63f1-index-calculation)
- [lem-author-74a9c17e63f1-graded-products](item-lem-author-74a9c17e63f1-graded-products)
- [lem-author-74a9c17e63f1-page-product-transport](item-lem-author-74a9c17e63f1-page-product-transport)
- [lem-author-74a9c17e63f1-bounded-convergence](item-lem-author-74a9c17e63f1-bounded-convergence)
- [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input)
- [thm-author-74a9c17e63f1-stage-bound-input](item-thm-author-74a9c17e63f1-stage-bound-input)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple)
- [math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences](https://alphabetamath.cc/item/prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 3, conventions and Section 2 opening; p. 4, equation (2.1), Definition 2.2 and following spectral-sequence paragraph; p. 9, Lemma 4.2 proof `](https://arxiv.org/abs/2610.22679v1)
- [` Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes · v1, 15 September 2023 (title date 18 September): Theorem 1.1(1), p.3; section 2.2, pp.11–12; Definitions 4.9/4.23, pp.21 and 27–28; Theorems 4.10(1)/4.24(1), pp.21 and 28; Theorems 4.12(1)/4.27(1), pp.22–23 and 29. `](https://arxiv.org/pdf/2309.08463v1)
- [` Jacob Lurie, Higher Algebra (September 18, 2017) · Theorem 7.1.2.13 and proof, printed pp. 1212–1213; Theorem 7.1.2.1, first proof paragraph, p. 1206; Remark 7.1.2.9, p. 1211; Definition 7.1.1.2, p. 1199. `](https://www.math.ias.edu/~lurie/papers/HA.pdf)


## Statement
Assume the Axiom of Choice and the fixed compatible size conventions of the supplied constructions. Let $k$ be any field. For a qcqs $k$-scheme $X$ and every $r\geq0$, the actual source graded comparison gives a natural exact triangle
$$F^{r+1}_{\mathrm{mot}}K(X)\longrightarrow F^r_{\mathrm{mot}}K(X)\longrightarrow\mathbb Z(r)_{\mathrm{mot}}(X)[2r].$$
The associated multiplicative spectral sequence has
$$E_2^{a,b}=H^{a-b,-b}_{\mathrm{mot}}(X,\mathbb Z)\Longrightarrow K_{-a-b}(X),\qquad d_s:E_s^{a,b}\to E_s^{a+s,b-s+1}.$$
The right-hand symbol denotes the filtered abutment when convergence holds. In the full-plane E2 formula the complex of a negative weight is explicitly extended by zero, agreeing with the source’s vanishing negative graded terms. Products add bidegrees and agree with the source motivic cup products; the differential satisfies the Leibniz rule with sign $(-1)^{a+b}$ for a class in bidegree $(a,b)$. If $X$ has finite valuative dimension, the filtration is complete and the spectral sequence converges multiplicatively to $K_*(X)$ with its finite image filtration and associated graded groups as stated by the tower interface.

## Facts & Assumptions
[A1] The Axiom of Choice and fixed compatible size conventions discharge the selected local perfect-$K$-theory realization premise when invoking the actual tower and its source inputs. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [def-motivic-filtration](item-def-motivic-filtration)

**Given:** Choice, these size conventions, an arbitrary specified field $k$, and the actual motivic tower and complex functors restricted from its prime field, with their specified products. The specified $k$ overrides the default algebraic-closedness convention.

**Goal:** Establish the natural triangles, products, page indices and finite-valuative-dimension convergence for this field.

[F1] [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) applies to any decreasing tower with the stated graded equivalences. [def-motivic-cohomology](item-def-motivic-cohomology) supplies the cohomology notation. The quotient-map and index calculations in [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison) and [lem-author-74a9c17e63f1-index-calculation](item-lem-author-74a9c17e63f1-index-calculation) record the corresponding formal calculations for the standing-field restriction; below they are repeated on the specified restriction.

[F2] [lem-author-74a9c17e63f1-graded-products](item-lem-author-74a9c17e63f1-graded-products) records the initial graded-product calculation for the standing-field restriction. [lem-author-74a9c17e63f1-page-product-transport](item-lem-author-74a9c17e63f1-page-product-transport), Proof 1.1–2.1, records the formal comparison through relative-cofiber pages and the stage-representative calculation for the bounded abutment on that restriction. Steps 3.1 and 4.1 repeat those finite-diagram calculations on the specified arbitrary-field restriction. In step 4.1, the initial product is identified directly by the prime-field graded algebra comparison in [F4], restricted as in step 1.1.

[F3] [lem-author-74a9c17e63f1-bounded-convergence](item-lem-author-74a9c17e63f1-bounded-convergence) records the high/low-stage calculation from a stagewise bound and constant nonpositive stages for the standing field; step 2.2 repeats that calculation for the specified restriction. Its standing-field completeness conclusion is not applied outside its scope. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) defines valuative dimension using the affine rings of the underlying scheme.

[F4] [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input) supplies the actual natural graded algebra comparison and coherent finite-page pairings on all qcqs schemes over $\mathbb Q$ or $\mathbb F_p$. Its Facts [F3]–[F5] and Proof 1.1–2.1 also supply the comparison of its source pages with the relative-cofiber pages, including differentials and specified next-page homology maps. In its notation $\widetilde E_u^{h,n}$ has initial page $\pi_nQ_h$ and differential degree $(u,-1)$; the corresponding relative page is $R_u^{h,n}=\operatorname{im}(\pi_n(F^h/F^{h+u})\to\pi_n(F^{h-u+1}/F^{h+1}))$, for $u\geq1$ and $F^i/F^j=\operatorname{cofib}(F^j\to F^i)$ when $i\leq j$. At $u=1$ the comparison is identity on $\pi_nQ_h$. The supplier checks the coherent Day algebra, the common décalage construction, and the standard homotopy t-structure on spectra with sequential limits and colimits; finite pages require no convergence or completeness. [thm-author-74a9c17e63f1-stage-bound-input](item-thm-author-74a9c17e63f1-stage-bound-input) separately supplies the qualitative bound in finite valuative dimension. Choice and the compatible sizes are those of [A1]; neither source input assumes algebraic closedness.

[F5] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the coherent spectra, cofibers, exact triangles, integer homotopy groups, shifts and small limits. Use the field-independent realization convention in [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison): $\mathcal U C$ is the underlying spectrum through $\mathcal D_\infty(\mathbb Z)\simeq\operatorname{Mod}_{H\mathbb Z}$, and $\mathcal U(C[t])\simeq(\mathcal U C)[t]$. Reference 2 directly supplies $\pi_n\mathcal U C\cong H^{-n}(C)$, naturally for every unbounded cochain complex $C$ and integer $n$, under these same size and Choice conventions. Thus the triangle's notation $\mathbb Z(r)_{\mathrm{mot}}(X)[2r]$ means $(\mathcal U\mathbb Z(r)_{\mathrm{mot}}(X))[2r]$.

[F6] A field is understood as in [math:def-field](https://alphabetamath.cc/item/def-field). [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) supplies a unit-preserving embedding $\iota:F\hookrightarrow k$ from $F=\mathbb Q$ or $\mathbb F_p$ for a prime $p$. [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence) gives $\operatorname{Spec}k\to\operatorname{Spec}F$. A scheme over a base and a morphism over that base have the meaning in [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). The abbreviation qcqs is defined in [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) by properties of the underlying scheme and its affine opens.

[F7] [math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple) specifies the image and cycle/boundary quotients used in the additive stage-couple derivation. [math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences](https://alphabetamath.cc/item/prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences) supplies its functoriality, preserving identities, compositions, differentials and page transitions. The explicit local quotient model is [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface), Proof 3.2; its bounded abutment identification is Proof 4.1–5.1. These are the additive-page inputs to step 3.1.

[F8] Reference 1, Theorem 1.1(1), imports completeness for the actual tower on a qcqs prime-field scheme of finite valuative dimension. Its Section 2.2 defines this as the tower limit being zero. This is the precise completeness premise used in step 5.1.


[F9] [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) supplies the coherent stage products, multiplicative augmentation and graded-projection identity. [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness) supplies natural long exact sequences for the finite cofiber triangles, using stability in [F5]. Pasting the defining cofiber pushouts gives the relative-cofiber triangles used in step 3.1. All these objects are built from the same restricted tower under [A1].

## External input
Reference 1 imports the completeness assertion in [F8] under its recorded hypotheses and reading limits. Reference 2 imports the homotopy–cohomology identification in [F5]. The actual graded algebra, finite-page pairings and qualitative stage bound are supplied by [F4]; the realization and shift convention are supplied by [F5]. The restriction, indexing, high/low-stage verification and transport below are local arguments. No local proof of these imported theorems is claimed.

## Proof
1.1 Under [A1], use the prime-field embedding and induced affine morphism of [F6]. Compose each structure morphism $X\to\operatorname{Spec}k$ with $\operatorname{Spec}k\to\operatorname{Spec}F$. A $k$-morphism commutes with these composites and so is an $F$-morphism. The underlying schemes and morphisms are unchanged, preserving qcqs, identities and composition; this gives the required forgetful functor. By the local definitions, both the tower and motivic complexes are restrictions along this functor. Restrict the actual natural equivalence $\gamma_r$ and the stage and quotient maps of [F4]. At each $X$, form the cofiber of the actual stage transition using [F5]. Its canonical quotient followed by $\gamma_r$ gives the asserted triangle with the spectral realization specified in [F5]. These are the actual natural source maps, so the triangle is natural under pullback. For $r<0$, the constant nonpositive stages make the transition an equivalence, including at $r=-1$, hence its cofiber is zero. This proves the negative-weight zero convention without a new geometric hypothesis. [A1, F1, F4, F5, F6]

2.1 Apply the generic tower construction in [F1] to these actual diagrams. Its initial page is $\pi_{-a-b}\operatorname{gr}^{-b}$, and the spectral shift and directly imported homotopy identification in [F5] give $\pi_n((\mathcal U C)[2r])\cong\pi_{n-2r}(\mathcal U C)\cong H^{2r-n}(C)$. Substitution of $r=-b$ and $n=-a-b$ gives $2r-n=a-b$. Thus the page is the stated motivic group, with zero terms for negative weights. The tower reindexing gives the displayed differential; its target has total homotopy degree $-(a+s)-(b-s+1)=-a-b-1$. [F1, F5, step 1.1, algebra]

2.2 Suppose $X$ has finite valuative dimension. Forgetting its $k$-structure changes neither its affine opens nor their rings, so the dimension condition in [F3] holds for its prime-field scheme. Apply the stage bound in [F4] to this very tower and choose its integer $B=B(X)\geq0$. For any integer $n$, put $U_n=\max(1,B+n+1)$ and $L_n=0$. If $r\geq U_n$, then $n<r-B$, so $\pi_nF^r=0$; if $r\leq L_n$, the map to $K(X)$ is an equivalence. The generic tower interface in [F1] therefore gives finite convergence and its associated-graded identification, with the actual image filtration. This argument also applies to the empty scheme under the same source contract. [F1, F3, F4, step 1.1, construct]

3.1 Work with the actual restricted tower of step 1.1. Write $F^h$ for its stage, $G_m^h=\pi_mF^h$, $Q_h=\operatorname{cofib}(F^{h+1}\to F^h)$, $P_h:G_n^h\to\pi_nQ_h$ for the projection and $\delta_h:\pi_nQ_h\to G_{n-1}^{h+1}$ for its connecting map. Fix $u\geq1$, $h=-b$ and $n=-a-b$. By [F7], the local page $E_{u+1}^{a,b}$ is $N_u/B_u$, with $N_u=\delta_h^{-1}\operatorname{im}(G_{n-1}^{h+u}\to G_{n-1}^{h+1})$ and $B_u=P_h\ker(G_n^h\to G_n^{h-u+1})$. Put $A_u=F^h/F^{h+u}$ and $B'_u=F^{h-u+1}/F^{h+1}$. Their canonical map factors as $A_u\to Q_h\xrightarrow{v_u}B'_u$. Cofiber pasting in [F5] gives triangles $F^{h+1}/F^{h+u}\to A_u\to Q_h$ and $Q_h\to B'_u\to F^{h-u+1}/F^h$. Exactness and natural connecting maps in [F9] identify the obstruction to lifting $e\in\pi_nQ_h$ to $\pi_nA_u$ with the image of $\delta_he$ in $\pi_{n-1}(F^{h+1}/F^{h+u})$. Its vanishing is precisely $e\in N_u$. Hence $\operatorname{im}(\pi_nA_u\to\pi_nQ_h)=N_u$. The second triangle makes $\ker\pi_n(v_u)$ the image of $\pi_{n+1}(F^{h-u+1}/F^h)$. Its connecting map factors through $G_n^h$ and $P_h$; exactness of $F^h\to F^{h-u+1}\to F^{h-u+1}/F^h$ identifies that intermediate image with $\ker(G_n^h\to G_n^{h-u+1})$. Thus $\ker\pi_n(v_u)=B_u$, and $B_u\subseteq N_u$ since $\delta_hP_h=0$. It follows that $[e]\mapsto\pi_n(v_u)e$ is a well-defined bijective homomorphism $N_u/B_u\to R_u^{h,n}$ for the actual relative page of [F4]. To check differentials, lift $\delta_he$ to $z\in G_{n-1}^{h+u}$. Both constructions send the represented class to $[P_{h+u}z]$ at $(h+u,n-1)$, by their common cofiber connecting maps; the boundary quotients remove the ambiguity of the lift. A differential cycle is represented in $N_{u+1}$ and its next-page homology class is its class modulo $B_{u+1}$ by [F7]. The relative-cofiber homology transition in [F4] is induced by these same nested cofiber diagrams and sends it to that same class. The comparison therefore respects differentials and the specified homology transitions, naturally for the actual diagrams. Compose with the inverse of [F4]'s source-to-relative comparison to obtain $\phi_s:E_s^{a,b}\xrightarrow{\sim}\widetilde E_{s-1}^{-b,-a-b}$ for $s=u+1$. At $u=1$ both relative cofibers are $Q_h$, $N_1=\pi_nQ_h$ and $B_1=0$, so $\phi_2$ is identity on graded homotopy before applying the motivic coordinate map $\gamma_h$. This verifies the comparison by finite cofibers for the specified field. [A1, F2, F4, F5, F7, F9, step 1.1, step 2.1]

4.1 Transport the source pairing by $xy=\phi_s^{-1}(\phi_s(x)\phi_s(y))$ in the output bidegree. The comparison in step 3.1 respects differentials and the specified homology transitions, so the source pairings of [F4] give multiplicative page transitions, associativity and the unit. The index change is additive; a source differential of degree $(s-1,-1)$ becomes $(s,1-s)$. At page 2, step 3.1 makes the comparison the identity on graded homotopy. By [F4], the prime-field comparison $\gamma_r$ identifies the actual graded algebra product with the specified motivic cup product. Under the restriction in step 1.1, the tower, its graded equivalences, its stage and graded products, and the motivic complexes are evaluated on the same underlying prime-field scheme. The same graded algebra identity therefore holds on the specified $k$-scheme, for every pair of weights, including the zero negative-weight terms. Combining this identity with the page-2 comparison gives exactly the asserted motivic cup product for the arbitrary specified field. A class in bidegree $(a,b)$ has homotopy degree $-a-b$, so the source Leibniz sign is $(-1)^{-a-b}=(-1)^{a+b}$. No convergence assumption has entered this finite-page argument. For the bounded abutment, write $a_h:G_n^h\to K_n(X)$ for augmentation. By [F7], a stable class represented by $P_h\alpha$ corresponds to $a_h\alpha$ modulo $F^{h+1}_{\mathrm{mot}}K_n(X)$, and every stable class has such a stage representative. For stage representatives $\alpha\in G_n^h$ and $\beta\in G_m^t$, their projections are cycles on every page since their connecting images vanish. By [F9], their initial product is $P_{h+t}\mu_*(\alpha,\beta)$. The multiplicative homology transitions just established carry this representative to the product on every later page. Choose a page beyond stabilization of the two input bidegrees and the output, as supplied by step 2.2. The stable identification sends the product to $a_{h+t}\mu_*(\alpha,\beta)=(a_h\alpha)(a_t\beta)$ modulo $F^{h+t+1}_{\mathrm{mot}}K_{n+m}(X)$, by multiplicativity of augmentation in [F9]. The unit is treated by the same calculation. Hence the bounded abutment products are exactly the image-filtration products on $K_*(X)$. [F1, F4, F7, F9, step 1.1, step 2.1, step 2.2, step 3.1, algebra]

5.1 Apply the completeness theorem imported in [F8] to the underlying qcqs $F$-scheme of step 1.1; its finite valuative dimension was checked in step 2.2. The source tower evaluated at that scheme and the restricted tower evaluated at the original $k$-scheme are the same coherent diagram of spectra. Consequently the zero-limit conclusion applies to this very tower, in the sense of [F5], establishing completeness for the specified field. The image filtration is full for $r\leq0$ and zero for $r\geq U_n$ by step 2.2. The stage-representative calculation in step 4.1 identifies the bounded abutment products with those in $K_*(X)$. Together with the associated-graded identification in step 2.2, this proves completeness and multiplicative convergence with the full stated scope, without a splitting claim. [F1, F2, F5, F8, step 1.1, step 2.2, step 3.1, step 4.1] ∎

## Reading limits
This adjudication read the complete current assigned proposition and the declared direct supplier interfaces, checking the actual prime-field multiplicative input and the tower quotient and abutment formulas used here. The standing-field graded-product and page-transport calculations are retained in their stated scope; the arbitrary-field product identification is proved directly from the prime-field input after restriction. Fresh primary-source PDF-text reading covered Elmanto–Morrow v1, the prime-field convention on p. 2, Theorem 1.1(1) on p. 3 and Section 2.2 on pp. 11–12; and Higher Algebra, Theorem 7.1.2.13 and its complete short proof on printed pp. 1212–1213, together with the first proof paragraph of Theorem 7.1.2.1 on p. 1206. The other source-reading records remain historical. No source proofs of the filtration, coherent multiplicativity, décalage comparison or categorical foundations were reconstructed. The Statement is unchanged. Thirteen direct consumers were identified from the frozen graph; their bodies were not reread because no Statement or Definition interface changed. This is a scoped repair proposal, without independent rejudgment, acceptance or publication credit.
