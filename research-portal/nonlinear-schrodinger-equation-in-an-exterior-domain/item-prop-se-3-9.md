---
title: "Proposition 3.9: energy-space local control"
status: draft
research_item: prop-se-3-9
dependency_level: 22
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 15–16, Proposition 3.9
---

PDF p. 15: ` Proposition 3.9 `; PDF p. 16: ` proof concludes `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-energy-space](item-def-se-energy-space)
- [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-scale-identifications](item-prop-se-scale-identifications)
- [prop-se-energy-duhamel](item-prop-se-energy-duhamel)
- [prop-se-energy-nonlinear-estimates](item-prop-se-energy-nonlinear-estimates)
- [thm-se-3-7](item-thm-se-3-7)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild)


## Statement

Assume the Axiom of Choice and hypothesis (H): $n\in\{2,3\}$, $\Theta\subset\mathbb R^n$ is nonempty and compact with smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and every generalized reflected or glancing ray leaves each compact set in finite forward time. Let $T>0$, $m\in\{3,5\}$ and $\lambda\in\mathbb R\setminus\{0\}$. Choose the control cutoff $\varphi$ of [def-se-control-cutoffs](item-def-se-control-cutoffs).

Let $H^1_0(\Omega)$ be the closure of $C_c^\infty(\Omega;\mathbb C)$ in $H^1(\Omega)$, and let $X_T=C([0,T];H^1_0(\Omega))\cap L^4_tL^\infty_x$, with compatible jointly measurable representatives and norm $\|v\|_{X_T}=\sup_{t\in[0,T]}\|v(t)\|_{H^1}+\|v\|_{L^4_tL^\infty_x}$. The mixed norm is the $L^4$ norm in time of the spatial essential supremum. At $s=1$, this space satisfies the homogeneous, retarded-forcing and nonlinear estimates in the abstract perturbation hypotheses. After an equivalent constant rescaling of its norm if needed, it satisfies their norm-one inclusion convention as well.

Consequently, there is $\delta>0$ such that for every $v_0,v_T\in H^1_0(\Omega)$ with $\|v_0\|_{H^1},\|v_T\|_{H^1}\le\delta$, there exist $h\in C([0,T];H^1_0(\Omega))$ and $v\in X_T$ solving $i\partial_t v+\Delta_Dv+\lambda|v|^{m-1}v=\varphi h$ in the integral sense, with $v(0)=v_0$ and $v(T)=v_T$. The homogeneous Dirichlet condition is encoded by $\Delta_D$. Thus the internally controlled system is locally exactly controllable in $H^1_0(\Omega)$.

## Statement references

[def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)

[prop-se-nonlinear-mild](item-prop-se-nonlinear-mild)

[def-se-geometry](item-def-se-geometry)

[def-se-control-cutoffs](item-def-se-control-cutoffs)

[def-se-internal-systems](item-def-se-internal-systems)

[def-se-energy-space](item-def-se-energy-space)

[def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The stated geometry and ray convention are those of [def-se-geometry](item-def-se-geometry). The cutoff and controlled equation are specified by [def-se-control-cutoffs](item-def-se-control-cutoffs) and [def-se-internal-systems](item-def-se-internal-systems). The stated Sobolev closure and scalar mixed-norm conventions are those of [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) and [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) The Dirichlet operator is the realization in [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian).

[F2] [def-se-energy-space](item-def-se-energy-space) supplies completeness of $X_T$ with the displayed norm. [prop-se-scale-identifications](item-prop-se-scale-identifications) identifies $H_D^1(\Omega)$ and $H^1_0(\Omega)$ as sets with equivalent norms.

[F3] Under the stated geometry and Choice assumption, [prop-se-energy-duhamel](item-prop-se-energy-duhamel) gives the homogeneous evolution and retarded Bochner-forcing estimates in $X_T$ with $H^1_0$ norms. [prop-se-energy-nonlinear-estimates](item-prop-se-energy-nonlinear-estimates) gives $g(v)\in L^1(0,T;H^1_0)$ and the required growth and difference estimates for $g(z)=\lambda|z|^{m-1}z$; its time factor is $T^{(5-m)/4}$, including the value $1$ for $m=5$.

[F4] [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses) specifies the Banach path space, norm-one inclusion and three estimates used by [thm-se-3-7](item-thm-se-3-7). That theorem gives a continuous control and an integral solution joining sufficiently small endpoints in $H_D^1$ when those hypotheses hold. The integral-solution convention and its mild equivalence are those of [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild).

## Proof

**Given:** The assumptions and notation of the Statement.

**Goal:** Verify the abstract hypotheses at $s=1$ and obtain the stated local exact control.

1.1 Put $H=H_D^1(\Omega)$. By F2, there are positive constants $a,b$ such that $a\|w\|_{H^1}\le\|w\|_H\le b\|w\|_{H^1}$ for every $w\in H^1_0$. Choose $c\ge\max\{1,b\}$ and equip the same vector space $X_T$ with $\|v\|_{\widehat X}=c\|v\|_{X_T}$. This equivalent norm preserves completeness, and $\sup_t\|v(t)\|_H\le\|v\|_{\widehat X}$. Hence the path-space and norm-one inclusion requirements in F4 hold. [F2, F4, given]

2.1 The homogeneous and retarded estimates of F3 apply to exactly this exterior, time interval and space. Replacing the $H^1_0$ norms by the equivalent $H$ norms and the $X_T$ norm by $\|\cdot\|_{\widehat X}$ changes only their constants. The same equivalence carries strong measurability and Bochner integrability between the two descriptions of $H$, so the forcing estimate has the required meaning. These are conditions (i) and (ii) of F4. [F2, F3, F4, step 1.1]

3.1 By F3, $g(v)$ is Bochner integrable in $H^1_0$ and satisfies the growth and difference bounds for every $u,v\in X_T$. Norm equivalence and the rescaling in step 1.1 give the corresponding bounds with the $H$ and $\widehat X$ norms. Since $T>0$ is fixed, $T^{(5-m)/4}$ is a finite constant, including when $m=5$. Taking one sufficiently large constant for these and the two linear bounds verifies condition (iii) and the common-constant requirement of F4. [F2, F3, F4, step 1.1, step 2.1]

4.1 Apply the theorem in F4 with $s=1$ and the rescaled space. It yields a positive endpoint radius in the $H$ norm, a control continuous in $H$, and an integral solution in $X_T$ with the prescribed endpoints. Choose $\delta$ small enough that $b\delta$ is at most that radius. The norm equivalence makes the control continuous in $H^1_0$ and places every endpoint pair in the theorem's range, proving the stated conclusion. [F1, F2, F4, step 1.1, step 2.1, step 3.1] ∎

## Source notes

The frozen article is cited for attribution of Proposition 3.9. The application above uses the separately supplied linear and nonlinear estimates and the abstract control theorem; it does not use the article's proposition as a premise.
