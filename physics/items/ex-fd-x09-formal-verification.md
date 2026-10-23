---
id: ex-fd-x09-formal-verification
kind: example
title: "Barotropic Kelvin and Bernoulli with exact hypotheses — formal worked solution"
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
  - thm-fd-x09
dependency_roles:
  thm-fd-x09: mathematical-premise
scope: "A smooth uniform barotropic Euler solution and explicitly advected closed loop, verifying the constant Bernoulli value and conserved circulation under the theorem's hypotheses."
verification:
  precheck: pass
---

## Example

Let $I=\mathbb R$, $\Omega=\mathbb R^3$, $P(q)=q$ for $q>0$, $\rho_{\rm ref}=1$, $\rho(t,x)=1$, $V=0$, and $u(t,x)=(1,0,0)$. These fields solve the barotropic Euler system. The enthalpy is $h(q)=\log q$. Define the Bernoulli quantity by $B=|u|^2/2+h(\rho)+V$; here it is the constant $1/2$. The closed loop $X(t,s)=(\cos(2\pi s)+t,\sin(2\pi s),0)$ is material and has circulation $0$ for every $t$.

## Example references

[[thm-fd-x09]]

## Facts & Assumptions

**Given:** Use the classical fields, positive density, equation of state, potential and closed material loop in [A1].

[A1] $I=\mathbb R$, $\Omega=\mathbb R^3$, $P(q)=q$, $\rho_{\rm ref}=1$, $\rho=1$, $V=0$, $u=(1,0,0)$, and $X(t,s)=(\cos(2\pi s)+t,\sin(2\pi s),0)$ for $0\le s\le1$.

[F1] [[thm-fd-x09]]: for classical positive-density barotropic Euler with conservative $V$, $h(q)=\int_{\rho_{\rm ref}}^qP'(r)/r\,dr$; steady Bernoulli is constant on streamlines, and a closed $C^1$ material loop has constant circulation under the stated mixed-derivative condition.

## Verification

1.1 The fields have the required smoothness and positive density. Since $\rho$ is constant, $\rho_t+\operatorname{div}(\rho u)=0$; also $u_t=0$, $(u\cdot\nabla)u=0$, $\nabla(P(\rho))=0$, and $\nabla V=0$. Thus both barotropic Euler equations hold pointwise. The enthalpy formula in [F1] gives $h(q)=\int_1^q dr/r=\log q$, so $h(1)=0$ and $|u|^2/2+h(1)+V=1/2$. [given, A1, F1, algebra]

2.1 The loop is closed because its endpoint values at $s=0,1$ agree, and $X_t=(1,0,0)=u(t,X)$; its spatial and mixed derivatives are continuous. Its tangent is $X_s=(-2\pi\sin(2\pi s),2\pi\cos(2\pi s),0)$, so $\Gamma(t)=\int_0^1u\cdot X_s\,ds=-2\pi\int_0^1\sin(2\pi s)\,ds=0$. This verifies the theorem's circulation conclusion directly. [given, A1, F1, algebra] ∎
