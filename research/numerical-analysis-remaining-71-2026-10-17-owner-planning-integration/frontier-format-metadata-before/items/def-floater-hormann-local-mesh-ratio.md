---
id: def-floater-hormann-local-mesh-ratio
kind: definition
title: Local mesh ratio for degree-zero Floater–Hormann interpolation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-interpolant
dependency_level: 3
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, Theorem 3
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
---

## Definition

For ordered nodes $x_0<\cdots<x_n$, $n\ge1$, set $\beta:=0$ if $n\le2$. If
$n\ge3$, define the **local mesh ratio**
$$
\beta=
\max_{1\le\alpha\le n-2}
\min\left\{
\frac{x_{\alpha+1}-x_\alpha}{x_\alpha-x_{\alpha-1}},
\frac{x_{\alpha+1}-x_\alpha}{x_{\alpha+2}-x_{\alpha+1}}
\right\}.
$$
All denominators are positive. This parameter is used only for the
degree-zero error bound.
