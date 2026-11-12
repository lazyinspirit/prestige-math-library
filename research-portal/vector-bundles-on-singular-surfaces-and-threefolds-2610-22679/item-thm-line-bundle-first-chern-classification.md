---
title: Line bundles and first motivic Chern class
status: published
research_item: thm-line-bundle-first-chern-classification
dependency_level: 27
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Introduction, p. 1; equation (2.3), p. 4; Proposition 3.2 and its
        proof, p. 8
      reading_limits: Read the introduction, property (2), equation (2.3), and
        Proposition 3.2 with its proof in the frozen article text in this
        assignment. The comparison and perfect determinant are used through
        declared suppliers. No PDF-image verification or original-author defect
        finding is claimed.
      statement: The introduction asserts classification of line bundles by first
        Chern class. Equation (2.3) identifies weight-one degree-two motivic
        cohomology with the Picard group. Proposition 3.2 identifies the
        line-bundle first Chern class with the map induced by the shifted-units
        comparison, and states determinant factorization.
      hypotheses: The article works with qcqs schemes over its standing algebraically
        closed base field. The arbitrary-field scope and compatible Choice, site
        and universe hypotheses of this item are supplied by its declared
        current interfaces, rather than inferred from the introduction.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes (arXiv v1)
      url: https://arxiv.org/html/2309.08463v1
      locator: Section 5.1, Lemma 5.1 and its proof; Definition 5.2, equation (5.1);
        Corollary 7.11 and its proof; Introduction prime-field convention
      statement: Definition 5.2 defines the Picard-group first Chern map as the map
        induced on H^2 by (5.1). Corollary 7.11 explicitly gives the cofiber
        bound for that same map. Lemma 5.1 constructs the complex map with the
        specified smooth-scheme comparison.
      hypotheses: X is a qcqs scheme over the prime field Q or F_p. For a scheme over
        any field, use restriction along its prime subfield, as in the declared
        weight-one and EM construction suppliers, with their compatible Choice
        and universe assumptions.
      reading_limits: Freshly read the versioned HTML at the prime-field convention,
        Lemma 5.1 and its short proof, Definition 5.2 including (5.1), and
        Corollary 7.11 with its short proof. The Kan-extension, sheafification
        and Corollary 7.10 foundations are imported through the suppliers. EM
        writes Pic(X) for the degree-two source without an explicit frame
        formula; the canonical coordinate convention and its identification with
        the stated frame map are checked locally below using reference 2 and the
        torsor supplier.
    - title: The Stacks Project, First cohomology and invertible sheaves, Lemma 21.6.1
        (Tag 040E)
      url: https://stacks.math.columbia.edu/tag/040E
      locator: Lemma 21.6.1, first paragraph of proof, through the map from invertible
        sheaves to torsors and its composition with Lemma 21.4.3
      statement: The canonical forward Picard-to-units-cohomology construction sends a
        line to its sheaf of generating sections, acted on by multiplying the
        section by a unit, followed by the canonical torsor class.
      hypotheses: The full lemma is stated for a locally ringed site. Only its
        explicit forward construction on a locally free rank-one module is used
        here. For that construction, the ringed site, local rank-one
        trivializations and canonical torsor-to-H^1 map suffice; these are
        established on the specified small Nisnevich site by
        lem-nisnevich-line-bundle-torsors.
      reading_limits: "Read the full tagged statement and displayed proof. The source
        omits its group-law and final sheafification verifications. Those
        results are not re-proved from this citation: the declared Nisnevich
        torsor supplier supplies the isomorphism and group law. This citation
        fixes the canonical coordinate convention; the equivariant
        generator-to-frame identification is local work below. No use of the
        converse for arbitrary tensor-invertible site modules, or of a general
        locally-ringedness theorem for this site, is required."
---

PDF p. 1: Introduction, second paragraph; PDF p. 2: After Theorem A

## Prerequisites

