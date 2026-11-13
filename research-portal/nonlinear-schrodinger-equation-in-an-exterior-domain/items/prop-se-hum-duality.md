---
id: prop-se-hum-duality
kind: proposition
domain: mathematics
title: Free HUM identity, coercivity and invertibility
status: draft
proof_strategy: direct
deps:
  - def-se-hum-map
  - def-se-dirichlet-scale
  - def-se-control-cutoffs
  - prop-se-scale-flow
  - prop-se-cutoff-multipliers
  - prop-se-forced-linear-wellposedness
  - prop-se-3-5
  - lem-se-observation-gramian-right-inverse
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:def-axiom-of-choice
  - def-se-foundation-time-function-spaces
  - math:lem-complex-norm-realification-is-a-real-norm
  - math:thm-pe12-bochner-lp-completeness
  - math:thm-choice-implies-dependent-implies-countable-choice
  - math:thm-cauchy-schwarz-in-an-inner-product-space
  - math:thm-holder-inequality-for-integrals
  - math:thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - math:thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - math:def-hilbert-space
  - math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
dependency_roles:
  def-se-hum-map: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-cutoff-multipliers: mathematical-premise
  prop-se-forced-linear-wellposedness: mathematical-premise
  prop-se-3-5: mathematical-premise
  lem-se-observation-gramian-right-inverse: mathematical-premise
  math:thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:lem-complex-norm-realification-is-a-real-norm: mathematical-premise
  math:thm-pe12-bochner-lp-completeness: mathematical-premise
  math:thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  math:thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  math:thm-holder-inequality-for-integrals: mathematical-premise
  math:thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable: mathematical-premise
  math:def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  math:thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  math:thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  math:def-hilbert-space: mathematical-premise
  math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
formulation_deps:
  - def-se-hum-map
  - def-se-dirichlet-scale
  - prop-se-3-5
  - math:def-axiom-of-choice
  - def-se-control-cutoffs
  - prop-se-scale-flow
  - prop-se-forced-linear-wellposedness
argument_deps:
  - def-se-hum-map
  - def-se-dirichlet-scale
  - def-se-control-cutoffs
  - prop-se-scale-flow
  - prop-se-cutoff-multipliers
  - prop-se-forced-linear-wellposedness
  - prop-se-3-5
  - lem-se-observation-gramian-right-inverse
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:def-axiom-of-choice
  - def-se-foundation-time-function-spaces
  - math:lem-complex-norm-realification-is-a-real-norm
  - math:thm-pe12-bochner-lp-completeness
  - math:thm-choice-implies-dependent-implies-countable-choice
  - math:thm-cauchy-schwarz-in-an-inner-product-space
  - math:thm-holder-inequality-for-integrals
  - math:thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - math:thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - math:def-hilbert-space
  - math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
dependency_level: 17
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, the nonempty compact obstacle has smooth boundary and connected exterior $\Omega$, and its generalized reflected rays leave every compact set in finite time. Let $T>0$, $s\in[-2,2]$, $\sigma=-s$, and let $\varphi$ be the real control cutoff of [[def-se-control-cutoffs]]. Write $H_D^r$ for the complex Dirichlet spectral scale, $W(t)=e^{it\Delta_D}$, and $\langle\cdot,\cdot\rangle_{s,\sigma}$ for its pivot pairing, linear in the first argument. Let $S:H_D^\sigma\to H_D^s$ be the HUM map of [[def-se-hum-map]].

For $v_0,w_0\in H_D^\sigma$, put $v(t)=W(t)v_0$, $w(t)=W(t)w_0$, $h(t)=-i\Lambda_s^{-1}(\varphi v(t))$, and let $z$ be the backward mild solution with terminal value zero used in the definition of $S$. Then
$$\frac{d}{dt}\langle z(t),w(t)\rangle_{s,\sigma}=-i\langle\varphi h(t),w(t)\rangle_{s,\sigma}$$
for $0<t<T$, and
$$\langle Sv_0,w_0\rangle_{s,\sigma}=\int_0^T(\varphi v(t),\varphi w(t))_{H_D^\sigma}\,dt.$$
In particular, for the observability constant $C>0$ from [[prop-se-3-5]],
$$\langle Sv_0,v_0\rangle_{s,\sigma}=\int_0^T\|\varphi W(t)v_0\|_{H_D^\sigma}^2\,dt\ge C^{-1}\|v_0\|_{H_D^\sigma}^2.$$
The bounded complex-linear map $S:H_D^\sigma\to H_D^s$ is an isomorphism with bounded inverse.

