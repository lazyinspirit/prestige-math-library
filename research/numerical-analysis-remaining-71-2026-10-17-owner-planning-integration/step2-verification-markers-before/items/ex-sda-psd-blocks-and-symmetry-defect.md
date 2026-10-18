---
id: ex-sda-psd-blocks-and-symmetry-defect
kind: example
title: "SDA preserves PSD blocks exactly and exposes a finite-precision symmetry defect"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-standard-continuous-and-discrete-riccati-equations
  - alg-finite-budget-structure-preserving-doubling-for-dare
  - lem-sda-doubling-composition-and-psd-invariants
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§5.2, structure-preserving doubling formulas"
---

## Example

For one exact SDA step, take $A=I_2$, $G_0=\operatorname{diag}(1,0)$, and $H_0=\begin{bmatrix}1&1\\1&1\end{bmatrix}$.

## Facts & Assumptions

**Given:** The matrices above and the recurrence in [[alg-finite-budget-structure-preserving-doubling-for-dare]].

[F1] [[alg-finite-budget-structure-preserving-doubling-for-dare]]: $W=(I+GH)^{-1}$, $G_1=G+AWGA^*$, and $H_1=H+A^*HWA$.

[F2] [[lem-sda-doubling-composition-and-psd-invariants]]: when $G,H\succeq0$, the exact inverse exists and the updated $G_1,H_1$ remain positive semidefinite.

## Proof

1.1 The inputs are positive semidefinite, and $I+G_0H_0=\begin{bmatrix}2&1\\0&1\end{bmatrix},\qquad W_0=\begin{bmatrix}\tfrac12&-\tfrac12\\0&1\end{bmatrix}.$ Using [F1] gives $A_1=W_0,\qquad G_1=\begin{bmatrix}\tfrac32&0\\0&0\end{bmatrix},\qquad H_1=\begin{bmatrix}\tfrac32&\tfrac32\\\tfrac32&\tfrac32\end{bmatrix}.$ Both updated symmetric blocks are positive semidefinite; $G_1$ is diagonal PSD and $H_1=\tfrac32(1,1)^T(1,1)$. [F1, F2, given, algebra]

2.1 To illustrate the diagnostic, perturb only one stored off-diagonal entry by $\epsilon>0$ and report $\widetilde H_1=\begin{bmatrix}\tfrac32&\tfrac32+\epsilon\\\tfrac32&\tfrac32\end{bmatrix}$. Its symmetry defect is $\|\widetilde H_1-\widetilde H_1^*\|_F=\sqrt2\,\epsilon.$ Even its symmetrization has determinant $\frac94-(\frac32+\frac\epsilon2)^2<0$, so this perturbed stored block is not positive semidefinite. It must be reported and rechecked rather than treated as covered by the exact-arithmetic PSD invariant. [F1, F2, step 1.1, algebra] ∎
