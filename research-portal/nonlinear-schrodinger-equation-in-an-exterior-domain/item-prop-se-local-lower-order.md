---
title: Local observation has a lower initial regularity cost
status: published
research_item: prop-se-local-lower-order
dependency_level: 9
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 9: ` (3.10) and definition of θ `; PDF p. 10: ` positive-index interpolation argument `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-2-2-homogeneous](item-prop-se-2-2-homogeneous)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, $\Theta\subset\mathbb R^n$ is nonempty and compact with smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and $\Theta$ is non-trapping. Let $\Delta_D$ be the Dirichlet Laplacian, $A=I-\Delta_D$, and $H_D^s(\Omega)$ the completed spectral scale with norm $\|A^{s/2}u\|_{L^2(\Omega)}$. Write $W(t)=e^{it\Delta_D}$ and let $\chi$ be the smooth compactly supported cutoff in the control-cutoff construction. Non-trapping means that each admissible generalized reflected ray, including glancing behavior, leaves each compact set in finite forward time.

For $0<\tau<2$, put $\theta=0$ when $0<\tau<1/2$, $\theta=\tau-1/2$ when $1/2\le\tau\le3/2$, and $\theta=2\tau-2$ when $3/2<\tau<2$. Then $0\le\theta<\tau$. For every $T>0$ there is $C>0$, depending on the fixed geometry, cutoff, $T$ and $\tau$ but not on $v_0$, such that every $v_0\in H_D^\theta(\Omega)$ satisfies

$$\int_0^T\|\chi W(t)v_0\|_{H_D^\tau(\Omega)}^2\,dt\le C\|v_0\|_{H_D^\theta(\Omega)}^2.$$

For $3/2<\tau<2$, the interpolation parameter is $a=2\tau-3\in(0,1)$, and the relevant complex interpolation identities are $[H_D^1,H_D^2]_a=H_D^{2\tau-2}$ and $[H_D^{3/2},H_D^2]_a=H_D^\tau$.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-control-cutoffs](item-def-se-control-cutoffs)

