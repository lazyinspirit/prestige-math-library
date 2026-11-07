---
id: def-one-variable-function-field-with-constant-field
kind: definition
title: One-variable function-field datum with exact constants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-global-field
  - def-place-of-a-global-field
  - def-finitely-generated-field-extension
  - def-relative-algebraic-closure
  - def-multiplicative-absolute-value-on-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-weil-divisor-normal-noetherian-scheme
  - def-degree-divisor-proper-curve
  - def-order-codimension-one-rational-function
  - def-principal-weil-divisor-and-class-group
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-product-formula-for-function-fields
  - thm-finitely-generated-algebraic-extensions-are-finite
  - thm-normalization-glues-integral-finite-type-curves
  - thm-curves-function-fields-equivalence
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.1"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical Heights on Varieties with Morphisms, §1"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. A **one-variable function-field datum with exact
constants** consists of a finitely generated field extension $K/k$ of
transcendence degree one, with $k$ relatively algebraically closed in $K$,
and a specified normal proper integral curve $C/k$ with function field $K$.
When $k$ is finite, choose the smooth proper geometrically integral model
whose existence follows from the curve/function-field equivalence; for
arbitrary $k$, the stated normal proper model suffices.
The places $M_K$ are the closed points $v$ of $C$, with normalized order
$\operatorname{ord}_v$ and degree $\deg(v)=[\kappa(v):k]$. Use
$|a|_v=q^{-\operatorname{ord}_v(a)\deg(v)}$ if $k=\mathbb F_q$, and
$|a|_v=\exp(-\operatorname{ord}_v(a)\deg(v))$ otherwise. The principal-divisor
degree theorem gives finite support and the product formula. When $k$ is
finite, $K$ is a global field and these are its usual places and absolute
values. For a finite extension $L/K$, write $k_L$ for the relative algebraic
closure of $k$ in $L;
it is finite over $k$, and the normal proper curve model of $L/k_L$ is taken
from normalization of $C$ in $L.

## Definition references

[[def-global-field]]

[[def-place-of-a-global-field]]

[[def-finitely-generated-field-extension]]

[[def-relative-algebraic-closure]]

[[def-multiplicative-absolute-value-on-a-field]]

[[def-weil-divisor-normal-noetherian-scheme]]

[[def-degree-divisor-proper-curve]]

[[def-order-codimension-one-rational-function]]

[[def-principal-weil-divisor-and-class-group]]

[[thm-principal-divisor-degree-zero-proper-curve]]

[[thm-product-formula-for-function-fields]]

[[thm-finitely-generated-algebraic-extensions-are-finite]]

[[thm-normalization-glues-integral-finite-type-curves]]

[[thm-curves-function-fields-equivalence]]

[[def-axiom-of-choice]]
