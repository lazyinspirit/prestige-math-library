---
id: rem-picard-rational-point-versus-line-bundle
kind: remark
title: A Rational Picard-Scheme Point Need Not Be a Line Bundle
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-picard-fppf-sheaf-of-smooth-proper-curve
  - def-degree-components-of-relative-picard-sheaf-for-curve
  - thm-picard-zero-represented-by-jacobian
  - def-picard-degree-one-torsor-under-jacobian
  - thm-picard-degree-one-component-is-a-jacobian-torsor
  - thm-line-bundle-rational-section-cartier-divisor
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §1, printed pp. 85–90
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
---

## Remark

Assume the Axiom of Choice and the Axiom of Dependent Choice ([[def-axiom-of-choice]], [[def-dependent-choice]]), as required by the Picard-representability supplier.

For a smooth proper geometrically connected curve $C/k$, a $k$-rational point of the representing scheme $\operatorname{Pic}^d_{C/k}$ is a section of the relative Picard fppf sheaf. It need not be represented by a line bundle on $C$ itself, so the natural map from degree-$d$ line bundles on $C$ modulo isomorphism to $\operatorname{Pic}^d_{C/k}(k)$ need not be surjective.

## Remark references

[Poonen, Picard-scheme rational points and line bundles, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Milne, Picard functor and Jacobian, Ch. III §1](https://www.jmilne.org/math/CourseNotes/AV.pdf)
