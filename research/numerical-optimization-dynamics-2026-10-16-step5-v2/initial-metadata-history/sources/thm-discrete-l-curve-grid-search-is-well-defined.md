---
id: thm-discrete-l-curve-grid-search-is-well-defined
kind: theorem
title: The discrete L-curve rule terminates with failure or a maximum-curvature grid point
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 1
deps:
  - alg-discrete-l-curve-parameter-choice
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 10–14 define the log-log L-curve and maximum-curvature criterion.
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 4, L-curve heuristic and limitations, PDF pp. 34–35.
---

## Statement

For every admissible finite input to
[[alg-discrete-l-curve-parameter-choice]], the algorithm terminates. It returns
failure exactly when fewer than three positive-residual, positive-solution-norm
grid points remain. Otherwise it returns a retained grid parameter whose
assigned discrete curvature is maximal; ties are resolved by the least original
grid index.

## Facts & Assumptions

**Given:** A real matrix, a data vector, and a strictly increasing finite positive parameter grid with at least three points, as specified in [[alg-discrete-l-curve-parameter-choice]].

[F1] [[alg-discrete-l-curve-parameter-choice]]: The procedure computes finitely many Tikhonov solutions, discards points with a zero residual or solution norm, and returns failure if fewer than three points remain; otherwise it computes one finite curvature for each interior retained point and selects a maximum, using the least original index to break ties.

## Proof
1.1 The input grid has finite length $q$. Each positive parameter gives an invertible matrix $A^TA+\lambda_j I$ because $z^T(A^TA+\lambda_j I)z=\|Az\|^2+\lambda_j\|z\|^2>0$ for $z\ne0$. Thus the solution and residual calculations in [F1] are defined; a finite number of scalar norm, positivity, logarithm, determinant, and arithmetic operations determine the retained points and curvatures. Every loop terminates after at most $q$ iterations. [given, F1, algebra]

2.1 If fewer than three points remain, [F1] returns the prescribed failure status. Otherwise the finite nonempty set of assigned curvature values has a maximum; the finite set of indices attaining it has a least original grid index. The tie rule in [F1] therefore returns a maximizer and terminates. [F1, step 1.1, algebra] ∎
