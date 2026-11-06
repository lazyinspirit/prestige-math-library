---
id: post-type-iib-d3-sourced-bianchi
kind: postulate
title: Type IIB D3 Sourced Five Form Bianchi
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: physics
library: physics
deps:
- def-supergravity-conventions-and-normalizations
- post-type-iib-two-derivative-supergravity-pseudoaction
- post-type-iib-fiveform-self-duality-constraint
- pthm-type-iib-bianchi-identities
- def-dp-brane-source-maxwell-page-charge
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: formulation-prerequisite
  post-type-iib-fiveform-self-duality-constraint: formulation-prerequisite
  pthm-type-iib-bianchi-identities: formulation-prerequisite
  def-dp-brane-source-maxwell-page-charge: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Adopted source-coupled massless Type IIB component Bianchi law for a positively oriented boundaryless timelike D3 with zero invariant worldvolume flux;
  source coefficient is an explicit field-equation normalization and is not derived from WZ variation alone.
sources:
  references:
  - title: Shamit Kachru, Michael Schulz, and Sandip Trivedi, Moduli Stabilization from Fluxes in a Simple IIB Orientifold, arXiv:hep-th/0201028v2
    url: https://arxiv.org/pdf/hep-th/0201028v2
    locator: §2.1, equation (2.4), PDF p. 4, and equation (2.9), footnote 3, PDF p. 5; source-coupled five-form Bianchi identity for D3/O3 sources in Einstein frame; localized-current sign requires the explicit orientation/Hodge translation in this item.
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §7.1, Definition 7.1, Type IIB pseudoaction and field-strength conventions; used only for the source-free basis and the separate
      self-duality condition.
  - title: J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2
    url: https://arxiv.org/pdf/hep-th/9602052v2
    locator: Lecture III §3.3, equations (3.20)–(3.24), PDF pp. 27–31; D3 RR source normalization context.
  - title: Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2
    url: https://arxiv.org/pdf/hep-th/0105097v2
    locator: §2.1, equations (2.2), (2.23), footnote 6 on printed p. 8; separately adopted half-electric self-dual-source prescription.
  - title: Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2
    url: https://arxiv.org/pdf/hep-th/0105097v2
    locator: Equation (2.23), footnote 6; half-electric bulk prescription and full probe coupling.
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

