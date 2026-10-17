---
id: ex-additive-eigensolve-tolerance-residual-certificate
kind: example
title: An additive response-evaluation tolerance enters the fixed-point residual certificate
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-contractive-scf-convergence-and-inexact-error-bound]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

This scalar calculation isolates the additive response-error term in the SCF
residual certificate; it is not itself an eigensolve.

For the scalar contraction $\Phi(x)=x/2+1/4$ on $[0,1]$, evaluate at $x=0$.
The exact response is $1/4$. Suppose the computed response is $\widetilde\Phi(0)=6/25$
with certified additive error $\eta=1/100$.

## Facts & Assumptions
**Given:** The contraction $\Phi(x)=x/2+1/4$, its fixed point $x_*=1/2$, $x=0$, computed value $\widetilde\Phi(0)=6/25$, and $|\widetilde\Phi(0)-\Phi(0)|\le1/100$.

[F1] An inexact update's error bound uses the exact response residual plus its certified evaluation error ([[thm-contractive-scf-convergence-and-inexact-error-bound]]).

## Verification


1.1 The computed residual is $|0-6/25|=24/100$. By the triangle inequality, $|0-\Phi(0)|\le |0-\widetilde\Phi(0)|+|\widetilde\Phi(0)-\Phi(0)|\le24/100+1/100=25/100.$ [given, algebra]

2.1 Here $q=1/2$ and $|0-x_*|=1/2$. The correct certified error bound from [F1] is $(25/100)/(1-1/2)=1/2$, exact here. Omitting $\eta$ would give $(24/100)/(1/2)=48/100<1/2$, which is false. [step 1.1, F1, algebra] ∎
