---
id: cex-uniform-payoff-convergence-does-not-imply-gradient-convergence
kind: counterexample
title: "Uniform payoff convergence does not imply gradient convergence"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-sine-and-cosine-derivatives
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
---

## Statement refuted

For a parameter-dependent random payoff, pointwise weak convergence of its output law, even together with uniform convergence of its expected payoff, implies convergence of derivatives of the expected payoffs.

## Facts & Assumptions

**Given:** Weak convergence of probability laws means convergence of integrals against every bounded continuous real function.

[F1] [[thm-sine-and-cosine-derivatives]]: $(\sin x)'=\cos x$ and $\cos0=1$.

## Counterexample

**Given:** Use a one-point probability space, so each payoff below is deterministic and its law is a Dirac probability measure.

1.1 For $n\ge1$, put $Y_n(\theta)=n^{-1}\sin(n^2\theta)$ and let $Y(\theta)=0$. For every $\theta$, $|Y_n(\theta)-Y(\theta)|\le1/n$, so the expected payoffs converge uniformly to zero. For every bounded continuous $\psi$, $\mathbb E[\psi(Y_n(\theta))]=\psi(Y_n(\theta))\to\psi(0)=\mathbb E[\psi(Y(\theta))]$; hence the output laws converge weakly at every fixed $\theta$. [given, algebra]

2.1 The expected payoff functions are $J_n(\theta)=Y_n(\theta)$ and $J(\theta)=0$. By [F1], $J_n'(0)=n^{-1}n^2\cos0=n$, whereas $J'(0)=0$. Thus the derivatives do not converge, despite the stronger uniform convergence of the expected payoffs. [F1, step 1.1, algebra] ∎
