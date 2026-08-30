---
id: def-ldu-factorisation
kind: definition
title: "An LDU factorisation has unit lower-triangular L, diagonal D, and unit upper-triangular U"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normalised-lu-factorisation, def-triangular-and-diagonal-matrices-over-a-commutative-ring]
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
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6"
      url: "https://fncbook.com/pivoting/"
---

## Definition

Let $F$ be a field, let $n\ge 1$, and let $A\in M_n(F)$.

An **LDU factorisation** of $A$ is a factorisation

$$A=LDU,$$

where $L$ is unit lower triangular, $D$ is diagonal, and $U$ is unit upper
triangular. Every LDU factorisation therefore gives a normalised LU
factorisation $A=L\widetilde U$ with $\widetilde U:=DU$ upper triangular. In
the converse direction, if $A=L\widetilde U$ is a normalised LU factorisation
whose diagonal pivots are all nonzero, then
$$D:=\operatorname{diag}(\widetilde U),\qquad U:=D^{-1}\widetilde U$$
give an LDU factorisation. This converse need not hold when a diagonal pivot
vanishes.

When every diagonal entry of $D$ is nonzero, the factorisation has
**nonzero diagonal pivots**.
