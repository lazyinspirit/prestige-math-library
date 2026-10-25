---
id: ex-known-variance-normal-z-sample-size-and-sensitivity
kind: example
title: "An exact one-sided normal sample size and its effect-variance sensitivity"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-power-and-sample-size-planning-specification
  - lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power
  - thm-known-variance-normal-z-test-power-and-minimum-sample-size
  - lem-ceiling-and-least-positive-integer-threshold
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take any $\sigma>0$, set $\delta=\sigma$, and choose $\alpha=\beta_{\rm II}=1-\Phi(1)$. For the upper-tail test $H_0:\mu\le\mu_0$ against $\mu_1=\mu_0+\delta$, the exact planning rule gives least sample size $n_*=4$ for target power $1-\beta_{\rm II}$. At $n=4$, halving the target effect with the same $\sigma$ lowers power to $1/2$. Keeping $\delta=\sigma$ and $n=4$ but doubling the standard deviation (quadrupling the variance) also lowers power to $1/2$.

## Facts & Assumptions

**Given:** AC; the known-$\sigma$ normal model and one-sided test of [[thm-known-variance-normal-z-test-power-and-minimum-sample-size]]; $\sigma>0$; $\delta=\sigma$; and $\alpha=\beta_{\rm II}=1-\Phi(1)$.

[F1] The one-sided test's exact power and least size are given by the local normal z-test theorem. [[thm-known-variance-normal-z-test-power-and-minimum-sample-size]]

[F2] $\Phi$ is strictly increasing, $\Phi(0)=1/2$, and $z_{\Phi(1)}=1$. [[lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power]]

[F3] The ceiling is the least integer at least its argument. [[lem-ceiling-and-least-positive-integer-threshold]]

## Verification

**Given:** The exact model, target effect, and error targets in the Example.

1.1 Since $1/2<\Phi(1)<1$ by [F2], $\alpha=\beta_{\rm II}=1-\Phi(1)$ belong to $(0,1)$. Thus $z_{1-\alpha}=z_{1-\beta_{\rm II}}=z_{\Phi(1)}=1$, and the quantile sum in [F1] is $2$. [F1, F2, given, algebra]

2.1 The theorem's formula gives $n_*=\max\{1,\lceil(\sigma/\sigma)^2(2)^2\rceil\}=4$ by [F3]. At $n=3$, power is $\Phi(\sqrt3-1)<\Phi(1)$ because $\sqrt3<2$ and $\Phi$ is strictly increasing. Therefore the target fails at $n=3$, while [F1] and the formula certify that $n=4$ is the least positive feasible size. [F1, F2, F3, step 1.1, algebra]

2.2 At $n=4$, halving $\delta$ changes $\sqrt n\,\delta/\sigma$ from $2$ to $1$, so the power becomes $\Phi(1-1)=\Phi(0)=1/2<\Phi(1)=1-\beta_{\rm II}$. [F1, F2, step 1.1, algebra]

3.1 If instead $\delta=\sigma$ and $n=4$ are fixed while the standard deviation becomes $2\sigma$, then the standardized effect also becomes $1$; the power is again $1/2$, below target. This standard-deviation change quadruples the variance, so the example records variance sensitivity without treating the variance itself as the standard deviation. [F1, F2, step 1.1, algebra] ∎