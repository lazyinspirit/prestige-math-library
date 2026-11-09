---
title: Lifting the corrected class to the curve-supported third stage
status: draft
research_item: lem-lift-curve-supported-filtration
dependency_level: 31
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

[F1] [lem-bertini-support-reduction](item-lem-bertini-support-reduction) supplies the componentwise curve and its containment in $W$; [lem-point-correction-localization](item-lem-point-correction-localization) supplies a corrected class satisfying the stated kernel condition. The components form a finite clopen partition because $X$ is normal and Noetherian, as used in the former supplier.

[F2] [prop-third-edge-isomorphism](item-prop-third-edge-isomorphism) gives injectivity of $\pi_0F^3K(X)\to K_0(X)$. The definition of the image filtration in [def-motivic-filtration](item-def-motivic-filtration) gives a representative for every element of $F^3K_0(X)$.

[F3] [rem-third-edge-curve-complement](item-rem-third-edge-curve-complement) gives injectivity of $\pi_0F^3K(X_e\setminus C_e)\to K_0(X_e\setminus C_e)$ for each three-dimensional affine component $X_e$ and its closed integral curve $C_e\subset(X_e)_{\mathrm{smooth}}$. [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing) gives $\pi_0F^3K(X_e)=0$ on each component of dimension less than three. [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products) identifies the actual stage and $K$ maps on a finite clopen union with their componentwise products.

[F4] [lem-filtered-support-exactness](item-lem-filtered-support-exactness) gives the long exact homotopy sequence of the actual stagewise support fiber. [def-cohomology-with-support](item-def-cohomology-with-support) identifies the displayed quotient notation with that fiber. [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers) gives support excision, compatible with support-to-global maps, provided the relevant restriction square is homotopy cartesian.

[F5] [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) gives Zariski Mayer–Vietoris for $K$ on quasi-compact opens. [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) gives the natural fiber triangles $F^{r+1}K\to F^rK\to\mathbb Z(r)_{\mathrm{mot}}[2r]$, and [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) gives Nisnevich descent, hence Zariski descent, for the graded terms.

## Proof
1.1 By [F1], write $X$ as the finite disjoint union of its clopen integral components $X_e$. On every three-dimensional component, $C_e=C\cap X_e$ is the reduced closure of an integral curve, hence is a closed integral curve; it lies in the smooth locus. On every lower-dimensional component $C_e$ is empty. The opens $U$ and $W$, and their intersections with the components, are quasi-compact: $X$ is finite type over a field and therefore Noetherian. [F1, given]

1.2 For a three-dimensional component, [F3] makes the actual stage-to-$K_0$ map on $X_e\setminus C_e$ injective. For a lower-dimensional component, its complement is all of $X_e$ and its third-stage zeroth group is zero by [F3], so the same map is injective. The finite clopen product equivalences in [F3], applied to $U=\coprod_e(X_e\setminus C_e)$ and compatible with the stage-to-$K$ maps, therefore show that
$$\pi_0F^3K(U)\longrightarrow K_0(U)$$
is injective. [F3, step 1.1]

2.1 By [F2], $\beta$ has a representative $b\in\pi_0F^3K(X)$, and that representative is unique. Naturality of the stage-to-$K$ maps sends the restriction of $b$ to the restriction of $\beta$, which is zero in $K_0(U)$. Step 1.2 therefore makes $b|_U=0$ in $\pi_0F^3K(U)$. The exact sequence in [F4] supplies $\widetilde b\in\pi_0F^3K(X/U)$ mapping to $b$. Exactness does not assert that this lift is unique. [F2, F4, given, step 1.2]

2.2 The opens $U$ and $W$ cover $X$ because $C\subset W$, and their intersection is $V$. The restriction square for stage zero $K$ is homotopy cartesian by [F5]. The corresponding square for each graded term is homotopy cartesian by its Zariski descent. If the stage-$r$ square is homotopy cartesian, the natural triangle in [F5] identifies the stage-$(r+1)$ square as its fiber over the graded-term square; fibers preserve homotopy-cartesian squares. Induction for $r=0,1,2$ proves that the stage-three square for this cover is homotopy cartesian. All opens involved are qcqs by step 1.1. [F5, step 1.1]

3.1 Apply the spectrum form of open excision in [F4] to $C\subset W\subset X$ and the stage-three square of step 2.2. It gives the actual restriction equivalence $F^3K(X/U)\simeq F^3K(W/V)$ and its compatibility with support-to-global maps. Taking $\pi_0$ gives the displayed isomorphism. Applying step 2.1 to the corrected class supplied by [F1] proves the final assertion. [F1, F4, step 2.1, step 2.2] ∎
