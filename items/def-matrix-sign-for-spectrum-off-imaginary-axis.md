---
id: def-matrix-sign-for-spectrum-off-imaginary-axis
kind: definition
title: "Primary matrix sign for spectra off the imaginary axis"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-analytic-primary-matrix-function
  - def-complex-differentiability-holomorphic-and-entire
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
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
    - title: "Nicholas J. Higham, Functions of Matrices: Theory and Computation, Chapter 5: Matrix Sign Function"
      url: "https://eprints.maths.manchester.ac.uk/1067/1/OT104HighamChapter5.pdf"
---

## Definition

Let $A\in\mathbb C^{n\times n}$, $n\ge1$, have
$\sigma(A)\cap i\mathbb R=\varnothing$, where $\sigma(A)$ is the spectrum
from [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]. The scalar function
$s(z)=1$ for $\operatorname{Re}z>0$ and $s(z)=-1$ for
$\operatorname{Re}z<0$ is locally constant and holomorphic on
$\mathbb C\setminus i\mathbb R$. Define the primary matrix sign by
$$\operatorname{sign}(A):=s(A)$$
using [[def-analytic-primary-matrix-function]]. This definition fixes the same
half-plane branch on every Jordan block belonging to an eigenvalue.
