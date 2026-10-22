---
id: def-matrix-product-and-identity-matrix
kind: definition
title: 'Rectangular matrix multiplication and the identity matrix $I_n$, including zero-sized shapes'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-space, def-finite-sum-in-a-commutative-monoid]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

Let $F$ be a field, let $m,n,p\in\mathbb N$, and let
$A=(a_{ij})\in M_{m\times n}(F)$ and
$B=(b_{jk})\in M_{n\times p}(F)$. Their **matrix product** is the matrix
$AB\in M_{m\times p}(F)$ whose entries are

$$(AB)_{ik}:=\sum_{j\in n}a_{ij}b_{jk}.$$

The sum is the finite sum in the additive commutative monoid of $F$. If $n=0$,
it is the empty sum, so $AB$ is the zero matrix of shape $m$ by $p$.

The **identity matrix** $I_n\in M_n(F)$ has entry $1$ when $i=j$ and entry $0$
when $i\ne j$. In particular, $I_0$ is the unique empty matrix in $M_0(F)$.
