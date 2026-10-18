---
id: ex-maxwell-incompatible-current-gauss-drift
kind: example
title: A current violating discrete continuity creates Gauss-law drift
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-maxwell-discrete-cochain-and-yee-grid
  - alg-maxwell-yee-leapfrog-update
  - lem-maxwell-discrete-incidence-identities
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 3 §3.2, printed pp. 30–31, and Chapter 9 §9.3, printed pp. 246–249: Yee source rows and discrete divergence behavior."
verification:
  precheck: pass
---

## Example

On a periodic three-dimensional Yee grid choose one oriented $x$-edge $e_0$ from vertex $v_0$ to vertex $v_1$, set $j^{1/2}=J\mathbf e_0$ with $J\ne0$, and set every other current cochain to zero. Let $S=0$, initialize $G^TM_ee^0=\rho^0$, and keep the charge row fixed at $\rho^1=\rho^0$. This charge choice violates the discrete continuity equation because $G^Tj^{1/2}\ne0$.

## Facts & Assumptions


**Given:** The Yee electric row, the incidence identity $CG=0$, the oriented edge from $v_0$ to $v_1$, and the fixed charge row specified above.

[F1] The electric Yee row is $M_e(e^1-e^0)=\Delta t\,C^TM_bb^{1/2}-\Delta t\,j^{1/2}$, and $CG=0$. ([[alg-maxwell-yee-leapfrog-update]], [[lem-maxwell-discrete-incidence-identities]])

[F2] The row of $G$ indexed by an oriented edge has value $-1$ at its tail and $+1$ at its head; equivalently, $G^T\mathbf e_0$ has these entries in the vertex coordinates. ([[def-maxwell-discrete-cochain-and-yee-grid]])

## Verification

1.1 Apply $G^T$ to the electric row in [F1]. Since $G^TC^T=(CG)^T=0$ and the initial Gauss relation holds, this gives $G^TM_ee^1-\rho^1=-\Delta t\,G^Tj^{1/2}=-\Delta t J G^T\mathbf e_0.$ By [F2], the residual is $+\Delta t J$ at $v_0$, $-\Delta t J$ at $v_1$, and zero at the other vertices. It is nonzero because $J\ne0$. [F1, F2, given, algebra]

2.1 If instead the charge were updated by $\rho^1=\rho^0-\Delta t G^Tj^{1/2}$, the same calculation would give $G^TM_ee^1-\rho^1=0$. The drift is therefore exactly the discrete-continuity defect. [F1, given, algebra] ∎
