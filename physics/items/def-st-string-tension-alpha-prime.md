---
id: def-st-string-tension-alpha-prime
kind: definition
title: String Tension Alpha Prime
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps: [def-st-flat-bosonic-string-model]
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Units and tension convention for the flat tensile bosonic-string model in the declared dimensionless worldsheet coordinates."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§1.2, printed pp. 14–16: fundamental string tension, alpha-prime convention, and dimensions."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§24.6, printed pp. 583–587: Polyakov action normalization in the alpha-prime convention."
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

Use units $\hbar=c=1$. Adopt a primitive scalar parameter $\alpha'>0$ of dimension length squared, and define the string length $\ell_s=\sqrt{\alpha'}$ and the string tension $T=1/(2\pi\alpha')$, of dimension energy per length, or $L^{-2}$ in these units. Operationally, $T$ is the positive coefficient of the induced worldsheet area in the Nambu–Goto action functional: for the induced metric $\gamma_{ab}=\eta_{\mu\nu}\partial_aX^\mu\partial_bX^\nu$ of the nondegenerate Lorentzian configuration branch, set

$$S_{\mathrm{NG},K}[X]=-T\int_K\sqrt{-\det\gamma}\,d^2\sigma.$$

Here $K$ is any compact worldsheet region with smooth boundary and the square root is positive. Equivalently, the Polyakov normalization names $-T/2$ as the coefficient of $\sqrt{-\det h}\,h^{ab}\gamma_{ab}$ in its action density. These formulas fix coefficient conventions; adopting stationarity as dynamics is a separate physical postulate. Worldsheet coordinates are dimensionless and $X^\mu$ has length dimension, so both action functionals are dimensionless. This convention is fixed for the flat tensile bosonic string; it does not define the string coupling $g_s$ or a spacetime Planck scale.

## Definition references

[[def-st-flat-bosonic-string-model]]
