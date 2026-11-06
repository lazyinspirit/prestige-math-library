---
id: def-string-vertex-operator-and-covariant-insertion
kind: definition
title: String vertex datum and covariant insertion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 2
domain: physics
physical_scope: "Typed local external-state and insertion interface for a supplied worldsheet CFT/BRST model; it does not construct the CFT, BRST complex, or amplitude measure."
deps:
  - def-cft-2d-primary-field
  - def-cft-pointed-analytic-worldsheet
dependency_roles:
  def-cft-2d-primary-field: mathematical-premise
  def-cft-pointed-analytic-worldsheet: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, String Theory, Cambridge Part III notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§6.2, printed pp. 130–136, local vertex operators, integrated/unintegrated insertions, and tree amplitudes; the path-integral derivation is pedagogical/formal."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a pointed analytic worldsheet with its local coordinates. The local BRST model is input data: complex vector spaces $C^{r,p}_\sigma(k)$ of local field representatives, indexed by ghost number $r\in\mathbb Z$, picture $p$ in a specified subset of $\tfrac12\mathbb Z$ (omit $p$ in a model without pictures), sector $\sigma$ in a specified finite set $S$, and momentum $k$. Supply linear maps $Q:C^{r,p}_\sigma(k)\to C^{r+1,p}_\sigma(k)$ satisfying $Q^2=0$. Define the BRST cohomology by $H^{r,p}_\sigma(k):=\ker(Q|_{C^{r,p}_\sigma(k)})/\operatorname{im}(Q|_{C^{r-1,p}_\sigma(k)})$; square zero makes the denominator a subspace of the numerator. The field realization, its coordinate laws, and any products used below are additional supplied model data, not consequences of this quotient.

For target labels supply a finite-dimensional real vector space $E$ with a nondegenerate Lorentzian bilinear form $\eta$ of signature $(-,+,\ldots,+)$, its complexification when complex momenta are used, and $k\in E^*$ or $E^*\otimes\mathbb C$, respectively. Use $\hbar=c=1$, so momentum has units of inverse length and $\eta$ is dimensionless. For each sector supply a polarization space $P_\sigma$, specified as a subspace of a finite tensor product of copies of $E\otimes\mathbb C$ and its dual (the scalar case is $\mathbb C$), and an exact admissibility subset $M_\sigma\subseteq(E^*\otimes\mathbb C)\times P_\sigma$ encoding its sector constraints. Supply a real squared-mass label $\mu_\sigma$ of units length$^{-2}$; negative values are permitted. Here the mass-shell predicate is $\eta^{-1}(k,k)+\mu_\sigma=0$. A model with additional level labels supplies these data separately for each label. The chosen physical classes form a specified subset $H^{r,p}_{\mathrm{phys},\sigma}(k)\subseteq H^{r,p}_\sigma(k)$.

A **vertex datum** is a field $V_i\in C^{r_i,p_i}_{\sigma_i}(k_i)$ with polarization $\epsilon_i\in P_{\sigma_i}$, conformal weights $(h_i,\bar h_i)\in\mathbb C^2$, its listed indices, and a declared local-coordinate transformation law. For a primary field, its insertion density is $V_i(z,\bar z)(dz)^{h_i}(d\bar z)^{\bar h_i}$, interpreted weakly under smearing for distributional fields, on the chosen local chart or specified branch data. For an integrated $(1,1)$ closed vertex use $V_i^{(1,1)}d^2z$, with $d^2z=dx\,dy$ for $z=x+iy$; for an unintegrated insertion supply a separately typed local operator $U_i\in C^{r_i^U,p_i^U}_{\sigma_i}(k_i)$ with its own weights $(h_i^U,\bar h_i^U)$ and coordinate law, with residual conformal-Killing zero modes fixed separately. In the elementary closed bosonic dressing convention, the supplied odd ghosts $c,\bar c$ have ghost number $1$, picture $0$, and weights $(-1,0),(0,-1)$; their product with $V_i$ is defined as model data and $U_i=c\bar c V_i$ has ghost number $r_i+2$, picture $p_i$, and weights $(h_i-1,\bar h_i-1)$ when that product is primary. In particular a ghost-number-zero $(1,1)$ coefficient gives a ghost-number-two $(0,0)$ unintegrated operator. Other sectors supply their own dressing or descent relation. On a boundary the instance supplies the one-dimensional measure and the primary coefficient law $V_y=(dy/dx)^{-h}V_x$ on orientation-preserving boundary coordinate overlaps, with branch data if needed. A datum already presented as a BRST representative $V_i$ is **physical** when $QV_i=0$, $[V_i]\in H^{r_i,p_i}_{\mathrm{phys},\sigma_i}(k_i)$, $(k_i,\epsilon_i)\in M_{\sigma_i}$, and its mass-shell predicate holds. If $V_i$ instead denotes an integrated coefficient, its physical interpretation requires an associated $U_i$ satisfying $QU_i=0$ and $[U_i]\in H^{r_i^U,p_i^U}_{\mathrm{phys},\sigma_i}(k_i)$, the same sector and mass-shell conditions, and the model-supplied dressing/descent relation between the two insertions; it does not require the bare coefficient to obey $QV_i=0$. This definition does not make every primary physical and does not construct the input BRST model, normalization, or path-integral measure.

## Facts & Assumptions

**Given:** A fixed pointed CFT, local coordinate convention, and an instance-specific BRST/ghost model; a physical-state claim additionally assumes its cohomology, mass shell, and sector data.

[F1] [[def-cft-2d-primary-field]]: a field of weights $(h,\bar h)$ obeys the passive law $\mathcal O_w=(f')^{-h}(\overline{f'})^{-\bar h}\mathcal O_z$ with the supplied branch/cocycle data when weights are nonintegral.

[F2] [[def-cft-pointed-analytic-worldsheet]] supplies a compact analytic worldsheet, marked points, and local-coordinate germs; it does not assert a moduli-space or path-integral construction.

## Proof

1.1 On a chart change $w=f(z)$, [F1] gives $V_w=(f')^{-h}(\overline{f'})^{-\bar h}V_z$. The insertion differential transforms by $dw=f'dz$ and $d\bar w=\overline{f'}d\bar z$, so $V_w(dw)^h(d\bar w)^{\bar h}=V_z(dz)^h(d\bar z)^{\bar h}$ whenever the declared branches/cocycles are used. For $(h,\bar h)=(1,1)$ this is the usual local two-form integrated over the puncture coordinate. [given, F1, F2, algebra]

2.1 A local coordinate law alone imposes no BRST equation: the definition therefore separately requires a closed representative and membership of its quotient class in the supplied physical subset, the declared ghost/picture grading, and mass-shell/sector conditions for the word physical. The BRST condition is tested on the separately typed representative $U_i$ when $V_i$ denotes an integrated coefficient. Ghost dressing shifts its weights and ghost number by the displayed amounts, so coordinate covariance in 1.1 is applied using the weights of the actual operator inserted; no closure of a bare integrated coefficient is inferred. [given, F1, F2, step 1.1, algebra] ∎

## Remarks

The current primary-field supplier record is owner-escalated because its pointed-worldsheet prerequisite was not closed; the pointed-worldsheet supplier has a ready label but a hash-stale current record. Their exact existing statements are used conditionally, and this vertex carrier remains escalated until the actual inputs are current.
