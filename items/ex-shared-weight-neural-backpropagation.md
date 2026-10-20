---
id: ex-shared-weight-neural-backpropagation
kind: example
title: "Backpropagation through a two-layer network with a shared weight"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-feedforward-neural-network, alg-backpropagation-through-shared-parameter-recurrence, thm-shared-parameter-backpropagation-gradient-formula, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Take a scalar-input, one-hidden-unit, scalar-output two-layer feedforward network with identity activations and zero biases, and constrain both layer weights to be the same real parameter $\theta$. For input $x\in\mathbb R$, its hidden value is $h_1=\theta x$, its output is $y=\theta h_1=\theta^2x$, and the scalar loss is $J(\theta)=\frac12 y^2$. Backpropagation accumulates the two uses of $\theta$ and returns $\frac{dJ}{d\theta}=2\theta^3x^2$, including the zero cases $x=0$ or $\theta=0$.

## Facts & Assumptions

**Given:** The two-layer scalar network, the tied layer weight $\theta$, input $x$, identity activations, zero biases, and loss $J=\frac12y^2$.

[F1] [[def-feedforward-neural-network]]: a layered perceptron evaluates a finite acyclic graph by applying each vertex's activation to its bias plus the weighted sum of its parents; output vertices may use the identity activation.

[F2] [[alg-backpropagation-through-shared-parameter-recurrence]]: for a repeated transition using the same $\theta$, reverse mode adds each transition's parameter pullback to a single parameter-gradient accumulator.

[F3] [[thm-shared-parameter-backpropagation-gradient-formula]]: the reverse recurrence returns the loss's direct parameter derivative plus all transition-use contributions and the initial-state contribution.

[F4] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: on the real Banach space $\mathbb R$, multiplication $(a,b)\mapsto ab$ is bounded bilinear because $|ab|\le|a||b|$. The coordinate projections on $\mathbb R^2$ are bounded linear, hence Fréchet differentiable. Applying the product rule to the projections of $(\theta,h)$ gives $D_\theta\Phi_t=h_{t-1}$ and $D_h\Phi_t=\theta$; applying it to $\ell(\theta,z)=\frac12 z^2$ gives $D_\theta\ell=0$ and $D_z\ell=z$. These derivative factors are continuous, so the transitions and loss satisfy the recurrence's $C^1$ premise.

## Verification

1.1 The network is the two-step recurrence $h_0=x$, $h_1=\Phi_1(\theta,h_0)=\theta h_0$, $h_2=\Phi_2(\theta,h_1)=\theta h_1$, with loss $J=\frac12h_2^2$. Hence $h_1=\theta x$, $h_2=\theta^2x$, and $J=\frac12\theta^4x^2$. [F1, given, construct, algebra]

2.1 By [F4], the loss gives $\lambda_2=h_2$ and its direct parameter contribution is zero; both transition pullbacks have $D_\theta\Phi_t=h_{t-1}$ and $D_h\Phi_t=\theta$. Thus the $t=2$ use adds $h_1h_2$, the $t=1$ use adds $h_0(\theta h_2)$, and $h_0=x$ has zero parameter derivative. Their sum is $\theta^3x^2+\theta^3x^2=2\theta^3x^2$, including $x=0$ or $\theta=0$. [F2, F3, F4, step 1.1, algebra]

3.1 Applying the product rule [F4] repeatedly to the scalar expression from step 1.1 gives $J'(\theta)=2\theta^3x^2$, equal to the reverse accumulation in step 2.1. For $x=1$ and $\theta=1$, both calculations give $2$. [F3, F4, step 1.1, step 2.1, algebra] ∎
