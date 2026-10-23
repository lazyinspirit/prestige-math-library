---
id: ex-fd-x11-application
kind: example
title: Linear vortex-sheet growing modes — worked interpretation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
deps:
  - thm-fd-x11
dependency_roles:
  thm-fd-x11: mathematical-premise
scope: "Equal-density, no-gravity/no-surface-tension linear interface model with U+=1, U_-=-1, and k=1. It verifies one exact real growing mode and makes no nonlinear transition or experimental claim."
---

## Example

On the periodic interface $x\in\mathbb T_{2\pi}$, where $\mathbb T_{2\pi}=\mathbb R/(2\pi\mathbb Z)$, with half-planes $y>0$ and $y<0$, take equal density $\rho_0=1$, base velocities $U_+=1$ and $U_-=-1$, and no gravity or surface tension. For $t\ge0$, define
$$\eta(x,t)=e^t\cos x,\qquad \phi_+(x,y,t)=e^{t-y}(\sin x-\cos x),\qquad \phi_-(x,y,t)=e^{t+y}(\cos x+\sin x).$$
The potentials are harmonic and decay at their respective infinities; at $y=0$ they satisfy $(\partial_t+U_\pm\partial_x)\eta=\partial_y\phi_\pm$ and continuity of $p'_\pm=-(\partial_t+U_\pm\partial_x)\phi_\pm$. Thus these fields give an exact real growing mode of the stipulated linear interface equations.

## Facts & Assumptions

**Given:** The periodic interface equations, equal density, base speeds, mode fields and pressure definitions in [A1].

[A1] $x\in\mathbb T_{2\pi}$, $y>0$ above and $y<0$ below, $t\ge0$, $\rho_0=1$, $U_+=1$, $U_-=-1$, $\Delta\phi_\pm=0$, decay of $\phi_\pm$ and their first derivatives at the corresponding infinities, $(\partial_t+U_\pm\partial_x)\eta=\partial_y\phi_\pm$ at $y=0$, and $p'_\pm=-(\partial_t+U_\pm\partial_x)\phi_\pm$ with $p'_+=p'_-$; gravity and surface tension are absent.

[F1] [[thm-fd-x11]]: for equal positive densities and the stated harmonic linear interface conditions without gravity or surface tension, a normal mode with $k>0$ has $\lambda=-ik\overline U\pm k|\Delta U|/2$; nonzero velocity jump gives the positive real branch.

## Verification

1.1 The $x$-dependence of each potential is a sine or cosine and its $y$-dependence is $e^{-y}$ above or $e^y$ below, so $\partial_{xx}\phi_\pm=-\phi_\pm$ and $\partial_{yy}\phi_\pm=\phi_\pm$. Hence $\Delta\phi_\pm=0$, and the exponential factors give the required decay. [given, A1, algebra]

1.2 At $y=0$, $(\partial_t+\partial_x)\phi_+=2e^t\sin x$ and $(\partial_t-\partial_x)\phi_-=2e^t\sin x$. Therefore $p'_+=p'_-=-2e^t\sin x$, so pressure continuity holds. [given, A1, algebra]

2.1 At $y=0$, $(\partial_t+\partial_x)\eta=e^t(\cos x-\sin x)=\partial_y\phi_+$, while $(\partial_t-\partial_x)\eta=e^t(\cos x+\sin x)=\partial_y\phi_-$. Thus both kinematic conditions hold. [given, A1, step 1.1, algebra]

3.1 Here $k=1$, $\overline U=0$, and $\Delta U=2$. The growing branch in [F1] has $\lambda=1$, agreeing with the explicit factor $e^t$ in $\eta$; this is one exact linear-model example only. [given, A1, F1, algebra] ∎
