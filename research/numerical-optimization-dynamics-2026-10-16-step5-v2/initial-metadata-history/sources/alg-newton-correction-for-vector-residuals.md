---
id: alg-newton-correction-for-vector-residuals
kind: algorithm
title: "Newton correction for a square vector residual"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-invertible-euclidean-linear-map
  - def-determinant-of-a-square-matrix
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - thm-cramers-rule-over-a-commutative-ring
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed pp. 138–139 / PDF pp. 5–6: Newton's linearized system"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equations (92)–(93): Jacobian linearization and Newton correction"
---

## Definition

Let $n\ge1$, let $A:\mathbb R^n\to\mathbb R^n$ be a linear map, and let
$r\in\mathbb R^n$ be a residual vector. If $A$ is not invertible in the sense
of [[def-invertible-euclidean-linear-map]], return
$(\texttt{singular-jacobian},\varnothing)$. If $A$ is invertible, return
$(\texttt{correction},s)$, where $s$ is the unique vector solving
$$As=-r.$$

Use the following exact-arithmetic procedure, with exact real zero tests.
Represent $A$ by its matrix in the standard basis, with indices $0\le i,j<n$.

1. To compute the determinant of any matrix $M=(m_{ij})$ below, initialize
   $d=0$. Enumerate the permutations $\sigma$ of $\{0,\ldots,n-1\}$ in
   lexicographic order. For each, count its inversions
   $\nu(\sigma)=\#\{(i,j):i<j,\ \sigma(i)>\sigma(j)\}$, multiply
   $p=\prod_{i=0}^{n-1}m_{\sigma(i),i}$ in increasing index order, and add
   $(-1)^{\nu(\sigma)}p$ to $d$. The resulting $d$ is the determinant in
   [[def-determinant-of-a-square-matrix]].
2. Compute $d=\det(A)$ by step 1. If $d=0$, return
   $(\texttt{singular-jacobian},\varnothing)$, using
   [[thm-real-square-matrix-invertible-iff-determinant-nonzero]] for the
   invertibility test.
3. Otherwise, for $j=0,\ldots,n-1$, copy $A$ to $A_j$, replace column $j$
   by $-r$, compute $d_j=\det(A_j)$ by step 1, and set $s_j=d_j/d$.
   Return $(\texttt{correction},s)$, the solution specified by
   [[thm-cramers-rule-over-a-commutative-ring]] over $\mathbb R$.

The output is a linear correction, not a claim that $r$ came from a nonlinear
function or that applying the correction decreases a residual.
