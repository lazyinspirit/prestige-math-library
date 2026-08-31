---
id: def-l-p-space-as-a-quotient-by-null-functions
kind: definition
title: "The space $L^p(\\mu)$ as the quotient by null functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, def-null-subspace-of-almost-everywhere-zero-functions, def-quotient-vector-space-and-canonical-projection]
justified_by: []
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Definition 7.17"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 7.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
verification:
  audited: 2026-08-31
  precheck: n/a
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space.

- For $0<p<\infty$, define an equivalence relation on $\mathcal L^p(\mu)$ by
  $$f\sim g\quad\Longleftrightarrow\quad f-g\in\mathcal N(\mu),$$
  and write $L^p(\mu)$ for the set of classes $[f]$.
- For $p=\infty$, define the same relation on $L^\infty(\mu)$ and again write
  $L^\infty(\mu)$ for the set of classes.

Thus an element of $L^p(\mu)$ is an almost-everywhere equivalence class of
measurable representatives.

When $1\le p\le\infty$, the displayed set quotient agrees with the usual
quotient-vector-space construction of
[[def-quotient-vector-space-and-canonical-projection]].

For $0<p<1$, the same class notation is used, but the later item
[[thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric]]
supplies the metric structure rather than a normed-space structure.
