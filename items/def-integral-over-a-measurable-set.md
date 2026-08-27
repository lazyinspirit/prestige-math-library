---
id: def-integral-over-a-measurable-set
kind: definition
title: "Integral over a measurable subset"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-nonnegative-lebesgue-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Definition 4.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space, let
$f:X\to[0,+\infty]$ be measurable, and let $E\in\mathcal A$. Since
[[prop-closure-properties-of-measurable-functions-used-by-the-integral]]
implies that $f\chi_E$ is measurable, define the **integral of $f$ over $E$**
by
$$\int_E f\,d\mu:=\int f\chi_E\,d\mu,$$
where the integral on the right is the nonnegative Lebesgue integral of
[[def-nonnegative-lebesgue-integral]].