- [prop-motivic-weight-one](item-prop-motivic-weight-one)
- [prop-first-chern-determinant](item-prop-first-chern-determinant)
- [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)
- [lem-author-ec13f1db88a5-perfect-determinant](item-lem-author-ec13f1db88a5-perfect-determinant)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1)
- [lem-author-13e6fe931c45-weight-one-external](item-lem-author-13e6fe931c45-weight-one-external)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes (arXiv v1) · Section 5.1, Lemma 5.1 and its proof; Definition 5.2, equation (5.1); Corollary 7.11 and its proof; Introduction prime-field convention `](https://arxiv.org/html/2309.08463v1)
- [` The Stacks Project, First cohomology and invertible sheaves, Lemma 21.6.1 (Tag 040E) · Lemma 21.6.1, first paragraph of proof, through the map from invertible sheaves to torsors and its composition with Lemma 21.4.3 `](https://stacks.math.columbia.edu/tag/040E)


## Statement
Assume the Axiom of Choice and the site-size and universe bounds required for the weight-one comparison, Nisnevich cohomology and perfect-complex determinant below. Let $k$ be a field and $X$ a quasi-compact quasi-separated $k$-scheme. The first motivic Chern class gives a natural group isomorphism
$$c_1:\operatorname{Pic}(X)\xrightarrow{\sim}H^{2,1}_{\mathrm{mot}}(X,\mathbb Z).$$
Consequently two line bundles on $X$ are isomorphic exactly when their first motivic Chern classes agree, and every class in the displayed motivic cohomology group is the first class of a line bundle.

A line bundle is a Zariski locally free $\mathcal O_X$-module of rank one; $\operatorname{Pic}(X)$ is the group of its isomorphism classes under tensor product. The group $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-two cohomology of the supplied weight-one motivic complex. The map $c_1$ is the supplied first motivic Chern class on an actual line bundle. Its inverse first applies the inverse of the weight-one comparison to obtain a class in $H^1_{\mathrm{Nis}}(X,\mathbb G_m)$ and then takes the line bundle descended from the corresponding frame torsor. Here $\mathbb G_m$ is the sheaf of invertible regular functions on the small Nisnevich site.

## Statement references
[prop-motivic-weight-one](item-prop-motivic-weight-one)

[prop-first-chern-determinant](item-prop-first-chern-determinant)

[lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)

[thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1)

## Facts & Assumptions

**Given:** A field $k$, a quasi-compact quasi-separated $k$-scheme $X$, the Axiom of Choice and the compatible site-size and universe bounds in the cited suppliers.

**Goal:** Prove that the actual first motivic Chern class is the stated natural bijective group homomorphism, with the specified inverse.

[F0] A field has the meaning of [math:def-field](https://alphabetamath.cc/item/def-field). A $k$-scheme is a scheme with a structure morphism to $\operatorname{Spec}k$, and $k$-morphisms commute with structure morphisms, as in [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). Quasi-compact and quasi-separated have the meanings of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme). A line bundle is locally isomorphic to $\mathcal O_X$ as a sheaf of modules, the rank-one case of [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). The abelian group of line-bundle isomorphism classes, with tensor product, identity $[\mathcal O_X]$ and inverse the dual line, is [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme).

[F1] Use the particular comparison constructed in Proof 1.1 of [prop-motivic-weight-one](item-prop-motivic-weight-one). Its direct external-input supplier [lem-author-13e6fe931c45-weight-one-external](item-lem-author-13e6fe931c45-weight-one-external), External input, identifies it as EM map (5.1), and gives the cofiber bound of Corollary 7.11. Write $u_X:R\Gamma_{\mathrm{Nis}}(X,\mathbb G_m)[-1]\to\mathbb Z(1)_{\mathrm{mot}}(X)$ for this map and $\beta_X=H^2(u_X)$, with source $H^1_{\mathrm{Nis}}(X,\mathbb G_m)$. The degree-two isomorphism for this particular map, including restriction from the prime subfield to any field, is proved in [prop-motivic-weight-one](item-prop-motivic-weight-one). The shift and source conventions are those explicitly fixed by the external-input supplier.

[F2] Under Choice and its specified small-site and universe bounds, the frame-torsor construction identifies $\operatorname{Pic}(X)$ with $H^1_{\mathrm{Nis}}(X,\mathbb G_m)$ as a group; descent from frames gives the inverse. Write $\tau_X$ for this map: it sends $L$ to the torsor whose sections on $f:U\to X$ are the isomorphisms $\mathcal O_U\to f^*L$, with the units acting by scalar multiplication. [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)

[F3] For every qcqs scheme over a field, under the stated Choice and universe bounds, the actual first motivic Chern class on a bundle agrees with the composite of its determinant and the actual EM weight-one orientation $\gamma_X:\operatorname{Pic}(X)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$. The normalization of this orientation relative to the specific frame-torsor map is supplied explicitly in [F6]. [prop-first-chern-determinant](item-prop-first-chern-determinant)

[F4] The determinant of a bundle in the perfect-complex determinant construction agrees with its exterior determinant. In rank one this is $\Lambda^1L=L$ canonically, by the definition of the sheaf exterior power. [lem-author-ec13f1db88a5-perfect-determinant](item-lem-author-ec13f1db88a5-perfect-determinant) [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[F5] Assume the Axiom of Choice of [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), inherited by the resolution, torsor-descent and perfect-determinant constructions at both proof steps. Universes satisfy [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with their existence assumed separately. Retain the standard full small site required by [lem-author-13e6fe931c45-weight-one-external](item-lem-author-13e6fe931c45-weight-one-external): fix $U\in V\in W$ with $\omega\in U$, take $k$ and all scheme data in $U$, and take all étale $X$-schemes and their $X$-morphisms with data in $U$, regarded as a $V$-small category. Coverings are the Nisnevich families on this category. Use $V$-small abelian sheaf values and derived constructions in $W$, and the same site and derived sections for [F1], [F2] and [F6]. This site contains $X$, all the required fibre products and Zariski refinements, so the hypotheses of [F2] hold. Retain compatibly the perfect-category and module-sheaf universe bounds of [F4].

[F6] [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1) supplies the actual complex map $u_X$ of EM Definition 5.2 and its induced Picard-group map $\gamma_X$, restricted along the prime subfield for any field. By that definition, $\gamma_X$ is $H^2(u_X)$ expressed in the canonical Picard coordinates of its source. The canonical forward coordinate is the generator-torsor construction: for a locally free rank-one site module $N$, take its sheaf of sections $e$ for which $a\mapsto ae$ is an isomorphism, with the action $e\mapsto ge$ of a unit $g$, and then take its canonical torsor class. This is the explicit construction in the proof of [Stacks Lemma 21.6.1, Tag 040E](https://stacks.math.columbia.edu/tag/040E), composed there with the torsor-to-$H^1$ map. We use it only for a site object $f_T:T\to X$ and $N_L(T)=\Gamma(T,f_T^*L)$, the locally free site module constructed in Proof 2.2 of [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors). That supplier establishes the torsor classification and group law on this site. Step 1.1 identifies these canonical source coordinates with $\tau_X$ by an explicit equivariant map.

[F7] Use the small Nisnevich topology and its residue-field-preserving étale covering families from [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface). Here $\mathbb G_m(U)=\Gamma(U,\mathcal O_U)^\times$ is the units sheaf of [F2]. The group $H^1_{\mathrm{Nis}}$ is degree-one right-derived evaluation of that sheaf, by [def-derived-sections-on-sites](item-def-derived-sections-on-sites). The group $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)=H^2(\mathbb Z(1)_{\mathrm{mot}}(X))$ and its pullbacks have the meaning of [def-motivic-cohomology](item-def-motivic-cohomology). Only integral weight one is used.

## External input
The actual complex map and its induced Picard map in [F6] are imported through [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1). The cofiber bound for this very map (5.1) is imported through [lem-author-13e6fe931c45-weight-one-external](item-lem-author-13e6fe931c45-weight-one-external); its restriction and degree-two consequence are supplied by [prop-motivic-weight-one](item-prop-motivic-weight-one). [EM Definition 5.2 and Corollary 7.11](https://arxiv.org/html/2309.08463v1) are recorded with their hypotheses and reading limits in reference 1.

The generator-torsor formula for the canonical forward Picard coordinate is recorded in reference 2, [Stacks Tag 040E, first paragraph of proof](https://stacks.math.columbia.edu/tag/040E). Only this construction on locally free rank-one modules is used. Its validity and group-isomorphism property on our chosen site are supplied by [F2]; the equality with the specified frame convention is proved in step 1.1. This does not require applying the full Stacks theorem to arbitrary invertible site modules.

[The article, Proposition 3.2](https://arxiv.org/abs/2610.22679v1), gives the line-class normalization and determinant context recorded in reference 0, used through [F3]–[F4]. The two-step argument below is locally authored; the item is not wholly an external input.

## Proof

**Proof technique:** Identify the canonical Picard source coordinate explicitly, then compose the frame-torsor and actual EM comparison isomorphisms.

1.1 Use [F0] and [F7] on the common site of [F5]. For a line bundle $L$, the generator $e\in N_L(T)$ in [F6] gives the frame $\varphi_e:\mathcal O_T\to f_T^*L$ defined by $a\mapsto ae$; its inverse correspondence is $\varphi\mapsto\varphi(1)$. On a trivializing Zariski open both generator and frame conditions say that the coefficient of $e$ is a unit. These correspondences are inverse and commute with restrictions, and $\varphi_{ge}=g\varphi_e$, so they identify the generator torsor equivariantly with precisely the frame torsor of [F2]. The canonical torsor-to-cohomology map is the same one in [F2] and [F6]; hence the canonical source coordinate is $\tau_X$, rather than the coordinate of the dual line. By [F1] the complex map used in [F6] is exactly $u_X$, with $H^2(u_X)=\beta_X$. The definition of the induced Picard map in [F6] now gives $\gamma_X=\beta_X\circ\tau_X$. Since [F1] and [F2] make both factors group isomorphisms, this composite has inverse $\tau_X^{-1}\circ\beta_X^{-1}$, as cancellation of the adjacent inverse pairs verifies. [F0, F1, F2, F5, F6, F7]

2.1 For a line bundle $L$, [F4] gives $\det L\cong L$, so [F3] identifies its actual first Chern class with $\gamma_X([L])$. Step 1.1 therefore makes the stated $c_1$ a group isomorphism with exactly the described inverse. Injectivity means that equal first Chern classes give equal Picard classes, hence isomorphic line bundles by [F0]; surjectivity supplies a line bundle for every target class. The generator-to-frame formula in step 1.1 commutes with pullback of a line and its scalar action, so it retains the canonical natural Picard identification in [F6]. Together with the natural comparison of [F1] and the determinant compatibility of [F3]–[F4], this proves naturality of the actual bundle class. All constructions retain the qcqs arbitrary-field domain and the foundational assumptions in [F5]. [F0, F1, F2, F3, F4, F5, F6, step 1.1] ∎
