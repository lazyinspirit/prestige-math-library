---
id: def-complex-logarithms-principal-logarithm-and-complex-powers
kind: definition
title: "Complex logarithms, the principal logarithm, and principal and multivalued complex powers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-polar-form-with-unique-principal-argument, def-natural-logarithm, def-complex-exponential, thm-complex-numbers-form-a-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Definition

For $z\ne0$ with principal polar form $z=r(\cos\theta+i\sin\theta)$, $-\pi<\theta\le\pi$, define the **principal logarithm**
$$\operatorname{Log}z:=\log r+i\theta.$$
The set of all complex logarithms of $z$ is
$$\log_{\mathrm{multi}}z:=\{v\in\mathbb C:\exp v=z\}.$$
For $w\in\mathbb C$, define the **principal power** and the **multivalued power** respectively by
$$z^w_{\mathrm{pr}}:=\exp(w\operatorname{Log}z),\qquad z^w_{\mathrm{multi}}:=\{\exp(wv):v\in\log_{\mathrm{multi}}z\}.$$
Thus the first is one specified complex number and the second is a set of complex numbers; neither notation silently identifies them. The conventions and prerequisite facts used below are recorded in [[thm-polar-form-with-unique-principal-argument]], [[def-natural-logarithm]], [[def-complex-exponential]], [[thm-complex-numbers-form-a-field]].
