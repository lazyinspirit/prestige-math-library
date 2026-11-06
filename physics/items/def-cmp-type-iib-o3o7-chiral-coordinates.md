---
id: def-cmp-type-iib-o3o7-chiral-coordinates
kind: definition
title: "Multi-modulus Type IIB O3/O7 chiral coordinates"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
category: string-theory
deps:
  - def-cmp-cy3-kahler-moduli-and-divisor-volumes
  - def-cmp-type-iib-o3-o7-orientifold-data
  - def-supergravity-conventions-and-normalizations
  - post-four-dimensional-n1-matter-coupled-supergravity
  - post-type-iib-fiveform-self-duality-constraint
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  def-cmp-cy3-kahler-moduli-and-divisor-volumes: formulation-prerequisite
  def-cmp-type-iib-o3-o7-orientifold-data: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-four-dimensional-n1-matter-coupled-supergravity: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  thm-euclidean-inverse-function-theorem: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Local multi-modulus chiral coordinates in the classical two-derivative, large-radius, unwarped Type IIB O3/O7 truncation. The source imposes five-form self-duality before choosing the C4 axions. No global coordinate chart, flux potential, open-string sector, or corrected action is asserted."
empirical_premises: []
sources:
  references:
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§3.2, equations (3.10)–(3.27), PDF pp. 11–15; O3/O7 harmonic reduction, self-duality, field redefinitions, and chiral coordinates."
    - title: "Mariana Graña, Athanasia Ksagoni, Praxitelis Ntokos, and Hagen Triendl, String Theory Compactifications, SpringerBriefs in Physics (2017)"
      url: "https://djvu.online/file/qufswWArYbwIP"
      locator: "§6.1, printed pp. 63–64; O3 compactification Kähler coordinates and four-cycle-volume dependence."
---

## Definition

Let $X$ carry the Type IIB O3/O7 datum and the even/odd $H^{1,1}$ basis of `def-cmp-type-iib-o3-o7-orientifold-data`. Expand the dimensionless string-unit even Kähler class as $[J]=v^\alpha[\omega_\alpha]$, where $\omega_\alpha$ and $\omega_a$ are chosen smooth closed real representatives of the even and odd $(1,1)$ classes. No equality between $J$ and the linear combination of these selected form representatives is assumed. Use $\kappa_{\alpha\beta\gamma}=\int_X\omega_\alpha\wedge\omega_\beta\wedge\omega_\gamma$ and $\kappa_{\alpha bc}=\int_X\omega_\alpha\wedge\omega_b\wedge\omega_c$; repeated indices are summed. Let $l=C_0$ be the dimensionless RR axion, $\phi$ the real dimensionless dilaton, $b^a,c^a$ the NS–NS and RR two-form axions, and $\rho_\alpha$ the RR four-form scalars, all normalized as in the source reduction. Define
$$\tau=l+i e^{-\phi},\qquad G^a=c^a-\tau b^a,$$
$$K_\alpha(v)=\kappa_{\alpha\beta\gamma}v^\beta v^\gamma,\qquad \zeta_\alpha(\tau,\bar\tau,G,\bar G)=-\frac{i}{2(\tau-\bar\tau)}\kappa_{\alpha bc}G^b(G^c-\bar G^c),$$
$$T_\alpha=\frac{3i}{2}\rho_\alpha+\frac34K_\alpha(v)-\frac32\zeta_\alpha(\tau,\bar\tau,G,\bar G).$$
These are the Grimm–Louis multi-modulus chiral-coordinate conventions in the two-derivative, large-radius, unwarped reduction, with the ten-dimensional Einstein-frame action converted to the source's four-dimensional Einstein frame and the five-form self-duality condition imposed before choosing $\rho_\alpha$. The coordinates are local on patches where the real Jacobian from $v^\alpha$ to $\operatorname{Re}T_\alpha$ is nonsingular; no global invertibility is asserted. In $\alpha'=1$ units the $v^\alpha$, $\kappa_{ABC}$, $\mathcal V=\kappa_{\alpha\beta\gamma}v^\alpha v^\beta v^\gamma/6$, and displayed moduli are dimensionless; restoring units gives $J_{\rm phys}=\alpha'J$ and $\operatorname{Vol}_{\rm phys}(X)=(\alpha')^3\mathcal V$. The source uses $M_P=1$; with a dimensionful four-dimensional supergravity convention, $K_{\rm phys}=M_P^2K_{\rm source}$ and dimension-one scalar coordinates are $M_P$ times the source's dimensionless coordinates.

## Definition references

[[thm-euclidean-inverse-function-theorem]]

[[def-cmp-cy3-kahler-moduli-and-divisor-volumes]]

[[def-cmp-type-iib-o3-o7-orientifold-data]]

[[def-supergravity-conventions-and-normalizations]]

[[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]]

[[post-type-iib-fiveform-self-duality-constraint]]

