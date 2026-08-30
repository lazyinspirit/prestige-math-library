---
id: def-forward-and-back-substitution-for-triangular-systems
kind: definition
title: "Forward and backward substitution for triangular linear systems"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangular-and-diagonal-matrices-over-a-commutative-ring, def-matrix-product-and-identity-matrix]
aliases: []
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.5.3"
      url: "https://fncbook.com/efficiency/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Definition

Let $F$ be a field, let $n\ge 1$, and let $b\in F^n$.

If $L=(\ell_{ij})\in M_n(F)$ is lower triangular with every diagonal entry
$\ell_{ii}\ne 0$, the **forward substitution solve** of $Lx=b$ is the recursive
construction

$$x_i:=\frac{1}{\ell_{ii}}\left(b_i-\sum_{j<i}\ell_{ij}x_j\right)\qquad(0\le i<n).$$If $U=(u_{ij})\in M_n(F)$ is upper triangular with every diagonal entry $u_{ii}\ne 0$, the **backward substitution solve** of $Ux=b$ is the recursive construction$$x_i:=\frac{1}{u_{ii}}\left(b_i-\sum_{j>i}u_{ij}x_j\right)\qquad(n-1\ge i\ge 0).$$

The triangular vocabulary is from
[[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]. The matrix
product convention from [[def-matrix-product-and-identity-matrix]] is the one
used when later items rewrite these recursions as matrix equations.
