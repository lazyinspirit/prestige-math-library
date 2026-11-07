---
id: alg-enumerate-solutions-of-two-variable-number-field-unit-equation
kind: algorithm
title: "Enumerate solutions of a fixed two-variable number-field unit equation from an explicit height bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - alg-certified-fundamental-unit-basis-and-torsion-decomposition
  - thm-certified-fundamental-unit-basis-and-torsion-computation-correct
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-fundamental-units
  - thm-effective-s-unit-equation-finite-solutions
  - thm-s-unit-theorem
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Theorem 5.12 and proof"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Input a number field $K$ by an exact presentation $K=\mathbb Q[T]/(f)$ with $f\in\mathbb Q[T]$ monic and irreducible, and input nonzero coefficients $\alpha,\beta\in K$ as exact residue classes. The output is a finite list of all pairs $(x,y)\in(\mathcal O_K^\times)^2$ satisfying $\alpha x+\beta y=1$. Use exact rational polynomial arithmetic modulo $f$ for field operations and exact equality tests.

1. Obtain a certified fundamental-unit system $\epsilon_1,\ldots,\epsilon_r$ and a complete finite list of $\mu(K)$, with the unique representation $u=\zeta\epsilon_1^{a_1}\cdots\epsilon_r^{a_r}$ for every unit $u$.

2. Compute an integer $H\ge0$ from the explicit effective lower-bound argument so that every solution has unit exponents satisfying $|a_i|,|b_i|\le H$.

3. Enumerate every $\zeta_1,\zeta_2\in\mu(K)$ and every exponent vector $\mathbf a,\mathbf b\in\mathbb Z^r$ with coordinates in $[-H,H]$. Form $x=\zeta_1\prod_i\epsilon_i^{a_i}$ and $y=\zeta_2\prod_i\epsilon_i^{b_i}$, retain exactly those pairs passing the exact equality test $\alpha x+\beta y=1$, and output each retained pair once.

For $r=0$, the exponent box is the singleton $\mathbb Z^0$ and the same finite enumeration uses only the torsion list.

## Definition references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[def-fundamental-units]]

[[thm-s-unit-theorem]]

[[thm-effective-s-unit-equation-finite-solutions]]

[Evertse, *Diophantine Equations*, Chapter 5, §5.3, Theorem 5.12](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Remarks

Instruction 1 is supplied by the certified fundamental-unit algorithm and its correctness theorem. Instruction 2 is the explicit rational cutoff constructed in the effective determination theorem. The latter still depends on the separately held homogeneous logarithmic bound; algorithmic readiness is not asserted while that foundation remains unresolved.

## Remarks references

[[alg-compute-units-and-class-group-from-bounded-s-units]]

[[thm-bounded-s-unit-matrix-computation-correct]]
