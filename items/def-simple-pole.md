---
id: def-simple-pole
kind: definition
title: "Simple poles"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-isolated-singularity-types]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
pipeline_run: null
---

## Definition

An isolated singularity is a **simple pole** when it is a pole of order $1$ in
the sense of [[def-isolated-singularity-types]].

## Remarks

Equivalently, $a$ is a simple pole of $f$ when $(z-a)f(z)$ extends
holomorphically across $a$ and takes a nonzero value there.
