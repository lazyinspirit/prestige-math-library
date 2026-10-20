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

Assume AC. Fix $N,n_0\ge1$, a depth $L\ge2$, a bias scale $\beta>0$, and a globally Lipschitz nonpolynomial activation $\sigma:\mathbb R\to\mathbb R$. Use the source-normalized network with scalar output and independent standard-normal initialization, and let $x_1,\ldots,x_N$ be pairwise distinct points of $S^{n_0-1}=\{x\in\mathbb R^{n_0}:\|x\|_2=1\}$. Let $K_\infty$ be the limiting neural tangent Gram matrix on these inputs given by the sequential infinite-width theorem. Choose a unit eigenvector $v\in\mathbb R^N$ of $K_\infty$ with eigenvalue $\lambda>0$. For labels $y\in\mathbb R^N$ and $a\ne0$, initialize the limiting empirical least-squares kernel flow by $f_0=y+av$ and solve

$$\dot f(t)=-\frac1N K_\infty(f(t)-y).$$

Then $f(t)=y+a e^{-t\lambda/N}v$. The error stays entirely in this one kernel mode, and its Euclidean norm decays by the factor $e^{-t\lambda/N}$.

## Example references

[Jacot, Gabriel, and Hongler, §5, least-squares kernel eigenmodes](https://arxiv.org/pdf/1806.07572)

[[prop-ntk-positive-definite-on-the-sphere|Distinct sphere inputs give strictly positive Gram eigenvalues]]

[[thm-sequential-infinite-width-ntk-limit|The deterministic limiting Gram matrix from the sequential width limit]]

[[thm-least-squares-ntk-mode-decay]]: Each residual eigenmode evolves by $e^{-t\lambda/N}$

## Facts & Assumptions

**Given:** AC; the source-normalized scalar-output model; $N,n_0\ge1$, $L\ge2$, $\beta>0$, a globally Lipschitz nonpolynomial activation; pairwise distinct unit-sphere inputs; a unit eigenvector $v$ of their sequential limiting Gram matrix with eigenvalue $\lambda>0$; target vector $y$; and initial prediction $f_0=y+a v$ with $a\ne0$.

[F1] Distinct sphere inputs under the proposition's assumptions have a positive-definite limiting NTK Gram matrix ([[prop-ntk-positive-definite-on-the-sphere]]).

[F2] Least-squares kernel flow multiplies an eigenmode residual by $e^{-t\lambda/N}$ ([[thm-least-squares-ntk-mode-decay]]).

## Verification

**Proof technique:** substitute the single-mode initial residual into the exact eigenmode formula.

1.1 The initial residual is $f_0-y=a v$. Since $v$ is a unit eigenvector with eigenvalue $\lambda>0$, [F2] gives $f(t)-y=a e^{-t\lambda/N}v$. [F1, F2, given, algebra]

2.1 Taking norms and using $\|v\|_2=1$ yields $\|f(t)-y\|_2=|a|e^{-t\lambda/N}$, which tends to zero because $\lambda/N>0$. This is the single positive mode asserted in the Example. [F2, step 1.1, algebra] ∎
