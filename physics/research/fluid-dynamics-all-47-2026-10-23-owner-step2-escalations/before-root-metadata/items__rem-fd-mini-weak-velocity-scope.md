---
id: rem-fd-mini-weak-velocity-scope
kind: remark
title: "Weak velocity limits do not supply the smooth pressure-observation estimate"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - thm-na-mini-navier-stokes-be-subsequential-limit
  - def-na-solenoidal-energy-weak-ns-velocity
  - def-na-evolutionary-incompressible-ns-weak-solution
  - def-axiom-of-choice
  - def-countable-choice
  - def-fd-mini-fluid-interface
  - prop-fd-mini-accumulated-pressure-observation
dependency_roles:
  thm-na-mini-navier-stokes-be-subsequential-limit: mathematical-premise
  def-na-solenoidal-energy-weak-ns-velocity: mathematical-premise
  def-na-evolutionary-incompressible-ns-weak-solution: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fd-mini-fluid-interface: mathematical-premise
  prop-fd-mini-accumulated-pressure-observation: mathematical-premise
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
      locator: "§54.2, Lemma 54.5 and Remark 54.6, printed pp. 410–413: MINI approximation context only; the current weak-limit result is the exact mathematical supplier."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "§§8.4.2 and 8.6.1, printed pp. 470–471 and 487–488: MINI stability and stationary Stokes context only; not a pressure-regularity claim for weak evolution limits."
verification:
  precheck: pass
---

## Remark

Assume both Countable Choice and the Axiom of Choice. Let $D\subset\mathbb R^d$, $d\in\{2,3\}$, be a nonempty bounded connected Lipschitz polyhedral domain, let $0<T<\infty$, let $\nu>0$, let $V=H^1_0(D;\mathbb R^d)$, $Q=L^2_0(D)$, $V_\sigma=\{v\in V:\operatorname{div}v=0\}$, and $H_\sigma=\overline{V_\sigma}^{\,L^2(D)^d}$. Define $\varepsilon(v)=(\nabla v+\nabla v^{\mathsf T})/2$, $a_\nu(v,w)=2\nu\int_D\varepsilon(v):\varepsilon(w)\,dx$, $b(v,q)=-\int_Dq\,\operatorname{div}v\,dx$, and $c(a;v,w)=\tfrac12\int_D((a\cdot\nabla)v\cdot w-(a\cdot\nabla)w\cdot v)\,dx$. On each matching shape-regular affine simplicial mesh, let $V_{h,j}$ be the MINI continuous piecewise-linear velocity space enriched by one interior bubble per simplex and let $Q_{h,j}$ be the continuous piecewise-linear pressure space with zero mean. Set $Z_j=\{v_{h,j}\in V_{h,j}:b(v_{h,j},q_{h,j})=0\text{ for every }q_{h,j}\in Q_{h,j}\}$. Take $f\in L^2(0,T;L^2(D)^d)$ and $u_0\in H_\sigma$. Use a mesh family with maximum cell diameters $h_j\to0$ and time partitions $0=t_0^j<\cdots<t_{N_j}^j=T$ whose maximum steps $\tau_{\max,j}$ tend to zero, without a relation between these limits. On each mesh, initialize by the $L^2$ projection of $u_0$ onto $Z_j$ and choose any actual mixed backward Euler MINI solution; write $\bar u_j(t)=u_j^n$ on $(t_{n-1}^j,t_n^j]$. A subsequence satisfies $\bar u_j\to u$ strongly in $L^2(0,T;L^2(D)^d)$ and weakly in $L^2(0,T;V)$, where $u\in L^\infty(0,T;H_\sigma)\cap L^2(0,T;V_\sigma)$ is weakly continuous into $H_\sigma$, has $u(0)=u_0$, and obeys, for every fixed $v\in V_\sigma$ and $\eta\in C^1([0,T])$ vanishing near $T$,
$$-\int_0^T(u(t),v)_{L^2}\eta'(t)\,dt+\int_0^T\bigl(a_\nu(u(t),v)+c(u(t);u(t),v)\bigr)\eta(t)\,dt=\int_0^T(f(t),v)_{L^2}\eta(t)\,dt+(u_0,v)_{L^2}\eta(0),$$
and, for almost every $t\in(0,T)$,
$$\frac12\|u(t)\|_{L^2}^2+\nu\int_0^t\|\nabla u(s)\|_{L^2}^2\,ds\le\frac12\|u_0\|_{L^2}^2+\int_0^t(f(s),u(s))_{L^2}\,ds.$$
The subsequential-limit theorem does not assert pressure regularity or a pressure-observation error estimate. The accumulated-pressure observation proposition on this page additionally requires the strong no-slip regularity $u\in W^{1,\infty}(0,T;H^2(D)^d\cap V_\sigma)$ and $p\in W^{1,\infty}(0,T;H^1(D)\cap Q)$. Thus the weak-limit theorem alone does not supply that pressure estimate. This scope remark does not assert that a pressure is absent or rule out a separately proved pressure-primitive result.

## Remark references

[[def-na-solenoidal-energy-weak-ns-velocity|solenoidal energy weak velocity]]

[[def-fd-mini-fluid-interface|smooth MINI observation interface]]

[[thm-na-mini-navier-stokes-be-subsequential-limit|MINI subsequential velocity-limit theorem]]

[[prop-fd-mini-accumulated-pressure-observation|smooth accumulated-pressure observation bound]]

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, the domain, data and mesh/time families in the Remark, and actual finite-step mixed MINI roots.

[A1] Countable Choice means that every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function $f$ with $f(n)\in X_n$. ([[def-countable-choice]])

[A2] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] Under the domain, data, mesh, time-step, initialization, Axiom-of-Choice and any-root hypotheses above, the MINI limit theorem gives a subsequence with strong $L^2_tL^2_x$ and weak $L^2_tH^1_0$ velocity convergence, solenoidal momentum, weak initial trace, and energy inequality. ([[thm-na-mini-navier-stokes-be-subsequential-limit]])

[F2] The subsequential-limit theorem explicitly does not assert the pressure regularity or pressure-bearing formulation needed for the stronger pressure clause. ([[thm-na-mini-navier-stokes-be-subsequential-limit]])

[F3] A solenoidal energy weak velocity is in $L^\infty(0,T;H_\sigma)\cap L^2(0,T;V_\sigma)$, satisfies the scalar-test weak equation and energy inequality, and its definition does not itself assert an $L^{4/3}(0,T;L^2_0(D))$ pressure. ([[def-na-solenoidal-energy-weak-ns-velocity]])

[F4] The accumulated-pressure observation proposition assumes the separate smooth no-slip branch, including $u\in W^{1,\infty}(0,T;H^2\cap V_\sigma)$ and $p\in W^{1,\infty}(0,T;H^1\cap Q)$, and bounds only the primitive and stated time-tested pressure observations. ([[prop-fd-mini-accumulated-pressure-observation]])

## Proof

1.1 Apply [F1] to the assumed energy data, shape-regular MINI mesh/time families, projected initial data and any actual roots. It yields the stated velocity convergence, scalar solenoidal equation, initial trace and energy inequality along a subsequence. [A2, F1, given]

2.1 By [F2] and [F3], the limit's energy-weak definition does not supply pressure regularity. By [F4], the pressure-observation bounds require the distinct strong velocity and pressure regularity not assumed by [F1]. Thus [F1] alone supplies no pressure-observation error bound, while no nonexistence or nonregularity conclusion follows from that omission. [A1, F1, F2, F3, F4, step 1.1] ∎
