---
id: def-isotrivial-rational-map-over-function-field
kind: definition
title: Isotriviality of a rational map over a function field after finite extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-one-variable-function-field-with-constant-field
  - def-rational-map-on-projective-line-degree
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.2"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification:
  precheck: n/a
---

## Definition

Let $K/k$ be a one-variable function field with exact constant field $k$, and
let $\phi:\mathbb P^1_K\to\mathbb P^1_K$ be a rational self-map of degree
$d\ge2$. A Möbius transformation over a field $F$ is the map
$M(z)=(az+b)/(cz+e)$ represented by an invertible matrix
$\begin{pmatrix}a&b\\c&e\end{pmatrix}\in\operatorname{GL}_2(F)$.
The map $\phi$ is **isotrivial over $K$** if such an $M$ over $K$ makes
$M^{-1}\circ\phi\circ M$ a rational map with coefficients in $k$. It is
**isotrivial** if there is a finite extension $L/K$ such that the
base-changed map is conjugate by a Möbius transformation over $L$ to a
rational map with coefficients in the relative algebraic closure $k_L$ of
$k$ in $L$. It is **non-isotrivial after every finite extension** if no
such finite extension exists.

## Definition references

[[def-one-variable-function-field-with-constant-field]]

[[def-rational-map-on-projective-line-degree]]

[Baker, §1.2](https://arxiv.org/pdf/math/0601046v2)
