---
id: def-continuous-cohomology-of-a-profinite-group-with-discrete-module
kind: definition
title: "Continuous cohomology of a profinite group with discrete coefficients"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-group-cohomology-as-a-derived-functor
  - thm-the-bar-cochain-complex-computes-derived-group-cohomology
  - def-dependent-choice
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

Let $G$ be a profinite group and let $M$ be an abelian group with the discrete
topology and a continuous left $G$-action; continuity is equivalent to every
element of $M$ having an open stabilizer. For $n\ge0$, let
$C^n_{\mathrm{cts}}(G,M)$ be the abelian group of continuous normalized maps
$G^n\to M$, where normalized means that the map is zero whenever an argument
is the identity (there is no condition in degree zero). Give these groups the
inhomogeneous differential
$$
(dc)(g_1,\ldots,g_{n+1})=g_1c(g_2,\ldots,g_{n+1})+\sum_{i=1}^{n}(-1)^i c(g_1,\ldots,g_i g_{i+1},\ldots,g_{n+1})+(-1)^{n+1}c(g_1,\ldots,g_n).
$$
The **continuous cohomology** $H^n_{\mathrm{cts}}(G,M)$ is the cohomology of
this complex. In the derived-functor convention for group cohomology, assume
Dependent Choice and use supplied injective-resolution data for the invariants
functor; continuous cochains are the corresponding continuous cochain model.
The cochain definition itself uses no choice principle.

## Definition references

[[def-group-cohomology-as-a-derived-functor]]

[[thm-the-bar-cochain-complex-computes-derived-group-cohomology]]

[[def-dependent-choice]]

[J. S. Milne, *Class Field Theory*, Chapter II, Section 4, printed pp. 86–88](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
