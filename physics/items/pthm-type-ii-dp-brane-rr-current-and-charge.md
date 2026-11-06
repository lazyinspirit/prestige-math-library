---
id: pthm-type-ii-dp-brane-rr-current-and-charge
kind: physics-theorem
title: Type II Dp Brane RR Current And D3 Charge
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 13
domain: physics
library: physics
deps:
  - post-type-ii-dp-brane-dbi-wz-action
  - def-dp-brane-source-maxwell-page-charge
  - post-type-iib-two-derivative-supergravity-pseudoaction
  - post-type-iib-d3-sourced-bianchi
  - def-supergravity-conventions-and-normalizations
dependency_roles:
  post-type-ii-dp-brane-dbi-wz-action: physical-assumption
  def-dp-brane-source-maxwell-page-charge: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  post-type-iib-d3-sourced-bianchi: physical-assumption
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "A single positively oriented boundaryless timelike D3 with zero invariant worldvolume field, its local C4 WZ source, and the separately adopted weak source-coupled IIB five-form Bianchi law; no D4/IIB generalization and no derivation of the bulk source coefficient from WZ variation alone."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture III §3.3, equations (3.20)–(3.24), PDF pp. 27–31; D3 Wess–Zumino coupling and RR charge."
    - title: "Shamit Kachru, Michael Schulz, and Sandip Trivedi, Moduli Stabilization from Fluxes in a Simple IIB Orientifold, arXiv:hep-th/0201028v2"
      url: "https://arxiv.org/pdf/hep-th/0201028v2"
      locator: "§2.1, equation (2.4), PDF p. 4; Kachru–Schulz–Trivedi D3/O3 source-coupled five-form identity, used here only through the separately adopted single-D3 premise."
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

For an oriented Lorentzian Type II ten-manifold $X^{10}$ with mostly-plus string-frame metric and a proper smooth oriented timelike D3 embedding $\iota:W_4\hookrightarrow X^{10}$ with $\partial W_4=\varnothing$ and invariant worldvolume field $\mathcal F=0$, varying the WZ term $\mu_3\int_{W_4}\iota^*C_4^{\mathrm{WZ}}$ with respect to the Hamilton potential $C_4^H$ while holding $B_2,C_2^H$ fixed gives the localized current $J_6=\mu_3\delta_6(W)$, normalized by $\int_X\eta_4\wedge\delta_6(W)=\int_W\iota^*\eta_4$. This uses the exact crosswalk $C_4^{\mathrm{WZ}}=C_4^H+\frac12B_2\wedge C_2^H$ in Type II Dp Brane DBI WZ Action. Separately, on the oriented source patch of Type IIB D3 Sourced Five Form Bianchi, with $H_3$ and $\widetilde G_3$ smooth, its adopted equation holds weakly as an equality of degree-six currents:
$$d\widetilde G_5-H_3\wedge\widetilde G_3= -2\kappa_0^2\mu_3\delta_6(W).$$
WZ variation fixes the localized current with a positive WZ coefficient; the signed bulk Bianchi law and its self-dual source normalization remain explicit physical inputs. In the wedge-defined Lorentzian convention, the Bianchi source sign is negative relative to the current defined by that WZ pairing. The GKP internal plus-source law is recovered only with the ambient/worldvolume orientation dictionary supplied by the sourced-Bianchi postulate.

## Statement References

[Polchinski, Chaudhuri, and Johnson, Lecture III §3.3](https://arxiv.org/pdf/hep-th/9602052v2)

[Kachru, Schulz, and Trivedi, §2.1, Eq. (2.4)](https://arxiv.org/pdf/hep-th/0201028v2)


[[post-type-ii-dp-brane-dbi-wz-action]]

[[post-type-iib-d3-sourced-bianchi]]
## Facts & Assumptions

**Given:** An oriented Lorentzian Type II ten-manifold with mostly-plus string-frame metric, a proper smooth oriented timelike D3 embedding $\iota:W_4\hookrightarrow X^{10}$ with $\partial W_4=\varnothing$ and $\mathcal F=0$, a compactly supported test variation of $C_4^H$ with $B_2,C_2^H$ fixed, and the stated source normalization.

[F1] [[post-type-ii-dp-brane-dbi-wz-action]]: when $\mathcal F=0$, the D3 WZ term is $\mu_3\int_{W_4}\iota^*C_4^{\mathrm{WZ}}$, where $C_4^{\mathrm{WZ}}=C_4^H+\frac12B_2\wedge C_2^H$. Varying $C_4^H$ at fixed $B_2,C_2^H$ gives $\delta C_4^{\mathrm{WZ}}=\delta C_4^H$.

[F2] [[def-dp-brane-source-maxwell-page-charge]]: source current is normalized by its pairing with test forms; $\mu_3=(2\pi)^{-3}\alpha'^{-2}$. Its current Step 1 record is escalated because the IIB pseudoaction and self-duality inputs are not ready, so the five-form interface remains conditional.

[A1] [[post-type-iib-d3-sourced-bianchi]]: for the proper oriented boundaryless D3 on the oriented source patch, with $H_3$ and $\widetilde G_3$ smooth, the R4 IIB source equation is the weak equality of degree-six currents $d\widetilde G_5-H_3\wedge\widetilde G_3= -2\kappa_0^2\mu_3\delta_6(W)$. This sourced equation is adopted separately from the WZ variation.

[A2] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: the current source-free R4 IIB pseudoaction defines $G_1,G_3,G_5,\widetilde G_3,\widetilde G_5$ and is varied before the separate self-duality condition. Its current Step 1 record is escalated because its upstream readiness inputs are missing, so this framework input remains conditional.

## Proof

1.1 For an arbitrary compactly supported variation $\delta C_4^H$ at fixed $B_2,C_2^H$, [F1] gives $\delta C_4^{\mathrm{WZ}}=\delta C_4^H$. The first variation is therefore $\delta S_{WZ}=\mu_3\int_{W_4}\iota^*\delta C_4^H$. By [F2]'s defining pairing this is $\int_X\delta C_4^H\wedge\mu_3\delta_6(W)$, so the localized current is $J_6=\mu_3\delta_6(W)$. [given, F1, F2, algebra]

2.1 The weak source-coupled IIB Bianchi equation is exactly [A1], with its $\mu_3$ coefficient fixed as an adopted field-equation normalization. The deduction in step 1.1 does not determine the coefficient $2\kappa_0^2\mu_3$ in this bulk equation; that separately adopted self-dual source normalization, its negative sign in the wedge-Hodge/current convention, and the self-dual five-form framework are carried as the explicit physical inputs [A1] and [A2]. Thus the statement holds conditionally and does not claim a derivation from the WZ term alone. [given, A1, A2, step 1.1, algebra] ∎
