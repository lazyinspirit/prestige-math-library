---
id: def-exceptional-zero-of-a-real-primitive-dirichlet-l-function
kind: definition
title: "Exceptional real zero of a real primitive Dirichlet L-function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-dirichlet-l-function
  - def-primitive-dirichlet-character-and-conductor
  - thm-primitive-dirichlet-l-analytic-continuation
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., revised by Hugh L. Montgomery, Chapter 14"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Printed pp. 88–95: real zero terminology in the primitive Dirichlet zero-free-region argument."
verification:
  precheck: n/a
---

## Definition

Let $q>1$ be an integer and let $\chi$ be a real, nonprincipal, primitive Dirichlet character modulo $q$. A real number $\beta$ is an **exceptional real zero of $L(s,\chi)$** if $0<\beta<1$ and the analytic continuation of $L(s,\chi)$ vanishes at $s=\beta$. This definition asserts neither that such a zero exists nor that it is unique in any region.

## Definition references

[Davenport, Chapter 14, complete section](https://djvu.online/file/Rh8B8jEVpxFgk)

## Facts & Assumptions

**Given:** An integer $q>1$ and a real, nonprincipal, primitive Dirichlet character $\chi$ modulo $q$.

[F1] A Dirichlet $L$-function is the analytic continuation of its Dirichlet series $\sum_{n\ge1}\chi(n)n^{-s}$ ([[def-dirichlet-l-function]], [[thm-primitive-dirichlet-l-analytic-continuation]]).

[F2] A primitive character has a positive integer conductor, and it is real when all its values are real ([[def-primitive-dirichlet-character-and-conductor]]).
