---
id: def-determinant-of-a-square-matrix
kind: definition
title: 'For $n\ge1$, the determinant over a commutative ring by the Leibniz formula, and $|\det A|$ for a real matrix'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring, def-inversions-inversion-number-and-sign, def-finite-sum-in-a-commutative-monoid, def-monoid-finite-product, thm-number-of-bijections-of-a-finite-set, def-abs-value, thm-reals-field, thm-reals-ordered-field, lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Definition 4.21"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, Definition 6.4.1"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §4.1"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring, let $n\ge1$, and let $A=(a_{ij})\in M_n(R)$. Its **determinant** is
$$\det(A):=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}.$$
The sum is finite because $S_n$ has $n!$ elements. The product is taken in $R$, so the signs $1$ and $-1$ act through the ring identities. The formula uses columns indexed by $i<n$ and rows indexed by $\sigma(i)$.

When $A$ is real, $|\det A|$ means the ordinary real absolute value of its real determinant. It is not alternate notation for the determinant itself.
