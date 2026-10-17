---
id: ex-nonnormal-transient-growth-exponential-step
kind: example
title: Exact exponential stepping captures nonnormal transient growth
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-matrix-product-and-identity-matrix
  - lem-exponential-series-of-a-bounded-operator
  - def-exponential-euler-and-etd2-step-maps
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - lem-exponential-series-has-infinite-radius
  - lem-finite-matrix-semilinear-variation-of-constants
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§1, equations (1.2)–(1.6), and §3, highly oscillatory/nonnormal evolution discussion, PDF pp. 1–4 and 30–42."
    - title: "Jitse Niesen and Will M. Wright, A Krylov Subspace Algorithm for Evaluating the Phi-Functions Appearing in Exponential Integrators, arXiv:0907.4631v2"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "§3.1, Arnoldi action approximation and work count, PDF pp. 4–5."
---

## Statement

Let
$$A=\begin{pmatrix}-1&2e\\0&-1\end{pmatrix},\qquad g=0,\qquad y(0)=\begin{pmatrix}0\\1\end{pmatrix}.$$
Here nonnormal means $AA^*\ne A^*A$. Compute the exact solution, show its norm grows above its initial value before decaying, and verify that exact-action exponential Euler and ETD2 reproduce it at every grid point.

## Facts & Assumptions

**Given:** The finite matrix, zero nonlinear term, initial state, and methods of [[def-exponential-euler-and-etd2-step-maps]].

[F1] [[def-exponential-euler-and-etd2-step-maps]]: when $g=0$, both exact maps reduce to $y\mapsto e^{hA}y$.

[F2] [[lem-exponential-series-of-a-bounded-operator]]: the finite-matrix exponential is defined by its convergent series and satisfies $e^{(r+s)A}=e^{rA}e^{sA}$.

[F3] [[def-real-exponential-function-and-e]] and [[lem-exponential-series-has-infinite-radius]]: $e^t$ is defined by its convergent power series.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]], and [[def-matrix-product-and-identity-matrix]]: $A^*$ is the conjugate transpose and products are the usual matrix products.

[F5] [[def-inner-product-norm]] and [[prop-standard-coordinate-inner-products]]: $\|v\|_2^2=v^*v$ in standard complex coordinates.

[F6] [[cor-exponential-reciprocal-and-positivity]]: $e^{-t}=1/e^t$ and $e^t>0$ for every real $t$.

[F7] [[lem-finite-matrix-semilinear-variation-of-constants]]: when $g=0$, a solution satisfies $y(t)=e^{tA}y(0)$.

[A1] The exact IVP starts at the stated $y(0)$ and has $g=0$.

## Verification

1.1 Write $A=-I+N$ with $N=\begin{pmatrix}0&2e\\0&0\end{pmatrix}$; direct multiplication gives $N^2=0$ [F4]. The formula holds for $n=1$ since $A=-I+N$. If $A^n=(-1)^nI+n(-1)^{n-1}N$, multiplying by $A=-I+N$ and using $N^2=0$ gives $A^{n+1}=(-1)^{n+1}I+(n+1)(-1)^nN$, so induction proves it for every $n\ge1$. Substituting in the absolutely convergent matrix-exponential series [F2] gives $e^{tA}=e^{-t}I+\sum_{n\ge1}t^n(-1)^{n-1}N/(n-1)!=e^{-t}(I+tN)$ by the scalar series [F3]. [given, F2, F3, F4, induction, algebra]

2.1 By [F7] and step 1.1, the solution is $y(t)=e^{-t}(2et,1)^{\mathsf T}$. Direct multiplication using [F4] gives $AA^*=\begin{pmatrix}1+4e^2&-2e\\-2e&1\end{pmatrix}$ and $A^*A=\begin{pmatrix}1&-2e\\-2e&1+4e^2\end{pmatrix}$, which differ, so $A$ is nonnormal. By [F5] and [F6], its initial norm is $1$, whereas $\|y(1)\|_2=e^{-1}\sqrt{4e^2+1}>2$. For $t>0$, the exponential series gives $e^t\ge t^2/2$, and [F6] gives $e^{-t}=1/e^t\le2/t^2$; hence $e^{-t}\to0$ and $te^{-t}\le2/t\to0$, so $y(t)\to0$. [A1, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 By [F1], every exact-action step is multiplication by $e^{hA}$. Repeated use of the semigroup identity in [F2] gives $(e^{hA})^n=e^{nhA}$, so the method returns $y(t_n)$ at every grid point. The transient growth is therefore present in the exact linear flow and is not removed by exponentiating this nonnormal matrix. [F1, F2, step 1.1, algebra, induction] ∎
