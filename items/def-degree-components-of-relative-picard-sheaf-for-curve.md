---
id: def-degree-components-of-relative-picard-sheaf-for-curve
kind: definition
title: Degree Components of the Relative Picard Sheaf
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-picard-fppf-sheaf-of-smooth-proper-curve
  - def-degree-divisor-proper-curve
  - cor-degree-descends-picard-curve
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §1, printed pp. 85–89
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Definition

For the relative Picard fppf sheaf of a smooth proper geometrically connected curve $C/k$, and an integer $d$, define $\operatorname{Pic}^d_{C/k}$ to be the subfunctor of classes whose restriction to every geometric fiber has degree $d$. The degree is computed after extending the residue field to an algebraic closure; it is unchanged by tensoring with a line bundle pulled back from the base. In particular $\operatorname{Pic}^0_{C/k}$ is the degree-zero subfunctor.

## Definition references

[Milne, degree components of the Picard functor, Ch. III §1](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, degree components and Picard schemes, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[[def-degree-divisor-proper-curve]]

[[cor-degree-descends-picard-curve]]
