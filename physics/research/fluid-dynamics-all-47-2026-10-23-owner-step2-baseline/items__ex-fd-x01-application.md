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
---

## Example

Use SI units and select the formal model inputs $\rho_0=10^3\,\mathrm{kg\,m^{-3}}$, $\mu=10^{-3}\,\mathrm{Pa\,s}$, $U=1\,\mathrm{m\,s^{-1}}$, $L=10^{-1}\,\mathrm m$, and $c=10^2\,\mathrm{m\,s^{-1}}$. These are exact illustrative parameters, not measurements. Then the kinematic viscosity is $\nu=10^{-6}\,\mathrm{m^2\,s^{-1}}$, the Reynolds number is $\operatorname{Re}=10^5$, the Mach number is $\operatorname{Ma}=10^{-2}$, and the barotropic momentum coefficient is $\operatorname{Ma}^{-2}=10^4$.

On the dimensionless periodic cell $(0,2\pi)^3$, take

$$u^*(\Theta,X)=(e^{-\Theta/\operatorname{Re}}\sin X_2,0,0),\qquad p_{\mathrm{inc}}^*=0.$$

This is a smooth exact solution of the dimensionless incompressible Newtonian equations for every $\Theta$ in an open interval containing $0$. The corresponding physical cell has side length $2\pi L$ and periodic faces. For the separate barotropic branch, choose $P(\rho)=10^5\,\mathrm{Pa}+c^2(\rho-\rho_0)$ and the uniform state $\rho^*=1$, $u^*=0$, and $p_{\mathrm{bar}}^*=0$. This is an exact equilibrium of the unforced barotropic model. The computed coefficients and fields illustrate algebra in the adopted equations only; they report no observation and imply no low-Mach or high-Reynolds approximation.

## Example references

[[pthm-fd-px01-prediction|Exact conditional Reynolds and Mach model prediction]]

## Facts & Assumptions

**Given:** The exact parameter selection, periodic cell, smooth fields, and barotropic pressure law in the Example.

[F1] [[pthm-fd-px01-prediction]]: for positive scales, the unforced constant-density incompressible Newtonian system and the unforced positive-density barotropic Euler system have the exact scaled equations stated there. This example is conditional on those adopted model formulations and is not empirical evidence.

## Verification

**Given:** The formal SI inputs and the two selected model fields in the Example. Use $\Theta$ for dimensionless time, distinct from any physical temperature.

1.1 The definitions give $\nu=\mu/\rho_0=10^{-3}/10^3=10^{-6}\,\mathrm{m^2\,s^{-1}}$. Therefore $\operatorname{Re}=UL/\nu=(1)(10^{-1})/10^{-6}=10^5$ and $\operatorname{Ma}=U/c=1/10^2=10^{-2}$, so $\operatorname{Ma}^{-2}=10^4$. [given, algebra]

2.1 For the selected shear field, $\operatorname{div}_Xu^*=0$ because its first component is independent of $X_1$, and $(u^*\cdot\nabla_X)u^*=0$ for the same reason. Direct differentiation gives $\partial_\Theta u^*=-\operatorname{Re}^{-1}u^*$ and $\Delta_Xu^*=-u^*$. With $p_{\mathrm{inc}}^*=0$, the momentum equation is thus satisfied componentwise. The scaling in [F1] carries this smooth solution to the physical periodic cell with the stated positive scales. [F1, given, step 1.1, algebra]

2.2 For the linear pressure law, $P'(\rho_0)=c^2>0$. At $\rho^*=1$, $p_{\mathrm{bar}}^*=0$; the selected constant density and zero velocity make both the mass equation and the barotropic momentum equation vanish on each side. The coefficient $10^4$ multiplies a zero pressure gradient in this equilibrium and is not an approximation parameter conclusion. [F1, given, step 1.1, algebra]

3.1 Every selected value and field is a formal input or exact solution of the stated model equations; none is a measured result. The calculation supplies no limit or empirical claim. [F1, step 1.1, step 2.1, step 2.2] ∎
