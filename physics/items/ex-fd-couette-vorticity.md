---
id: ex-fd-couette-vorticity
kind: example
title: "Couette shear vorticity and volume flux"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-fd-flat-channel-domains]
dependency_roles:
  def-fd-flat-channel-domains: mathematical-premise
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

Let $L_1,L_2,h>0$ and $V\in\mathbb R$ on the periodic flat channel $\Omega=(\mathbb R/L_1\mathbb Z)\times(0,h)\times(\mathbb R/L_2\mathbb Z)$. For the steady incompressible equations $\rho(u\cdot\nabla)u=-\nabla p+\eta\Delta u$ with $\rho,\eta>0$, prescribe no body force, constant pressure, stationary lower wall, and top-wall velocity $(V,0,0)$. The field $u=(Vy/h,0,0)$ is a solution, its vorticity is $\omega=\nabla\times u=(0,0,-V/h)$, and its volume flux per unit transverse width, defined for a shear $u=(U(y),0,0)$ by $Q=\int_0^h U(y)\,dy$, is $Vh/2$. Its vorticity is nonzero exactly when $V\ne0$. The velocity is unique among solutions $\widetilde u:\overline\Omega\to\mathbb R^3$ of the form $\widetilde u=(\widetilde U(y),0,0)$ with $\widetilde U\in C^2([0,h];\mathbb R)$, spatially constant scalar pressure $\widetilde p:\overline\Omega\to\mathbb R$, and wall values $\widetilde U(0)=0$, $\widetilde U(h)=V$; the pressure constant is arbitrary. With SI units, $x,y,z,L_1,L_2,h$ are metres, $V$ and $u$ are m/s, $\rho$ is kg/m$^3$, $\eta$ is Pa$\cdot$s, pressure is Pa, vorticity is s$^{-1}$, and flux per unit width is m$^2$/s.

## Example references

[[def-fd-flat-channel-domains]]

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.2.1–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Verification
**Given:** The periodic channel, steady momentum equation, and wall velocities in the Example.

[F1] The channel has periodic coordinates $x,z$ and boundary faces $y=0,h$; for the stated $x$-directed shear, $x$ is streamwise and $z$ is transverse; a prescribed wall velocity is its trace on those faces ([[def-fd-flat-channel-domains]]).

[A1] The steady incompressible momentum equation and zero forcing stated in the Example are the system being checked.

1.1 For $U(y)=Vy/h$, the traces are $U(0)=0$, $U(h)=V$, and $U''=0$. The field $u=Ue_x$ has zero divergence and zero convective term because $u\cdot\nabla u=U\partial_xu=0$. With constant pressure, $-\nabla p+\eta\Delta u=0$, so the equation [A1] holds. [given, F1, A1, algebra]

2.1 By the coordinate formula for curl, $\nabla\times(U(y),0,0)=(0,0,-U'(y))=(0,0,-V/h)$. The flux is $\int_0^hVy/h\,dy=Vh/2$. For any competing field in the class stated in the Example, constant pressure and zero convection reduce the streamwise equation to $\eta\widetilde U^{\prime\prime}=0$. Thus $\widetilde U-U$ has zero second derivative and zero endpoint values, hence is the zero affine function. Since $h>0$, the computed vorticity vanishes exactly when $V=0$. [step 1.1, A1, algebra] ∎

