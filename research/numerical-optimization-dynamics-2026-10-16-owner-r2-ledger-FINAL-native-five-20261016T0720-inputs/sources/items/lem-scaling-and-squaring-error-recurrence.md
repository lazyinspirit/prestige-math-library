---
id: lem-scaling-and-squaring-error-recurrence
kind: lemma
title: "Error propagation through exact and perturbed squaring steps"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, A New Scaling and Squaring Algorithm for the Matrix Exponential"
      url: "https://eprints.maths.manchester.ac.uk/1217/1/paper9.pdf"
---

## Statement

Let $\|\cdot\|$ be a submultiplicative norm on square matrices. Suppose
$X_{j+1}=X_j^2$ and $\widehat X_{j+1}=\widehat X_j^2+E_j$ for matrices of the
same size. If $e_j=\|\widehat X_j-X_j\|$, then
$$e_{j+1}\le\bigl(2\|X_j\|+e_j\bigr)e_j+\|E_j\|.$$
The term $E_j$ records the entire defect in the computed squaring.

## Facts & Assumptions

**Given:** The matrices and recurrence above, and a matrix norm satisfying
$\|UV\|\le\|U\|\|V\|$ for every compatible product.

[A1] The chosen matrix norm is submultiplicative, as stated in the hypotheses.

## Proof

1.1 Put $D_j=\widehat X_j-X_j$. The noncommutative identity $\widehat X_j^2-X_j^2=D_j\widehat X_j+X_jD_j$ follows by expanding the right side and cancelling $-X_j\widehat X_j+X_j\widehat X_j$. [given, algebra]

2.1 By [A1] and the triangle inequality, $\|\widehat X_j^2-X_j^2\|\le e_j\|\widehat X_j\|+\|X_j\|e_j$; also $\|\widehat X_j\|\le\|X_j\|+e_j$. Hence $\|\widehat X_j^2-X_j^2\|\le(2\|X_j\|+e_j)e_j$. [A1, step 1.1, algebra]

3.1 The identity $\widehat X_{j+1}-X_{j+1}=(\widehat X_j^2-X_j^2)+E_j$ and step 2.1 give the claimed bound by the triangle inequality. [given, step 2.1, algebra] ∎
