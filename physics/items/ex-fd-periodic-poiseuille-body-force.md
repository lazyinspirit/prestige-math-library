---
id: ex-fd-periodic-poiseuille-body-force
kind: example
title: "Periodic channel Poiseuille flow uses a body force"
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

Let $L_1,L_2,h,\rho,\eta,G>0$ and use the periodic flat channel $\Omega=(\mathbb R/L_1\mathbb Z)\times(0,h)\times(\mathbb R/L_2\mathbb Z)$. For the steady incompressible equations $\rho(u\cdot\nabla)u=-\nabla p+\eta\Delta u+\rho b$, $\operatorname{div}u=0$, prescribe no-slip walls and constant body acceleration $b=(G/\rho,0,0)$. Then
$$u(x,y,z)=\left(\frac{G}{2\eta}y(h-y),0,0\right),\qquad p=p_0$$
is an exact solution and its volume flux per unit transverse width, defined for $u=(U(y),0,0)$ by $Q=\int_0^h U(y)\,dy$, is $Gh^3/(12\eta)$. The formal pressure $p=p_0-Gx$ is not a single-valued periodic pressure. On the infinite flat channel $\mathbb R\times(0,h)\times\mathbb R$, the same velocity instead solves the zero-body-force equation with $p=p_0-Gx$. Among classical solutions of the form $\widetilde u(x,y,z)=(\widetilde U(y),0,0)$ with $\widetilde U\in C^2([0,h];\mathbb R)$, a single-valued pressure $p\in C^1(\Omega;\mathbb R)$, the same body force, and wall traces $\widetilde U(0)=\widetilde U(h)=0$, the velocity profile is unique. With SI units, $x,y,z,L_1,L_2,h$ are metres, $\rho$ is kg/m$^3$, $\eta$ is Pa$\cdot$s, $G$ is Pa/m, $b$ is m/s$^2$, $u$ is m/s, pressure is Pa, and flux per unit width is m$^2$/s.

## Example references

[[def-fd-flat-channel-domains]]

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.2.1–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Verification
**Given:** The channels, coefficients, equations, and boundary data in the Example.

[F1] The periodic and infinite flat channels have the coordinate domains and wall faces specified in the flat-channel definition ([[def-fd-flat-channel-domains]]).

[A1] The steady incompressible momentum equation and divergence constraint displayed in the Example are the system being checked; no empirical claim is made.

1.1 If pressure were $p_0-Gx$ on the periodic channel, its lift would satisfy $p(x+L_1,y,z)-p(x,y,z)=-GL_1\ne0$, contradicting periodicity. The constant periodic pressure together with $b=(G/\rho,0,0)$ preserves the same streamwise forcing in the stated equation. [given, F1, A1, algebra]

2.1 Write $U(y)=Gy(h-y)/(2\eta)$. Then $U(0)=U(h)=0$, $U''=-G/\eta$, $\operatorname{div}(Ue_x)=0$, and $(Ue_x\cdot\nabla)(Ue_x)=U\partial_x(Ue_x)=0$. The right side of [A1] is $0-0+\eta U''e_x+\rho(G/\rho)e_x=-Ge_x+Ge_x=0$, so the periodic profile solves the system. [given, step 1.1, A1, algebra]

3.1 Direct integration gives $\int_0^hU(y)\,dy=G(2\eta)^{-1}\int_0^h(hy-y^2)\,dy=Gh^3/(12\eta)$. Let $\widetilde u=(\widetilde U(y),0,0)$ and its single-valued periodic pressure $p$ be any competing classical shear solution in the class stated in the Example. The transverse components of the steady momentum equation give $\partial_y p=\partial_z p=0$, so $p=p(x)$. The streamwise component gives $\partial_xp=\eta\widetilde U''(y)+G$. The left side depends only on $x$ and the right side only on $y$, so both equal a constant $c$. Periodicity and single-valuedness give $0=p(x+L_1)-p(x)=\int_x^{x+L_1}\partial_xp(s)\,ds=cL_1$, hence $c=0$ and $\widetilde U''=-G/\eta=U''$. The common endpoint values imply that $\widetilde U-U$ is affine with zero values at $0$ and $h$, so it vanishes identically. [given, step 2.1, A1, algebra]

4.1 On the infinite channel, $p=p_0-Gx$ is single-valued and $-\nabla p=Ge_x$; with $b=0$, this term cancels $\eta\Delta(Ue_x)=-Ge_x$. The same divergence, convection, and wall calculations as step 2.1 apply, proving the infinite-channel solution. [step 2.1, F1, A1, algebra] ∎

