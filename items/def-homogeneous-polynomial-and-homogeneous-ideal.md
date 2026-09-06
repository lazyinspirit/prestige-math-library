---
id: def-homogeneous-polynomial-and-homogeneous-ideal
kind: definition
title: "homogeneous polynomial and homogeneous ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, def-graded-ring-and-graded-module]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: n/a
---

## Definition

Put $S=k[x_0,\ldots,x_n]$ with total-degree grading. A polynomial is homogeneous of degree $d$ if each occurring monomial has total degree $d$; $0$ is homogeneous in every degree. An ideal $J\subseteq S$ is homogeneous if $F=\sum_dF_d\in J$ implies $F_d\in J$ for every $d$.

