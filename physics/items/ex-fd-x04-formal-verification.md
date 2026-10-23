---
id: ex-fd-x04-formal-verification
kind: example
title: "Plane and pipe Couette–Poiseuille verification — formal worked fields"
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
  - thm-fd-x04
dependency_roles:
  thm-fd-x04: mathematical-premise
scope: "Exact parameter substitutions for the theorem's infinite plane channel and full-disk regular circular pipe; calculated fluxes and channel shear components. No finite-entrance interpretation."
verification:
  precheck: pass
---

## Example

Set $h=2$, $V_0=0$, $V_1=1$, $G=4$, $\mu=2$, $\rho_0=1$, and $p_0=0$ in the plane-channel model. The profile is $v(y)=\frac52y-y^2$ for $0\le y\le2$, with flux $Q_{\rm ch}=7/3$ and fixed-coordinate wall shear components $\sigma_{xy}(0)=5$ and $\sigma_{xy}(2)=-3$. In the pipe, set $a=1$, $G=8$, $\mu=2$, $\rho_0=1$, and $p_0=0$; the profile is $w(r)=1-r^2$ on the unit disk and its volume flux is $Q_{\rm pipe}=\pi/2$. These are exact infinite or fully developed formal solutions within the theorem's one-dimensional ansatz.

## Example references

[[thm-fd-x04]]

## Facts & Assumptions

**Given:** Use the exact constant-density equations and the plane-channel and circular-pipe ansatz, domains, endpoint data, and formulas in [A1].

[A1] Plane channel: $h=2$, $V_0=0$, $V_1=1$, $G=4$, $\mu=2$, $\rho_0=1$, $p=p_0-Gx$ with $p_0=0$. Pipe: $a=1$, $G=8$, $\mu=2$, $\rho_0=1$, $w(1)=0$, and radial velocity field on the full disk.

[F1] [[thm-fd-x04]]: the channel profile is $V_0+(V_1-V_0)y/h+Gy(h-y)/(2\mu)$ with the stated flux and shear formulas; the full-disk pipe profile is $G(a^2-r^2)/(4\mu)$ with flux $\pi Ga^4/(8\mu)$. Both fields solve the constant-density Navier–Stokes/Stokes equations exactly within their ansatz.

## Verification

1.1 Substituting the channel parameters into the formula in [F1] gives $v(y)=y/2+y(2-y)=5y/2-y^2$. It obeys $v(0)=0$, $v(2)=1$, and $\mu v''=2(-2)=-4=-G$. Integrating gives $\int_0^2v(y)\,dy=5-8/3=7/3$. Also $v'(0)=5/2$ and $v'(2)=-3/2$, so $\mu v'(0)=5$ and $\mu v'(2)=-3$. [given, A1, F1, algebra]

2.1 Substituting the pipe parameters into [F1] gives $w(r)=1-r^2$, which as a Cartesian radial field is $1-y^2-z^2$, smooth on the full disk and zero at $r=1$. Polar integration gives $2\pi\int_0^1r(1-r^2)\,dr=\pi/2$. The parameter values are positive where required, so the exact-solution and restricted-uniqueness conclusions of [F1] apply to both displayed fields. [given, A1, F1, step 1.1, algebra] ∎
