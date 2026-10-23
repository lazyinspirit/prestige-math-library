---
id: cex-fd-unsteady-pathlines-streamlines
kind: counterexample
title: Unsteady pathlines differ from streamlines
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-quantity-and-frame-conventions
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
physical_scope: >-
  Smooth kinematic velocity field on Newtonian spacetime, with pathlines and
  streamlines defined on the same spatial region. No momentum equation,
  constitutive law, or empirical flow is asserted.
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part I lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement refuted

Whenever both curves exist on a common interval, for every $C^1$ velocity field $u:I\times\Omega\to\mathbb R^3$, every initial point $x_0\in\Omega$, and every frozen time $t_0\in I$, the pathline $X$ satisfying $X(t_0)=x_0$ equals the streamline through $x_0$ at time $t_0$ when the streamline parameter is identified with $t-t_0$.

## Statement references

[David Tong, Fluid Mechanics, Part I, §1.1.1 (path lines and streamlines)](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

## Facts & Assumptions

**Given:** An open time interval $I$, a spatial region $\Omega$, and the definitions of pathline and frozen-time streamline from the stated velocity field.

[F1] [[def-fd-quantity-and-frame-conventions]]: a pathline solves $dX/dt=u(t,X(t))$; a streamline at fixed $t_0$ solves $dY/ds=u(t_0,Y(s))$ with $s$ measured in seconds.

## Counterexample

**Given:** Let $I=\mathbb R$, $\Omega=\mathbb R^3$, and $u(t,x,y,z)=(\alpha yt,\beta,0)$, where $\alpha\ne0$ has units s$^{-2}$ and $\beta\ne0$ has units m s$^{-1}$. Choose frozen time $t_0=0$ and initial point $(x_0,0,z_0)$.

1.1 Solve the pathline equations $\dot y=\beta$, $\dot z=0$, and $\dot x=\alpha t y(t)$ with $y(0)=0$, $z(0)=z_0$, $x(0)=x_0$. They give $y(t)=\beta t$, $z(t)=z_0$, and $x(t)=x_0+\alpha\beta t^3/3$. [given, F1, algebra]

2.1 At frozen time $t_0=0$, the velocity is $u(0,x,y,z)=(0,\beta,0)$, so by [F1] the streamline through the same initial point is $Y(s)=(x_0,\beta s,z_0)$. Under $s=t-t_0=t$, its $x$-coordinate is constant, whereas step 1.1 has $x(t)=x_0+\alpha\beta t^3/3$, which differs for every $t\ne0$. Thus the pathline and streamline are distinct. [F1, given, step 1.1, algebra]

3.1 Since $\partial_tu=(\alpha y,0,0)$ is not identically zero, this is an unsteady field. The explicit distinct curves in step 2.1 refute the universal assertion for an unsteady flow. [given, step 2.1, algebra] ∎
