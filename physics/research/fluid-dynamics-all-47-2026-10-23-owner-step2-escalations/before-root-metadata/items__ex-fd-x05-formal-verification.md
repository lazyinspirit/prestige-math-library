---
id: ex-fd-x05-formal-verification
kind: example
title: "Vortex topology and global-Bernoulli counterexamples — formal worked fields"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02-examples
dependency_level: 2
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-fd-x05
dependency_roles:
  thm-fd-x05: mathematical-premise
scope: "Concrete punctured-axis vortex and whole-space solid rotation demonstrating nonzero circulation, absence of a global potential, and Bernoulli values varying between circular streamlines. No equation-of-state assumption."
verification:
  precheck: pass
---

## Example

For $\kappa=1$, $\rho_0=2$, $p_0=0$, and $r=(x^2+y^2)^{1/2}>0$, the vortex is $u_v=(-y/r^2,x/r^2,0)$ with pressure $p_v=-1/r^2$. Its circle of radius $R=2$ has circulation $2\pi$. Separately, for solid rotation take $\Omega_0=1$, $\rho_0=2$, and $p_0=0$; then $u_s=(-y,x,0)$ and $p_s=r^2$, and its Bernoulli quantity is $B=r^2$. Thus circles of distinct radii have distinct Bernoulli values.

## Example references

[[thm-fd-x05]]

## Facts & Assumptions

**Given:** The vortex is defined only where $r>0$ and the solid-rotation field is on all of $\mathbb R^3$. Both use the stated constant-density pressure multiplier.

[A1] For the vortex use $\kappa=1$, $\rho_0=2$, $p_0=0$, $\nu>0$. For solid rotation use $\Omega_0=1$, $\rho_0=2$, $p_0=0$, $\nu>0$.

[F1] [[thm-fd-x05]]: the vortex has circulation $2\pi\kappa$ and pressure $p_0-\rho_0\kappa^2/(2r^2)$; its nonzero circulation rules out a single-valued global potential. Solid rotation with pressure $p_0+\rho_0\Omega_0^2r^2/2$ is an exact steady field with $B=p_0/\rho_0+\Omega_0^2r^2$.

## Verification

1.1 The parameter substitutions in [F1] give $p_v=-1/r^2$. Direct differentiation yields $\nabla p_v=2(x,y,0)/r^4$, so $\rho_0^{-1}\nabla p_v=(x,y,0)/r^4$; the vortex convection is $-(x,y,0)/r^4$ and its Laplacian is zero. Along $\gamma_2(\theta)=(2\cos\theta,2\sin\theta,z_0)$, $u_v\cdot\gamma_2'=1$, so $\oint_{\gamma_2}u_v\cdot d\mathbf r=\int_0^{2\pi}1\,d\theta=2\pi\ne0$. A single-valued potential would have zero integral by the chain rule around the closed curve. [given, A1, F1, algebra]

2.1 For solid rotation the substituted pressure is $p_s=r^2$ and $|u_s|^2/2=r^2/2$, while $p_s/\rho_0=r^2/2$. Hence $B=r^2$. Along a streamline $\gamma(s)=(x(s),y(s),z(s))$ of this selected field, $\gamma'=(-y,x,0)$, so $\frac{d}{ds}(x^2+y^2)=2x(-y)+2yx=0$; consequently $r$ and $B$ are constant along that curve, while different positive radii give different values. [given, A1, F1, algebra] ∎
