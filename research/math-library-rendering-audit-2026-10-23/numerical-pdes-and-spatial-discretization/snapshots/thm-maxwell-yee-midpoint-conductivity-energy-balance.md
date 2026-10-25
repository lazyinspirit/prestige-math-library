---
id: thm-maxwell-yee-midpoint-conductivity-energy-balance
kind: theorem
title: Midpoint conductivity dissipates the Yee discrete energy
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-maxwell-discrete-cochain-and-yee-grid
  - alg-maxwell-yee-leapfrog-update
  - thm-maxwell-yee-strict-cfl-modified-energy
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 3 §3.12, printed pp. 64–72, Chapter 5 §5.7, printed pp. 129–133, and Chapter 9 §9.3, printed pp. 246–249: conductivity update using a time-centered loss term."
verification:
  precheck: pass
---

## Statement

For the midpoint-conductive update of [[alg-maxwell-yee-leapfrog-update]], define the same staggered cross-energy as in [[thm-maxwell-yee-strict-cfl-modified-energy]]. Then for every step
$$\mathcal E^{n+1}-\mathcal E^n=-\Delta t\left(\frac{e^{n+1}+e^n}{2}\right)^Tj^{n+1/2}-\Delta t\left(\frac{e^{n+1}+e^n}{2}\right)^TS\left(\frac{e^{n+1}+e^n}{2}\right).$$
With zero impressed current, this algebraic energy is nonincreasing because $S\succeq0$. Under the strict spectral CFL hypothesis of [[thm-maxwell-yee-strict-cfl-modified-energy]] it is also positive on admissible update states. Dissipation is asserted for this specified midpoint treatment, not for an arbitrary conductivity discretization.

## Facts & Assumptions


**Given:** $\Delta t>0$, symmetric positive definite $M_e,M_b$, symmetric positive semidefinite $S$, the midpoint conductivity row, and the stated cross-energy.

[F1] The electric row contains $S(e^{n+1}+e^n)/2$ and the magnetic row is Faraday leapfrog. ([[alg-maxwell-yee-leapfrog-update]])

[F2] $S$ is positive semidefinite. ([[def-maxwell-discrete-cochain-and-yee-grid]])

[F3] Under the strict spectral CFL bound the cross-energy is positive on admissible states. ([[thm-maxwell-yee-strict-cfl-modified-energy]])

## Proof

1.1 Put $\bar e^n=(e^{n+1}+e^n)/2$. The electric quadratic-energy increment is $\frac12\|e^{n+1}\|_{M_e}^2-\frac12\|e^n\|_{M_e}^2=(\bar e^n)^TM_e(e^{n+1}-e^n)$. By [F1], this is $\Delta t(\bar e^n)^TC^TM_bb^{n+1/2}-\Delta t(\bar e^n)^Tj^{n+1/2}-\Delta t(\bar e^n)^TS\bar e^n$. [F1, algebra]

2.1 The magnetic cross-energy increment is $\frac12(b^{n+1/2})^TM_b(b^{n+3/2}-b^{n-1/2})$. Applying the magnetic row in [F1] at $n$ and $n+1$ gives $b^{n+3/2}-b^{n-1/2}=-\Delta t C(e^{n+1}+e^n)=-2\Delta t C\bar e^n$. Therefore the magnetic increment is $-\Delta t(\bar e^n)^TC^TM_bb^{n+1/2}$ and cancels the electric curl work in step 1.1. The remaining terms are exactly the claimed balance. [F1, step 1.1, algebra]

3.1 If $j^{n+1/2}=0$, the balance and [F2] imply $\mathcal E^{n+1}\le\mathcal E^n$. When the strict CFL condition also holds, [F3] shows these nonnegative values control the admissible electric and centered magnetic state. [F2, F3, step 2.1, algebra] ∎
