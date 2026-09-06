---
id: def-euler-characteristic-of-a-finite-cw-complex
kind: definition
title: Euler characteristic of a finite CW complex
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification: {precheck: n/a, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Definition

If $X$ has finitely many cells and $c_n(X)$ is its number of $n$-cells, define $\chi(X)=\sum_n(-1)^nc_n(X)$. The sum is finite by hypothesis.
