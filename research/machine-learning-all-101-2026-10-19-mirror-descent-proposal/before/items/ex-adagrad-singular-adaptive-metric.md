---
id: ex-adagrad-singular-adaptive-metric
kind: example
title: AdaGrad with a singular diagonal metric
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-adagrad
  - lem-adagrad-projection-exists
  - lem-adagrad-diagonal-scale-coordinatewise
  - def-euclidean-inner-product
  - def-moore-penrose-pseudoinverse
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.6, Algorithm 19's singular full/diagonal metric updates, PDF pp. 113–118; numerical witness is computed locally."
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization"
      url: "https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf"
      locator: "§2, Figure 1 and Algorithm 1, diagonal adaptive scale, PDF pp. 8–10; numerical witness is computed locally."
verification:
  precheck: n/a
---

## Example

Use the diagonal AdaGrad scale in dimension $2$ with $K=[-1,1]^2$, $x_1=(0,0)$, one round, step size $\eta=1$, and supplied gradient $g_1=(1,0)$. Then $G_1=H_1=\operatorname{diag}(1,0)$, $H_1^\dagger=\operatorname{diag}(1,0)$, and $y_2=(-1,0)$. For a decision vector $(a,b)\in K$, the metric projection objective is $(a+1)^2$, so its minimizers are all points $(-1,s)$ with $s\in[-1,1]$. In particular, one may select $x_2=(-1,0)$. The metric is singular and the projection is nonunique.

## Example references

[[alg-adagrad]]: defines the diagonal scale, pseudoinverse update, and metric projection used in this calculation.

[[lem-adagrad-projection-exists]]: proves that the projection objective has a minimizer even for a singular metric.

[[lem-adagrad-diagonal-scale-coordinatewise]]: identifies the diagonal scale entry with the square root of accumulated squared coordinate gradients.

[[def-euclidean-inner-product]]: the coordinates use the standard Euclidean inner product.

[[def-moore-penrose-pseudoinverse]]: characterizes the pseudoinverse by four matrix equations.

## Facts & Assumptions

**Given:** The one-round update data in the Example.

[F1] [[alg-adagrad]]: $G_1=g_1g_1^\top$, $H_1=\operatorname{diag}(\sqrt{(G_1)_{11}},\sqrt{(G_1)_{22}})$, $y_2=x_1-\eta H_1^\dagger g_1$, and $x_2$ minimizes $(x-y_2)^\top H_1(x-y_2)$ on $K$.

[F2] [[lem-adagrad-diagonal-scale-coordinatewise]]: $(H_1)_{ii}=\sqrt{g_{1,i}^2}$.

[F3] [[def-moore-penrose-pseudoinverse]]: $B$ is the Moore–Penrose pseudoinverse of $A$ when $ABA=A$, $BAB=B$, and $AB$ and $BA$ are self-adjoint.

[F4] [[lem-adagrad-projection-exists]]: the quadratic objective attains a minimum on nonempty bounded closed $K$, even if $H_1$ is singular.

## Verification

1.1 The outer product is $G_1=g_1g_1^\top=\begin{pmatrix}1&0\\0&0\end{pmatrix}$. By [F1, F2], $H_1=\operatorname{diag}(1,0)$; the matrix $D=\operatorname{diag}(1,0)$ satisfies $H_1DH_1=H_1$, $DH_1D=D$, and both $H_1D$ and $DH_1$ equal the symmetric matrix $D$. By [F3], $H_1^\dagger=D$. [given, F1, F2, F3, algebra]

2.1 The update gives $y_2=(0,0)-\operatorname{diag}(1,0)(1,0)=(-1,0)$. For $(a,b)\in[-1,1]^2$, $( (a,b)-y_2)^\top H_1((a,b)-y_2)=(a+1)^2$, which is minimized exactly when $a=-1$, with $b$ arbitrary in $[-1,1]$. [step 1.1, F1, algebra]

3.1 Hence the entire minimizer set is $\{(-1,s):s\in[-1,1]\}$, containing distinct points, and the selected $x_2=(-1,0)$ is valid. The metric has a zero eigenvalue, and [F3] independently guarantees existence of at least one minimizer. [step 2.1, F4, algebra] ∎

