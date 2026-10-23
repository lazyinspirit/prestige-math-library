---
id: ex-fd-couette-vorticity
kind: example
title: "Couette shear has nonzero vorticity"
status: draft
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
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2, §§3.2.1–3.2.3"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pass
---

## Example

Let $L_1,L_2,h>0$ and $V\in\mathbb R$ on the periodic flat channel $\Omega=(\mathbb R/L_1\mathbb Z)\times(0,h)\times(\mathbb R/L_2\mathbb Z)$. For the steady incompressible equations $\rho(u\cdot\nabla)u=-\nabla p+\eta\Delta u$ with $\rho,\eta>0$, prescribe no body force, constant pressure, stationary lower wall, and top-wall velocity $(V,0,0)$. The field $u=(Vy/h,0,0)$ is a solution, its vorticity is $\omega=\nabla\times u=(0,0,-V/h)$, and its flux per unit transverse width is $Vh/2$. It is the unique solution within the unidirectional shear class with those wall velocities. With SI units, $x,y,z,L_1,L_2,h$ are metres, $V$ and $u$ are m/s, $\rho$ is kg/m$^3$, $\eta$ is Pa$\cdot$s, pressure is Pa, vorticity is s$^{-1}$, and flux per unit width is m$^2$/s.

## Example references

[[def-fd-flat-channel-domains]]

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.2.1–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Verification
**Given:** The periodic channel, steady momentum equation, and wall velocities in the Example.

[F1] The channel has periodic streamwise coordinates and boundary faces $y=0,h$; a prescribed wall velocity is its trace on those faces ([[def-fd-flat-channel-domains]]).

[A1] The steady incompressible momentum equation and zero forcing stated in the Example are the system being checked.

1.1 For $U(y)=Vy/h$, the traces are $U(0)=0$, $U(h)=V$, and $U''=0$. The field $u=Ue_x$ has zero divergence and zero convective term because $u\cdot\nabla u=U\partial_xu=0$. With constant pressure, $-\nabla p+\eta\Delta u=0$, so the equation [A1] holds. [given, F1, A1, algebra]

2.1 By the coordinate formula for curl, $\nabla\times(U(y),0,0)=(0,0,-U'(y))=(0,0,-V/h)$. The flux is $\int_0^hVy/h\,dy=Vh/2$. If another unidirectional shear solves [A1] with the same two wall traces, its difference from $U$ has zero second derivative and zero endpoint values, hence is the zero affine function. [step 1.1, A1, algebra] ∎

