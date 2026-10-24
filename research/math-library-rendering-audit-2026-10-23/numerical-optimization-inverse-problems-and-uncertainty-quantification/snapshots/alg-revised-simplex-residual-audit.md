---
id: alg-revised-simplex-residual-audit
kind: algorithm
title: "Exact residual audit of finite-precision simplex candidates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-revised-simplex-standard-form-linear-program]
justified_by: []
aliases: []
dependency_level: 1
verification:
  precheck: n/a
sources:
  references:
    - title: "David Bindel, CS 6210: Sums, Dots, and Error in Linear Systems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§3.1 and 4.3"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
---

## Definition

Input a standard-form problem as in [[def-revised-simplex-standard-form-linear-program]], whose stored matrix, right-hand side, and cost entries are finite binary floating-point values, together with finite stored candidate vectors $\hat x\in\mathbb R^n$ and $\hat y\in\mathbb R^m$. A finite binary value is interpreted as its exact dyadic rational (an integer times an integer power of $2$). If a dimension is wrong or any value is NaN or infinite, return `invalid-input`. Otherwise use exact integer/rational arithmetic to compute $r_p=A\hat x-b$, $r_d=c-A^{\mathsf T}\hat y$, $g=c^{\mathsf T}\hat x-b^{\mathsf T}\hat y$, $\rho_p=\|r_p\|_\infty$, and $\rho_d=\|r_d\|_\infty$, where $\|z\|_\infty=\max_i|z_i|$ and the empty-vector value is zero. Return these exact values and $|g|$ as the exact primal-dual objective difference for the stored data. Return `verified-optimal-for-stored-data` exactly when $\hat x\ge0$, $r_p=0$, $r_d\ge0$, and $g=0$. In every other finite-input case return `candidate-only` with the residuals and gap; a nonzero or small residual is never rounded to zero and does not certify infeasibility.

The exact arithmetic is a verification procedure for a candidate produced by a floating-point solver; it does not define a basis factorization or bound uncertainty in data before they were stored. If a statement about pre-rounded data is required, separate certified input intervals must be supplied and propagated. The procedure makes no operation-count or runtime claim.
