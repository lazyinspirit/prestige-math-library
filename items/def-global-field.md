---
id: def-global-field
kind: definition
title: "Global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - def-axiom-of-choice
  - def-finite-field-and-its-order
  - def-finitely-generated-field-extension
  - def-number-field
  - def-relative-algebraic-closure
  - thm-curves-function-fields-equivalence
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Chapter 18, Global Fields"
      url: "https://wstein.org/books/ant/ant.pdf"
    - title: "Michael Rosen, Number Theory in Function Fields, Chapter 5, Algebraic Function Fields and Global Function Fields"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
verification:
  precheck: n/a
---

## Definition

A **global field** is either a number field, meaning a finite extension of
$\mathbb Q$, or a function field over a finite field $k=\mathbb F_q$, meaning
a finitely generated extension $F/k$ that contains an element $t$ transcendental
over $k$ and is algebraic over $k(t)$, and in which every element algebraic
over $k$ already belongs to $k$. In the function-field case, $k$ is called the
full or exact constant field.

## Definition references

[[def-number-field]]

[[def-finite-field-and-its-order]]

[[def-finitely-generated-field-extension]]

[[def-relative-algebraic-closure]]

## Remarks

The two field classes in the Definition require no choice axiom. When a curve
model is used for a function field, the Axiom of Choice is assumed: finite
fields are perfect, and the smooth-proper-curve/function-field equivalence
then supplies a model unique up to unique isomorphism.

## Remarks references

[[def-axiom-of-choice]]

[[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]

[[thm-curves-function-fields-equivalence]]
