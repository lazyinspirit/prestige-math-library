---
id: ex-one-pass-pece-differs-from-implicit-adams-stability
kind: example
title: "One-pass PECE and fully implicit Adams have different stability"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-adams-pece-one-correction
  - lem-variable-step-adams-lagrange-weights
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
dependency_level: 2
---

## Example

For one known derivative sample, PECE uses the explicit Euler predictor and one trapezoidal Adams corrector evaluation. On the scalar test equation $y'=\lambda y$, its one-step multiplier is $R_{\mathrm{PECE}}(z)=1+z+z^2/2$, whereas the fully implicit trapezoidal Adams method has multiplier $R_{\mathrm{AM}}(z)=(1+z/2)/(1-z/2)$, where $z=h\lambda$. At $z=-3$, one pass is unstable ($|R_{\mathrm{PECE}}|=5/2$) while the fully implicit method is stable ($|R_{\mathrm{AM}}|=1/5$).

## Facts & Assumptions

**Given:** The one-pass procedure [[alg-adams-pece-one-correction]] and its Lagrange predictor/corrector weights [[lem-variable-step-adams-lagrange-weights]].

[F1] [[alg-adams-pece-one-correction]] performs one explicit predictor, evaluates at the predicted endpoint, applies one corrector, then evaluates at the corrected endpoint.

[L1] [[lem-variable-step-adams-lagrange-weights]] gives the $k=1$ predictor weight $h$ and the two-node corrector weights $h/2,h/2$ on a uniform grid.

## Verification

1.1 Set $z=h\lambda$ and $Y_n=1$. By [F1] and [L1], the Euler predictor is $P=1+z$. The PECE correction is $Y_{n+1}=1+\frac z2(1+P)=1+z+z^2/2$; the final evaluation in PECE stores $\lambda Y_{n+1}$ and does not alter this value. [F1, L1, algebra]

1.2 The fully implicit trapezoidal corrector instead solves $Y_{n+1}=1+\frac z2(1+Y_{n+1})$, so $(1-z/2)Y_{n+1}=1+z/2$ and its multiplier is $(1+z/2)/(1-z/2)$ when $z\ne2$. [L1, algebra]

2.1 At $z=-3$, the multipliers are $5/2$ and $-1/5$, respectively. Define scalar test stability at $z$ by the condition that the multiplier's modulus is at most one. Hence PECE is unstable there and the fully implicit Adams method is stable there, so their stability differs. [step 1.1, step 1.2, algebra] ∎
