---
id: def-classical-modular-equation-for-cyclic-isogenies
kind: definition
title: "Classical modular equation for cyclic isogenies"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-modular-discriminant-and-j-invariant
  - thm-j-invariant-classifies-complex-tori
  - thm-ring-of-level-one-modular-forms
  - thm-q-expansion-principle-at-the-cusp
  - lem-jacobi-product-formula-for-the-discriminant
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Chapter 11, §11C, equations (11.14)–(11.15), printed pp. 231–232"
verification:
  precheck: n/a
---

## Definition

Let $m\ge1$ and let $\Lambda_\tau=\mathbb Z+\mathbb Z\tau$ for
$\tau\in\mathfrak H$. A cyclic sublattice of index $m$ is a subgroup
$\Lambda'\subseteq\Lambda_\tau$ for which
$[\Lambda_\tau:\Lambda']=m$ and $\Lambda_\tau/\Lambda'\cong\mathbb Z/m\mathbb Z$.
For every such $\Lambda'$, choose an oriented basis $(\omega_1,\omega_2)$ and
write $j(\Lambda')=j(\omega_2/\omega_1)$. The classical modular equation
$\Phi_m(X,Y)$ is the polynomial characterized by
$$\Phi_m(X,j(\tau))=\prod_{\substack{\Lambda'\subseteq\Lambda_\tau\\ [\Lambda_\tau:\Lambda']=m\\ \Lambda_\tau/\Lambda'\cong\mathbb Z/m\mathbb Z}} (X-j(\Lambda')).$$
The existence, uniqueness, and integral coefficient properties used below are
proved in the following theorem.

## Definition references

[[def-modular-discriminant-and-j-invariant|The invariant $j(\tau)$ is modular and has a simple pole with leading term $q^{-1}$.]]

[[thm-j-invariant-classifies-complex-tori|The value $j(\Lambda)$ depends only on the homothety class of a complex lattice.]]

[Cox, Chapter 11, §11C, equations (11.14)–(11.15)](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

[Milne, *Modular Functions and Modular Forms*, Chapter 7](https://www.jmilne.org/math/CourseNotes/MF110.pdf)
