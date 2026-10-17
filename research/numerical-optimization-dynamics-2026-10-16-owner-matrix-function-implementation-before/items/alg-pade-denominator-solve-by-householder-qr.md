---
id: alg-pade-denominator-solve-by-householder-qr
kind: algorithm
title: "Finite Householder QR solve for a Padé denominator with explicit statuses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - alg-complex-scaled-householder-reflector-step
  - thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts
  - def-forward-and-back-substitution-for-triangular-systems
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, A New Scaling and Squaring Algorithm for the Matrix Exponential"
      url: "https://eprints.maths.manchester.ac.uk/1217/1/paper9.pdf"
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
---

## Definition

Input an exact rational complex matrix $M\in\mathbb Q(i)^{n\times n}$ with
$n\ge1$, an exact rational right-hand side $C\in\mathbb Q(i)^{n\times r}$ with
$r\ge1$, and a finite floating-point operation budget. Exact rational entries
are retained for the final audit; finite floating-point copies are used only
to generate a candidate.

1. Convert entries to the operationwise arithmetic model of
   [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].
   If conversion or a later operation is out of range, return range-failure.
2. Form a candidate full QR factorization column by column using the complex
   Householder step of [[alg-complex-scaled-householder-reflector-step]].
   Apply each reflector to the remaining columns and accumulate the represented
   unitary factors. Propagate any breakdown or range status. If a triangular
   pivot is zero, return zero-pivot.
3. Use the resulting triangular factor and
   [[def-forward-and-back-substitution-for-triangular-systems]] to compute a
   floating-point candidate $\widehat X$ for $MX=C$. If the candidate step
   fails, return candidate-failure.
4. Decode each finite floating-point entry of $\widehat X$ as its exact dyadic
   rational value. Compute $M\widehat X-C$ using exact rational arithmetic.
   If this residual is exactly zero, return verified-solution with $\widehat X$.
   Otherwise return candidate-unverified with $\widehat X$ and the exact
   nonzero residual.

All loops are bounded by the finite matrix dimensions and budget. The exact
residual audit uses finite integer arithmetic on rational encodings; no
bit-complexity bound is claimed. A verified solution need not be unique unless
the caller separately knows $M$ is invertible.
