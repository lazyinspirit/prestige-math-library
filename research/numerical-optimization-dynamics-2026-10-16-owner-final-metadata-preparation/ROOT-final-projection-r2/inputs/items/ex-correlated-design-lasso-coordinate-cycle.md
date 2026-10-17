---
id: ex-correlated-design-lasso-coordinate-cycle
kind: example
title: "One cyclic coordinate-descent cycle for correlated-design Lasso"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-cyclic-exact-block-minimization
  - def-lasso-estimator
  - lem-coordinate-lasso-soft-threshold-update
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §2"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "P. Tseng, Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization, §§2 and 4"
      url: "https://www.mit.edu/~dimitrib/PTseng/papers/archive/bcr_jota.pdf"
---

## Example

Let $n=2$, $X_1=(1,0)^T$, $X_2=(1,1)^T$, $y=(2,1)^T$, and $\tau=1/4$ in [[def-lasso-estimator]]. Starting at $\theta^0=(0,0)$, one exact cyclic sweep in the order $1,2$ gives $\theta^1=(3/2,0)$ and $\theta^2=(3/2,1/2)$.

## Facts & Assumptions

**Given:** The design and response in the Example, positive Lasso penalty $\tau=1/4$, cyclic coordinate order $1,2$, and sweep budget $K=1$.

[F1] [[alg-cyclic-exact-block-minimization]]: a cyclic sweep replaces each selected block by a global minimizer of the objective slice with the other coordinates fixed.

[F2] [[def-lasso-estimator]]: $Q_y(\theta)=\frac12\|y-X\theta\|_2^2+\frac12\|\theta\|_1$ for these $n,\tau$.

[F3] [[lem-coordinate-lasso-soft-threshold-update]]: a nonzero column update is $S_{n\tau}(X_j^Tr_j)/\|X_j\|_2^2$.

## Proof

1.1 Initially $r_1=y$, so $X_1^Tr_1=2$, $\|X_1\|_2^2=1$, and $n\tau=1/2$. The update lemma gives $\theta_1^1=S_{1/2}(2)=3/2$; holding $\theta_2=0$ gives residual $(1/2,1)$ and objective $Q_y(3/2,0)=\frac12(1/4+1)+\frac12(3/2)=11/8$. [F1, F2, F3, given, algebra]

2.1 For the second block, $r_2=y-X_1(3/2)=(1/2,1)$, so $X_2^Tr_2=3/2$ and $\|X_2\|_2^2=2$. Thus $\theta_2^2=S_{1/2}(3/2)/2=1/2$. The final residual is $(0,1/2)$ and $Q_y(3/2,1/2)=\frac12(1/4)+\frac12(2)=9/8$. The values decrease from $Q_y(0,0)=5/2$ to $11/8$ to $9/8$, as the exact updates require. [F1, F2, F3, step 1.1, algebra] ∎

