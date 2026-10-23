---
id: ex-fd-x01-application
kind: example
title: "Exact Reynolds and Mach nondimensionalization — worked interpretation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-fd-px01-prediction
dependency_roles:
  pthm-fd-px01-prediction: physical-result
empirical_premises: []
physical_scope: >-
  Formal periodic smooth-model example with explicitly selected SI parameters
  and fields. The values are mathematical inputs, not measurements or
  representative data for a named fluid. No approximation, limit, turbulence,
  or empirical conclusion is asserted.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Example

Use SI units and select the formal inputs $\rho_0=10^3\,\mathrm{kg\,m^{-3}}$, $\mu=10^{-3}\,\mathrm{Pa\,s}$, $U=1\,\mathrm{m\,s^{-1}}$, $L=10^{-1}\,\mathrm m$, and $c=10^2\,\mathrm{m\,s^{-1}}$. These are exact illustrative parameters, not measurements. Then $\nu=\mu/\rho_0=10^{-6}\,\mathrm{m^2\,s^{-1}}$, $\operatorname{Re}=UL/\nu=10^5$, $\operatorname{Ma}=U/c=10^{-2}$, and $\operatorname{Ma}^{-2}=10^4$.

Let $J=(-1,1)$ be a dimensionless open time interval containing $\Theta=0$ and let the physical time interval be $I=(L/U)J=(-L/U,L/U)$ seconds. For a side length $\ell>0$, write $\mathbb T^3_\ell:=\mathbb R^3/(\ell\mathbb Z^3)$ and let $[x]_\ell$ denote the class of $x\in\mathbb R^3$ modulo $\ell\mathbb Z^3$. Define the dimensionless flat torus $\mathbb T^3_{2\pi}$ and the physical flat torus $\mathbb T^3_{2\pi L}$. The map
$$D_L:\mathbb T^3_{2\pi L}\to\mathbb T^3_{2\pi},\qquad D_L([x]_{2\pi L})=[x/L]_{2\pi},$$
is a well-defined smooth bijection with inverse $[X]_{2\pi}\mapsto[LX]_{2\pi L}$. The quotient, not the open cube, is the periodic spatial domain; $[0,2\pi)^3$ is only a representative cell.

Define the periodic lift $\widetilde u^*:J\times\mathbb R^3\to\mathbb R^3$ and pressure field $\widetilde p_{\mathrm{inc}}^*:J\times\mathbb R^3\to\mathbb R$ by
$$\widetilde u^*(\Theta,X)=(e^{-\Theta/\operatorname{Re}}\sin X_2,0,0),\qquad \widetilde p_{\mathrm{inc}}^*(\Theta,X)=0.$$
For every $k\in\mathbb Z^3$, $\widetilde u^*(\Theta,X+2\pi k)=\widetilde u^*(\Theta,X)$, so these smooth fields descend to $u^*:J\times\mathbb T^3_{2\pi}\to\mathbb R^3$ and $p_{\mathrm{inc}}^*:J\times\mathbb T^3_{2\pi}\to\mathbb R$. Spatial derivatives on this flat torus are defined by differentiating the periodic lifts. They satisfy the scaled incompressible equations
$$\partial_\Theta u^*+(u^*\cdot\nabla_X)u^*=-\nabla_Xp_{\mathrm{inc}}^*+\operatorname{Re}^{-1}\Delta_Xu^*,\qquad \operatorname{div}_Xu^*=0.$$
Under the spatial dilation $D_L$ and the time map $\Theta=Ut/L$, define the corresponding physical fields on $I\times\mathbb T^3_{2\pi L}$ by
$$u(t,[x]_{2\pi L})=Uu^*\bigl(Ut/L,D_L([x]_{2\pi L})\bigr),\qquad p(t,[x]_{2\pi L})=p_{\mathrm{ref}}+\rho_0U^2p_{\mathrm{inc}}^*\bigl(Ut/L,D_L([x]_{2\pi L})\bigr)=p_{\mathrm{ref}}.$$
Equivalently, the physical velocity lift is $\widetilde u(t,x)=U\widetilde u^*(Ut/L,x/L)$, which is periodic under $x\mapsto x+2\pi Lk$ for every $k\in\mathbb Z^3$; physical spatial derivatives on the quotient are defined by this lift. A representative physical cell has side length $2\pi L$. This is an exact solution of the selected incompressible equations.

