---
id: alg-gcv-finite-grid-parameter-choice
kind: algorithm
title: Finite-grid generalized cross-validation for Tikhonov regularization
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 1
deps:
  - lem-linear-smoother-gcv-expression
  - def-tikhonov-regularised-least-squares
  - thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
verification:
  precheck: n/a
aliases: []
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 15–18 give the GCV formula and show that the heuristic can occasionally fail.
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapters 4–6 on a-priori and a-posteriori parameter rules; used for regularization context, not a universal GCV guarantee.
---

## Definition

Input a real matrix $A\in\mathbb R^{m\times n}$ with $m\ge1$, data
$b\in\mathbb R^m$, and a nonempty strictly increasing finite grid
$0<\lambda_1<\cdots<\lambda_N$. For each $\lambda_j$, compute the unique
Tikhonov minimizer $x_j=(A^TA+\lambda_j I)^{-1}A^Tb$, form
$H_j=A(A^TA+\lambda_j I)^{-1}A^T$, and compute
$$G_j=\frac{\|(I-H_j)b\|^2} {m\bigl(1-\operatorname{tr}(H_j)/m\bigr)^2}.$$
The denominator is positive because $\lambda_j>0$ makes every eigenvalue of
$H_j$ strictly less than one. Return the pair $(\lambda_j,G_j)$ with minimal
score; if several grid points minimize it, return the smallest index. Also
return the full finite list of scores. This rule minimizes the stated GCV
score on its supplied grid; it does not claim to minimize the unknown solution
error or to be universally optimal.

