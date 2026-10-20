---
id: thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective
kind: theorem
title: The kernel ridge system uniquely minimizes the mean-square RKHS objective
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-regularized-kernel-prediction-system
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
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
    - title: 'Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 6 §6.2.2'
      url: https://gaussianprocess.org/gpml/chapters/RW6.pdf
      locator: Equations (6.19)–(6.20), printed pp. 132–133; the coefficient scaling is matched to the mean-square objective stated here.
    - title: 'Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §19.1.6'
      url: https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf
      locator: The finite kernel-ridge objective and coefficient-system formulation; the local normalization is derived in the proof rather than imported from the source's parameter notation.
---

## Statement

Let $\mathcal X$ be a set, let $k:\mathcal X\times\mathcal X\to\mathbb R$ be a real positive-semidefinite kernel, and let $\mathcal H$ be a real reproducing-kernel Hilbert space with kernel $k$. Take a finite ordered list $X=(x_i)_{i=1}^n$ with $n\ge1$, a response vector $y\in\mathbb R^n$, and $\lambda>0$. Put $K=(k(x_i,x_j))_{i,j=1}^n$ and $\tau=n\lambda$. Define $a=(K+\tau I_n)^{-1}y$, $f_0=\sum_{i=1}^n a_i k(\cdot,x_i)$, and $u=Ka$. Then $f_0$ is the unique minimizer over $f\in\mathcal H$ of

$$J(f)=\frac1n\sum_{i=1}^n(y_i-f(x_i))^2+\lambda\lVert f\rVert_{\mathcal H}^2,$$

and its training evaluation vector is $u=y-\tau a$.

## Statement references

[[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]: A real RKHS contains each kernel section and satisfies $\langle f,k(\cdot,x)\rangle_{\mathcal H}=f(x)$.

[[def-regularized-kernel-prediction-system]]: The coefficient and fitted vectors are defined by $a=(K+\tau I)^{-1}y$ and $u=Ka=y-\tau a$.

## Facts & Assumptions

**Given:** The kernel, RKHS, training list, response vector, and regularization parameter in the Statement.

[F1] [[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]: each section $k(\cdot,x_i)$ belongs to $\mathcal H$ and $\langle f,k(\cdot,x_i)\rangle_{\mathcal H}=f(x_i)$; every finite Gram matrix of $k$ is symmetric positive semidefinite.

[F2] [[def-regularized-kernel-prediction-system]]: $\tau=n\lambda$, the objective is the mean-square loss plus $\lambda\lVert f\rVert_{\mathcal H}^2$, and $a=(K+\tau I_n)^{-1}y$.

[F3] [[lem-regularized-gram-matrix-inverse-bound]]: for $K\succeq0$ and $\tau>0$, $K+\tau I_n$ is invertible.

## Proof

1.1 By [F1], $K$ is a real symmetric positive-semidefinite matrix. Let $a=(K+\tau I_n)^{-1}y$, which exists by [F2]–[F3], and set $f_0=\sum_i a_i k(\cdot,x_i)$. The reproducing identities give $f_0(x_j)=\sum_i a_i k(x_j,x_i)=(Ka)_j$, so if $r=y-(f_0(x_i))_{i=1}^n$, then $r=y-Ka=\tau a$ by $(K+\tau I_n)a=y$. [given, F1, F2, F3, construct, algebra]

2.1 Fix any $h\in\mathcal H$. The reproducing identities yield $\langle f_0,h\rangle_{\mathcal H}=\sum_i a_i h(x_i)=a^T(h(x_i))_{i=1}^n$. Expanding both squared norms in $J(f_0+h)-J(f_0)$ gives $\frac1n\lVert (h(x_i))_{i=1}^n\rVert_2^2-\frac2n r^T(h(x_i))_{i=1}^n+2\lambda a^T(h(x_i))_{i=1}^n+\lambda\lVert h\rVert_{\mathcal H}^2$. Substituting $r=\tau a=n\lambda a$ cancels the two cross terms, leaving $\frac1n\lVert(h(x_i))\rVert_2^2+\lambda\lVert h\rVert_{\mathcal H}^2\ge0$. [given, step 1.1, F1, F2, algebra]

3.1 Step 2.1 shows $J(f_0+h)\ge J(f_0)$ for every $h$, so $f_0$ is a minimizer. Equality forces $\lambda\lVert h\rVert_{\mathcal H}^2=0$, hence $h=0$ because $\lambda>0$; the minimizer is unique. The evaluation computation in step 1.1 gives its fitted vector $u=Ka=y-\tau a$. [given, step 1.1, step 2.1, algebra] ∎
