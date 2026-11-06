---
id: def-r5-d4-source-current
kind: definition
title: D4 Distributional Source Current
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
deps:
  - post-type-ii-dp-brane-dbi-wz-action
  - def-r5-nil-d4-worldvolume-embedding
  - def-smooth-differential-k-form
  - def-oriented-smooth-manifold-and-oriented-chart
dependency_roles:
  post-type-ii-dp-brane-dbi-wz-action: formulation-prerequisite
  def-r5-nil-d4-worldvolume-embedding: formulation-prerequisite
  def-smooth-differential-k-form: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "The oriented distributional degree-five current of a smooth proper boundaryless D4 worldvolume in ten dimensions, normalized by its action on compactly supported test five-forms; this is the brane-source current convention."
sources:
  references:
    - title: "Donald Marolf, Chern-Simons Terms and the Three Notions of Charge, arXiv:hep-th/0006117v1"
      url: "https://arxiv.org/pdf/hep-th/0006117v1"
      locator: "§2, equation (2.2), PDF p. 4; the IIA D4 brane-source current on the right-hand side of the modified Bianchi identity. The preceding equation (2.1) is the potential gauge transformation; this item supplies its own oriented test-form normalization."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture III §3.3, PDF pp. 27–31; Wess–Zumino coupling and localized RR charge."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $X^{10}$ be oriented and let $\iota:W_5\hookrightarrow X$ be the proper oriented boundaryless embedding of [[def-r5-nil-d4-worldvolume-embedding]]. For a compactly supported smooth five-form $\eta_5$ on $X$, define the degree-five current $\delta_5(W)$ by
$$ \int_X\delta_5(W)\wedge\eta_5:=\int_W\iota^*\eta_5. $$
The source current for a D4 with charge $\mu_4$ is $J_5=\mu_4\delta_5(W)$, where $\mu_4=(2\pi)^{-4}\alpha'^{-5/2}$ is the charge unit in [[post-type-ii-dp-brane-dbi-wz-action]]. This current definition uses only that explicit charge-normalization clause and does not require the WZ gauge-transformation law. For a factorized worldvolume $W_5=X_4\times\gamma$ in a product $X_4\times X_6$, its internal component is the degree-five current $\delta_5(\gamma)$ on $X_6$, defined by $\int_{X_6}\delta_5(\gamma)\wedge\omega_1=\int_\gamma\omega_1$ for compactly supported smooth one-forms $\omega_1$. Orientation fixes the sign; reversing the D4 orientation changes both currents' signs. This defines a distributional source convention and does not assert a sourced supergravity equation.

## Definition References

[[def-r5-nil-d4-worldvolume-embedding]]

[[def-smooth-differential-k-form]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[Marolf, §2](https://arxiv.org/pdf/hep-th/0006117v1)
