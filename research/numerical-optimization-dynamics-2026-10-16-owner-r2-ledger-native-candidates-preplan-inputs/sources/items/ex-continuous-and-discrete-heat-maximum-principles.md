---
id: ex-continuous-and-discrete-heat-maximum-principles
kind: example
title: Continuous and discrete heat maximum bounds on sampled data
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-parabolic-theta-finite-difference-scheme
  - thm-theta-scheme-discrete-maximum-principle
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
---

## Example

On $\Omega=(0,1)^2$, the function
$$
u(x,y,t)=\sin(\pi x)\sin(\pi y)e^{-2\pi^2t}
$$
solves the unit-diffusivity heat equation with zero Dirichlet data and initial values in $[0,1]$. It remains in $[0,1]$ continuously. On an equal-spacing grid, forward Euler also remains in $[0,1]$ provided $2\Delta t/h^2\le1/2$.

## Verification

**Given:** $T>0$, $N\ge2$, $h=1/N$, $M\ge1$, $\Delta t=T/M$ with $2\Delta t/h^2\le1/2$, and the exact sampled initial and zero Dirichlet boundary data for the forward-Euler heat scheme with $\kappa_x=\kappa_y=1$.

[F1] [[def-parabolic-theta-finite-difference-scheme]]: the centered Dirichlet update imposes the specified boundary rows at every time level.

[F2] [[thm-theta-scheme-discrete-maximum-principle]]: for the zero-source Dirichlet θ scheme, if $\Delta t(1-\theta)(\kappa_x/h_x^2+\kappa_y/h_y^2)\le1/2$, all grid values lie between the initial and boundary extrema.

1.1 Direct differentiation gives $u_t=-2\pi^2u$ and $\Delta u=-2\pi^2u$, so $u_t-\Delta u=0$. Also $u=0$ on the four sides and $u(x,y,0)=\sin(\pi x)\sin(\pi y)\in[0,1]$. [given, algebra]

2.1 On $[0,1]$, $0\le\sin(\pi x),\sin(\pi y)\le1$, and for $t\ge0$ the factor $e^{-2\pi^2t}$ lies in $(0,1]$. The explicit formula therefore gives $0\le u\le1$ throughout the closed cylinder. [given, step 1.1, algebra]

3.1 The sampled initial values lie in $[0,1]$ and the boundary rows are zero. With $\theta=0$ and $\kappa_x=\kappa_y=1$, the condition in [F2] is exactly $2\Delta t/h^2\le1/2$. Therefore [F2] gives $0\le U^n_{ij}\le1$ at every grid node and time level. [F1, F2, given, algebra] ∎

## Remarks

The continuous supplier is used only for unit diffusivity on a bounded rectangle with smooth exact data. The discrete conclusion follows from the separately proved finite-grid boundary condition.
