---
id: cor-imaginary-form-classes-are-ordinary-ideal-classes
kind: corollary
title: Negative-Discriminant Form Classes Are Ordinary Ideal Classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders
  - def-quadratic-order-of-discriminant
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-binary-quadratic-form-over-integers
  - def-primitive-binary-quadratic-form
  - def-discriminant-of-binary-quadratic-form
  - def-proper-equivalence-of-binary-quadratic-forms
  - def-positive-definite-binary-quadratic-form
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §3.2, Theorems 9–10"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, §4.29, pp. 81–83"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification:
  precheck: pass
---

## Statement

Let $D<0$ be a nonzero nonsquare integer with $D\equiv0$ or $1\pmod4$. For
$\theta_Q=(b+\sqrt D)/2$ and $I_Q=a\mathbb Z+\theta_Q\mathbb Z$, the proper
$\mathrm{SL}_2(\mathbb Z)$-classes of primitive positive-definite integral
binary quadratic forms $Q=(a,b,c)$ of discriminant $D$ are in bijection with
the ordinary proper invertible ideal class group of $\mathcal O_D$ by
$[Q]\mapsto[I_Q]$. No additional negative-definite sign orbit is included.

## Statement references

[Bhargava, “Higher Composition Laws I,” §3.2, Theorems 9–10, pp. 232–233](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

[Milne, *Algebraic Number Theory*, §4.29, pp. 81–83 (fundamental-discriminant case)](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** A nonzero negative nonsquare quadratic discriminant $D$.

[F1] [[thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders]]: for $D<0$, primitive positive-definite proper form classes correspond to $\operatorname{Pic}(\mathcal O_D)$ by $Q\mapsto[I_Q]$.

[F2] [[def-proper-invertible-ideal-class-group-of-a-quadratic-order]]: $\operatorname{Pic}(\mathcal O_D)$ is the quotient by all principal fractional ideals.

[F3] [[def-quadratic-order-of-discriminant]]: $\mathcal O_D$ is the order in $\mathbb Q(\sqrt D)$ attached to $D$.

## Proof

1.1 Apply [F1] to this negative discriminant. The positive-definite domain is exactly the one in the Statement, and the class group there is the ordinary quotient [F2]. [F1, F2, given]

2.1 For $D<0$, the field norm of every nonzero scalar is positive, so no extra real orientation or narrow quotient is present. The ideal formula in [F1] is therefore the stated ordinary ideal-class map. [F1, F2, F3, step 1.1, algebra] ∎
