---
id: lem-author-74a9c17e63f1-page-product-transport
kind: lemma
title: Identifying all spectral-sequence pages with the source multiplicative pages
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - prop-tower-exact-couple-interface
  - lem-author-74a9c17e63f1-graded-comparison
  - lem-author-74a9c17e63f1-index-calculation
  - lem-author-74a9c17e63f1-graded-products
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - def-motivic-filtration
  - def-stable-spectra-interface
  - math:def-derived-exact-couple
  - math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences
  - def-multiplicative-filtered-spectrum
  - lem-fiber-sequence-homotopy-exactness
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  prop-tower-exact-couple-interface: mathematical-premise
  lem-author-74a9c17e63f1-graded-comparison: mathematical-premise
  lem-author-74a9c17e63f1-index-calculation: mathematical-premise
  lem-author-74a9c17e63f1-graded-products: mathematical-premise
  thm-author-74a9c17e63f1-source-multiplicative-input: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-derived-exact-couple: mathematical-premise
  math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences: mathematical-premise
  def-multiplicative-filtered-spectrum: mathematical-premise
  lem-fiber-sequence-homotopy-exactness: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 18
formulation_deps:
  - math:def-axiom-of-choice
  - prop-tower-exact-couple-interface
  - lem-author-74a9c17e63f1-graded-comparison
  - lem-author-74a9c17e63f1-index-calculation
  - lem-author-74a9c17e63f1-graded-products
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - def-motivic-filtration
  - def-stable-spectra-interface
  - def-multiplicative-filtered-spectrum
argument_deps:
  - math:def-axiom-of-choice
  - prop-tower-exact-couple-interface
  - lem-author-74a9c17e63f1-graded-comparison
  - lem-author-74a9c17e63f1-index-calculation
  - lem-author-74a9c17e63f1-graded-products
  - thm-author-74a9c17e63f1-source-multiplicative-input
  - def-motivic-filtration
  - def-stable-spectra-interface
  - math:def-derived-exact-couple
  - math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences
  - def-multiplicative-filtered-spectrum
  - lem-fiber-sequence-homotopy-exactness
sources:
  references:
    - title: Alice Petronella Hedenlund, Multiplicative Tate Spectral Sequences (PhD
        thesis, 2020), Part II
      url: https://www.mn.uio.no/math/personer/vit/rognes/theses/hedenlund-thesis.pdf
      locator: Section II.2.1 and Proposition II.2.1 (PDF pp.218–219); Definition
        II.2.15 (p.230); Theorem II.3.2 (pp.234–235); Definition II.3.4 and
        Theorem II.3.5 with proof (pp.236–239). PDF pages are one-based.
      statement: The spectral-sequence construction from coherent integer filtrations
        of spectra preserves multilinear operations, including units and
        permutations. Pairings begin on graded homotopy, satisfy Leibniz and
        commute with the specified homology transitions.
      hypotheses: Coherent decreasing integer filtrations in spectra with Day
        convolution, and actual multilinear filtered maps; here the commutative
        Day algebra supplied by the declared source-multiplicative input. No
        convergence or completeness condition. The Beilinson connective
        convention uses connectivity v-h on graded piece h.
      reading_limits: Freshly read primary PDF text at the Beilinson connective
        condition, Proposition II.2.1, the Dec recipe and Definition II.2.15,
        Theorem II.3.2 with its homology transition formula, and Definition
        II.3.4 and Theorem II.3.5 with proof. Use through the current declared
        supplier; foundational Beilinson, monoidal and realization results cited
        by that proof remain imported. No page-image inspection, point-set
        rectification or original-article reading is claimed.
    - title: Benjamin Antieau, Spectral sequences, décalage, and the Beilinson
        t-structure, arXiv:2411.09115v1
      url: https://arxiv.org/pdf/2411.09115v1
      locator: Definition 3.25 and Remark 3.26, printed pp.10–11; Construction 4.5,
        p.14; Construction 4.10, Definition 4.11 and Proposition 4.12, pp.15–16;
        Theorem 4.13, Corollary 4.14 and Remark 4.15, p.16.
      statement: The Dec spectral sequence agrees naturally with the image
        construction using relative cofibers, including differentials and the
        next-page homology identifications.
      hypotheses: Stable infinity-category with sequential limits and colimits and a
        fixed t-structure. Apply in spectra with its standard homotopy
        t-structure, as discharged by the declared source-multiplicative
        supplier. Use the incomplete Beilinson convention on all filtrations. No
        completeness, vanishing tower limit or convergence assumption.
      reading_limits: Freshly read the primary versioned PDF text at the listed
        definitions, relative-cofiber diagram, image and differential formulas,
        Proposition 4.12 and its explanatory paragraphs, and comparison theorem
        and corollary. The comparison theorem and categorical foundations remain
        imported; its proof is not reconstructed. Checked the relative-page
        formula and its indices against the current supplier. The image/kernel
        application below is local. No original-author defect assessment or PDF
        image inspection is claimed.
