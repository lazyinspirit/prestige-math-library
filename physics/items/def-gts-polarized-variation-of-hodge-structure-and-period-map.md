---
id: def-gts-polarized-variation-of-hodge-structure-and-period-map
kind: definition
title: "Polarized variation of Hodge structure and period map"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC through the geometric projective-family supplier."
deps:
  - def-rational-mixed-hodge-structure
  - def-geometric-polarizable-hodge-variation
  - lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations
  - def-axiom-of-choice
dependency_roles:
  def-rational-mixed-hodge-structure: mathematical-premise
  def-geometric-polarizable-hodge-variation: mathematical-premise
  lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pierre Deligne, Théorie de Hodge II, Publications Mathématiques de l’IHÉS 40 (1971)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "§4.2.1–§4.2.5, printed pp. 43–45, including the added-in-proof footnote on p. 45: continuous families and polarization, algebraic realizations, and the holomorphic filtration with Griffiths transversality."
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§3.3, printed pp. 41–44: local systems, relative de Rham complex, period map and Griffiths transversality."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $S$ be a connected complex manifold and let $\mathbb V_{\mathbb Z}$ be a finite-rank integral local system modulo torsion, with $\mathbb V_{\mathbb Q}=\mathbb V_{\mathbb Z}\otimes\mathbb Q$. Its associated holomorphic bundle is $\mathcal H=\mathbb V_{\mathbb Q}\otimes_{\mathbb Q}\mathcal O_S$ with the flat Gauss–Manin connection $\nabla$. A pure polarized variation of Hodge structure of weight $k$ is this data together with a decreasing filtration by holomorphic subbundles $F^p\mathcal H$ of fixed ranks such that every fibre is a rational pure Hodge structure of weight $k$, polarized by one flat rational bilinear form $Q$, and
$$\nabla(F^p\mathcal H)\subseteq\Omega_S^1\otimes F^{p-1}\mathcal H.$$
Here “pure of weight $k$” means $V_{s,\mathbb C}=\bigoplus_{p+q=k}H_s^{p,q}$ with $H_s^{p,q}=F_s^p\cap\overline{F_s^q}$ and $\overline{H_s^{p,q}}=H_s^{q,p}$. In the polarization convention of the rational mixed-Hodge-structure definition, $Q(u,v)=(-1)^kQ(v,u)$, its complexification pairs $H_s^{p,q}$ only with $H_s^{k-p,k-q}$, and $h_s(u,v)=Q(C_su,\bar v)$ is positive definite, where $C_s|_{H_s^{p,q}}=i^{p-q}$. Flatness means that parallel transport preserves $Q$. A family of several weights means a finite direct sum of pure variations. Polarization requires either a projective family with a selected relatively ample class or a separately supplied flat polarization; compact Kähler fibres alone do not select one.

On a simply connected open chart $U\subseteq S$, choose a flat marking of $\mathbb V_{\mathbb Q}|_U$ by a fixed rational vector space $V_{\mathbb Q}$. The period domain $D$ is the space of polarized Hodge filtrations on $V_{\mathbb C}$ with the fixed Hodge numbers and polarization. The period map is the holomorphic map $\Phi:U\to D$, $s\mapsto F^\bullet\mathcal H_s$ in that marking. The marking identifies the flat polarization with a fixed form on $V_{\mathbb Q}$. Two such markings differ by a constant rational $Q$-isometry $g$, and their period maps satisfy $\Phi_2=g\Phi_1$. This $g$ need not belong to the monodromy group. After fixing a base-point marking and continuing it along paths, changes of path are governed by the monodromy representation; a global marking is not assumed.

## Definition references

[[def-rational-mixed-hodge-structure]]

[[def-geometric-polarizable-hodge-variation]]

[[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]]

[[def-axiom-of-choice]]

[Deligne, §4.2](https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf)

[Voisin, §3.3](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

## Remarks

The geometric supplier above applies to smooth projective families. The definition also admits an analytic polarized variation when the local system, filtration, connection and polarization are supplied independently; it does not infer projectivity or a polarization from compact Kähler fibres.
