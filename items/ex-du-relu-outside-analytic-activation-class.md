---
id: ex-du-relu-outside-analytic-activation-class
kind: example
title: "ReLU lies outside the analytic activation assumptions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-du-overparameterized-network-architectures-and-gram-kernels]
justified_by: []
proof_strategy: direct
axiom_use: "The differentiability check is choice-free."
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
    - title: "Du et al., Condition 3.1 and Condition 3.2"
      url: "https://proceedings.mlr.press/v97/du19c.html"
---

## Example

Let $\sigma(t)=\max\{0,t\}$ be the ReLU activation. It is not differentiable at $0$, so it is not analytic and does not satisfy the smooth-activation assumptions of the two finite-width convergence theorems.

## Example references

[Du et al., activation assumptions, Conditions 3.1 and 3.2](https://proceedings.mlr.press/v97/du19c.html)

[[def-du-overparameterized-network-architectures-and-gram-kernels|The activation assumptions used by the stated network theorems]]

## Facts & Assumptions

**Given:** The ReLU function and the activation hypotheses used for the stated finite-width theorems.

[F1] The theorems assume an analytic activation with a Lipschitz derivative. [[def-du-overparameterized-network-architectures-and-gram-kernels]]

## Verification

**Given:** $\sigma(t)=\max\{0,t\}$.

1.1 For $t<0$, $\sigma(t)=0$, so its left derivative at $0$ is $0$; for $t>0$, $\sigma(t)=t$, so its right derivative at $0$ is $1$. The two one-sided derivatives differ, and the derivative at $0$ does not exist. [given, algebra]

2.1 Every analytic real function is differentiable at every point of its domain. Since ReLU is not differentiable at $0$, it is not analytic; it also fails the Lipschitz-derivative condition in [F1]. [F1, step 1.1] ∎
