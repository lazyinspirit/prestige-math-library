---
id: def-absolute-upper-ramification-filtration-at-a-curve-point
kind: definition
title: "Absolute upper ramification filtration at a curve point"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-geometric-local-field-at-a-curve-point
  - def-absolute-galois-group-of-a-field
  - def-finite-geometric-upper-ramification-numbering
  - thm-herbrand-quotient-compatibility-for-geometric-local-fields
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: n/a
---
## Definition

Let $K_x$ be a geometric local field at a curve point, let $K_x^{\mathrm{sep}}$ be a separable closure, and let $G_{K_x}=\operatorname{Gal}(K_x^{\mathrm{sep}}/K_x)$. For each finite Galois subextension $L/K_x$, form the finite upper-numbered groups $\operatorname{Gal}(L/K_x)^v$. The **absolute upper ramification group** at real index $v\geq0$ is $G_{K_x}^v:=\varprojlim_{L/K_x}\operatorname{Gal}(L/K_x)^v$, with transition maps induced by restriction. The quotient compatibility required for this inverse limit is the Herbrand theorem stated separately on this page.

## Definition references

[[def-geometric-local-field-at-a-curve-point|Geometric local field at a curve point]]

[[def-absolute-galois-group-of-a-field|Absolute Galois group of a field]]

[[def-finite-geometric-upper-ramification-numbering|Upper numbering for a finite geometric local extension]]

[[thm-herbrand-quotient-compatibility-for-geometric-local-fields|Herbrand compatibility for quotients of geometric local Galois groups]]
