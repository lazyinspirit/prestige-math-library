---
id: def-stable-graded-ring-of-symmetric-functions
kind: definition
title: The stable graded ring of symmetric functions
status: draft
origin: pipeline
deps:
  - def-symmetric-polynomial
  - def-partition-young-diagram-and-conjugate-partition
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §2
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.3
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Definition

For integers $N,d\ge0$, let $A_N^d$ be the degree-$d$ homogeneous part of
$\mathbb Z[x_1,\ldots,x_N]^{S_N}$, using
[[def-symmetric-polynomial]] and the convention $A_0^0=\mathbb Z$ and
$A_0^d=0$ for $d>0$. For $M\ge N$, the transition
$\pi_{M,N}:A_M^d\to A_N^d$ sets $x_{N+1},\ldots,x_M$ equal to zero.
These maps compose, so define
$$\Lambda^d:=\varprojlim_{N\ge0}A_N^d,\qquad \Lambda:=\bigoplus_{d\ge0}\Lambda^d.$$

An element of $\Lambda^d$ is a compatible sequence of homogeneous
degree-$d$ symmetric polynomials, one in each rank. Multiplication of a
degree-$a$ sequence and a degree-$b$ sequence is coordinatewise polynomial
multiplication and lies in $\Lambda^{a+b}$; compatibility follows because
each $\pi_{M,N}$ is a ring homomorphism. Extend this product distributively
to $\Lambda$. The unit is the compatible constant sequence $1$, and each
element of $\Lambda$ has only finitely many nonzero homogeneous components.

This direct sum is not the ungraded inverse limit of the rings
$\mathbb Z[x_1,\ldots,x_N]^{S_N}$. For example, the compatible sequence
$\prod_{i=1}^N(1+x_i)$ belongs to that ungraded inverse limit and has nonzero
homogeneous components in every degree, so it is not an element of the direct
sum $\Lambda$. The partition notation and empty partition follow
[[def-partition-young-diagram-and-conjugate-partition]].
