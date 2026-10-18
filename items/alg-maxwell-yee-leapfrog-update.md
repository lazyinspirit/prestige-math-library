---
id: alg-maxwell-yee-leapfrog-update
kind: algorithm
title: Lossless or midpoint-conductive Yee leapfrog update
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-maxwell-discrete-cochain-and-yee-grid
  - lem-maxwell-yee-step-matrix-is-positive-definite
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 3 §§3.2–3.3 and §3.12, printed pp. 30–36 and 64–72; Chapter 9 §9.3, printed pp. 246–249: staggered Yee update and centered conductivity treatment."
verification:
  precheck: n/a
---

## Definition

Choose a finite complex and boundary closure as in [[def-maxwell-discrete-cochain-and-yee-grid]], step size $\Delta t>0$, initial $e^0\in\mathbb R^{N_e}$ and $b^{-1/2}\in\mathbb R^{N_f}$, and source rows $j^{n+1/2}\in\mathbb R^{N_e}$. The output is a sequence $e^n$ at integer times and $b^{n+1/2}$ at half-integer times. For each $n\ge0$, perform the ordered instructions

1. Update the face flux by
   $$b^{n+1/2}=b^{n-1/2}-\Delta t\,C e^n.$$

2. Solve the electric row
   $$\left(M_e+\frac{\Delta t}{2}S\right)e^{n+1}=\left(M_e-\frac{\Delta t}{2}S\right)e^n+\Delta t\,C^TM_b b^{n+1/2}-\Delta t\,j^{n+1/2}.$$

For $S=0$ this is the lossless Yee leapfrog scheme. For $S\succeq0$, the midpoint term is the specified trapezoidal treatment of conductivity. The row is well defined for every input because its matrix is invertible by [[lem-maxwell-yee-step-matrix-is-positive-definite]]. This procedure makes no stability claim; the lossless stability condition is proved separately.
