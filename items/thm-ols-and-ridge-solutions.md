---
id: thm-ols-and-ridge-solutions
kind: theorem
title: The full ordinary least-squares solution set and the unique ridge solution
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-linear-regression-objectives
  - thm-least-squares-solutions-and-normal-equation
  - def-tikhonov-regularised-least-squares
  - thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
  - thm-singular-value-decomposition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing (January 2017)"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, §2.2"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Let $n,p\ge1$, $X\in\mathbb R^{n\times p}$, and $y\in\mathbb R^n$. The ordinary least-squares minimizers of $\|y-X\beta\|_2^2$ are exactly the solutions of $X^{\mathsf T}X\beta=X^{\mathsf T}y$; if $\beta_0$ is one such solution, the full minimizer set is $\beta_0+\ker X$. It is a singleton if and only if the columns of $X$ are linearly independent. For every $\lambda>0$, the ridge objective $\|y-X\beta\|_2^2+\lambda\|\beta\|_2^2$ has the unique minimizer
$$\widehat\beta_{\mathrm{ridge}}=(X^{\mathsf T}X+\lambda I_p)^{-1}X^{\mathsf T}y.$$

## Statement references

[The Elements of Statistical Learning, Chapter 3 §§3.2 and 3.4](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Rigollet and Hütter, §2.2, unconstrained least squares](https://arxiv.org/pdf/2310.19244v1)

## Facts & Assumptions

**Given:** A finite real design matrix $X$, a response vector $y$, and, for the ridge claim, a real $\lambda>0$.

[F1] Finite-dimensional least-squares minimizers exist, satisfy the normal equations, and form $\beta_0+\ker X$ ([[thm-least-squares-solutions-and-normal-equation]]).

[F2] A finite real matrix has a singular value decomposition with orthonormal left and right bases ([[thm-singular-value-decomposition]]).

[F3] The ridge objective is $\|X\beta-y\|_2^2+\lambda\|\beta\|_2^2$ for $\lambda>0$ ([[def-tikhonov-regularised-least-squares]]).

[F4] That objective is strictly convex and has unique minimizer $(X^{\mathsf T}X+\lambda I_p)^{-1}X^{\mathsf T}y$ ([[thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]]).

[F5] The empirical squared-loss convention for OLS and the ridge objective is fixed in [[def-linear-regression-objectives]].

## Proof

1.1 Apply [F1] to the linear map $\beta\mapsto X\beta$ between finite-dimensional Euclidean spaces. It gives existence, the equation $X^{\mathsf T}(X\beta-y)=0$, and the full set $\beta_0+\ker X$. [F1, F5]

2.1 The translate $\beta_0+\ker X$ has exactly one element if and only if $\ker X=\{0\}$. By definition this is equivalent to linear independence of the columns, proving the OLS uniqueness assertion. [step 1.1, algebra]

3.1 By [F2], there is an orthonormal basis of $\mathbb R^p$ in which $X^{\mathsf T}X$ is diagonal with entries $\sigma_1^2,\ldots,\sigma_r^2,0,\ldots,0$. Thus $X^{\mathsf T}X+\lambda I_p$ has positive diagonal entries $\sigma_j^2+\lambda$ and $\lambda$, so the inverse exists. The objective in [F3] is exactly the ridge objective in [F5], and [F4] gives its unique minimizer in the displayed formula. [F2, F3, F4, F5, algebra] ∎
