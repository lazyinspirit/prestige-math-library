---
title: Lifting the corrected class to the curve-supported third stage
status: published
research_item: lem-lift-curve-supported-filtration
dependency_level: 34
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 16, proof of Theorem 6.7, application of Proposition 6.2 and
        Remark 6.3
      reading_limits: Read the supplied article extraction at PDF p. 16, proof of
        Theorem 6.7, and p. 14, Proposition 6.2 and Remark 6.3. The
        componentwise extension, coherent realization check and stagewise
        excision below are locally authored using the named supplier interfaces.
        Their external proofs were not independently read or reconstructed in
        this assignment.
      statement: In the proof of Theorem 6.7, after correcting the class by
        smooth-point classes so that it vanishes on the curve complement,
        Proposition 6.2 and Remark 6.3 place it in the image of the third-stage
        support group. The proof then identifies the support on X with the
        support on its smooth locus.
      hypotheses: "Theorem 6.7: X is a normal affine threefold over an algebraically
        closed field. At the cited passage the corrected class lies in the third
        motivic image piece and vanishes on the complement of the constructed
        integral curve in the smooth locus. The explicit finite-clopen component
        formulation and the stagewise descent argument are the local
        application, not additional assertions quoted from this passage."
---

PDF p. 16: Proof of Theorem 6.7, application of Proposition 6.2 and Remark 6.3

## Prerequisites

- [lem-point-correction-localization](item-lem-point-correction-localization)
- [lem-bertini-support-reduction](item-lem-bertini-support-reduction)
- [prop-third-edge-isomorphism](item-prop-third-edge-isomorphism)
- [rem-third-edge-curve-complement](item-rem-third-edge-curve-complement)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [lem-filtered-support-exactness](item-lem-filtered-support-exactness)
- [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers)
- [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products)
- [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing)
- [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)
- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect)
- [lem-perfect-base-smooth-density](item-lem-perfect-base-smooth-density)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization)


## Statement
Assume the Axiom of Choice and the site and universe bounds of the cited filtration and support constructions. Let $k$ be algebraically closed, let $X$ be a normal affine finite-type $k$-scheme of dimension three, and let $C$ be the reduced closed curve constructed in [lem-bertini-support-reduction](item-lem-bertini-support-reduction). Thus $C$ lies in the smooth locus $W=X_{\mathrm{smooth}}$ and, on each three-dimensional clopen integral component of $X$, its intersection is a closed integral curve; it is empty on the lower-dimensional components. Put $U=X\setminus C$ and $V=W\setminus C$.

If $\beta\in F^3_{\mathrm{mot}}K_0(X)$ restricts to zero in $K_0(U)$, then its unique representative $b\in\pi_0F^3_{\mathrm{mot}}K(X)$ lifts to some
$$\widetilde b\in\pi_0F^3_{\mathrm{mot}}K(X/U).$$
Restriction induces an isomorphism
$$\pi_0F^3_{\mathrm{mot}}K(X/U)\xrightarrow{\ \cong\ }\pi_0F^3_{\mathrm{mot}}K(W/V),$$
compatible with support-to-global maps. In particular this applies to the corrected class of [lem-point-correction-localization](item-lem-point-correction-localization). The support lift need not be unique.

Here an integral curve is a reduced irreducible scheme of dimension one, and the smooth locus is the open set where $X\to\operatorname{Spec}k$ is smooth. The spectrum $K$ is nonconnective perfect-complex $K$-theory; $K_0=\pi_0K$. The image-filtration group $F^3_{\mathrm{mot}}K_0$ is the image of $\pi_0F^3_{\mathrm{mot}}K\to K_0$. For an open complement $A\setminus B$, the supported third stage $F^3_{\mathrm{mot}}K(A/(A\setminus B))$ means the homotopy fiber of the actual restriction of third stages, with its map to the stage on $A$. A homotopy-cartesian square is a square whose upper-left object is equivalent to the homotopy pullback of the other three objects.

## Facts & Assumptions
**Given:** The field, scheme, curve, class, Choice and size assumptions in the statement.

**Goal:** Lift the actual third-stage representative of $\beta$ to the curve-support fiber and identify that fiber on the smooth locus.

[F0] The assumed Choice premise is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). It is inherited by the perfect-complex, motivic and spectral constructions and by the Noetherian-open result below; no additional choice of stage representatives over an infinite family is made. Fix compatible nested universes with the field and scheme data small in the base universe and the derived, site and spectral diagrams small in the respective larger universes, as required by the cited constructions. Existence of these universes is a separate size assumption. [def-stable-spectra-interface](item-def-stable-spectra-interface) specifies coherent spectra, their homotopy groups, zero object, fibers and small limits.

[F1] [lem-bertini-support-reduction](item-lem-bertini-support-reduction) supplies the componentwise curve and its containment in $W$; [lem-point-correction-localization](item-lem-point-correction-localization) supplies a corrected class satisfying the stated kernel condition. [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect) makes $k$ perfect. [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata), Statement and Proof 1.1, supplies the finite clopen integral components and verifies the Noetherian affine geometry and its Noetherian underlying space. [lem-perfect-base-smooth-density](item-lem-perfect-base-smooth-density) supplies openness of $W$: normal local rings are domains, hence have no nonzero nilpotents, so $X$ is reduced. [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) makes every open in this Noetherian space quasi-compact.

[F2] [prop-third-edge-isomorphism](item-prop-third-edge-isomorphism) gives injectivity of $\pi_0F^3K(X)\to K_0(X)$. The definition of the image filtration in [def-motivic-filtration](item-def-motivic-filtration) gives a representative for every element of $F^3K_0(X)$.

