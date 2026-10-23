---
id: pthm-fd-creeping-lipschitz-pressure
kind: physics-theorem
title: "Creeping continuum pressure and bounded observations"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: physics
library: physics
dependency_level: 5
deps:
  - def-fd-pn01-forced-creeping-stokes-branch
  - post-fd-creeping-force-balance
  - post-fd-boundary-data
  - thm-fd-stokes-load-observable-stability
  - def-countable-choice
  - lem-na-homogeneous-dirichlet-poincare
dependency_roles:
  def-fd-pn01-forced-creeping-stokes-branch: formulation-prerequisite
  post-fd-creeping-force-balance: physical-assumption
  post-fd-boundary-data: physical-assumption
  thm-fd-stokes-load-observable-stability: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-na-homogeneous-dirichlet-poincare: mathematical-premise
physical_scope: >-
  Conditional pressure-observation stability for the separately adopted steady
  forced creeping Stokes branch on a bounded no-slip domain. The material-
  acceleration term is omitted by that model assumption; no finite-Re
  Navier–Stokes approximation error, empirical coefficient inference, or
  experimental validation is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Iain W. Stewart, MIT 8.09, Advanced Classical Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
      locator: "§6.8, printed pp. 135–138; low-Re Stokes flow around a sphere."
    - title: "David Tong, Fluid Mechanics"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids.pdf"
      locator: "§3.4, printed pp. 77–93; Stokes equations, no-slip sphere, and limited low-Re scope."
    - title: "University of Cambridge, Fluid Dynamics II (D)"
      url: "https://www.damtp.cam.ac.uk/user/examples/D23Le.pdf"
      locator: "Chapter 4, printed pp. 32–35; low-Re Stokes equations, prescribed boundary data, and sphere solution."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53: Stokes Equations"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf"
      locator: "§§53.2.1–53.2.2: weak Stokes formulation, pressure gauge, divergence lifting, and pressure stability context."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "§§4.2.1–4.2.3 and §8.2.1: mixed Hilbert-space stability and Stokes pressure gauge context."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement

Assume Countable Choice. Let $D^*\subset\mathbb R^3$ be a nonempty bounded connected Lipschitz open set whose boundary has a finite rigidly moved graph-chart atlas, contained in a slab $(a,b)\times\mathbb R^2$, and set $C_P(D^*):=b-a$. Let $\ell_0>0$ metres and $U_0>0$ metres per second be reference length and velocity; the physical domain is $\Omega_{\mathrm{phys}}=\ell_0D^*$. Fix constant density $\rho_0>0$ kilograms per cubic metre and constant dynamic viscosity $\mu_0>0$ pascal seconds. Write $\nu^*:=\mu_0/(\rho_0U_0\ell_0)>0$ for the dimensionless kinematic viscosity and $\nu_{\mathrm{phys}}:=\mu_0/\rho_0$ for its dimensional value in square metres per second. For each continuous body-acceleration field $b_i\in C^0(\Omega_{\mathrm{phys}};\mathbb R^3)\cap L^2(\Omega_{\mathrm{phys}};\mathbb R^3)$ in metres per second squared, set $g_i^*(y):=\ell_0b_i(\ell_0y)/U_0^2$. Use the forced creeping Stokes branch defined on this page: the velocity $u_i^*\in V:=H^1_0(D^*;\mathbb R^3)$ with gradient norm $\|v\|_V=\|\nabla v\|_{L^2(D^*)}$ has zero trace on the selected stationary no-slip wall, the pressure $q_i^*\in Q:=L^2_0(D^*)=\{q\in L^2(D^*):\int_{D^*}q\,dy=0\}$ is the spatial mean-zero multiplier, and the weak model equation is

$$2\nu^*\int_{D^*}\varepsilon(u_i^*):\varepsilon(v)\,dy-\int_{D^*}q_i^*\operatorname{div}v\,dy=F_i(v)\quad(v\in V),\qquad-\int_{D^*}r\operatorname{div}u_i^*\,dy=0\quad(r\in Q),$$

