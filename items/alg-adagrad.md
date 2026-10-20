---
id: alg-adagrad
kind: algorithm
title: Gram-matrix AdaGrad with full or singular diagonal metrics
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-online-decision-protocol
  - def-adversary-and-feedback-model
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-convex-subset-of-euclidean-space
  - def-metric-topology
  - def-metric-bounded-diameter
  - def-matrix-product-and-identity-matrix
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-of-square-roots
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - lem-psd-matrix-has-unique-psd-square-root
justified_by:
  - lem-adagrad-projection-exists
  - lem-adagrad-accumulated-gram-matrix-is-psd
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.6, Algorithm 19 and the full/diagonal adaptive updates, PDF pp. 113–118 (printed pp. 91–96)."
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization"
      url: "https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf"
      locator: "§2, Figure 1 and Algorithm 1, diagonal adaptive scale and update, PDF pp. 8–10."
verification:
  precheck: n/a
---

## Definition

Let $d\ge1$ be an integer and let $K\subseteq\mathbb R^d$ be nonempty, bounded, closed, and convex; let $x_1\in K$, let $T\ge1$ be an integer, and fix a step size $\eta>0$. Coordinate and matrix-entry subscripts in this procedure are one-based labels: for $i,j\in\{1,\ldots,d\}$, write $g_i=g(i-1)$ and $G_{ij}=G(i-1,j-1)$ in the underlying zero-based Euclidean and matrix conventions, and use the same relabeling for the other vectors and matrices. Initialize $G_0=0$. For each round $t=1,\ldots,T$, play $x_t$, then receive the full current loss information and its prescribed gradient vector $g_t\in\mathbb R^d$, and set

$$G_t=G_{t-1}+g_tg_t^\top=\sum_{s=1}^t g_sg_s^\top.$$

The accumulated matrix $G_t$ is symmetric and positive semidefinite. Choose either the **full-matrix scale** $H_t=G_t^{1/2}$, the unique positive-semidefinite square root, or the **diagonal scale** $H_t=\operatorname{diag}(\sqrt{(G_t)_{11}},\ldots,\sqrt{(G_t)_{dd}})$. Define $H_t^\dagger$ to be the Moore–Penrose pseudoinverse and update

$$y_{t+1}=x_t-\eta H_t^\dagger g_t,\qquad x_{t+1}\in\arg\min_{x\in K}(x-y_{t+1})^\top H_t(x-y_{t+1}).$$

A minimizer exists; if it is not unique, select any minimizer. Return $x_1,\ldots,x_T$. The matrix seminorm notation in the objective means $\|v\|_{H_t}^2=v^\top H_tv$. The diagonal scale here is formed by taking each diagonal entry of $G_t$ and then its scalar square root; in general it is not $\operatorname{diag}(G_t^{1/2})$. This is an update definition only and asserts no regret bound.

## Definition references

[[lem-adagrad-accumulated-gram-matrix-is-psd]]: proves the accumulated matrix is symmetric positive semidefinite and both full and diagonal scales are well-defined positive-semidefinite matrices.

[[def-online-decision-protocol]]: the learner plays $x_t$ before receiving round-$t$ feedback.

[[def-adversary-and-feedback-model]]: full-information feedback reveals the full current loss function after the choice. The prescribed gradient vector is an additional input explicitly required by this procedure.

[[def-euclidean-inner-product]]: vectors use the standard Euclidean inner product.

[[def-jacobian-matrix-and-gradient]]: $g_t$ is a vector in the standard coordinate basis.

[[def-convex-subset-of-euclidean-space]]: every segment between points of $K$ lies in $K$.

[[def-metric-topology]]: closedness uses the Euclidean metric topology.

[[def-metric-bounded-diameter]]: boundedness uses the Euclidean metric.

[[def-matrix-product-and-identity-matrix]]: the outer product $g_tg_t^\top$ and matrix sums use ordinary finite-dimensional matrix multiplication.

[[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: for real Euclidean matrices, the adjoint matrix is the transpose.

[[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix admits an orthonormal eigenbasis.

[[thm-of-square-roots]]: every nonnegative real has a unique nonnegative scalar square root.

[[def-moore-penrose-pseudoinverse]]: $H_t^\dagger$ is the Moore–Penrose pseudoinverse, including for singular $H_t$.

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: every finite-dimensional real matrix has a unique Moore–Penrose pseudoinverse.

[[lem-psd-matrix-has-unique-psd-square-root]]: proves the unique symmetric positive-semidefinite matrix root from the real spectral theorem and scalar square roots.
