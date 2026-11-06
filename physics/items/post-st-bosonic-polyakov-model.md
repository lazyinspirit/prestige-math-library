---
id: post-st-bosonic-polyakov-model
kind: postulate
title: Bosonic Polyakov Model
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - def-st-string-tension-alpha-prime
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Adopted free tensile flat-target bosonic-string action on a classical Lorentzian worldsheet with selected open or closed boundary data; not a quantum path-integral prescription or an empirical assertion."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§1.3, printed pp. 18–24: the Polyakov action, auxiliary metric variation, and classical symmetries."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§24.6, printed pp. 583–587, equations (24.70)–(24.98): the action, metric variation, and classical constraints."
verification:
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the free tensile flat-target action $S_P[X,h]=-\frac{T}{2}\int_\Sigma d^2\sigma\,\sqrt{-\det h}\,h^{ab}\eta_{\mu\nu}\partial_aX^\mu\partial_bX^\nu$, with $T=1/(2\pi\alpha')$, for the flat model and its specified open- or closed-string boundary data. This is a physical model assumption, not a deduction from mathematics. No endpoint, $B$-field, dilaton, or interaction term is added.

## Postulate references

[[def-st-flat-bosonic-string-model]]

[[def-st-string-tension-alpha-prime]]
