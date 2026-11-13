---
title: Coercivity and bounded trajectory control operator
status: published
research_item: prop-se-real-hum-isomorphism
dependency_level: 18
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 19, proof of Theorem 1.4
---

PDF p. 19: ` Proof of Theorem 1.4, coercivity and conclusion `

## Prerequisites

- [def-se-real-hum](item-def-se-real-hum)
- [def-se-hum-map](item-def-se-hum-map)
- [prop-se-real-duality](item-prop-se-real-duality)
- [prop-se-4-6](item-prop-se-4-6)
- [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution)
- [prop-se-potential-multipliers](item-prop-se-potential-multipliers)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [lem-se-real-evolution-duhamel-bound](item-lem-se-real-evolution-duhamel-bound)
- [lem-se-real-hilbert-dualization](item-lem-se-real-hilbert-dualization)
- [lem-se-observation-gramian-right-inverse](item-lem-se-observation-gramian-right-inverse)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:thm-pe12-bochner-lp-completeness](https://alphabetamath.cc/item/thm-pe12-bochner-lp-completeness)
- [math:thm-cauchy-schwarz-in-an-inner-product-space](https://alphabetamath.cc/item/thm-cauchy-schwarz-in-an-inner-product-space)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)


## Statement

Assume the Axiom of Choice and hypotheses (H), (W), and (UCPw) of [prop-se-4-6](item-prop-se-4-6). In particular, $T>0$, $\Omega$ is the connected exterior of a smooth compact nontrapping obstacle, $w$ is the specified reference trajectory, and the stated energy-level unique continuation property holds. Let $s\in\{1,2\}$, $\sigma=-s$, $E=H_D^s(\Omega)$ and $F=H_D^\sigma(\Omega)$. Regard these complex spectral Hilbert spaces as real Hilbert spaces. Let $U(t)$ be the real-linear adjoint evolution, $\varphi$ the real control cutoff, and $S_w:F\to E$ the backward-control map of [def-se-real-hum](item-def-se-real-hum). The pivot pairing $\langle\cdot,\cdot\rangle_{s,-s}$ is linear in its first variable.

For every $v_0\in F$,

$$\operatorname{Re}\langle S_wv_0,v_0\rangle_{s,-s}=\int_0^T\|\varphi U(t)v_0\|_F^2\,dt\ge C^{-1}\|v_0\|_F^2,$$

where $C$ is the observability constant for $\sigma$. The bounded real-linear map $S_w:F\to E$ is a bijection with bounded inverse. Consequently the map $G_w:E\times E\to C([0,T];E)$ defined in [def-se-real-hum](item-def-se-real-hum) is bounded and real-linear and selects a control steering the linearized system between any prescribed endpoints in $E$.

## Facts & Assumptions

[F1] The construction in [def-se-real-hum](item-def-se-real-hum) sets $A=I-\Delta_D$, $\Lambda_s=A^s:E\to F$, $h_a(t)=-i\Lambda_s^{-1}(\varphi U(t)a)$, and $S_wa=z_a(0)$, where $z_a(T)=0$ and $i z_t+\Delta_Dz+V_1z+V_2\overline z=\varphi h_a$. It supplies bounded real-linear $S_w$ and a bounded path-valued map $a\mapsto h_a$. Once $S_w$ has bounded inverse, its displayed formula for $G_w$ gives the claimed steering and boundedness.

[F2] By [def-se-hum-map](item-def-se-hum-map) and [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract), $\Lambda_s^{-1}:F\to E$ is an onto isometry and $\operatorname{Re}\langle\Lambda_s^{-1}f,g\rangle_{s,-s}=(f,g)_F$ for the real part of the $F$ inner product. The common spectral core is dense in $F$. Realification preserves the Hilbert norms by [lem-se-real-hilbert-dualization](item-lem-se-real-hilbert-dualization).

[F3] The forward and adjoint evolutions are uniformly bounded and strongly continuous on the relevant scale levels: for each fixed datum, its orbit is norm-continuous in that scale space [prop-se-perturbed-evolution](item-prop-se-perturbed-evolution). The potential operators are norm-continuous bounded operators on those levels, with negative-level actions defined by pivot duality [prop-se-potential-multipliers](item-prop-se-potential-multipliers). The real cutoff is bounded on both $E$ and $F$ and its negative-level action is the pivot transpose of its positive-level action [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers). The mild solutions obey the oriented Duhamel formula of [lem-se-real-evolution-duhamel-bound](item-lem-se-real-evolution-duhamel-bound).

[F4] For strong $L^2$ solutions of the linearized and adjoint systems, [prop-se-real-duality](item-prop-se-real-duality) gives $\frac d{dt}\operatorname{Re}\langle z(t),v(t)\rangle_2=\operatorname{Re}\langle-i\varphi h(t),v(t)\rangle_2$.

[F5] For $\sigma\in\{-1,-2\}$, [prop-se-4-6](item-prop-se-4-6) gives $\int_0^T\|\varphi U(t)a\|_F^2dt\ge C^{-1}\|a\|_F^2$. Under Countable Choice, the observation Gramian of a bounded real-linear observation with this lower bound is a bounded isomorphism [lem-se-observation-gramian-right-inverse](item-lem-se-observation-gramian-right-inverse). Full Choice is assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F6] The time-space definition [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) gives $Z=L^2(0,T;F)$ as the real vector space of almost-everywhere classes of strongly measurable $F$-valued functions with norm $\|u\|_Z=(\int_0^T\|u(t)\|_F^2dt)^{1/2}$. Sums and scalar multiples are strongly measurable and their norms are measurable. Under Countable Choice, [math:thm-pe12-bochner-lp-completeness](https://alphabetamath.cc/item/thm-pe12-bochner-lp-completeness) makes this norm complete for every real Banach value space, with $p=2$; no separability hypothesis is required. The assumed Axiom of Choice supplies Countable Choice.

[F7] Pointwise Cauchy–Schwarz bounds $|(x,y)_F|$ by $\|x\|_F\|y\|_F$ [math:thm-cauchy-schwarz-in-an-inner-product-space](https://alphabetamath.cc/item/thm-cauchy-schwarz-in-an-inner-product-space). Scalar Hölder with exponents $2,2$ bounds $\int_0^T fg$ by $\|f\|_2\|g\|_2$ for nonnegative measurable $f,g\in L^2(0,T)$ [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals).

## Proof

**Given:** The hypotheses and constructions in the Statement, with $s\in\{1,2\}$.

**Goal:** Establish the pairing identity and coercivity, invert $S_w$, and obtain the bounded endpoint-control selection.

1.1 First take $a,b$ in the common spectral core and use the control $h_a$ in the backward equation for $z_a$. The data and control are in $H_D^2$: $a\in H_D^2$, multiplication by $\varphi$ preserves that space, and $\Lambda_s^{-1}$ increases spectral order. The Duhamel equations, the free group on $D(\Delta_D)=H_D^2$, and norm-continuity of the potential operators show that $z_a$ and $U(\cdot)b$ are continuous in $H_D^2$ and continuously differentiable in $L^2$. Indeed the Duhamel integrands are continuous in $H_D^2$; differentiating the free-group convolution in $L^2$ gives the displayed differential equations. Thus the strong pairing identity applies. [F1, F2, F3, F4]

1.2 Integrating that identity from $0$ to $T$, using $z_a(T)=0$, yields $\operatorname{Re}\langle S_wa,b\rangle_2=\int_0^T\operatorname{Re}\langle i\varphi h_a(t),U(t)b\rangle_2dt$. Since $ih_a=\Lambda_s^{-1}(\varphi U(t)a)$ and $\varphi$ is real, the cutoff transpose identity and the scale Riesz identity turn the integrand into $(\varphi U(t)a,\varphi U(t)b)_F$. Both sides are continuous real-bilinear functions of $(a,b)\in F\times F$: use the boundedness of $S_w$, the pivot pairing, the uniform evolution and cutoff bounds, and the finite length of the time interval. Density of the spectral core therefore extends the identity to all $a,b\in F$:
$$\operatorname{Re}\langle S_wa,b\rangle_{s,-s}=\int_0^T(\varphi U(t)a,\varphi U(t)b)_F\,dt.$$
[F1, F2, F3, F4, step 1.1]

1.3 Give $Z=L^2(0,T;F)$ the real pairing $(u,v)_Z=\int_0^T(u(t),v(t))_F\,dt$. Since $F$ is a real Hilbert space, it is a real Banach space, so the completeness theorem applies to $F$, $p=2$, and the finite interval $(0,T)$ under the assumed Choice. For strongly measurable $u,v$, the real polarization identity $(u(t),v(t))_F=(\|u(t)+v(t)\|_F^2-\|u(t)-v(t)\|_F^2)/4$ makes the integrand measurable. Cauchy–Schwarz in $F$ and scalar Hölder show $\int_0^T|(u(t),v(t))_F|dt\le\|u\|_Z\|v\|_Z$, so the pairing is finite and independent of representatives. Pointwise bilinearity and symmetry pass to the integral; its diagonal equals $\|u\|_Z^2$, which vanishes exactly for the zero class because this is the norm in F6. Thus this pairing is an inner product inducing the complete Bochner norm, and $Z$ is a real Hilbert space. [F2, F5, F6, F7]

2.1 Define $O:F\to Z$ by $(Oa)(t)=\varphi U(t)a$. Each observation orbit is norm-continuous by F3. The finite-range step functions taking its value at the left endpoint of each interval of the partition into $n$ equal pieces converge pointwise to it as $n\to\infty$, so the orbit is strongly measurable. If $M=\sup_{0\le t\le T}\|U(t)\|_{F\to F}$ and $K=\|\varphi\|_{F\to F}$, then $\|Oa\|_Z\le\sqrt{T}KM\|a\|_F$. Thus $O$ is bounded and real-linear between the real Hilbert spaces $F$ and $Z$, and observability gives $\|Oa\|\ge C^{-1/2}\|a\|_F$. Let $Q=O^*O$. The Gramian result makes $Q$ a bounded isomorphism of $F$. By step 1.2 and the scale pairing identity, $\Lambda_s S_w=Q$: their real inner products with every $b\in F$ coincide. Since $\Lambda_s:E\to F$ is a bounded isomorphism, $S_w=\Lambda_s^{-1}Q$ is a bounded isomorphism from $F$ to $E$. Taking $b=a$ in step 1.2 gives the displayed identity and coercivity. [F2, F3, F5, F6, step 1.2, step 1.3]

3.1 The inverse just obtained satisfies the additional hypothesis in the definition of $G_w$. For endpoints $x_0,x_T\in E$, that definition takes $a=S_w^{-1}(x_0-P(0,T)x_T)$ and $G_w(x_0,x_T)=h_a$. Its backward controlled solution starts at $x_0-P(0,T)x_T$ and ends at zero; adding the homogeneous solution with terminal value $x_T$ gives initial value $x_0$ and terminal value $x_T$. The boundedness and real linearity of the inverse, propagator and path-valued control map give the corresponding properties of $G_w$. This proves all conclusions. [F1, F3, step 2.1] ∎

## Source notes

The original article is cited for attribution of the HUM construction and conclusion. The proof above uses the stated mathematical suppliers; the article's assertion is not used as its own premise. The Choice assumption records the hypotheses of the supplied functional-analytic results.
