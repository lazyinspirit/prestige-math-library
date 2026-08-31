---
id: def-normed-subspace
kind: definition
title: "Normed subspace"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-subspace, def-norm-and-normed-space,
       def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
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

Let $V$ be a normed space and let $W\subseteq V$ be a linear subspace in the
sense of [[def-linear-subspace]]. The **normed subspace** $W$ is the vector
space $W$ equipped with the restricted norm
$$\|w\|_W:=\|w\|_V \qquad (w\in W).$$

Its induced metric is the restriction of the ambient norm metric to
$W\times W$, so the inclusion $W\hookrightarrow V$ is an isometric embedding in
the sense of [[def-isometry-and-metric-embedding]].

## Remarks

- No new notation is forced: once the ambient norm is fixed, the restricted norm
  is usually written with the same symbol.
- Completeness and closedness for a normed subspace are therefore comparison
  statements between the restricted metric and the ambient one, not new
  definitions.
