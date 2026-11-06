---
id: post-r2-iib-sourced-fiveform-bianchi
kind: postulate
title: "GKP source-coupled five-form Bianchi identity"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 14
domain: physics
library: physics
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - def-r2-iib-flux-background-conventions
  - def-dp-brane-source-maxwell-page-charge
  - post-type-iib-fiveform-self-duality-constraint
  - pthm-type-ii-dp-brane-rr-current-and-charge
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: formulation-prerequisite
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  def-dp-brane-source-maxwell-page-charge: formulation-prerequisite
  post-type-iib-fiveform-self-duality-constraint: formulation-prerequisite
  pthm-type-ii-dp-brane-rr-current-and-charge: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Adopted source-coupled GKP Einstein-frame Type IIB five-form Bianchi law on the selected smooth internal cover or quotient in the absence of NS5/D5 magnetic sources. The self-dual source coefficient is physical input; this item proves neither a global solution nor tadpole cancellation by itself."
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.1 Eq. (2.2), distinguishing complex G3 from raw F3; Eq. (2.23), its self-dual-source footnote, and Eq. (2.24), PDF pp. 7–8; §2.1 Eqs. (2.25), PDF p. 9."
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§4.2 Eqs. (4.18), (4.21)–(4.22), PDF pp. 27–29."
    - title: "Thomas Van Riet and Gianluca Zoccarato, Beginners lectures on flux compactifications and related Swampland topics, arXiv:2305.01722v2"
      url: "https://arxiv.org/pdf/2305.01722"
      locator: "§4.1 Eqs. (4.15)–(4.23), PDF pp. 25–26; §4.4 Eqs. (4.76)–(4.78), PDF pp. 34–35."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

In the GKP Einstein-frame Type IIB convention, adopt the internal source-coupled five-form Bianchi identity as an equality of degree-six de Rham currents on the declared compact internal integration space $X$. Let $T_{\mathrm{flux}}$ denote the degree-six current representing $H_3\wedge F_3$. If $F_3,H_3$ are smooth on $X$, this is the current associated to their smooth wedge form as in De Rham currents of compact oriented source cycles. If they are singular at source support, the selected model must separately specify a continuous degree-six current extension and identify it with this product; no product of unspecified singular distributions is assumed. Define $\int_XH_3\wedge F_3:=\langle T_{\mathrm{flux}},1\rangle$. The adopted identity is
$$d_X\widetilde F_5^{\mathrm{int}}=T_{\mathrm{flux}}+2\kappa_0^2\mu_3\,\rho_3^{\mathrm{loc}}.$$
Here $F_3$ is the raw RR field strength, not $\widetilde F_3=F_3-C_0H_3$, and $H_3\wedge F_3$ uses this displayed order. The dimensionless signed source current $\rho_3^{\mathrm{loc}}$ is a finite sum of degree-six point currents and/or other degree-six localized charge currents normalized so $\langle\rho_3^{\mathrm{loc}},1\rangle=Q_3^{\mathrm{loc}}$. It includes only the mobile D3-branes, O3-planes, and induced D3 charge from wrapped D7-brane curvature or worldvolume fields actually present in the selected source model. Use $2\kappa_0^2=(2\pi)^7\alpha'^4$, $\mu_3=(2\pi)^{-3}\alpha'^{-2}$, and hence $2\kappa_0^2\mu_3=(2\pi)^4\alpha'^2$; $\kappa_E=\kappa_0$ in this Einstein-frame RR convention, while at constant dilaton $2\kappa_{10,s}^2=g_{\mathrm{str}}^2\,2\kappa_0^2$. For a quotient with nontrivial fixed-locus multiplicity, the source sum and flux periods must use that same quotient normalization, or both must be computed on its smooth covering space. The GKP sector here has no NS5/D5 magnetic source currents; adding them requires their own Bianchi currents and consistency terms. The source equation and its self-dual $F_5$ normalization are adopted physical inputs, not a derivation from a naive electric $C_4$ term.

The three-form names are distinguished as follows. On a local potential patch, $F_3=dC_2$ and $H_3=dB_2$, while GKP §2.1, equation (2.2), defines the complex flux $G_3^{\mathrm{GKP}}:=F_3-\tau H_3$ with $\tau=C_0+i e^{-\phi}$. The R4 pseudoaction instead calls the raw real RR form $G_3^{\mathrm{R4}}:=dC_2=F_3$ and sets $\widetilde G_3^{\mathrm{R4}}=F_3-C_0H_3$. Thus $G_3^{\mathrm{R4}}$ and $G_3^{\mathrm{GKP}}$ denote different forms; the displayed sourced law uses raw $F_3$, not the complex flux.

## Postulate references

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

[[def-r2-iib-flux-background-conventions]]

[[def-dp-brane-source-maxwell-page-charge]]

[[post-type-iib-fiveform-self-duality-constraint]]

[[pthm-type-ii-dp-brane-rr-current-and-charge]]

[Giddings–Kachru–Polchinski, Eq. (2.23) and footnote](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §4.2](https://arxiv.org/pdf/hep-th/0509003v3)

[Van Riet–Zoccarato, §4.4](https://arxiv.org/pdf/2305.01722)

## Remarks

The R4 D3-sourced equation in its wedge-defined Lorentzian Hodge/current convention is separately adopted as $d\widetilde G_5-H_3\wedge\widetilde G_3^{\mathrm{R4}}=-2\kappa_0^2\mu_3\delta_6(W)$. For the GKP dictionary take the ten-dimensional orientation $-\mathrm{vol}_4\wedge\mathrm{vol}_X$ and the space-filling D3 worldvolume orientation $\mathrm{vol}_4$. Its WZ-pairing current is then represented internally by $-\delta_p$, while $\rho_3^{\mathrm{loc}}$ counts the positive D3 by $+\delta_p$. Thus the ten-dimensional negative-current law restricts to the displayed internal positive-charge law. This extends linearly to the signed source sum in the selected model; induced source terms still require their own declared current normalization. The current pseudoaction defines $G_3^{\mathrm{R4}}=dC_2$, $\widetilde G_3^{\mathrm{R4}}=G_3^{\mathrm{R4}}-C_0H_3$, and $\widetilde G_5=G_5-\tfrac12H_3\wedge C_2+\tfrac12G_3^{\mathrm{R4}}\wedge B_2$. In these potential conventions the GKP five-form and the R4 $\widetilde G_5$ expressions coincide, and
$$H_3\wedge\widetilde G_3^{\mathrm{R4}}=H_3\wedge G_3^{\mathrm{R4}}=H_3\wedge F_3$$
because $H_3\wedge H_3=0$ for a real odd-degree form. Thus the field order and $2\kappa_0^2\mu_3$ coefficient agree, and the localized sign agrees only after the stated orientation/current translation. The potentials and full WZ probe coefficient are unchanged; the sourced-Bianchi postulate explicitly adopts the half-electric self-dual prescription used for the bulk field equation. Reversing the ambient orientation must be carried into every R4 form integral as well as its Hodge star; it is not an isolated sign change in the constraint. This algebraic crosswalk does not derive the sourced coefficient, self-dual prescription, O3 charge, or a global source equation from the WZ variation.

The current R4 pseudoaction, self-duality, Bianchi, D3 source definition, and D3-current theorem carriers are present, but the relevant Step 1 readiness records remain escalated. The sourced law is therefore retained as the exact planned adopted input and is not marked ready.

