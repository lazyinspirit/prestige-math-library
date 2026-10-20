---
id: thm-kernel-ridge-residual-prediction-certificate
kind: theorem
title: Kernel ridge residuals certify coefficient and training prediction errors
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-regularized-kernel-prediction-system
  - lem-regularized-gram-matrix-inverse-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: 'Alex Gittens and Michael W. Mahoney, Revisiting the Nyström Method, §4.1.1'
      url: https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf
      locator: Theorem 2's induced spectral-norm error convention, printed pp. 42–43; the residual estimate is proved directly here.
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §§7B–7C'
      url: https://linear.axler.net/LADR4e.pdf
      locator: Real spectral theorem and positive-operator characterizations, printed pp. 244–252.
---

## Statement

Let $K\in\mathbb R^{n\times n}$ be symmetric with $x^TKx\ge0$ for every $x\in\mathbb R^n$ and $n\ge1$, let $y\in\mathbb R^n$, and let $\tau>0$. Write $I_n$ for the identity matrix. Define $a=(K+\tau I_n)^{-1}y$ and $u=Ka$. For any vector $b\in\mathbb R^n$, define the actual residual $r=y-(K+\tau I_n)b$. Define $\lVert x\rVert_2=(\sum_i x_i^2)^{1/2}$ and $\lVert M\rVert_2=\sup_{\lVert x\rVert_2=1}\lVert Mx\rVert_2$; then

$$\lVert b-a\rVert_2\le\frac{\lVert r\rVert_2}{\tau},\qquad \lVert Kb-u\rVert_2\le\frac{\lVert K\rVert_2\lVert r\rVert_2}{\tau}. $$

## Statement references

[[def-regularized-kernel-prediction-system]]: The exact coefficient and fitted vectors solve $(K+\tau I)a=y$ and $u=Ka$.

[[lem-regularized-gram-matrix-inverse-bound]]: The shifted Gram inverse has induced norm at most $1/\tau$.

## Facts & Assumptions

**Given:** The positive-semidefinite matrix $K$, vector $y$, scalar $\tau>0$, exact solution $a$, and arbitrary approximate coefficient vector $b$ in the Statement.

[F1] [[def-regularized-kernel-prediction-system]]: $(K+\tau I_n)a=y$ and $u=Ka$.

[F2] [[lem-regularized-gram-matrix-inverse-bound]]: $K+\tau I_n$ is invertible and $\lVert(K+\tau I_n)^{-1}\rVert_2\le1/\tau$.

## Proof

1.1 By [F1], $r=y-(K+\tau I_n)b=(K+\tau I_n)(a-b)$. Invertibility in [F2] therefore gives $b-a=-(K+\tau I_n)^{-1}r$, so $\lVert b-a\rVert_2\le\lVert r\rVert_2/\tau$. [given, F1, F2, algebra]

2.1 Since $u=Ka$, the training fitted-vector error is $Kb-u=K(b-a)$. For every vector $x$, the definition of the induced norm gives $\lVert Kx\rVert_2\le\lVert K\rVert_2\lVert x\rVert_2$. Applying this to $b-a$ and using step 1.1 proves $\lVert Kb-u\rVert_2\le\lVert K\rVert_2\lVert r\rVert_2/\tau$. [given, F1, step 1.1, algebra] ∎