[Grimm and Louis, §3.2](https://arxiv.org/pdf/hep-th/0403067v3)

[Graña, Ksagoni, Ntokos, and Triendl, §6.1](https://djvu.online/file/qufswWArYbwIP)

## Facts & Assumptions

**Given:** A smooth compact Type IIB O3/O7 orientifold datum, its even/odd harmonic bases, dimensionless string-unit Kähler coefficients, the real axions and dilaton, and a local patch on which the stated chiral-coordinate map has nonsingular real Jacobian.

[F1] [[def-cmp-type-iib-o3-o7-orientifold-data]] fixes the O3/O7 quotient, even Kähler classes, odd two-form classes, even $C_4$ classes, and the separation between geometric quotient data and charge/tadpole conditions.

[F2] [[def-cmp-cy3-kahler-moduli-and-divisor-volumes]] fixes the class expansion $[J]=v^\alpha[\omega_\alpha]$ with chosen smooth closed representatives, the intersection normalization $\kappa_{\alpha\beta\gamma}$, and $\mathcal V=\kappa_{\alpha\beta\gamma}v^\alpha v^\beta v^\gamma/6$ in dimensionless string units. Its cohomological volume calculation is independent of the chosen closed representatives; it does not assert equality of form representatives.

[F3] [[def-supergravity-conventions-and-normalizations]] fixes the adopted Einstein-frame, $\alpha'$, and Planck-mass conventions. The source convention here sets $\alpha'=M_P=1$.

[F4] [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]] adopts the local two-derivative four-dimensional $N=1$ Einstein-frame matter framework and fixes its chiral-field/Kähler-potential conventions. Its present readiness record is escalated for a now-stale missing-conventions reason, so this interface remains conditional.

[F5] [[post-type-iib-fiveform-self-duality-constraint]] imposes $*_{g_s}\widetilde G_5=\widetilde G_5$ after varying the undoubled pseudoaction; this is an adopted formulation postulate, not a pseudoaction Euler–Lagrange equation. Its current readiness record is escalated and used conditionally.

[F6] [[thm-euclidean-inverse-function-theorem]] gives a local $C^1$ inverse for a $C^1$ map on an open real Euclidean domain with nonsingular derivative, with inverse derivative equal to the inverse Jacobian.

[A1] Adopt the source-reported two-derivative reduction and impose the five-form self-duality constraint before defining $\rho_\alpha$. The current $N=1$ and five-form readiness records remain escalated; the coordinates are used as local source conventions, not as a locally derived reduction theorem.

## Proof

**Proof technique:** check denominator well-definedness and expand the real coordinate relation.

**Given:** The orientifold parity data, real moduli and axions, dimensionless string-unit Kähler coefficients, and local Jacobian patch in the Statement.

1.1 Since $\phi$ is real, $y=e^{-\phi}>0$ and $\tau-\bar\tau=2iy\ne0$; the rational expression defining $\zeta_\alpha$ is therefore well-defined for finite fields. The intersection coefficients and index split come from [F1]–[F2], the string/Planck units from [F3], and the use of chiral fields with a five-form constraint is the adopted source framework [F4]–[F5], conditionally as stated in [A1]. For the remaining coordinate assertion, $l=\operatorname{Re}\tau$ and $\phi=-\log(\operatorname{Im}\tau)$ recover the axiodilaton fields; $b^a=-\operatorname{Im}G^a/y$ and $c^a=\operatorname{Re}G^a+l b^a$ recover the real two-form axions. With these variables fixed, the smooth map $v\mapsto\operatorname{Re}T$ has the assumed nonsingular real Jacobian. The joint map $(v,\tau,G,z)\mapsto(\operatorname{Re}T,\tau,G,z)$ therefore has a nonsingular block-triangular real Jacobian, so [F6] gives its local inverse on open real coordinate patches. Finally $\rho_\alpha=(2/3)\operatorname{Im}T_\alpha+\operatorname{Im}\zeta_\alpha$ recovers the four-form axions. This proves the claimed local real coordinate chart, not global invertibility or an independent derivation of its physical chiral interpretation. [F1, F2, F3, F4, F5, F6, A1, given]

2.1 The real axions give $G^c-\bar G^c=-(\tau-\bar\tau)b^c$. Substitution into the definition yields $\zeta_\alpha=\frac{i}{2}\kappa_{\alpha bc}G^b b^c$ and hence $\zeta_\alpha+\bar\zeta_\alpha=\frac{i}{2}\kappa_{\alpha bc}(G^b-\bar G^b)b^c=y\kappa_{\alpha bc}b^b b^c$. Adding $T_\alpha$ to its conjugate now gives $T_\alpha+\bar T_\alpha=\frac32\kappa_{\alpha\beta\gamma}v^\beta v^\gamma-\frac32\zeta^R_\alpha$, with the $\rho_\alpha$ terms canceling. This is a local real-coordinate relation and makes no global invertibility claim. [given, step 1.1, algebra] ∎

## Remarks

The axiodilaton satisfies $\operatorname{Im}\tau=e^{-\phi}>0$, so $\tau-\bar\tau\ne0$ and $\zeta_\alpha$ is defined. This is the multi-modulus $T_\alpha$ convention; it is not the separate single-overall-modulus GKP coordinate. Open-string moduli, flux-generated superpotentials, warping, loop corrections, and $\alpha'$ corrections lie outside this definition.