---

## Statement
Assume the Axiom of Choice and the fixed compatible size conventions of the supplied constructions. Let $k$ be the standing field and let $X$ be a quasi-compact quasi-separated $k$-scheme. Use the integer-indexed multiplicative motivic tower $F^\bullet=F^\bullet_{\mathrm{mot}}K(X)$ restricted from the prime field of $k$, with its constant nonpositive extension and augmentation to $K(X)$. Write $Q_j=\operatorname{cofib}(F^{j+1}\to F^j)$, $K_n(X)=\pi_nK(X)$ and $F^jK_n(X)=\operatorname{im}(\pi_nF^j\to K_n(X))$, where $\pi_n$ denotes spectral homotopy.

The additive tower spectral sequence has canonical products, adding bidegrees, inherited from the source EM multiplicative spectral sequence of this same tower. On $E_2^{a,b}=\pi_{-a-b}Q_{-b}$ they agree with the actual graded product and, under the specified source comparisons, with the motivic cup product. For every $s\geq2$ the products are associative and unital, and for $x\in E_s^{a,b}$ and $y\in E_s^{c,e}$ satisfy
$$xy=(-1)^{(a+b)(c+e)}yx,\qquad d_s(xy)=d_s(x)y+(-1)^{a+b}x\,d_s(y).$$
These finite-page products require no convergence assumption. When bounded convergence identifies the abutment graded groups, the identification with $F^{-b}K_{-a-b}(X)/F^{-b+1}K_{-a-b}(X)$ preserves their products, induced from the image filtration on $K_*(X)$.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the fixed compatible universes and scheme-size bounds of the supplied constructions. These discharge their foundational and realization premises at their first applications below; existence of the stipulated universes is an additional size assumption.

**Given:** These assumptions, the standing field $k$, a qcqs $k$-scheme $X$, and the actual augmented filtered algebra and its coherent stage/cofiber maps.

**Goal:** Compare the additive pages with the source multiplicative pages, transport every finite-page product, and identify the abutment products under the separate bounded-convergence hypothesis.

[F1] [[def-motivic-filtration]] supplies the scheme category, prime-field restriction, actual multiplicative augmented tower, constant nonpositive extension and image filtration. [[def-stable-spectra-interface]] supplies spectra, sphere, integer homotopy groups, coherent cofibers and their triangles. [[prop-tower-exact-couple-interface]] supplies the additive stage exact couple, its page-2 indexing and, in Proof 3.2, the explicit derived-page cycle/boundary quotients. Its bounded-convergence clause and Proof 4.1–5.1 identify stable classes by their stage representatives.

[F2] [[thm-author-74a9c17e63f1-source-multiplicative-input]], Facts [F3]–[F5] and Proof 1.1–2.1, supplies coherent finite-page pairings and a comparison with the relative-cofiber spectral sequence. Write $\widetilde E_u^{h,n}$ for its source page, with $\widetilde E_1^{h,n}=\pi_nQ_h$ and differential degree $(u,-1)$. For $i\leq j$ set $F^i/F^j=\operatorname{cofib}(F^j\to F^i)$. Its relative page is
$$R_u^{h,n}=\operatorname{im}\bigl(\pi_n(F^h/F^{h+u})\longrightarrow\pi_n(F^{h-u+1}/F^{h+1})\bigr),\qquad u\geq1.$$
The supplier identifies $\widetilde E_u$ naturally with $R_u$, including differentials and the specified next-page homology maps; at $u=1$ this is the identity on $\pi_nQ_h$. The imports underlying this interface are references 0 and 1 below. The supplier checks that both sources use the same Beilinson connective covers and their colimit construction of décalage. The ambient category is the supplied spectra category with its standard homotopy t-structure and sequential limits and colimits. No convergence, completeness or point-set local-realizability hypothesis is imposed on this comparison.

