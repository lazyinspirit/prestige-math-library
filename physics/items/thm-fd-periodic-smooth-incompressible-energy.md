---
id: thm-fd-periodic-smooth-incompressible-energy
kind: theorem
title: "Periodic smooth incompressible energy identity"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - thm-fd-smooth-periodic-incompressible-ivp
  - lem-fd-torus-mean-zero-poincare
  - def-countable-choice
dependency_roles:
  thm-fd-smooth-periodic-incompressible-ivp: mathematical-premise
  lem-fd-torus-mean-zero-poincare: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, §2.1.5, Exercise 2.1.14"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
    - title: "Thomas Y. Hou, lecture notes, Blow-up or no blow-up?, energy identity (3.1)"
      url: "https://math.stanford.edu/~ryzhik/SCHOOL-13/hou_notes.pdf"
    - title: "David Tong, Fluid Mechanics, Chapter 2, §3.1.2"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, let $s\ge4$ be an integer, let $\nu\ge0$, and let $u_0:Q_d\to\mathbb R^d$ be smooth, real, divergence-free data of zero mean on $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ with normalized measure $d\mu=(2\pi)^{-d}dx$. Let $(u,\pi)$ be the unique smooth solution on the local lifespan supplied by the periodic incompressible IVP theorem, with mean-zero pressure and equation $u_t+(u\cdot\nabla)u=-\nabla\pi+\nu\Delta u$. Then for every $t$ in that lifespan,
$$\frac12\|u(t)\|_{L^2(Q_d)}^2+\nu\int_0^t\|\nabla u(\tau)\|_{L^2(Q_d)}^2\,d\tau=\frac12\|u_0\|_{L^2(Q_d)}^2.$$
Thus energy is constant when $\nu=0$. If $\nu>0$, then $\|u(t)\|_{L^2(Q_d)}\le e^{-\nu t}\|u_0\|_{L^2(Q_d)}$.

## Statement references

[[thm-fd-smooth-periodic-incompressible-ivp]]

[[lem-fd-torus-mean-zero-poincare]]

[Kuksin and Shirikyan, Mathematics of Two-Dimensional Turbulence, §2.1.5, Exercise 2.1.14](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

[Hou, lecture notes, energy identity (3.1)](https://math.stanford.edu/~ryzhik/SCHOOL-13/hou_notes.pdf)

[Tong, Fluid Mechanics, Chapter 2, §3.1.2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Facts & Assumptions

**Given:** Countable Choice; the data and conventions in the Statement; and the smooth solution on its local lifespan.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[thm-fd-smooth-periodic-incompressible-ivp]]: under Countable Choice, for $d\in\{1,2,3\}$, integer $s\ge4$, $\nu\ge0$, and smooth real divergence-free data on the normalized $2\pi$-periodic torus, a unique smooth solution exists on an interval whose length depends on $d,s,\|u_0\|_{H^s}$ and is independent of $\nu$ and higher Sobolev norms; its full equation has mean-zero pressure.

[F2] [[lem-fd-torus-mean-zero-poincare]]: every smooth zero-mean field on this normalized torus satisfies $\|f\|_{L^2}\le\|\nabla f\|_{L^2}$.

## Proof

1.1 By [F1], $u$ is smooth, divergence-free, and periodic and satisfies the full equation in the Statement. Taking the $L^2$ inner product with $u$ gives $\frac12\frac{d}{dt}\|u\|_2^2=-\int (u\cdot\nabla u)\cdot u\,d\mu-\int\nabla\pi\cdot u\,d\mu+\nu\int u\cdot\Delta u\,d\mu$. The transport integral is $\frac12\int u\cdot\nabla|u|^2\,d\mu=0$, since it is the integral of a periodic divergence and $\operatorname{div}u=0$. Periodic integration by parts gives $\int\nabla\pi\cdot u\,d\mu=-\int\pi\,\operatorname{div}u\,d\mu=0$ and $\int u\cdot\Delta u\,d\mu=-\|\nabla u\|_2^2$. Hence $\frac12\frac{d}{dt}\|u\|_2^2=-\nu\|\nabla u\|_2^2$. [given, A1, F1, algebra]

2.1 Integrating the differential identity in step 1.1 from $0$ to $t$ and using $u(0)=u_0$ gives the asserted energy balance. [given, step 1.1, algebra]

2.2 Integrating the full equation from step 1.1 over $Q_d$ shows that each component of $\int_{Q_d}u\,d\mu$ has derivative zero: the transport is $\operatorname{div}(u_i u)$, the pressure term is a periodic derivative, and the Laplacian term is a sum of periodic second derivatives. Since the initial mean is zero, $\bar u(t)=0$ throughout the lifespan. [given, F1, step 1.1, algebra]

3.1 If $\nu>0$, [F2] and step 1.1 imply $\frac{d}{dt}\|u(t)\|_2^2\le-2\nu\|u(t)\|_2^2$. Differentiating $e^{2\nu t}\|u(t)\|_2^2$ therefore gives a nonpositive derivative, so $\|u(t)\|_2^2\le e^{-2\nu t}\|u_0\|_2^2$. Taking nonnegative square roots proves the stated decay. [given, F2, step 1.1, step 2.2, algebra] ∎