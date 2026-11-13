---
title: Three-dimensional L4 time Linfinity space estimate
status: draft
research_item: prop-se-2-4
dependency_level: 8
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 7: ` Proposition 2.4; (2.6) `

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-import-bss-l4-linfinity](item-prop-se-import-bss-l4-linfinity)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)


## Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^3\setminus\Theta$ be the connected exterior of a nonempty smooth compact non-trapping obstacle, and put $W(t)=e^{it\Delta_D}$ for its homogeneous Dirichlet evolution. For every $T>0$ there is a constant $C$ depending on the domain such that, for every $u_0\in H^1_0(\Omega)$,
$$\|W(\cdot)u_0\|_{L^4_tL^\infty_x((0,T)\times\Omega)}\le C\|u_0\|_{H^1_0(\Omega)}.$$
The $H^1_0$ norm is the inherited $H^1$ norm. The mixed norm is the scalar sectionwise norm, with spatial essential supremum; no strong measurability into the nonseparable space $L^\infty(\Omega)$ is asserted. This is the three-dimensional energy estimate attributed to Blair–Smith–Sogge, §5.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [def-se-nontrapping](item-def-se-nontrapping) supplies the standing smooth compact-obstacle, connected-exterior and non-trapping convention. Here the dimension is exactly three.

[F3] [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) fixes the self-adjoint Dirichlet realization and its spectral exponential. [prop-se-scale-flow](item-prop-se-scale-flow) identifies $W(t)$ with the strongly continuous Dirichlet spectral group and its energy-space evolution. It retains the mathematical self-adjoint flow supplier from the Physics Library; no physical postulate enters this group identity.

[F4] [prop-se-import-bss-l4-linfinity](item-prop-se-import-bss-l4-linfinity) imports the three-dimensional smooth non-trapping Dirichlet Duhamel estimate from BSS §5, equations (54)–(55) and the argument following Lemma5.2, with energy initial data, strongly measurable $L^1_tH^1_0$ forcing, and scalar $L^4_tL^\infty_x$ norm. Its statement includes zero forcing and a domain-dependent constant independent of the finite time interval. This is not a substitution of an infinite spatial exponent into its finite-exponent theorem.

[F5] [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) defines $H^1_0$ as the closure in the inherited $H^1$ norm, and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) defines the sectionwise mixed norm and the Bochner convention for the zero forcing term.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement with the stated spaces and bounds.

1.1 The dimension and obstacle hypotheses match the exact imported three-dimensional Dirichlet estimate. By the completed scale-flow result, the homogeneous evolution denoted $U(t)$ in that input and the present $W(t)$ are the same spectral exponential of the same Dirichlet operator. The initial datum belongs to its homogeneous Dirichlet energy space by the stated $H^1_0$ convention. [given, F2, F3, F4, F5]

2.1 In the imported Duhamel estimate choose $f=u_0$ and $F=0$. The zero forcing is strongly measurable and has zero $L^1(0,T;H^1_0)$ norm; its Duhamel integral is zero. The solution is therefore exactly $W(t)u_0$, and the imported bound is $\|W(\cdot)u_0\|_{L^4_tL^\infty_x}\le C\|u_0\|_{H^1}$. Since the $H^1_0$ norm is the inherited $H^1$ norm, this is the displayed estimate for all energy data and every $T>0$. [F4, F5, step 1.1, algebra]

3.1 The norm is the scalar mixed norm already specified in the imported input and in the time-space definition. Its spatial factor is the essential supremum for almost every time, followed by the scalar fourth-power time integral. Thus the conclusion preserves that input’s measurability scope and needs no $L^\infty$-valued Bochner regularity. The cited independent source and its actual reading limits remain those of the declared imported supplier. [F4, F5, step 2.1] ∎

## Source notes

The original article’s Proposition2.4, equation(2.6), is the attribution for this item. The mathematical premise is the completed independent BSS import, specialized to zero forcing; its source locator and reading limits are preserved there and no fresh external-text reading is claimed here. The mathematical self-adjoint realization and flow suppliers stored in the Physics Library remain available through the declared scale-flow chain. The existing Dirichlet definition supplies the direct formulation input; no upstream item is changed, and no review or article-defect judgment is asserted.
