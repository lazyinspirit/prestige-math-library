---
title: First projection is first Chern class
status: draft
research_item: lem-first-projection-chern
dependency_level: 24
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


## Statement
Assume the Axiom of Choice and the fixed site and universe size bounds required by the specified motivic and weight-one comparisons. Let $k$ be an algebraically closed field and let $X$ be a normal quasi-compact quasi-separated $k$-scheme. For the motivic filtration of perfect-complex $K$-theory, the first-stage augmentation identifies its zeroth homotopy group with its image in $K_0(X)$. Transporting the actual first-stage projection along this identification gives
$$p_1=c_1^{\mathrm{perf}}\vert_{F^1_{\mathrm{mot}}K_0(X)}:F^1_{\mathrm{mot}}K_0(X)\longrightarrow H^{2,1}_{\mathrm{mot}}(X,\mathbb Z).$$
In fact the image identification and equality hold for every quasi-compact quasi-separated scheme over any field, under the same foundational assumptions. If additionally $X$ is of finite type over the algebraically closed field $k$ and $U\subseteq X$ is its smooth locus, restriction to $U$ carries this equality to the smooth first-stage normalization. In this additional case the restriction map on the target is injective under the natural weight-one identifications with Picard groups.

Here quasi-compact means that every open cover has a finite subcover, and quasi-separated means that the intersection of two affine open subsets is quasi-compact. Normal means that every local ring is an integrally closed domain. Finite type means here that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras. The smooth locus consists of the points where $X\to\operatorname{Spec}k$ is smooth. The group $K_0(X)$ is the zeroth homotopy group of the specified nonconnective $K$-theory spectrum of perfect complexes, and $F^1_{\mathrm{mot}}K_0(X)$ is the image of the first filtration stage in it. Write $a_X:\pi_0F^1_{\mathrm{mot}}K(X)\to F^1_{\mathrm{mot}}K_0(X)$ for the stage-to-image map and $\ell_X:\pi_0F^1_{\mathrm{mot}}K(X)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ for the actual stage projection. Thus $p_1=\ell_Xa_X^{-1}$; on normal qcqs schemes over the algebraically closed field this is the existing transported projection. The broader arbitrary-field assertion uses this same explicit transport. The first class $c_1^{\mathrm{perf}}$ is the rank-reduced actual first-layer class; equivalently it is the determinant line followed by the natural weight-one orientation. The Picard group is the group of isomorphism classes of locally free rank-one sheaves under tensor product. Choice asserts that every family of nonempty sets has a choice function; the size bounds fix the small Nisnevich sites and ambient universes used by the cited comparisons.

## Facts & Assumptions
**Given:** A field $k$, a quasi-compact quasi-separated $k$-scheme $X$, Choice and the stated size bounds. For the smooth-locus assertions additionally assume that $k$ is algebraically closed and $X$ is normal and finite type, and let $U$ be its smooth locus.

**Goal:** Identify the first stage with its image, prove the first-Chern equality in full qcqs scope, and retain the finite-type smooth-restriction assertions.

[F1] The first-stage projection is induced by the actual map to the weight-one graded cofiber, and the filtration, graded maps and augmentations are natural under restriction. For a normal qcqs scheme over an algebraically closed field, the current image-domain convention transports precisely this map along the stage-to-image isomorphism ([def-filtration-projections](item-def-filtration-projections)).

[F2] On every quasi-compact quasi-separated scheme over a field, the actual first stage maps injectively onto the kernel of the locally constant Euler rank on perfect $K_0$ ([lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)). This also supplies the first-stage image identification over an arbitrary field, without normality.

[F3] For a perfect class $x$, the first Chern class is defined by subtracting the virtual trivial-bundle class $s(r(x))$ with its locally constant Euler rank, taking the unique first-stage lift, and applying the actual weight-one projection. It equals the perfect determinant followed by the natural weight-one orientation and agrees with the existing first class on actual and virtual bundle classes ([lem-author-ec13f1db88a5-all-perfect-factorization](item-lem-author-ec13f1db88a5-all-perfect-factorization), [prop-first-chern-determinant](item-prop-first-chern-determinant)).

[F4] Under Choice and the stated size bounds, the weight-one orientation is a natural isomorphism $\gamma_Y:\operatorname{Pic}(Y)\xrightarrow{\sim}H^{2,1}_{\mathrm{mot}}(Y,\mathbb Z)$ for a quasi-compact quasi-separated scheme $Y$ over a field ([prop-motivic-weight-one](item-prop-motivic-weight-one)).

[F5] If $k$ is algebraically closed and $X$ is normal and finite type over $k$, its smooth locus $U$ is open and dense and $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ is injective ([lem-normal-smooth-locus-restriction](item-lem-normal-smooth-locus-restriction)).

[F6] For a smooth finite-type scheme over a field, the actual first-stage degree-zero projection is the first Chern class, identified with determinant through the smooth weight-one normalization ([lem-smooth-leading-cycle-normalization](item-lem-smooth-leading-cycle-normalization)). Only this degree-zero first-stage assertion is used here.

[A1] Assume the Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)) and the fixed site-size and universe bounds. They are carried through the filtration construction in [F1] in steps 1.1 and 3.1, the perfect-class construction in [F3] in steps 2.1 and 3.1, and the weight-one comparison in [F4] in step 4.1. Choice also supplies the hypotheses of [F5] in steps 3.1 and 4.1 and of [F6] in step 3.1. No new choice of global bundle representatives is made.

