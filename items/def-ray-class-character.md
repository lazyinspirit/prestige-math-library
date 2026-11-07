---
id: def-ray-class-character
kind: definition
title: "Finite-order ray class character"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-ray-class-group
  - lem-ray-class-congruence-subgroup-well-defined
  - def-group-homomorphism
  - def-complex-numbers-and-arithmetic
dependency_level: 6
axiom_use: No choice axiom is used by this group-homomorphism definition.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI, Example 1.1(c), printed p.184."
verification:
  precheck: n/a

---

## Definition

Let $K$ be a number field and $\mathfrak m$ a modulus. A **finite-order ray class character modulo $\mathfrak m$** is a group homomorphism
$$
\chi:\operatorname{Cl}_{\mathfrak m}(K)\longrightarrow\mathbb C^\times
$$
whose image is finite.

## Definition references

[[def-ray-class-group|Ray class group]]

[[lem-ray-class-congruence-subgroup-well-defined|Well-defined group structure]]

[[def-group-homomorphism|Group homomorphism]]

[[def-complex-numbers-and-arithmetic|Complex numbers and their multiplicative group]]

[Milne, Chapter VI Example 1.1(c)](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
