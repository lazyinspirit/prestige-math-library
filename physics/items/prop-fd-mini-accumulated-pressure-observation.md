---
id: prop-fd-mini-accumulated-pressure-observation
kind: proposition
title: "Accumulated pressure-observation error for the smooth MINI branch"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-mini-fluid-interface
  - thm-na-mini-be-smooth-integrated-pressure-error
  - thm-na-mini-be-smooth-velocity-error
  - def-countable-choice
dependency_roles:
  def-fd-mini-fluid-interface: mathematical-premise
  thm-na-mini-be-smooth-integrated-pressure-error: mathematical-premise
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
      locator: "§54.2, Lemma 54.5 and Remark 54.6, printed pp. 410–413: MINI inf-sup stability and stationary Stokes approximation context; the pressure-observation bound is derived from the current evolutionary supplier."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "§§8.4.2 and 8.6.1, printed pp. 470–471 and 487–488: MINI pair stability and stationary Stokes approximation; no time-dependent pressure-primitive estimate."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement

Assume Countable Choice and a smooth MINI observation interface as specified by the interface definition on this page. In particular, $D\subset\mathbb R^d$ is bounded, connected, Lipschitz and polygonal or polyhedral with $d\in\{2,3\}$; $T>0$, $\nu>0$, and $f\in L^2(0,T;L^2(D)^d)$; the exact no-slip solution has $u\in W^{1,\infty}(0,T;H^2(D)^d\cap V_\sigma)$ and $p\in W^{1,\infty}(0,T;H^1(D)\cap Q)$; the MINI meshes are shape-regular conforming affine simplices; the initial value is $u_h^0=P_{Z_h}u(0)$; and any actual mixed backward Euler MINI solution is used. No mesh/time relation is imposed. Impose the time-step restriction $\tau_{\max}\Lambda\le\tfrac12$ of the smooth-branch pressure-primitive theorem. Set $M=1+\|u\|_{W^{1,\infty}H^2}+\|p\|_{W^{1,\infty}H^1}$, $H=hM+\tau_{\max}M^2$, $M_u=\|u\|_{L^\infty(0,T;V)}$, $M_E=\nu^{-1/2}\|u(0)\|_2+C_P(D)\nu^{-1}\|f\|_{L^2(0,T;L^2(D)^d)}$, and $\Lambda=1+C_D\nu^{-3}M_u^4$, where $C_D$ depends only on the domain, dimension and trilinear-form constant. Let $C_*$ be exactly the explicit viscosity-dependent constant in the smooth MINI velocity-error theorem. Let $\beta>0$ be the uniform MINI inf-sup lower bound, let $M_b=\sqrt d$, let $C_I$ be a mean-adjusted continuous P1 pressure interpolation constant satisfying $\inf_{q_h\in Q_h}\|q-q_h\|_2\le C_Ih\|q\|_{H^1(D)}$ for $q\in H^1(D)\cap Q$, and choose $C_c$ such that $|c(a;b,v)|\le C_c\|a\|_V\|b\|_V\|v\|_V$. Let $C_P(D)$ satisfy $\|v\|_{L^2(D)}\le C_P(D)\|v\|_V$ for $v\in V$. With
$$K=(1+M_b/\beta)C_IT+\beta^{-1}\bigl(2C_P+[2\nu\sqrt T+C_c(M_E+\sqrt T M_u)]\nu^{-1/2}\bigr)C_*+\beta^{-1}(2\nu T+2C_cT).$$
For every $\xi\in Q$, every $\eta\in C_c^\infty(0,T)$, and every node $0\le m\le N$, the interface observations satisfy
$$\left|\bigl(P(t_m)-P_h^m,\xi\bigr)_{L^2}\right|\le KH\|\xi\|_Q.$$

$$\left|\left(\int_0^T(p(t)-\bar p_h(t))\eta(t)\,dt,\xi\right)_{L^2}\right|\le(K+1)H\|\eta'\|_{L^1(0,T)}\|\xi\|_Q.$$
These are accumulated-pressure and time-tested pressure bounds on the smooth branch. They do not assert an instantaneous pressure-error rate.

## Statement references

[[def-fd-mini-fluid-interface|smooth MINI observation interface]]

[[thm-na-mini-be-smooth-integrated-pressure-error|smooth MINI pressure-primitive error theorem]]

[[thm-na-mini-be-smooth-velocity-error|smooth MINI velocity error theorem]]

[Guermond, Chapter 54, §54.2](https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf)

[Boffi, Brezzi, and Fortin, §§8.4.2 and 8.6.1](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the smooth MINI interface and all its exact and discrete solution data, the constants and time-step condition in the Statement, $\xi\in Q$, and $\eta\in C_c^\infty(0,T)$.

[A1] Countable Choice means that every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function $f$ with $f(n)\in X_n$. ([[def-countable-choice]])

[F1] Under the smooth-branch, mesh, initialization, forcing, and time-step hypotheses, the imported integrated-pressure theorem gives $\max_m\|P(t_m)-P_h^m\|_Q\le KH$. ([[thm-na-mini-be-smooth-integrated-pressure-error]])

[F2] Under the same hypotheses, the imported theorem gives $\left\|\int_0^T(p-\bar p_h)\eta\,dt\right\|_Q\le(K+1)H\|\eta'\|_{L^1(0,T)}$ for every $\eta\in C_c^\infty(0,T)$. ([[thm-na-mini-be-smooth-integrated-pressure-error]])

[F3] The interface defines $P(t)=\int_0^tp(s)\,ds$, $P_h^m=\sum_{n=1}^m\tau_np_h^n$, $\bar p_h(t)=p_h^n$ on $(t_{n-1},t_n]$, and the two scalar pressure observations by pairing with $\xi\in Q$. ([[def-fd-mini-fluid-interface]])

## Proof

1.1 By [F3], the endpoint observation is $(P(t_m)-P_h^m,\xi)_{L^2}$. [given, F3, construct]

1.2 By [F2], the time-tested pressure difference has Q norm at most $(K+1)H\|\eta'\|_{L^1(0,T)}$. [A1, F2, given]

2.1 The Hilbert-space Cauchy–Schwarz inequality and [F1] give
$|(P(t_m)-P_h^m,\xi)_{L^2}|\le\|P(t_m)-P_h^m\|_Q\|\xi\|_Q\le KH\|\xi\|_Q$. [A1, F1, step 1.1, algebra]

3.1 Pairing that Q-valued integral with $\xi$ and applying Cauchy–Schwarz yields
$\left|\left(\int_0^T(p-\bar p_h)\eta\,dt,\xi\right)_{L^2}\right|\le(K+1)H\|\eta'\|_{L^1(0,T)}\|\xi\|_Q$. Together with steps 1.2 and 2.1 this proves both claims. [F3, step 1.2, step 2.1, algebra] ∎
