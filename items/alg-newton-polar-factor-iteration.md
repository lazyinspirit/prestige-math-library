---
id: alg-newton-polar-factor-iteration
kind: algorithm
title: "Finite-budget Newton iteration for the nonsingular polar factor"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - thm-polar-decomposition
  - thm-non-negative-square-root-exists-and-is-unique
  - alg-pade-denominator-solve-by-householder-qr
  - thm-pade-denominator-solve-verified-branch-correct
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
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
    - title: "Nicholas J. Higham, Computing the Polar Decomposition—with Applications"
      url: "https://eprints.maths.manchester.ac.uk/694/1/high86p.pdf"
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
---

## Definition

Input a stored square complex matrix $A\in\mathbb C^{n\times n}$, $n\ge1$,
which is assumed nonsingular, a finite iteration budget $N\ge0$, and finite
Householder-QR controls including a nonnegative integer candidate-operation budget $K_H$. Set the candidate $X_0=A$. For $k=0,\ldots,N-1$:

1. Call [[alg-pade-denominator-solve-by-householder-qr]] on
   $X_k^*Y=I$, passing $K_H$ to its instrumented kernel dispatcher. If it does not return verified-solution, return its failure
   status with the last candidate.
2. Compute $X_{k+1}=\operatorname{fl}((X_k+Y)/2)$ componentwise in the
   operationwise model of
   [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].
   A range failure returns range-failure with the last candidate.

After $N$ completed steps, return $X_N$ with status budget-exhausted and the
number of completed steps. The exact Newton sequence is analyzed separately;
this procedure makes no forward-error or floating-point convergence claim.
