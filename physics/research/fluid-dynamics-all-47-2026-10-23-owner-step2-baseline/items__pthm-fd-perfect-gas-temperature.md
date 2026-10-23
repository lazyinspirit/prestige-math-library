---
id: pthm-fd-perfect-gas-temperature
kind: physics-theorem
title: "Perfect-gas entropy, isentropic law and temperature balance"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-fd-continuum-balances
  - post-fd-local-equilibrium
  - def-fd-quantity-and-frame-conventions
  - lem-fd-gibbs-entropy-residual
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  post-fd-local-equilibrium: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-gibbs-entropy-residual: mathematical-premise
justified_by: []
aliases: []
physical_scope: >-
  Conditional smooth local-equilibrium calculation for an explicitly adopted
  calorically perfect gas with positive specific gas constant and specific
  heat. The temperature equation includes stress, heat flux and heat supply;
  entropy constancy and the isentropic pressure law are restricted to the
  stated adiabatic, inviscid, unsourced branch. No empirical gas data or
  universal gas model is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part III lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
      locator: "§§4.4.2–4.4.3, printed pp. 146–149"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§§6.1.4 and 6.5.2, printed pp. 224–226 and 243–244"
verification:
  precheck: pending
---

## Statement

Assume the complete smooth material, state, contact and mass/momentum/angular-momentum/total-energy balance hypotheses of the mathematical Gibbs-entropy identity, including $\mathrm{AC}_\omega$, as stated in Facts & Assumptions. Let $R>0$ be a specific gas constant and $c_v>0$ a constant specific heat at constant volume, both in $\mathrm{J\,kg^{-1}\,K^{-1}}$. Choose reference values $T_{\mathrm{ref}}>0$ in $\mathrm K$, $\rho_{\mathrm{ref}}>0$ in $\mathrm{kg\,m^{-3}}$, and $s_{\mathrm{ref}}$ in $\mathrm{J\,kg^{-1}\,K^{-1}}$. On $v>0,\ s\in\mathbb R$, adopt
$$ T(v,s)=T_{\mathrm{ref}}\exp\!\left(\frac{s-s_{\mathrm{ref}}}{c_v}\right) \left(\frac{1}{\rho_{\mathrm{ref}}v}\right)^{R/c_v},\qquad e(v,s)=c_vT(v,s),\qquad p(v,s)=\frac{R\,T(v,s)}{v}. $$
These formulas give $T=e_s>0$, $p=-e_v$, and $e\in C^2((0,\infty)\times\mathbb R)$; equivalently, with $\rho=1/v$, $s=s_{\mathrm{ref}}+c_v\ln(T/T_{\mathrm{ref}})-R\ln(\rho/\rho_{\mathrm{ref}})$ and $p=\rho RT$. The logarithms have dimensionless arguments.

For a smooth solution, define $\theta=\operatorname{div}u$, $\sigma=-pI_3+\tau$, and the local entropy residual $\mathcal G=\rho D_ts+\operatorname{div}(q/T)-\rho r/T$. The temperature balance is
$$ \rho c_vD_tT=-p\theta+\tau:D-\operatorname{div}q+\rho r. $$
On the additional adiabatic, inviscid, unsourced branch $\tau=0,\ q=0,\ r=0$, one has $D_ts=0$. Along any trajectory on which the entropy value is $s_0$, the pressure law is
$$ p=K(s_0)\rho^\gamma,\qquad \gamma=1+\frac{R}{c_v},\qquad K(s_0)=RT_{\mathrm{ref}}\exp\!\left(\frac{s_0-s_{\mathrm{ref}}}{c_v}\right) \rho_{\mathrm{ref}}^{-R/c_v}>0. $$
The factor $K(s_0)$ can differ between trajectories with different entropy values. The gas closure is an adopted model, and the adiabatic conclusion does not apply when viscous work, heat conduction, or heat supply is present.

## Statement references

[David Tong, *Fluid Mechanics*, Part III lecture notes, §§4.4.2–4.4.3, printed pp. 146–149](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §§6.1.4 and 6.5.2, printed pp. 224–226 and 243–244](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** The smooth positive-density material and balance hypotheses, the adopted local state relation, and the explicit perfect-gas constants and reference scales in the Statement.

[A1] [[post-fd-continuum-balances]]: smooth positive-density material fields obey no-source mass conservation and the separate contact, linear/angular-momentum, total-energy, and entropy assumptions on material subregions. These are physical premises, not conclusions. Its current batch-3 carrier and source-backed formulation were inspected, and step1Decision currently reports ready.

[A2] [[post-fd-local-equilibrium]]: $T=e_s(v,s)>0$, $p=-e_v(v,s)$, and $\rho=1/v$ are adopted pointwise equilibrium values. The current batch-11 Postulate states this local relation and its positive-temperature scope.

[L1] [[lem-fd-gibbs-entropy-residual]]: under $\mathrm{AC}_\omega$, the stated $C^2$ orientation-preserving motion, positive $C^1$ state fields, local contact and stress regularity, continuity equation, and separate linear/angular-momentum and total-energy integral balances, one obtains $\sigma=\sigma^T$ and $\rho D_te=\sigma:D-\operatorname{div}q+\rho r$. The exact Gibbs interface applies under all displayed assumptions; its proof step 3.1 supplies time recentering on any nonempty open interval.

[F1] [[def-fd-quantity-and-frame-conventions]]: $D_t=\partial_t+u\cdot\nabla$, $\theta=\operatorname{div}u$, and the SI types for $\rho,u,T,s,e,p$. Its current batch-3 carrier was inspected; step1Decision currently reports ready. Continuity itself is the separate hypothesis in [L1].

[A3] The positive constants, reference scales, and calorically perfect state relation are adopted assumptions. No equipartition argument, measured heat capacity, or empirical gas data is used.

## Proof

1.1 Differentiate the entropy formula along a material trajectory. The chain rule gives $D_ts=(c_v/T)D_tT-(R/\rho)D_t\rho$. The continuity equation in [L1] is $D_t\rho+\rho\theta=0$, so $D_t\rho=-\rho\theta$. Hence $\rho T D_ts=\rho c_vD_tT+\rho RT\theta=\rho c_vD_tT+p\theta$. [A1, A2, A3, F1, L1, algebra]

2.1 The local internal-energy equation from [L1] and $\sigma=-pI_3+\tau$ give $\rho D_te=-p\theta+\tau:D-\operatorname{div}q+\rho r$, since $I_3:D=\theta$. With $e=c_vT$, this is the stated full temperature balance. [A1, A2, A3, L1, step 1.1, algebra]

3.1 If $\tau=q=r=0$, the temperature equation gives $D_tT=-(R/c_v)T\theta$. Substitution in the differentiated entropy formula of step 1.1 yields $D_ts=-(R\theta)+(R\theta)=0$. [A3, step 1.1, step 2.1, algebra]

4.1 On a trajectory with entropy value $s_0$, solve the entropy formula for $T/T_{\mathrm{ref}}=\exp((s_0-s_{\mathrm{ref}})/c_v)(\rho/\rho_{\mathrm{ref}})^{R/c_v}$. Using $p=\rho RT$, collect powers of $\rho$ to obtain $p=K(s_0)\rho^{1+R/c_v}$ with the displayed positive $K(s_0)$. Its dependence on $s_0$ shows that different entropy levels can have different coefficients. [A3, step 3.1, algebra] ∎

