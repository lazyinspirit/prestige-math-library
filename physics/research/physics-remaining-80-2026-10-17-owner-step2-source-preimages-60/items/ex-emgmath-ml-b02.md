---
id: ex-emgmath-ml-b02
kind: example
title: Explicit local conduction-energy calculation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
proof_strategy: direct
deps:
  - thm-emg-charged-fluid-projections
  - def-emg-matter-formal-systems
dependency_roles:
  thm-emg-charged-fluid-projections: mathematical-premise
  def-emg-matter-formal-systems: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equation (1.110), PDF p. 36 (printed p. 30)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Perfect-fluid rest-frame tensor convention; the prescribed-field current and energy balance are calculated explicitly here."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, 2019, §4.5.4, equations (4.53)–(4.55), PDF pp. 192–194 (printed pp. 185–187)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Perfect-fluid stress and longitudinal/spatial projections; the current and imposed Ohmic relation are additional mathematical hypotheses in this example."
verification:
  precheck: pending
---

## Example

On Minkowski space with length coordinates $x^0=ct$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and future time-orientation $N=\partial_0$, choose constants with SI units $[E_0]=\mathrm{V\,m^{-1}}$, $[\chi]=\mathrm{S\,m^{-1}}$, and $[\epsilon_i]=[p_0]=\mathrm{J\,m^{-3}}$, with $E_0\ne0$, $\chi>0$, $\epsilon_i>0$, and $p_0\in\mathbb R$. The open interval $I=(-\epsilon_i/(2\chi E_0^2),\epsilon_i/(2\chi E_0^2))$ has units of seconds; define

$$U=c\partial_0,\quad \mathbf E=E_0\mathbf e_x,\quad \mathbf B=0,\quad \epsilon(t)=\epsilon_i+\chi E_0^2t,\quad p=p_0,\quad \sigma=0,\quad q^a=(0,\chi E_0,0,0).$$

Let $F_{01}=-E_0/c$ with all other independent components zero, and set $j=q$. The interval ensures $\epsilon(t)>0$. The imposed field is a fixed background for the matter calculation; the nonzero current is not claimed to solve its Maxwell equation.

## Facts & Assumptions

**Given:** The stated fields on $\mathbb R^3\times I$, with $\chi,E_0,\epsilon_i>0$ and $U=(c,0,0,0)$.

[F1] [[def-emg-matter-formal-systems]]: $T_m^{ab}=(\epsilon+p)U^aU^b/c^2+pg^{ab}$, $E_U^a=F^a{}_bU^b$, and the formal exchange force is $f^b=F^b{}_cj^c$.

[F2] [[thm-emg-charged-fluid-projections]]: if $q\cdot U=0$ and $q=\chi E_U$, then the comoving exchange term is $-U_bf^b=\chi g(E_U,E_U)$.

[A1] The current is imposed as $j=q$ with $q^aU_a=0$; the fixed $F$ is not asserted to satisfy the sourced Maxwell equation.

## Verification

1.1 The chosen $q$ is orthogonal to $U$, and $E_U^1=F^1{}_0U^0=(E_0/c)c=E_0$, with its other components zero. Thus $q=\chi E_U$. The stress tensor has $T_m^{00}=\epsilon(t)$, $T_m^{ii}=p_0$, and zero off-diagonal components, so $\nabla_aT_m^{a0}=\partial_0\epsilon=(1/c)d\epsilon/dt=\chi E_0^2/c$ while $\nabla_aT_m^{ai}=0$. [F1, A1, algebra]

2.1 Raising the first index with $\eta$ gives $F^0{}_1=E_0/c$ and $F^i{}_1=0$ for $i=1,2,3$. Hence $f^0=F^0{}_1q^1=\chi E_0^2/c$ and $f^i=0$. The component equations verify $\nabla_aT_m^{ab}=f^b$, and [F2] gives $-U_bf^b=\chi E_0^2>0$. [F1, F2, step 1.1, algebra]

3.1 Since $F$ is constant, $\nabla_aF^{ab}=0$, whereas $-\mu_0j^1=-\mu_0\chi E_0\ne0$. Thus the matter exchange and positive heating calculation is conditional on the imposed background and is not a sourced Maxwell solution. [F1, A1, algebra] ∎

## Remarks

The calculation is local and includes no equation of state, entropy balance, electromagnetic backreaction, or global fluid solution. The units $[\chi]=\mathrm{S\,m^{-1}}$ and $[E_0]=\mathrm{V\,m^{-1}}$ make $\chi E_0^2$ a power density, but the example reports no measurement.
