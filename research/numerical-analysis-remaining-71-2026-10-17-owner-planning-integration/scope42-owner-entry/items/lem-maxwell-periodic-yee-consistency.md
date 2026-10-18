---
id: lem-maxwell-periodic-yee-consistency
kind: lemma
title: Second-order consistency of the homogeneous periodic Yee scheme
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-transient-maxwell-system-with-material-interfaces
  - def-maxwell-discrete-cochain-and-yee-grid
  - alg-maxwell-yee-leapfrog-update
  - lem-maxwell-rectangular-stokes-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 9 §9.3, printed pp. 246–249: 3D Yee staggering and update rows; Chapter 7 §7.4, printed pp. 164–168: central-difference dispersion. The truncation bound below is derived locally."
verification:
  precheck: pass
---

## Statement

Let a periodic rectangular cell be discretized by a uniform Cartesian Yee grid with spacings $h_x,h_y,h_z$, $h=\max_jh_j$, and constant scalar coefficients $\epsilon,\mu>0$. Let $(E,B)$ be a source-free smooth periodic Maxwell solution on $[0,T]$, with the spatial derivatives of $E$ through total order four, $\partial_t^4E$, and $\partial_t^3B$ bounded. Sample $E(t_n)$ by exact oriented edge line integrals $e_*^n$ and $B(t_{n+1/2})$ by exact oriented face fluxes $b_*^{n+1/2}$. Define
$$r_h^n=M_e\frac{e_*^{n+1}-2e_*^n+e_*^{n-1}}{\Delta t^2}+C^TM_bCe_*^n,\qquad s_h^n=b_*^{n+1/2}-b_*^{n-1/2}+\Delta t\,Ce_*^n.$$
With the homogeneous diagonal Hodge weights of [[def-maxwell-discrete-cochain-and-yee-grid]], there is a constant $C_T$ independent of the cell counts such that, whenever $\Delta t\le t_n\le T-\Delta t$,
$$\|r_h^n\|_{M_e^{-1}}\le C_T(h^2+\Delta t^2),\qquad \|s_h^n\|_{M_b}\le C_T\Delta t^3.$$
Here $\|r\|_{M_e^{-1}}^2=r^TM_e^{-1}r$. This is a smooth homogeneous periodic consistency result; it asserts no Taylor estimate across coefficient jumps or a PEC boundary closure.

## Facts & Assumptions


**Given:** A homogeneous periodic Cartesian grid, exact edge and face samples of a smooth source-free Maxwell solution, and the lossless Yee rows.

[F1] The periodic Cartesian masses use edge weights $\epsilon h_yh_z/h_x$ and face weights $\mu^{-1}h_x/(h_yh_z)$, cyclically. ([[def-maxwell-discrete-cochain-and-yee-grid]])

[F2] The homogeneous lossless Yee rows use the incidence curl at integer electric and half-integer magnetic times. ([[alg-maxwell-yee-leapfrog-update]])

[F3] The continuous equations imply $\epsilon E_{tt}+\mu^{-1}\operatorname{curl}\operatorname{curl}E=0$ and $B_t=-\operatorname{curl}E$. ([[def-transient-maxwell-system-with-material-interfaces]])

[F4] On each axis-parallel rectangular face, exact edge circulation equals the exact curl flux. ([[lem-maxwell-rectangular-stokes-identity]])

## Proof

1.1 Let $u_x=e_x/h_x$ denote the line average of the $x$ component on an $x$-edge; define $u_y,u_z$ cyclically. For values on the corresponding staggered locations, define $\delta_i\delta_j f(r)$ by the four-corner formula $[f(r+\frac{h_i}{2}e_i+\frac{h_j}{2}e_j)-f(r+\frac{h_i}{2}e_i-\frac{h_j}{2}e_j)-f(r-\frac{h_i}{2}e_i+\frac{h_j}{2}e_j)+f(r-\frac{h_i}{2}e_i-\frac{h_j}{2}e_j)]/(h_ih_j)$. Expanding the four signed face incidences around an $x$-edge and inserting [F1] gives the normalized electric operator $h_x^{-1}(M_e^{-1}C^TM_bCe)_x=c^2\bigl(-\delta_y^2u_x-\delta_z^2u_x+\delta_x\delta_yu_y+\delta_x\delta_zu_z\bigr),\qquad c^2=(\epsilon\mu)^{-1},$ where $\delta_j^2f=(f(x+h_je_j)-2f(x)+f(x-h_je_j))/h_j^2$ and $\delta_i\delta_j$ is the corresponding centered staggered mixed difference. The $y$ and $z$ components follow by the same cyclic incidence expansion. [F1, given, algebra]

1.2 For every face, the exact circulation cochain $Ce_*^n$ equals the face flux of $\operatorname{curl}E(t_n)$ by [F4]. Taylor’s formula in time around $t_n$ gives $\int_{t_n-\Delta t/2}^{t_n+\Delta t/2}\!\!\!\int_F\operatorname{curl}E(t)\cdot n\,dS\,dt=\Delta t\int_F\operatorname{curl}E(t_n)\cdot n\,dS+O(|F|\Delta t^3\|\partial_t^2\operatorname{curl}E\|_\infty).$ Faraday’s equation in [F3] identifies the left side with $-\int_F(B(t_n+\Delta t/2)-B(t_n-\Delta t/2))\cdot n\,dS$. Thus each face entry of $s_h^n$ is bounded by $C|F|\Delta t^3$ times the derivative bound. The face weights in [F1] turn the sum of their squared entries into at most $C_T\Delta t^6$ times the fixed box volume, so $\|s_h^n\|_{M_b}\le C_T\Delta t^3\le C_T'\Delta t^2$ on the stated time range. [F1, F2, F3, F4, algebra]

2.1 Taylor’s formula with integral remainder gives $\delta_j^2f=\partial_j^2f+O(h_j^2\|\partial_j^4f\|_\infty)$ and $\delta_i\delta_jf=\partial_i\partial_jf+O((h_i^2+h_j^2)\|D^4f\|_\infty)$. Averaging along the edge changes the midpoint value of each needed derivative by at most $O(h^2)$ by the same symmetric Taylor estimate. Therefore the stencil in step 1.1 differs from $\operatorname{curl}\operatorname{curl}E$ by at most $C h^2$ pointwise. The centered time second difference of the exact edge integrals differs from the edge integral of $E_{tt}$ by at most $C\Delta t^2$ times the stated fourth time-derivative bound. The continuous equation [F3] cancels the leading terms. For an $x$-edge, the resulting electric covector entry is bounded by $C\epsilon h_yh_z(h^2+\Delta t^2)$, with cyclic area factors for the other orientations. Summing squared entries with the reciprocal edge masses in [F1] contributes a factor proportional to $h_xh_yh_z$ per edge, so $\|r_h^n\|_{M_e^{-1}}\le C_T(h^2+\Delta t^2)$, since the dual cell volumes sum to the fixed box volume. [F1, F3, step 1.1, algebra]

3.1 The electric bound from step 2.1 and the separate face bound from step 1.2 give the two asserted residual estimates. [step 2.1, step 1.2, algebra] ∎
