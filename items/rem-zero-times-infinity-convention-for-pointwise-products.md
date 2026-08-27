---
id: rem-zero-times-infinity-convention-for-pointwise-products
kind: remark
title: "The convention $0 \\cdot \\infty = 0$ is used only for pointwise products of measurable functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals]
verification:
  precheck: n/a
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Definition 3.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

On this page the symbol $fg$ for two $\overline{\mathbb{R}}$-valued measurable
functions is a **pointwise definition**, not a limit rule. At points where one
factor is $0$ and the other is infinite, we set

$$0 \cdot (+\infty) = 0 \cdot (-\infty) = 0.$$

This convention exists only so that decompositions such as
$f = f^+ - f^-$ and the measurable-product theorem stay pointwise total on the
extended reals. It does **not** contradict
[[cex-zero-times-infinity-indeterminate]], because that counterexample concerns
limits of ordinary real products, not the value of a pointwise formula.
