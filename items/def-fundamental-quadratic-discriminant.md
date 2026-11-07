---
id: def-fundamental-quadratic-discriminant
kind: definition
title: "Fundamental quadratic discriminant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-squarefree-positive-integer, def-discriminant-of-a-number-field-basis-and-order, thm-ring-of-integers-of-a-quadratic-field]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, §5"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "§5, quadratic fields and their discriminants"
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms, §8.1"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "§8.1, the discriminant of the quadratic resolvent"
verification: {}
---

## Definition

A nonzero integer $D$ is a **fundamental quadratic discriminant** if either $|D|$ is squarefree and $D\equiv1\pmod4$, or $D=4m$ for an integer $m$ with $|m|$ squarefree and $m\equiv2$ or $3\pmod4$. When $D$ is used as the discriminant of a quadratic number field, exclude $D=1$. The corresponding quadratic field has ring of integers discriminant $D$.

## Definition references

[[def-squarefree-positive-integer]]

[[def-discriminant-of-a-number-field-basis-and-order]]

[[thm-ring-of-integers-of-a-quadratic-field]]

[Milne, *Algebraic Number Theory*, §5](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)
