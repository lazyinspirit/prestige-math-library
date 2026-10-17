---
id: def-analytic-primary-matrix-function
kind: definition
title: "Analytic primary matrix functions by Jordan blocks"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-finite-hermite-interpolation-for-jordan-data
  - def-jordan-canonical-form
  - thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - def-complex-differentiability-holomorphic-and-entire
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
justified_by:
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
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
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Nicholas J. Higham, Functions of Matrices, Handbook of Linear Algebra, Chapter 17"
      url: "https://eprints.maths.manchester.ac.uk/2109/1/fm2_final_njh.pdf"
---

## Definition

Let $A\in\mathbb C^{n\times n}$ with $n\ge1$, let
$\Omega\subseteq\mathbb C$ be open with $\sigma(A)\subseteq\Omega$, where
$\sigma(A)$ is the eigenvalue set from
[[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], and let
$f:\Omega\to\mathbb C$ be holomorphic in the sense of
[[def-complex-differentiability-holomorphic-and-entire]]. Choose a Jordan
representation in the convention of [[def-jordan-canonical-form]], which
exists by [[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]
and [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]:
$$A=Z\,\operatorname{diag}(J_{d_1}(\lambda_1),\ldots,J_{d_r}(\lambda_r))\,Z^{-1},$$
where $J_d(\lambda)=\lambda I_d+N_d$ and $N_d$ has ones on its first
superdiagonal and is nilpotent of order at most $d$. Define the Jordan
expression
$$f_J(A):= Z\,\operatorname{diag}\left( \sum_{k=0}^{d_1-1}\frac{f^{(k)}(\lambda_1)}{k!}N_{d_1}^k,\ldots, \sum_{k=0}^{d_r-1}\frac{f^{(k)}(\lambda_r)}{k!}N_{d_r}^k \right)Z^{-1}.$$
The analytic primary matrix function $f(A)$ is this expression, with the same
single scalar branch $f$ and its derivatives used in every block at a repeated
eigenvalue. Its independence of the chosen Jordan representation is discharged
by [[thm-analytic-primary-matrix-function-jordan-contour-agreement]].
