---
id: def-dp-brane-source-maxwell-page-charge
kind: definition
title: Local Type IIB D3 Brane Source Maxwell And Page Charge
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-type-iib-two-derivative-supergravity-pseudoaction
  - post-type-iib-fiveform-self-duality-constraint
  - def-embedded-smooth-submanifold-with-boundary
  - def-smooth-differential-k-form
  - def-oriented-smooth-manifold-and-oriented-chart
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: formulation-prerequisite
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  def-embedded-smooth-submanifold-with-boundary: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Local D3/IIB definitions of source, Maxwell, and Page charge in the planned R4 component basis; Page form is patchwise and requires a B-field trivialization. Does not define a D4/IIB charge law."
sources:
  references:
    - title: "Donald Marolf, Chern-Simons Terms and the Three Notions of Charge, arXiv:hep-th/0006117v1"
      url: "https://arxiv.org/pdf/hep-th/0006117v1"
      locator: "Sections 2–4, PDF pp. 3–8: the worked example is IIA D4 charge, with the brane-source equation (2.2), Maxwell current (3.1), and Page current/charge (4.1)–(4.2). The terminology is used here as context; the displayed IIB D3 formulas are the local definitions of this item."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture III §3.3, equations (3.20)–(3.24), PDF pp. 27–31; D3 RR charge and flux conventions."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $X^{10}$ be an oriented smooth ten-manifold and let $\iota:W_4\hookrightarrow X^{10}$ be a proper smooth embedding of an oriented smooth four-manifold $W_4$ (a boundary is allowed in this current definition). Define its degree-six source current $\delta_6(W)$ by $\int_X\eta_4\wedge\delta_6(W)=\int_W\iota^*\eta_4$ for every compactly supported smooth four-form $\eta_4$; the localized D3 source is $J_6=\mu_3\delta_6(W)$. In the local Type IIB basis, **source charge** is this localized-current coefficient; **Maxwell charge** is gauge-invariant RR flux integrated over a compact closed oriented smooth five-manifold $\Sigma_5$ disjoint from the source; and **Page charge** is the corresponding locally conserved potential-corrected flux on a patch with a chosen $B_2$ trivialization. On such a test cycle, define
$$ Q_M(\Sigma_5)=\frac{1}{2\kappa_0^2\mu_3}\int_{\Sigma_5}\widetilde G_5,\qquad Q_P(\Sigma_5)=\frac{1}{2\kappa_0^2\mu_3}\int_{\Sigma_5}\left(\widetilde G_5-B_2\wedge\widetilde G_3+\frac12B_2\wedge B_2\wedge G_1\right), $$
where $G_1=dC_0$, $\mu_3=(2\pi)^{-3}\alpha'^{-2}$, and $2\kappa_0^2=(2\pi)^7\alpha'^4$. The definitions of $\widetilde G_3,\widetilde G_5$ are exactly those in [[post-type-iib-two-derivative-supergravity-pseudoaction]]. The current Step 1 records for the IIB pseudoaction and separate five-form self-duality carriers are escalated because their upstream readiness inputs are unresolved, so the planned R4 field-strength normalization remains conditional on those exact interfaces. The local Page form is not asserted to be globally defined across nontrivial B-field patches, invariant under large gauge transformations, or quantized without a separate charge-lattice assumption. These D3 definitions do not imply an analogous D4/IIB law.

## Definition References

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[[post-type-iib-fiveform-self-duality-constraint]]

[[def-embedded-smooth-submanifold-with-boundary]]

[[def-smooth-differential-k-form]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[Marolf, §2](https://arxiv.org/pdf/hep-th/0006117v1)
