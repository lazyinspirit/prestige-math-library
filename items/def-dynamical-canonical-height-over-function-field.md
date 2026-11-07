---
id: def-dynamical-canonical-height-over-function-field
kind: definition
title: Canonical height of a rational map over a function field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-function-field-height-on-projective-line
  - thm-function-field-projective-height-well-defined
  - def-rational-map-on-projective-line-degree
justified_by:
  - thm-function-field-dynamical-height-growth-and-functional-equation
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.2"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical Heights on Varieties with Morphisms, §1"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Let $K/k$ be a one-variable function field with exact constants and let
$\phi:\mathbb P^1_K\to\mathbb P^1_K$ be a rational self-map of degree
$d\ge2$. For $P\in\mathbb P^1(\overline K)$, choose a finite extension
$L/K$ containing its coordinates. The **canonical height** is
$$\hat h_{\phi,K}(P)=\lim_{n\to\infty}d^{-n}h_K(\phi^{\circ n}(P)),$$
when the limit exists, where $h_K$ on $\mathbb P^1(L)$ is the height
normalized relative to $K$ in the projective-height definition. The height
theorem proves independence of the chosen $L$, and the dynamical height
theorem below proves existence of this limit.

## Definition references

[[def-axiom-of-choice]]

[[def-one-variable-function-field-with-constant-field]]

[[def-function-field-height-on-projective-line]]

[[thm-function-field-projective-height-well-defined]]

[[def-rational-map-on-projective-line-degree]]

[Baker, §1.2](https://arxiv.org/pdf/math/0601046v2)
