---
id: def-order-of-a-finite-projective-plane
kind: definition
title: "The order of a finite projective plane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-projective-plane,
       lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points]
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
    - title: "Noam D. Elkies, Math 155 notes: Feb. 3"
      url: "https://people.math.harvard.edu/~elkies/M155.09/feb03"
---

## Definition

Let $(P,\mathcal L)$ be a finite projective plane. By
[[lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points]],
every line has the same number of points. If that common number is $n+1$, then
$n$ is called the **order** of the projective plane.
