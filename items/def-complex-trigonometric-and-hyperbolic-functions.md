---
id: def-complex-trigonometric-and-hyperbolic-functions
kind: definition
title: "Complex sine, cosine, hyperbolic sine, and hyperbolic cosine from the complex exponential"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-exponential, thm-complex-numbers-form-a-field]
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

For $z\in\mathbb C$, define
$$\sin z=\frac{\exp(iz)-\exp(-iz)}{2i},\quad \cos z=\frac{\exp(iz)+\exp(-iz)}2,$$
$$\sinh z=\frac{\exp z-\exp(-z)}2,\quad \cosh z=\frac{\exp z+\exp(-z)}2.$$ The conventions and prerequisite facts used below are recorded in [[def-complex-exponential]], [[thm-complex-numbers-form-a-field]].
