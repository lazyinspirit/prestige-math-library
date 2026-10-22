---
id: ex-ip-score-coverage-unbounded-truth-prior-bias
kind: example
title: A proper Gaussian prior gives nonuniform finite-sample coverage on an unbounded truth class
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_use: No choice axiom is used; the scalar Gaussian model and limits are explicit.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Fix $n\ge1$, $\sigma,\tau>0$, and $0<\gamma<1$. Observe independent $Y_i\sim N(\theta,\sigma^2)$ under truth $\theta\in\mathbb R$ and use prior $N(0,\tau^2)$. Let $v_n=(\tau^{-2}+n\sigma^{-2})^{-1}$, $a_n=v_n n\sigma^{-2}$, and $z_\gamma=\Phi^{-1}(1-\gamma/2)$, where $\Phi$ is the standard normal cumulative distribution function. The exact posterior credible interval is $[a_n\bar Y-z_\gamma\sqrt{v_n},a_n\bar Y+z_\gamma\sqrt{v_n}]$. Since $0<a_n<1$, its repeated-sampling coverage at fixed $n$ tends to zero as $|\theta|\to\infty$, despite exact posterior computation and exact sampling.

## Example references

[[op-ip-calibration-under-score-and-solver-error|The calibrated-inversion question and its exact Bayesian baseline.]]

## Facts & Assumptions

**Given:** The scalar normal observation model and proper prior in the Example, with $n\ge1$, $\sigma,\tau>0$, and $0<\gamma<1$.

[A1] Completing the Gaussian likelihood and prior gives posterior mean $a_n\bar Y$, variance $v_n=(\tau^{-2}+n\sigma^{-2})^{-1}$, and central credible radius $r_n=z_\gamma\sqrt{v_n}$.

[A2] The standard normal cumulative distribution has vanishing tails: $\Phi(t)\to0$ as $t\to-\infty$ and $\Phi(t)\to1$ as $t\to+\infty$.

## Verification

1.1 At every fixed $n$, $a_n=n\tau^2/(\sigma^2+n\tau^2)$ lies strictly between zero and one, and $r_n$ is finite and independent of the observation. Under truth $\theta$, $a_n\bar Y-\theta$ has mean $-(1-a_n)\theta$ and fixed positive standard deviation $a_n\sigma/\sqrt n$. [given, A1, algebra]

1.2 Standardizing the event in the Example gives $c_n(\theta)=\Phi\!\left(\frac{r_n+(1-a_n)\theta}{a_n\sigma/\sqrt n}\right)-\Phi\!\left(\frac{-r_n+(1-a_n)\theta}{a_n\sigma/\sqrt n}\right)$. [A1, algebra]

2.1 As $\theta\to+\infty$, both arguments in step 1.2 tend to $+\infty$, so both cumulative probabilities tend to one by [A2] and their difference tends to zero. As $\theta\to-\infty$, both arguments tend to $-\infty$ and their difference again tends to zero. Thus the infimum coverage over $\theta\in\mathbb R$ is zero at each fixed $n$. [A1, A2, step 1.2, algebra] ∎
