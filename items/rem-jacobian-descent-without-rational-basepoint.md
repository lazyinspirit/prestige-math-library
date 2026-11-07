---
id: rem-jacobian-descent-without-rational-basepoint
kind: remark
title: Basepoint Dependence of Abel Maps and Descent of the Jacobian
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - lem-jacobian-descends-without-rational-basepoint
  - thm-jacobian-has-canonical-principal-polarization
  - def-pointed-abel-jacobi-map-of-curve
  - thm-picard-degree-one-component-is-a-jacobian-torsor
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §§1 and 6, printed pp. 85–90 and 104–108
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Remark

Assume the Axiom of Choice and the Axiom of Dependent Choice ([[def-axiom-of-choice]], [[def-dependent-choice]]), as required by the Picard-representability, descent, and polarization suppliers.

A smooth proper geometrically connected curve need not have a rational point for its Jacobian or canonical principal polarization to be defined over its ground field. Over an extension with a chosen point $P$, the pointed Abel–Jacobi map is $Q\mapsto[\mathcal O_C(Q-P)]$; changing $P$ to $Q_0$ translates this map, and the corresponding theta divisor is translated, while its induced Mumford homomorphism is unchanged. The degree-one Picard component remains a torsor and can be nontrivial.

## Remark references

[Milne, Jacobian and basepoint independence, Ch. III §§1 and 6](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, Jacobian descent and Picard torsors, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)
