---
id: pthm-flat-dp-brane-t-duality-map
kind: physics-theorem
title: Flat Dp Brane T Duality Map
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - def-dp-brane-open-string-boundary-condition
  - pthm-exact-closed-string-circle-t-duality
  - def-st-string-tension-alpha-prime
  - def-dp-brane-worldvolume-fields
  - def-rns-spin-structures-and-sectors
  - def-rns-gso-projection
dependency_roles:
  def-dp-brane-open-string-boundary-condition: formulation-prerequisite
  pthm-exact-closed-string-circle-t-duality: physical-result
  def-st-string-tension-alpha-prime: formulation-prerequisite
  def-dp-brane-worldvolume-fields: formulation-prerequisite
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-rns-gso-projection: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Free flat open strings with one spatial isometric circle, Neumann/Dirichlet Dp boundary data, a constant diagonal Wilson line when present, and the flat Type II RNS GSO convention for the chirality statement; no boundary interaction, flux, curvature, localized backreaction, charge, or brane dynamics."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §§2.1–2.4, PDF pp. 8–16, and Lecture III §3.3, PDF pp. 28–30: free-circle map, Neumann/Dirichlet endpoints, Wilson-line positions, and right-moving chirality."
    - title: "E. Alvarez, J. L. F. Barbón, and J. Borlaf, T-Duality for Open Strings, arXiv:hep-th/9603089v1"
      url: "https://arxiv.org/pdf/hep-th/9603089v1"
      locator: "§§1–3, PDF pp. 1–16, and Appendix A: gauged open-string duality, boundary conditions, Wilson lines, and the Type II supersymmetric extension."
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

For a free open string with one flat compact spatial circle, when the circle is tangent to a D$p$-brane worldvolume (so $p\ge1$), duality maps Neumann data to Dirichlet data on the dual circle and gives D$(p-1)$. When the circle is transverse (so $p\le8$ in ten dimensions), it maps Dirichlet data to Neumann data and gives D$(p+1)$. For a constant diagonal Chan–Paton Wilson line, each eigenvalue maps to the corresponding dual brane position. Under the stated flat Type II RNS GSO convention, a single spatial circle duality flips right-moving spacetime chirality.

## Statement references

