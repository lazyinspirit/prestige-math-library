---
id: ex-ntk-mode-wise-exponential-decay
kind: example
title: An NTK eigenmode decays exponentially under least squares
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-neural-tangent-kernel
  - prop-ntk-positive-definite-on-the-sphere
  - thm-least-squares-ntk-mode-decay
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "§5, printed pp. 5–6; kernel eigenmode decay under least squares"
---

## Example

Take pairwise distinct training inputs on a unit sphere under the assumptions of the sphere-positivity proposition, and let $v\in\mathbb R^N$ be a unit eigenvector of their limiting Gram matrix with eigenvalue $\lambda>0$. For labels $y\in\mathbb R^N$, initialize the kernel-flow prediction at $f_0=y+a v$ with $a\ne0$. Under empirical least-squares loss $\frac1{2N}\|f-y\|_2^2$, the prediction is $f(t)=y+a e^{-t\lambda/N}v$. The error stays entirely in this one kernel mode, and its norm decays by the factor $e^{-t\lambda/N}$.

## Example references

[Jacot, Gabriel, and Hongler, §5, least-squares kernel eigenmodes](https://arxiv.org/pdf/1806.07572)

[[prop-ntk-positive-definite-on-the-sphere|Distinct sphere inputs give strictly positive Gram eigenvalues]]

[[thm-least-squares-ntk-mode-decay|Each residual eigenmode evolves by $e^{-t\lambda/N}$]]

## Facts & Assumptions

**Given:** A unit eigenvector $v$ with eigenvalue $\lambda>0$, target vector $y$, and initial prediction $f_0=y+a v$ with $a\ne0$.

[F1] Distinct sphere inputs under the proposition's assumptions have a positive-definite limiting NTK Gram matrix ([[prop-ntk-positive-definite-on-the-sphere]]).

[F2] Least-squares kernel flow multiplies an eigenmode residual by $e^{-t\lambda/N}$ ([[thm-least-squares-ntk-mode-decay]]).

## Verification

**Proof technique:** substitute the single-mode initial residual into the exact eigenmode formula.

1.1 The initial residual is $f_0-y=a v$. Since $v$ is a unit eigenvector with eigenvalue $\lambda>0$, [F2] gives $f(t)-y=a e^{-t\lambda/N}v$. [F1, F2, given, algebra]

2.1 Taking norms and using $\|v\|_2=1$ yields $\|f(t)-y\|_2=|a|e^{-t\lambda/N}$, which tends to zero because $\lambda/N>0$. This is the single positive mode asserted in the Example. [F2, step 1.1, algebra] ∎
