---
id: def-banach-space
kind: definition
title: "Banach space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-norm-and-normed-space, def-complete-metric-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Definition

Let $V$ be a normed space in the sense of [[def-norm-and-normed-space]], with
induced metric $d(x,y)=\|x-y\|$. Then $V$ is a **Banach space** when this
metric space is complete in the sense of [[def-complete-metric-space]].

Equivalently: every Cauchy sequence in $V$ for the norm metric converges to a
point of $V$.

## Remarks

- The metric is part of the data. Completeness is always completeness for the
  metric induced by the named norm.
- By [[rem-real-and-complex-normed-space-convention]], the same definition is
  used over $\mathbb{R}$ and over $\mathbb{C}$.
