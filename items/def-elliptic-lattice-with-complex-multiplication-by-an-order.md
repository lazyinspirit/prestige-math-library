---
id: def-elliptic-lattice-with-complex-multiplication-by-an-order
kind: definition
title: "Elliptic lattice with complex multiplication by an order"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-quadratic-order-of-discriminant
  - def-complex-lattice-and-complex-torus
  - thm-j-invariant-classifies-complex-tori
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Chapter 11, §11A and Theorem 11.1, printed pp. 221–222, 237"
    - title: "J. S. Milne, Modular Functions and Modular Forms"
      url: "https://www.jmilne.org/math/CourseNotes/MF110.pdf"
      locator: "Chapter 7, complex multiplication by an order"
verification:
  precheck: n/a
---

## Definition

Let $D<0$ be a nonzero nonsquare integer with $D\equiv0$ or $1\pmod4$, let
$K_D=\mathbb Q(\sqrt D)\subset\mathbb C$ with $\operatorname{Im}\sqrt D>0$,
and let $\mathcal O_D$ be the order of discriminant $D$. A full lattice
$\Lambda\subset\mathbb C$ has **complex multiplication by $\mathcal O_D$** if
its multiplier ring
$$\operatorname{End}(\Lambda)=\{z\in\mathbb C:z\Lambda\subseteq\Lambda\}$$
equals the specified embedded copy of $\mathcal O_D$. Its singular modulus is
$j(\Lambda)$, the $j$-invariant of the complex torus $\mathbb C/\Lambda$.

## Definition references

[[def-quadratic-order-of-discriminant|The order $\mathcal O_D=\mathbb Z+\mathbb Z\tau_D$ may be nonmaximal.]]

[[def-complex-lattice-and-complex-torus|A complex lattice is a rank-two discrete subgroup of $\mathbb C$.]]

[[thm-j-invariant-classifies-complex-tori|Homothetic lattices have the same $j$-invariant.]]

[Cox, Chapter 11, §11A](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

[Milne, *Modular Functions and Modular Forms*, Chapter 7](https://www.jmilne.org/math/CourseNotes/MF110.pdf)
