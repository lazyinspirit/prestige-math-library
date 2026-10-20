---
id: ex-gradient-boosting-zero-tree-direction
kind: example
title: "A one-leaf fit can project a nonzero gradient to zero"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
deps:
  - alg-gradient-boosting
  - def-negative-gradient-pseudo-residual
  - lem-pseudo-residuals-are-negative-score-gradient
  - def-empirical-decision-tree
  - alg-cart-greedy-split
  - def-directional-and-partial-derivatives
aliases: []
proof_strategy: direct
generation:
  role: example
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: machine-learning-all-101-2026-10-19
---

## Example

Take $x_1=0$, $x_2=1$, labels $y_1=+1$, $y_2=-1$, squared loss $\ell(y,z)=\frac12(z-y)^2$, initial scores $f_0(x_1)=f_0(x_2)=0$, and maximum tree depth $0$. The pseudo-residual vector is $(1,-1)$, but its one-leaf least-squares tree fit predicts $0$ on both observations. Let $\Phi(z_1,z_2)=\frac12(z_1-1)^2+\frac12(z_2+1)^2$. A vector $u$ is a strict descent direction at $0$ when the derivative of $t\mapsto\Phi(tu)$ at $t=0$ is negative. The fitted vector $u=(0,0)$ has derivative $0$, although the unrestricted score gradient is $(-1,+1)\ne0$. The exact leaf loss minimizer is also $0$, so the empirical loss stays at $1$.

## Facts & Assumptions

**Given:** The two-observation sample, squared loss, zero initial scores, and depth cap $0$ stated in the Example.

[F1] [[def-negative-gradient-pseudo-residual]]: The pseudo-residual at observation $i$ is the negative second-argument derivative of its loss at the current score.

[F2] [[lem-pseudo-residuals-are-negative-score-gradient]]: The pseudo-residual vector is the negative Euclidean gradient of the empirical score loss.

[F3] [[def-empirical-decision-tree]]: The root sample set contains the training indices, and a regression tree's terminal leaf sets partition those indices.

[F4] [[alg-cart-greedy-split]]: At a node whose depth equals the maximum depth, the procedure leaves the node unsplit; regression leaf predictions are sample means.

[F5] [[alg-gradient-boosting]]: Each leaf update uses an attained exact minimizer of the empirical loss over its real offset.

[F6] [[def-directional-and-partial-derivatives]]: The directional derivative in direction $u$ is the derivative of the line map $t\mapsto\Phi(0+tu)$ at $t=0$.

## Verification

1.1 For any constant $c$, the initial empirical loss is $\frac12(c-1)^2+\frac12(c+1)^2=c^2+1$, so $c_0=0$ is an attained minimizer. At these scores, [F1] gives residuals $r_1=1$ and $r_2=-1$, and [F2] gives $\nabla\Phi(0)=(-1,+1)\ne0$. [given, F1, F2, algebra]

2.1 With depth cap $0$, [F4] leaves the root as a single terminal leaf; by [F3] it contains both observations. Its regression prediction is their residual mean $(1+(-1))/2=0$, so the fitted direction on the sample is $u=(0,0)$. [F3, F4, step 1.1, algebra]

3.1 Since $tu=(0,0)$ for every real $t$, the line map in [F6] is constant and its derivative is $0$. Thus $u$ is not a strict descent direction, even though the unrestricted gradient in step 1.1 is nonzero. [F2, F6, step 2.1]

4.1 The sole leaf's loss at offset $\gamma$ is $\frac12(\gamma-1)^2+\frac12(\gamma+1)^2=\gamma^2+1$, whose attained minimum is $1$ at $\gamma=0$. By [F5], the algorithm updates neither training score, so the loss remains $1$. [F5, step 1.1, step 2.1, algebra] ∎
