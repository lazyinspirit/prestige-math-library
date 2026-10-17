---
page: matrix-exponential-and-phi-function-actions
title: "Matrix exponential and phi function actions"
status: draft
items:
  - def-phi-functions-by-everywhere-convergent-series
  - def-logarithmic-norm-for-complex-matrices
  - def-certified-matvec-and-vector-arithmetic
  - lem-matrix-action-defect-variation-of-constants
  - lem-phi-series-converges-absolutely
  - lem-logarithmic-norm-is-real-and-variational
  - alg-scaled-taylor-exponential-action
  - thm-phi-recurrence-and-augmented-matrix-actions
  - lem-logarithmic-norm-bounds-the-matrix-exponential
  - thm-scaled-taylor-exponential-action-error-and-work
  - alg-arnoldi-exponential-and-phi-actions
  - thm-arnoldi-exponential-action-error-bound
examples: []
---

The page defines the entire phi family by its convergent series, proves its recurrence, and obtains every phi action (including the value at zero) from one augmented exponential. It develops the Euclidean logarithmic norm and a finite-matrix semigroup bound, then uses variation of constants to express exponential-action error as a weighted defect integral.

For scalable computation, the finite scaled Taylor routine chooses from finite scaling and degree budgets and reports success only when rational tail and provider-supplied roundoff bounds meet tolerance. Its proof gives the geometric Taylor tail, propagation across substeps, and exact matrix-vector call count. The Arnoldi routine uses the augmented identity for reduced phi actions, reports numerical breakdown separately from happy breakdown, and keeps matvec, orthogonalization, initial-vector, reduced-action, and final-projection errors explicit. The residual estimate is a finite-dimensional bound; it implies no mesh-uniform result.

The declared page interfaces include the Krylov, matrix norm, semigroup, batch 34 Krylov-methods, and batch 68 matrix-functions pages. The current batch 34 and batch 68 A-page bodies were inspected during authoring. The batch 68 page defines analytic primary matrix functions and a conditional Padé scaling-and-squaring route; this page defines the exponential by its power series and proves a separate scaled Taylor certificate, so no Padé or contour hypothesis is imported.
