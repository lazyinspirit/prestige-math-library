---
id: prop-fd-mini-observation-error
kind: proposition
title: "Bounded velocity-observation error for the smooth MINI branch"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-mini-fluid-interface
  - thm-na-mini-be-smooth-velocity-error
  - def-countable-choice
dependency_roles:
  def-fd-mini-fluid-interface: mathematical-premise
  thm-na-mini-be-smooth-velocity-error: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 54: Stokes equations: Stable pairs (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf
      locator: "§54.2, Lemma 54.5 and Remark 54.6, printed pp. 410–413: MINI inf-sup stability and stationary Stokes approximation context; the present observation estimate is derived from the explicit evolutionary supplier."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "§§8.4.2 and 8.6.1, printed pp. 470–471 and 487–488: the MINI pair's Fortin stability and stationary Stokes estimates; not the time-dependent observation inequality."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and a smooth MINI observation interface as specified by the interface definition on this page. In particular, let $D\subset\mathbb R^d$ be bounded, connected, Lipschitz and polygonal or polyhedral with $d\in\{2,3\}$; use a shape-regular conforming affine simplicial mesh, viscosity $\nu>0$, $f\in L^2(0,T;L^2(D)^d)$, the mass-projected initial value, and any actual mixed backward Euler MINI solution. Suppose the exact no-slip solution has $u\in W^{1,\infty}(0,T;H^2(D)^d\cap V_\sigma)$ and $p\in W^{1,\infty}(0,T;H^1(D)\cap L^2_0(D))$. Set
$$M=1+\|u\|_{W^{1,\infty}H^2}+\|p\|_{W^{1,\infty}H^1},\qquad H=hM+\tau_{\max}M^2,\qquad M_u=\|u\|_{L^\infty(0,T;V)},\qquad \Lambda=1+C_D\nu^{-3}M_u^4.$$
Assume $\tau_{\max}\Lambda\le\tfrac12$. Let $M_\infty$, $M_E$ and $C_*$ have exactly the values in the smooth MINI velocity-error estimate, namely
$$M_\infty=\bigl(\|u(0)\|_2^2+C_P(D)^2\nu^{-1}\|f\|_{L^2L^2}^2\bigr)^{1/2},\qquad M_E=\nu^{-1/2}\|u(0)\|_2+C_P(D)\nu^{-1}\|f\|_{L^2L^2},$$
$$C_*=C_{D,\mathrm{shape}}(1+\nu)^2(1+\nu^{-4})(1+T)^2(1+M_\infty+M_E+M)^4\exp(2T\Lambda),$$
where $C_D$ depends only on the domain, dimension and trilinear-form constant, and $C_{D,\mathrm{shape}}$ is independent of $h$, the time steps and $\nu$. No mesh/time coupling is imposed beyond the stated time-step restriction. For any sensors $\ell_n\in V^*$, define $\|\ell\|_{\ell^2_\tau(V^*)}=(\sum_{n=1}^N\tau_n\|\ell_n\|_{V^*}^2)^{1/2}$. Then the endpoint-sampled observations of the interface satisfy
$$\left|\mathcal O_h(\ell;u_h)-\mathcal O(\ell;u)\right|\le \nu^{-1/2}C_*H\,\|\ell\|_{\ell^2_\tau(V^*)}.$$
This is a conditional bound for bounded linear velocity sensors on the smooth branch; it makes no Reynolds-uniform claim.

## Statement references

[[def-fd-mini-fluid-interface|smooth MINI observation interface]]

[[thm-na-mini-be-smooth-velocity-error|smooth-branch MINI velocity error theorem]]

[Guermond, Chapter 54, §54.2](https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf)

[Boffi, Brezzi, and Fortin, §§8.4.2 and 8.6.1](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the smooth MINI interface and its exact and discrete solution data, the time-step restriction, and bounded real-linear sensors $\ell_n\in V^*$.

[A1] Countable Choice means that every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function $f$ with $f(n)\in X_n$. ([[def-countable-choice]])

[F1] The smooth MINI velocity theorem, under the domain, regularity, initialization, mesh and time-step hypotheses in the Statement, gives
$\max_n\|u(t_n)-u_h^n\|_2+\nu^{1/2}(\sum_n\tau_n\|u(t_n)-u_h^n\|_V^2)^{1/2}\le C_*H$. ([[thm-na-mini-be-smooth-velocity-error]])

[F2] The interface defines $\mathcal O(\ell;u)=\sum_n\tau_n\ell_n(u(t_n))$ and $\mathcal O_h(\ell;u_h)=\sum_n\tau_n\ell_n(u_h^n)$ for $\ell_n\in V^*$. ([[def-fd-mini-fluid-interface]])

## Proof

1.1 Put $e_n=u(t_n)-u_h^n\in V$. By [F2],
$\mathcal O_h(\ell;u_h)-\mathcal O(\ell;u)=-\sum_{n=1}^N\tau_n\ell_n(e_n)$. [given, F2, construct]

2.1 The dual norm inequality and weighted Cauchy–Schwarz give
$\left|\sum_{n=1}^N\tau_n\ell_n(e_n)\right|\le\sum_{n=1}^N\tau_n\|\ell_n\|_{V^*}\|e_n\|_V\le\|\ell\|_{\ell^2_\tau(V^*)}(\sum_{n=1}^N\tau_n\|e_n\|_V^2)^{1/2}$. [given, step 1.1, algebra]

3.1 By [F1], $(\sum_n\tau_n\|e_n\|_V^2)^{1/2}\le\nu^{-1/2}C_*H$. Substitution into step 2.1 proves the claimed observation bound. [A1, F1, step 2.1, algebra] ∎
