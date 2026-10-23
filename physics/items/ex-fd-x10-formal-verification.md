---
id: ex-fd-x10-formal-verification
kind: example
title: Conditional nonlinear Couette energy stability — formal worked field
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
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
  - thm-fd-x10
dependency_roles:
  thm-fd-x10: mathematical-premise
scope: "The exact smooth Couette perturbation field on a unit-height periodic channel; verifies the sufficient energy bound at |S|h^2/nu=1. It adds no general existence or transition claim and inherits the supplier's AC_omega qualification."
---

## Example

Assume $\mathrm{AC}_\omega$. Define $\mathbb T_{2\pi}=\mathbb R/(2\pi\mathbb Z)$ and let $Q=\mathbb T_{2\pi}\times(0,1)\times\mathbb T_{2\pi}$, with Lebesgue integration over one fundamental cell. Take $\rho_0=\mu=\nu=1$, $S=1$, base field $U_b=(y,0,0)$, and pressure $p=0$. For any $a\in\mathbb R$, set
$$u(x,y,z,t)=(y+a e^{-\pi^2t}\sin(\pi y),0,0),\qquad t\ge0.$$
This field is smooth, periodic in $x,z$, divergence-free, and has wall values $0$ at $y=0$ and $(1,0,0)$ at $y=1$. Its perturbation $w=u-U_b$ satisfies $\|w(t)\|_{L^2(Q)}^2=e^{-2\pi^2t}\|w(0)\|_{L^2(Q)}^2\le e^{-t}\|w(0)\|_{L^2(Q)}^2$. The sufficient parameter condition in the supplier is $|S|h^2/\nu=1<2$; this example verifies that conditional bound for one exact field.

## Facts & Assumptions

**Given:** The periodic channel, $\rho_0=\mu=\nu=1$, $S=1$, $h=1$, $p=0$, the field $u$, and $\mathrm{AC}_\omega$ as stated.

[A1] On $Q=\mathbb T_{2\pi}\times(0,1)\times\mathbb T_{2\pi}$, $\rho_0=\mu=\nu=1$, $u=(y+a e^{-\pi^2t}\sin(\pi y),0,0)$ for $t\ge0$, with periodic $x,z$, wall values $u|_{y=0}=0$, $u|_{y=1}=(1,0,0)$, and pressure $p=0$.

[F1] [[thm-fd-x10]]: for an already-existing smooth incompressible Navier-Stokes solution on a periodic channel of height $h$ with Couette shear $S$, if $|S|h^2/\nu<2$ and the theorem's stated dependencies hold, its perturbation energy satisfies $E(t)\le e^{-(2\nu/h^2-|S|)t}E(0)$ on the assumed smooth interval.

## Verification

1.1 The only nonzero component of $u$ is independent of $x$, so $\nabla\cdot u=0$ and $(u\cdot\nabla)u=0$. Direct differentiation gives $u_t=-a\pi^2e^{-\pi^2t}\sin(\pi y)(1,0,0)$ and $\Delta u=-a\pi^2e^{-\pi^2t}\sin(\pi y)(1,0,0)$; hence $u_t+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0$. Since $\sin(0)=\sin(\pi)=0$, the stated wall values hold. [given, A1, algebra]

2.1 The perturbation is $w=a e^{-\pi^2t}\sin(\pi y)(1,0,0)$. Integrating $\sin^2(\pi y)$ over $0<y<1$ and over both periods gives $E(t)=\|w(t)\|_{L^2(Q)}^2=2\pi^2a^2e^{-2\pi^2t}=e^{-2\pi^2t}E(0)$. [given, A1, step 1.1, algebra]

3.1 Here $|S|h^2/\nu=1$ and $2\nu/h^2-|S|=1$. Applying [F1] gives $E(t)\le e^{-t}E(0)$, while step 2.1 verifies the sharper exact decay because $2\pi^2\ge1$. The estimate is conditional on the stipulated supplier and assumptions. [given, A1, F1, step 2.1, algebra] ∎
