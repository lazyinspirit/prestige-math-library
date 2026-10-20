---
id: ex-non-global-training-stationary-point
kind: example
title: "Gradient descent can stay at a non-global stationary point"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-physics-informed-neural-network-loss
  - alg-empirical-pinn-objective
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Introduction, global-minimizer idealization and optimizer caveat"
---

## Example

For the scalar objective $J(\theta)=(\theta^2-1)^2$, the global minimum value is $0$ and is attained at $\theta=\pm1$, while $\theta=0$ is stationary with $J(0)=1$. Gradient descent $\theta_{k+1}=\theta_k-\eta J'(\theta_k)$ initialized at $\theta_0=0$ remains at $0$ for every step size $\eta>0$. Thus a theorem about global minimizers does not by itself imply that a gradient-based training procedure finds one.

## Example references
[Shin et al., Introduction: the analysis idealizes global minimizers and does not prove optimizer convergence](https://arxiv.org/pdf/2004.01806)

[Shin et al., Introduction: no general optimizer guarantee is asserted](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The polynomial objective and gradient-descent update in the Example.

[F1] $J'(\theta)=4\theta(\theta^2-1)$ by polynomial differentiation.

## Verification

**Proof strategy:** compare objective values and evaluate the update at zero.

1.1 Since $J(\theta)$ is a square, $J(\theta)\ge0$, with equality exactly when $\theta^2=1$. Also $J(0)=1$. Hence $0$ is not a global minimizer. [given, algebra]

2.1 By [F1], $J'(0)=0$. If $\theta_k=0$, the update gives $\theta_{k+1}=0-\eta J'(0)=0$; induction from $\theta_0=0$ yields $\theta_k=0$ for all $k$. The iterates therefore never reach either global minimizer. [given, F1, algebra, induction] ∎

