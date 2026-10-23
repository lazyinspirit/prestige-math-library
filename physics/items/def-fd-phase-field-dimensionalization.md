---
id: def-fd-phase-field-dimensionalization
kind: definition
title: SI dimensionalization of the periodic diffuse-interface model
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-diffuse-interface-equations
dependency_roles:
  def-fd-diffuse-interface-equations: mathematical-premise
physical_scope: >-
  SI scaling of the three-dimensional periodic, constant-density diffuse-interface
  model. The definition fixes length, time, density, phase, viscosity, mobility,
  free-energy, pressure, and chemical-potential units; it supplies no empirical
  calibration or claim of universal physical applicability.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "J. Tinsley Oden, Lecture Notes, Fall 2016, Chapter 11: Phase-Field Models"
      url: "https://www.oden.utexas.edu/media/reports/2017/1701.pdf"
      locator: "§§11.2 and 11.4, printed pp. 209–212, equations (11.1)–(11.10) and (11.16)–(11.21)."
    - title: "V.E. Badalassi, H.D. Ceniceros, and S. Banerjee, Computation of multiphase systems with phase field models"
      url: "https://web.math.ucsb.edu/~hdc/public/JCP2003BCB.pdf"
      locator: "§§2.1–2.4, pp. 372–374, equations (1)–(15): free energy, chemical potential, convective Cahn–Hilliard equation, Model H coupling, and nondimensionalization."
---

## Definition

Use the dimensionless periodic torus $\mathbb T^3=\mathbb R^3/(2\pi\mathbb Z)^3$ with dimensionless coordinates $y\in\mathbb T^3$ and $s\in[0,S]$, where $S>0$ is dimensionless. Its physical length-scale image is the periodic box $\Omega_L=\mathbb R^3/(2\pi L\mathbb Z)^3$, with physical coordinates $x=Ly$ in metres and fundamental cube $Q_L=[0,2\pi L]^3$. Fields on $\Omega_L$ are represented by $(2\pi L\mathbb Z)^3$-periodic lifts, spatial derivatives are coordinate derivatives of these lifts, and spatial integrals mean Riemann integrals over $Q_L$. For a scalar field $g$, set $\nabla_xg=(\partial_{x_1}g,\partial_{x_2}g,\partial_{x_3}g)$ and $\Delta_xg=\sum_{j=1}^3\partial_{x_j}^2g$; for a vector field $u$, set $(\nabla_xu)_{ij}=\partial_{x_j}u_i$. Choose fixed scales $L>0$ in metres, $U>0$ in metres per second, $\rho_*>0$ in kilograms per cubic metre, and $\Phi_*>0$ in a specified phase unit $[\Phi]$. Set $T_*=L/U$ in seconds, so physical time is $t=T_*s$ and the interval is $[0,T_*S]$.

Let $\varepsilon,M,\nu>0$ be dimensionless coefficients and let $W\in C^2(\mathbb R)$ be a dimensionless potential bounded below. Use the dimensionless classical field tuple from the earlier definition “Periodic Cahn–Hilliard incompressible flow system”: $v:[0,S]\times\mathbb T^3\to\mathbb R^3$ and $\phi,\pi:[0,S]\times\mathbb T^3\to\mathbb R$, with

$$v\in C^1([0,S];C^2_{\rm per}(\mathbb T^3;\mathbb R^3)),\qquad \phi\in C^1([0,S];C^1_{\rm per}(\mathbb T^3;\mathbb R))\cap C([0,S];C^2_{\rm per}(\mathbb T^3;\mathbb R)),\qquad \pi\in C([0,S];C^1_{\rm per}(\mathbb T^3;\mathbb R)).$$

Here $C^k_{\rm per}$ consists of periodic lifts whose coordinate derivatives through order $k$ are continuous, bounded, and uniformly continuous on $Q_3=[0,2\pi]^3$, and $C^1([0,S];C^k_{\rm per})$ means time differentiability in the supremum norms of those spatial derivatives. Set $\Delta_y=\sum_{j=1}^3\partial_{y_j}^2$. Define the dimensionless chemical-potential field

$$\mu_c=\varepsilon^{-1}W'(\phi)-\varepsilon\Delta_y\phi,$$

and require $\mu_c\in C([0,S];C^2_{\rm per}(\mathbb T^3;\mathbb R))$. Define the corresponding physical fields $u:[0,T_*S]\times\Omega_L\to\mathbb R^3$, $\varphi:[0,T_*S]\times\Omega_L\to\mathbb R$, and $p:[0,T_*S]\times\Omega_L\to\mathbb R$ by

$$u(t,x)=Uv(s,y),\qquad \varphi(t,x)=\Phi_*\phi(s,y),\qquad p(t,x)=\rho_*U^2\pi(s,y),\qquad (s,y)=(t/T_*,x/L).$$

Thus $u$ has units metres per second, $\varphi$ has unit $[\Phi]$, and $p$ has units pascals.

Define the positive physical coefficients

$$\beta=\frac{\rho_*U^2}{\varepsilon},\qquad \lambda_\phi=\frac{\rho_*U^2L^2\varepsilon}{\Phi_*^2},\qquad \eta=\rho_*UL\nu,\qquad \mathcal M=\frac{M\Phi_*^2L}{\rho_*U}.$$

Here $\beta$ is a bulk free-energy-density coefficient in joules per cubic metre, $\lambda_\phi$ is a gradient free-energy coefficient in joules per metre per phase-unit squared, $\eta$ is dynamic viscosity in pascal seconds, and $\mathcal M$ has units $[\Phi]^2\mathrm{m^3\,s\,kg^{-1}}$. The physical chemical potential has units $\mathrm{J\,m^{-3}}[\Phi]^{-1}$ and the pressure has units pascals.

Define the bulk phase free-energy density, phase free-energy functional, and kinetic-plus-phase free-energy functional by

$$f_b(\varphi)=\beta W(\varphi/\Phi_*),\qquad \mathcal F[\varphi]=\int_{\Omega_L}\left(f_b(\varphi)+\frac{\lambda_\phi}{2}|\nabla_x\varphi|^2\right)\,dx,$$

$$\mathcal G[u,\varphi]=\int_{\Omega_L}\left(\frac{\rho_*}{2}|u|^2+f_b(\varphi)+\frac{\lambda_\phi}{2}|\nabla_x\varphi|^2\right)\,dx.$$

Both functionals have units joules.

The dimensional chemical-potential field used by this model is

$$\mu=f_b'(\varphi)-\lambda_\phi\Delta_x\varphi=\frac{\beta}{\Phi_*}W'(\varphi/\Phi_*)-\lambda_\phi\Delta_x\varphi.$$

The length, speed, density, and phase scales are model inputs; no measured calibration is assigned by this definition.

## Definition references

[[def-fd-diffuse-interface-equations|Dimensionless periodic phase-flow fields, regularity, chemical potential, and energy functional]]

[J. Tinsley Oden, Lecture Notes, Fall 2016, Chapter 11 §§11.2 and 11.4 (printed pp. 209–212)](https://www.oden.utexas.edu/media/reports/2017/1701.pdf)

[V.E. Badalassi, H.D. Ceniceros, and S. Banerjee, §§2.1–2.4 (pp. 372–374)](https://web.math.ucsb.edu/~hdc/public/JCP2003BCB.pdf)
