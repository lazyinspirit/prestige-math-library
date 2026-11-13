---
title: Prior exterior-domain dispersive and Cauchy results
status: draft
research_item: rem-se-prior-exterior-cauchy
dependency_level: 3
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: Page 3, Section 1.2, opening paragraph; page 22, references [2], [5],
        [9], and [18]
      statement: The introduction attributes the indicated smoothing, Strichartz, and
        Cauchy well-posedness results to the cited authors.
      hypotheses: The geometries, dimensions, and small-data qualification are those
        described in the page 3 paragraph; the paragraph is a literature
        overview, not a complete theorem statement.
      reading_limits: The frozen extracted article text was read at the cited
        paragraph and bibliography; the independently cited papers were not read
        for this remark.
---

PDF p. 3: ` opening paragraph, Cauchy theory `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)
- [math:lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands](https://alphabetamath.cc/item/lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands)
- [math:cor-zero-total-derivative-on-a-convex-open-set-is-constant](https://alphabetamath.cc/item/cor-zero-total-derivative-on-a-convex-open-set-is-constant)
- [math:lem-euclidean-balls-have-positive-finite-lebesgue-measure](https://alphabetamath.cc/item/lem-euclidean-balls-have-positive-finite-lebesgue-measure)
- [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm)


## Statement

Assume Countable Choice, let $n\ge2$, and let $\Omega=\mathbb R^n\setminus\Theta$ be the exterior of a nonempty compact smooth obstacle, with connected exterior. A non-trapping obstacle is one for which every complete admissible generalized reflected ray $x:\mathbb R\to\overline\Omega$, parametrized by physical time at unit speed, leaves each compact set in finite forward time, with the time allowed to depend on the ray and the set. The space $H^1_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in the $H^1(\Omega)$ norm.

The article's introduction attributes local smoothing and Strichartz estimates for non-trapping obstacles, and global well-posedness results deduced from them, to Burq, Gérard and Tzvetkov [9]. It attributes Strichartz estimates with loss on general bounded or exterior domains in dimensions two and three, without a non-trapping assumption, to Anton [2], and scale-invariant Strichartz estimates in a restricted exponent range for exteriors of non-trapping obstacles to Blair, Smith and Sogge [5].

The introduction also reports that, in dimension three and for non-trapping obstacles, the energy-critical quintic equation is well posed in $H^1_0(\Omega)$ locally in time and globally for small data, citing Ivanovici and Planchon [18] and a simpler proof in [5, Section 5]. These are historical attributions, not complete imported theorem statements; in particular, no precise exponent range, sign convention, solution class, or smallness threshold is asserted here.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

## Remarks

Here the ray quantifier uses complete curves defined for all real times, as in the non-trapping supplier; locally admissible ray segments are not separately quantified over, and no theorem extending every segment to a complete ray is assumed.

A Cauchy problem prescribes an initial state and asks for a solution evolving from it. In this overview, local well-posedness means existence, uniqueness in the relevant solution class, and continuous dependence on initial data over a time interval; global well-posedness means the corresponding solution exists for all forward times in the stated setting. Small-data global existence concerns initial states sufficiently small in the norm specified by the underlying theorem.

A local smoothing estimate controls additional spatial regularity after localization in space and integration in time. A Strichartz estimate controls a spacetime mixed norm of a solution by a norm of its data; loss means the data norm requires more derivatives than the corresponding lossless scaling would suggest. For $T>0$, $1\le p,q\le\infty$ and a jointly Lebesgue measurable complex function $u$ on $(0,T)\times\Omega$, the mixed norm means $\|u\|_{L^p_tL^q_x}=\|N_q\|_{L^p(0,T)}$, where $N_q(t)=\|u(t,\cdot)\|_{L^q(\Omega)}$ for almost every $t$. For finite $p,q$, this is $(\int_0^T(\int_\Omega|u(t,x)|^q\,dx)^{p/q}\,dt)^{1/p}$; an infinite exponent replaces its corresponding norm by an essential supremum. Functions are identified product-almost everywhere, and an exceptional null set of times is assigned section norm zero. This is the mixed-norm convention, which by itself requires no strong measurability into $L^\infty(\Omega)$.

Scale invariance refers to the dilation of the underlying differential equation, and a restricted exponent range means that the reported estimates do not cover every conceivable pair of spacetime exponents. To specify the energy-critical terminology, for $f\in C_c^\infty(\mathbb R^3;\mathbb C)$ define the homogeneous energy-level Sobolev norm by $\|f\|_{\dot H^1}=(\int_{\mathbb R^3}\sum_{j=1}^3|\partial_j f(x)|^2\,dx)^{1/2}=\|\nabla f\|_{L^2}$, where $\nabla f=(\partial_1f,\partial_2f,\partial_3f)$. This specifies the homogeneous norm on test data needed for the scaling terminology; no completion or boundary identification is being asserted.

The quintic nonlinearity is $|u|^4u=u^3\overline u^{\,2}$, of degree five. For either sign $\sigma\in\{-1,1\}$, the whole-space equation $i\partial_tu+\Delta u=\sigma|u|^4u$, with $\Delta=\sum_{j=1}^3\partial_j^2$, has the dilation $u_\lambda(t,x)=\lambda^{1/2}u(\lambda^2t,\lambda x)$ for $\lambda>0$. It preserves the equation and the homogeneous norm of the dilated test datum $f_\lambda(x)=\lambda^{1/2}f(\lambda x)$; this is the meaning of energy-critical in dimension three here. On an exterior domain the same change of variables carries an equation on $I\times\Omega$ to one on $\lambda^{-2}I\times\lambda^{-1}\Omega$, with obstacle $\lambda^{-1}\Theta$, where $I$ is an open time interval, $\lambda^{-2}I=\{t:\lambda^2t\in I\}$ and $\lambda^{-1}\Omega=\{x:\lambda x\in\Omega\}$. A zero boundary value is carried to zero on the rescaled boundary. Thus this explanation uses whole-space scaling and its rescaled-domain counterpart; it does not assert a dilation symmetry of a fixed obstacle. These descriptions explain the terminology and do not substitute for the hypotheses and inequalities in the cited papers.

## Facts & Assumptions

[F1] Integer Sobolev notation includes complex test functions, their derivatives and $L^2$ norms under Countable Choice. The time-space definition supplies the mixed norm on product-almost-everywhere classes, including both infinite-exponent conventions. [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[F2] For totally differentiable maps between Euclidean spaces the derivative of a composite is the composite of the derivatives. Complex-valued smooth maps are treated as maps with two real components. [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)

[F3] If $T:U\to V$ is a $C^1$ diffeomorphism between open subsets of $\mathbb R^n$ and $g:V\to\mathbb R$ is continuous with compact support, then $\int_Vg(y)\,dy=\int_Ug(T(x))|\det DT(x)|\,dx$. [math:lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands](https://alphabetamath.cc/item/lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands)

[F4] Under Countable Choice every Euclidean ball of positive radius has positive finite Lebesgue measure. A totally differentiable map with zero derivative on a convex open set is constant. [math:lem-euclidean-balls-have-positive-finite-lebesgue-measure](https://alphabetamath.cc/item/lem-euclidean-balls-have-positive-finite-lebesgue-measure) [math:cor-zero-total-derivative-on-a-convex-open-set-is-constant](https://alphabetamath.cc/item/cor-zero-total-derivative-on-a-convex-open-set-is-constant)

[F5] Complex $L^2$ classes have a norm with the triangle inequality. [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm)

## Justification

**Given:** Countable Choice, $f\in C_c^\infty(\mathbb R^3;\mathbb C)$, $\lambda>0$, $\sigma\in\{-1,1\}$ and a smooth complex function $u$ on $I\times\Omega$ or $I\times\mathbb R^3$.

1.1 The homogeneous expression is finite on test functions by F1. Homogeneity and the triangle inequality follow by applying F5 to each derivative and then the finite Euclidean triangle inequality to their three $L^2$ norms. If it is zero and $\nabla f$ is nonzero at a point, continuity gives a positive lower bound for $\sum_j|\partial_j f|^2$ on a ball of positive measure by F4, contradicting its zero integral. Hence all partial derivatives vanish everywhere. Apply the zero-derivative part of F4 to the two real components on the convex open set $\mathbb R^3$: $f$ is constant. Compact support forces this constant to be zero. The displayed expression therefore is a norm on this test-function class; F1 supplies the separate mixed-norm definitions used above. [given, F1, F4, F5, algebra]

2.1 Apply F2 to the dilation, componentwise and twice for each spatial second derivative. The time derivative and Laplacian of $u_\lambda$ are each $\lambda^{5/2}$ times the corresponding derivative of $u$ at $(\lambda^2t,\lambda x)$, while $|u_\lambda|^4u_\lambda=\lambda^{5/2}(|u|^4u)(\lambda^2t,\lambda x)$. Thus the equation is preserved on the stated rescaled domain. The coordinate map and its inverse are continuous dilations, so they carry the boundary to the rescaled boundary and preserve a zero boundary value. Also $\partial_j f_\lambda(x)=\lambda^{3/2}(\partial_j f)(\lambda x)$. Apply F3 with $U=V=\mathbb R^3$, $T(x)=\lambda x$, $|\det DT|=\lambda^3$ and $g(y)=\sum_j|\partial_jf(y)|^2$, a continuous compactly supported real function. It gives $\|f_\lambda\|_{\dot H^1}^2=\int_{\mathbb R^3}\lambda^3g(\lambda x)\,dx=\int_{\mathbb R^3}g(y)\,dy=\|f\|_{\dot H^1}^2$. Together with step 1.1 this establishes the norm invariance used in the energy-critical explanation. [given, F2, F3, step 1.1, algebra] ∎



The article's page 3 paragraph makes the attributions above; its bibliography on page 22 identifies [2], [5], [9], and [18]. The article is cited only as evidence of its own historical overview. The independent papers themselves were not read for this historical remark, and their theorem statements are not imported as premises. The norm and scaling explanations and their local justification above are additions to the generated remark, supported by the declared mathematical suppliers rather than by the article under study.

## Source notes

The article's page 3 paragraph makes the attributions above; its bibliography on page 22 identifies [2], [5], [9], and [18]. The article is cited only as evidence of its own historical overview. The independent papers themselves were not read for this historical remark, and their theorem statements are not imported as premises. The norm and scaling explanations and their local justification above are additions to the generated remark, supported by the declared mathematical suppliers rather than by the article under study.
