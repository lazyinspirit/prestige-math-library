---
id: pthm-td-joule-thomson-chart
kind: physics-theorem
title: Joule-Thomson coefficient on a valid Gibbs chart
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Local derivative identity for a closed-composition system on a positive-temperature C2 Gibbs response chart with nonzero constant-pressure heat capacity; it does not assert an open-flow throttle balance, a sign of cooling, or an empirical material coefficient.
deps:
  - def-td-legendre-potentials
  - def-td-response-functions
  - def-td-si-quantities
  - pthm-td-potential-differentials
  - pthm-td-maxwell-relations
dependency_roles:
  def-td-legendre-potentials: formulation-prerequisite
  def-td-response-functions: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  pthm-td-potential-differentials: physical-result
  pthm-td-maxwell-relations: physical-result
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.10.7
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.10:_Applications_of_Thermodynamics
    - title: Jeremy Tatum, Heat and Thermodynamics, §12.6, Joule and Joule-Thomson Coefficients
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/12:_Free_Energy/12.06:_The_Joule_and_Joule-Thomson_Coefficients
dependency_level: 10
---

## Statement

On a C2 Gibbs chart $G(T,p,n)$ at fixed composition $n$, with $T>0$, $V>0$, finite $C_p>0$, and a valid local inverse between $(T,p,n)$ and $(H,p,n)$, define the **Joule-Thomson coefficient** by

$$\mu_{JT}:=\left(\frac{\partial T}{\partial p}\right)_{H,n}.$$

Then

$$\mu_{JT}=\frac{T(\partial V/\partial T)_{p,n}-V}{C_p}=\frac{V(T\alpha_p-1)}{C_p},$$

where $\alpha_p=V^{-1}(\partial V/\partial T)_{p,n}$ and $C_p=(\partial H/\partial T)_{p,n}$ are the response functions of [[def-td-response-functions]]. This is a local derivative identity. It does not prove that a real throttle is isenthalpic or that a particular substance cools under expansion.

## Facts & Assumptions

**Given:** A fixed-composition open C2 chart with valid $(T,p,n)$ and $(H,p,n)$ coordinates, $T,V,C_p>0$, and the potentials defined in [[def-td-legendre-potentials]].

[F1] [[pthm-td-potential-differentials]]: On a valid chart, $dH=T\,ds+V\,dp+\sum_j\mu_j\,dn_j$ and $dG=-s\,dT+V\,dp+\sum_j\mu_j\,dn_j$.

[F2] [[pthm-td-maxwell-relations]]: For the Gibbs chart, $s_p|_{T,n}=-V_T|_{p,n}$.

[F3] [[def-td-response-functions]]: $C_p=H_T|_{p,n}$ and $\alpha_p=V^{-1}V_T|_{p,n}$ on a valid response chart.

[F4] [[def-td-legendre-potentials]]: $H=U+pV$ and $G=H-Ts$ on their local natural-variable charts.

[F5] [[def-td-si-quantities]]: $p$ is in pascals, $V$ in cubic metres, $U,H,G$ in joules, and $T$ in kelvins, with $\mathrm{Pa\,m^3=J}$.

## Proof

1.1 At fixed $n$, write $ds=s_T|_{p,n}\,dT+s_p|_{T,n}\,dp$ in [F1]. The enthalpy $H$ and chart are those of [F4]. Since $C_p=H_T|_{p,n}$ and $dH=T\,ds+V\,dp$, the coefficient of $dT$ gives $C_p=T s_T|_{p,n}$. Therefore $dH=C_p\,dT+(T s_p|_{T,n}+V)\,dp$. [given, F1, F3, F4, algebra]

2.1 Substitute the Maxwell relation [F2] into step 1.1 to obtain $dH=C_p\,dT+(V-T V_T|_{p,n})\,dp$. [F2, step 1.1, algebra]

3.1 Along a curve of constant $H$ and fixed $n$, step 2.1 gives $0=C_p\,dT+(V-T V_T|_{p,n})\,dp$. The assumed $(H,p,n)$ chart and $C_p>0$ therefore give $\mu_{JT}=(T V_T|_{p,n}-V)/C_p$. [given, F3, step 2.1, algebra]

4.1 Substitute $V_T|_{p,n}=V\alpha_p$ from [F3] to obtain $\mu_{JT}=V(T\alpha_p-1)/C_p$. Its units are $\mathrm{K\,Pa^{-1}}$ by [F5]. [F3, F5, step 3.1, algebra] ∎

## Remarks

An actual steady insulated throttle has constant upstream/downstream enthalpy only under an additional open-flow energy balance, negligible heat transfer and shaft work, and negligible kinetic and potential energy changes. This theorem is solely the derivative calculation on a specified equilibrium chart.
