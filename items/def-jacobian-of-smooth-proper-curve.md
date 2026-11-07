---
id: def-jacobian-of-smooth-proper-curve
kind: definition
title: Algebraic Jacobian of a Smooth Proper Curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-algebraic-curve-over-field
  - def-picard-fppf-sheaf-of-smooth-proper-curve
  - def-degree-components-of-relative-picard-sheaf-for-curve
  - def-abelian-variety-over-a-field
  - def-picard-group-scheme
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

Let $C$ be a smooth, proper, geometrically connected curve over a field $k$. When the degree-zero relative Picard fppf sheaf $\operatorname{Pic}^0_{C/k}$ is represented by an abelian variety over $k$, denote that representing abelian variety by $J_C$ and call it the **algebraic Jacobian** of $C$. This is conditional notation: the definition alone does not assert existence or identify $J_C(k)$ with all isomorphism classes of degree-zero line bundles on $C$.

## Definition references

[Milne, construction of the Jacobian as the Picard variety, Ch. III §1](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, Jacobian and Picard-scheme points, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[[def-abelian-variety-over-a-field]]

[[def-picard-group-scheme]]