## Facts & Assumptions

[F1] The scale is a complex Hilbert scale with a continuous pivot pairing; $\Lambda_s^{-1}=A^{-s}:H_D^\sigma\to H_D^s$ is the inverse scale Riesz map, characterized by $\langle\Lambda_s^{-1}a,b\rangle_{s,\sigma}=(a,b)_{H_D^\sigma}$ for $a,b\in H_D^\sigma$. The HUM construction makes $S$ bounded and complex-linear. [[def-se-dirichlet-scale]] [[def-se-hum-map]]

[F2] $W(t)$ is a strongly continuous unitary group on each scale level and preserves the pivot pairing: $\langle W(t)f,W(t)g\rangle_{s,\sigma}=\langle f,g\rangle_{s,\sigma}$. The real cutoff acts boundedly on both relevant levels and is symmetric for the pivot pairing: $\langle\varphi f,g\rangle_{s,\sigma}=\langle f,\varphi g\rangle_{s,\sigma}$. [[prop-se-scale-flow]] [[prop-se-cutoff-multipliers]] [[def-se-control-cutoffs]]

[F3] For continuous $h:[0,T]\to H_D^s$, the backward mild solution with $z(T)=0$ satisfies $z(t)=i\int_t^T W(t-r)\varphi h(r)\,dr$ as a Bochner integral. Bounded linear functionals commute with this integral. [[prop-se-forced-linear-wellposedness]] [[math:thm-bounded-linear-maps-commute-with-bochner-integration]]

[F4] Under the stated geometry and Choice, observability gives $\|x\|_{H_D^\sigma}^2\le C\int_0^T\|\varphi W(t)x\|_{H_D^\sigma}^2dt$ for every $x\in H_D^\sigma$. A bounded Hilbert-space observation with a positive lower bound has an invertible Gramian. [[prop-se-3-5]] [[lem-se-observation-gramian-right-inverse]] [[math:def-axiom-of-choice]]

[F5] The notation $L^2(0,T;X)$ means the almost-everywhere classes of strongly measurable maps on the Lebesgue interval with norm $(\int_0^T\|u(t)\|_X^2\,dt)^{1/2}$, with pointwise vector operations. Strong measurability uses finite-range measurable simple approximants. This construction is a normed space for real or complex Banach $X$. [[def-se-foundation-time-function-spaces]]

[F6] Restricting the scalars of a complex normed space to the reals preserves its set, norm and metric. For a real Banach space $X$ and $0<T<\infty$, the Bochner space $L^2(0,T;X)$ is complete under Countable Choice. The assumed Axiom of Choice supplies Countable Choice for this completeness theorem and the Gramian lemma. [[math:lem-complex-norm-realification-is-a-real-norm]] [[math:thm-pe12-bochner-lp-completeness]] [[math:thm-choice-implies-dependent-implies-countable-choice]]

[F7] In a complex Hilbert space, Cauchy–Schwarz bounds the modulus of the inner product by the product of the norms. Scalar Hölder with exponents $(2,2)$ bounds the integral of that norm product. Pointwise limits of measurable real functions are measurable, applied componentwise to complex functions. Complex Lebesgue integration is defined through real and imaginary parts, is linear on $L^1$, and respects almost-everywhere equality. A complex inner-product space complete in its induced norm is a complex Hilbert space. [[math:thm-cauchy-schwarz-in-an-inner-product-space]] [[math:thm-holder-inequality-for-integrals]] [[math:thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]] [[math:def-integrable-real-and-complex-functions-and-their-integrals]] [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]] [[math:thm-the-lebesgue-integral-respects-almost-everywhere-equality]] [[math:def-hilbert-space]]

[F8] Assuming Countable Choice, if $X$ is a real or complex Banach space and $f:[a,b]\to X$ is continuous with $a<b$, then $G(t)=\int_a^t f(r)\,dr$ is differentiable on $(a,b)$ with $G^{\prime}(t)=f(t)$, using real differentiation. The assumed Axiom of Choice supplies Countable Choice. [[math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]] [[math:thm-choice-implies-dependent-implies-countable-choice]]

## Proof

[F1] The scale is a complex Hilbert scale with a continuous pivot pairing; $\Lambda_s^{-1}=A^{-s}:H_D^\sigma\to H_D^s$ is the inverse scale Riesz map, characterized by $\langle\Lambda_s^{-1}a,b\rangle_{s,\sigma}=(a,b)_{H_D^\sigma}$ for $a,b\in H_D^\sigma$. The HUM construction makes $S$ bounded and complex-linear. [[def-se-dirichlet-scale]] [[def-se-hum-map]]

