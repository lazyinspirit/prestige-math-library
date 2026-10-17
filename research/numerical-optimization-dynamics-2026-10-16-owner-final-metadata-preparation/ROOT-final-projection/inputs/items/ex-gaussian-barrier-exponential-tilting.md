---
id: ex-gaussian-barrier-exponential-tilting
kind: example
title: Gaussian barrier under the prescribed exponential tilt
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - thm-gaussian-tail-exponential-tilting
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: n/a
sources:
  references:
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, §§3.1–3.4"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
---

## Example

Take $P=N(0,1)$, target $A=[2,\infty)$, and proposal $Q=N(2,1)$. The likelihood contribution is $Z=\mathbf1_{\{X\ge2\}}\exp(-2X+2)$. The one-draw estimator is unbiased with finite second moment, with $\mathbb E_Q Z=\bar\Phi(2)$ and $\mathbb E_Q Z^2=e^4\bar\Phi(4)$.

## Facts & Assumptions

**Given:** The standard-normal target, barrier $2$, translated-normal proposal, and likelihood contribution above.

[F1] [[thm-gaussian-tail-exponential-tilting]]: For $a>0$ and $Q_a=N(a,1)$, the event contribution has mean $\bar\Phi(a)$ and second moment $e^{a^2}\bar\Phi(2a)$.

## Verification

**Proof technique:** direct.

1.1 Set $a=2$ in [F1]. Then $A_a=[2,\infty)$, $Q_a=N(2,1)$, and the density ratio on the event is $\exp(-2X+2)$, giving the displayed contribution and moments. [F1, given, algebra]

2.1 Since $\bar\Phi(2)>0$ and $\bar\Phi(4)<\infty$, the mean is positive and finite and the second moment is finite. Thus the example has finite variance, while the asymptotic divergence in relative error concerns the family $a\to\infty$, not this single barrier. [F1, step 1.1, algebra] ∎
