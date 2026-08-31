---
id: def-l-infinity-on-a-measure-space
kind: definition
title: "The space $L^\\infty(\\mu)$ of essentially bounded measurable functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-essential-supremum-with-respect-to-a-measure]
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Section 7.1"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7A"
      url: "https://measure.axler.net/MIRA.pdf"
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space. The class

$$L^\infty(\mu):=\{f:X\to\mathbb R : f \text{ measurable and }\|f\|_\infty<\infty\}$$

of essentially bounded measurable functions is the page's $p=\infty$ space. Its
size is measured by the essential-supremum functional of
[[def-essential-supremum-with-respect-to-a-measure]].

The later theorem
[[thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one]]
proves that $L^\infty(\mu)$ is a real vector space under pointwise addition and
scalar multiplication.
