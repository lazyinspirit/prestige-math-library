---
id: def-duffy-reference-triangle-map
kind: definition
title: The reference-triangle Duffy map from a vertex
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: [lem-duffy-reference-map-jacobian-and-image, thm-duffy-weak-singularity-transform]
axiom_use: None. This is an explicit polynomial map with determinant computed by differentiation.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Imperial College London, Numerical quadrature, Finite Element course notes, §1.6
      url: https://finite-element.github.io/1_quadrature.html
      locator: §1.6, equations (1.11)–(1.13), square-to-triangle Duffy map and Jacobian.
---

## Definition

Let $S=[0,1]^2$ and let $T=\{(x,y):0\le y\le x\le1\}$ be the reference triangle. The **vertex Duffy map** is $D:S\to T$, $D(r,s)=(r,rs)$. Its image, inverse for $r>0$, and Jacobian determinant are verified in [[lem-duffy-reference-map-jacobian-and-image]]. The change-of-variables use and endpoint limit for weak singularities are proved in [[thm-duffy-weak-singularity-transform]].
