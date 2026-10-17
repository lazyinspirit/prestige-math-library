---
id: ex-crank-nicolson-preserves-high-frequency-amplitude
kind: example
title: Crank–Nicolson is stable but does not strongly damp the highest mode
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

Fix $\Delta t>0$ and consider even periodic one-dimensional grids with $h=L/N\to0$. Crank–Nicolson is weighted-L2 stable, but its Nyquist multiplier tends to $-1$ and its magnitude tends to one, so the highest mode is not strongly damped.

## Verification

**Given:** $\kappa>0$, a fixed $\Delta t>0$, and an even periodic grid with spacing $h=L/N$.

[F1] [[def-parabolic-theta-finite-difference-scheme]]: Crank–Nicolson is the θ update with $\theta=1/2$ and zero source.

[F2] [[lem-periodic-heat-difference-amplification-symbol]]: the Nyquist eigenvalue is $\lambda=4\kappa/h^2$, and its multiplier is $g_\theta=(1-(1-\theta)\Delta t\lambda)/(1+\theta\Delta t\lambda)$.

1.1 Substituting $\theta=1/2$ and $\lambda=4\kappa/h^2$ into [F2] gives $g=(1-2\kappa\Delta t/h^2)/(1+2\kappa\Delta t/h^2)$. [F1, F2, given, algebra]

2.1 As $h\to0$ with $\kappa,\Delta t>0$ fixed, the numerator and denominator have leading terms $-2\kappa\Delta t/h^2$ and $2\kappa\Delta t/h^2$, so $g\to-1$ and $|g|\to1$. [step 1.1, algebra]

3.1 For any $z=\Delta t\lambda\ge0$, $|1-z/2|\le1+z/2$, so the factor in [F2] has magnitude at most one. Thus the mode is stable at each mesh while its high-frequency damping vanishes in the limit. [F2, step 1.1, algebra] ∎
