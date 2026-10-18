---
id: def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra
kind: definition
title: "Maurer–Cartan element of a complete filtered L∞-algebra"
status: draft
dependency_level: 7
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-complete-filtered-l-infinity-algebra
  - thm-filtered-l-infinity-maurer-cartan-series-converges
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §13.2"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

For a complete filtered L∞-algebra in the convention of
[[def-complete-filtered-l-infinity-algebra]], a **Maurer–Cartan element** is
an element $w\in F^1W^0$ satisfying

$$\sum_{n\ge1}\frac{1}{n!}q_n(w,\ldots,w)=0.$$

The series is the unique limit proved in
[[thm-filtered-l-infinity-maurer-cartan-series-converges]]. This equation
defines a set of solutions; it does not by itself specify a deformation
problem or an equivalence relation on those solutions.