[F3] [[lem-author-74a9c17e63f1-graded-comparison]] supplies the actual cofiber triangles and $\gamma_h$ to the realized shifted motivic complexes, including zero negative graded terms. [[lem-author-74a9c17e63f1-index-calculation]] fixes their motivic labels, homotopy degree $-a-b$ and differential labels. [[lem-author-74a9c17e63f1-graded-products]] identifies the initial homotopy pairing and its unit with the source motivic cup product.

[F4] [[math:def-derived-exact-couple]] gives the image and cycle/boundary quotient construction of derived couples, with its induced arrows. [[math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences]] makes this construction functorial, preserving differentials and specified homology transitions. These apply to the additive stage couple of [F1]; the comparison with [F2] is established through its relative-cofiber pages below.

[F5] [[def-multiplicative-filtered-spectrum]] supplies the actual coherent products $\mu_{h,t}:F^h\wedge F^t\to F^{h+t}$, the multiplicative augmentation, and graded projections $q_h:F^h\to Q_h$. Its cofiber product compatibility is $\overline\mu_{h,t}(q_h\wedge q_t)\simeq q_{h+t}\mu_{h,t}$. [[lem-fiber-sequence-homotopy-exactness]] supplies natural long exact sequences for every spectral cofiber triangle, using stability. This applies also to the relative cofibers in [F2].

## External input
Reference 0 imports coherent multiplicativity through [F2]. Reference 1 imports the décalage/relative-cofiber comparison through [F2], including its differentials and homology transitions. Their hypotheses and reading limits are recorded in the citations. The local argument identifies those relative pages with the additive stage-couple subquotients and then transports the supplied products. It does not assert an identity of the source and additive initial exact couples. No convergence theorem or infinite tower limit is used for finite pages.

## Proof
**Given:** [A1] and the data of [F1]–[F5]; bounded convergence is assumed only for the abutment assertion.

