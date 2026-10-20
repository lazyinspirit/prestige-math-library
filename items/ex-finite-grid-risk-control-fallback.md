---
id: ex-finite-grid-risk-control-fallback
kind: example
title: "Fallback when the calibration correction exceeds the target"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-nested-decision-family-and-bounded-risk
  - alg-finite-grid-conformal-risk-control
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Anastasios N. Angelopoulos, Stephen Bates, Adam Fisch, Lihua Lei, and Tal Schuster, Conformal Risk Control, arXiv:2208.02814v4"
      url: "https://arxiv.org/pdf/2208.02814v4"
      locator: "§1.1, B-corrected pass condition and maximum-grid fallback."
---

## Example

Let $n,M\ge1$, $B>0$, and $0\le\alpha<B/(n+1)$. Consider any loss-nested finite-grid family with calibration losses in $[0,B]$ and endpoint losses $L_i(\lambda_M)\le\alpha$ almost surely. The B-corrected calibration threshold is too large to pass at any grid point, so the rule falls back to $\lambda_M$. The endpoint condition then bounds the realized test loss, and the expected test risk is at most $\alpha$.

## Example references

[[def-finite-nested-decision-family-and-bounded-risk]]: nonnegative bounded losses and the safe maximum-grid endpoint.

[[alg-finite-grid-conformal-risk-control]]: the pass threshold includes the B correction and otherwise returns the maximum grid point.

[Angelopoulos et al., Conformal Risk Control, §1.1](https://arxiv.org/pdf/2208.02814v4)

## Facts & Assumptions

**Given:** A finite grid, $n\ge1$, $B>0$, $0\le\alpha<B/(n+1)$, calibration losses in $[0,B]$, and endpoint test loss at most $\alpha$ almost surely.

[F1] Losses are nonnegative and endpoint-safe, with $L_{n+1}(\lambda_M)\le\alpha$ almost surely. [[def-finite-nested-decision-family-and-bounded-risk]]

[F2] At grid point $\lambda_j$, the algorithm tests $(\sum_{i=1}^n L_i(\lambda_j)+B)/(n+1)$ and uses $\lambda_M$ when no point passes. [[alg-finite-grid-conformal-risk-control]]

[F3] Expectation preserves almost-sure inequalities for integrable real random variables. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

## Verification

1.1 Since every calibration loss is nonnegative, for each $j$ the algorithm's threshold satisfies $(\sum_{i=1}^nL_i(\lambda_j)+B)/(n+1)\ge B/(n+1)>\alpha$. No point passes, so the rule returns $\lambda_M$. [given, F2, algebra]

2.1 The endpoint condition gives $0\le L_{n+1}(\lambda_M)\le\alpha$ almost surely. The loss is bounded and integrable, so [F3] implies $\mathbb E[L_{n+1}(\lambda_M)]\le\alpha$. [given, F1, F3, step 1.1] ∎
