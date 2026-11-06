---
id: post-type-iib-two-derivative-supergravity-pseudoaction
kind: postulate
title: Type IIB Two Derivative Supergravity Pseudoaction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-ten-dimensional-ns-ns-supergravity-action
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-ten-dimensional-ns-ns-supergravity-action: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§7.1, Definition 7.1, printed pp. 35–36; inspected action page image confirms the factor 1/2 multiplying |G̃5|²."
    - title: "Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1"
      url: "https://arxiv.org/pdf/2410.19600v1"
      locator: "§3.2.3, equations (3.28)–(3.32), PDF pp. 30–31; Einstein-frame independent comparison, after translating the Hodge-star and normalization conventions."
    - title: "Karapet Mkrtchyan and Fridrich Valach, Actions for type II supergravities and democracy, arXiv:2207.00626v2"
      url: "https://arxiv.org/pdf/2207.00626v2"
      locator: "Introduction and the type-IIB sections; democratic and auxiliary-field formulations show that this selected undoubled pseudoaction is not the only action formulation."
physical_scope: "Adopted massless, source-free, local ten-dimensional type IIB bosonic effective action at tree level and leading two-derivative order. It excludes brane currents, loop and higher-derivative terms, global potential patching, and claims that the pseudoaction alone supplies the self-dual five-form dynamics."
aliases: []
verification:
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

On an oriented Lorentzian ten-manifold with inertia $(9,1,0)$, smooth real dilaton $\Phi$, axion $C_0$, two-form potentials $B_2,C_2$, and four-form potential $C_4$ defined on a contractible patch, adopt the following source-free string-frame model. Put $H_3=dB_2$, $G_1=dC_0$, $G_3=dC_2$, $G_5=dC_4$, $\widetilde G_3=G_3-C_0H_3$, and $\widetilde G_5=G_5-\tfrac12H_3\wedge C_2+\tfrac12G_3\wedge B_2$. For a $p$-form $F$, use $|F|_s^2=F_{M_1\ldots M_p}F^{M_1\ldots M_p}/p!$, with indices raised by the string-frame metric $g_s$ and $|F|^2\operatorname{vol}_{g_s}=F\wedge *_{g_s}F$. Then

$$S_{\mathrm{IIB}}=S_{\mathrm{NS}}-\frac{1}{4\kappa_0^2}\int\operatorname{vol}_{g_s}\left(|G_1|_s^2+|\widetilde G_3|_s^2+\frac12|\widetilde G_5|_s^2\right)-\frac{1}{4\kappa_0^2}\int C_4\wedge H_3\wedge G_3,$$

where the exact planned interface for $S_{\mathrm{NS}}$ is

$$S_{\mathrm{NS}}=\frac{1}{2\kappa_0^2}\int\operatorname{vol}_{g_s}\,e^{-2\Phi}\left(R_s+4|d\Phi|_{g_s}^2-\frac12|H_3|_{g_s}^2\right),\qquad H_3=dB_2.$$

Here $R_s$ and raised indices use $g_s$, the fields are smooth on the patch, and compactly supported variations define the bulk Euler–Lagrange equations. The planned convention supplier *Supergravity Conventions And Normalizations* sets $2\kappa_0^2=(2\pi)^7\alpha'^4$, with $\alpha'>0$ of dimension length squared; $\kappa_0$ is held fixed when varying fields. This is the selected undoubled pseudoaction: vary it without constraining $\widetilde G_5$, then impose the separate five-form equation $*_{g_s}\widetilde G_5=\widetilde G_5$ on the stationary configuration. This equation is an additional adopted condition, not an Euler–Lagrange equation of the pseudoaction alone. It is not a claim that type IIB has no other covariant action formulation.

## Postulate references

[[def-supergravity-conventions-and-normalizations]]

[[post-ten-dimensional-ns-ns-supergravity-action]]

[Hamilton, §7.1, Definition 7.1](https://arxiv.org/pdf/1607.00327v3)

[Sterckx, §3.2.3, equations (3.28)–(3.32)](https://arxiv.org/pdf/2410.19600v1)

[Mkrtchyan–Valach, arXiv:2207.00626v2](https://arxiv.org/pdf/2207.00626v2)

## Remarks

This postulate uses the stated batch-56 convention and NS-action interfaces. It remains an adopted local low-energy model with the physical scope stated above. Hamilton and Sterckx use different frame and gravitational-coupling conventions, so only the field basis and dimensionless relative RR/CS coefficients are compared directly. The five-form coefficient is one half inside the RR bracket, as verified against Hamilton's printed action image.

In the natural-unit convention, coordinate components have $[x^M]=L$, $[g^{(s)}_{MN}]=[\Phi]=[C_0]=1$, and the potential components have $[B_{MN}]=[C_{MN}]=[C_{MNPQ}]=1$. Their field-strength components have $[H_{MNP}]=[G_M]=[G_{MNP}]=[G_{MNPQR}]=L^{-1}$; the same dimensions hold for the tilded strengths. Thus every scalar kinetic or curvature term in the action density has dimension $L^{-2}$, and the Chern–Simons integrand has component dimension $L^{-2}$. With $[\kappa_0^2]=L^8$, each integrated action is dimensionless.
