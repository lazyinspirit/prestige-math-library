---
id: post-r5-iia-d4-sourced-bianchi
kind: postulate
title: Type IIA D4 Sourced Four Form Bianchi
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
- def-supergravity-conventions-and-normalizations
- post-type-iia-two-derivative-supergravity-action
- pthm-type-iia-rr-bianchi-from-potentials
- post-type-ii-dp-brane-dbi-wz-action
- def-r5-d4-source-current
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: formulation-prerequisite
  pthm-type-iia-rr-bianchi-from-potentials: formulation-prerequisite
  post-type-ii-dp-brane-dbi-wz-action: formulation-prerequisite
  def-r5-d4-source-current: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Adopted massless Type IIA D4-sourced RR Bianchi identity in the planned R4 field convention, with no Romans
  mass, NS5 support, or other localized RR sources; source normalization is explicit and is not inferred from WZ variation
  alone.
sources:
  references:
  - title: Donald Marolf, Chern-Simons Terms and the Three Notions of Charge, arXiv:hep-th/0006117v1
    url: https://arxiv.org/pdf/hep-th/0006117v1
    locator: §2, equation (2.2), PDF p. 4; the IIA D4 brane-source term in the modified Bianchi identity (the preceding equation (2.1) is the potential gauge transformation).
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §6.1, Definition 6.1 and Theorem 6.2(e); the local field-strength definitions fix the minus sign by direct differentiation, as recorded in the Bianchi supplier.
  - title: 'Eva Silverstein and Alexander Westphal, Monodromy in the CMB: Gravity Waves and String Inflation, arXiv:0803.3085v2'
    url: https://arxiv.org/pdf/0803.3085v2
    locator: §3.1.2, PDF pp. 18–19; a distinct charged D4-flux variant involving the F2 wedge H3 contribution.
verification:
  precheck: pass
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

On an oriented smooth Lorentzian ten-dimensional spacetime $X^{10}$ with the mostly-plus string-frame metric and the proper oriented D4 worldvolume $\iota:W_5\hookrightarrow X^{10}$ of [[def-r5-d4-source-current]], use the massless Type IIA local conventions $G_2=dC_1$, $\widetilde G_4=dC_3-C_1\wedge H_3$, and $H_3=dB_2$, with $dH_3=0$. Assume $H_3$ and $G_2$ are smooth on the source patch. Adopt the D4-sourced equation
$$ d\widetilde G_4+H_3\wedge G_2=2\kappa_0^2\mu_4\,\delta_5(W),\qquad \mu_4=((2\pi)^4\alpha'^{5/2})^{-1},\quad 2\kappa_0^2=(2\pi)^7\alpha'^4. $$
Interpret $\widetilde G_4$ as a degree-four de Rham current which is represented by a smooth form on $X^{10}\setminus W_5$. A degree-$k$ current $T$ acts on compactly supported smooth $(10-k)$-forms, and its exterior derivative is defined by $\langle dT,\eta_{9-k}\rangle:=(-1)^{k+1}\langle T,d\eta_{9-k}\rangle$. Thus the displayed equation is an equality of degree-five currents: for every compactly supported smooth five-form $\eta_5$ on $X^{10}$,
$$ \langle d\widetilde G_4,\eta_5\rangle+\int_{X^{10}}H_3\wedge G_2\wedge\eta_5=2\kappa_0^2\mu_4\int_{W_5}\iota^*\eta_5. $$
Here $\langle\delta_5(W),\eta_5\rangle=\int_{W_5}\iota^*\eta_5$ as defined in [[def-r5-d4-source-current]]. No pointwise smoothness of $\widetilde G_4$ across $W_5$ is asserted.
The corresponding source-free identity is $d\widetilde G_4=-H_3\wedge G_2$. The coefficient is an adopted source-coupled field-law normalization. WZ variation identifies a localized D4 current but does not by itself derive the bulk field equation, its coefficient, or a global tadpole solution. The current IIA action and source-free Bianchi carriers have ready Step 1 records for their declared dependencies and supply the displayed $\widetilde G_4$ sign. The explicit local crosswalk in [[post-type-ii-dp-brane-dbi-wz-action]] identifies the GHT-basis components as $R_2=-G_2$ and $R_4=\widetilde G_4$; this postulate uses the action's explicit $\mu_4$ charge normalization but does not claim that WZ variation derives the bulk coefficient.

## Statement References

[Marolf, §2, Eq. (2.2)](https://arxiv.org/pdf/hep-th/0006117v1)

[Hamilton, §6.1](https://arxiv.org/pdf/1607.00327v3)
