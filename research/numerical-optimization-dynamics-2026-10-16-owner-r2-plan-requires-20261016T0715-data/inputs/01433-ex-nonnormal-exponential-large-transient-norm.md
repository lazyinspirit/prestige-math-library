---
id: ex-nonnormal-exponential-large-transient-norm
kind: example
title: "A stable-spectrum nonnormal exponential has a large transient norm"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-complex-exponential
  - lem-exponential-series-of-a-bounded-operator
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, A New Scaling and Squaring Algorithm for the Matrix Exponential"
      url: "https://eprints.maths.manchester.ac.uk/1217/1/paper9.pdf"
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
---

## Example

Let
$$A=\begin{pmatrix}-1&10\\0&-1\end{pmatrix}.$$
Its eigenvalues have negative real part, but at time $t=1$ the row-sum norm
of $e^A$ is greater than one. Here the row-sum norm is
$\|M\|_{\mathrm{row}}=\max_i\sum_j|M_{ij}|$.

## Facts & Assumptions

**Given:** The displayed matrix $A$.

[F1] The complex exponential is its power-series exponential and its primary
matrix value is given by the Jordan-block formula
([[def-complex-exponential]],
[[thm-analytic-primary-matrix-function-jordan-contour-agreement]]).

[F2] The exponential series is absolutely convergent for a bounded matrix
operator ([[lem-exponential-series-of-a-bounded-operator]]).

## Verification

1.1 Write $A=-I+10N$ with $N=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and $N^2=0$. This is a single Jordan block at $-1$, so [F1] gives $e^A=e^{-1}(I+10N)=e^{-1}\begin{pmatrix}1&10\\0&1\end{pmatrix}$. Direct multiplication gives $A^*A=\begin{pmatrix}1&-10\\-10&101\end{pmatrix}$ and $AA^*=\begin{pmatrix}101&-10\\-10&1\end{pmatrix}$, so $A$ is nonnormal. [given, F1, algebra]

2.1 The row-sum norm is $11/e$, while the spectral radius of $e^A$ is $e^{-1}<1$. From [F2], $e=\sum_{k\ge0}1/k!<3$ (for $k\ge1$, $k!\ge2^{k-1}$, with strict inequality for some terms). Thus $11/e>1$, displaying transient norm growth despite the stable eigenvalues. [F2, step 1.1, algebra] ∎
