---
id: def-distinct-node-divided-difference
kind: definition
title: Divided differences on distinct nodes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: []
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 5
      url: https://people.maths.ox.ac.uk/trefethen/ATAP/ATAPfirst6chapters.pdf
    - title: Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation, Sections 2–3
      url: https://people.maths.ox.ac.uk/trefethen/barycentric.pdf
---

## Definition

Let $q\ge 0$, let $t_0,\ldots,t_q$ be distinct real numbers, and let $f$ be
real-valued at these nodes. Define the **divided difference** recursively by
$f[t_0]:=f(t_0)$ and, for $q\ge1$,
$$f[t_0,\ldots,t_q]:= \frac{f[t_1,\ldots,t_q]-f[t_0,\ldots,t_{q-1}]}{t_q-t_0}.$$
All sublists in the recursion remain distinct. The denominator is nonzero
because $t_q\ne t_0$, so this recursion gives a finite real number from the
node data.
