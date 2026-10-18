---
id: thm-ale-upwind-step-conserves-mass-and-preserves-free-stream
kind: theorem
title: "The upwind ALE step conserves mass and preserves constants"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-ale-periodic-moving-grid
  - lem-ale-periodic-face-motion-satisfies-discrete-gcl
  - alg-ale-upwind-finite-volume-step
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§4 and §6, ALE conservation and geometric conservation, printed pp. 419–425."
---

## Statement

For every input satisfying [[alg-ale-upwind-finite-volume-step]], the procedure completes after finitely many operations and returns exactly one of `mesh_crossing` (with no updated state, if some $J_i^{n+1}\le0$) or `success` (with a unique updated array, if all $J_i^{n+1}>0$). Whenever it returns `success`, it preserves total periodic mass, $\sum_iJ_i^{n+1}\bar u_i^{n+1}=\sum_iJ_i^n\bar u_i^n$. It also preserves every constant state: if $\bar u_i^n=U$ for every cell, then $\bar u_i^{n+1}=U$ for every cell. The mass and constant-state properties require no CFL condition.

## Facts & Assumptions

**Given:** An admissible periodic moving grid, a constant physical speed, cell averages, and the inputs of [[alg-ale-upwind-finite-volume-step]].

[F1] [[def-ale-periodic-moving-grid]]: indices are periodic, $J_i^n=(x_{i+1/2}^n-x_{i-1/2}^n)/\Delta\xi$, and $c_{i+1/2}=a-w_{i+1/2}$.

[F2] [[alg-ale-upwind-finite-volume-step]]: after moving the finite face table it returns `mesh_crossing` with no state if any new $J_i^{n+1}\le0$; otherwise it returns `success` with the cell averages defined by $J_i^{n+1}\bar u_i^{n+1}=J_i^n\bar u_i^n-(\Delta t/\Delta\xi)(\widehat F_{i+1/2}-\widehat F_{i-1/2})$, where $\widehat F_{i+1/2}=c_{i+1/2}^+\bar u_i^n+c_{i+1/2}^-\bar u_{i+1}^n$.

[F3] [[lem-ale-periodic-face-motion-satisfies-discrete-gcl]]: $J_i^{n+1}=J_i^n+(\Delta t/\Delta\xi)(w_{i+1/2}-w_{i-1/2})$.

## Proof

1.1 By [F1], the input has a finite number $N$ of cells and faces. The algorithm performs a fixed finite number of arithmetic operations and comparisons per cell or face, so its face movement and Jacobian check terminate. If some $J_i^{n+1}\le0$, its specified branch returns `mesh_crossing` before any state update. [given, F1, F2, algebra]

1.2 If all checked Jacobians are positive, each update equation in [F2] has the unique solution obtained by dividing its specified right-hand side by $J_i^{n+1}>0$. There are finitely many such formulas, and no further failure branch, so the algorithm returns `success` with exactly this array. [F1, F2, step 1.1, algebra]

2.1 Sum the update in [F2] over one period. Each face flux occurs once with a plus sign and once with a minus sign, so the periodic flux sum is zero. The remaining identity is $\sum_iJ_i^{n+1}\bar u_i^{n+1}=\sum_iJ_i^n\bar u_i^n$. [given, F1, F2, algebra]

2.2 If every input average equals $U$, then $c^++c^-=c$ gives $\widehat F_{i+1/2}=(a-w_{i+1/2})U$. Thus $\widehat F_{i+1/2}-\widehat F_{i-1/2}=-U(w_{i+1/2}-w_{i-1/2})$. Substituting this in [F2] and using [F3] gives $J_i^{n+1}\bar u_i^{n+1}=J_i^{n+1}U$. [F1, F2, F3, algebra]

3.1 In the success branch of step 1.2, divide the equality in step 2.2 by $J_i^{n+1}>0$ to obtain $\bar u_i^{n+1}=U$. [step 1.2, step 2.2, algebra] ∎
