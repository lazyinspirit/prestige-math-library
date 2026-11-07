---
id: def-quadratic-order-of-discriminant
kind: definition
title: Quadratic Order of a Nonsquare Discriminant
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-order-in-a-number-field
  - def-discriminant-of-a-number-field-basis-and-order
justified_by:
  - thm-quadratic-order-formula-verifies-discriminant
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §3.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "William Dallaporta, Recovering the Picard group of quadratic algebras from Wood's binary quadratic forms, §§2–3"
      url: "https://arxiv.org/pdf/2111.13422"
verification:
  precheck: n/a
---

## Definition

Let $D$ be a nonzero nonsquare integer with $D\equiv0$ or $1\pmod4$. Put
$\delta=0$ when $D\equiv0\pmod4$ and $\delta=1$ when $D\equiv1\pmod4$, and set
$q_D=(D-\delta^2)/4$, $K_D=\mathbb Q(\sqrt D)$, and
$\tau_D=(\delta+\sqrt D)/2$. The **quadratic order of discriminant $D$** is
$\mathcal O_D=\mathbb Z[\tau_D]$, with ordered $\mathbb Z$-basis
$(1,\tau_D)$ and multiplication rule $\tau_D^2=\delta\tau_D+q_D$. Its
conjugation is determined by $\overline{\tau_D}=\delta-\tau_D$. Choose
$\sqrt D>0$ when $D>0$ and $\operatorname{Im}\sqrt D>0$ when $D<0$. The
discriminant $D$ need not be fundamental; nonmaximal orders are included.

## Definition references

[[def-number-field|A number field is a finite extension of Q.]]

[[def-ring-of-integers-of-a-number-field|The ring of integers is the integral closure of Z in the number field.]]

[[def-order-in-a-number-field|An order is a unital subring of the ring of integers, free of rank equal to the field degree.]]

[[def-discriminant-of-a-number-field-basis-and-order|The order discriminant is the determinant of the trace-pairing matrix in an integral basis.]]

[Bhargava, “Higher Composition Laws I,” §3.1, Theorem 8, pp. 230–232](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

[Milne, *Algebraic Number Theory*, §§4.28–4.29, pp. 81–83](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Dallaporta, “Recovering the Picard group…,” §§2–3](https://arxiv.org/pdf/2111.13422)
