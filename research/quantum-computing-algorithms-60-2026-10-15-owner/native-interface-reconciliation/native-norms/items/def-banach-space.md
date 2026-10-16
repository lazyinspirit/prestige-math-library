---
id: def-banach-space
kind: definition
title: "Banach space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-norm-and-complex-normed-space, def-norm-and-normed-space, def-complete-metric-space, lem-complex-norm-realification-is-a-real-norm]
justified_by: []
aliases: []
landmark: true
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

Let $V$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$, in the sense of [[def-norm-and-normed-space]] for $\mathbb R$ and [[def-complex-norm-and-complex-normed-space]] for $\mathbb C$, with
induced metric $d(x,y)=\|x-y\|$ (in the complex case supplied by [[lem-complex-norm-realification-is-a-real-norm]]). Then $V$ is a **Banach space** when this
metric space is complete in the sense of [[def-complete-metric-space]].

Equivalently: every Cauchy sequence in $V$ for the norm metric converges to a
point of $V$.

## Remarks

- The metric is part of the data. Completeness is always completeness for the
  metric induced by the named norm.
- The scalar field is part of the normed-space data; completeness is the same metric condition in either case.
