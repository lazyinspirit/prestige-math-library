---
id: ex-fd-compressible-viscous-shear
kind: example
title: "Exact constant-density compressible viscous shear"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - thm-fd-compatible-wall-shear-heat
  - def-countable-choice
dependency_roles:
  thm-fd-compatible-wall-shear-heat: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2, §§3.2.1–3.2.3"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

Assume Countable Choice. Let $\ell,\rho_*,\eta,\kappa>0$, $\gamma>1$, $\zeta\ge0$, and $A\in\mathbb R$. On $\mathbb T^3_\ell=(\mathbb R/2\pi\ell\mathbb Z)^3$ with coordinates $(x,y,z)$, set $\nu=\eta/\rho_*$, $p_*=\kappa\rho_*^\gamma$, and $V(t,y)=Ae^{-\nu t/\ell^2}\sin(y/\ell)$. Then $\rho=\rho_*$ and $u=(V,0,0)$ give a global smooth solution with no external force of
$$\rho_t+\operatorname{div}(\rho u)=0,\qquad (\rho u)_t+\operatorname{div}(\rho u\otimes u)+\nabla(\kappa\rho^\gamma)=\operatorname{div}\!\left(2\eta D_0+\zeta(\operatorname{div}u)I\right),$$
where $D_0=(\nabla u+\nabla u^{\mathsf T})/2-(\operatorname{div}u)I/3$. This is the first sine heat mode of the compatible channel shear evolution at channel height $h=\pi\ell$, periodically extended in $y$. It is one exact solution of the compressible viscous system, not a general nonconstant-density existence result. With SI units, $x,y,z,\ell$ are metres, $t$ is seconds, $A,u$ are m/s, $\rho_*$ is kg/m$^3$, $p_*$ is Pa, $\eta,\zeta$ are Pa$\cdot$s, $\kappa$ is Pa$\cdot$(m$^3$/kg)$^\gamma$, and $\nu$ is m$^2$/s.

## Example references

[[thm-fd-compatible-wall-shear-heat]]

[[def-countable-choice]]

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.2.1–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Verification
**Given:** Countable Choice, the torus, constants, constitutive stress, and compressible equations in the Example.

[F1] For channel height $h=\pi\ell$, the sine-mode heat evolution has terms $b_ne^{-\nu(n\pi/h)^2t}\sin(n\pi y/h)$ and is smooth for compatible odd periodic data ([[thm-fd-compatible-wall-shear-heat]]).

[A1] Countable Choice is carried from the compatible shear theorem's Fourier-basis input ([[def-countable-choice]]).

[A2] The conservative mass and momentum equations and Newtonian stress tensor displayed in the Example are the mathematical system being checked; no empirical constitutive assertion is made.

1.1 Take $F(y)=A\sin(y/\ell)$ on $0\le y\le\pi\ell$. Its odd extension has period $2\pi\ell$ and is smooth. Under Countable Choice [A1], the channel Fourier formula [F1] has all sine coefficients zero except $b_1=A$, because $2/(\pi\ell)\int_0^{\pi\ell}A\sin^2(y/\ell)\,dy=A$. The resulting $V=Ae^{-\nu t/\ell^2}\sin(y/\ell)$ is smooth and $2\pi\ell$-periodic in $y$, so it defines the stated torus field and satisfies $V_t=\nu V_{yy}$. [given, F1, A1, algebra]

2.1 Since $u=(V(y),0,0)$ is independent of $x$ and $\rho$ is constant, $\rho_t=0$ and $\operatorname{div}(\rho u)=\rho_*\partial_xV=0$. Thus the mass equation in [A2] holds. [given, step 1.1, A2, algebra]

3.1 We have $\operatorname{div}u=0$, $u\cdot\nabla u=V\partial_xu=0$, and $\nabla(\kappa\rho_*^\gamma)=0$. The symmetric gradient has only $xy$ and $yx$ entries, each $V_y/2$, so it is trace-free and $D_0=D$. Therefore $\operatorname{div}(2\eta D_0)=\eta\Delta u=(\eta V_{yy},0,0)$ and the bulk-viscosity term is zero. The momentum left side in [A2] is $(\rho_*V_t,0,0)=(\eta V_{yy},0,0)$ by step 1.1 and $\nu=\eta/\rho_*$, so the momentum equation holds. This verifies the exact solution for all $t\ge0$. [given, step 1.1, A2, algebra] ∎

