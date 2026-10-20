---
id: ex-sparse-pinn-collocation-aliases-residual
kind: example
title: "A smooth residual can vanish at every collocation point and remain nonzero in population loss"
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
      locator: "equation (2.5), boundary-collocation conventions"
---

## Example

On $U=(0,1)$ take the residual operator $L[h]=h'$, target $f=0$, boundary operator given by endpoint restriction, and boundary data $g=0$. For each integer $m\ge2$, set
$$h_m(x)=\frac{1-\cos(2\pi mx)}{2\pi m}.$$
At the residual collocation points $x_j=j/m$ for $1\le j<m$, the residual $L[h_m](x_j)$ is zero; the exact endpoint values are also zero. Nevertheless, for uniform population measure, the population residual loss is $\int_0^1|L[h_m](x)|^2dx=1/2$. This example concerns unregularized sparse collocation and does not claim that $h_m$ minimizes the regularized objective.

## Example references
[Shin et al., equations (2.4)–(2.6): empirical and population PINN losses](https://arxiv.org/pdf/2004.01806)

[Shin et al., equation (2.5): the population residual loss integrates squared residuals](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The operator, data, collocation set, and trial functions in the Example.

[F1] The derivative of $h_m$ is $h_m'(x)=\sin(2\pi mx)$.

[F2] For every positive integer $m$, $\int_0^1\sin^2(2\pi mx)dx=1/2$, by $\sin^2 z=(1-\cos(2z))/2$ and direct integration.

## Verification

**Proof strategy:** evaluate the derivative at the grid points and integrate its square.

1.1 Differentiating the displayed formula gives [F1]. At $x_j=j/m$, $h_m'(x_j)=\sin(2\pi j)=0$. Also $h_m(0)=h_m(1)=0$ since $\cos(0)=\cos(2\pi m)=1$. Thus the empirical residual and exact boundary errors vanish. [given, F1, algebra]

1.2 The population residual loss is $\int_0^1|h_m'(x)|^2dx=1/2$ by [F2]. Therefore exact collocation fit at these sample points does not by itself force the population residual loss to be small. [step 1.1, F2, algebra] ∎

