---
id: def-definiteness-inertia-and-signature-data-over-the-reals
kind: definition
title: 'Positive and negative definiteness, the inertia $(p,q,r)$, rank $p+q$, and signature $p-q$ of a real symmetric bilinear or quadratic form'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quadratic-form-and-polar-form, thm-reals-ordered-field, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]
justified_by: [thm-sylvesters-law-of-inertia]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §7.7'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'J. Kuan, Positive Definite Matrices'
      url: 'https://math.berkeley.edu/~jkuan/Lecture_July31.pdf'
pipeline_run: null
---

## Definition

Let $B$ be a symmetric bilinear form on a finite-dimensional real vector space, and write $q(v):=B(v,v)$. The form is **positive definite** when $q(v)>0$ for every $v\ne0$, and **negative definite** when $q(v)<0$ for every $v\ne0$. The same terminology applies to the associated quadratic form.

Suppose a basis gives a diagonal matrix with $p$ positive diagonal entries, $q$ negative diagonal entries, and $r$ zero entries. Its **inertia** is the triple $(p,q,r)$, its **rank** is $p+q$, and its **signature** is $p-q$. Sylvester's law of inertia proves that this triple is independent of the diagonalizing basis, and therefore justifies the notation.
