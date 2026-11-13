---
title: "Proposition 3.10: order-two local control"
status: published
research_item: prop-se-3-10
dependency_level: 22
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 16, Proposition 3.10
---

PDF p. 16: ` Proposition 3.10 `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [thm-se-3-7](item-thm-se-3-7)
- [prop-se-h2-nonlinearity](item-prop-se-h2-nonlinearity)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-function-space-is-complete-for-a-complete-target](https://alphabetamath.cc/item/thm-function-space-is-complete-for-a-complete-target)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)
- [math:thm-absolute-continuity-of-the-integral](https://alphabetamath.cc/item/thm-absolute-continuity-of-the-integral)


## Statement

Assume the Axiom of Choice and (H): $n\in\{2,3\}$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and its generalized reflected rays leave every compact set in finite time. Let $T>0$, $m\in\{3,5\}$ and $\lambda\in\mathbb R\setminus\{0\}$. Let $\varphi$ be the control cutoff of [def-se-control-cutoffs](item-def-se-control-cutoffs). Put $H=H_D^2(\Omega)$ and $X_T=C([0,T];H)$ with its supremum norm. The space $H$ is the order-two Dirichlet spectral space; it equals $H^2(\Omega)\cap H^1_0(\Omega)$ with equivalent norms, where $H^1_0$ is the $H^1$ closure of compactly supported smooth functions.

The three hypotheses of [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses) hold at $s=2$ for this $X_T$. Consequently there is $\delta>0$ such that any $v_0,v_T\in H^2(\Omega)\cap H^1_0(\Omega)$ with both spectral $H$ norms at most $\delta$ can be joined by an integral solution $v\in C([0,T];H)$ of $i\partial_t v+\Delta_Dv+\lambda|v|^{m-1}v=\varphi h$, with $v(0)=v_0$, $v(T)=v_T$ and a control $h\in C([0,T];H)$. Thus the system is locally exactly controllable in $H^2(\Omega)\cap H^1_0(\Omega)$; equivalence of norms allows the smallness condition to be expressed in the ordinary $H^2$ norm. The integral solution is understood through the variation-of-constants formulation in [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild), with $\sigma=2$.

## Facts & Assumptions

[F1] The geometry and cutoff are those of [def-se-geometry](item-def-se-geometry) and [def-se-control-cutoffs](item-def-se-control-cutoffs). The spectral scale [def-se-dirichlet-scale](item-def-se-dirichlet-scale) is complete, and [prop-se-h2-nonlinearity](item-prop-se-h2-nonlinearity) identifies $H$ with $H^2\cap H^1_0$ with equivalent norms. The weak Sobolev and closure conventions are those of [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation).

[F2] Under Choice, [prop-se-scale-flow](item-prop-se-scale-flow) gives a strongly continuous unitary group $W(t)=e^{it\Delta_D}$ on $H$. Choice is assumed as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F3] [prop-se-h2-nonlinearity](item-prop-se-h2-nonlinearity) gives, for $g(z)=\lambda|z|^{m-1}z$ and $u,v\in X_T$, Bochner-integrability of $g(u),g(v)$ and the bounds $\|g(v)\|_{L^1H}\le CT\|v\|_{X_T}^m$ and $\|g(v)-g(u)\|_{L^1H}\le CT(\|v\|_{X_T}^{m-1}+\|u\|_{X_T}^{m-1})\|v-u\|_{X_T}$.

[F4] [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) fixes norm-continuous paths, strongly measurable Bochner $L^1$ functions and their norms. The Bochner integrability criterion, integral norm bound and commutation with bounded linear operators are supplied by [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration). Scalar integrals of integrable functions are absolutely continuous by [math:thm-absolute-continuity-of-the-integral](https://alphabetamath.cc/item/thm-absolute-continuity-of-the-integral).

[F5] [math:thm-function-space-is-complete-for-a-complete-target](https://alphabetamath.cc/item/thm-function-space-is-complete-for-a-complete-target) gives completeness of the continuous-function space for a complete target in the uniform metric. [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses) specifies the three bounds required for the application of [thm-se-3-7](item-thm-se-3-7).

[F6] [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild) specifies the integral-solution concept and its equivalent variation-of-constants formulation on $H_D^\sigma(\Omega)$; here $\sigma=2$, with the same assumed Choice principle, free group, nonlinearity and control force.

## Proof

**Given:** The assumptions, spaces and parameters in the Statement.

**Goal:** Verify the three abstract perturbation hypotheses and apply the nonlinear control theorem.

1.1 The target $H$ is complete by F1. F5 makes the continuous path space complete in the truncated uniform metric; for distances below one that metric agrees with the supremum distance. Hence every supremum-norm Cauchy sequence converges in supremum norm. With the pointwise vector operations and supremum norm of F4, $X_T$ is a Banach space. Its inclusion into $C([0,T];H)$ is the identity and has norm one. [F1, F4, F5]

1.2 Let $f\in L^1(0,T;H)$. Strong measurability of $r\mapsto W(-r)f(r)$ follows by approximating $f$ almost everywhere by finite-range measurable functions: for each fixed value, $r\mapsto W(-r)x$ is continuous, and its restriction to the compact interval is a uniform limit of finite-range measurable functions. Unitarity preserves the norm, so F4 gives its Bochner integrability. Set $F(t)=\int_0^t W(-r)f(r)\,dr$. The integral norm bound gives $\|F(t)-F(s)\|_H\le\int_{\min(s,t)}^{\max(s,t)}\|f(r)\|_H\,dr$, so F4 makes $F$ continuous. Strong continuity and unitarity imply that $W(t)F(t)$ is continuous: split its increment into $W(t)(F(t)-F(s))$ and $(W(t)-W(s))F(s)$. [F2, F4]

2.1 By F2, $W(\cdot)v_0$ is a continuous $H$-valued path and $\|W(\cdot)v_0\|_{X_T}=\|v_0\|_H$. This proves the homogeneous hypothesis. [F2, step 1.1]

2.2 By the group law and commutation of a bounded linear map with the Bochner integral, $W(t)F(t)=\int_0^t W(t-r)f(r)\,dr=:Df(t)$. The integral norm bound and unitarity give $\|Df\|_{X_T}\le\|f\|_{L^1(0,T;H)}$. This proves the retarded-forcing hypothesis, including existence and path continuity. [F2, F4, step 1.2]

3.1 F3 gives the required nonlinear membership and both power bounds. Taking one constant $C_0\ge1$ large enough for the constants in steps 2.1 and 2.2 and F3 verifies all three conditions of F5 for the same $X_T$. [F3, F5, step 2.1, step 2.2]

4.1 The dimension, geometry, time, exponent, coefficient and cutoff meet the hypotheses of [thm-se-3-7](item-thm-se-3-7), and $s=2$ lies in its stated range. Applying it with the space verified in step 3.1 gives the stated $\delta$, control and integral solution with the prescribed endpoints. The identification and norm equivalence in F1 give the stated formulation in $H^2\cap H^1_0$ and permit an ordinary-$H^2$ smallness radius. This proves the proposition. [F1, F5, F6, step 3.1] ∎

## Source notes

The frozen article is cited for attribution of Proposition 3.10. The deduction uses the separately stated control theorem and its mathematical prerequisites; the article is not used as a proof of those prerequisites.
