---
id: def-fd-pn01-forced-creeping-stokes-branch
kind: definition
title: "Forced creeping Stokes branch for pressure observations"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: physics
library: physics
dependency_level: 4
deps:
  - def-countable-choice
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - lem-na-homogeneous-dirichlet-poincare
  - post-fd-boundary-data
  - post-fd-creeping-force-balance
  - post-fd-newtonian-fourier
dependency_roles:
  def-countable-choice: mathematical-premise
  def-na-stokes-zero-mean-pressure-and-velocity-spaces: mathematical-premise
  lem-na-homogeneous-dirichlet-poincare: mathematical-premise
  post-fd-boundary-data: physical-assumption
  post-fd-creeping-force-balance: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
physical_scope: >-
  Conditional weak-form interface for a steady, incompressible,
  constant-density Newtonian branch with a prescribed body-acceleration load,
  mean-zero pressure gauge, and separately selected stationary no-slip
  boundary. The current steady force-balance postulate supplies the specified
  body-acceleration input; this definition adds the scaled weak formulation
  and no-slip trace.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Iain W. Stewart, MIT 8.09, Advanced Classical Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
      locator: "§6.8, printed pp. 135–138; low-Re Stokes model and stationary sphere boundary data."
    - title: "David Tong, Fluid Mechanics"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids.pdf"
      locator: "§3.4, printed pp. 77–93; Stokes equations and no-slip model, without a general approximation-error result."
    - title: "University of Cambridge, Fluid Dynamics II (D)"
      url: "https://www.damtp.cam.ac.uk/user/examples/D23Le.pdf"
      locator: "Chapter 4, printed pp. 32–33; low-Re Stokes equations with prescribed boundary data."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice, meaning that every sequence of nonempty sets has a choice function. Let $D^*\subset\mathbb R^3$ be a nonempty bounded connected open polyhedral set in dimensionless coordinates whose boundary has a finite rigidly moved Lipschitz graph-chart atlas. Choose $a<b$ such that $D^*\subset(a,b)\times\mathbb R^2$ and set $C_P(D^*):=b-a$. Let $\ell_0>0$ metres be a length scale and $U_0>0$ metres per second a velocity scale. The physical domain is $\Omega_{\mathrm{phys}}=\ell_0D^*$. Let $\rho_0>0$ kilograms per cubic metre and $\mu_0>0$ pascal seconds be constant density and dynamic shear viscosity. Let $b_{\mathrm{phys}}:\Omega_{\mathrm{phys}}\to\mathbb R^3$ be a continuous body-acceleration field in metres per second squared such that $g^*(y):=\ell_0 b_{\mathrm{phys}}(\ell_0y)/U_0^2$ belongs to $L^2(D^*;\mathbb R^3)$. Define the dimensionless kinematic viscosity $\nu^*:=\mu_0/(\rho_0U_0\ell_0)>0$ and Reynolds number $\operatorname{Re}:=\rho_0U_0\ell_0/\mu_0=1/\nu^*$; the dimensional kinematic viscosity is $\mu_0/\rho_0$ in square metres per second.

Use the real spaces $V:=H^1_0(D^*;\mathbb R^3)$ with gradient norm $\|v\|_V=\|\nabla v\|_{L^2(D^*)}$ and $Q:=L^2_0(D^*)=\{q\in L^2(D^*):\int_{D^*}q\,dy=0\}$ with its $L^2$ norm. Here $H^1_0$ is the $H^1$ closure of compactly supported smooth vector fields, and $Q$ selects the spatial mean-zero representative of pressure. Let $u^*\in V$ be dimensionless velocity, let $q^*\in Q$ be dimensionless pressure, set $\varepsilon(u^*)=(\nabla u^*+\nabla u^{*\mathsf T})/2$, and define the dimensionless load functional $F_{g^*}(v):=\int_{D^*}g^*(y)\cdot v(y)\,dy$ for $v\in V$. The bounded-domain Poincare inequality makes $F_{g^*}$ a continuous linear functional on $V$.

The physical fields corresponding to the dimensionless solution are $u_{\mathrm{phys}}(\ell_0y)=U_0u^*(y)$ and $p_{\mathrm{phys}}(\ell_0y)=\rho_0U_0^2q^*(y)$. Define $D_{\mathrm{phys}}=(\nabla_xu_{\mathrm{phys}}+\nabla_xu_{\mathrm{phys}}^{\mathsf T})/2$ in inverse seconds and $\sigma_{\mathrm{phys}}=-p_{\mathrm{phys}}I_3+2\mu_0D_{\mathrm{phys}}$ in pascals. The parameterized forced creeping Stokes weak formulation uses this physical stress, a divergence-free velocity, and the separately adopted steady force balance $\operatorname{div}\sigma_{\mathrm{phys}}+\rho_0b_{\mathrm{phys}}=0$ from the current creeping-force postulate, which permits a specified body-acceleration field. It is the zero-inertia alternative branch; no material-acceleration equation is imposed on the same field. Its nondimensional weak form is the pair of equations

$$2\nu^*\int_{D^*}\varepsilon(u^*):\varepsilon(v)\,dy-\int_{D^*}q^*\operatorname{div}v\,dy=F_{g^*}(v)\quad(v\in V),\qquad-\int_{D^*}r\operatorname{div}u^*\,dy=0\quad(r\in Q).$$

The functional satisfies $\|F_{g^*}\|_{V'}\le C_P(D^*)\|g^*\|_{L^2(D^*)}$ by the bounded-domain Poincare inequality. The chosen stationary no-slip wall condition is the zero trace encoded by $V$. The pressure is a constraint multiplier with mean-zero gauge. This weak interface contains no material-acceleration term. It asserts no additional solution existence, uniqueness, approximation error, or empirical applicability.

## Definition references

[[def-countable-choice|Axiom of Countable Choice]]

[[def-na-stokes-zero-mean-pressure-and-velocity-spaces|Stokes spaces and weak bilinear forms]]

[[lem-na-homogeneous-dirichlet-poincare|Bounded-domain Poincare inequality]]

[[post-fd-newtonian-fourier|Newtonian stress closure]]

[[post-fd-creeping-force-balance|Alternative steady creeping force balance, including body acceleration]]

[[post-fd-boundary-data|Selected stationary no-slip boundary data]]

[Stewart, MIT 8.09, §6.8](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[Tong, *Fluid Mechanics*, §3.4](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids.pdf)

[Cambridge, *Fluid Dynamics II (D)*, Chapter 4](https://www.damtp.cam.ac.uk/user/examples/D23Le.pdf)
