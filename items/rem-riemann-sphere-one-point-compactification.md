---
id: rem-riemann-sphere-one-point-compactification
kind: remark
title: "The Riemann sphere is the published one-point compactification of the complex plane"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-one-point-compactification, thm-one-point-compactification-properties]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Remark

Throughout this page write
$$\widehat{\mathbb C}:=\mathbb C\cup\{\infty\}.$$
By [[def-one-point-compactification]], this is the one-point compactification of
$\mathbb C$, and [[thm-one-point-compactification-properties]] gives the two facts
used repeatedly below: $\mathbb C$ sits inside $\widehat{\mathbb C}$ as an open dense
subspace, and $\widehat{\mathbb C}$ is compact Hausdorff.

Nothing on this page redefines the underlying topological space. The new work is
chartwise holomorphy at $\infty$, the chordal metric, Möbius geometry, and the
rational-map consequences built on that compactification.
