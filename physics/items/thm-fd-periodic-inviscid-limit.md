---
id: thm-fd-periodic-inviscid-limit
kind: theorem
title: "Controlled periodic smooth inviscid limit"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - thm-fd-periodic-smooth-stability
  - def-fd-periodic-fourier-sobolev-spaces
  - def-countable-choice
dependency_roles:
  thm-fd-periodic-smooth-stability: mathematical-premise
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §2.1.5"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
    - title: "David Tong, Fluid Mechanics, Chapter 2, §3.1.2"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, let $s\ge4$ be an integer, and let $u_0:Q_d\to\mathbb R^d$ be smooth, real, and divergence-free, where $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ has normalized Lebesgue measure and divergence-free means $\sum_{j=1}^d\partial_j(u_0)_j=0$. The local incompressible theorem supplies, on a common interval $[0,T]$ independent of $0\le\nu\le1$, smooth solutions $u^\nu$ of the periodic Navier–Stokes equation and $v=u^0$ of periodic Euler with the same initial data. For every $t\in[0,T]$,
$$\|u^\nu(t)-v(t)\|_{L^2}\le\nu\int_0^t\exp\!\left(\int_s^t\|\nabla v(\tau)\|_{L^\infty}\,d\tau\right)\|\Delta v(s)\|_{L^2}\,ds.$$
Consequently the $L^2$ error is $O(\nu)$ uniformly on $[0,T]$ as $\nu\downarrow0$. For each integer $m\ge s$, the same local construction supplies a uniform $H^m$ bound for this family, independent of $\nu$; therefore the $H^{s-1}$ error is $O(\nu^{1/s})$. The result is confined to a fixed periodic domain and this common local smooth interval; it asserts no wall inviscid limit or boundary-layer estimate.

## Statement references

[[thm-fd-periodic-smooth-stability]]

[Kuksin and Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §2.1.5](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

[Tong, Fluid Mechanics, Chapter 2, §3.1.2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $d,s,u_0$ as in the Statement, and the common family of smooth solutions on $[0,T]$.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[thm-fd-periodic-smooth-stability]]: for two smooth periodic incompressible solutions with viscosities $\nu_1,\nu_2\ge0$, the $L^2$ difference is bounded by the initial difference and the residual $(\nu_1-\nu_2)\Delta u^{\nu_2}$, with exponential factor determined by $\|\nabla u^{\nu_2}\|_\infty$. The local existence interval and every fixed-order Sobolev bound are uniform in viscosity for fixed smooth data.

[F2] [[def-fd-periodic-fourier-sobolev-spaces]]: $\|w\|_{H^r}^2=\sum_{k\in\mathbb Z^d}(1+|k|^2)^r|\widehat w(k)|^2$ on the normalized torus, componentwise.

## Proof

1.1 Apply [F1] with $\nu_1=\nu$, $\nu_2=0$, $u^{\nu_1}=u^\nu$, and $u^{\nu_2}=v$. The initial difference is zero and the residual norm is $\nu\|\Delta v(s)\|_2$, so [F1] gives the displayed estimate. [given, A1, F1]

2.1 Smoothness of $v$ on the compact cylinder implies $L_*=\sup_{0\le t\le T}\|\nabla v(t)\|_\infty<\infty$ and $D_*=\sup_{0\le t\le T}\|\Delta v(t)\|_2<\infty$. Hence the integral in step 1.1 is at most $T e^{T L_*}D_*$. Multiplying by $\nu$ proves the uniform $O(\nu)$ estimate. [given, step 1.1, algebra]

3.1 By [F1], there is $M_s<\infty$ bounding $\|u^\nu(t)\|_{H^s}$ for all $0\le\nu\le1$ and $t\in[0,T]$, and also bounding $\|v(t)\|_{H^s}$. Thus $\|u^\nu(t)-v(t)\|_{H^s}\le2M_s$. Weighted Cauchy–Schwarz applied to the coefficient sums in [F2] gives $\|w\|_{H^{s-1}}\le\|w\|_2^{1/s}\|w\|_{H^s}^{(s-1)/s}$: write $w_k^{2(s-1)}|\widehat w|^2=(|\widehat w|^2)^{1/s}(w_k^{2s}|\widehat w|^2)^{(s-1)/s}$ and apply Holder with exponents $s$ and $s/(s-1)$. Apply this to $w=u^\nu-v$ and step 2.1 to obtain $\sup_{t\in[0,T]}\|u^\nu(t)-v(t)\|_{H^{s-1}}\le(2M_s)^{(s-1)/s}(T e^{T L_*}D_*)^{1/s}\nu^{1/s}$. [given, F1, F2, step 2.1, algebra] ∎