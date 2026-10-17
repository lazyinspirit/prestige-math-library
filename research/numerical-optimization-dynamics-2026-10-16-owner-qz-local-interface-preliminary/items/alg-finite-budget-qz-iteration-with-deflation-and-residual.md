---
id: alg-finite-budget-qz-iteration-with-deflation-and-residual
kind: algorithm
title: "Finite-budget QZ iteration with homogeneous status and residual output"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-regular-generalized-eigenvalue-pencil
  - def-generalized-schur-form
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-triangular-and-diagonal-matrices-over-a-commutative-ring
  - alg-generalized-hessenberg-triangular-reduction
  - prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-rounded-linear-and-normal-residual-certificates
justified_by:
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §§3.1–3.5"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§12.8–12.9"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Definition

Input a regular pencil $(A,B)$ with $A,B\in\mathbb C^{n\times n}$,
$n\ge1$, a nonnegative integer sweep budget $N$, and a finite tolerance
$\tau\ge0$. Real input data are embedded in $\mathbb C$. Scalar updates of the
stored matrices use the operationwise model of
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].
Exact unitary Givens factors are retained as products rather than rounded dense
matrices; if a concrete factor computation cannot return such a factor with a
local error certificate, the run keeps its diagnostics and reports
`certificate-inconclusive`.

1. Reduce $(A,B)$ to Hessenberg-triangular form using
[[alg-generalized-hessenberg-triangular-reduction]]. Record each rounded matrix
update's exact local residual $E_j^A,E_j^B$ against its exact left/right
unitary update, and each structural zeroing as a deflation perturbation
$D_j^A,D_j^B$.

2. On each active block $H_{a:b,a:b},T_{a:b,a:b}$, apply the following deflation
tests before a sweep. For $i=a,ldots,b-1$, set $H_{i+1,i}$ to zero when
$$|H_{i+1,i}|\le\tau\bigl(|H_{i,i}|+|H_{i+1,i+1}|\bigr),$$
and record its old value in $D^A$. For $k=a,ldots,b$, set $T_{k,k}$ to zero when
$$|T_{k,k}|\le\tau\bigl(|T_{k-1,k}|+|T_{k,k+1}|\bigr),$$
using zero for a missing boundary term, and record the old value in $D^B$.
A one-by-one diagonal pair at $k$ is isolated when $H_{k,k-1}=0$ and
$H_{k+1,k}=0$, omitting a boundary entry when $k=a$ or $k=b$. If it has
$T_{k,k}=0$ and $H_{k,k}\ne0$, report an infinite eigenvalue and deflate it
from the active block. If the isolated diagonal pair is $(0,0)$, return
`singular-pencil-suspected` without assigning an eigenvalue.

3. To move a non-isolated zero $T_{k,k}$ to the top of its active block, for
$j=k-1,k-2,\ldots,a$ apply a right Givens factor on columns $j,j+1$ that
zeros $T_{j,j}$, then, when $j+2\le b$, a left Givens factor on rows
$j+1,j+2$ that zeros the resulting bulge $H_{j+2,j}$. Finally, when $a<b$,
apply a left Givens factor on rows $a,a+1$ to zero $H_{a+1,a}$. Record all rounded update
residuals. If this isolates $(H_{a,a},T_{a,a})=(h,0)$ with $h\ne0$, report
the infinite eigenvalue and remove the first row/column from the active block.

4. For each remaining active block with more than one row in the current
sweep, choose the homogeneous shift $[\alpha:\beta]=[H_{b,b}:T_{b,b}]$ if this pair is nonzero and
$T_{b,b}\ne0$; if $T_{b,b}=0$, use $[0:1]$. Form
$$x=(\beta H_{a:b,a:b}-\alpha T_{a:b,a:b})e_1.$$
Apply a left Givens factor to the first two components of $x$ to zero the
second. Apply a right Givens factor to columns $1,2$ to restore triangularity
of $T$. For $j=2,\ldots,b-a$, alternate a left Givens factor on rows $j,j+1$
to zero the current Hessenberg bulge and a right Givens factor on columns
$j,j+1$ to zero the resulting subdiagonal entry of $T$. Update and retain the
products $Q,Z$; record every local residual and every overwritten structural
zero. All divisions by a generalized eigenvalue ratio are avoided.

5. Stop with `qz-computed` when the active $H$ blocks are upper triangular.
Otherwise stop after $N$ sweeps with `budget-exhausted`. Any operationwise
range failure returns `range-failure` and the partial factors. If a local
unitarity or arithmetic-error bound cannot be certified, return
`certificate-inconclusive`; raw residual diagnostics are still returned. To
certify residual norms, apply the recorded unitary factors to the columns of
$AZ$ and $BZ$ in sequence and use
[[lem-rounded-linear-and-normal-residual-certificates]] for each successful
matrix-vector product and final subtraction. Add the local allowances by the
triangle inequality. The residual certificate is inconclusive if the lemma's
dimension, no-underflow, or successful-operation hypotheses fail.

The output is $(Q,S,T,Z,\text{status})$, the exact factor products when
available, the raw residuals $R_A=Q^*AZ-S$ and $R_B=Q^*BZ-T$, and the recorded
local arithmetic and deflation perturbations. The procedure asserts no
unconditional convergence or small-roundoff bound.
