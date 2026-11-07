---
id: def-absolute-galois-group-of-a-global-field
kind: definition
title: "Absolute Galois group of a global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-absolute-galois-group-of-a-field
  - def-global-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter II, Section 4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification:
  precheck: n/a
---

## Definition

Let $F$ be a global field, meaning either a number field or a one-variable
function field over its exact finite constant field. Its **absolute Galois
group** is the group $G_F=\operatorname{Gal}(F_s/F)$ from the field-level
definition, formed from the finite Galois subextensions of a fixed separable
closure $F_s$ and endowed with their inverse-limit topology. The definition
does not distinguish the number-field and function-field cases.

## Definition references

[[def-global-field]]

[[def-absolute-galois-group-of-a-field]]

[J. S. Milne, *Class Field Theory*, Chapter II, Section 4, printed pp. 86–88](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
