---
id: pthm-type-iib-string-einstein-frame-pseudoaction
kind: physics-theorem
title: Type IIB Einstein Frame Pseudoaction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
- def-supergravity-conventions-and-normalizations
- post-type-iib-two-derivative-supergravity-pseudoaction
- post-type-iib-fiveform-self-duality-constraint
- pthm-string-einstein-frame-ns-action-calculation
- def-type-iib-lorentzian-hodge-star
- thm-type-iib-lorentzian-hodge-star-properties
- lem-type-iib-hodge-star-conformal-scaling
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  pthm-string-einstein-frame-ns-action-calculation: physical-result
  def-type-iib-lorentzian-hodge-star: mathematical-premise
  thm-type-iib-lorentzian-hodge-star-properties: mathematical-premise
  lem-type-iib-hodge-star-conformal-scaling: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §7.3, Theorem 7.11; checked the Einstein-frame RR couplings and five-form coefficient against the local action
      convention.
  - title: 'Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1'
    url: https://arxiv.org/pdf/2410.19600v1
    locator: §3.2.1 equations (3.7)–(3.13), printed pp. 28–29, and §3.2.3 equations (3.28)–(3.32), PDF pp. 30–31; independent
      Einstein-frame NS/RR conventions.
physical_scope: Conditional pointwise Weyl rewrite of the source-free two-derivative type IIB pseudoaction. The full local
  divergence from the NS sector is retained; dropping it from the integrated action requires zero boundary flux, while compactly
  supported bulk variations are unaffected. The five-form constraint remains separate.
aliases: []
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the conventions and action of *Type IIB Two Derivative Supergravity Pseudoaction* and set $g_s=e^{\Phi/2}g_E$ on the oriented Lorentzian ten-manifold. For any covariant $p$-form $F_p$, $|F_p|_s^2=e^{-p\Phi/2}|F_p|_E^2$, while $\sqrt{-g_s}=e^{5\Phi/2}\sqrt{-g_E}$. Therefore the Einstein-frame action is bulk-equivalent, for compactly supported variations, to

$S_E=\frac1{2\kappa_0^2}\int\operatorname{vol}_{g_E}\left(R_E-\frac12|d\Phi|_E^2-\frac12e^{-\Phi}|H_3|_E^2\right)-\frac1{4\kappa_0^2}\int\operatorname{vol}_{g_E}\left(e^{2\Phi}|G_1|_E^2+e^{\Phi}|\widetilde G_3|_E^2+\frac12|\widetilde G_5|_E^2\right)-\frac1{4\kappa_0^2}\int C_4\wedge H_3\wedge G_3.$

More precisely, the full NS local density includes the additional total-divergence term $-\tfrac92\Box_E\Phi$ from *String Einstein Frame NS Action Calculation*; removing its integral requires the boundary flux to vanish. The middle-degree Hodge star is unchanged by this Weyl rescaling, so the separately imposed constraint is $*_{g_E}\widetilde G_5=\widetilde G_5$.

## Statement references

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[[pthm-string-einstein-frame-ns-action-calculation]]

[[def-type-iib-lorentzian-hodge-star]]

[[thm-type-iib-lorentzian-hodge-star-properties]]

[[lem-type-iib-hodge-star-conformal-scaling]]

[[post-type-iib-fiveform-self-duality-constraint]]

