---
id: alg-generalized-hessenberg-triangular-reduction
kind: algorithm
title: "Givens reduction of a matrix pair to Hessenberg-triangular form"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-triangular-and-diagonal-matrices-over-a-commutative-ring
  - def-real-and-complex-givens-transformations
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
justified_by:
  - prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §3.1"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Definition

Input $A,B\in\mathbb F^{n\times n}$, $n\ge1$, with
$\mathbb F\in\{\mathbb R,\mathbb C\}$. All transformations here are exact.
Let $Q=Z=I_n$.

Use a left Givens factor $L(a,b)$ that sends the column pair $(a,b)^T$ to
$(\gamma,0)^T$, with $|\gamma|=(|a|^2+|b|^2)^{1/2}$; if $a=b=0$, use the
identity. Use a right Givens factor $R(a,b)$ that sends the row pair $(a,b)$ to
$(0,\eta)$, with $|\eta|=(|a|^2+|b|^2)^{1/2}$; if $a=b=0$, use the identity.
These factors are obtained from
[[def-real-and-complex-givens-transformations]] and are orthogonal over
$\mathbb R$ or unitary over $\mathbb C$.

1. Triangularise $B$ by left rotations. For $j=1,\ldots,n$ and, in descending
order, $i=n,n-1,\ldots,j+1$, set
$$L=L(B_{i-1,j},B_{i,j}),\quad A\leftarrow LA,\quad B\leftarrow LB, \quad Q\leftarrow QL^*.$$

2. Reduce $A$ to upper Hessenberg form while restoring triangularity of $B$.
For $j=1,\ldots,n-2$ and, in descending order, $i=n,n-1,\ldots,j+2$, set
$$L=L(A_{i-1,j},A_{i,j}),\quad A\leftarrow LA,\quad B\leftarrow LB, \quad Q\leftarrow QL^*,$$
then set
$$R=R(B_{i,i-1},B_{i,i}),\quad A\leftarrow AR,\quad B\leftarrow BR, \quad Z\leftarrow ZR.$$

Return $Q,Z,H=A,T=B$, where $H$ is upper Hessenberg and $T$ is upper
triangular in the senses of
[[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]] and
[[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]. The outputs are represented by the exact products of
the recorded Givens factors; no dense rounded factor is asserted unitary.
