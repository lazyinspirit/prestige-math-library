---
id: post-ten-dimensional-ns-ns-supergravity-action
kind: postulate
title: Ten Dimensional NS NS Supergravity Action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Adopted local ten-dimensional closed-string NS–NS massless bosonic effective action at tree level and leading two-derivative order. It excludes RR fields, localized or magnetic sources, string loops, higher powers of α′, global gerbe data, and claims about the existence or empirical validity of a particular string background."
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, Definition 6.1, printed pp. 24–25; the NS–NS term of the massless IIA action and field definitions."
    - title: "Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1"
      url: "https://arxiv.org/pdf/2410.19600v1"
      locator: "§3.2.1, equation (3.10), printed p. 29; independent string-frame NS–NS action and the ten-dimensional form norm."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Postulate

On an oriented smooth ten-dimensional Lorentzian spacetime with string-frame metric $G^{(s)}$, real dimensionless dilaton field $\Phi$, and locally defined smooth two-form potential $B_2$, adopt the source-free leading tree-level two-derivative NS–NS action
$$
S_{\mathrm{NS}}=\frac{1}{2\kappa_0^2}\int d^{10}x\,\sqrt{-G^{(s)}}\,e^{-2\Phi}\left(R_s+4|d\Phi|_{G^{(s)}}^2-\frac1{12}H_{MNP}H_s^{MNP}\right),\qquad H_3=dB_2.
$$
Here $R_s$ and the raised indices use $G^{(s)}$, and $H_{MNP}=3\partial_{[M}B_{NP]}$. The fields are smooth on the patch and $dH_3=0$; in this library $2\kappa_0^2=(2\pi)^7\alpha'^4$, with $\alpha'$ of dimension length squared. The integral denotes the local action functional where it is defined, and compactly supported variations are used to derive bulk equations. This is an adopted low-energy model premise, not a theorem that every string background is described by this truncation. In the chosen normalization with length-valued coordinates, the components $B_{MN}$ are dimensionless, so $H_{MNP}$ has dimension length$^{-1}$. Thus $R_s$, $|d\Phi|_{G^{(s)}}^2$, and $H_{MNP}H_s^{MNP}$ each have dimension length$^{-2}$. Since $2\kappa_0^2=(2\pi)^7\alpha'^4$ has dimension length$^8$, the density relative to $d^{10}x$ has dimension length$^{-10}$ and the action is dimensionless.

## Postulate references

[[def-supergravity-conventions-and-normalizations]]

[Hamilton, §6.1, Definition 6.1](https://arxiv.org/pdf/1607.00327v3)

[Sterckx, §3.2.1, equation (3.10)](https://arxiv.org/pdf/2410.19600v1)
