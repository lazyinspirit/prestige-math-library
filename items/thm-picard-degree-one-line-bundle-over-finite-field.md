---
id: thm-picard-degree-one-line-bundle-over-finite-field
kind: theorem
title: "A degree-one line bundle exists on every smooth proper curve over a finite field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - thm-picard-degree-one-component-is-a-jacobian-torsor
  - thm-picard-zero-represented-by-jacobian
  - def-jacobian-of-smooth-proper-curve
  - thm-lang-vanishing-for-smooth-connected-group-over-finite-field
  - lem-picard-rational-point-descends-over-finite-field
  - def-degree-components-of-relative-picard-sheaf-for-curve
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: torsor-and-descent
axiom_use: AC is inherited from Lang and finite-field Brauer vanishing; DC is inherited from the Picard descent cohomology supplier. The proof adds no independent choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, Appendix A.9"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Bjorn Poonen, Rational Points on Varieties, §5.7.1"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
verification: {}
---

## Statement

Assume AC and DC.

Let $k$ be a finite field and let $C/k$ be a smooth proper geometrically
integral curve. There is a line bundle on $C$ of degree one.

## Statement references

[[thm-picard-degree-one-component-is-a-jacobian-torsor]]

[[thm-lang-vanishing-for-smooth-connected-group-over-finite-field]]

[[lem-picard-rational-point-descends-over-finite-field]]

[Poonen, *Rational Points on Varieties*, §5.7.1, pp. 139–141](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** A finite field $k$ and a smooth proper geometrically integral
curve $C/k$.

[A1] AC and DC are the choice assumptions of the Lang and Picard-descent
suppliers. ([[def-axiom-of-choice]], [[def-dependent-choice]])

[F1] The degree-one Picard component is a torsor under the Jacobian.
([[thm-picard-degree-one-component-is-a-jacobian-torsor]])

[F2] The Jacobian is a smooth connected algebraic group over $k$, so its
$H^1$ vanishes by Lang's theorem.
([[thm-picard-zero-represented-by-jacobian]],
[[def-jacobian-of-smooth-proper-curve]],
[[thm-lang-vanishing-for-smooth-connected-group-over-finite-field]])

[F3] A $k$-point of the Picard scheme is represented by a line bundle over
$k$ for this finite-field curve.
([[lem-picard-rational-point-descends-over-finite-field]])

[F4] A line bundle represented by a point of the degree-one Picard component
has degree one. ([[def-degree-components-of-relative-picard-sheaf-for-curve]])

## Proof

**Given:** The data in the Statement and Facts & Assumptions.

1.1 By [F1], the degree-one Picard component is a torsor under the Jacobian. The class of this torsor lies in $H^1(k,\operatorname{Jac}(C))$, which is zero by [F2]. Thus the component has a $k$-rational point. [A1, F1, F2]

2.1 Apply [F3] to that point to obtain a line bundle on $C$ representing it. By [F4] the bundle has degree one. [A1, F3, F4, step 1.1] ∎

