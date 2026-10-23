---
id: ex-fd-phase-outside-unit-interval
kind: example
title: Finite phase-field free energy does not impose an interval bound
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-fd-phase-field-conditional-energy
dependency_roles:
  pthm-fd-phase-field-conditional-energy: physical-result
physical_scope: >-
  One constant periodic solution of the adopted isothermal phase-field model.
  It demonstrates that the quartic potential and conditional free-energy
  identity alone do not impose a pointwise order-parameter interval; it is not
  an observation or a claim about every physical mixture.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
empirical_premises: []
---

## Example

Let $L>0$ metres, $U>0$ metres per second, $\rho_*>0$ kilograms per cubic metre, $\Phi_*>0$ in a chosen phase unit $[\Phi]$, and $S>0$ dimensionless. Let $\varepsilon,M,\nu>0$ be dimensionless, set $\beta=\rho_*U^2/\varepsilon$, $\lambda_\phi=\rho_*U^2L^2\varepsilon/\Phi_*^2$, $\eta=\rho_*UL\nu$, and $\mathcal M=M\Phi_*^2L/(\rho_*U)$, and choose the dimensionless potential $W(q)=(q^2-1)^2/4$. Put $T_*=L/U$, $\Omega_L=\mathbb R^3/(2\pi L\mathbb Z)^3$, $f_b(\varphi)=\beta W(\varphi/\Phi_*)$, $\mu=f_b'(\varphi)-\lambda_\phi\Delta_x\varphi$, and $D_{ij}=(\partial_{x_j}u_i+\partial_{x_i}u_j)/2$.

$$\sigma=-pI_3+2\eta D+\left(f_b(\varphi)-\varphi\mu+\frac{\lambda_\phi}{2}|\nabla_x\varphi|^2\right)I_3-\lambda_\phi\nabla_x\varphi\otimes\nabla_x\varphi.$$

On this periodic domain, let $u$ be a velocity field in metres per second, $\varphi$ a scalar phase field in unit $[\Phi]$, and $p$ a scalar pressure in pascals. For a scalar field $g$, $\nabla_xg=(\partial_{x_1}g,\partial_{x_2}g,\partial_{x_3}g)$ and $\Delta_xg=\sum_j\partial_{x_j}^2g$; for a vector field $u$, $\nabla_x\cdot u=\sum_j\partial_{x_j}u_j$; $I_3$ is the $3\times3$ identity. Consider the adopted equations $\partial_t\varphi+u\cdot\nabla_x\varphi=\mathcal M\Delta_x\mu$, $\nabla_x\cdot u=0$, and $\rho_*(\partial_tu+(u\cdot\nabla_x)u)=\operatorname{div}_x\sigma$, where $\sigma=-pI_3+2\eta D+(f_b-\varphi\mu+\lambda_\phi|\nabla_x\varphi|^2/2)I_3-\lambda_\phi\nabla_x\varphi\otimes\nabla_x\varphi$ and $(\operatorname{div}_x\sigma)_i=\sum_j\partial_{x_j}\sigma_{ij}$. Define the kinetic-plus-phase free energy by $\mathcal G(t)=\int_{\Omega_L}(\rho_*|u|^2/2+f_b(\varphi)+\lambda_\phi|\nabla_x\varphi|^2/2)\,dx$. The constant fields $u=0$, $\varphi=2\Phi_*$, and $p=0$ satisfy these equations for all $t\in[0,T_*S]$. Their chemical potential is the constant $\mu=6\beta/\Phi_*$, and their kinetic-plus-phase free energy is $\mathcal G(t)=(2\pi L)^3\beta W(2)=\frac94(2\pi L)^3\beta<\infty$. Thus this smooth model solution has normalized order parameter $\varphi/\Phi_*=2$ outside $[-1,1]$ while its free energy is finite and constant. The model's energy and equations do not impose that interval as a pointwise constraint; this example is not a maximum-principle theorem, stability claim, or reported observation.

## Example references

[[post-fd-diffuse-interface-material-law|Adopted dimensional phase-field equations and quartic-potential model]]

[[pthm-fd-phase-field-conditional-energy|Conditional smooth periodic free-energy identity]]

## Facts & Assumptions

**Given:** The positive scales, the quartic potential, the periodic domain, and the adopted equations in the example statement.

[F1] [[pthm-fd-phase-field-conditional-energy]]: every smooth periodic solution of the adopted dimensional phase-field equations in the stated regularity class satisfies the displayed free-energy identity.

## Verification

1.1 For $u=0$ and spatially constant $\varphi=2\Phi_*$, all time and spatial derivatives of $u$ and $\varphi$ vanish. Since $\mu=f_b'(\varphi)$ is constant, $\nabla_x\mu=\Delta_x\mu=0$; the phase equation, incompressibility equation, and stress momentum equation therefore have both sides equal to zero when $p=0$. Hence these fields solve the adopted model. [given, algebra]

2.1 The quartic potential has $W(2)=9/4$ and $W'(2)=6$. The kinetic and gradient terms vanish, so integrating the constant bulk term over the fundamental cube of volume $(2\pi L)^3$ gives $\mathcal G=(2\pi L)^3\beta(9/4)$. The conditional theorem [F1] also gives $\mathcal G'=0$ because $\nabla_xu=\nabla_x\mu=0$. Since $\varphi/\Phi_*=2$, the model admits this finite-energy solution outside $[-1,1]$. [given, F1, step 1.1, algebra] ∎
