---
id: def-floater-hormann-window-polynomial
kind: definition
title: Local polynomial in a Floater–Hormann window
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-interpolant
dependency_level: 3
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation
        with no poles and high rates of approximation, Section 2
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

For the nodes, data, and degree parameter of
[[def-floater-hormann-interpolant]], let $0\le i\le n-d$. The local
**window polynomial** is
$$p_i(t)=\sum_{k=i}^{i+d}f_k \prod_{\substack{i\le j\le i+d\\j\ne k}} \frac{t-x_j}{x_k-x_j}.$$
All denominators are nonzero because the nodes are distinct. Empty products
equal one, in particular when $d=0$.
