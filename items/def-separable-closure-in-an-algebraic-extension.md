---
id: def-separable-closure-in-an-algebraic-extension
kind: definition
title: "The separable closure of the base inside an algebraic extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-separable-elements-form-an-intermediate-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be algebraic. The **separable closure of $F$ in $K$** is

$$K_s:=\{a\in K:a\text{ is separable over }F\}.$$

This is an intermediate field by
[[thm-separable-elements-form-an-intermediate-field]]. It is the largest
intermediate extension of $K/F$ that is separable over $F$: any separable
intermediate field consists entirely of elements in the displayed set.
