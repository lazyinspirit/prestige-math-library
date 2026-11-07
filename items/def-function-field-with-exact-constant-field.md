---
id: def-function-field-with-exact-constant-field
kind: definition
title: Function field with exact field of constants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-finitely-generated-field-extension
  - def-relative-algebraic-closure
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, Definition 9.5.6, printed p. 287"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
    - title: "Pierre Samuel, Compléments à un article de Hans Grauert sur la conjecture de Mordell, introductory setup, printed pp. 55–56"
      url: https://www.numdam.org/item/PMIHES_1966__29__55_0.pdf
verification:
  precheck: n/a
---

## Definition

Let $k\subseteq K$ be fields. The pair $(K,k)$ is a **function field with exact
constant field $k$** if $K=k(a_1,\ldots,a_n)$ for some finite tuple
$a_1,\ldots,a_n\in K$, the transcendence degree $\operatorname{trdeg}_k K$ is
positive, and every element of $K$ algebraic over $k$ belongs to $k$. In this
case $k$ is the exact field of constants of $K$. The field $k$ need not be
finite or algebraically closed.

## Definition references

[[def-finitely-generated-field-extension]]

[[def-relative-algebraic-closure]]

[Poonen, Definition 9.5.6, printed p. 287](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Samuel, introductory setup, printed pp. 55–56](https://www.numdam.org/item/PMIHES_1966__29__55_0.pdf)