[F2] $W(t)$ is a strongly continuous unitary group on each scale level and preserves the pivot pairing: $\langle W(t)f,W(t)g\rangle_{s,\sigma}=\langle f,g\rangle_{s,\sigma}$. The real cutoff acts boundedly on both relevant levels and is symmetric for the pivot pairing: $\langle\varphi f,g\rangle_{s,\sigma}=\langle f,\varphi g\rangle_{s,\sigma}$. [[prop-se-scale-flow]] [[prop-se-cutoff-multipliers]] [[def-se-control-cutoffs]]

[F3] For continuous $h:[0,T]\to H_D^s$, the backward mild solution with $z(T)=0$ satisfies $z(t)=i\int_t^T W(t-r)\varphi h(r)\,dr$ as a Bochner integral. Bounded linear functionals commute with this integral. [[prop-se-forced-linear-wellposedness]] [[math:thm-bounded-linear-maps-commute-with-bochner-integration]]

[F4] Under the stated geometry and Choice, observability gives $\|x\|_{H_D^\sigma}^2\le C\int_0^T\|\varphi W(t)x\|_{H_D^\sigma}^2dt$ for every $x\in H_D^\sigma$. A bounded Hilbert-space observation with a positive lower bound has an invertible Gramian. [[prop-se-3-5]] [[lem-se-observation-gramian-right-inverse]] [[math:def-axiom-of-choice]]

[F5] The notation $L^2(0,T;X)$ means the almost-everywhere classes of strongly measurable maps on the Lebesgue interval with norm $(\int_0^T\|u(t)\|_X^2\,dt)^{1/2}$, with pointwise vector operations. Strong measurability uses finite-range measurable simple approximants. This construction is a normed space for real or complex Banach $X$. [[def-se-foundation-time-function-spaces]]

[F6] Restricting the scalars of a complex normed space to the reals preserves its set, norm and metric. For a real Banach space $X$ and $0<T<\infty$, the Bochner space $L^2(0,T;X)$ is complete under Countable Choice. The assumed Axiom of Choice supplies Countable Choice for this completeness theorem and the Gramian lemma. [[math:lem-complex-norm-realification-is-a-real-norm]] [[math:thm-pe12-bochner-lp-completeness]] [[math:thm-choice-implies-dependent-implies-countable-choice]]

[F7] In a complex Hilbert space, Cauchy–Schwarz bounds the modulus of the inner product by the product of the norms. Scalar Hölder with exponents $(2,2)$ bounds the integral of that norm product. Pointwise limits of measurable real functions are measurable, applied componentwise to complex functions. Complex Lebesgue integration is defined through real and imaginary parts, is linear on $L^1$, and respects almost-everywhere equality. A complex inner-product space complete in its induced norm is a complex Hilbert space. [[math:thm-cauchy-schwarz-in-an-inner-product-space]] [[math:thm-holder-inequality-for-integrals]] [[math:thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]] [[math:def-integrable-real-and-complex-functions-and-their-integrals]] [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]] [[math:thm-the-lebesgue-integral-respects-almost-everywhere-equality]] [[math:def-hilbert-space]]

[F8] Assuming Countable Choice, if $X$ is a real or complex Banach space and $f:[a,b]\to X$ is continuous with $a<b$, then $G(t)=\int_a^t f(r)\,dr$ is differentiable on $(a,b)$ with $G^{\prime}(t)=f(t)$, using real differentiation. The assumed Axiom of Choice supplies Countable Choice. [[math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]] [[math:thm-choice-implies-dependent-implies-countable-choice]]

**Given:** The geometry, Choice, scale, cutoff, time and data in the Statement.

**Goal:** Establish the pairing derivative, HUM identity, coercivity and bounded invertibility.

1.1 The free paths $v,w$ are continuous in $H_D^\sigma$. Boundedness of the cutoff and inverse Riesz map makes $h$ continuous in $H_D^s$. By the backward formula and invariance of the pivot pairing, for every $t\in[0,T]$,
$$\langle z(t),w(t)\rangle_{s,\sigma}=i\int_t^T\langle\varphi h(r),w(r)\rangle_{s,\sigma}\,dr.$$
The scalar integrand $f(r)=\langle\varphi h(r),w(r)\rangle_{s,\sigma}$ is continuous. Apply F8 with $X=\mathbb C$, $a=0$, $b=T$ and this $f$; Countable Choice is available by F6. Writing $i\int_t^T f(r)\,dr=i(G(T)-G(t))$ gives derivative $-if(t)$ on $(0,T)$, which is the stated pairing derivative without requiring a classical boundary trace. [given, F1, F2, F3, F6, F8]

