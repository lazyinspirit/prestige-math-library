---
id: def-cm-class-polynomial-of-imaginary-quadratic-order
kind: definition
title: "CM class polynomial of an imaginary quadratic order"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-elliptic-lattice-with-complex-multiplication-by-an-order
  - thm-cm-lattice-homothety-classes-are-proper-ideal-classes
  - thm-cm-singular-moduli-are-algebraic-integers
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders
  - cor-finiteness-of-positive-definite-binary-form-classes
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Chapter 11, Theorem 11.1 and Corollary 11.2"
    - title: "J. S. Milne, Modular Functions and Modular Forms"
      url: "https://www.jmilne.org/math/CourseNotes/MF110.pdf"
      locator: "Theorem 12.18 and its maximal-order class-field conclusion, printed pp. 120–126"
verification:
  precheck: n/a
---

## Definition

Let $D<0$ be a quadratic discriminant and let $\mathcal C_D$ be the finite
ordinary proper ideal class group of $\mathcal O_D$. For each class
$[\mathfrak a]\in\mathcal C_D$, let $j([\mathfrak a])$ be the $j$-invariant
of any proper invertible fractional ideal in that class. The **CM class
polynomial** is
$$H_D(X)=\prod_{[\mathfrak a]\in\mathcal C_D} \bigl(X-j([\mathfrak a])\bigr).$$
It is well-defined because homothetic lattices have the same $j$-invariant.
Its coefficients are algebraic integers because each singular modulus is an
algebraic integer; rationality and irreducibility are asserted only by the
theorem on class polynomial integrality and irreducibility.

## Definition references

[[thm-cm-lattice-homothety-classes-are-proper-ideal-classes|The classes index distinct homothety classes and their $j$-values are distinct.]]

[[thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders|Proper ideal classes correspond to primitive positive-definite form classes for negative discriminant.]]

[[cor-finiteness-of-positive-definite-binary-form-classes|The negative-discriminant proper ideal class group is finite.]]

[[thm-cm-singular-moduli-are-algebraic-integers|Each singular modulus is an algebraic integer.]]

[Cox, Chapter 11, Theorem 11.1 and Corollary 11.2](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)
