---
id: rem-matrix-function-condition-estimates-are-not-certified-bounds
kind: remark
title: "Condition estimates and certified matrix-function error bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [thm-matrix-function-rational-contour-error-bound]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicholas J. Higham, Functions of Matrices, Handbook of Linear Algebra, Chapter 17"
      url: "https://eprints.maths.manchester.ac.uk/2109/1/fm2_final_njh.pdf"
    - title: "Philip I. Davies and Nicholas J. Higham, A Schur–Parlett Algorithm for Computing Matrix Functions"
      url: "https://eprints.maths.manchester.ac.uk/156/1/paper.pdf"
---

## Remark

A scalar Padé remainder or a condition estimate does not by itself certify
$\|f(A)-r(A)\|$ for a nonnormal matrix. The transfer bound in
[[thm-matrix-function-rational-contour-error-bound]] contains the contour
length and a uniform resolvent bound; the latter can be much larger than a
scalar disk estimate suggests. Schur–Parlett block separation supports unique
Sylvester solves, but is not a floating-point stability theorem. If a
validated resolvent cover or a required block solve is unavailable, the
finite procedure returns an unevaluated bound or an inconclusive status.