## Proof
1.1 By [F2], the augmentation from the actual first stage is injective on $\pi_0$ and its image is exactly the rank-zero subgroup of $K_0(X)$. Consequently its corestriction $a_X$ is an isomorphism onto $F^1_{\mathrm{mot}}K_0(X)$. Transport the actual projection $\ell_X$ of [F1] along $a_X^{-1}$. On the normal qcqs schemes in the current image convention of [F1], its augmentation and projection are these same maps, so the transported homomorphisms agree. This justifies the stated $p_1$ throughout the qcqs field-scheme scope. [F1, F2, A1, given]

2.1 Let $x\in F^1_{\mathrm{mot}}K_0(X)$. By step 1.1 it has rank zero and unique first-stage lift $\widetilde x=a_X^{-1}(x)$. The trivial-bundle rank section in [F3] therefore gives $s(r(x))=s(0)=0$. Thus the unique lift used in [F3] to define $c_1^{\mathrm{perf}}(x)$ is precisely $\widetilde x$, and $c_1^{\mathrm{perf}}(x)=\ell_X(\widetilde x)=p_1(x)$. This argument uses only that $X$ is qcqs over a field, with [A1], and proves the asserted broader equality. [F2, F3, A1, step 1.1]

3.1 Now impose the additional normal finite-type and algebraically closed hypotheses. By [F5], $U$ is open; since $X$ is noetherian and finite type over $k$, $U$ is also finite type and is smooth over $k$. Restriction commutes with the stage augmentations and projections by [F1]. The unique lift in step 1.1 therefore restricts to the unique lift of the restricted class, by [F2]. The first Chern class is natural by [F3], so the restriction square with horizontal maps $p_1-c_1^{\mathrm{perf}}$ commutes. The lower map is zero by the actual smooth normalization in [F6], with the same orientation. This proves the claimed smooth restriction. [F1, F2, F3, F5, F6, A1, step 1.1, step 2.1]

4.1 Under these additional hypotheses, the naturality in [F4] identifies $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)\to H^{2,1}_{\mathrm{mot}}(U,\mathbb Z)$ with $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ after applying the two isomorphisms $\gamma_X$ and $\gamma_U$. The latter restriction is injective by [F5], so the target restriction is injective. Together with the general equality in step 2.1 and the smooth compatibility in step 3.1, this proves all assertions. [F4, F5, A1, step 2.1, step 3.1] ∎

The conventions on PDF page 3 and the complete Lemma 5.2 and restriction-square proof on PDF page 10 of arXiv:2610.22679v1 were read in the supplied text and page images. The original normal-qcqs equality is preserved. The original proof's unrestricted smooth-locus premise remains a separate recorded article defect: the smooth-locus argument here is asserted only with the additional finite-type hypotheses. The general equality instead uses the actual rank-zero stage and perfect-class construction; no global bundle-difference representation is used.

The current rank-zero-stage, perfect-class factorization, first-Chern determinant, weight-one, smooth-locus restriction and smooth-normalization arguments were inspected for the applications above. The global Picard-projection, perfect-determinant and their named determinant-one-type and true-triangle inputs were read as necessary supplier context. These inputs retain true/enhanced cofiber coherence; no unrestricted naturality for ordinary derived-triangle diagrams is used. Their underlying external determinant, weight-one and slice source proofs were not freshly read or reconstructed. Only the degree-zero first-stage assertion of the smooth-normalization supplier is used, and none of its supported weight-two assertions enters this proof.

The frozen outside-resolution manifest, its relevant low-filtration and determinant-scope proposals, the genuine job-01286 rejected response, and the two retained prior proposals for this exact target were consulted as historical proposals, without acceptance authority. Their older bodies do not replace current supplier contracts. No patch application, native maintenance certification or independent rejudgment is claimed.

## Source scope and reading limits
The conventions on PDF page 3 and the complete Lemma 5.2 and restriction-square proof on PDF page 10 of arXiv:2610.22679v1 were read in the supplied text and page images. The original normal-qcqs equality is preserved. The original proof's unrestricted smooth-locus premise remains a separate recorded article defect: the smooth-locus argument here is asserted only with the additional finite-type hypotheses. The general equality instead uses the actual rank-zero stage and perfect-class construction; no global bundle-difference representation is used.

The current rank-zero-stage, perfect-class factorization, first-Chern determinant, weight-one, smooth-locus restriction and smooth-normalization arguments were inspected for the applications above. The global Picard-projection, perfect-determinant and their named determinant-one-type and true-triangle inputs were read as necessary supplier context. These inputs retain true/enhanced cofiber coherence; no unrestricted naturality for ordinary derived-triangle diagrams is used. Their underlying external determinant, weight-one and slice source proofs were not freshly read or reconstructed. Only the degree-zero first-stage assertion of the smooth-normalization supplier is used, and none of its supported weight-two assertions enters this proof.

The frozen outside-resolution manifest, its relevant low-filtration and determinant-scope proposals, the genuine job-01286 rejected response, and the two retained prior proposals for this exact target were consulted as historical proposals, without acceptance authority. Their older bodies do not replace current supplier contracts. No patch application, native maintenance certification or independent rejudgment is claimed.