[Hamilton, §7.3, Theorem 7.11](https://arxiv.org/pdf/1607.00327v3)

[Sterckx, §3.2.1 and §3.2.3](https://arxiv.org/pdf/2410.19600v1)

## Facts & Assumptions

**Given:** A smooth real scalar $\Phi$, the two metrics $g_s=e^{\Phi/2}g_E$, the fields and norms in [F1], and the planned string-frame pseudoaction.

[F1] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: the RR terms are $-|G_1|_s^2-|\widetilde G_3|_s^2-\tfrac12|\widetilde G_5|_s^2$ with common coefficient $(4\kappa_0^2)^{-1}$, and the Chern–Simons term is the metric-independent integral $C_4\wedge H_3\wedge G_3$.

[F2] [[pthm-string-einstein-frame-ns-action-calculation]]: writing $H_E^2:=H_{MNP}H_{QRS}G_E^{MQ}G_E^{NR}G_E^{PS}$, the complete transformed NS density is $\operatorname{vol}_{g_E}[R_E-\tfrac12|d\Phi|_E^2-\tfrac1{12}e^{-\Phi}H_E^2-\tfrac92\Box_E\Phi]$. By [F5], $|H_3|_E^2=H_E^2/3!$, so this is $\operatorname{vol}_{g_E}[R_E-\tfrac12|d\Phi|_E^2-\tfrac12e^{-\Phi}|H_3|_E^2-\tfrac92\Box_E\Phi]$; the last summand is a total divergence.

[F3] [[lem-type-iib-hodge-star-conformal-scaling]]: in dimension ten, $*_{e^{2\omega}g}\beta=e^{(10-2p)\omega}*_g\beta$ for a $p$-form.

[F4] [[post-type-iib-fiveform-self-duality-constraint]]: impose the five-form equation only after varying the pseudoaction.

[F5] [[def-supergravity-conventions-and-normalizations]]: use Lorentzian signature $(-,+,\ldots,+)$, $|F_p|^2=F_{M_1\ldots M_p}F^{M_1\ldots M_p}/p!$, $2\kappa_0^2=(2\pi)^7\alpha'^4$, and $g_E=e^{-\Phi/2}g_s$; keep $\kappa_0$ distinct from the asymptotically shifted physical $\kappa_{10}$.

## Proof

1.1 Write $g_s=e^{2\omega}g_E$ with $\omega=\Phi/4$, using the frame relation in [F5]. In ten dimensions the determinant contributes $e^{10\omega}=e^{5\Phi/2}$, while each inverse metric in the squared norm of a covariant $p$-form contributes $e^{-2\omega}=e^{-\Phi/2}$. Thus $\sqrt{-g_s}=e^{5\Phi/2}\sqrt{-g_E}$ and $|F_p|_s^2=e^{-p\Phi/2}|F_p|_E^2$, as stated. [given, F1, F5, algebra]

2.1 Multiplying the measure and norm factors gives $e^{(5-p)\Phi/2}$ for a $p$-form kinetic density: this is $e^{2\Phi}$ for $G_1$, $e^{\Phi}$ for $\widetilde G_3$, and $1$ for $\widetilde G_5$. The action coefficient already contains the additional factor $1/2$ for the five-form and it is unchanged. The Chern–Simons integral contains only differential forms and orientation, so no metric scaling occurs. [F1, step 1.1, algebra]

3.1 By [F2], the raw NS three-form term is $-\tfrac1{12}e^{-\Phi}H_E^2$. Since the convention [F5] defines $|H_3|_E^2=H_E^2/3!$, this raw contraction equals $-\tfrac12e^{-\Phi}|H_3|_E^2$, which is the coefficient in the Statement. The other NS terms give $R_E-\tfrac12|d\Phi|_E^2$ and the explicitly retained total divergence $-\tfrac92\Box_E\Phi$. Compactly supported variations of its local current integrate to zero by the supplier's stated hypothesis, but its unvaried value is removed only if the boundary flux vanishes. Combining this NS result with step 2.1 proves the bulk-equivalent action formula without discarding an unqualified boundary term. [F2, F5, step 2.1, algebra]

4.1 Here $\omega=\Phi/4$, so [F3] on $p=5$ has exponent $(10-2\cdot5)\omega=0$; therefore $*_{g_s}\widetilde G_5=*_{g_E}\widetilde G_5$. Applying [F4] after the Weyl rewrite leaves this same self-duality equation as a separate constraint, not a term varied in either action. [F3, F4, given, algebra] ∎
