---
id: ex-three-pixel-blur-landweber-reconstruction
kind: example
title: Landweber reconstructs a three-pixel blurred signal
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-landweber-iteration-with-discrepancy-stopping
  - lem-landweber-filter-and-residual-identities
  - def-euclidean-inner-product
  - def-matrix-product-and-identity-matrix
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 7, §§7.1–7.3, printed pp. 66–70 / PDF pp. 78–82: Landweber filter factors and image-reconstruction interpretation."
---

## Example

Consider the symmetric three-pixel averaging blur
$$A=\frac14\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}.$$
For the zero-sum signal $x^\dagger=(1,0,-1)^T$, exact data are
$y=Ax^\dagger=\tfrac14x^\dagger$. With $x_0=0$ and $\omega=1$, the
Landweber iterates are $x_k=(1-(15/16)^k)x^\dagger$: the first reconstruction
is only $x_1=\tfrac1{16}x^\dagger$, while the exact signal is recovered in the
limit.

## Facts & Assumptions

**Given:** The matrix, signal, exact data, and iteration described in the
Example.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the Hilbert-adjoint supplier used in Landweber iteration.

[F1] [[alg-landweber-iteration-with-discrepancy-stopping]]: Its infinite mathematical path satisfies $x_{k+1}=x_k+\omega A^T(y-Ax_k)$ for real finite-dimensional data.

[F2] [[lem-landweber-filter-and-residual-identities]]: $x^\dagger-x_k=(I-\omega A^TA)^kx^\dagger$ for exact data.

[F3] [[def-euclidean-inner-product]]: The Euclidean inner product is $u^Tv$, with norm $\|u\|_2=(u^Tu)^{1/2}$.

[F4] [[def-matrix-product-and-identity-matrix]]: Matrix multiplication acts on a vector by the coordinate sums of the rows.

[F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: The induced operator norm is $\sup_{\|v\|_2\le1}\|Av\|_2$.

## Verification

**Given:** The displayed matrix $A$, vector $x^\dagger$, $x_0=0$, and
$\omega=1$.

1.1 Let $\mathbf 1=(1,1,1)^T$. By [F4], $A=\tfrac14(I+\mathbf1\mathbf1^T)$. Thus $A\mathbf1=\mathbf1$, and for every $v\perp\mathbf1$ one has $\mathbf1^Tv=0$ and $Av=\tfrac14v$. These orthogonal subspaces span $\mathbb R^3$, so [F3]–[F5] give $\|A\|=1$ and $0<1<2/\|A\|^2$. [F3, F4, F5, given, algebra]

2.1 Since $x^\dagger$ is a zero-sum eigenvector, $A^TAx^\dagger=\tfrac1{16}x^\dagger$. Applying [F2] gives $x_k=[1-(1-1/16)^k]x^\dagger=[1-(15/16)^k]x^\dagger$. At $k=1$ this is $\tfrac1{16}(1,0,-1)^T$, and the scalar coefficient tends to $1$ as $k\to\infty$. [A1, F1, F2, step 1.1, algebra] ∎
