---
id: lem-fd-given-smooth-solutions-difference-energy
kind: lemma
title: "Difference energy for given smooth incompressible and symmetric solutions"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - lem-fd-periodic-fourier-embedding-products
  - def-fd-periodic-leray-pressure-maps
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  lem-fd-periodic-fourier-embedding-products: mathematical-premise
  def-fd-periodic-leray-pressure-maps: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)"
      url: "https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf"
      locator: "§§2.1.1–2.1.2, §2.1.5.2, §4.1.1; Fourier, weak derivatives, product estimate and Leray projection."
    - title: "Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)"
      url: "https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/"
      locator: "Periodic pressure/Leray discussion and Sobolev Proposition 35 / Exercise 36."
---

## Statement

Assume Countable Choice. Fix $d\in\{1,2,3\}$ and a finite interval $[0,T]$. (i) If $u,v$ are already given smooth divergence-free solutions of $z_t+P(z\cdot\nabla z)=\nu\Delta z$ on $Q_d$, with the same $\nu\ge0$, then for $w=u-v$,
$$\|w(t)\|_2^2\le\|w(0)\|_2^2\exp\!\left(2\int_0^t\|\nabla v(\tau)\|_\infty d\tau\right).$$
(ii) If $q,r$ are already given smooth solutions of $z_t+\sum_{j=1}^dA_j(z)\partial_jz=0$ with each $A_j:\mathbb R^N\to\mathbb R^{N\times N}$ a fixed linear map into symmetric matrices, then
$$\|q(t)-r(t)\|_2^2\le\|q(0)-r(0)\|_2^2\exp\!\left(C\int_0^t(\|\nabla q\|_\infty+\|\nabla r\|_\infty)d\tau\right).$$
In either case, if $s\ge1$ and both solution families have a common $H^s$ bound $M$ on $[0,T]$, then $\|w(t)\|_{H^{s-1}}\le (2M)^{(s-1)/s}\|w(0)\|_2^{1/s}e^{\Gamma t/(2s)}$, where $\Gamma$ is any uniform rate in the corresponding squared $L^2$ estimate. The torus uses the dimensionless $2\pi$-periodic convention in the Definition; all quantities in these estimates are mathematical and no physical units are assigned to $\nu$. These are conditional estimates for already given smooth solutions and assert no existence theorem.

## Statement references

[Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)](https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf).

[Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)](https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[F1] [[def-countable-choice]]: Countable Choice is the explicit periodic Fourier coefficient assumption.

[F2] [[def-fd-periodic-fourier-sobolev-spaces]]: the periodic $H^s$ norm is the weighted coefficient $\ell^2$ norm.

[F3] [[def-fd-periodic-leray-pressure-maps]]: $P$ is self-adjoint, is a projection, and commutes with derivatives.

[F4] [[lem-fd-periodic-fourier-embedding-products]]: $H^s$ controls $C^1$ when $s>1+d/2$, and periodic Fourier truncations converge in the stated Sobolev norms.

## Proof

**Given:** The fixed $[0,T]$, Countable Choice, and either of the two pairs of smooth solutions in the Statement.

1.1 In case (i), subtract equations and set $w=u-v$ to get $w_t+P(u\cdot\nabla w+w\cdot\nabla v)=\nu\Delta w$. Pair with $w$; [F3] and $Pw=w$ remove $P$, periodic integration and $\operatorname{div}u=0$ give $\int(u\cdot\nabla w)\cdot w=0$, and diffusion contributes $-\nu\|\nabla w\|_2^2$. Thus $(\|w\|_2^2)'\le2\|\nabla v\|_\infty\|w\|_2^2$. [given, F3, algebra]

1.2 In case (ii), linearity of $A_j$ gives $w_t+\sum_jA_j(q)\partial_jw=-\sum_jA_j(w)\partial_jr$, where $w=q-r$. Symmetry implies
$\int w^TA_j(q)\partial_jw=-\frac12\int w^T(\partial_jA_j(q))w$.
The fixed linear maps $A_j$ are bounded in finite dimension, so pairing the equation with $w$ yields $(\|w\|_2^2)'\le C(\|\nabla q\|_\infty+\|\nabla r\|_\infty)\|w\|_2^2$. [given, algebra]

1.3 In either case, multiplying the differential inequality by its integrating factor proves the corresponding $L^2$ estimate. Weighted coefficient Hölder gives
$\sum_kw_k^{2(s-1)}|\widehat w(k)|^2\le(\sum_k|\widehat w(k)|^2)^{1/s}(\sum_kw_k^{2s}|\widehat w(k)|^2)^{(s-1)/s}$.
Taking square roots and using the common bound $\|w(t)\|_{H^s}\le2M$ proves the stated $H^{s-1}$ estimate with its displayed factor and rate $\Gamma/(2s)$; no solution is constructed by this comparison. [given, F1, F2, F4, step 1.1, step 1.2, algebra] ∎
