---
id: ex-fd-x10-application
kind: example
title: Conditional nonlinear Couette energy stability — worked interpretation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
proof_strategy: direct
deps:
  - def-countable-choice
  - def-fd-quantity-and-frame-conventions
  - post-fd-boundary-data
  - pthm-fd-px10-prediction
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  post-fd-boundary-data: operational-prerequisite
  pthm-fd-px10-prediction: physical-result
physical_scope: >-
  Exact single-mode smooth solution in a periodic channel with Couette wall
  velocities. It verifies one conditional energy-decay instance and does not
  imply global existence, an optimal threshold, or an observed transition value.
empirical_premises: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$. Take SI values $h=1$ metre, $L_x=L_z=2\pi$ metres, $S=1$ inverse second, $\rho_0=1$ kilogram per cubic metre, and $\mu=1$ pascal-second, so $\nu=\mu/\rho_0=1$ square metre per second. Let $T>0$ seconds and choose an amplitude $a\ne0$ metres per second. On $Q=\mathbb T_{2\pi\,\mathrm m}\times(0,1\,\mathrm m)\times\mathbb T_{2\pi\,\mathrm m}$, set $p=p_0$ constant and

$$u(x,y,z,t)=\left(y+a e^{-\nu\pi^2t/h^2}\sin\!\left(\frac{\pi y}{h}\right),0,0\right),\qquad 0\le t\le T.$$

The field is periodic in $x,z$, divergence-free, and has Couette wall values $0$ at $y=0$ and $Sh(1,0,0)$ at $y=h$. Its perturbation energy is $E(t)=E(0)e^{-2\nu\pi^2t/h^2}$. Since $|S|h^2/\nu=1<2$, this exact decay is stronger than the sufficient bound $E(t)\le e^{-(2\nu/h^2-|S|)t}E(0)$ for every $t\in[0,T]$.

## Facts & Assumptions

**Given:** The SI parameters, periodic channel, constant pressure, amplitude, and velocity field in the Example.

[F1] [[def-fd-quantity-and-frame-conventions]]: time is in seconds, length in metres, velocity in metres per second, and the selected Newtonian viscosity and density have units Pa s and kg m$^{-3}$.

[F2] [[post-fd-boundary-data]]: the chosen no-slip data match the wall velocity at both channel walls; the horizontal cell faces are periodic identifications.

[F3] [[pthm-fd-px10-prediction]]: an already-existing smooth solution with these periodic Couette data obeys the stated sufficient conditional energy estimate when $|S|h^2/\nu<2$.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means every sequence of nonempty sets has a choice function; the example carries the exact mathematical assumption of [F3].

[A1] These parameters are selected model inputs, not measured values. The example is a constructed exact solution and supplies no empirical observation.

## Verification

1.1 The velocity depends only on $y,t$ in its first component, so $\nabla\cdot u=0$ and $(u\cdot\nabla)u=0$. Writing $w_x=a e^{-\nu\pi^2t/h^2}\sin(\pi y/h)$ gives $\partial_tw_x=-(\nu\pi^2/h^2)w_x$ and $\partial_{yy}w_x=-(\pi^2/h^2)w_x$; the Couette base $Sy$ has zero time derivative and Laplacian. Hence $\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0$. The sine term vanishes at both walls, and the remaining values are $0$ and $Sh$, so the no-slip boundary conditions hold. The field is smooth on the finite interval and constant, hence periodic, in $x,z$. [given, F1, F2, algebra]

2.1 The perturbation is $w=(a e^{-\nu\pi^2t/h^2}\sin(\pi y/h),0,0)$. Integrating over the fundamental cell and using $\int_0^h\sin^2(\pi y/h)\,dy=h/2$ gives $E(t)=L_xL_z(a^2h/2)e^{-2\nu\pi^2t/h^2}=E(0)e^{-2\nu\pi^2t/h^2}$. [given, step 1.1, algebra]

3.1 The selected parameters give $|S|h^2/\nu=1<2$ and $2\nu/h^2-|S|=1\,\mathrm{s}^{-1}$. Since $2\pi^2>1$, for $t\ge0$ we have $e^{-2\nu\pi^2t/h^2}\le e^{-(2\nu/h^2-|S|)t}$. Thus the computed energy satisfies the bound of [F3] throughout $[0,T]$. This is one model calculation, not a global-existence or experimental claim. [given, F3, F4, step 2.1, algebra] ∎