[F3] [rem-third-edge-curve-complement](item-rem-third-edge-curve-complement) gives injectivity of $\pi_0F^3K(X_e\setminus C_e)\to K_0(X_e\setminus C_e)$ for each three-dimensional affine component $X_e$ and its closed integral curve $C_e\subset(X_e)_{\mathrm{smooth}}$. [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing) gives $\pi_0F^3K(X_e)=0$ on each component of dimension less than three. [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products) identifies the actual stage and $K$ maps on a finite clopen union with their componentwise products.

[F4] [lem-filtered-support-exactness](item-lem-filtered-support-exactness) gives the long exact homotopy sequence of the actual stagewise support fiber. [def-cohomology-with-support](item-def-cohomology-with-support) identifies the displayed quotient notation with that fiber. [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers) gives support excision, compatible with support-to-global maps, provided the relevant restriction square is homotopy cartesian.

[F5] [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) gives Zariski Mayer–Vietoris for $K$ on quasi-compact opens. [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) gives the natural fiber triangles $F^{r+1}K\to F^rK\to\mathbb Z(r)_{\mathrm{mot}}[2r]$, with their underlying-spectrum realization convention. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) gives the coherent derived Nisnevich sheaves underlying the graded terms. [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface), Justification 2.1, verifies that a Zariski open cover is a Nisnevich cover. [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization) supplies the coherent realization $\mathcal H$ of those derived diagrams, preserving small limits, zero objects and shifts. It is the realization by the fixed derived/module equivalence and underlying-spectrum functor used by the graded comparison; compatible inverse data give naturally equivalent diagrams. Thus descent is transferred to the actual graded spectra, rather than to unrelated groups.

## Proof
1.1 By [F1], write $X$ as the finite disjoint union of its clopen integral components $X_e$. On every three-dimensional component, $C_e=C\cap X_e$ is the reduced closure of an integral curve, hence is a closed integral curve; it lies in the smooth locus. On every lower-dimensional component $C_e$ is empty. Normality is inherited by open restriction. In the idempotent affine presentations used in the component supplier of [F1], a component coordinate algebra is a quotient of the coordinate algebra of $X$, hence is again finitely generated over $k$. Thus the components are normal affine finite-type schemes, as required by [F2]–[F3]. The smooth locus $W$ is open by [F1]. Every open used here, including $U,W,V$ and their component intersections, is quasi-compact by [F1]. Intersections of their affine opens are also opens in the same Noetherian space, hence quasi-compact; consequently all these schemes are qcqs. [F0, F1, given]

1.2 For a three-dimensional component, [F3] makes the actual stage-to-$K_0$ map on $X_e\setminus C_e$ injective. For a lower-dimensional component, its complement is all of $X_e$ and its third-stage zeroth group is zero by [F3], so the same map is injective. The finite clopen product equivalences in [F3], applied to $U=\coprod_e(X_e\setminus C_e)$ and compatible with the stage-to-$K$ maps, therefore show that
$$\pi_0F^3K(U)\longrightarrow K_0(U)$$
is injective. [F3, step 1.1]

2.1 By [F2], $\beta$ has a representative $b\in\pi_0F^3K(X)$, and that representative is unique. Naturality of the stage-to-$K$ maps sends the restriction of $b$ to the restriction of $\beta$, which is zero in $K_0(U)$. Step 1.2 therefore makes $b|_U=0$ in $\pi_0F^3K(U)$. The exact sequence in [F4] supplies $\widetilde b\in\pi_0F^3K(X/U)$ mapping to $b$. Exactness does not assert that this lift is unique. [F2, F4, given, step 1.2]

2.2 The opens $U$ and $W$ cover $X$ because $C\subset W$, and their intersection is $V$. All opens involved are qcqs by step 1.1. The restriction square for stage zero $K$ is homotopy cartesian by [F5]. For a coherent derived sheaf in [F5], descent on this two-open cover identifies its value on $X$ with the homotopy pullback of its values on $U$ and $W$ over its value on $V$: all repeated intersections of this cover are $U,W,V$, and a compatible coherent cone consists of the two cones with their coherent agreement on $V$. Applying the limit-preserving realization in [F5] and the shift $[2r]$, which is an equivalence of stable categories, makes the corresponding actual graded-spectrum square homotopy cartesian. For any coherent square $D$ of spectra, its total fiber is $\operatorname{fib}(D(X)\to D(U)\times_{D(V)}D(W))$; it vanishes precisely when the square is homotopy cartesian. By [F0], taking fibers and finite limits commutes: both orders have the same mapping-space universal property as the limit over the product of the indexing diagrams. Applying this to the natural triangle of squares in [F5] shows that the total fiber at stage $r+1$ is the fiber of the map from the stage-$r$ total fiber to the graded total fiber. If both latter fibers are zero, so is the former. Induction for $r=0,1,2$ proves that the actual stage-three square is homotopy cartesian. [F0, F5, step 1.1]

3.1 Apply the spectrum form of open excision in [F4] to $C\subset W\subset X$ and the stage-three square of step 2.2. It gives the actual restriction equivalence $F^3K(X/U)\simeq F^3K(W/V)$ and its compatibility with support-to-global maps. Taking $\pi_0$ gives the displayed isomorphism. Applying step 2.1 to the corrected class supplied by [F1] proves the final assertion. [F1, F4, step 2.1, step 2.2] ∎


## External input
Reference 0 records the article passage supplying the lifting formulation and smooth-locus support identification, under the hypotheses and reading limits in its source record. The componentwise formulation and the proof above are local deductions from the declared suppliers; no local reconstruction of their imported motivic or K-theoretic constructions is claimed.
