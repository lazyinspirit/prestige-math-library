---
id: ex-ale-expanding-mesh-free-stream
kind: example
title: "An expanding cell preserves a constant state"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-ale-periodic-moving-grid
  - alg-ale-upwind-finite-volume-step
  - thm-ale-upwind-step-conserves-mass-and-preserves-free-stream
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§6, geometric conservation and free-stream preservation, printed pp. 422–425; the two-cell arithmetic is computed here."
---

## Statement

On a two-cell periodic grid take $\Delta\xi=1$, $\Delta t=0.1$, period $L=2$, initial faces $x_{1/2}=0$, $x_{3/2}=1$, $x_{5/2}=2$, physical speed $a=0$, and periodic face velocities $w_{1/2}=0$, $w_{3/2}=0.1$, $w_{5/2}=0$. If both initial cell averages equal $U\in\mathbb R$, the successful ALE upwind step has Jacobians $1.01$ and $0.99$, preserves both averages at $U$, and conserves total mass $2U$.

## Facts & Assumptions

**Given:** The grid, time step, face velocities, physical speed, and constant initial average in the Statement.

[F1] [[def-ale-periodic-moving-grid]]: $J_i^n=(x_{i+1/2}^n-x_{i-1/2}^n)/\Delta\xi$, the face update is $x_{i+1/2}^{n+1}=x_{i+1/2}^n+\Delta t\,w_{i+1/2}^n$, and $c_{i+1/2}=a-w_{i+1/2}$.

[F2] [[alg-ale-upwind-finite-volume-step]]: after checking $J_i^{n+1}>0$, the algorithm uses $\widehat F_{i+1/2}=c_{i+1/2}^+\bar u_i+c_{i+1/2}^-\bar u_{i+1}$ and $J_i^{n+1}\bar u_i^{n+1}=J_i^n\bar u_i^n-(\Delta t/\Delta\xi)(\widehat F_{i+1/2}-\widehat F_{i-1/2})$.

[F3] [[thm-ale-upwind-step-conserves-mass-and-preserves-free-stream]]: a successful periodic upwind ALE step preserves mass and every constant input state.

## Verification

1.1 The moved faces are $0$, $1.01$, and $2$. Hence the two updated Jacobians are $1.01$ and $0.99$, both positive, so [F2] returns `success` and performs the state update. [given, F1, F2, algebra]

1.2 The relative speeds at these faces are $0$, $-0.1$, and $0$, so the fluxes are $0$, $-0.1U$, and $0$. Formula [F2] gives $J_1^{n+1}\bar u_1^{n+1}=U-0.1(-0.1U)=1.01U$ and $J_2^{n+1}\bar u_2^{n+1}=U-0.1(0.1U)=0.99U$. Dividing by the positive Jacobians gives both updated averages equal to $U$. [given, F1, F2, algebra]

2.1 The new total mass is $1.01U+0.99U=2U$, equal to the old mass $U+U$. This is the finite instance of [F3]. [F1, F3, step 1.2, algebra] ∎
