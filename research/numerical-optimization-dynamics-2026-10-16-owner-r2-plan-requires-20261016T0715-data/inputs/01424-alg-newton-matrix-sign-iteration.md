---
id: alg-newton-matrix-sign-iteration
kind: algorithm
title: "Finite-budget Newton iteration for the matrix sign"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-matrix-sign-for-spectrum-off-imaginary-axis
  - def-analytic-primary-matrix-function
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
  - alg-pade-denominator-solve-by-householder-qr
  - thm-pade-denominator-solve-verified-branch-correct
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicholas J. Higham, Functions of Matrices: Theory and Computation, Chapter 5: Matrix Sign Function"
      url: "https://eprints.maths.manchester.ac.uk/1067/1/OT104HighamChapter5.pdf"
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
---

## Definition

Input a stored complex square matrix $A\in\mathbb C^{n\times n}$, $n\ge1$,
with the admissibility hypothesis $\sigma(A)\cap i\mathbb R=\varnothing$, a
finite iteration budget $N\ge0$, and finite Householder-QR controls. The
procedure does not itself certify the spectral hypothesis. Set $X_0=A$. For
$k=0,\ldots,N-1$:

1. Call [[alg-pade-denominator-solve-by-householder-qr]] on $X_kY=I$. If it
   does not return verified-solution, return its failure status with the last
   candidate.
2. Compute $X_{k+1}=\operatorname{fl}((X_k+Y)/2)$ componentwise in the
   operationwise model of
   [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].
   A range failure returns range-failure with the last candidate.

After $N$ completed steps, return $X_N$ with status budget-exhausted and the
number of completed steps. The exact Newton sequence is analyzed separately;
the procedure makes no forward-error or floating-point convergence claim.
