---
id: pthm-td-compressibility-capacity-ratio
kind: physics-theorem
title: Ratio of isothermal and isentropic compressibilities
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Finite whole-system compressibility and heat-capacity ratio on a positive-temperature C2 simple-compressible chart at fixed composition with valid isothermal and isentropic response inverses, positive isothermal compressibility, and positive constant-volume heat capacity.
deps:
  - def-td-response-functions
  - def-td-isentropic-compressibility
  - pthm-td-potential-differentials
  - pthm-td-maxwell-relations
  - pthm-td-heat-capacity-relation
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-td-response-functions: formulation-prerequisite
  def-td-isentropic-compressibility: formulation-prerequisite
  pthm-td-potential-differentials: physical-result
  pthm-td-maxwell-relations: physical-result
  pthm-td-heat-capacity-relation: physical-result
  thm-chain-rule-for-total-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.10.5
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.10:_Applications_of_Thermodynamics
    - title: Jeremy Tatum, Heat and Thermodynamics, §13.3, Pressure and Temperature
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/13:_Expansion_Compression_and_the_TdS_Equations/13.03:_Pressure_and_Temperature
dependency_level: 11
---

## Statement

On an open C2 Helmholtz chart at fixed composition $n$, assume $T>0$, $C_V>0$, $\kappa_T>0$, and valid local response inverses for both the isothermal and isentropic compressibilities. Then $C_p>0$, $\kappa_S>0$, and

$$\frac{\kappa_T}{\kappa_S}=\frac{C_p}{C_V}.$$

The heat capacities are whole-system values; $\kappa_S$ is defined in [[def-td-isentropic-compressibility]]. The hypotheses exclude zero-capacity and singular-chart limits.

## Facts & Assumptions

**Given:** The valid fixed-composition charts and positivity assumptions in the Statement.

[A1] $C_V>0$ and $\kappa_T>0$ are explicit response hypotheses on this chart; they are not inferred from notation alone.

[F1] [[def-td-response-functions]]: $C_V=(\partial U/\partial T)_{V,n}$, $C_p=(\partial H/\partial T)_{p,n}$, $\kappa_T=-V^{-1}V_p|_{T,n}$, and $\alpha_p=V^{-1}V_T|_{p,n}$ on the valid response chart; these definitions assert no identities between response functions.

[F2] [[def-td-isentropic-compressibility]]: $\kappa_S=-V^{-1}V_p|_{s,n}$ on a valid isentropic inverse chart.

[F3] [[pthm-td-potential-differentials]]: $dU=T\,ds-p\,dV$ and $dH=T\,ds+V\,dp$ on the named valid charts.

[F4] [[pthm-td-maxwell-relations]]: $s_V|_{T,n}=p_T|_{V,n}$.

[F5] [[pthm-td-heat-capacity-relation]]: $C_p-C_V=TV\alpha_p^2/\kappa_T$ on the stated stable response chart.

[F6] [[thm-chain-rule-for-total-derivatives]]: Differentiating a composition gives the usual total-derivative chain rule.

## Proof

1.1 By [F1], $C_V=U_T|_{V,n}$. On the fixed-volume path in the Helmholtz chart, [F3] gives $dU=T\,ds$; composing with the chart map and applying [F6] yields $C_V=T s_T|_{V,n}$. Likewise, by [F1], $C_p=H_T|_{p,n}$, and on the fixed-pressure path in the Gibbs chart [F3] gives $dH=T\,ds$; the chain rule yields $C_p=T s_T|_{p,n}$. Thus at fixed $n$, $ds=(C_V/T)\,dT+p_T|_{V,n}\,dV$. Along an isentrope $ds=0$, the valid chart gives $T_V|_{s,n}=-T p_T|_{V,n}/C_V$. [given, A1, F1, F3, F6, algebra]

2.1 Differentiate $p(T,V,n)$ along the same isentrope using [F6]: $p_V|_{s,n}=p_V|_{T,n}+p_T|_{V,n}T_V|_{s,n}=p_V|_{T,n}-T(p_T|_{V,n})^2/C_V$. [F4, F6, step 1.1, algebra]

3.1 On the valid isothermal response inverse, $p(T,V(T,p,n),n)=p$. Differentiating this identity in $p$ at fixed $T,n$ gives $1=p_V|_{T,n}V_p|_{T,n}$; by [F1] and $\kappa_T>0$, $p_V|_{T,n}=-1/(V\kappa_T)$. Differentiating it in $T$ at fixed $p,n$ gives $0=p_T|_{V,n}+p_V|_{T,n}V_T|_{p,n}$, so [F1] yields $p_T|_{V,n}=\alpha_p/\kappa_T$. Thus [F5] is equivalently $C_p-C_V=-T(p_T|_{V,n})^2/p_V|_{T,n}$. Substitution into step 2.1 yields $p_V|_{s,n}=p_V|_{T,n}(C_p/C_V)$. Since $p_V|_{T,n}<0$ and $C_V>0$, [F5] also gives $C_p=C_V-T(p_T|_{V,n})^2/p_V|_{T,n}\ge C_V>0$, hence $p_V|_{s,n}<0$. [A1, F1, F5, F6, step 2.1, algebra]

4.1 On the valid isentropic inverse $V=V(s,p,n)$, the identity $p(s,V(s,p,n),n)=p$ gives $1=p_V|_{s,n}V_p|_{s,n}$ by [F6]. Hence the definitions [F1]–[F2] give $\kappa_T=-1/(V p_V|_{T,n})$ and $\kappa_S=-1/(V p_V|_{s,n})$. By step 3.1, $\kappa_T/\kappa_S=p_V|_{s,n}/p_V|_{T,n}=C_p/C_V$. All denominators are nonzero by the valid-chart and positivity hypotheses. [F1, F2, F6, step 3.1, algebra] ∎
