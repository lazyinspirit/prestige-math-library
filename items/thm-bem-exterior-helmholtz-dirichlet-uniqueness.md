---
id: thm-bem-exterior-helmholtz-dirichlet-uniqueness
kind: theorem
title: Outgoing exterior Dirichlet uniqueness for the smooth combined-field geometry
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    def-bem-smooth-helmholtz-combined-field-operator,
    lem-bem-smooth-trace-and-helmholtz-layer-extension,
    lem-pe18-spherical-harmonic-structure-and-density,
    lem-pe18-spherical-hankel-radial-identities,
    lem-pe18-outgoing-spherical-mode-expansion,
    thm-weyl-lemma-for-the-laplacian,
    cor-unique-continuation-for-harmonic-functions,
    def-axiom-of-choice,
    def-countable-choice
  ]
justified_by: []
proof_strategy: direct
axiom_use: "The Axiom of Choice is assumed; it supplies Countable Choice for
  Fourier, variational and harmonic regularity suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, Chapter II
        §1.6 and Chapter V §§1.1–1.2"
      url: https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $\Omega^-,\Gamma,\Omega^+$ have the $C^2$ geometry of [[def-bem-smooth-helmholtz-combined-field-operator]]. If $u\in H^1(\Omega^+\cap B_R)$ for every ball containing $\overline{\Omega^-}$ solves $(\Delta+k^2)u=0$ weakly for a real $k>0$, has zero trace on $\Gamma$, and satisfies
$$\lim_{r\to\infty}\sup_{\omega\in\mathbb S^2}|r(\partial_r-ik)u(r\omega)|=0,$$
then $u=0$ on $\Omega^+$. The radiation condition refers to the smooth representative away from the boundary.

## Facts & Assumptions

**Given:** The Axiom of Choice, $k>0$ and $u$ with the hypotheses above.

[F1] Bounded $C^2$ traces and compactly supported whole-space trace lifts are supplied by [[lem-bem-smooth-trace-and-helmholtz-layer-extension]].

[F2] On an exterior of any enclosing sphere, every classical outgoing solution has degree projections $u_\ell(r)=c_\ell h_\ell^{(1)}(kr)$ with fixed $c_\ell\in\mathcal H_\ell$ ([[lem-pe18-outgoing-spherical-mode-expansion]]). The degree spaces are orthogonal and their ordered projections converge in $L^2$ for continuous sphere data ([[lem-pe18-spherical-harmonic-structure-and-density]]).

[F3] For each degree $r^2\operatorname{Im}(\overline{h_\ell^{(1)}(kr)}\partial_rh_\ell^{(1)}(kr))=1/k$ ([[lem-pe18-spherical-hankel-radial-identities]]).

[F4] Distributionally harmonic functions have smooth harmonic representatives, and a harmonic function vanishing on a nonempty open subset of a connected open set vanishes everywhere, under Countable Choice ([[thm-weyl-lemma-for-the-laplacian]], [[cor-unique-continuation-for-harmonic-functions]], [[def-countable-choice]], [[def-axiom-of-choice]]).

## Proof

1.1 Set $w(x,t)=e^{kt}u(x)$ on the connected open set $\Omega^+\times\mathbb R\subset\mathbb R^4$. Distributional differentiation gives $\Delta_{x,t}w=e^{kt}(\Delta_xu+k^2u)=0$. By [F4] it has a smooth harmonic representative. This implies $u$ has a smooth Helmholtz representative: the distributional identity $\partial_tw=kw$ is also a classical identity for this representative, so $w(x,t)=e^{kt}w(x,0)$, and comparison as distributions gives $u(x)=w(x,0)$. [F4, given, algebra, construct]

2.1 Choose $a$ so large that $\overline{\Omega^-}\subset B_a$, and fix $r>a$. The annular domain $B_r\setminus\overline{\Omega^-}$ has inner boundary $\Gamma$ and outer sphere. We derive the Green formula for this arbitrary weak solution from the trace/lift part of [F1]. A zero-trace $H^1$ function supported in a boundary chart is approximable by smooth functions supported on its own side: flatten the chart and use $v(z,t)=\int_0^t\partial_sv(z,s)ds$, which gives $\epsilon^{-2}\int_{0<t<2\epsilon}|v|^2\le C\int_{0<t<2\epsilon}|\partial_tv|^2\to0$. A cutoff removing $t<\epsilon$ therefore converges in $H^1$, and subsequent interior mollification, followed by the finite chart partition, proves the claim. Hence the weak PDE applies to every $H^1$ test with zero trace on both boundaries. For a compact inner trace lift $Lg$, define $\langle q^+,g\rangle=-\int(\nabla u\cdot\overline{\nabla Lg}-k^2u\overline{Lg})$. The preceding approximation makes this independent of the lift, and [F1] bounds it in $H^{-1/2}$. For any test subtract its inner trace lift and an outer-sphere lift supported away from $\Gamma$; the remaining test has zero trace on both boundaries. The weak PDE kills that remainder, and classical integration by parts near the outer sphere is valid by step 1.1. Testing the resulting identity with $u$ gives $\int_{B_r\setminus\overline{\Omega^-}}(|\nabla u|^2-k^2|u|^2)dx=\int_{|x|=r}\partial_ru\bar u\,dS-\langle q^+,\gamma^+u\rangle.$ The last term is zero by the zero trace. The left side is real, hence $J(r)=r^2\operatorname{Im}\int_{\mathbb S^2}\partial_ru(r\omega)\overline{u(r\omega)}d\omega=0$. Only the original obstacle boundary has zero trace; no zero trace is assumed on the enclosing sphere. [F1, step 1.1, given, algebra]

3.1 At this fixed $r$, both $u(r,\cdot)$ and $\partial_ru(r,\cdot)$ are smooth, so their ordered harmonic projections converge in $L^2$ by [F2]. Cauchy–Schwarz passes the inner product to the limit of finite orthogonal sums. By [F2]–[F3], this gives $J(r)=\lim_{N\to\infty}\sum_{\ell=0}^N\|c_\ell\|_2^2/k.$ Every summand is nonnegative and step 2.1 gives zero, so all $c_\ell=0$. Completeness in [F2] now makes $u(r,\cdot)=0$ in $L^2$, hence pointwise by smoothness. This holds for every $r>a$, so $u=0$ on $|x|>a$. No degree sum was interchanged with the radiation limit at infinity. [F2, F3, step 1.1, step 2.1, algebra]

4.1 The harmonic lift $w$ of step 1.1 vanishes on $(\mathbb R^3\setminus\overline{B_a})\times\mathbb R$, a nonempty open subset of $\Omega^+\times\mathbb R$. The latter is connected because $\Omega^+$ is connected by hypothesis. [F4] gives $w=0$ everywhere there, hence $u=w(\cdot,0)=0$ on $\Omega^+$. [F4, step 1.1, step 3.1, given, algebra] ∎
