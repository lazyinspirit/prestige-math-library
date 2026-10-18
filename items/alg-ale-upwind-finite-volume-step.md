---
id: alg-ale-upwind-finite-volume-step
kind: algorithm
title: "Conservative upwind ALE finite-volume step"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-ale-periodic-moving-grid]
justified_by: [thm-ale-upwind-step-conserves-mass-and-preserves-free-stream]
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§4, ALE conservation form, and §6, geometric conservation laws, printed pp. 419–425."
---

## Definition

**Inputs:** The periodic grid and relative speeds of [[def-ale-periodic-moving-grid]], cell averages $\bar u_i^n\in\mathbb R$, a constant physical speed $a$, face velocities $w_{i+1/2}^n$, $\Delta t>0$, and $\Delta\xi>0$.

**Instructions:**

1. Without modifying the input mesh or cell averages, compute trial face positions $x_{i+1/2}^{n+1}=x_{i+1/2}^n+\Delta t\,w_{i+1/2}^n$ and trial Jacobians $J_i^{n+1}=(x_{i+1/2}^{n+1}-x_{i-1/2}^{n+1})/\Delta\xi$.

2. If any $J_i^{n+1}\le0$, discard the trial data and return the status `mesh_crossing` and no updated state, leaving the input mesh and cell averages unchanged.

3. Otherwise, for every face set $c_{i+1/2}^n=a-w_{i+1/2}^n$ and $\widehat F_{i+1/2}^n=(c_{i+1/2}^n)^+\bar u_i^n+(c_{i+1/2}^n)^-\bar u_{i+1}^n$, with periodic indices and $c^+=\max(c,0)$, $c^-=\min(c,0)$.

4. Accept the trial mesh and return the status `success` and the unique cell averages defined by $J_i^{n+1}\bar u_i^{n+1}=J_i^n\bar u_i^n-(\Delta t/\Delta\xi)(\widehat F_{i+1/2}^n-\widehat F_{i-1/2}^n)$.

All state updates occur only after every new cell Jacobian has passed the positivity check.
