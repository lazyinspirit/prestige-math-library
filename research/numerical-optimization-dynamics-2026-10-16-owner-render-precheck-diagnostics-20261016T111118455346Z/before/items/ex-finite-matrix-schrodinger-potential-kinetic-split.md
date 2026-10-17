---
id: ex-finite-matrix-schrodinger-potential-kinetic-split
kind: example
title: "A finite-matrix Schrödinger split preserves norm"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-exact-split-flows-lie-strang-and-bracket
  - lem-lie-strang-local-error-expansions
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - def-matrix-product-and-identity-matrix
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - def-complex-numbers-and-arithmetic
  - lem-exponential-series-of-a-bounded-operator
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
generation:
  role: example
---

## Example

Realify $\mathbb C^2$ as $\mathbb R^4$ and let
$$H_K=\begin{pmatrix}0&0\\0&1\end{pmatrix},\qquad
V=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
A=-iH_K,\quad B=-iV.$$
Here $H_K$ is a two-level kinetic matrix and $V$ is a Hermitian potential coupling. The finite-dimensional Schrödinger equation is $\psi'=(A+B)\psi=-i(H_K+V)\psi$. Each exact kinetic or potential subflow preserves the Euclidean norm, so every exact Lie or Strang composition does as well. The local errors are nonzero for suitable initial data because the two generators do not commute; no spatial PDE or unbounded-operator conclusion is claimed.

## Facts & Assumptions

**Given:** The matrices $H_K,V,A,B$ and a differentiable solution $\psi(t)\in\mathbb C^2$ of the total or split Schrödinger equation.

[F1] [[def-exact-split-flows-lie-strang-and-bracket]]: Lie and Strang maps are compositions of the exact flows of the two component fields, and their bracket is $[a,b]=Db\,a-Da\,b$.

[F2] [[lem-lie-strang-local-error-expansions]]: the leading Lie defect is $\frac12h^2[a,b]$, and the Strang defect has the stated cubic double-bracket coefficient.

[F3] [[def-inner-product-norm]] and [[prop-standard-coordinate-inner-products]]: the standard complex Euclidean norm satisfies $\|\psi\|_2^2=\psi^*\psi$.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: the adjoint matrix is the conjugate transpose, and $H^*=H$ for a Hermitian matrix.

[F5] [[def-matrix-product-and-identity-matrix]]: matrix products have their standard associative coordinate meaning.

[F6] [[thm-algebra-of-derivatives]] and [[cor-mean-value-theorem]]: the product rule applies to real and imaginary coordinates, and a real differentiable scalar function with zero derivative is constant.

[F7] [[lem-exponential-series-of-a-bounded-operator]]: a finite matrix exponential is defined for every real time, equals $I$ at zero, and has derivative $Ae^{tA}$.

[A1] $H_K^*=H_K$ and $V^*=V$, as direct conjugate-transpose calculation verifies.

## Proof

1.1 Let $H$ be any of $H_K$, $V$, or $H_K+V$. Its exact flow exists for all real time by [F7], and every solution obeys $\psi'=-iH\psi$. By [F3]–[F6], differentiating the real function $\psi^*\psi$ gives $\frac{d}{dt}(\psi^*\psi)=(\psi')^*\psi+\psi^*\psi'=i\psi^*H^*\psi-i\psi^*H\psi=0,$ where [A1] supplies $H^*=H$. Therefore [F6] makes $\|\psi(t)\|_2^2$ constant on every admitted interval, and each exact subflow and the total flow preserve norm. [A1, F3, F4, F5, F6, F7, algebra]

1.2 Direct multiplication gives $C:=BA-AB=H_KV-VH_K=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\ne0.$ This is the linear matrix of $[a,b]$ by [F1]. Also $CA-AC=i\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad CB-BC=2i\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$ [A1, F1, F5, algebra]

2.1 By [F1], a Lie or Strang step is a composition of exact component flows. Each factor preserves norm by step 1.1, so the composition preserves norm by repeated application of the same equality. [F1, step 1.1]

3.1 For $\psi=e_1$, the Lie coefficient $\frac12C\psi$ is nonzero. The Strang coefficient $-\frac1{24}(CA-AC)\psi-\frac1{12}(CB-BC)\psi$ is also nonzero, since its first coordinate is $-i/6$. Applying [F2] shows the exact subflows retain norm while the Lie and Strang maps have their respective nonzero local splitting defects. [F2, step 1.2, algebra] ∎

