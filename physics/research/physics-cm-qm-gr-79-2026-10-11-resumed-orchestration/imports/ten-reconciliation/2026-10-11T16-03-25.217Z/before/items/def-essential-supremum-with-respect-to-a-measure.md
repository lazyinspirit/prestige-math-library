---
id: def-essential-supremum-with-respect-to-a-measure
kind: definition
title: "The essential supremum of a measurable function with respect to a measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-null-set-and-almost-everywhere]
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Definition 7.3"
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

Let $(X,\mathcal A,\mu)$ be a measure space, and let $f:X\to\mathbb R$ be
measurable. The **essential supremum of $|f|$ with respect to $\mu$** is

$$\|f\|_{\infty,\mu}:=\inf\{M\in[0,\infty] : |f|\le M \text{ }\mu\text{-almost everywhere}\}.$$

When the measure is fixed from context, this is written $\|f\|_\infty$. The
phrase **essentially bounded** means $\|f\|_\infty<\infty$.

The later proposition
[[prop-essential-supremum-is-attained-as-the-least-essential-bound]] proves
that when $\|f\|_\infty<\infty$, the inequality $|f|\le\|f\|_\infty$ itself
holds almost everywhere and that this bound is the least essential bound.
