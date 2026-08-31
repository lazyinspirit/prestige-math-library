---
id: def-null-subspace-of-almost-everywhere-zero-functions
kind: definition
title: "The null subspace of measurable functions that vanish almost everywhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-null-set-and-almost-everywhere]
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Definition 7.15"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 7.1"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
verification:
  audited: 2026-08-31
  precheck: n/a
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space. Define

$$\mathcal N(\mu):=\{f:X\to\mathbb R : f \text{ measurable and } f=0 \text{ }\mu\text{-almost everywhere}\}.$$

This is the family of null representatives that will be quotiented out of each
$\mathcal L^p(\mu)$ and of $L^\infty(\mu)$. The linear-subspace claim implicit
in that phrasing is proved in
[[prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class]].
