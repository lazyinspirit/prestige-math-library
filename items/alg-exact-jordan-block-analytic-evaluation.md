---
id: alg-exact-jordan-block-analytic-evaluation
kind: algorithm
title: "Finite analytic evaluation from a supplied exact Jordan decomposition"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-analytic-primary-matrix-function]
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

Input a complex matrix $A\in\mathbb C^{n\times n}$, $n\ge1$, an open $\Omega\subseteq\mathbb C$ containing $\sigma(A)$ and a holomorphic
function $f:\Omega\to\mathbb C$ specified by exact derivative data of that same $f$ on the spectrum, and an
exact supplied Jordan certificate $A=ZJZ^{-1}$ with
$J=\operatorname{diag}(J_{d_1}(\lambda_1),\ldots,J_{d_r}(\lambda_r))$.

1. Verify the dimensions, exact equality $A=ZJZ^{-1}$, invertibility of $Z$,
   and the stated Jordan block pattern. If any check fails, return
   invalid-Jordan-certificate.
2. For each block, form the finite sum
   $F_i=\sum_{k=0}^{d_i-1}f^{(k)}(\lambda_i)N_{d_i}^k/k!$ using the supplied
   exact derivatives. If a required value is absent, return missing-jet.
3. Return $Z\,\operatorname{diag}(F_1,\ldots,F_r)\,Z^{-1}$ with status exact.

All loops and matrix products have finite size. This is an exact-data evaluator;
it makes no floating-point stability or complexity claim.