[def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[prop-se-scale-flow](item-prop-se-scale-flow)

[lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The geometry, generalized-ray non-trapping convention and compact smooth cutoff are as stated in [def-se-geometry](item-def-se-geometry), [def-se-nontrapping](item-def-se-nontrapping) and [def-se-control-cutoffs](item-def-se-control-cutoffs).

[F2] Under Choice, $A$ is self-adjoint and $A\ge I$; the spectral scale is the completion of $D(A^\infty)$ in the displayed norm, with the usual domain identification at nonnegative indices. The spectral calculus gives the norm formula and spectral support in $[1,\infty)$. [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] Under these hypotheses, homogeneous local smoothing gives $\|\chi W(\cdot)v_0\|_{L^2(0,T;H_D^{s+1/2})}\le C_s\|v_0\|_{H_D^s}$ for $0\le s\le1$. The time-space norm is the Bochner $L^2$ norm, namely the square root of the integral of the squared spatial norm. [prop-se-2-2-homogeneous](item-prop-se-2-2-homogeneous) [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[F4] Multiplication by $\chi$ is bounded on $H_D^2$, and $W(t)$ is a strongly continuous unitary group on $H_D^2$. [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers) [prop-se-scale-flow](item-prop-se-scale-flow)

[F5] The complex interpolation convention uses bounded continuous sum-valued functions on the closed strip, holomorphic inside, with endpoint-continuous boundary values vanishing at imaginary infinity, and the infimum of the maximum endpoint supremum norm. Under Choice, interpolation of the positive spectral scale is exact, and a consistent linear operator bounded at two scale endpoints is bounded at interpolated endpoints. The same operator bound applies to $L^2$-in-time spectral-scale targets. [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

[F1] The geometry, generalized-ray non-trapping convention and compact smooth cutoff are as stated in [def-se-geometry](item-def-se-geometry), [def-se-nontrapping](item-def-se-nontrapping) and [def-se-control-cutoffs](item-def-se-control-cutoffs).

[F2] Under Choice, $A$ is self-adjoint and $A\ge I$; the spectral scale is the completion of $D(A^\infty)$ in the displayed norm, with the usual domain identification at nonnegative indices. The spectral calculus gives the norm formula and spectral support in $[1,\infty)$. [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] Under these hypotheses, homogeneous local smoothing gives $\|\chi W(\cdot)v_0\|_{L^2(0,T;H_D^{s+1/2})}\le C_s\|v_0\|_{H_D^s}$ for $0\le s\le1$. The time-space norm is the Bochner $L^2$ norm, namely the square root of the integral of the squared spatial norm. [prop-se-2-2-homogeneous](item-prop-se-2-2-homogeneous) [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[F4] Multiplication by $\chi$ is bounded on $H_D^2$, and $W(t)$ is a strongly continuous unitary group on $H_D^2$. [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers) [prop-se-scale-flow](item-prop-se-scale-flow)

[F5] The complex interpolation convention uses bounded continuous sum-valued functions on the closed strip, holomorphic inside, with endpoint-continuous boundary values vanishing at imaginary infinity, and the infimum of the maximum endpoint supremum norm. Under Choice, interpolation of the positive spectral scale is exact, and a consistent linear operator bounded at two scale endpoints is bounded at interpolated endpoints. The same operator bound applies to $L^2$-in-time spectral-scale targets. [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)



**Given:** The geometry, Choice assumption, $T>0$, $0<\tau<2$, the cutoff, scale and initial datum in the statement.

**Goal:** Prove the lower-order estimate and the displayed interpolation identities.

1.1 Since the spectral measure of $A$ is supported in $[1,\infty)$, the spectral norm formula gives $\|u\|_{H_D^r}\le\|u\|_{H_D^q}$ for $0\le r\le q$ and $u\in H_D^q$. If $0<\tau<1/2$, apply this with $r=\tau$, $q=1/2$ to the output of smoothing with $s=0$. If $1/2\le\tau\le3/2$, apply smoothing with $s=\tau-1/2\in[0,1]$. These two cases give the required estimate after squaring, with $\theta$ as defined. [F1, F2, F3, given]

1.2 For the remaining range, define the consistent linear observation operator $Bv_0:t\mapsto\chi W(t)v_0$. Smoothing at $s=1$ bounds $B:H_D^1\to L^2(0,T;H_D^{3/2})$. The multiplier bound and unitarity give $\|Bv_0\|_{L^2(0,T;H_D^2)}\le T^{1/2}M\|v_0\|_{H_D^2}$, where $M$ is the $H_D^2$ multiplier norm. Strong continuity ensures that this endpoint path is Bochner measurable. Both endpoint maps agree on $H_D^2\subset H_D^1$, so they define one consistent operator on the compatible sum. [F2, F3, F4]

2.1 Set $a=2\tau-3\in(0,1)$. The scale interpolation identities give $[H_D^1,H_D^2]_a=H_D^{1+a}=H_D^{2\tau-2}$ and $[H_D^{3/2},H_D^2]_a=H_D^{3/2+a/2}=H_D^\tau$. Interpolating the endpoint bounds of step 1.2, using the time-target form of the operator theorem, therefore bounds $B:H_D^{2\tau-2}\to L^2(0,T;H_D^\tau)$. Squaring gives the asserted integral estimate for this range. [F3, F5, step 1.2]

3.1 In the first range $\theta=0<\tau$; in the middle range $\theta=\tau-1/2\ge0$ and $\theta<\tau$; in the final range $\theta=2\tau-2>0$ and $\theta<\tau$ because $\tau<2$. Thus the estimates in steps 1.1 and 2.1 cover every stated order and complete the proof. [given, step 1.1, step 2.1] ∎

## Source notes

The original article is cited for attribution of (3.10), its piecewise index and the interpolation calculation on PDF pages 9–10. The proof above uses the stated mathematical suppliers; the article is not used as a proof premise.
