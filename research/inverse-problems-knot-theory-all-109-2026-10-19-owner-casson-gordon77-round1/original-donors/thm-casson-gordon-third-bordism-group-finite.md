---
id: thm-casson-gordon-third-bordism-group-finite
kind: theorem
title: The relevant third oriented bordism group is finite
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - lem-low-degree-geometric-bordism-over-finite-cyclic-times-circle
  - def-oriented-bordism-group-of-a-space
  - lem-oriented-bordism-classes-over-a-space-form-an-abelian-group
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Theorem 8.4.7, pp. 170–171; the prime-order case and spectral-sequence deferral read
    - title: A. J. Casson and C. McA. Gordon, Cobordism of Classical Knots (1986), with appendix by P. M. Gilmer
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed p. 189; finiteness of the relevant Ω3(C_m × C∞) bordism group is used but the calculation is not derived
---

## Statement

Assume AC, as in the smooth Casson–Gordon bordism convention. For every prime-power integer $d$ and $G=\mathbb Z/d\oplus\mathbb Z$, the oriented bordism group $\Omega_3^{SO}(K(G,1))$ is finite.

## Statement references

[[def-oriented-bordism-group-of-a-space|The oriented bordism group of maps]]

[[lem-oriented-bordism-classes-over-a-space-form-an-abelian-group|The group structure]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, Theorem 8.4.7, pp. 170–171](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

## Facts & Assumptions

**Given:** The standing AC convention of the smooth Casson–Gordon bordism construction, a prime power $d$, and $G=C_d\times\mathbb Z$.

[F1] These are geometric smooth oriented bordism groups of maps. [[def-oriented-bordism-group-of-a-space]], [[lem-oriented-bordism-classes-over-a-space-form-an-abelian-group]]

[F2] The complete relative-source cutting, low-dimensional coefficient fillings, skeletal exact-couple and periodic cyclic-resolution calculation gives $\Omega^{SO}_3(K(C_d\times\mathbb Z,1))=\mathbb Z/d$, for every positive integer $d$, under AC. [[lem-low-degree-geometric-bordism-over-finite-cyclic-times-circle]]

## Proof

1.1 Apply [F2] to the specified prime-power integer $d$. Its explicit cyclic resolution works for all $d$ without assuming $d$ prime, and its geometric skeletal comparison uses the same smooth bordism convention [F1]. It gives the isomorphism $\Omega^{SO}_3(K(G,1))\cong\mathbb Z/d$. [F1, F2, given, algebra]

2.1 The group $\mathbb Z/d$ has $d$ elements and is finite, including every exponent in a prime power. This proves the assertion under the stated AC convention, rather than inferring the prime-power calculation from its prime-order special case. [F2, step 1.1, algebra] ∎