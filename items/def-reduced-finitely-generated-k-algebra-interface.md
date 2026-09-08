---
id: "def-reduced-finitely-generated-k-algebra-interface"
kind: "definition"
title: "A reduced finitely generated $k$-algebra"
status: published
origin: "pipeline"
deps: ["def-nilradical-and-reduced-ring", "def-finite-type-and-module-finite-algebras"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §3e pp. 65–66"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

A reduced finite-type $k$-algebra is a commutative unital $k$-algebra $A$ admitting a finite list $a_1,\ldots,a_n$ such that every element is a polynomial in that list with coefficients from $k$, and such that $a^m=0$, $m\ge1$, implies $a=0$. With the terminology of [[def-nilradical-and-reduced-ring]] and [[def-finite-type-and-module-finite-algebras]], equivalently finite type means admitting a surjection $k[T_1,\ldots,T_n]\to A$. The zero algebra is included. “Module-finite” instead means finitely generated as a $k$-module; finite type does not impose that condition.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §3e pp. 65–66. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
