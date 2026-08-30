---
id: def-normalised-lu-factorisation
kind: definition
title: "A normalised LU factorisation has a unit lower-triangular L and an upper-triangular U"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangular-and-diagonal-matrices-over-a-commutative-ring, def-matrix-product-and-identity-matrix]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6"
      url: "https://fncbook.com/pivoting/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Definition

Let $F$ be a field, let $n\ge 1$, and let $A\in M_n(F)$.

A **normalised LU factorisation** of $A$ is a factorisation

$$A=LU,$$

where $L\in M_n(F)$ is lower triangular with diagonal entries all equal to $1$,
and $U\in M_n(F)$ is upper triangular. Thus $L$ is unit lower triangular.

When every diagonal entry of $U$ is nonzero, the factorisation has
**nonzero pivots**. Later existence and uniqueness results state explicitly
when that extra hypothesis is required.