On the same dimensionless spacetime domain $J\times\mathbb T^3_{2\pi}$, for the separate barotropic branch choose the pressure law $P:(0,\infty)\to\mathbb R$ given by $P(\rho)=10^5\,\mathrm{Pa}+c^2(\rho-\rho_0)$ and the constant fields $\rho^*:J\times\mathbb T^3_{2\pi}\to(0,\infty)$, $u^*:J\times\mathbb T^3_{2\pi}\to\mathbb R^3$, and $p_{\mathrm{bar}}^*:J\times\mathbb T^3_{2\pi}\to\mathbb R$, with values $\rho^*=1$, $u^*=0$, and $p_{\mathrm{bar}}^*=0$. For these fields the scaled equations
$$\partial_\Theta\rho^*+\operatorname{div}_X(\rho^*u^*)=0,\qquad \partial_\Theta u^*+(u^*\cdot\nabla_X)u^*=-\operatorname{Ma}^{-2}(\rho^*)^{-1}\nabla_Xp_{\mathrm{bar}}^*$$
hold identically. They are smooth, $P'(\rho_0)=c^2>0$, and their corresponding physical fields $\rho:I\times\mathbb T^3_{2\pi L}\to(0,\infty)$ and $u:I\times\mathbb T^3_{2\pi L}\to\mathbb R^3$ have the constant values $\rho(t,[x]_{2\pi L})=\rho_0$ and $u(t,[x]_{2\pi L})=0$. This is an exact equilibrium of the unforced barotropic model. The computed coefficients and fields illustrate algebra in the adopted equations only; they report no observation and imply no low-Mach or high-Reynolds approximation.

## Example references

[[pthm-fd-px01-prediction|Exact conditional Reynolds and Mach model prediction]]

## Facts & Assumptions

**Given:** The exact parameter selection, periodic cell, smooth fields, and barotropic pressure law in the Example.

[F1] [[pthm-fd-px01-prediction]]: for positive scales, the unforced constant-density incompressible Newtonian system and the unforced positive-density barotropic Euler system have the exact scaled equations stated there. This example is conditional on those adopted model formulations and is not empirical evidence.

## Verification

**Given:** The formal SI inputs and the two selected model fields in the Example. Use $\Theta$ for dimensionless time, distinct from any physical temperature.

1.1 The definitions give $\nu=\mu/\rho_0=10^{-3}/10^3=10^{-6}\,\mathrm{m^2\,s^{-1}}$. Therefore $\operatorname{Re}=UL/\nu=(1)(10^{-1})/10^{-6}=10^5$ and $\operatorname{Ma}=U/c=1/10^2=10^{-2}$, so $\operatorname{Ma}^{-2}=10^4$. [given, algebra]

2.1 For the selected shear field, $\operatorname{div}_Xu^*=0$ because its first component is independent of $X_1$, and $(u^*\cdot\nabla_X)u^*=0$ for the same reason. Direct differentiation gives $\partial_\Theta u^*=-\operatorname{Re}^{-1}u^*$ and $\Delta_Xu^*=-u^*$. With $p_{\mathrm{inc}}^*=0$, the momentum equation is thus satisfied componentwise. Apply [F1] to the smooth periodic lift on the open domain $\mathbb R^3$; its physical lift satisfies the dimensional incompressible equations and is $2\pi L$-periodic in each spatial coordinate, so it descends to the stated physical torus. [F1, given, step 1.1, algebra]

2.2 For the linear pressure law, $P'(\rho_0)=c^2>0$. At $\rho^*=1$, $p_{\mathrm{bar}}^*=0$; the selected constant density and zero velocity make both the mass equation and the barotropic momentum equation vanish on each side. The coefficient $10^4$ multiplies a zero pressure gradient in this equilibrium and is not an approximation parameter conclusion. [F1, given, step 1.1, algebra]

3.1 Every selected value and field is a formal input or exact solution of the stated model equations; none is a measured result. The calculation supplies no limit or empirical claim. [F1, step 1.1, step 2.1, step 2.2] ∎
