---
title: "Theorem 1.3: cubic internal control near zero"
status: published
research_item: thm-se-1-3
dependency_level: 23
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 4 and 16, Theorem 1.3 and its proof
---

PDF p. 4: ` Theorem 1.3 `; PDF p. 16: ` Proof of Theorem 1.3 `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-scale-identifications](item-prop-se-scale-identifications)
- [prop-se-3-9](item-prop-se-3-9)
- [prop-se-3-10](item-prop-se-3-10)
- [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice and hypothesis (H): $n\in\{2,3\}$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and its generalized reflected or glancing rays leave every compact set in finite forward time. Let $T>0$, $s\in\{1,2\}$ and $\lambda\in\mathbb R\setminus\{0\}$. Choose $R>0$ with $\Theta\subset B_R(0)$ and a smooth real cutoff $\varphi\in C^\infty(\mathbb R^n;[0,1])$ that is zero on $|x|\le R$, positive on $|x|>R$, and one on $|x|\ge R+1$.

Let $H_D^s(\Omega)$ be the Dirichlet spectral space $D((I-\Delta_D)^{s/2})$, with norm $\|u\|_{H_D^s}=\|(I-\Delta_D)^{s/2}u\|_{L^2}$. Then there is $\delta>0$ such that, for every $v_0,v_T\in H_D^s(\Omega)$ with $\|v_0\|_{H_D^s},\|v_T\|_{H_D^s}\le\delta$, there are a control $h\in C([0,T];H_D^s(\Omega))$ and an integral solution $v\in C([0,T];H_D^s(\Omega))$ of

$$i\partial_t v+\Delta_Dv+\lambda|v|^2v=\varphi h,\qquad v(0)=v_0,\quad v(T)=v_T.$$

An integral solution here has $\lambda|v|^2v,\varphi h\in L^1(0,T;H_D^s(\Omega))$ and, for $W(t)=e^{it\Delta_D}$, satisfies

$$v(t)=W(t)v_0+i\int_0^tW(t-r)\lambda|v(r)|^2v(r)\,dr-i\int_0^tW(t-r)(\varphi h(r))\,dr\qquad(0\le t\le T).$$

Both integrals are Bochner integrals in $H_D^s(\Omega)$. This is the integral-solution convention for the Dirichlet evolution; it does not require $\Delta_Dv(t)$ to belong to $H_D^s(\Omega)$ at each time.

The Dirichlet condition is encoded by $\Delta_D$. Here $C([0,T];H_D^s)$ denotes norm-continuous paths. The control itself need not be supported in the control region; its force $\varphi h$ vanishes where $|x|\le R$.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-control-cutoffs](item-def-se-control-cutoffs)

[def-se-internal-systems](item-def-se-internal-systems)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[prop-se-nonlinear-mild](item-prop-se-nonlinear-mild)

## Facts & Assumptions

[F1] The geometry and ray convention are specified by [def-se-geometry](item-def-se-geometry), and the cutoff and cubic controlled system by [def-se-control-cutoffs](item-def-se-control-cutoffs) and [def-se-internal-systems](item-def-se-internal-systems). The scale is specified by [def-se-dirichlet-scale](item-def-se-dirichlet-scale), path continuity by [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces), and the assumed choice principle by [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] Under these geometric and Choice hypotheses, [prop-se-scale-identifications](item-prop-se-scale-identifications) identifies $H_D^1$ with $H^1_0$ and gives equivalent spectral and $H^1$ norms. The latter space is the $H^1$ closure of compactly supported smooth functions.

[F3] With $m=3$, [prop-se-3-9](item-prop-se-3-9) supplies a positive radius in the $H^1$ norm and a continuous $H^1_0$ control and integral solution joining every endpoint pair within that radius. With $m=3$, [prop-se-3-10](item-prop-se-3-10) supplies the corresponding conclusion at order two for endpoints small in the spectral $H_D^2$ norm.

[F4] The integral-solution equivalence in [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild) applies on $H_D^s$ to the free group $W(t)=e^{it\Delta_D}$ whenever $g(v)=\lambda|v|^2v$ and $Kh=\varphi h$ are Bochner integrable there. It identifies the variation-of-constants formula in the Statement with the integrated generator equation. The solutions constructed by the two propositions in F3 use this convention and have both forcings in the required Bochner $L^1$ space. The Choice assumption is inherited from these suppliers as well as the scale identification.

## Proof

**Given:** The hypotheses and endpoint data in the Statement.

**Goal:** Find a positive spectral-norm radius and a control and solution with the stated endpoints.

1.1 If $s=1$, let $r_1>0$ be the radius supplied by F3. By F2 there is $C>0$ such that $\|u\|_{H^1}\le C\|u\|_{H_D^1}$ for every $u\in H_D^1$. Set $\delta=r_1/C$. The endpoint bounds in the Statement then meet the hypotheses of the first proposition in F3. [F2, F3, given]

1.2 If $s=2$, take $\delta>0$ to be the spectral-norm radius supplied by the second proposition in F3. The endpoint bounds satisfy its assumptions, so it gives an integral cubic controlled solution and a control in $C([0,T];H_D^2)$ with the prescribed endpoints. Its equation and cutoff are those of F1. [F1, F3, given]

2.1 For $s=1$, the first proposition in F3 gives an integral cubic controlled solution and control, both continuous in $H^1_0$, with the required endpoints. The norm equivalence in F2 makes both paths continuous in $H_D^1$; F1 identifies the equation and cutoff with those in the Statement. Thus the conclusion holds when $s=1$. [F1, F2, F3, step 1.1]

3.1 The solutions supplied by F3 have Bochner-integrable cubic and control forcings and satisfy the variation-of-constants identity of F4. In the case $s=1$, the norm equivalence in F2 preserves Bochner integrability and the values of the integrals: convergence of the defining simple-function integrals in either norm is convergence in the other norm. Thus the identity is unchanged on identifying $H^1_0$ with $H_D^1$. For $s=2$ it is already an identity in $H_D^2$. Consequently, in both cases these are integral solutions with exactly the forcing integrability and formula specified in the Statement. [F2, F3, F4, step 1.2, step 2.1]

4.1 Since $s$ is either $1$ or $2$, steps 2.1 and 1.2 establish the required conclusion in every stated case. Step 3.1 supplies the stated integral-solution interpretation in both cases. [given, step 2.1, step 1.2, step 3.1] ∎

## Source notes

The frozen article is cited for attribution of Theorem 1.3 and its stated reduction. The $[0,1]$ range of the cutoff is explicit in the setup of (1.8) on PDF page 4 and agrees with (3.1); it restores the original hypothesis omitted from the earlier generated draft. The argument above uses the separately supplied propositions and scale identification, with the independently supplied mild-solution convention, not the article's theorem as a premise.
