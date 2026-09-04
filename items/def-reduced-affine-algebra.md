---
id: def-reduced-affine-algebra
kind: definition
title: "A reduced affine k-algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-nilradical-and-reduced-ring
  - def-finite-type-and-module-finite-algebras
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 3e"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, affine variety discussion"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Definition

Let $k$ be a field. A **reduced affine $k$-algebra** is a commutative
$k$-algebra $A$ that is of finite type over $k$ and reduced.

Equivalently, $A$ is a finitely generated commutative $k$-algebra with no
nonzero nilpotent elements.
