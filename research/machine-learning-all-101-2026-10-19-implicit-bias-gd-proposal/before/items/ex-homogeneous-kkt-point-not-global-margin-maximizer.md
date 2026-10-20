---
id: ex-homogeneous-kkt-point-not-global-margin-maximizer
kind: example
title: "A homogeneous-network KKT point that is not globally optimal"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-feedforward-neural-network
  - def-homogeneous-classifier-margin-and-exponential-risk
  - def-margin-kkt-and-mfcq
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, discussion following Theorem 4.4"
      url: "https://arxiv.org/pdf/1906.05890"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §10.2"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Example

For the single training example $x_0=1$ with label $y_0=+1$, take two hidden units with square activation, trainable input weights $\theta_1,\theta_2$, zero biases, and fixed output weights $1,4$. The resulting degree-two homogeneous score is $q(\theta)=\theta_1^2+4\theta_2^2$. The feasible point $\theta_*=(1,0)$ is a Clarke KKT point of minimizing $\frac12\|\theta\|_2^2$ subject to $q(\theta)\ge1$, but it is not a global minimizer: $(0,\frac12)$ is feasible and has strictly smaller norm.

## Example references

[[def-feedforward-neural-network|Finite feedforward graph evaluation convention]]

[[def-homogeneous-classifier-margin-and-exponential-risk|Parameter homogeneity and margin convention]]

[[def-margin-kkt-and-mfcq|Margin-form Clarke KKT conditions]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, discussion following Theorem 4.4](https://arxiv.org/pdf/1906.05890)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §10.2](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** The degree-two homogeneous margin and the margin-form Clarke KKT definition.

[F1] [[def-homogeneous-classifier-margin-and-exponential-risk]]: a margin of degree $L$ satisfies $q(c\theta)=c^Lq(\theta)$.

[F2] [[def-margin-kkt-and-mfcq]]: a feasible point is Clarke KKT if nonnegative multipliers and Clarke subgradients satisfy stationarity and complementary slackness.

[F3] [[def-feedforward-neural-network]]: each non-input node evaluates an activation at a weighted sum of earlier node values and a bias.

## Proof

**Proof technique:** compute the gradient, the KKT multiplier, and the objective values at the two feasible points.

1.1 The stated two-node graph evaluates the hidden values $\theta_1^2$ and $\theta_2^2$ and combines them with its fixed output weights, so its score is $q(\theta)=\theta_1^2+4\theta_2^2$ and $q(c\theta)=c^2q(\theta)$ for every $c>0$. At $\theta_*=(1,0)$, $q(\theta_*)=1$ and $\nabla q(\theta_*)=(2,0)$, so $\theta_*\in\partial^\circ q(\theta_*)$ and the multiplier $\lambda=\frac12$ gives $\theta_* =\lambda\nabla q(\theta_*)$. Complementary slackness holds because the sole constraint is active. Thus [F2] gives the KKT property. [F1, F2, F3, given, algebra]

2.1 The point $(0,\frac12)$ satisfies $q(0,\frac12)=1$ and is feasible. The objective at $\theta_*$ is $\frac12$, whereas at $(0,\frac12)$ it is $\frac12(\frac14)=\frac18<\frac12$. Therefore $\theta_*$ is not a global minimizer. [F2, step 1.1, algebra] ∎