[Polchinski, Chaudhuri, and Johnson, Lecture II §§2.1–2.4 and Lecture III §3.3](https://arxiv.org/pdf/hep-th/9602052v2)

[Alvarez, Barbón, and Borlaf, §§1–3](https://arxiv.org/pdf/hep-th/9603089v1)

## Facts & Assumptions

**Given:** One spatial circle of radius $R>0$, $\alpha'>0$, a flat free open-string worldsheet, the stated D$p$ endpoint data, fixed Type II sector conventions, the RNS map [A2] for the chirality clause, and a constant diagonal Chan–Paton Wilson line if that feature is considered.

[F1] [[def-dp-brane-open-string-boundary-condition]]: a static flat D$p$-brane has Neumann data tangent to its timelike affine worldvolume and fixed Dirichlet coordinates normal to it; Type IIA has even $p$ and Type IIB odd $p$.

[F2] [[pthm-exact-closed-string-circle-t-duality]]: the dual radius is $R'=\alpha'/R$, and the free coordinate duality reflects the right-moving coordinate while preserving the free spectrum labels.

[F3] [[def-st-string-tension-alpha-prime]]: $\alpha'$ has length-squared dimension and the worldsheet coordinates are dimensionless.

[F4] [[def-dp-brane-worldvolume-fields]]: one brane carries a $U(1)$ connection; for $N\ge1$ coincident branes the Chan–Paton connection is a unitary $U(N)$ connection. This supplier does not itself specify the Wilson-line endpoint coupling.

[F5] [[def-rns-spin-structures-and-sectors]]: in the Ramond sector the worldsheet fermion zero modes act in a supplied complex target-Clifford module.

[F6] [[def-rns-gso-projection]]: the Type II Ramond projection selects a definite ten-dimensional chirality in each worldsheet chirality, with equal left/right choices in IIB and opposite choices in IIA.

[A1] For the Wilson-line calculation, adopt the unit-charge open-string endpoint coupling to the Chan–Paton connection, $S_{\partial}=\int_{\partial\Sigma}A$ in Lorentzian signature. On a compact worldvolume circle take a constant commuting diagonal connection with entries $A_y^{(a)}$ and holonomies $\theta_a=2\pi R A_y^{(a)}$; this supplies the endpoint phases used below.

[A2] For the chirality clause, adopt the source-reported flat Type-II RNS extension of the one-circle map: $(X_R^y,\psi_R^y)\mapsto(-X_R^y,-\psi_R^y)$ and the left-moving fields are fixed. On the Ramond ground module in [F5], identify the Clifford generators by $\Gamma^\mu=\sqrt2\,\psi_0^\mu$ and use the Pin lift $S_R:=i\Gamma_{11}\Gamma^y$, where $(\Gamma^y)^2=I$ for the spacelike compact direction. Conjugation by $S_R$ reverses $\Gamma^y$ and fixes the other target Clifford generators. This is the right-moving reflection and chirality convention described in Polchinski, Chaudhuri, and Johnson, Lecture III §3.3, PDF pp. 28–30.

## Proof

1.1 In conformal gauge for the flat free coordinate $y$, the canonical momentum density is $P_y=(2\pi\alpha')^{-1}\partial_\tau X^y$. Define the dual coordinate locally by $\partial_\sigma Y^y=2\pi\alpha'P_y=\partial_\tau X^y$ and $\partial_\tau Y^y=\partial_\sigma X^y$. The free wave equation makes these two first-order equations compatible. They are the canonical transformation underlying the reflection of the right mover in [F2]; the global circle identification therefore has radius $R'$ from that supplier. [given, F2, F3, construct, algebra]

2.1 At a timelike endpoint, Neumann data are $\partial_\sigma X^y=0$. By step 1.1 this is $\partial_\tau Y^y=0$, so $Y^y$ is constant along that endpoint and obeys Dirichlet data. Conversely, fixed Dirichlet data for $X^y$ imply $\partial_\tau X^y=0$, hence $\partial_\sigma Y^y=0$, which is Neumann data for the dual coordinate. [F1, step 1.1, algebra]

2.2 For a diagonal constant Wilson line $A_y^{(a)}=\theta_a/(2\pi R)$ on a coincident-brane Chan–Paton space, [A1] shifts the total open-string momentum between endpoint labels $a,b$ by $\Delta p_y=A_y^{(b)}-A_y^{(a)}=(\theta_b-\theta_a)/(2\pi R)$. Here total momentum means $p_y:=\int_0^\pi P_y\,d\sigma$, where $P_y$ is the momentum density in step 1.1; for momentum label $n\in\mathbb Z$, $p_y=n/R+\Delta p_y$. Integrating $\partial_\sigma Y^y=2\pi\alpha'P_y$ across $0\le\sigma\le\pi$ gives $Y^y(\pi)-Y^y(0)=2\pi\alpha'p_y=2\pi nR'+(\theta_b-\theta_a)R'$. Modulo the dual circumference $2\pi R'$, the integer term is zero and the Wilson-line-dependent endpoint displacement is $(\theta_b-\theta_a)R'$. Choosing the origin so the endpoint labelled $a$ is at $Y_a=\theta_aR'$ therefore puts the endpoint labelled $b$ at $Y_b=\theta_bR'$ modulo $2\pi R'$. [A1, F2, F3, F4, step 1.1, algebra]

3.1 If the dualized coordinate is tangent to the original D$p$ worldvolume, [F1] assigns Neumann data there; step 2.1 changes that spatial tangent direction to a normal fixed coordinate, so the dual worldvolume loses one spatial dimension, D$p\mapsto$D$(p-1)$. If it is normal, the original Dirichlet coordinate becomes Neumann, adding one spatial worldvolume dimension, D$p\mapsto$D$(p+1)$. [F1, step 2.1, algebra]

4.1 In the right-moving Ramond ground module, [A2] implements the one-coordinate fermion reflection by $S_R=i\Gamma_{11}\Gamma^y$, with $\Gamma^y$ spacelike. Since $\{\Gamma_{11},\Gamma^y\}=0$, we have $\Gamma_{11}S_R=-S_R\Gamma_{11}$. Thus if $\Gamma_{11}\psi=\chi\psi$ for $\chi\in\{-1,+1\}$, then $\Gamma_{11}(S_R\psi)=-\chi S_R\psi$. The left-moving ground module is fixed by [A2], so its chirality is unchanged; by [F6], the relative chirality assignments are exchanged between Type IIA and Type IIB. [A2, F5, F6, algebra] ∎

## Remarks

The Wilson-line verification is for a flat commuting diagonal holonomy; no nonconstant or noncommuting worldvolume connection is included. The chirality calculation is a sector statement under the specified flat Type II GSO convention, not a claim about localized branes or backreacted backgrounds.