1.2 Put $E=H_D^\sigma$ and let $U=L^2(0,T;E)$ have the precise meaning in F5. The underlying real space $E_{\mathbb R}$ is Banach: $E$ is Hilbert by F1 and restriction of scalars preserves its complete norm metric by F6. Strong measurability into $E$ and into $E_{\mathbb R}$ is the same condition, since the finite-range simple functions, their measurability, and norm convergence are unchanged. Thus $L^2(0,T;E_{\mathbb R})$ and $U$ have exactly the same classes and norm metric. Apply the real Bochner completeness theorem with $X=E_{\mathbb R}$, $p=2$ and the given finite $T>0$. Countable Choice is available by F6, so $U$ is complete. Its complex vector operations and norm are those supplied by F5; no separability hypothesis on $E$ is required. [given, F1, F5, F6]

2.1 For $u,v\in U$, define $(u,v)_U=\int_0^T(u(t),v(t))_E\,dt$. Choose simple approximants for $u$ and $v$; their scalar inner products are measurable simple functions. Cauchy–Schwarz gives $|(a,b)_E-(u,v)_E|\le\|a-u\|_E\|b\|_E+\|u\|_E\|b-v\|_E$, so the inner products of the approximants converge almost everywhere to $(u(t),v(t))_E$. After setting representatives to zero on the exceptional null sets, componentwise measurable limits give a measurable scalar integrand. Pointwise Cauchy–Schwarz and scalar Hölder give $\int_0^T|(u(t),v(t))_E|\,dt\le\|u\|_U\|v\|_U<\infty$. Almost-everywhere invariance of the integral makes the pairing independent of representatives. Linearity of the complex integral gives linearity in the first variable and conjugate-linearity in the second; the componentwise definition also gives $\int\overline f=\overline{\int f}$, so conjugate symmetry is inherited from $E$. Finally $(u,u)_U=\int_0^T\|u(t)\|_E^2\,dt=\|u\|_U^2$, which is positive definite on the quotient by F5. Hence this is a complex inner product with the stated norm. Completeness from step 1.2 makes $U$ a complex Hilbert space. [F1, F5, F7, step 1.2]

2.2 At $t=0$, substitute $h=-i\Lambda_s^{-1}(\varphi v)$ into the integral in step 1.1. Since the pairing is linear in its first argument, $i(-i)=1$. Cutoff symmetry and the Riesz identity give $i\langle\varphi h,w\rangle_{s,\sigma}=(\varphi v,\varphi w)_{H_D^\sigma}$. As $z(0)=Sv_0$, integration proves the displayed bilinear HUM identity. Setting $w_0=v_0$ and applying observability gives the stated coercive estimate. [F1, F2, F4, step 1.1]

3.1 Define the observation $O:E\to U$ by $(Ox)(t)=\varphi W(t)x$. This path is continuous in $E$. Its step functions sampling the left endpoints of equal time subdivisions converge in norm at each interior time, so it is strongly measurable in the sense of F5. Unitarity and cutoff boundedness give $\|Ox\|_U\le\sqrt T\,\|\varphi\|\|x\|_E$, and the map is complex-linear. Observability gives $\|Ox\|_U\ge C^{-1/2}\|x\|_E$. Since both $E$ and $U$ are complex Hilbert spaces, the Gramian lemma now applies and makes $Q=O^*O$ a bounded isomorphism of $E$. [F1, F2, F4, F5, step 2.1]

4.1 The Hilbert adjoint identity gives $(Qv_0,w_0)_E=(Ov_0,Ow_0)_U=\int_0^T(\varphi v(t),\varphi w(t))_E\,dt$, using the integrated inner product constructed in step 2.1. Comparing with step 2.2 and the Riesz identity yields $Sv_0=\Lambda_s^{-1}Qv_0$: both sides have the same pivot pairing with every $w_0$, and the pairing is nondegenerate. Both factors are bounded isomorphisms, so $S$ is a bounded complex-linear isomorphism with inverse $Q^{-1}\Lambda_s$. [F1, F4, step 2.1, step 3.1, step 2.2] ∎

## Source notes

The original article is cited for attribution of the pairing calculation and HUM argument on PDF pages 12–13. The proof above uses the stated scale, Duhamel, observability and Gramian suppliers. The complex Bochner Hilbert structure is constructed locally in steps 1.2–2.1 from the existing time-space definition and the independently supplied real Bochner completeness and scalar integration results; it is not imported from the article.
