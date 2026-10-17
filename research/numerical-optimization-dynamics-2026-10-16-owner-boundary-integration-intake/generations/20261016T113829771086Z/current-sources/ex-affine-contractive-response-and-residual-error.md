---
id: ex-affine-contractive-response-and-residual-error
kind: example
title: An affine response map realizes the contraction and residual estimates
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
---

## Example

This is a scalar fixed-point response model, not an occupied spectral projector.
On $K=[0,1]$ let $\Phi(x)=x/2+1/4$. It is a $1/2$-contraction with fixed point
$x_*=1/2$, and its residual-to-error bound is exact.

## Facts & Assumptions
**Given:** The complete metric space $K=[0,1]$ with the usual distance, $\Phi(x)=x/2+1/4$, and an initial value $x_0\in[0,1]$.

[F1] A contraction on a nonempty complete metric space has a unique fixed point and its iterates converge ([[thm-contractive-scf-convergence-and-inexact-error-bound]]).

## Verification


1.1 For $x,y\in[0,1]$, $\Phi(x)\in[1/4,3/4]\subseteq[0,1]$ and $|\Phi(x)-\Phi(y)|=|x-y|/2$. Solving $x=x/2+1/4$ gives the unique fixed point $x_*=1/2$. [given, F1, algebra]

2.1 The exact iterates satisfy $x_{k+1}-1/2=(x_k-1/2)/2$, so induction gives $|x_k-x_*|=2^{-k}|x_0-x_*|$. [step 1.1, algebra, induction]

3.1 For any $x\in[0,1]$, $|x-\Phi(x)|=|x-1/2|/2$, hence $|x-x_*|=|x-\Phi(x)|/(1-1/2)$. This attains equality in the residual estimate of [F1]. [given, step 1.1, F1, algebra] ∎
