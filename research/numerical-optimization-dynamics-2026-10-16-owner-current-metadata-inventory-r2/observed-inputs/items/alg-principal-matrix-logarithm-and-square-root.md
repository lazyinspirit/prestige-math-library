---
id: alg-principal-matrix-logarithm-and-square-root
kind: algorithm
title: "Principal matrix logarithm and square root by branch-aware Schur–Parlett"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - alg-schur-parlett-matrix-function
  - alg-finite-budget-francis-schur-reduction
  - def-real-and-complex-schur-forms
  - thm-principal-matrix-logarithm-and-square-root-exist
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - def-complex-power-from-holomorphic-logarithm-branch
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Nicholas J. Higham, Functions of Matrices, Handbook of Linear Algebra, Chapter 17"
      url: "https://eprints.maths.manchester.ac.uk/2109/1/fm2_final_njh.pdf"
---

## Definition

Input a finite complex matrix $A\in\mathbb C^{n\times n}$ with $n\ge1$, a branch request selecting principal
logarithm or principal square root, finite Schur and Schur–Parlett controls,
an initial partition of $\{1,\ldots,n\}$ into nonempty contiguous intervals
for the Schur–Parlett call, and a finite table of exact Jordan certificates
keyed by contiguous intervals. The first Schur reduction is used only to
certify the branch domain; no Jordan derivative data are needed if the branch
check fails.

1. Run [[alg-finite-budget-francis-schur-reduction]] in its complex branch.
   Propagate any non-Schur status. Treat its returned $Q,T$ as candidates and
   verify exactly that $Q^*Q=I$, $A=QTQ^*$, and $T$ is upper triangular. If a
   check fails, return schur-certificate-failure.
2. The diagonal entries of this exact upper-triangular $T$ are the eigenvalues
   of $A$. Test each $\lambda$. If $\lambda\in(-\infty,0]$, return
   branch-domain-failure; if an exact sign comparison is unavailable, return
   branch-domain-undecided. This test occurs before any holomorphic matrix
   evaluation.
3. For the logarithm request, evaluate the scalar branch
   $f(z)=\operatorname{Log}z$. For the square-root request, use
   $f(z)=z^{1/2}_{\operatorname{Log}}$. Then call
   [[alg-schur-parlett-matrix-function]] with $A$, $f$, its controls, the
   supplied initial partition, and the Jordan-certificate table. Propagate any
   Schur, Jordan-data, Sylvester, range, or budget status. On parlett-success,
   return its factored primary value with status branch-aware-candidate.

The procedure returns no floating-point error bound. The exact branch check
ensures the scalar function is holomorphic at every eigenvalue.
