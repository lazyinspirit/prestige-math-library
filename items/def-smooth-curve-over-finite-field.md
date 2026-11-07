---
dependency_level: 0
id: def-smooth-curve-over-finite-field
kind: definition
title: Smooth curves over fields and finite-field specializations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-smooth-morphism-schemes
  - def-separated-morphism-schemes
  - def-locally-finite-type-and-finite-type-morphism
  - def-geometrically-reduced-integral-connected-fibre
  - def-finite-field-and-its-order
  - def-proper-morphism
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: J. S. Milne, Lectures on Étale Cohomology
      url: https://jmilne.org/math/CourseNotes/LEC.pdf
      locator: Smooth curves and geometrically connected curve hypotheses in Sections 14 and 24
---

## Definition

Let $k$ be a field. A **smooth curve over $k$** is a separated finite-type $k$-scheme that is smooth over $k$ and has pure dimension one: every irreducible component has Krull dimension one, where dimension is the supremum of lengths of chains of irreducible closed subsets. A smooth curve is **geometrically connected** if its base change to every field extension of $k$ is connected. It is **proper** if its structure morphism to $\operatorname{Spec}k$ is proper, and **nonproper** otherwise.

These conventions apply over an algebraically closed field as well as over a finite field. For $k=\mathbb F_q$ they give the smooth finite-field curves used in Frobenius trace formulas. Geometric cohomology refers to the base change $U_{\overline{\mathbb F}_q}$, while cohomology over $\mathbb F_q$ itself is arithmetic cohomology; those two cohomologies are distinct.

## Definition references

[[def-smooth-morphism-schemes]]

[[def-separated-morphism-schemes]]

[[def-locally-finite-type-and-finite-type-morphism]]

[[def-geometrically-reduced-integral-connected-fibre]]

[[def-finite-field-and-its-order]]

[[def-proper-morphism]]

[Milne, Lectures on Étale Cohomology](https://jmilne.org/math/CourseNotes/LEC.pdf)
