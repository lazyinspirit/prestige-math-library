---
id: def-parallel-section-along-a-curve
kind: definition
title: "Parallel section along a curve"
status: published
origin: pipeline
deps: ["prop-local-frame-formula-for-covariant-differentiation-along-a-curve"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

A section $V$ along a smooth curve is **parallel** if $D_tV=0$. By [[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]], in a pulled-back frame this means
$$v'(t)=-\omega_{\gamma(t)}(\dot\gamma(t))v(t).$$
For a piecewise smooth curve, parallel means continuous on the full parameter interval and parallel on each smooth piece. One-sided derivatives are used at the endpoints of a piece; no equality of the two derivatives at a corner is required. On a singleton, every prescribed fibre vector is a parallel section by convention; on an empty interval the empty section is parallel.

The zero section is parallel, and along a constant curve the coefficients in a constant fibre frame are constant precisely for parallel sections. The definition does not assert that all local coefficients in arbitrary moving frames are constant.
