---
id: def-absolute-galois-group-of-a-local-field
kind: definition
title: "Absolute Galois group of a nonarchimedean local field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-absolute-galois-group-of-a-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV, Sections 8.2–8.3"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter II, Section 4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a complete discretely valued field with finite residue field, and
fix a separable closure $K_s$. Its **absolute Galois group** is
$G_K=\operatorname{Gal}(K_s/K)$ with the inverse-limit topology obtained from
the finite Galois subextensions $K\subseteq E\subseteq K_s$ and their
restriction maps. This definition concerns nonarchimedean local fields;
archimedean completions are excluded.

## Definition references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-absolute-galois-group-of-a-field]]

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter IV, Sections 8.2–8.3, printed pp. 168–170](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[J. S. Milne, *Class Field Theory*, Chapter II, Section 4, printed pp. 86–88](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
