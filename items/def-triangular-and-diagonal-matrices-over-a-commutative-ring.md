---
id: def-triangular-and-diagonal-matrices-over-a-commutative-ring
kind: definition
title: "Upper triangular, lower triangular and diagonal square matrices over a commutative ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Ch. 4"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §4.1"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring, let $n\ge1$, and let $A=(a_{ij})\in M_n(R)$. It is **upper triangular** when $a_{ij}=0$ for $i>j$, **lower triangular** when $a_{ij}=0$ for $i<j$, and **diagonal** when $a_{ij}=0$ whenever $i\ne j$.
