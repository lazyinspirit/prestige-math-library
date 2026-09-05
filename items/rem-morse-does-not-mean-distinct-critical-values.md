---
id: rem-morse-does-not-mean-distinct-critical-values
kind: remark
title: "Being Morse does not by itself force distinct critical values; excellence is a separate generic condition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morse-function-and-excellent-morse-function, lem-finitely-many-critical-values-can-be-separated-locally]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Remark

The adjective **Morse** controls only the Hessians at critical points, not the
relative heights of those critical points. By
[[def-morse-function-and-excellent-morse-function]], repeated critical values
are allowed unless one adds the extra adjective **excellent**.

The point of [[lem-finitely-many-critical-values-can-be-separated-locally]] is
that on a compact manifold this extra condition is still generic: repeated
critical levels can be broken by local perturbations that do not change the
critical Hessians.
