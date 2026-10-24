---
id: def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions
kind: definition
title: "Column-multilinear, alternating, normalized and antisymmetric functions on square matrices over a commutative ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring, def-function, def-commutative-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Definition 4.17"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, Definition 6.4.1"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Definition

Fix $n\ge1$ and a commutative ring $R$. A function $F:M_n(R)\to R$ is **column-multilinear** when, with all other columns fixed, it is additive and compatible with scalar multiplication in each selected column.

It is **alternating** when $F(A)=0$ whenever two columns of $A$ are equal. It is **antisymmetric** when interchanging two columns negates its value. It is **normalized** when $F(I_n)=1$. These conditions are stated over the ring itself and do not assume that $2$ is invertible.

