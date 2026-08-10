---
id: rem-polynomials-are-not-polynomial-functions
kind: remark
title: 'Formal polynomials are not the functions they induce'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, def-polynomial-evaluation-and-root, thm-root-bound-for-polynomials-over-a-domain]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Section 22, Golden Rule'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

A formal polynomial is its finitely supported coefficient sequence ([[def-polynomial-ring-over-a-commutative-ring]]). Evaluation ([[def-polynomial-evaluation-and-root]]) assigns to it a function only after a target ring and a coefficient homomorphism have been chosen. Distinct formal polynomials can therefore induce the same function on a finite ring.

Over an infinite integral domain the distinction remains conceptual but evaluation is injective: if two polynomials have equal values, their difference has every domain element as a root, and [[thm-root-bound-for-polynomials-over-a-domain]] forces that difference to be zero. The infinitude and domain hypotheses are both essential to that conclusion.
