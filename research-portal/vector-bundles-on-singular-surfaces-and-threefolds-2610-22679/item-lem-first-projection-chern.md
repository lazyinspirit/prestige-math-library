---
title: First projection is first Chern class
status: published
research_item: lem-first-projection-chern
dependency_level: 27
sources:
  references:
    - title: Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: arXiv:2610.22679v1, PDF p. 3, Notation and conventions; p. 10, Lemma
        5.2 and its proof
      reading_limits: For this proposal read the supplied PDF page images and
        extraction at p. 3, Notation and conventions, and p. 10, the Section 5
        opening and complete Lemma 5.2 proof and restriction square. Read the
        current declared supplier contracts and the additional library
        interfaces used below. The underlying determinant, motivic and slice
        comparison source proofs were not freshly read or reconstructed. The
        arbitrary-field qcqs argument below is local, not attributed to the
        article.
      statement: Lemma 5.2 asserts that on a normal scheme the image-domain first
        motivic projection equals the first Chern class. Its proof restricts to
        the smooth locus, uses Picard restriction injectivity and smooth
        normalization, and displays the natural restriction square.
      hypotheses: The article fixes an algebraically closed base field and qcqs
        schemes; affine schemes are additionally finite type by its conventions.
        The local proof here establishes the broader arbitrary-field qcqs
        equality using declared perfect-class suppliers; its smooth-locus
        consequence assumes normality and finite type over the algebraically
        closed field.
---

PDF p. 10: Lemma 5.2 and restriction square

## Prerequisites

