---
title: Rank and determinant on the second piece
status: published
research_item: lem-second-piece-rank-determinant
dependency_level: 27
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, Notation and conventions; p. 8, Proposition 3.2 and Lemma
        4.1; pp. 9–10, Lemma 4.1 continuation and Section 5 opening through
        Lemma 5.2; p. 11, opening of the proof of Lemma 5.3
      reading_limits: For this repair read the frozen article extraction at the p. 3
        conventions, p. 8 Proposition 3.2 and Lemma 4.1, its p. 9 continuation,
        the p. 10 Section 5 opening and Lemma 5.2, and the p. 11 opening of
        Lemma 5.3. Read the supplied rank, Picard, first-Chern and filtration
        interfaces and the full graded-projection definition; their deeper
        construction proofs were not reconstructed or independently judged. No
        fresh PDF page-image inspection or original-author defect adjudication
        is claimed. The proof and finite-type application below are locally
        authored compositions of the declared suppliers.
      statement: The opening of Lemma 5.3 states that the composites from the second
        image piece to the zeroth and first motivic cohomology layers vanish;
        for a class written in that proof as a difference of bundles, it deduces
        equal ranks and equal determinant classes. Proposition 3.2 and Lemmas
        4.1 and 5.2 supply the article's determinant and projection context. The
        local proof here treats arbitrary perfect classes using its declared
        full-qcqs suppliers and makes the bundle-difference consequence
        conditional.
      hypotheses: The article's standing field is algebraically closed and its scheme
        category is qcqs; Lemmas 4.1, 5.2 and 5.3 assume normality. Its
        displayed bundle conclusions use an asserted bundle-difference
        representation. No general existence of such a representation is
        imported here. The local proof separately retains Choice and compatible
        site and universe bounds.
---

PDF p. 11: Opening paragraphs of Lemma 5.3 proof

## Prerequisites

- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)
- [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection)
- [prop-first-chern-determinant](item-prop-first-chern-determinant)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-filtration-projections](item-def-filtration-projections)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 3, Notation and conventions; p. 8, Proposition 3.2 and Lemma 4.1; pp. 9–10, Lemma 4.1 continuation and Section 5 opening through Lemma 5.2; p. 11, opening of the proof of Lemma 5.3 `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds required by the low-weight and perfect K-theory constructions. Let $k$ be an algebraically closed field and let $X$ be a normal quasi-compact quasi-separated $k$-scheme. For every $\alpha\in F^2_{\mathrm{mot}}K_0(X)$, the composites
$$F^2_{\mathrm{mot}}K_0(X)\longrightarrow K_0(X)\xrightarrow{p_0}H^{0,0}_{\mathrm{mot}}(X,\mathbb Z),\qquad F^2_{\mathrm{mot}}K_0(X)\longrightarrow F^1_{\mathrm{mot}}K_0(X)\xrightarrow{p_1}H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$$
vanish. Consequently $\alpha$ has rank zero and $c_1^{\mathrm{perf}}(\alpha)=0$. If in addition $\alpha=[V]-[W]$ for vector bundles $V,W$ on $X$, then $V$ and $W$ have equal rank at every point and their determinant line bundles are isomorphic. In particular these assertions hold on normal finite-type $k$-schemes.

Here $K_0(X)$ is the zeroth homotopy group of nonconnective K-theory of perfect complexes, and $F^j_{\mathrm{mot}}K_0(X)$ is the image of the $j$th motivic filtration stage in it. A perfect complex is locally quasi-isomorphic to a bounded complex of finite-rank vector bundles; its rank is the locally constant Euler characteristic of its derived fibers. A vector bundle is a finite locally free sheaf, and its determinant is its top exterior power on each constant-rank locus. Normal means that all local rings are integrally closed domains. Quasi-compact means every open cover has a finite subcover; quasi-separated means intersections of quasi-compact open subsets are quasi-compact. Finite type over $k$ means a finite affine cover by spectra of finitely generated commutative $k$-algebras. Such an algebra is a quotient of $k[x_1,\ldots,x_n]$ for some finite $n$. Algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$; a $k$-scheme is a scheme equipped with a morphism to $\operatorname{Spec}k$.

The graded-projection convention identifies the zeroth and first graded cofibers with $\mathbb Z(0)_{\mathrm{mot}}(X)$ and $\mathbb Z(1)_{\mathrm{mot}}(X)[2]$; their zeroth homotopy groups are $H^{0,0}_{\mathrm{mot}}(X,\mathbb Z)$ and $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$. Here $H^{a,i}_{\mathrm{mot}}$ denotes degree-$a$ cohomology of the specified weight-$i$ complex. The map $p_0$ is the actual zeroth stage-to-graded projection under this identification, using $F^0_{\mathrm{mot}}K(X)=K(X)$. The first-stage augmentation identifies $\pi_0F^1_{\mathrm{mot}}K(X)$ injectively with $F^1_{\mathrm{mot}}K_0(X)$ on every qcqs field-scheme. The map $p_1$ here is the actual first stage-to-graded projection transported through this identification. Thus its construction applies throughout the stated qcqs scope and agrees with the existing finite-type projection convention. The first Chern class is the actual rank-reduced first-layer class, equivalently the perfect determinant followed by the actual weight-one Picard isomorphism. Choice means every family of nonempty sets has a choice function; the size bounds specify the sites and ambient universes of the cited constructions.

## Facts & Assumptions
**Given:** The field $k$, scheme $X$, Choice, site and universe bounds, and $\alpha\in F^2_{\mathrm{mot}}K_0(X)$ as stated.

**Goal:** Prove both projection composites vanish, then deduce rank zero and vanishing first Chern class, with the stated consequences for any bundle-difference representation.

[F1] The decreasing motivic filtration has compatible stage maps to $K(X)$, with stage zero identified with $K(X)$, and nested image groups. For each stage, exactness makes the kernel of its stage-to-graded map on $\pi_0$ the image of the next stage. [def-motivic-filtration](item-def-motivic-filtration) [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)

[F2] On every qcqs scheme over a field, the actual weight-zero map is the locally constant Euler rank on perfect $K_0$. The first-stage augmentation is injective on $\pi_0$ and identifies its image with the rank-zero subgroup of $K_0$. [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)

[F3] On the qcqs Nisnevich site over a field, the actual map from the rank-zero K-space to the weight-one Picard stack is the perfect-complex determinant map. On components it retains global determinant line classes, including on nonaffine schemes. [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection)

[F4] Under Choice and the stated bounds, on every qcqs field-scheme one has $c_1^{\mathrm{perf}}=\gamma_X\det_X$, with $\gamma_X:\operatorname{Pic}(X)\xrightarrow{\sim}H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ the actual weight-one orientation. This class agrees with the actual bundle and virtual-bundle first Chern classes. In particular, on a bundle difference its determinant is the Picard class of $\det V\otimes(\det W)^{-1}$. The Picard group consists of isomorphism classes of line bundles under tensor product. [prop-first-chern-determinant](item-prop-first-chern-determinant)

[F5] The assumed Choice and size bounds are used when invoking the filtration and perfect rank/Picard constructions; Choice is also retained for the Noetherian-topology suppliers in [F8]. Choosing a single lift of a given image element below does not itself require arbitrary-index choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F6] The actual graded-projection convention identifies the zeroth homotopy groups of the zeroth and first graded cofibers with $H^{0,0}_{\mathrm{mot}}(X,\mathbb Z)$ and $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$. On a normal qcqs scheme over an algebraically closed field it defines $p_0$ and $p_1$ by the same stage maps and inverse augmentations used here, including on finite-type schemes. [def-filtration-projections](item-def-filtration-projections)

[F7] A finitely generated commutative $k$-algebra is a quotient of a polynomial ring $k[x_1,\ldots,x_n]$ in finitely many variables. The latter is Noetherian, and every quotient of a Noetherian commutative ring is Noetherian. Here Noetherian for a commutative ring means that every ideal has a finite generating list. [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras) [math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct) [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)

[F8] Under Choice, the spectrum of a Noetherian commutative ring is a Noetherian topological space, and every open subset of such a space is quasi-compact. A Noetherian space is one in which every ascending sequence of open subsets stabilizes. For schemes, quasi-compactness refers to the underlying space and quasi-separatedness can be tested on intersections of affine opens. [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

## External input
Reference 0 records the two vanishing-composite assertions and the conditional equal-rank and equal-determinant calculation in the opening of the article's Lemma 5.3, with its conventions and low-layer context. It is the formulation source, not an additional premise asserting that every perfect class has a bundle-difference representation. The actual graded-target identification is used through [F6]; the local proof below uses [F1]–[F8] and is not an imported proof of the whole present formulation.

**Proof technique:** Transport only the first-stage map through the full-qcqs rank-fiber identification, apply consecutive stage exactness, and then use the actual determinant comparison.

## Proof
1.1 Invoke the filtration and rank/Picard constructions under [F5]. By [F2], the first-stage augmentation is an isomorphism onto its image group, so composing its inverse with the actual first stage-to-graded map defines $p_1$ on $F^1_{\mathrm{mot}}K_0(X)$. This uses the injective first-stage augmentation on the stated qcqs scheme, without applying a finite-type comparison outside its hypotheses. By [F6], the zeroth and first stage projections have exactly the motivic cohomology targets displayed in the Statement. The projection convention on this normal qcqs scheme uses the inverse of the same augmentation and the same stage map, so it agrees, including in the finite-type case. [F1, F2, F3, F5, F6, given]

2.1 Choose a lift $a\in\pi_0F^2_{\mathrm{mot}}K(X)$ of $\alpha$, which exists by the image-group definition. Let $b$ be its image in $\pi_0F^1_{\mathrm{mot}}K(X)$ and let $c$ be the image of $b$ in $\pi_0F^0_{\mathrm{mot}}K(X)=K_0(X)$. Compatible augmentations give $c=\alpha$. The element $b$ is the unique first-stage representative of $\alpha$ by [F2]. [F1, F2, step 1.1, given]

3.1 The first stage-to-graded map sends $b$ to zero because it comes from stage two. The zeroth stage-to-graded map sends $c$ to zero because it comes from stage one. These are exactly the adjacent-stage kernels in [F1]. By the transport in step 1.1 and the augmentation compatibility in step 2.1, this proves $p_1(\alpha)=0$ and $p_0(\alpha)=0$, hence both displayed composites vanish. [F1, F6, step 1.1, step 2.1]

4.1 By [F2], $p_0(\alpha)=0$ says that $\alpha$ has pointwise Euler rank zero. By [F3] the value of the actual first-layer map on its unique first-stage representative $b$ is $\gamma_X(\det_X\alpha)$, which is $c_1^{\mathrm{perf}}(\alpha)$ by [F4]. Step 3.1 makes that value zero. Thus the rank and first-Chern conclusions hold for arbitrary perfect classes in the second image group. [F2, F3, F4, step 2.1, step 3.1]

5.1 If $\alpha=[V]-[W]$, additivity of Euler rank and step 4.1 give equal ranks of $V$ and $W$ at every point. By [F4], $\gamma_X([\det V\otimes(\det W)^{-1}])=c_1^{\mathrm{perf}}(\alpha)=0$. Injectivity of $\gamma_X$ makes this Picard class zero, equivalently $\det V\cong\det W$. [F2, F4, step 4.1, given]

6.1 For the finite-type special case, take a finite affine cover $U_i=\operatorname{Spec}A_i$ with each $A_i$ a finitely generated commutative $k$-algebra. By [F7], each $A_i$ is a quotient of a Noetherian finite-variable polynomial ring and hence is Noetherian. By [F8], each $U_i$ is a Noetherian space and every open subset of it is quasi-compact. Given any open subset $U\subseteq X$ and any open cover of $U$, its restrictions cover each $U\cap U_i$, so finitely many members cover each such intersection. The union of these finitely many finite subfamilies covers $U$. Thus every open subset of $X$ is quasi-compact, including $X$ itself and intersections of affine opens; [F8] makes $X$ qcqs. The preceding argument therefore applies to every normal finite-type $k$-scheme, proving the final special case without a separatedness assumption. [F5, F7, F8, step 4.1, step 5.1, given] ∎

The article's original normal qcqs scope is retained, including nonseparated schemes. No global bundle-difference representation or resolution property is assumed. The final assertion applies only when a representation is supplied. The original article's blanket representation premise remains a source proof defect; the rank and determinant conclusions do not require it. This proof uses the actual full-qcqs rank and Picard interfaces instead of extending the finite-type smooth-locus comparison by assertion. Their underlying constructions are used as supplier premises, without new acceptance or audit claims.

## Scope and reading limits
The article's original normal qcqs scope is retained, including nonseparated schemes. No global bundle-difference representation or resolution property is assumed. The final assertion applies only when a representation is supplied. The original article's blanket representation premise remains a source proof defect; the rank and determinant conclusions do not require it. This proof uses the actual full-qcqs rank and Picard interfaces instead of extending the finite-type smooth-locus comparison by assertion. Their underlying constructions are used as supplier premises, without new acceptance or audit claims.

For this repair, the complete assigned body and all four frozen direct consumer bodies were read: the surface and threefold prescriptions, the third-piece representative lemma, and the second-subgroup Cartan application. Their uses of rank zero, first-class vanishing and conditional determinant comparison are unchanged. The six original direct supplier interfaces, the graded-projection body, and the six added algebra/topology supplier bodies were inspected for the inputs used here. The added definitions and proof of the finite-type application do not change the mathematical interface, original coverage or authoring home. This is a repair proposal, with no independent review or acceptance claim; the historical original-source findings are not re-adjudicated.
