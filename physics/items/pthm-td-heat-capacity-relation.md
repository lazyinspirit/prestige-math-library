---
id: pthm-td-heat-capacity-relation
kind: physics-theorem
title: Heat-capacity relation on a stable response chart
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Whole-system heat capacities and response coefficients on a C2, positive-temperature, fixed-composition simple-compressible chart with a valid pressure-volume response inverse and positive isothermal compressibility; singular and critical charts are excluded.
deps:
  - def-td-response-functions
  - pthm-td-potential-differentials
  - pthm-td-maxwell-relations
  - thm-chain-rule-for-total-derivatives
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
dependency_roles:
  def-td-response-functions: formulation-prerequisite
  pthm-td-potential-differentials: physical-result
  pthm-td-maxwell-relations: physical-result
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-chain-sum-product-and-composition-rules-for-banach-derivatives: mathematical-premise
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
dependency_level: 10
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

On an open C2 Helmholtz chart $F(T,V,n)$ at fixed composition $n$, suppose $T>0$, $V>0$, the response coordinates $(T,p,n)$ have the local inverse required by [[def-td-response-functions]], and $\kappa_T>0$. Then

$$C_p-C_V=\frac{TV\alpha_p^2}{\kappa_T}.$$

Here $C_V,C_p$ are the whole-system heat capacities, $\alpha_p=V^{-1}(\partial V/\partial T)_{p,n}$, and $\kappa_T=-V^{-1}(\partial V/\partial p)_{T,n}$, all as in [[def-td-response-functions]]. The formula is a conditional model identity, not an empirical law or a claim at singular response points.

## Facts & Assumptions

**Given:** A fixed-composition open C2 chart with $T,V>0$, the valid local pressure response inverse, and finite derivatives in the Statement.

[F1] [[def-td-response-functions]]: $C_V=(\partial U/\partial T)_{V,n}$, $C_p=(\partial H/\partial T)_{p,n}$, $\kappa_T=-V^{-1}(\partial V/\partial p)_{T,n}$, and $\alpha_p=V^{-1}(\partial V/\partial T)_{p,n}$; the definitions assert no response identities.

[F2] [[pthm-td-potential-differentials]]: $dF=-s\,dT-p\,dV+\sum_j\mu_j\,dn_j$ and $dH=T\,ds+V\,dp+\sum_j\mu_j\,dn_j$ on valid charts.

[F3] [[pthm-td-maxwell-relations]]: $s_V|_{T,n}=p_T|_{V,n}$ on the Helmholtz chart.

[F4] [[thm-chain-rule-for-total-derivatives]]: Derivatives of compositions obey the total-derivative chain rule.

[F5] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: The derivative of a product of differentiable scalar maps is the sum of the two product terms.

## Proof

1.1 At fixed $V,n$, $U=F+Ts$ and $F_T=-s$ from [F2], so the product rule [F5] gives $C_V=U_T|_{V,n}=T s_T|_{V,n}$. At fixed $p,n$, $dH=T\,ds+V\,dp$ from [F2], hence $C_p=H_T|_{p,n}=T s_T|_{p,n}$. [given, F2, F5, algebra]

1.2 On the valid isothermal response inverse, write $V=V(T,p,n)$, so $p(T,V(T,p,n),n)=p$, where the rightmost $p$ is the independent pressure coordinate. Differentiating in that pressure coordinate at fixed $T,n$ gives $1=p_V|_{T,n}V_p|_{T,n}$. By [F1], $V_p|_{T,n}=-V\kappa_T$, hence $p_V|_{T,n}=-1/(V\kappa_T)$. Differentiating the same identity in $T$ at fixed $p,n$ gives $0=p_T|_{V,n}+p_V|_{T,n}V_T|_{p,n}$. Again by [F1], $V_T|_{p,n}=V\alpha_p$, so $p_T|_{V,n}=\alpha_p/\kappa_T$. The stated inverse chart and $\kappa_T>0$ make these derivatives and reciprocals valid. [given, F1, F4, algebra]

2.1 Along a constant-$p$, fixed-$n$ curve, [F4] gives $s_T|_{p,n}=s_T|_{V,n}+s_V|_{T,n}V_T|_{p,n}$. Subtract the two identities in step 1.1 and use [F3] to obtain $C_p-C_V=T p_T|_{V,n}V_T|_{p,n}$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Substitute $p_T|_{V,n}=\alpha_p/\kappa_T$ and $V_T|_{p,n}=V\alpha_p$ into step 2.1 to obtain $C_p-C_V=TV\alpha_p^2/\kappa_T$. Since $\kappa_T>0$, no zero denominator is used. The units are $\mathrm{J\,K^{-1}}$ on both sides because $\mathrm{Pa\,m^3=J}$. [F1, step 2.1, step 1.2, algebra] ∎