- [def-filtration-projections](item-def-filtration-projections)
- [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)
- [lem-author-ec13f1db88a5-all-perfect-factorization](item-lem-author-ec13f1db88a5-all-perfect-factorization)
- [prop-first-chern-determinant](item-prop-first-chern-determinant)
- [prop-motivic-weight-one](item-prop-motivic-weight-one)
- [lem-normal-smooth-locus-restriction](item-lem-normal-smooth-locus-restriction)
- [lem-smooth-leading-cycle-normalization](item-lem-smooth-leading-cycle-normalization)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-principal-localisation](https://alphabetamath.cc/item/def-principal-localisation)
- [math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [math:lem-distinguished-opens-cover-every-open](https://alphabetamath.cc/item/lem-distinguished-opens-cover-every-open)
- [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)
- [` Vector bundles on singular surfaces and threefolds · arXiv:2610.22679v1, PDF p. 3, Notation and conventions; p. 10, Lemma 5.2 and its proof `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice and the fixed site and universe size bounds required by the specified motivic and weight-one comparisons. Let $k$ be an algebraically closed field and let $X$ be a normal quasi-compact quasi-separated $k$-scheme. For the motivic filtration of perfect-complex $K$-theory, the first-stage augmentation identifies its zeroth homotopy group with its image in $K_0(X)$. Transporting the actual first-stage projection along this identification gives
$$p_1=c_1^{\mathrm{perf}}\vert_{F^1_{\mathrm{mot}}K_0(X)}:F^1_{\mathrm{mot}}K_0(X)\longrightarrow H^{2,1}_{\mathrm{mot}}(X,\mathbb Z).$$
In fact the image identification and equality hold for every quasi-compact quasi-separated scheme over any field, under the same foundational assumptions. If additionally $X$ is of finite type over the algebraically closed field $k$ and $U\subseteq X$ is its smooth locus, restriction to $U$ carries this equality to the smooth first-stage normalization. In this additional case the restriction map on the target is injective under the natural weight-one identifications with Picard groups.

Here quasi-compact means that every open cover has a finite subcover, and quasi-separated means that the intersection of two affine open subsets is quasi-compact. Normal means that every local ring is an integrally closed domain. Finite type means here that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras. The smooth locus consists of the points where $X\to\operatorname{Spec}k$ is smooth. The group $K_0(X)$ is the zeroth homotopy group of the specified nonconnective $K$-theory spectrum of perfect complexes, and $F^1_{\mathrm{mot}}K_0(X)$ is the image of the first filtration stage in it. Write $a_X:\pi_0F^1_{\mathrm{mot}}K(X)\to F^1_{\mathrm{mot}}K_0(X)$ for the stage-to-image map and $\ell_X:\pi_0F^1_{\mathrm{mot}}K(X)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ for the actual stage projection. Thus $p_1=\ell_Xa_X^{-1}$; on normal qcqs schemes over the algebraically closed field this is the existing transported projection. The broader arbitrary-field assertion uses this same explicit transport. The first class $c_1^{\mathrm{perf}}$ is the rank-reduced actual first-layer class; equivalently it is the determinant line followed by the natural weight-one orientation. The Picard group is the group of isomorphism classes of locally free rank-one sheaves under tensor product. Choice asserts that every family of nonempty sets has a choice function; the size bounds fix the small Nisnevich sites and ambient universes used by the cited comparisons.

## Facts & Assumptions
**Given:** A field $k$, a quasi-compact quasi-separated $k$-scheme $X$, Choice and the stated size bounds. For the smooth-locus assertions additionally assume that $k$ is algebraically closed and $X$ is normal and finite type, and let $U$ be its smooth locus.

**Goal:** Identify the first stage with its image, prove the first-Chern equality in full qcqs scope, and retain the finite-type smooth-restriction assertions.

[F0] Fields and schemes over a base have the meanings of [math:def-field](https://alphabetamath.cc/item/def-field) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base); algebraic closedness is the root condition of [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field). Integrally closed domains in the inline normality convention have the meaning of [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain). Pointwise smoothness is defined in [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) and is preserved by restriction to an open source. An open subscheme carries the restricted structure sheaf, as in [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). Perfect complexes are locally bounded complexes of finite locally free modules, with their enhanced category as in [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes). The actual nonconnective spectrum, its degree-zero group and contravariant restriction are those of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface). Homotopy groups and graded cofibers use [def-stable-spectra-interface](item-def-stable-spectra-interface), and integral motivic cohomology is the cohomology of the specified complexes in [def-motivic-cohomology](item-def-motivic-cohomology). The Picard group, including its tensor group law, is [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme). The stage maps and perfect Chern operations in [F1]–[F4] refer to these same objects.

[F1] The first-stage projection is induced by the actual map to the weight-one graded cofiber, and the filtration, graded maps and augmentations are natural under restriction. For a normal qcqs scheme over an algebraically closed field, the current image-domain convention transports precisely this map along the stage-to-image isomorphism ([def-filtration-projections](item-def-filtration-projections)).

[F2] On every quasi-compact quasi-separated scheme over a field, the actual first stage maps injectively onto the kernel of the locally constant Euler rank on perfect $K_0$ ([lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)). This also supplies the first-stage image identification over an arbitrary field, without normality.

[F3] For a perfect class $x$, the first Chern class is defined by subtracting the virtual trivial-bundle class $s(r(x))$ with its locally constant Euler rank, taking the unique first-stage lift, and applying the actual weight-one projection. It equals the perfect determinant followed by the natural weight-one orientation and agrees with the existing first class on actual and virtual bundle classes ([lem-author-ec13f1db88a5-all-perfect-factorization](item-lem-author-ec13f1db88a5-all-perfect-factorization), [prop-first-chern-determinant](item-prop-first-chern-determinant)).

[F4] Under Choice and the stated size bounds, the weight-one orientation is a natural isomorphism $\gamma_Y:\operatorname{Pic}(Y)\xrightarrow{\sim}H^{2,1}_{\mathrm{mot}}(Y,\mathbb Z)$ for a quasi-compact quasi-separated scheme $Y$ over a field ([prop-motivic-weight-one](item-prop-motivic-weight-one)).

[F5] If $k$ is algebraically closed and $X$ is normal and finite type over $k$, its smooth locus $U$ is open and dense and $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ is injective ([lem-normal-smooth-locus-restriction](item-lem-normal-smooth-locus-restriction)).

[F6] For a smooth finite-type scheme over a field, the actual first-stage degree-zero projection is the first Chern class, identified with determinant through the smooth weight-one normalization ([lem-smooth-leading-cycle-normalization](item-lem-smooth-leading-cycle-normalization)). Only this degree-zero first-stage assertion is used here.

[F7] A finitely generated $k$-algebra is a quotient of $k[t_1,\ldots,t_n]$ for some finite $n$ ([math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)). Such a polynomial ring is Noetherian ([math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)), and its quotients are Noetherian ([math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations), quotient clause). Under Choice, the spectrum of a Noetherian ring is a Noetherian topological space ([math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)), and every open subset of a Noetherian space is quasi-compact, including the empty open ([math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)).

[F8] Every open subset of an affine spectrum is covered by distinguished opens $D(f)$ ([math:lem-distinguished-opens-cover-every-open](https://alphabetamath.cc/item/lem-distinguished-opens-cover-every-open)). With their restricted structure sheaves these opens are $\operatorname{Spec}(B_f)$ ([math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)). The principal localization $B_f$ consists of fractions $b/f^n$ ([math:def-principal-localisation](https://alphabetamath.cc/item/def-principal-localisation)). If $B=k[b_1,\ldots,b_m]$, these fractions show directly that $B_f$ is generated over $k$ by the images of $b_1,\ldots,b_m$ and $1/f$; thus it is a finitely generated $k$-algebra in the sense of [F7].

[A1] Assume the Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)) and the fixed site-size and universe bounds. They are carried through the filtration construction in [F1] in steps 1.1 and 3.1, the perfect-class construction in [F3] in steps 2.1 and 3.1, and the weight-one comparison in [F4] in step 4.1. Choice also supplies the hypotheses of [F5] in steps 3.1 and 4.1, of [F6] in step 3.1, and of the two Noetherian-space results in [F7] in step 3.1. Universes have the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); their existence and the compatible enlargements required by [F0]–[F4] and [F6] are assumed separately from Choice. No new choice of global bundle representatives is made.

## Proof
1.1 By [F2], the augmentation from the actual first stage is injective on $\pi_0$ and its image is exactly the rank-zero subgroup of $K_0(X)$. Consequently its corestriction $a_X$ is an isomorphism onto $F^1_{\mathrm{mot}}K_0(X)$. Transport the actual projection $\ell_X$ of [F1] along $a_X^{-1}$. On the normal qcqs schemes in the current image convention of [F1], its augmentation and projection are these same maps, so the transported homomorphisms agree. This justifies the stated $p_1$ throughout the qcqs field-scheme scope. [F0, F1, F2, A1, given]

2.1 Let $x\in F^1_{\mathrm{mot}}K_0(X)$. By step 1.1 it has rank zero and unique first-stage lift $\widetilde x=a_X^{-1}(x)$. The trivial-bundle rank section in [F3] therefore gives $s(r(x))=s(0)=0$. Thus the unique lift used in [F3] to define $c_1^{\mathrm{perf}}(x)$ is precisely $\widetilde x$, and $c_1^{\mathrm{perf}}(x)=\ell_X(\widetilde x)=p_1(x)$. This argument uses only that $X$ is qcqs over a field, with [A1], and proves the asserted broader equality. [F2, F3, A1, step 1.1]

3.1 Now impose the additional normal finite-type and algebraically closed hypotheses. By [F5], $U$ is open. Take the finite affine cover $X=\bigcup_{i=1}^N V_i$ in the finite-type hypothesis, where $V_i=\operatorname{Spec}B_i$ and each $B_i$ is a finitely generated $k$-algebra. By [F7], each $B_i$ is a quotient of a finite-variable polynomial ring over $k$, hence Noetherian, and $|V_i|$ is a Noetherian space. For every open $W\subseteq X$, each $W\cap V_i$ is quasi-compact by [F7]. Any open cover of $W$ therefore has a finite subcover on each of these finitely many pieces, and the union of those finite subcovers covers $W$. Hence every open $W$ is quasi-compact. In particular $U$ is quasi-compact, and the intersection of any two affine opens of $U$, being open in $X$, is quasi-compact; thus $U$ is qcqs. By [F8], each $U\cap V_i$ has a cover by principal affine opens $D_{V_i}(f)$ contained in it. Its quasi-compactness reduces this to a finite cover, so the finite collection of all these principal opens covers $U$. Their coordinate rings $(B_i)_f$ are finitely generated over $k$ by the explicit generators in [F8]. This proves that $U$ is finite type in the stated convention, including empty $U$ with its empty cover. By the pointwise definition in [F0], the structure morphism on this open smooth locus is smooth. Restriction commutes with the stage augmentations and projections by [F1]. The unique lift in step 1.1 therefore restricts to the unique lift of the restricted class, by [F2]. The first Chern class is natural by [F3], so the restriction square with horizontal maps $p_1-c_1^{\mathrm{perf}}$ commutes. The lower map is zero by the actual smooth normalization in [F6], with the same orientation. This proves the claimed smooth restriction. [F0, F1, F2, F3, F5, F6, F7, F8, A1, step 1.1, step 2.1]

4.1 Under these additional hypotheses, the naturality in [F4] identifies $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)\to H^{2,1}_{\mathrm{mot}}(U,\mathbb Z)$ with $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ after applying the two isomorphisms $\gamma_X$ and $\gamma_U$. The latter restriction is injective by [F5], so the target restriction is injective. Together with the general equality in step 2.1 and the smooth compatibility in step 3.1, this proves all assertions. [F0, F4, F5, A1, step 2.1, step 3.1] ∎

## External input
Reference 0 records the original normal-qcqs first-projection claim and its smooth-locus restriction square. The equality in steps 1.1–2.1 is deduced locally from [F1]–[F3], with their stated foundational assumptions; the article's proof is not imported as a proof of the arbitrary-field extension. The finite-type smooth-restriction consequence uses precisely [F5]–[F8]. The deeper determinant, weight-one and smooth normalization facts are used through their declared local suppliers, without a claim to reconstruct their external proofs.

## Source scope and reading limits
For this proposal, the supplied extraction and page images at PDF p. 3 (conventions) and p. 10 (Section 5 opening and complete Lemma 5.2 proof and restriction square) were read. The original normal-qcqs equality and the stronger supplier-supported arbitrary-field qcqs assertion are both retained. The existing separate article smooth-locus scope finding is unchanged; this proposal repairs generated prerequisite accounting and supplies the missing finite-type-open argument, rather than adding an original-author finding.

The complete assigned body, the current direct suppliers' mathematical bodies, and the additional mathematical definition and geometric interfaces declared here were read for these applications. Only the first-stage degree-zero assertion of the smooth-normalization supplier is used; its supported weight-two assertions do not enter this proof. The deeper determinant, motivic and slice source proofs were not freshly read or reconstructed.

The complete bodies of the three current direct consumers were also read: the normal surface classification, normal threefold classification and exterior-square Chern calculation. Their uses of the first-projection equality remain within its unchanged Statement. No Statement or Definition change is proposed, so no new interface propagation is requested. Application, rendering, downstream maintenance and independent rejudgment remain controller tasks; no new acceptance or library audit is claimed.