1.1 Under [A1], evaluate the common prime-field restriction and use [F1]–[F4]. Fix $u\geq1,h,n\in\mathbb Z$, and set $G_m^i=\pi_mF^i$, $P_h=\pi_n(q_h):G_n^h\to\pi_nQ_h$ and $\delta_h:\pi_nQ_h\to G_{n-1}^{h+1}$, the stage connecting map. The additive page with $s=u+1$, $h=-b$ and $n=-a-b$ is $N_u/B_u$, where $N_u=\delta_h^{-1}\operatorname{im}(G_{n-1}^{h+u}\to G_{n-1}^{h+1})$ and $B_u=P_h\ker(G_n^h\to G_n^{h-u+1})$, by [F1] and the derivation in [F4]. Put $U=F^h/F^{h+u}$ and $V=F^{h-u+1}/F^{h+1}$. The map $U\to V$ factors canonically as $U\to Q_h\xrightarrow{r}V$. Pasting the cofiber pushouts of [F1] gives the triangles $F^{h+1}/F^{h+u}\to U\to Q_h$ and $Q_h\to V\to F^{h-u+1}/F^h$. Apply [F5]. Naturality of connecting maps makes the obstruction to lifting $e\in\pi_nQ_h$ to $\pi_nU$ the image of $\delta_he$ in $\pi_{n-1}(F^{h+1}/F^{h+u})$; exactness identifies its vanishing with membership in $N_u$. Hence $\operatorname{im}(\pi_nU\to\pi_nQ_h)=N_u$. For the other triangle, $\ker(\pi_nr)$ is the image of $\pi_{n+1}(F^{h-u+1}/F^h)$. Its boundary to $\pi_nQ_h$ factors through the boundary to $G_n^h$ and $P_h$. The triangle $F^h\to F^{h-u+1}\to F^{h-u+1}/F^h$ identifies that intermediate boundary image with $\ker(G_n^h\to G_n^{h-u+1})$. Thus $\ker(\pi_nr)=B_u$, and $B_u\subseteq N_u$ since $\delta_hP_h=0$. The map $[e]\mapsto(\pi_nr)e$ is consequently a canonical isomorphism $N_u/B_u\xrightarrow{\sim}R_u^{h,n}$: it is onto by the factorization and has precisely the stated kernel, so no lift is chosen as part of its definition. Its compatibility with the differentials can be checked on a representative: lift $\delta_he$ to $z\in G_{n-1}^{h+u}$; both constructions send the class to the class of $P_{h+u}z$ at $(h+u,n-1)$. This follows from their common cofiber connecting maps and [F2]; the respective boundary quotients remove the ambiguity in $z$. For transitions, a class is a differential cycle exactly when it has a representative in $N_{u+1}$, and the new boundaries enlarge $B_u$ to $B_{u+1}$, as in [F1]. The induced identification of homology with $N_{u+1}/B_{u+1}$ sends such a representative to the same class. The relative-cofiber transition of [F2] is induced by the same nested cofiber diagrams, so it does the same. Thus these isomorphisms commute with the specified homology transitions as well as differentials; their naturality also agrees with [F4]. Compose with the inverse source comparison of [F2], obtaining $\phi_s:E_s^{a,b}\xrightarrow{\sim}\widetilde E_{s-1}^{-b,-a-b}$. When $u=1$, $U=V=Q_h$, $N_1=\pi_nQ_h$, $B_1=0$, and this comparison is the identity on the actual graded homotopy groups. Only the later use of $\gamma_h$ in [F3] expresses them in motivic coordinates. This construction uses only finite relative cofibers. [A1, F1, F2, F3, F4, F5]

2.1 Define $x\cdot_s y=\phi_s^{-1}(\phi_s(x)\cdot_{\mathrm{src}}\phi_s(y))$, with the inverse taken in the target bidegree. The index change of step 1.1 is additive, so products add $(a,b)$; the source differential degree $(u,-1)$ gives $(a+s,b-s+1)$ for $s=u+1$. The differential and homology-transition compatibility proved there transfers the source pairings and their page transitions in [F2]. Their associativity and unit transfer along the same isomorphisms. At page 2, $\phi_2$ is the identity, and [F3] identifies the product with the actual graded pairing and its motivic cup-product expression, including zero negative-weight factors. Homotopy degree $n=-a-b$ gives the Leibniz sign $(-1)^n=(-1)^{a+b}$; for $n'=-c-e$, the commutativity sign is $(-1)^{nn'}=(-1)^{(a+b)(c+e)}$. No convergence premise has entered. Now assume bounded convergence in the sense of [F1]. Write $a_h:G_n^h\to K_n(X)$ for augmentation. For sufficiently large $u$, its stable quotient is $\operatorname{im}P_h/P_h(\ker a_h)$, and the isomorphism with $F^hK_n(X)/F^{h+1}K_n(X)$ sends the class of $P_h\alpha$ to the class of $a_h\alpha$, by [F1]. In particular every stable class has a stage representative $\alpha$; there is no asserted map from the image subgroup to $\pi_nQ_h$. For two such representatives $\alpha\in G_n^h$ and $\beta\in G_m^t$, their projections are cycles on every page since their connecting images are zero. Initial graded compatibility in [F5], followed by the multiplicative homology transitions of [F2], says that their product at every later page is represented by $P_{h+t}\mu_*(\alpha,\beta)$. Choose a page beyond stabilization of both inputs and the output. The additive abutment identification sends this product to $a_{h+t}\mu_*(\alpha,\beta)=(a_h\alpha)(a_t\beta)$, modulo $F^{h+t+1}K_{n+m}(X)$, because the augmentation is multiplicative. This is exactly the image-filtration quotient product, and the same calculation applies to the unit. Thus the canonical page comparison preserves the bounded abutment products as claimed. [F1, F2, F3, F4, F5, step 1.1, algebra] ∎
