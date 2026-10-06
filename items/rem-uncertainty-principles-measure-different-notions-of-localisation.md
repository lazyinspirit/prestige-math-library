---
id: rem-uncertainty-principles-measure-different-notions-of-localisation
kind: remark
title: Uncertainty principles measure different notions of localisation
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - cor-dimensional-heisenberg-uncertainty-inequality
  - def-spatial-and-frequency-centres-and-variances
  - lem-hardy-entire-growth-rigidity
  - thm-finite-dft-support-product-uncertainty
  - thm-hardy-gaussian-uncertainty-principle
  - thm-support-measure-uncertainty-inequality
forward_refs:
  - cex-finite-variance-is-not-the-same-as-compact-support
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Aingeru Fernández-Bertolín and Eugenia Malinnikova, Dynamical Versions of Hardy's Uncertainty Principle: A Survey (arXiv:2210.03369)"
      url: "https://arxiv.org/pdf/2210.03369"
      locator: "§§1–2, pp. 1–8 (comparison of variance, support and Gaussian-decay formulations)"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 24, pp. 141–146"
---

## Remarks

Three inequivalent notions of localisation are in play on this page and their
hypotheses and conclusions are not interchangeable: the variance pair
$(V_x,V_\xi)$ of [[def-spatial-and-frequency-centres-and-variances]] with the
product bound [[cor-dimensional-heisenberg-uncertainty-inequality]]; support
measure with the product bound [[thm-support-measure-uncertainty-inequality]]
and the compact-support dichotomy; and Gaussian decay with the Hardy threshold
[[thm-hardy-gaussian-uncertainty-principle]], whose critical rigidity is
isolated in [[lem-hardy-entire-growth-rigidity]]. Gaussian decay implies finite
second moments in both domains, but need not give compact support. Finite
variance is not compact support — the Gaussian of
[[cex-finite-variance-is-not-the-same-as-compact-support]] has finite variances
in both domains and full support — while Gaussian decay and its critical
rigidity remain a stronger, distinct formulation. The finite product bound
[[thm-finite-dft-support-product-uncertainty]] is not the Heisenberg product:
its right side is $N$, not $(4\pi)^{-1}$, and its equality set is different. No
implication among these statements is asserted beyond the ones proved on this
page.
