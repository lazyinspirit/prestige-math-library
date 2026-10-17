---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
id: ex-small-gradient-can-hide-error-at-ill-conditioned-minimizer
kind: example
title: "A small gradient can hide error when the minimizer is ill conditioned"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-jacobian-matrix-and-gradient
  - thm-inexact-gradient-residual-distance-certificate
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
---

## Example

For $f(u,v)=\tfrac12(10^{-8}u^2+v^2)$, the exact gradient norm can be tiny at a point a unit distance from the minimizer.

## Facts & Assumptions

**Given:** $f(u,v)=\tfrac12(10^{-8}u^2+v^2)$ on $\mathbb R^2$ and candidate $\widetilde x=(1,0)$.

[F1] [[thm-inexact-gradient-residual-distance-certificate]]: with strong-convexity constant $\mu$, exact gradient residual $\eta$, and discrepancy $\delta=0$, the distance to the minimizer is at most $\eta/\mu$.

[F2] [[def-jacobian-matrix-and-gradient]]: the gradient consists of the standard-coordinate first partial derivatives.

## Verification

1.1 The Hessian is $\operatorname{diag}(10^{-8},1)$, so the unique minimizer is $x^*=(0,0)$ and the strong-convexity constant is $\mu=10^{-8}$. At $\widetilde x=(1,0)$, $\nabla f(\widetilde x)=(10^{-8},0)$, so $\eta=\|\nabla f(\widetilde x)\|_2=10^{-8}$ and the true distance is $\|\widetilde x-x^*\|_2=1$. [F2, given, algebra]

2.1 Applying [F1] gives the sharp bound $\eta/\mu=10^{-8}/10^{-8}=1$. The residual is small in absolute size, but the weak curvature in the first coordinate makes this distance bound equal to one rather than a small number. [F1, step 1.1, algebra] ∎
