---
id: cex-forward-euler-negative-concentration-despite-stability
kind: counterexample
title: "A stable forward Euler step can still make a concentration negative"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-finite-conservative-production-destruction-system
  - prop-euler-midpoint-rk4-orders-and-stability-functions
  - thm-explicit-euler-absolute-stability-disk
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement refuted

For every linear finite conservative PDS, if each eigenvalue $\lambda$ of its system matrix satisfies $|1+h\lambda|\le1$, then the forward Euler step preserves nonnegative compartment values.

## Witness

Use state domain $\Omega=\mathbb R^2$ and two compartments with $p_{21}=d_{12}=y_1$ and all other transfers zero. The exact system is $y_1'=-y_1$, $y_2'=y_1$. From the nonnegative initial state $(1,0)$, take the forward Euler step $h=3/2$. The step is in the absolute-stability interval for the negative scalar eigenvalue $-1$, yet its first component is negative.

## Facts & Assumptions

**Given:** The stated two-compartment transfer system, initial state $(1,0)$, and $h=3/2$.

[F1] [[def-finite-conservative-production-destruction-system]]: paired internal rates $p_{ij}=d_{ji}$ give a finite conservative PDS.

[F2] [[prop-euler-midpoint-rk4-orders-and-stability-functions]]: forward Euler has stability function $R_E(z)=1+z$ and has uniform local order at least one under the stated smooth compact-tube hypotheses.

[F3] [[thm-explicit-euler-absolute-stability-disk]]: on $y'=-\rho y$, forward Euler is absolutely stable exactly when $0<h\rho\le2$.

## Refutation


1.1 The rates satisfy $p_{21}=d_{12}=y_1\ge0$ and all other pair rates vanish, so [F1] gives $y_1'=-y_1$ and $y_2'=y_1$ with conserved sum $y_1+y_2$. [given, F1, algebra]

2.1 Forward Euler gives $y^{1}=y^0+hF(y^0)=(1,0)+(3/2)(-1,1)=(-1/2,3/2)$, so the first concentration is negative even though the sum remains $1$. [given, step 1.1, algebra]

3.1 The system matrix is lower triangular with eigenvalues $-1$ and $0$. For $\lambda=-1$, [F3] gives absolute stability because $0<h\rho=3/2<2$; for $\lambda=0$, [F2] gives multiplier $R_E(0)=1$. Thus $|1+h\lambda|\le1$ for both eigenvalues even though step 2.1 has a negative component. [given, F2, F3, step 1.1, algebra]

4.1 The vector field is linear and smooth, so the compact-tube hypotheses of [F2] hold locally and forward Euler has first-order local consistency. Steps 2.1 and 3.1 show that neither this accuracy order nor scalar absolute stability implies positivity preservation. [F2, step 2.1, step 3.1] ∎
