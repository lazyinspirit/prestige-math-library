---
id: thm-least-squares-ntk-mode-decay
kind: theorem
title: Least-squares NTK flow decays mode by mode and fits distinct sphere data
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-neural-tangent-kernel
  - def-real-exponential-function-and-e
  - prop-ntk-positive-definite-on-the-sphere
  - thm-derivative-of-exponential
  - thm-sequential-infinite-width-ntk-limit
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "§5, printed pp. 5–6; finite-data least-squares kernel flow and eigenmode decay"
---

## Statement

Assume AC and use the source-normalized network with scalar output, a finite data set $x_1,\ldots,x_N$ with $N\ge1$, and limiting neural tangent Gram matrix $K_\infty$ from the sequential infinite-width theorem. For a target vector $y\in\mathbb R^N$, consider the finite-data least-squares loss $\mathcal L(f)=\frac1{2N}\sum_{i=1}^N(f_i-y_i)^2$ and its limiting kernel-gradient-flow equation

$$\dot f(t)=-\frac1N K_\infty(f(t)-y),\qquad f(0)=f_0.$$

Let $K_\infty=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_N)Q^T$ with $Q$ orthogonal and $\lambda_i\ge0$. Then for every $t\ge0$,

$$\bigl(Q^T(f(t)-y)\bigr)_i=e^{-t\lambda_i/N}\,\bigl(Q^T(f_0-y)\bigr)_i\quad(1\le i\le N).$$

Zero-eigenvalue residual components remain constant. If the inputs are pairwise distinct points on $S^{n_0-1}$, with $n_0\ge1$, $L\ge2$, $\beta>0$, and a globally Lipschitz nonpolynomial activation, then $K_\infty$ is positive definite and $f(t)\to y$ as $t\to\infty$.

## Statement references

[Jacot, Gabriel, and Hongler, §5, least-squares NTK dynamics and eigenmode decay](https://arxiv.org/pdf/1806.07572)

[[thm-sequential-infinite-width-ntk-limit|The limiting finite-data kernel is the deterministic recursive NTK]]

[[prop-ntk-positive-definite-on-the-sphere|The limiting NTK is strictly positive definite on distinct unit-sphere inputs]]

## Facts & Assumptions

**Given:** AC; the source-normalized scalar-output network; a finite data set of size $N\ge1$ and its labels; the limiting kernel $K_\infty$; and an initial prediction vector $f_0$.

[F1] The finite-width tangent kernel is a Jacobian Gram matrix, hence every finite-data Gram matrix is symmetric positive semidefinite ([[def-neural-tangent-kernel]]).

[F2] Under the AC and source-normalized network hypotheses, the sequential theorem supplies the deterministic limiting Gram matrix as the probability limit of finite-width Gram matrices ([[thm-sequential-infinite-width-ntk-limit]]).

[F3] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F4] The exponential has derivative equal to itself ([[thm-derivative-of-exponential]]).

[F5] For distinct unit-sphere inputs under the listed assumptions, the recursive limiting NTK Gram matrix is positive definite ([[prop-ntk-positive-definite-on-the-sphere]]).

## Proof
**Proof technique:** diagonalize the symmetric Gram matrix and solve each scalar residual equation.

1.1 For any finite-width parameters $\theta$ and coefficients $c_i$, [F1] gives $c^TK_\theta c=\left\|\sum_{i=1}^Nc_i\nabla_\theta f_\theta(x_i)\right\|_2^2\ge0.$ Thus every $K_\theta$ is symmetric positive semidefinite. Taking the finite-dimensional probability limit in [F2] preserves symmetry and each quadratic inequality, so $K_\infty$ is symmetric positive semidefinite. [F1, F2, given, algebra]

2.1 Apply [F3] to $K_\infty$. In the orthogonal coordinates $r(t)=Q^T(f(t)-y)$, the flow equation becomes $\dot r_i(t)=-(\lambda_i/N)r_i(t)$. Differentiating $e^{t\lambda_i/N}r_i(t)$ using [F4] gives derivative zero, so it equals its initial value. Therefore $r_i(t)=e^{-t\lambda_i/N}r_i(0)$ for every $i$, including $\lambda_i=0$. [F3, F4, step 1.1, algebra]

3.1 Under the sphere hypotheses, [F5] makes every eigenvalue strictly positive. Hence $e^{-t\lambda_i/N}\to0$ for every $i$, so each coordinate of $Q^T(f(t)-y)$ tends to zero. Since $Q$ is orthogonal, $f(t)-y\to0$ in Euclidean norm, proving convergence to the target vector. [F5, step 2.1, algebra] ∎
