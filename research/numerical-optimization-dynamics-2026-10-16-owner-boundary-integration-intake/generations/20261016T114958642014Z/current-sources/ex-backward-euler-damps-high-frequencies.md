---
id: ex-backward-euler-damps-high-frequencies
kind: example
title: Backward Euler strongly damps high periodic modes
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-parabolic-theta-finite-difference-scheme
  - lem-periodic-heat-difference-amplification-symbol
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
---

## Example

Fix $\Delta t>0$ and consider even periodic one-dimensional grids with $h=L/N\to0$. Backward Euler multiplies the Nyquist mode by $1/(1+4\kappa\Delta t/h^2)$, which tends to zero, while its weighted grid $L^2$ norm never increases.

## Verification

**Given:** $\kappa>0$, a fixed $\Delta t>0$, and an even periodic grid with spacing $h=L/N$.

[F1] [[def-parabolic-theta-finite-difference-scheme]]: backward Euler is the θ update with $\theta=1$ and zero source.

[F2] [[lem-periodic-heat-difference-amplification-symbol]]: the Nyquist eigenvalue is $\lambda=4\kappa/h^2$, and its multiplier is $g_\theta=(1-(1-\theta)\Delta t\lambda)/(1+\theta\Delta t\lambda)$.

1.1 Setting $\theta=1$ and $\lambda=4\kappa/h^2$ in [F2] gives $g=1/(1+4\kappa\Delta t/h^2)$. [F1, F2, given, algebra]

2.1 As $h\to0$ with $\kappa,\Delta t>0$ fixed, the denominator tends to infinity, so $g\to0$. Thus this high-frequency mode is strongly damped. [step 1.1, algebra]

3.1 For every mode $\lambda\ge0$, the backward-Euler factor is $1/(1+\Delta t\lambda)\in(0,1]$, so the periodic Fourier basis gives nonincrease of the full weighted grid $L^2$ norm. [F2, step 1.1, algebra] ∎
