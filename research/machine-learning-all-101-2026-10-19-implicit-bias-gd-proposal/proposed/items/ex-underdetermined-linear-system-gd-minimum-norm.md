---
id: ex-underdetermined-linear-system-gd-minimum-norm
kind: example
title: "Zero-initialized descent on an underdetermined system"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [thm-zero-initialized-gd-selects-minimum-norm-least-squares]
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
  references: []
---

## Example

Take $X=[1\ 1]\in\mathbb R^{1\times2}$, $y=1$, and $F(w)=\frac12(w_1+w_2-1)^2$. Starting from $w_0=(0,0)$, use fixed step $\eta=\frac14$. The iterates are $w_k=\frac12(1-2^{-k})(1,1)$ and converge to $(\frac12,\frac12)$, the unique minimum-Euclidean-norm least-squares solution among the nonunique minimizers $w_1+w_2=1$.

## Facts & Assumptions

**Given:** The stated matrix, response, objective, initial vector, and fixed step.

[F1] [[thm-zero-initialized-gd-selects-minimum-norm-least-squares]]: when $X\ne0$ and $0<\eta\le1/\lambda_{\max}(X^{\mathsf T}X)$, zero-initialized gradient descent converges to the unique minimum-norm least-squares minimizer.

## Verification

1.1 Here $X^{\mathsf T}X=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ has eigenvalues $2$ and $0$, so $\lambda_{\max}=2$ and $0<\eta=\frac14\le\frac12$. Thus the general selector theorem [F1] applies. [given, F1, algebra]

2.1 If $w_k=(a_k,a_k)$, then $\nabla F(w_k)=(2a_k-1)(1,1)$ and the update gives $a_{k+1}=a_k-\frac14(2a_k-1)=\frac12a_k+\frac14$. Starting with $a_0=0$, induction yields $a_k=\frac12(1-2^{-k})$, so $w_k\to(\frac12,\frac12)$. [given, step 1.1, algebra, induction]

3.1 The least-squares minimum is zero, attained exactly when $w_1+w_2=1$. For every such vector, $w_1^2+w_2^2=\frac12+\frac12(w_1-w_2)^2\ge\frac12$, with equality exactly when $w_1=w_2=\frac12$. Hence $(\frac12,\frac12)$ is the unique minimum-norm solution reached in step 2.1. [given, step 2.1, algebra] ∎
