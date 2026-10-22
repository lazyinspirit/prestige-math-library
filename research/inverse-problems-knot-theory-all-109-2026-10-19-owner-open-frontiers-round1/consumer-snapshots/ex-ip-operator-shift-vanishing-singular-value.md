---
id: ex-ip-operator-shift-vanishing-singular-value
kind: example
title: Small absolute operator error does not give a uniform inverse bound without conditioning
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_use: No choice axiom is used; the scalar example is explicit.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Fix a truth bound $R>0$. For every absolute operator-shift radius $\rho_A>0$, take the working scalar operator $A_0=\rho_A/2$, the true operator $A=0$, the noiseless datum $Y=A\theta$ at truth $\theta=R$, and the working inverse $g(y)=y/A_0$. Then $|A-A_0|=\rho_A/2\le\rho_A$ but $|g(Y)-\theta|^2=R^2$. Thus no recovery modulus tending to zero with the absolute operator error can hold uniformly when the baseline inverse conditioning is allowed to vanish.

## Example references

[[op-ip-distributionally-robust-inversion-under-operator-shift|The robust-inversion frontier and its need for explicit conditioning hypotheses.]]

## Facts & Assumptions

**Given:** $R>0$, any $\rho_A>0$, working operator $A_0=\rho_A/2$, true operator $A=0$, truth $\theta=R$, noiseless data $Y=A\theta$, and working inverse $g(y)=y/A_0$.

[A1] In the scalar model the operator norm is absolute value, and the recovery loss is squared absolute error.

## Verification

1.1 The absolute operator discrepancy is $|A-A_0|=|0-\rho_A/2|=\rho_A/2\le\rho_A$. [given, A1, algebra]

2.1 By step 1.1 this is an allowed perturbation. The true noiseless datum is $Y=A\theta=0$, so $g(Y)=0/A_0=0$. The squared reconstruction error is $|0-R|^2=R^2$, independent of $\rho_A$. Since $R>0$ is fixed while $\rho_A$ can be arbitrarily small, a uniform modulus depending only on absolute operator shift cannot tend to zero. [given, A1, step 1.1, algebra] ∎
