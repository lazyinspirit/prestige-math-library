---
title: Smooth point classes lie in the top filtration piece
status: published
research_item: lem-smooth-point-filtration
dependency_level: 19
---

PDF p. 7: Lemma 2.9 and final square

## Prerequisites

- [def-motivic-filtration](item-def-motivic-filtration)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-support-image-groups](item-def-support-image-groups)
- [def-smooth-point-cycle-map](item-def-smooth-point-cycle-map)
- [lem-smooth-point-motivic-purity](item-lem-smooth-point-motivic-purity)
- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-filtered-support-exactness](item-lem-filtered-support-exactness)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice and the size conventions of the support construction. Let $k$ be a perfect field, let $X$ be a quasi-compact quasi-separated $k$-scheme of pure finite dimension $d$, and let $x$ be a closed point in the smooth locus of $X\to\operatorname{Spec}k$. Put $U=X\setminus\{x\}$. A perfect field is one whose algebraic extensions are separable; smoothness at $x$ means that $x$ has a neighbourhood smooth over $k$.

Write $K(X/U)$ for the restriction fiber $\operatorname{fib}(K(X)\to K(U))$ and $F^jK(X/U)$ for the corresponding fiber at motivic filtration stage $j$, using the extension to arbitrary open subsets in [def-cohomology-with-support](item-def-cohomology-with-support). Then the stage-to-$K$ map induces a surjection
$$\pi_0F^d_{\mathrm{mot}}K(X/U)\longrightarrow\pi_0K(X/U).$$
Consequently, with $K_0(\{x\};X)$ the image of $\pi_0K(X/U)\to K_0(X)$ and $F^d_{\mathrm{mot}}K_0(X)$ the image of $\pi_0F^d_{\mathrm{mot}}K(X)\to K_0(X)$,
$$K_0(\{x\};X)\subseteq F^d_{\mathrm{mot}}K_0(X).$$
In particular, the smooth-point class map of [def-smooth-point-cycle-map](item-def-smooth-point-cycle-map) has image in this filtration subgroup. No injectivity of either support-to-global map is asserted.

## Facts & Assumptions
**Given:** The field, scheme, point, choice and size hypotheses in the statement. Set $T=\{x\}$ and write $F^j_TK(X)=F^jK(X/U)$. A decreasing filtration is a sequence of spectra with compatible transition maps $F^{j+1}\to F^j$; its $j$th graded spectrum is their cofiber. A fiber is the homotopy pullback over the zero spectrum.

**Goal:** Prove surjectivity from supported stage $d$ to supported $K_0$, and then the global image containment.

[F1] [def-motivic-filtration](item-def-motivic-filtration) gives a functorial tower with $F^0K\simeq K$. [def-cohomology-with-support](item-def-cohomology-with-support) defines its supported stages as restriction fibers, including the homotopy-limit extension when $U$ is not quasi-compact, and identifies $\pi_0$ of the shifted supported weight-$j$ motivic spectrum with $H^{2j,j}_{\mathrm{mot},T}(X,\mathbb Z)$.

[F2] [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) gives, naturally for every qcqs scheme and $j\geq0$, the graded triangle with third term $\mathbb Z(j)_{\mathrm{mot}}[2j]$. [lem-filtered-support-exactness](item-lem-filtered-support-exactness) identifies the graded spectrum of a supported tower with the fiber of the corresponding graded restriction arrow. The stable spectra interface [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the finite limits and cofiber–fiber identification used for the open-set homotopy-limit extension.

[F3] [lem-smooth-point-motivic-purity](item-lem-smooth-point-motivic-purity) gives $H^{i,j}_{\mathrm{mot},T}(X,\mathbb Z)=0$ for every integer $i$ and $0\leq j<d$ under the given perfect-field, smooth-point, choice and size hypotheses.

[F4] [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives exactness of $\pi_0F^{j+1}_T K(X)\to\pi_0F^j_T K(X)\to\pi_0\operatorname{gr}^j_TK(X)$. [def-support-image-groups](item-def-support-image-groups) and [def-smooth-point-cycle-map](item-def-smooth-point-cycle-map) specify the global image subgroup and the smooth-point map.

## Proof
**Proof technique:** Use lower-weight supported motivic vanishing to lift successively through the finite sequence of filtration stages, then apply the natural support-to-global square.

1.1 For each $j\geq0$, the natural graded triangle in [F2] applies on $X$ and on every quasi-compact open $V\subseteq U$. Taking the homotopy limit of the triangles over these $V$ preserves fiber sequences: limits commute with the finite limits defining fibers, and in spectra cofibers and fibers differ by suspension. Thus the graded triangle also holds for the explicitly extended values on $U$. Taking the fiber of the graded restriction arrow, [F2] identifies $\operatorname{gr}^j_TK(X)$ with the shifted supported weight-$j$ motivic spectrum. Hence
$$\pi_0\operatorname{gr}^j_TK(X)\cong H^{2j,j}_{\mathrm{mot},T}(X,\mathbb Z).$$
The identification uses the actual coherent restriction maps, not merely separate isomorphisms of groups. [F1, F2, given]

2.1 For $0\leq j<d$, [F3] makes the right side in step 1.1 zero. Exactness in [F4] therefore makes each transition $\pi_0F^{j+1}_T K(X)\to\pi_0F^j_T K(X)$ surjective. [F3, F4, step 1.1]

3.1 Composing these finitely many surjections gives a surjection $\pi_0F^d_TK(X)\to\pi_0F^0_TK(X)$. When $d=0$ this is the identity, the empty composite. The natural stage-zero equivalences on $X$ and on the opens used to define $U$ identify $F^0_TK(X)$ with $K(X/U)$; compatibility of transitions identifies the composite with the stated stage-to-$K$ map. This proves the supported surjectivity. [F1, step 2.1]

4.1 The support-to-global maps and stage-to-$K$ maps form a commutative square by the functorial fiber construction. Given an element of $K_0(T;X)$, choose a supported $K_0$ representative and lift it to supported stage $d$ by step 3.1. Its image in global stage $d$ maps to the original element of $K_0(X)$. The definition of the global image filtration therefore gives the containment. The image of the point class map is $K_0(T;X)$ by [F4], yielding the final assertion. This completes the proof. [F1, F4, step 3.1] ∎