On an oriented smooth Lorentzian ten-dimensional spacetime $X^{10}$ with mostly-plus signature and no NS5 support, use the local Type IIB field-strength definitions and source-free Bianchi conventions of Type IIB Two Derivative Supergravity Pseudoaction and Type IIB Source Free Bianchi Identities. In the Kachru–Schulz–Trivedi notation set $F_3=G_3=dC_2$ and $\widetilde F_5=\widetilde G_5$; because $H_3\wedge H_3=0$, $H_3\wedge\widetilde G_3=H_3\wedge G_3$, so the differential terms agree. The sign of a localized current also depends on the ambient and worldvolume orientations; the compactification density is not identified with this ten-dimensional current without the orientation crosswalk below. Assume $H_3$ and $\widetilde G_3$ are smooth on the source patch. Identify the Einstein-frame coefficient $\kappa_{10}$ in Kachru–Schulz–Trivedi with $\kappa_0$ in Supergravity Conventions And Normalizations; the string-frame physical coupling instead obeys $2\kappa_{10,\mathrm{phys}}^2=g_{\mathrm{str}}^2\,2\kappa_0^2$. For one positively oriented timelike D3 source with $\mathcal F=0$, with $\partial W_4=\varnothing$ and proper smooth oriented embedding $\iota:W_4\hookrightarrow X^{10}$ as in Local Type IIB D3 Brane Source Maxwell And Page Charge and no O3-plane or other localized charge in this local equation, adopt
$$ d\widetilde G_5-H_3\wedge\widetilde G_3 = -2\kappa_0^2\mu_3\,\delta_6(W),\qquad \mu_3=(2\pi)^{-3}\alpha'^{-2},\quad 2\kappa_0^2=(2\pi)^7\alpha'^4, $$
where $W_4\hookrightarrow X^{10}$ is the proper oriented boundaryless embedding from Local Type IIB D3 Brane Source Maxwell And Page Charge.
Interpret $\widetilde G_5$ as a degree-five de Rham current which is represented by a smooth form on $X^{10}\setminus W_4$. A degree-$k$ current $T$ acts on compactly supported smooth $(10-k)$-forms, with exterior derivative $\langle dT,\eta_{9-k}\rangle:=(-1)^{k+1}\langle T,d\eta_{9-k}\rangle$. Thus the displayed equation is an equality of degree-six currents: for every compactly supported smooth four-form $\eta_4$ on $X^{10}$,
$$ \langle d\widetilde G_5,\eta_4\rangle-\int_{X^{10}}H_3\wedge\widetilde G_3\wedge\eta_4= -2\kappa_0^2\mu_3\int_{W_4}\iota^*\eta_4. $$
Here $\langle\delta_6(W),\eta_4\rangle=\int_{W_4}\iota^*\eta_4$ as defined in Local Type IIB D3 Brane Source Maxwell And Page Charge. No pointwise smoothness of $\widetilde G_5$ across $W_4$ is asserted. The R4 pseudoaction, source-free Bianchi identity, and five-form self-duality condition are separate required framework inputs. The pseudoaction and self-duality carriers have current Step 1 records escalated because their upstream readiness inputs are missing; the Bianchi carrier is likewise escalated on its upstream readiness gap. This use remains conditional. The Wess–Zumino variation fixes the localized current coefficient $\mu_3$, but does not by itself establish the displayed bulk normalization or the self-dual-field factor. The cited equation also includes O3 and other localized charges in its compactification model; those terms are expressly outside this single-D3 postulate. This is an adopted source-coupled equation, not a derivation from the D3 action alone. Its negative current sign is in the wedge-defined Lorentzian Hodge convention used by the local pseudoaction. The self-dual source prescription is the explicit physical input of GKP equation (2.23), footnote 6: the electric coupling used for the bulk variation is one half of the full D3 probe WZ coupling, with the magnetic contribution restored in the probe action. At fixed $B_2,C_2$, compactly supported variation of the displayed pseudoaction's five-form and Chern–Simons terms gives
$$\delta S_{5+\mathrm{CS}}=\frac1{4\kappa_0^2}\int_{X^{10}}\delta C_4\wedge(d*\widetilde G_5-H_3\wedge G_3).$$
With the adopted half-electric source variation $+\frac{\mu_3}{2}\int_{W_4}\iota^*\delta C_4$, stationarity therefore fixes the displayed minus sign; the half-electric prescription itself is not derived here. The full probe WZ variation still gives $+\mu_3\delta_6(W)$ and is not halved in the source-current theorem. This calculation translates a separately adopted self-dual source normalization rather than deriving it from an ordinary electric action.

For the GKP internal convention let $v_4=dx^0\wedge\cdots\wedge dx^3$, orient $X$ by $v_6$, take the ten-dimensional orientation to be $-v_4\wedge v_6$, and orient the space-filling D3 worldvolume by $v_4$. For $W_4=\mathbb R^{3,1}\times\{p\}$ the defining test-form pairing then represents $\delta_6(W)$ by $-\delta_p$ in the internal coordinates. Consequently the displayed ten-dimensional minus-current law restricts to $d_X\widetilde F_5^{\rm int}=H_3\wedge F_3+2\kappa_0^2\mu_3\delta_p$ on positively oriented $X$. Potentials, RR strengths and the full probe WZ coefficient are unchanged; the ambient orientation is a choice in the arbitrary-oriented R4 formulation, and its form integrals and Hodge star must both use it. One must not reverse only the Hodge star while retaining a form integral from the other orientation.

## Statement References

[Kachru, Schulz, and Trivedi, §2.1, Eq. (2.4)](https://arxiv.org/pdf/hep-th/0201028v2)

[Hamilton, §7.1](https://arxiv.org/pdf/1607.00327v3)

[Polchinski, Chaudhuri, and Johnson, Lecture III §3.3](https://arxiv.org/pdf/hep-th/9602052v2)

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[[pthm-type-iib-bianchi-identities]]

[[def-supergravity-conventions-and-normalizations]]

[[def-dp-brane-source-maxwell-page-charge]]

[Giddings, Kachru, and Polchinski, equation (2.23), footnote 6](https://arxiv.org/pdf/hep-th/0105097v2)
