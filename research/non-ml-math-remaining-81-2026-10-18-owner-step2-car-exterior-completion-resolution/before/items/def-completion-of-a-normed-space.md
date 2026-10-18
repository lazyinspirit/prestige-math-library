---
id: def-completion-of-a-normed-space
kind: definition
title: "Completion of a normed space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-banach-space, def-linear-isometry-and-isometric-isomorphism,
       def-metric-completion, def-metric-interior-closure-boundary]
justified_by: []
aliases: []
landmark: true
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-27
---

## Definition

Let $X$ be a normed space. A **completion of $X$** is a pair
$\bigl(\widehat X,\iota\bigr)$ such that

- $\widehat X$ is a Banach space ([[def-banach-space]]);
- $\iota:X\to \widehat X$ is a linear isometry
  ([[def-linear-isometry-and-isometric-isomorphism]]);
- $\iota[X]$ is dense in $\widehat X$
  ([[def-metric-interior-closure-boundary]]).

Equivalently, a completion of a normed space is a completion of its norm metric
([[def-metric-completion]]) together with compatible linear structure on the
complete space.

## Remarks

- The embedding is part of the data, exactly as for metric completions.
- Uniqueness means uniqueness up to a linear isometric isomorphism commuting
  with the dense embeddings.
