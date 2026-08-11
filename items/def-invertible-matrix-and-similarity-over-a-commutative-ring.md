---
id: def-invertible-matrix-and-similarity-over-a-commutative-ring
kind: definition
title: "Invertible square matrices and similarity over a commutative ring"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ring-matrix-product-identity-and-transpose, thm-ring-matrix-arithmetic-laws, def-invertible-element, lem-inverse-unique]
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
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring. A matrix $A\in M_n(R)$ is **invertible** when there is $B\in M_n(R)$ with $AB=I_n=BA$. The inverse is unique and is denoted $A^{-1}$. The **general linear group over $R$** is
$$\operatorname{GL}_n(R):=\{A\in M_n(R):A\text{ is invertible}\}.$$

Matrices $A,B\in M_n(R)$ are **similar over $R$** when there is $P\in\operatorname{GL}_n(R)$ such that $B=P^{-1}AP$. Associativity and the identity laws from [[thm-ring-matrix-arithmetic-laws]] make these the usual units and conjugacy relation in the matrix monoid.

