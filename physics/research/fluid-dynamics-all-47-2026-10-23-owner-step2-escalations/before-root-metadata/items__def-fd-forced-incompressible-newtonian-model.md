---
id: def-fd-forced-incompressible-newtonian-model
kind: definition
title: "Forced constant-density incompressible Newtonian model"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-incompressible-newtonian-model
  - post-fd-continuum-balances
  - post-fd-boundary-data
dependency_roles:
  def-fd-incompressible-newtonian-model: formulation-prerequisite
  post-fd-continuum-balances: physical-assumption
  post-fd-boundary-data: physical-assumption
physical_scope: >-
  Smooth, forced, constant-density incompressible Newtonian branch with a
  prescribed body acceleration and separately selected no-slip wall data.
  The definition asserts no solution existence, solver convergence, or
  empirical applicability.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids.pdf"
      locator: "§§3.1.1 and 3.2.1, printed pp. 60–65; incompressible Newtonian stress and adopted no-slip boundary condition."
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://www3.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§5.4.1, printed pp. 173–174; stress/strain-rate relation and no-slip plate setup."
verification:
  precheck: n/a
---

## Definition

Let $I\subset\mathbb R$ be a bounded open time interval measured in seconds and let $\Omega\subset\mathbb R^3$ be a fixed bounded open spatial domain measured in metres whose boundary is locally a Lipschitz graph after rigid coordinate changes. Take $\rho_0>0$ kilograms per cubic metre and $\mu_0>0$ pascal seconds as primitive branch-local physical parameters: this forced branch adopts them as constant density and dynamic shear viscosity inputs and derives neither from another framework nor from observations. Let $u:I\times\Omega\to\mathbb R^3$ be a twice continuously differentiable velocity in metres per second, $p:I\times\Omega\to\mathbb R$ a once continuously differentiable pressure multiplier in pascals, and $b:I\times\Omega\to\mathbb R^3$ a continuous body-acceleration field in metres per second squared. Define $D=(\nabla u+\nabla u^{\mathsf T})/2$ and the stress tensor $\sigma=-pI_3+2\mu_0D$ in pascals, where $I_3$ is the $3\times3$ identity and $(\operatorname{div}\sigma)_i=\sum_{j=1}^3\partial_{x_j}\sigma_{ij}$.

The forced incompressible Newtonian branch adopts

$$\operatorname{div}u=0,\qquad \rho_0\bigl(\partial_tu+(u\cdot\nabla)u\bigr)=\rho_0b+\operatorname{div}\sigma.$$

Equivalently, since $\mu_0$ is constant and $\operatorname{div}u=0$, its momentum equation is

$$\rho_0\bigl(\partial_tu+(u\cdot\nabla)u\bigr)+\nabla p=\mu_0\Delta u+\rho_0b.$$

The derived kinematic viscosity is $\nu_{\mathrm{phys}}=\mu_0/\rho_0$ in square metres per second. Pressure is a constraint multiplier, not an equation-of-state pressure. For a stationary solid wall, the separately selected no-slip boundary datum is $u=0$ on the wall; neither this trace nor the body force follows from the interior balance. This is a forced branch of the Newtonian model: it adds the prescribed acceleration field to the unforced branch and makes no claim of solution existence or empirical validity.

## Definition references

[[def-fd-incompressible-newtonian-model|Unforced constant-density Newtonian model and stress convention]]

[[post-fd-continuum-balances|Adopted material momentum balance with body acceleration]]

[[post-fd-boundary-data|Selected stationary no-slip boundary data]]

[Tong, *Fluid Mechanics*, §§3.1.1 and 3.2.1](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids.pdf)

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §5.4.1](https://www3.nd.edu/~powers/ame.60635/notes.pdf)