where $\varepsilon(w)=(\nabla w+\nabla w^{\mathsf T})/2$ and $F_i(v):=\int_{D^*}g_i^*(y)\cdot v(y)\,dy$. The physical pressure is recovered from $p_{i,\mathrm{phys}}(\ell_0y)=\rho_0U_0^2q_i^*(y)$ using this mean-zero gauge. Let $m\ge1$ be an integer and let $S_1,\ldots,S_m:Q\to\mathbb R$ be bounded real-linear pressure sensors with $\|S_j\|_{Q'}:=\sup_{\|q\|_{L^2(D^*)}\le1}|S_j(q)|$. Define the physical pressure-output vector $\mathcal P_{\mathrm{phys}}(b_i):=\rho_0U_0^2(S_1(q_i^*),\ldots,S_m(q_i^*))\in\mathbb R^m$. The earlier Stokes-load solvability and sensor-stability theorem gives the weak solution pairs and yields

$$\|\mathcal P_{\mathrm{phys}}(b_1)-\mathcal P_{\mathrm{phys}}(b_2)\|_{\mathbb R^m}\le3\rho_0U_0^2C_{\mathrm{div}}(D^*)C_P(D^*)\left(\sum_{j=1}^m\|S_j\|_{Q'}^2\right)^{1/2}\|g_1^*-g_2^*\|_{L^2(D^*)},$$

where $C_{\mathrm{div}}(D^*)<\infty$ satisfies: there is a bounded linear right inverse $B_{D^*}:Q\to V$ with $\operatorname{div}B_{D^*}q=q$ and $\|\nabla B_{D^*}q\|_{L^2(D^*)}\le C_{\mathrm{div}}(D^*)\|q\|_Q$. This is a conditional stability result for the adopted forced creeping model. It does not infer that inertia is negligible from $\operatorname{Re}$, estimate the error against the full Navier–Stokes model at finite Reynolds number, fix an absolute pressure gauge, or report an experiment.

## Statement references

[[def-fd-pn01-forced-creeping-stokes-branch|Forced creeping Stokes branch and scaled weak formulation]]

[[post-fd-boundary-data|Selected stationary no-slip boundary data]]

[[thm-fd-stokes-load-observable-stability|Lipschitz stability of bounded Stokes pressure observations]]

[[lem-na-homogeneous-dirichlet-poincare|Bounded-domain Poincare inequality]]

[Stewart, MIT 8.09, §6.8](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[Tong, *Fluid Mechanics*, §3.4](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids.pdf)

[Cambridge, *Fluid Dynamics II (D)*, Chapter 4](https://www.damtp.cam.ac.uk/user/examples/D23Le.pdf)

[Guermond, MATH 661, Chapter 53](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf)

[Boffi–Brezzi–Fortin, *Mixed Finite Element Methods and Applications*](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf)

## Facts & Assumptions

[A1] Countable Choice is the statement that every countable family of nonempty sets has a choice function. The weak Stokes solvability supplier uses exactly this choice strength. [[def-countable-choice]]

[L1] The current creeping-force postulate adopts the steady alternative force law $\operatorname{div}u=0$ and $\operatorname{div}\sigma+\rho_0b=0$ for a specified body-acceleration field, with no material-acceleration momentum equation imposed on the same field. This is the conditional physical interface used below. [[post-fd-creeping-force-balance]]

[A2] The selected boundary branch is stationary no-slip, hence velocity trace zero; this is adopted boundary data, not a consequence of an interior balance. [[post-fd-boundary-data]]

[F3] The forced creeping branch definition fixes $\nu^*$, the mean-zero pressure gauge, $V=H^1_0(D^*;\mathbb R^3)$, $Q=L^2_0(D^*)$, and the weak Stokes form with $F_i(v)=\int g_i^*\cdot v$. Its body-force right-hand side uses the current adopted steady alternative force-balance interface [L1]. [[def-fd-pn01-forced-creeping-stokes-branch]]

[F1] The bounded Stokes sensor theorem assumes Countable Choice, $D^*$ bounded connected Lipschitz, $\nu^*>0$, $V=H^1_0(D^*;\mathbb R^3)$ with gradient norm, $Q=L^2_0(D^*)$ with its $L^2$ norm, and a continuous load in $V'$. It supplies a unique weak pair and the finite-sensor bound with constant $3C_{\mathrm{div}}(D^*)$. [[thm-fd-stokes-load-observable-stability]]

[F2] The Poincare supplier gives $\|v\|_{L^2(D^*)}\le C_P(D^*)\|v\|_V$ for zero-trace fields, with $C_P(D^*)=b-a$ for the chosen bounding slab. [[lem-na-homogeneous-dirichlet-poincare]]

## Proof

**Given:** Countable Choice; the dimensionless domain and scales; the two body-acceleration inputs; the forced creeping model interface; and the finite family of bounded pressure sensors.

1.1 For each $i\in\{1,2\}$ and $v\in V$, the local forced-branch definition gives $F_i(v)=\int_{D^*}g_i^*\cdot v$ [F3]. Cauchy–Schwarz and [F2] give $|F_i(v)|\le\|g_i^*\|_{L^2(D^*)}\|v\|_{L^2(D^*)}\le C_P(D^*)\|g_i^*\|_{L^2(D^*)}\|v\|_V$. Thus $F_i\in V'$ and $\|F_1-F_2\|_{V'}\le C_P(D^*)\|g_1^*-g_2^*\|_{L^2(D^*)}$. [given, F2, F3, algebra]

2.1 By step 1.1, $F_1,F_2\in V'$. Apply [F1] to these loads and the sensors $S_1,\ldots,S_m$. Its weak Stokes solutions are the pairs specified by [F3], so
$$\|(S_j(q_1^*)-S_j(q_2^*))_{j=1}^m\|_{\mathbb R^m}\le3C_{\mathrm{div}}(D^*)\left(\sum_{j=1}^m\|S_j\|_{Q'}^2\right)^{1/2}\|F_1-F_2\|_{V'}.$$
Under the adopted physical assumption [L1], together with the Newtonian closure in [F3] and selected boundary data [A2], this weak system is the forced creeping model and contains no inertial term. The omission of material acceleration is the stated branch choice, not a consequence of small Reynolds number. [A1, A2, F1, F3, L1, given, step 1.1]

3.1 By the definition of the physical outputs, their difference is the dimensionless sensor vector in step 2.1 multiplied by the positive pressure scale $\rho_0U_0^2$. Substitute the load bound from step 1.1 and the sensor estimate from step 2.1, then multiply by this scale to obtain the claimed inequality. The right side has pressure units, and the result is conditional on the adopted creeping balance, not an approximation estimate for full Navier–Stokes flow. [given, step 1.1, step 2.1, algebra] ∎
