---
id: cex-uniform-payoff-convergence-does-not-imply-gradient-convergence
kind: counterexample
title: "Uniform payoff convergence does not imply gradient convergence"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-sine-and-cosine-derivatives
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - def-dirac-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-change-of-variables-for-expectation
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
---

## Statement refuted

For a parameter-dependent random payoff, pointwise weak convergence of its output law, even together with uniform convergence of its expected payoff, implies convergence of derivatives of the expected payoffs.

## Facts & Assumptions

**Given:** Weak convergence of probability laws means convergence of integrals against every bounded continuous real function.

[F1] [[thm-sine-and-cosine-derivatives]]: $(\sin x)'=\cos x$ and $\cos0=1$.

[F2] [[def-probability-measure]]: the one-point space with unit mass is a probability space; [[def-random-element-and-real-random-variable]], [[def-law-or-distribution-of-a-random-element]] and [[def-dirac-measure]] make each deterministic payoff's law the Dirac measure at its value.

[F3] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and [[thm-change-of-variables-for-expectation]]: on the one-point space an integrable deterministic variable has expectation equal to its value, and a bounded continuous test function integrates against an output law as the expectation of that test function of the output.

## Counterexample

**Given:** Use a one-point probability space, so each payoff below is deterministic and its law is a Dirac probability measure.

1.1 On the one-point probability space, for $n\ge1$ put $Y_n(\theta)=n^{-1}\sin(n^2\theta)$ and let $Y(\theta)=0$. By [F2], their laws are $\delta_{Y_n(\theta)}$ and $\delta_0$. For every $\theta$, $|Y_n(\theta)-Y(\theta)|\le1/n$, so their expectations converge uniformly to zero. For every bounded continuous $\psi$, [F3] gives $\int\psi\,d\delta_{Y_n(\theta)}=\psi(Y_n(\theta))\to\psi(0)=\int\psi\,d\delta_0$; hence the output laws converge weakly at every fixed $\theta$. [given, F2, F3, algebra]

2.1 The expected payoff functions are $J_n(\theta)=Y_n(\theta)$ and $J(\theta)=0$. By [F1], $J_n'(0)=n^{-1}n^2\cos0=n$, whereas $J'(0)=0$. Thus the derivatives do not converge, despite the stronger uniform convergence of the expected payoffs. [F1, step 1.1, algebra] ∎
