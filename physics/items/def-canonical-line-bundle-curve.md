---
id: def-canonical-line-bundle-curve
kind: definition
title: "Canonical bundle and canonical divisors"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-dependent-choice
  - def-integral-scheme
  - def-divisor-smooth-proper-curve
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-linear-equivalence-cartier-divisors
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-normal-noetherian-ring
  - def-order-codimension-one-rational-function
  - def-principal-cartier-divisor
  - def-principal-weil-divisor-and-class-group
  - def-rational-section-line-bundle
  - def-sheaf-on-topological-space
  - def-sheaf-relative-differentials
  - def-sheaf-total-quotient-rings
  - def-weil-divisor-normal-noetherian-scheme
  - lem-field-is-noetherian
  - thm-cartier-to-weil-divisor-normal-scheme
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-differentials-smooth-locally-free
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14, 2019), Ch. 7"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
verification:
  audited: 2026-10-02
---

## Definition

Let $k$ be a field and let $C$ be a smooth curve over $k$
([[def-algebraic-curve-over-field]]). The **canonical sheaf** of $C$ is the
sheaf of relative Kähler differentials
$$\omega_C:=\Omega^1_{C/k}$$
([[def-sheaf-relative-differentials]]). This sheaf is the raw canonical-sheaf
object without any choice assumption. When AC is assumed, the smooth
differentials theorem gives that $\omega_C$ is locally free of rank one, so it
is an invertible $\mathcal O_C$-module, also called the **canonical bundle**
([[def-axiom-of-choice]], [[thm-differentials-smooth-locally-free]],
[[def-invertible-sheaf]]).

Assume AC for the divisor and frame descriptions below. Let $\omega$ be a
nonzero rational differential, meaning a nonzero rational section of
$\omega_C$ ([[def-rational-section-line-bundle]]). For a closed point $x$,
the local ring $\mathcal O_{C,x}$ is a discrete valuation ring
([[thm-local-ring-smooth-curve-dvr]]). Choose any local frame $\eta_x$ of
$\omega_C$ near $x$ and write $\omega=g_x\eta_x$, where
$g_x\in k(C)^\times$. Define
$$\operatorname{ord}_x(\omega):=\operatorname{ord}_x(g_x),$$
the normalized DVR order of the coefficient
([[def-order-codimension-one-rational-function]]). If another frame is
$\eta'_x=u\eta_x$, then $u\in\mathcal O_{C,x}^\times$ and the new coefficient
is $u^{-1}g_x$, so its order is unchanged. This frame definition also applies
when $\kappa(x)/k$ is inseparable; it does not assume that the differential of
a uniformizer is a frame.

The **divisor of $\omega$** is the Weil divisor
$$\operatorname{div}(\omega)=\sum_{x\in C}\operatorname{ord}_x(\omega)[x].$$
Here the displayed sum has finite support. To see this, the coefficients
$g_x$ are the local equations of the Cartier divisor
$D_\omega=\operatorname{div}_C(\omega)$ supplied by the rational-section
theorem ([[thm-line-bundle-rational-section-cartier-divisor]],
[[def-cartier-divisor]]). Under AC the closed-point local rings are DVRs, the
generic local ring is a field, and $C$ is a normal Noetherian scheme: its
affine rings are Noetherian because $C$ is finite type over the field, and
these local rings are integrally closed
([[def-algebraic-curve-over-field]], [[thm-local-ring-smooth-curve-dvr]],
[[lem-field-is-noetherian]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[def-locally-noetherian-and-noetherian-scheme]],
[[def-normal-noetherian-ring]]). AC implies DC by
[[thm-choice-implies-dependent-implies-countable-choice]]. Thus
[[thm-cartier-to-weil-divisor-normal-scheme]] sends $D_\omega$ to a locally
finite Weil divisor; at $x$ its coefficient is the order of its local
equation $g_x$, namely $\operatorname{ord}_x(\omega)$. Since a finite-type
scheme is quasi-compact, a finite subcover of neighborhoods meeting only
finitely many points of this support shows that the support is finite. The
resulting Weil divisor is the sum displayed above
([[def-weil-divisor-normal-noetherian-scheme]]). For a smooth proper curve it
is also the divisor under the finite-sum convention of
[[def-divisor-smooth-proper-curve]].

The divisor is effective exactly when $\omega$ is a regular differential.
Indeed, at each closed point, nonnegative order is equivalent to
$g_x\in\mathcal O_{C,x}$. Such stalk membership gives a regular coefficient
on a neighborhood of each point; these local sections agree as rational
sections on overlaps and glue. Conversely a regular differential has regular
local coefficients and hence nonnegative orders.

When $C$ is smooth proper and geometrically integral, a **canonical divisor**
$K_C$ is $\operatorname{div}(\omega)$ for any nonzero rational differential
$\omega$. For two such differentials there is a unique
$f\in k(C)^\times$ with $\omega'=f\omega$, since the generic fibre of the
invertible sheaf $\omega_C$ is one-dimensional. Frame orders give
$$\operatorname{div}(\omega')=\operatorname{div}(\omega)+\operatorname{div}_W(f),$$
where $\operatorname{div}_W(f)$ is the principal Weil divisor
([[def-principal-weil-divisor-and-class-group]]). Thus all canonical divisors
are linearly equivalent as Weil divisors. The Cartier-to-Weil comparison on
this curve identifies each canonical divisor with its Cartier divisor
$D_\omega$ and identifies principal Weil divisors with principal Cartier
divisors, so the same relation is linear equivalence of Cartier divisors
([[thm-cartier-weil-divisors-curves-agree]],
[[def-linear-equivalence-cartier-divisors]],
[[def-principal-cartier-divisor]]). Under this comparison,
$\mathcal O_C(K_C)$ means the invertible sheaf of the corresponding Cartier
divisor. The rational-section theorem gives
$$\omega_C\cong\mathcal O_C(D_\omega)=\mathcal O_C(K_C)$$
for every canonical divisor ([[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]]).
