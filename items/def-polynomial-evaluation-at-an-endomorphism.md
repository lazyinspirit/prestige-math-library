---
id: def-polynomial-evaluation-at-an-endomorphism
kind: definition
title: 'Polynomial evaluation at an endomorphism: $p(T)=\sum_k a_kT^k$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, def-vector-space-of-linear-maps, lem-composition-and-identity-linear-maps]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
    - title: 'H. Pinkham, Linear Algebra, §12.3'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Definition

Let $T:V\to V$ be an endomorphism and let $p(x)=\sum_{k\geq0}a_kx^k\in F[x]$. Define

$$p(T):=\sum_{k\geq0}a_kT^k\in\mathcal L(V,V),$$

where $T^0:=I_V$ and $T^{k+1}:=T\circ T^k$. The sum is finite because the coefficient sequence of $p$ has finite support. In particular, the zero polynomial evaluates to the zero endomorphism and the constant polynomial $1$ evaluates to $I_V$.
