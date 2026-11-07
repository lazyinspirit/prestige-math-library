---
id: def-picard-degree-one-torsor-under-jacobian
kind: definition
title: The Degree-One Picard Component as a Jacobian Torsor
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-picard-fppf-sheaf-of-smooth-proper-curve
  - def-degree-components-of-relative-picard-sheaf-for-curve
  - def-jacobian-of-smooth-proper-curve
  - def-nonabelian-fppf-h1-as-torsors
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §1, printed pp. 85–90
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Definition

For a smooth, proper, geometrically connected curve $C/k$ whose Jacobian $J_C$ represents $\operatorname{Pic}^0_{C/k}$, the degree-one Picard component $\operatorname{Pic}^1_{C/k}$ carries the right action $L\cdot M:=L\otimes M$ of $J_C$ by tensor product. Call this the **degree-one Picard torsor**; the assertion that it is an fppf torsor is established separately.

## Definition references

[Milne, Picard components, Ch. III §1](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, degree-one Picard component, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[[def-nonabelian-fppf-h1-as-torsors]]
