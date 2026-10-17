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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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
Use zero-based matrix indices $0,\ldots,n-1$, as in
[[def-real-and-complex-givens-transformations]].
Let $Q=Z=I_n$.

For a target pair $(a,b)$, define the left factor $L(a,b)$ deterministically. Use $I_2$ if $a=b=0$. Otherwise put $r=(|a|^2+|b|^2)^{1/2}$ and $L=\begin{pmatrix}c&s\\-\overline s&c\end{pmatrix}$. Over $\mathbb R$, take $c=a/r$, $s=b/r$. Over $\mathbb C$, if $a=0$ take $c=0$, $s=\overline b/|b|$; otherwise take $\phi=a/|a|$, $c=|a|/r$, $s=\phi\overline b/r$. Thus $L(a,b)(a,b)^T=(\gamma,0)^T$ with $|\gamma|=r$. Set $J=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and define the right factor
$$R(a,b)=J L(\overline b,\overline a)^*J.$$
Then $(a,b)R(a,b)=(0,\eta)$ with $|\eta|=r$; the zero pair again uses identity. These factors are real orthogonal over $\mathbb R$ or unitary over $\mathbb C$, as direct multiplication shows in [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]; the right identity follows by taking adjoints of the left annihilation of $(\overline b,\overline a)^T$ and reversing the coordinates. Use their identity embeddings on the two rows or columns specified by each step below.
1. Triangularise $B$ by left rotations. For $j=0,\ldots,n-1$ and, in
descending order, $i=n-1,n-2,\ldots,j+1$, set
$$L=L(B_{i-1,j},B_{i,j}),\quad A\leftarrow LA,\quad B\leftarrow LB, \quad Q\leftarrow QL^*.$$

2. Reduce $A$ to upper Hessenberg form while restoring triangularity of $B$.
For $j=0,\ldots,n-3$ and, in descending order, $i=n-1,n-2,\ldots,j+2$, set
$$L=L(A_{i-1,j},A_{i,j}),\quad A\leftarrow LA,\quad B\leftarrow LB, \quad Q\leftarrow QL^*,$$
then set
$$R=R(B_{i,i-1},B_{i,i}),\quad A\leftarrow AR,\quad B\leftarrow BR, \quad Z\leftarrow ZR.$$

Return $Q,Z,H=A,T=B$, where $H$ is upper Hessenberg and $T$ is upper
triangular in the senses of
[[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]] and
[[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]. The outputs are represented by the exact products of
the recorded Givens factors; no dense rounded factor is asserted unitary.
