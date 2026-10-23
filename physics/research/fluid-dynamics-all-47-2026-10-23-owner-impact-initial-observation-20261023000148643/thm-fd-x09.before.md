---
id: thm-fd-x09
kind: theorem
title: "Barotropic Kelvin and Bernoulli with exact hypotheses"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02
dependency_level: 1
physical_scope: null
scope: "Classical smooth barotropic Euler with positive density and a time-independent conservative body-force potential; Kelvin circulation for a closed C¹ material loop, streamline Bernoulli constancy, and a componentwise global constant only under irrotationality."
deps:
  - def-fd-x00
dependency_roles:
  def-fd-x00: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Iain W. Stewart, MIT 8.09/8.309, Chapter 6: Fluid Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
      locator: "§6.4, printed pp. 120–123, circulation, vorticity and Bernoulli context; the local proof states and verifies the precise barotropic and loop hypotheses."
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 1: Introduction and Inviscid Flows"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
      locator: "§§2.2.1–2.2.2, printed pp. 22–27, Kelvin circulation and barotropic vorticity context; full material-loop differentiation is supplied locally."
verification:
  precheck: pass
---

## Statement

Let $I\subseteq\mathbb R$ be an open time interval, let $\Omega\subseteq\mathbb R^3$ be open, and let $P:(0,\infty)\to\mathbb R$ be $C^2$. Suppose $u:I\times\Omega\to\mathbb R^3$ has continuous first time, first spatial, and second spatial derivatives; $\rho:I\times\Omega\to(0,\infty)$ has continuous first time and first spatial derivatives; and $V:\Omega\to\mathbb R$ is time-independent and $C^2$. Assume pointwise

$$\partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \partial_tu+(u\cdot\nabla)u=-\rho^{-1}\nabla(P(\rho))-\nabla V.$$

For any reference density $\rho_{\rm ref}>0$, define $h(q)=\int_{\rho_{\rm ref}}^q P'(r)/r\,dr$ for $q>0$. For a steady velocity field, a streamline is a $C^1$ curve $x:J\to\Omega$, where $J\subseteq\mathbb R$ is an interval, satisfying $x'(s)=u(x(s))$ with $u(x)$ denoting its time-independent spatial value. If $u$ and $\rho$ are independent of time, every streamline has $|u|^2/2+h(\rho)+V$ constant along it. If in addition $\operatorname{curl}u=0$ on a connected component of $\Omega$, this quantity is constant throughout that component.

For any closed $C^1$ material loop $X:J\times[0,1]\to\Omega$ satisfying $X(t,0)=X(t,1)$, $X_t(t,s)=u(t,X(t,s))$, with $X_s$ and $X_{ts}$ continuous, the circulation $\Gamma(t)=\int_0^1u(t,X(t,s))\cdot X_s(t,s)\,ds$ is constant on $J$. Independently of the Euler assumptions, every $C^2$ vector field $v$ on an open subset of $\mathbb R^3$ obeys the identity

$$ (v\cdot\nabla)v=\nabla(|v|^2/2)-v\times\operatorname{curl}v. $$

No claim is made for shocks, nonbarotropic pressure, nonconservative body forces, or viscous circulation. Under SI interpretation, $u$ is in metres per second, $\rho$ in kilograms per cubic metre, $P$ in pascals, and $h,V$ in square metres per second squared.

## Statement references

[Iain W. Stewart, MIT 8.09/8.309, Chapter 6, §6.4](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[David Tong, Fluid Mechanics lecture notes, Chapter 1, §§2.2.1–2.2.2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

Formal barotropic system, Cartesian derivative conventions, and streamline definition: [[def-fd-x00]].

## Facts & Assumptions

**Given:** Use the positive density, $C^2$ equation of state, conservative time-independent potential, classical pointwise equations, steady-flow hypothesis where stated, and material-loop regularity in the Statement. The result is a conditional deduction from the stated smooth model.

[F1] [[def-fd-x00]]: the barotropic Euler equations are $\rho_t+\operatorname{div}(\rho u)=0$ and $u_t+(u\cdot\nabla)u=-\rho^{-1}\nabla(P(\rho))-\nabla V$, with positive density, $P\in C^2$, and time-independent $V\in C^2$; divergence, gradient, curl and convective derivative use Cartesian coordinates.

## Proof

1.1 In coordinates, $((v\cdot\nabla)v)_i=\sum_jv_j\partial_jv_i$ and $\partial_i(|v|^2/2)=\sum_jv_j\partial_iv_j$. Let $\epsilon_{ijk}$ be the alternating symbol with $\epsilon_{123}=1$. Using $(v\times\operatorname{curl}v)_i=\sum_{j,k,l,m}\epsilon_{ijk}\epsilon_{klm}v_j\partial_lv_m=\sum_jv_j\partial_iv_j-\sum_jv_j\partial_jv_i$ gives the asserted identity component by component. [given, algebra]

2.1 The fundamental theorem of calculus and the chain rule give $\nabla h(\rho)=(P'(\rho)/\rho)\nabla\rho=\rho^{-1}\nabla(P(\rho))$. For a steady solution, $u_t=0$, so dotting the momentum equation with $u$ and applying step 1.1 yields $u\cdot\nabla(|u|^2/2+h(\rho)+V)=0$, because $u\cdot(u\times\operatorname{curl}u)=0$. Along a streamline $x'(s)=u(x(s))$, the chain rule makes the derivative of this quantity zero, proving streamline constancy. If $\operatorname{curl}u=0$, step 1.1 and the momentum equation give $\nabla(|u|^2/2+h(\rho)+V)=0$. A differentiable function with zero gradient is constant along every polygonal path; in an open connected subset of $\mathbb R^3$, polygonally reachable points form a nonempty relatively open and relatively closed set (each point has a ball contained in the open set). Connectedness therefore gives constancy on that component. [given, F1, step 1.1, algebra]

3.1 By the assumed continuous mixed derivatives, differentiate under the integral sign and commute $X_{ts}=\partial_sX_t$. The chain rule and $X_t=u(t,X)$ give $\partial_t(u(t,X)\cdot X_s)=(\partial_tu+(u\cdot\nabla)u)(t,X)\cdot X_s+\partial_s(|u(t,X)|^2/2)$. The momentum equation and step 2.1's enthalpy-gradient identity turn this into $-\partial_s(h(\rho(t,X))+V(X))+\partial_s(|u(t,X)|^2/2)$. Integrating in $s$ gives the endpoint difference of $|u|^2/2-h(\rho)-V$, which is zero because $X(t,0)=X(t,1)$ and all fields are single-valued. Hence $d\Gamma/dt=0$ on $J$. [given, F1, step 2.1, algebra] ∎
